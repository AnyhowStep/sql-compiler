import {IfStatement, SyntaxKind} from "../../../parser-node";
import {LintRule} from "../../linter";
import {pushSyntacticErrorAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";

export const IfStatementMustHaveAtLeastOneStatement : LintRule<IfStatement> = {
    syntaxKind : SyntaxKind.IfStatement,
    onEnter : (node, lintResult) => {
        if (node.statements.length == 0) {
            pushSyntacticErrorAt(
                lintResult,
                node.ifToken.start,
                node.ifToken.end,
                [],
                DiagnosticMessages.MustHaveAtLeastOneStatement,
                "IF"
            );
        }

        if (node.elseIfs != undefined) {
            for (const elseIf of node.elseIfs) {
                if (elseIf.statements.length == 0) {
                    pushSyntacticErrorAt(
                        lintResult,
                        elseIf.elseIfToken.start,
                        elseIf.elseIfToken.end,
                        [],
                        DiagnosticMessages.MustHaveAtLeastOneStatement,
                        "ELSEIF"
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
