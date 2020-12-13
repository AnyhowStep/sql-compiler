import {SyntaxKind, TableReference} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union} from "../../../nearley-wrapper";
import {TokenKind} from "../../../scanner";

makeCustomRule(CustomSyntaxKind.TableReference)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10409
     */
    .addSubstitution(
        [
            union(
                SyntaxKind.NamedTableFactor,
                SyntaxKind.DerivedTableFactor,
                SyntaxKind.Join,
                SyntaxKind.OdbcTableReference,
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
                CustomSyntaxKind.TableReferenceList_2OrMore,
            ),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : TableReference => {
            return data[1][0];
        }
    )
