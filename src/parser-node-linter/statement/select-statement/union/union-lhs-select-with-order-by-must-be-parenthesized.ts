import {Union, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const UnionLhsSelectWithOrderByMustBeParenthesized : LintRule<Union> = {
    syntaxKind : SyntaxKind.Union,
    onEnter : (node, lintResult) => {
        if (node.lhs.syntaxKind != SyntaxKind.Select) {
            if (node.lhs.rhs.order != undefined && !node.lhs.rhs.parenthesized) {
                pushSyntacticErrorAt(
                    lintResult,
                    node.lhs.rhs.order.start,
                    node.lhs.rhs.order.end,
                    [],
                    DiagnosticMessages.UnionLhsSelectWithOrderByMustBeParenthesized
                );
            }
            return;
        }
        if (node.lhs.order != undefined && !node.lhs.parenthesized) {
            pushSyntacticErrorAt(
                lintResult,
                node.lhs.order.start,
                node.lhs.order.end,
                [],
                DiagnosticMessages.UnionLhsSelectWithOrderByMustBeParenthesized
            );
        }
    },
}
