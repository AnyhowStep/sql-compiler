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
                identifier : data[1],
                tableReference : data[2],
            };
        }
    )

makeCustomRule(CustomSyntaxKind.OdbcNestedTableReference)
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
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            union(
                SyntaxKind.NamedTableFactor,
                SyntaxKind.DerivedTableFactor,
                SyntaxKind.Join,
                SyntaxKind.OdbcTableReference,
                SyntaxKind.TableReferenceList,
            ),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : TableReference => {
            return data[1][0];
        }
    )
