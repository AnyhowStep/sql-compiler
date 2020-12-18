import {Select, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const CannotSpecifyTwoIntoClauses : LintRule<Select> = {
    syntaxKind : SyntaxKind.Select,
    onEnter : (node, lintResult) => {
        if (node.preIntoClause != undefined && node.postIntoClause != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.postIntoClause.start,
                node.postIntoClause.end,
                [
                    node.preIntoClause
                ],
                DiagnosticMessages.CannotSpecifyTwoIntoClauses
            );
        }
    },
}
