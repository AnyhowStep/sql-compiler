import {Select, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const WhereClauseRequiresFromClause : LintRule<Select> = {
    syntaxKind : SyntaxKind.Select,
    onEnter : (node, lintResult) => {
        if (node.whereClause != undefined && node.fromClause == undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.whereClause.start,
                node.whereClause.end,
                [],
                DiagnosticMessages.WhereClauseRequiresFromClause
            );
        }
    },
}
