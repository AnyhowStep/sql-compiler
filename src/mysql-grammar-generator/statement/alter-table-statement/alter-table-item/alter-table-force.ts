import {AlterTableForce, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {makeCustomRule} from "../../../factory";
import {getTextRange} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8345
 */
makeCustomRule(SyntaxKind.AlterTableForce)
    .addSubstitution(
        [
            TokenKind.FORCE,
        ] as const,
        (data) : AlterTableForce => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableForce,
            };
        }
    )
