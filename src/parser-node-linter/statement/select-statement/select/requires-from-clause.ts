import {Select, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const RequiresFromClause : LintRule<Select> = {
    syntaxKind : SyntaxKind.Select,
    onEnter : (node, lintResult) => {
        if (node.fromClause != undefined) {
            return;
        }

        if (node.whereClause != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.whereClause.start,
                node.whereClause.end,
                [],
                DiagnosticMessages.WhereClauseRequiresFromClause
            );
        }

        if (node.groupByClause != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.groupByClause.start,
                node.groupByClause.end,
                [],
                DiagnosticMessages.GroupByClauseRequiresFromClause
            );
        }

        if (node.havingClause != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.havingClause.start,
                node.havingClause.end,
                [],
                DiagnosticMessages.HavingClauseRequiresFromClause
            );
        }

        if (node.procedureAnalyseClause != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.procedureAnalyseClause.start,
                node.procedureAnalyseClause.end,
                [],
                DiagnosticMessages.ProcedureAnalyseClauseRequiresFromClause
            );
        }
    },
}
