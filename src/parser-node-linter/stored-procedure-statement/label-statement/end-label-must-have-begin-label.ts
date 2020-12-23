import {LabelStatement, SyntaxKind} from "../../../parser-node";
import {LintRule} from "../../linter";
import {pushSyntacticErrorAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";

export const EndLabelMustHaveBeginLabel : LintRule<LabelStatement> = {
    syntaxKind : SyntaxKind.LabelStatement,
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
