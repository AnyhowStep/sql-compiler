import {Union, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const UnionDistinctOverwritesLhsUnionAll : LintRule<Union> = {
    syntaxKind : SyntaxKind.Union,
    onEnter : (node, lintResult) => {
        if (!node.distinct.value) {
            return;
        }
        const lhs = node.lhs;
        if (lhs.syntaxKind != SyntaxKind.Union) {
            return;
        }

        if (!lhs.distinct.value) {
            pushSyntacticErrorAt(
                lintResult,
                node.distinct.start,
                node.distinct.end,
                [
                    lhs.distinct,
                ],
                DiagnosticMessages.UnionDistinctOverwritesLhsUnionAll
            );
        }
    },
}
