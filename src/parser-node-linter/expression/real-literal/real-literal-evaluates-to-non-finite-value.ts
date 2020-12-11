import {RealLiteral, SyntaxKind} from "../../../parser-node";
import {LintRule} from "../../linter";
import {pushSyntacticErrorAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";

export const RealLiteralEvaluatesToNonFiniteValue : LintRule<RealLiteral> = {
    syntaxKind : SyntaxKind.RealLiteral,
    onEnter : (node, lintResult) => {
        if (!isFinite(node.value)) {
            pushSyntacticErrorAt(
                lintResult,
                node.start,
                node.end,
                [],
                DiagnosticMessages.RealLiteralEvaluatesToNonFiniteValue
            );
        }
    },
}
