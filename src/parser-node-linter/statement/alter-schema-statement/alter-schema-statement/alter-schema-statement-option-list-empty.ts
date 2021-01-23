import {SyntaxKind, AlterSchemaStatement} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const AlterSchemaStatementOptionListEmpty : LintRule<AlterSchemaStatement> = {
    syntaxKind : SyntaxKind.AlterSchemaStatement,
    onEnter : (node, lintResult) => {
        if (node.createSchemaOptions.length == 0) {
            pushSyntacticErrorAt(
                lintResult,
                node.start,
                node.end,
                [],
                DiagnosticMessages.AlterSchemaStatementOptionListEmpty
            );
        }
    },
}
