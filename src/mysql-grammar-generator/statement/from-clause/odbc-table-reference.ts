import {OdbcTableReference, SyntaxKind, TableReference} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union} from "../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";
import {TokenKind} from "../../../scanner";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10404
 */
makeCustomRule(SyntaxKind.OdbcTableReference)
    .addSubstitution(
        [
            TokenKind.OpenBrace,
            SyntaxKind.Identifier,
            CustomSyntaxKind.OdbcNestedTableReference,
            TokenKind.CloseBrace,
        ] as const,
        (data) : OdbcTableReference => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.OdbcTableReference,
                parenthesized : false,
                identifier : data[1],
                tableReference : data[2],
            };
        }
    )

makeCustomRule(CustomSyntaxKind.OdbcNestedTableReference_Unparenthesized)
    .addSubstitution(
        [
            union(
                SyntaxKind.NamedTableFactor,
                SyntaxKind.DerivedTableFactor,
                SyntaxKind.Join,
                //SyntaxKind.OdbcTableReference,
                //SyntaxKind.TableReferenceList,
            ),
        ] as const,
        (data) : TableReference => {
            return data[0][0];
        }
    )

makeCustomRule(CustomSyntaxKind.OdbcNestedTableReference_Parenthesized)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            CustomSyntaxKind.OdbcNestedTableReference_Parenthesized,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : TableReference => {
            return data[1];
        }
    )
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            union(
                SyntaxKind.NamedTableFactor,
                SyntaxKind.DerivedTableFactor,
                SyntaxKind.Join,
                SyntaxKind.OdbcTableReference,
                CustomSyntaxKind.TableReferenceList_2OrMore,
            ),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : TableReference => {
            if (data[1][0].syntaxKind == SyntaxKind.OdbcTableReference) {
                return {
                    ...data[1][0],
                    parenthesized : true,
                };
            } else {
                return data[1][0];
            }
        }
    )

makeCustomRule(CustomSyntaxKind.OdbcNestedTableReference)
    .addSubstitution(
        [
            CustomSyntaxKind.OdbcNestedTableReference_Unparenthesized,
        ] as const,
        (data) : TableReference => {
            return data[0];
        }
    )
    .addSubstitution(
        [
            CustomSyntaxKind.OdbcNestedTableReference_Parenthesized,
        ] as const,
        (data) : TableReference => {
            return data[0];
        }
    )
