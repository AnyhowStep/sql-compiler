import {SyntaxKind, AlterEventStatement} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const AlterEventStatementEmpty : LintRule<AlterEventStatement> = {
    syntaxKind : SyntaxKind.AlterEventStatement,
    onEnter : (node, lintResult) => {
        if (
            node.schedule == undefined &&
            node.onCompletionPreserve == undefined &&
            node.newEventIdentifier == undefined &&
            node.eventStatus == undefined &&
            node.comment == undefined &&
            node.statement == undefined
        ) {
            pushSyntacticErrorAt(
                lintResult,
                node.start,
                node.end,
                [],
                DiagnosticMessages.AlterEventStatementEmpty
            );
        }
    },
}
