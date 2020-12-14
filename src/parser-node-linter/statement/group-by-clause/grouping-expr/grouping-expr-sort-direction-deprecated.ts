import {GroupingExpr, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const GroupingExprSortDirectionDeprecated : LintRule<GroupingExpr> = {
    syntaxKind : SyntaxKind.GroupingExpr,
    onEnter : (node, lintResult) => {
        if (node.sortDirection != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.sortDirection.start,
                node.sortDirection.end,
                [],
                DiagnosticMessages.GroupingExprSortDirectionDeprecated
            );
        }
    },
}
