import {SyntaxKind, AlterFunctionStatement} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const AlterFunctionStatementCannotSpecifyDeterministic : LintRule<AlterFunctionStatement> = {
    syntaxKind : SyntaxKind.AlterFunctionStatement,
    onEnter : (node, lintResult) => {
        if (node.characteristics.deterministic != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.characteristics.deterministic.start,
                node.characteristics.deterministic.end,
                [],
                DiagnosticMessages.CannotSpecifyDeterministic
            );
        }
    },
}
