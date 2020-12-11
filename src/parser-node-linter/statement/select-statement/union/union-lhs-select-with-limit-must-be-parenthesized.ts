import {Union, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const UnionLhsSelectWithLimitMustBeParenthesized : LintRule<Union> = {
    syntaxKind : SyntaxKind.Union,
    onEnter : (node, lintResult) => {
        if (node.lhs.syntaxKind != SyntaxKind.Select) {
            if (node.lhs.rhs.limit != undefined && !node.lhs.rhs.parenthesized) {
                pushSyntacticErrorAt(
                    lintResult,
                    node.lhs.rhs.limit.start,
                    node.lhs.rhs.limit.end,
                    [],
                    DiagnosticMessages.UnionLhsSelectWithLimitMustBeParenthesized
                );
            }
            return;
        }
        if (node.lhs.limit != undefined && !node.lhs.parenthesized) {
            pushSyntacticErrorAt(
                lintResult,
                node.lhs.limit.start,
                node.lhs.limit.end,
                [],
                DiagnosticMessages.UnionLhsSelectWithLimitMustBeParenthesized
            );
        }
    },
}
