import {CheckDefinition, SyntaxKind} from "../../../parser-node";
import {ReverseTokenKind, TokenKind} from "../../../scanner";
import {getTextRange, pushSyntacticErrorAt} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional} from "../../../nearley-wrapper";
import {DiagnosticMessages} from "../../diagnostic-messages";

/**
 * @todo MySQL 8.0 Syntax
 * https://dev.mysql.com/doc/refman/8.0/en/create-table-check-constraints.html
 */
makeCustomRule(SyntaxKind.CheckDefinition)
    .addSubstitution(
        [
            optional([
                TokenKind.CONSTRAINT,
                SyntaxKind.Identifier,
            ] as const),
            TokenKind.CHECK,
            TokenKind.OpenParentheses,
            CustomSyntaxKind.Expression,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : CheckDefinition => {
            const [constraint, , , expr,] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CheckDefinition,
                constraintName : (
                    constraint == undefined ?
                    undefined :
                    constraint[1]
                ),
                expr,
            };
        }
    )

/**
 * @todo MySQL 8.0 Syntax
 * https://dev.mysql.com/doc/refman/8.0/en/create-table-check-constraints.html
 */
makeCustomRule(CustomSyntaxKind.ColumnCheckDefinition)
    .addSubstitution(
        [SyntaxKind.CheckDefinition] as const,
        (data) : CheckDefinition => {
            const [checkDefinition] = data;
            if (checkDefinition.constraintName != undefined) {
                pushSyntacticErrorAt(
                    checkDefinition,
                    checkDefinition.start,
                    /**
                     * @todo Have tokens be part of the parse tree?
                     */
                    checkDefinition.start + ReverseTokenKind[TokenKind.CONSTRAINT].length,
                    [],
                    DiagnosticMessages.UnexpectedSyntaxKind,
                    "CONSTRAINT"
                )
            }
            return checkDefinition;
        }
    )
