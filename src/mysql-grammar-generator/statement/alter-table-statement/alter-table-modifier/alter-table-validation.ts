import {AlterTableValidation, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {makeCustomRule} from "../../../factory";
import {getTextRange} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8027
 */
makeCustomRule(SyntaxKind.AlterTableValidation)
    .addSubstitution(
        [
            TokenKind.WITH,
            TokenKind.VALIDATION,
        ] as const,
        (data) : AlterTableValidation => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableValidation,
                withValidation : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.WITHOUT,
            TokenKind.VALIDATION,
        ] as const,
        (data) : AlterTableValidation => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableValidation,
                withValidation : false,
            };
        }
    )
