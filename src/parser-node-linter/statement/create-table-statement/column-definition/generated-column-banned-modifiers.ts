import {SyntaxKind, ColumnDefinition} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const ColumnDefinitionUnexpectedWithParserOption : LintRule<ColumnDefinition> = {
    syntaxKind : SyntaxKind.ColumnDefinition,
    onEnter : (node, lintResult) => {
        if (node.generated == undefined) {
            return;
        }

        if (node.autoIncrement) {
            pushSyntacticErrorAt(
                lintResult,
                node.columnIdentifier.start,
                node.columnIdentifier.end,
                [],
                DiagnosticMessages.GeneratedColumnCannotSpecifyAutoIncrement
            );
        }

        if (node.columnFormat != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.columnIdentifier.start,
                node.columnIdentifier.end,
                [],
                DiagnosticMessages.GeneratedColumnCannotSpecifyColumnFormat
            );
        }

        if (node.storage != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.columnIdentifier.start,
                node.columnIdentifier.end,
                [],
                DiagnosticMessages.GeneratedColumnCannotSpecifyStorage
            );
        }

        if (node.defaultValue != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.columnIdentifier.start,
                node.columnIdentifier.end,
                [],
                DiagnosticMessages.GeneratedColumnCannotSpecifyDefaultValue
            );
        }

        if (node.onUpdate != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.columnIdentifier.start,
                node.columnIdentifier.end,
                [],
                DiagnosticMessages.GeneratedColumnCannotSpecifyOnUpdateCurrentTimestamp
            );
        }
    },
}
