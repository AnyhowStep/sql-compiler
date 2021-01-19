import {SyntaxKind, AlterTableChangeColumn} from "../../../../../parser-node";
import {LintRule} from "../../../../linter";
import {pushSyntacticErrorAt} from "../../../../../parse-util";
import {DiagnosticMessages} from "../../../../diagnostic-messages";

export const AlterTableChangeColumnUnexpectedCheck : LintRule<AlterTableChangeColumn> = {
    syntaxKind : SyntaxKind.AlterTableChangeColumn,
    onEnter : (node, lintResult) => {
        if (node.columnDefinition.checkDefinition == undefined) {
            return;
        }

        pushSyntacticErrorAt(
            lintResult,
            node.columnDefinition.checkDefinition.start,
            node.columnDefinition.checkDefinition.end,
            [],
            DiagnosticMessages.UnexpectedSyntaxKind,
            "CHECK"
        );
    },
}
