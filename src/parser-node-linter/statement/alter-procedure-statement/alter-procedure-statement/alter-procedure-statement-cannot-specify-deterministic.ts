import {SyntaxKind, AlterProcedureStatement} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const AlterProcedureStatementCannotSpecifyDeterministic : LintRule<AlterProcedureStatement> = {
    syntaxKind : SyntaxKind.AlterProcedureStatement,
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
