import {SyntaxKind, AlterTablespaceStatement} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const AlterTablespaceStatementInvalidOption : LintRule<AlterTablespaceStatement> = {
    syntaxKind : SyntaxKind.AlterTablespaceStatement,
    onEnter : (node, lintResult) => {

        if (node.createTablespaceOptions.extentSize != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.createTablespaceOptions.extentSize.start,
                node.createTablespaceOptions.extentSize.end,
                [],
                DiagnosticMessages.InvalidOption,
                "ALTER TABLESPACE"
            );
        }

        if (node.createTablespaceOptions.nodeGroup != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.createTablespaceOptions.nodeGroup.start,
                node.createTablespaceOptions.nodeGroup.end,
                [],
                DiagnosticMessages.InvalidOption,
                "ALTER TABLESPACE"
            );
        }

        if (node.createTablespaceOptions.comment != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.createTablespaceOptions.comment.start,
                node.createTablespaceOptions.comment.end,
                [],
                DiagnosticMessages.InvalidOption,
                "ALTER TABLESPACE"
            );
        }

        if (node.createTablespaceOptions.fileBlockSize != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.createTablespaceOptions.fileBlockSize.start,
                node.createTablespaceOptions.fileBlockSize.end,
                [],
                DiagnosticMessages.InvalidOption,
                "ALTER TABLESPACE"
            );
        }
    },
}
