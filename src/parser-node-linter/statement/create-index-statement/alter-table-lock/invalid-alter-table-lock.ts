import {SyntaxKind, AlterTableLock} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const InvalidAlterTableLock : LintRule<AlterTableLock> = {
    syntaxKind : SyntaxKind.AlterTableLock,
    onEnter : (node, lintResult) => {
        const value = node.identifier.identifier.toUpperCase();
        switch (value) {
            case "NONE":
            case "SHARED":
            case "EXCLUSIVE":
            case "DEFAULT":
                return;
            default:
                pushSyntacticErrorAt(
                    lintResult,
                    node.identifier.start,
                    node.identifier.end,
                    [],
                    DiagnosticMessages.InvalidAlterTableLock
                );
        }
    },
}
