import {SyntaxKind} from "../../../parser-node";
import {DiagnosticMessages} from "../../diagnostic-messages";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {
    getTextRange,
    pushSyntacticErrorAtNode,
} from "../../parse-util";

makeCustomRule(SyntaxKind.ColumnDefinition)
    .addSubstitution(
        [
            SyntaxKind.ColumnIdentifier,
            CustomSyntaxKind.DataType,
            SyntaxKind.GeneratedDefinition,
            CustomSyntaxKind.ColumnDefinitionModifier,
        ] as const,
        function (data) {
            const [columnIdentifier, dataType, generated, modifier] = data;

            if (modifier.autoIncrement) {
                pushSyntacticErrorAtNode(
                    columnIdentifier,
                    [],
                    DiagnosticMessages.GeneratedColumnCannotSpecifyAutoIncrement
                );
            }

            if (modifier.columnFormat != undefined) {
                pushSyntacticErrorAtNode(
                    columnIdentifier,
                    [],
                    DiagnosticMessages.GeneratedColumnCannotSpecifyColumnFormat
                );
            }

            if (modifier.storage != undefined) {
                pushSyntacticErrorAtNode(
                    columnIdentifier,
                    [],
                    DiagnosticMessages.GeneratedColumnCannotSpecifyStorage
                );
            }

            if (modifier.defaultValue != undefined) {
                pushSyntacticErrorAtNode(
                    columnIdentifier,
                    [],
                    DiagnosticMessages.GeneratedColumnCannotSpecifyDefaultValue
                );
            }

            return {
                syntaxKind : SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated : generated,

                ...modifier,
                ...getTextRange(data),
            };
        }
    );
