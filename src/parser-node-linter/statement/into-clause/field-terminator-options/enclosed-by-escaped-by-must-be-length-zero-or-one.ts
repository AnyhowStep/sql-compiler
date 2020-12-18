import {FieldTerminatorOptions, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

/**
 *
 * > Any of the field- or line-handling options can specify an empty string ('').
 * >
 * > If not empty, the `FIELDS [OPTIONALLY] ENCLOSED BY` and `FIELDS ESCAPED BY` values must be a single character.
 * >
 * > The `FIELDS TERMINATED BY`, `LINES STARTING BY`, and `LINES TERMINATED BY` values can be more than one character.
 *
 * https://dev.mysql.com/doc/refman/5.7/en/load-data.html
 */
export const EnclosedByEscapedByMustBeLengthZeroOrOne : LintRule<FieldTerminatorOptions> = {
    syntaxKind : SyntaxKind.FieldTerminatorOptions,
    onEnter : (node, lintResult) => {
        if (node.enclosedBy.value.length > 1) {
            pushSyntacticErrorAt(
                lintResult,
                node.enclosedBy.start,
                node.enclosedBy.end,
                [],
                DiagnosticMessages.EnclosedByEscapedByMustBeLengthZeroOrOne
            );
        }
        if (node.escapedBy.value.length > 1) {
            pushSyntacticErrorAt(
                lintResult,
                node.escapedBy.start,
                node.escapedBy.end,
                [],
                DiagnosticMessages.EnclosedByEscapedByMustBeLengthZeroOrOne
            );
        }
    },
}
