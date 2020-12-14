import {HavingClause, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10793
 */
makeCustomRule(SyntaxKind.HavingClause)
    .addSubstitution(
        [
            TokenKind.HAVING,
            CustomSyntaxKind.Expression,
        ] as const,
        (data) : HavingClause => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.HavingClause,

                expr : data[1],
            };
        }
    )
