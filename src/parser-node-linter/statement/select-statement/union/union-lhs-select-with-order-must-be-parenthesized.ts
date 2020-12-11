import {Union, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const UnionLhsSelectWithOrderMustBeParenthesized : LintRule<Union> = {
    syntaxKind : SyntaxKind.Union,
    onEnter : (node, lintResult) => {
        if (node.lhs.syntaxKind != SyntaxKind.Select) {
            return;
        }
        if (node.lhs.order != undefined && !node.lhs.parenthesized) {
            pushSyntacticErrorAt(
                lintResult,
                node.lhs.order.start,
                node.lhs.order.end,
                [],
                DiagnosticMessages.UnionLhsSelectWithOrderMustBeParenthesized
            );
        }
    },
}
