import {BlockStatement, SyntaxKind} from "../../../parser-node";
import {LintRule} from "../../linter";
import {pushSyntacticErrorAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";

export const BlockStatementEndLabelMustHaveBeginLabel : LintRule<BlockStatement> = {
    syntaxKind : SyntaxKind.BlockStatement,
    onEnter : (node, lintResult) => {
        if (node.endLabel != undefined && node.beginLabel == undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.endLabel.start,
                node.endLabel.end,
                [],
                DiagnosticMessages.EndLabelMustHaveBeginLabel,
            );
        }
    },
}
