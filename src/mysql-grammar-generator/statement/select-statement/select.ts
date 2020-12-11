import {AsteriskSelectItem, Select, SelectItem, SyntaxKind, TableAsteriskSelectItem} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../../parse-util";

/**
 * Unparenthesized `SELECT`.
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9051
 */
makeCustomRule(SyntaxKind.Select)
    .addSubstitution(
        [
            TokenKind.SELECT,
            SyntaxKind.SelectOptions,
            union(
                SyntaxKind.AsteriskSelectItem,
                SyntaxKind.TableAsteriskSelectItem,
                SyntaxKind.SelectItem,
            ),
            zeroOrMore([
                TokenKind.Comma,
                union(
                    SyntaxKind.TableAsteriskSelectItem,
                    SyntaxKind.SelectItem,
                ),
            ] as const),

            optional(SyntaxKind.OrderExprList),
            optional(SyntaxKind.Limit),
        ] as const,
        (data) : Select => {
            const [
                ,
                selectOptions,
                firstSelectItem,
                trailingSelectItems,
                order,
                limit,
            ] = data;

            const selectItems = toNodeArray(
                [...firstSelectItem, ...trailingSelectItems]
                    .flat(2)
                    .filter((item) : item is SelectItem|AsteriskSelectItem|TableAsteriskSelectItem => {
                        return "syntaxKind" in item;
                    }),
                SyntaxKind.SelectItemList,
                getTextRange([firstSelectItem, trailingSelectItems])
            )
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Select,
                parenthesized : false,
                selectOptions,
                selectItems,
                order : order ?? undefined,
                limit : limit ?? undefined,
            };
        }
    );

/**
 * Parenthesized `SELECT`.
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9023
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9029
 */
makeCustomRule(CustomSyntaxKind.ParenthesizedSelect)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            CustomSyntaxKind.ParenthesizedSelect,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : Select => {
            return data[1];
        }
    )
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            SyntaxKind.Select,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : Select => {
            return {
                ...data[1],
                parenthesized : true,
            };
        }
    )
