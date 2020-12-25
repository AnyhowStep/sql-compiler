import {SearchedCaseStatement, SyntaxKind} from "../../../parser-node";
import {LintRule} from "../../linter";
import {pushSyntacticErrorAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";

export const SearchedCaseStatementMustHaveAtLeastOneStatement : LintRule<SearchedCaseStatement> = {
    syntaxKind : SyntaxKind.SearchedCaseStatement,
    onEnter : (node, lintResult) => {
        if (node.searchedWhens == undefined || node.searchedWhens.length == 0) {
            pushSyntacticErrorAt(
                lintResult,
                node.caseToken.start,
                node.caseToken.end,
                [],
                DiagnosticMessages.CaseMustHaveAtLeastOneWhenClause
            );
        } else {
            for (const searchedWhen of node.searchedWhens) {
                if (searchedWhen.statements.length == 0) {
                    pushSyntacticErrorAt(
                        lintResult,
                        searchedWhen.whenToken.start,
                        searchedWhen.whenToken.end,
                        [],
                        DiagnosticMessages.MustHaveAtLeastOneStatement,
                        "WHEN"
                    );
                }
            }
        }

        if (node.elseBranch != undefined && node.elseBranch.statements.length == 0) {
            pushSyntacticErrorAt(
                lintResult,
                node.elseBranch.elseToken.start,
                node.elseBranch.elseToken.end,
                [],
                DiagnosticMessages.MustHaveAtLeastOneStatement,
                "ELSE"
            );
        }
    },
}
