import {IntegerLiteral, SyntaxKind} from "../../../parser-node";
import {LintRule} from "../../linter";
import {pushSyntacticErrorAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";
import {BigIntUnsignedMaxValue} from "../../constants";

export const IntegerLiteralValueTooHigh : LintRule<IntegerLiteral> = {
    syntaxKind : SyntaxKind.IntegerLiteral,
    onEnter : (node, lintResult) => {
        if (node.value > BigIntUnsignedMaxValue) {
            pushSyntacticErrorAt(
                lintResult,
                node.start,
                node.end,
                [],
                DiagnosticMessages.IntegerLiteralValueTooHigh,
                BigIntUnsignedMaxValue.toString()
            );
        }
    },
}
