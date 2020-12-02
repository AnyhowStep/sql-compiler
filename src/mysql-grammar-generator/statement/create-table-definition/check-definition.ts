import {CheckDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

/**
 * @todo MySQL 8.0 Syntax
 * https://dev.mysql.com/doc/refman/8.0/en/create-table-check-constraints.html
 */
makeCustomRule(SyntaxKind.CheckDefinition)
    .addSubstitution(
        [
            TokenKind.CHECK,
            TokenKind.OpenParentheses,
            CustomSyntaxKind.Expression,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : CheckDefinition => {
            const [, , expr,] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CheckDefinition,
                expr,
            };
        }
    )
