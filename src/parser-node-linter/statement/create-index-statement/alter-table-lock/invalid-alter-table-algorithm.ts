import {SyntaxKind, AlterTableAlgorithm} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const InvalidAlterTableAlgorithm : LintRule<AlterTableAlgorithm> = {
    syntaxKind : SyntaxKind.AlterTableAlgorithm,
    onEnter : (node, lintResult) => {
        const value = node.identifier.identifier.toUpperCase();
        switch (value) {
            case "INPLACE":
            case "COPY":
            case "DEFAULT":
                return;
            default:
                pushSyntacticErrorAt(
                    lintResult,
                    node.identifier.start,
                    node.identifier.end,
                    [],
                    DiagnosticMessages.InvalidAlterTableAlgorithm
                );
        }
    },
}
