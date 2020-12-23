import {BlockStatement, SyntaxKind} from "../../../parser-node";
import {LintRule} from "../../linter";
import {pushSyntacticErrorAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";

export const BlockStatementBeginLabelEndLabelMustHaveSameIdentifier : LintRule<BlockStatement> = {
    syntaxKind : SyntaxKind.BlockStatement,
    onEnter : (node, lintResult) => {
        if (node.beginLabel == undefined || node.endLabel == undefined) {
            return;
        }
        if (node.beginLabel.identifier.toUpperCase() != node.endLabel.identifier.toUpperCase()) {
            pushSyntacticErrorAt(
                lintResult,
                node.endLabel.start,
                node.endLabel.end,
                [
                    node.beginLabel
                ],
                DiagnosticMessages.BeginLabelEndLabelMustHaveSameIdentifier,
            );
            return;
        }
        if (node.beginLabel.identifier != node.endLabel.identifier) {
            pushSyntacticErrorAt(
                lintResult,
                node.endLabel.start,
                node.endLabel.end,
                [
                    node.beginLabel
                ],
                DiagnosticMessages.BeginLabelEndLabelShouldHaveSameIdentifierCaseSensitive,
            );
        }
    },
}
