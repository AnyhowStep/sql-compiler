import {SyntaxKind, AlterTableModifyColumn} from "../../../../../parser-node";
import {LintRule} from "../../../../linter";
import {pushSyntacticErrorAt} from "../../../../../parse-util";
import {DiagnosticMessages} from "../../../../diagnostic-messages";

export const AlterTableModifyColumnUnexpectedReferences : LintRule<AlterTableModifyColumn> = {
    syntaxKind : SyntaxKind.AlterTableModifyColumn,
    onEnter : (node, lintResult) => {
        if (node.columnDefinition.foreignKeyReferenceDefinition == undefined) {
            return;
        }

        pushSyntacticErrorAt(
            lintResult,
            node.columnDefinition.foreignKeyReferenceDefinition.start,
            node.columnDefinition.foreignKeyReferenceDefinition.end,
            [],
            DiagnosticMessages.UnexpectedSyntaxKind,
            "REFERENCES"
        );
    },
}
