import {SyntaxKind, IndexPart, SortDirection} from "../../../../../parser-node";
import {LintRule} from "../../../../linter";
import {pushSyntacticErrorAt} from "../../../../../parse-util";
import {DiagnosticMessages} from "../../../../diagnostic-messages";

export const IndexPartSortDirectionDescIgnored : LintRule<IndexPart> = {
    syntaxKind : SyntaxKind.IndexPart,
    onEnter : (node, lintResult) => {
        if (node.sortDirection.value == SortDirection.DESC) {
            pushSyntacticErrorAt(
                lintResult,
                node.sortDirection.start,
                node.sortDirection.end,
                [],
                DiagnosticMessages.IndexPartSortDirectionDescIgnored
            );
        }
    },
}
