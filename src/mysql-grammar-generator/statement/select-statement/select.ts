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
    /**
     * We're being very lax with our parsing rules here.
     * We'll check for parse errors with `parser-node-linter`.
     */
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
                    /**
                     * `AsteriskSelectItem` is actually not allowed here.
                     * But we allow it and catch it in `parser-node-linter`
                     */
                    SyntaxKind.AsteriskSelectItem,
                    SyntaxKind.TableAsteriskSelectItem,
                    SyntaxKind.SelectItem,
                ),
            ] as const),

            optional(SyntaxKind.IntoClause),

            optional(SyntaxKind.FromClause),
            optional(SyntaxKind.WhereClause),
            optional(SyntaxKind.GroupByClause),
            optional(SyntaxKind.HavingClause),

            optional(SyntaxKind.OrderExprList),
            optional(SyntaxKind.Limit),

            optional(SyntaxKind.ProcedureAnalyseClause),

            optional(SyntaxKind.IntoClause),

        ] as const,
        (data) : Select => {
            const [
                ,
                selectOptions,
                firstSelectItem,
                trailingSelectItems,
                intoClauseA,
                fromClause,
                whereClause,
                groupByClause,
                havingClause,
                order,
                limit,
                procedureAnalyseClause,
                intoClauseB,
            ] = data;

            /**
             * Hack to resolve ambiguities related to `INTO` clause.
             */
            const [
                preIntoClause,
                postIntoClause
            ] = (
                (
                    intoClauseA == undefined &&
                    intoClauseB != undefined &&
                    [fromClause, whereClause, groupByClause, havingClause, order, limit, procedureAnalyseClause]
                        .every(item => item == undefined)
                ) ?
                [intoClauseB, undefined] :
                [intoClauseA, intoClauseB]
            );

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
                preIntoClause : preIntoClause ?? undefined,
                fromClause : fromClause ?? undefined,
                whereClause : whereClause ?? undefined,
                groupByClause : groupByClause ?? undefined,
                havingClause : havingClause ?? undefined,
                order : order ?? undefined,
                limit : limit ?? undefined,
                procedureAnalyseClause : procedureAnalyseClause ?? undefined,
                postIntoClause : postIntoClause ?? undefined,
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
