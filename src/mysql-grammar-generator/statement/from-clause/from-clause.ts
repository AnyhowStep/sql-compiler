import {FromClause, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.FromClause)
    .addSubstitution(
        [
            TokenKind.FROM,
            SyntaxKind.TableReferenceList,
        ] as const,
        (data) : FromClause => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.FromClause,

                tableReferenceList : data[1],
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9136
     */
    .addSubstitution(
        [
            TokenKind.FROM,
            TokenKind.DUAL,
        ] as const,
        (data) : FromClause => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.FromClause,

                tableReferenceList : {
                    ...getTextRange(data[1]),
                    syntaxKind : SyntaxKind.Value,
                    value : "DUAL",
                },
            };
        }
    )
