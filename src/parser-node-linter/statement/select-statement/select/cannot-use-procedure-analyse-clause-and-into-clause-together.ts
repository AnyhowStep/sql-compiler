import {Select, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9083
 */
export const CannotUseProcedureAnalyseClauseAndIntoClauseTogether : LintRule<Select> = {
    syntaxKind : SyntaxKind.Select,
    onEnter : (node, lintResult) => {
        if (node.procedureAnalyseClause == undefined) {
            return;
        }

        if (node.preIntoClause != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.preIntoClause.start,
                node.preIntoClause.end,
                [
                    node.procedureAnalyseClause
                ],
                DiagnosticMessages.CannotUseProcedureAnalyseClauseAndIntoClauseTogether
            );
        }

        if (node.postIntoClause != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.postIntoClause.start,
                node.postIntoClause.end,
                [
                    node.procedureAnalyseClause
                ],
                DiagnosticMessages.CannotUseProcedureAnalyseClauseAndIntoClauseTogether
            );
        }
    },
}
