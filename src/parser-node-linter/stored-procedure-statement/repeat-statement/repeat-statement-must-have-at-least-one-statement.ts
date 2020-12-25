import {RepeatStatement, SyntaxKind} from "../../../parser-node";
import {LintRule} from "../../linter";
import {pushSyntacticErrorAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";

export const RepeatStatementMustHaveAtLeastOneStatement : LintRule<RepeatStatement> = {
    syntaxKind : SyntaxKind.RepeatStatement,
    onEnter : (node, lintResult) => {
        if (node.statements.length == 0) {
            pushSyntacticErrorAt(
                lintResult,
                node.start,
                node.end,
                [],
                DiagnosticMessages.MustHaveAtLeastOneStatement,
                "REPEAT"
            );
        }
    },
}
