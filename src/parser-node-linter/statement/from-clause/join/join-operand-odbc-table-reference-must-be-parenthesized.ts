import {SyntaxKind, Join} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const JoinOperandOdbcTableReferenceMustBeParenthesized : LintRule<Join> = {
    syntaxKind : SyntaxKind.Join,
    onEnter : (node, lintResult) => {
        if (node.lhs.syntaxKind == SyntaxKind.OdbcTableReference && !node.lhs.parenthesized) {
            pushSyntacticErrorAt(
                lintResult,
                node.lhs.start,
                node.lhs.end,
                [],
                DiagnosticMessages.JoinOperandOdbcTableReferenceMustBeParenthesized,
            );
        }

        if (node.rhs.syntaxKind == SyntaxKind.OdbcTableReference && !node.rhs.parenthesized) {
            pushSyntacticErrorAt(
                lintResult,
                node.rhs.start,
                node.rhs.end,
                [],
                DiagnosticMessages.JoinOperandOdbcTableReferenceMustBeParenthesized,
            );
        }
    },
}
