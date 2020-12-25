import {SimpleCaseStatement, SyntaxKind} from "../../../parser-node";
import {LintRule} from "../../linter";
import {pushSyntacticErrorAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";

export const SimpleCaseStatementMustHaveAtLeastOneStatement : LintRule<SimpleCaseStatement> = {
    syntaxKind : SyntaxKind.SimpleCaseStatement,
    onEnter : (node, lintResult) => {
        if (node.simpleWhens == undefined || node.simpleWhens.length == 0) {
            pushSyntacticErrorAt(
                lintResult,
                node.caseToken.start,
                node.caseToken.end,
                [],
                DiagnosticMessages.CaseMustHaveAtLeastOneWhenClause
            );
        } else {
            for (const simpleWhen of node.simpleWhens) {
                if (simpleWhen.statements.length == 0) {
                    pushSyntacticErrorAt(
                        lintResult,
                        simpleWhen.whenToken.start,
                        simpleWhen.whenToken.end,
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
