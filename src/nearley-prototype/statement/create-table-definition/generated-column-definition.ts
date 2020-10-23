import {SyntaxKind} from "../../../parser-node";
import {DataTypeRule} from "../../data-type/data-type";
import {DiagnosticMessages} from "../../diagnostic-messages";
import {
    makeRule,
} from "../../nearley-util";
import {
    getTextRange,
    pushSyntacticErrorAtNode,
} from "../../parse-util";
import {ColumnModifierRule} from "./non-generated-column-definition";

makeRule(SyntaxKind.ColumnDefinition)
    .addSubstitution(
        [
            SyntaxKind.ColumnIdentifier,
            DataTypeRule,
            SyntaxKind.GeneratedDefinition,
            ColumnModifierRule,
        ] as const,
        function (data) {
            const [columnIdentifier, dataType, generated, modifier] = data;

            if (modifier.autoIncrement) {
                pushSyntacticErrorAtNode(
                    this,
                    columnIdentifier,
                    DiagnosticMessages.GeneratedColumnCannotSpecifyAutoIncrement
                );
            }

            if (modifier.columnFormat != undefined) {
                pushSyntacticErrorAtNode(
                    this,
                    columnIdentifier,
                    DiagnosticMessages.GeneratedColumnCannotSpecifyColumnFormat
                );
            }

            if (modifier.storage != undefined) {
                pushSyntacticErrorAtNode(
                    this,
                    columnIdentifier,
                    DiagnosticMessages.GeneratedColumnCannotSpecifyStorage
                );
            }

            if (modifier.defaultValue != undefined) {
                pushSyntacticErrorAtNode(
                    this,
                    columnIdentifier,
                    DiagnosticMessages.GeneratedColumnCannotSpecifyDefaultValue
                );
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated : generated,

                ...modifier,
            };
        }
    );
