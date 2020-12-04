import {CheckDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
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
            optional(CustomSyntaxKind.Constraint),
            TokenKind.CHECK,
            TokenKind.OpenParentheses,
            CustomSyntaxKind.Expression,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : CheckDefinition => {
            const [constraintName, , , expr,] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CheckDefinition,
                constraintName : (
                    constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName :
                    undefined
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
                    checkDefinition.constraintName,
                    checkDefinition.constraintName.start,
                    checkDefinition.constraintName.end,
                    [],
                    DiagnosticMessages.UnexpectedSyntaxKind,
                    "CONSTRAINT"
                )
            }
            return checkDefinition;
        }
    )
