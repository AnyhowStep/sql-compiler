import {ColumnIdentifier, IntegerDataType, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
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
            const [columnIdentifierOriginal, dataType, generated, modifier] = data;

            const columnIdentifier : ColumnIdentifier = {
                ...columnIdentifierOriginal,
                syntacticErrors : (
                    columnIdentifierOriginal.syntacticErrors == undefined ?
                    undefined :
                    [...columnIdentifierOriginal.syntacticErrors]
                ),
            }

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

            if (modifier.onUpdate != undefined) {
                pushSyntacticErrorAtNode(
                    columnIdentifier,
                    [],
                    DiagnosticMessages.GeneratedColumnCannotSpecifyOnUpdateCurrentTimestamp
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
    )
    .addSubstitution(
        [
            SyntaxKind.ColumnIdentifier,
            TokenKind.SERIAL,
            SyntaxKind.GeneratedDefinition,
            CustomSyntaxKind.ColumnDefinitionModifier,
        ] as const,
        function (data) {
            const [columnIdentifierOriginal, serial, generated, modifier] = data;

            const columnIdentifier : ColumnIdentifier = {
                ...columnIdentifierOriginal,
                syntacticErrors : (
                    columnIdentifierOriginal.syntacticErrors == undefined ?
                    undefined :
                    [...columnIdentifierOriginal.syntacticErrors]
                ),
            }

            const dataType : IntegerDataType = {
                start : serial.start,
                end : serial.end,
                syntaxKind : SyntaxKind.IntegerDataType,
                bytes : 8,
                displayWidth : undefined,
                signed : false,
                zeroFill : false,
            };

            /**
             * For some reason, `SERIAL GENERATED` columns are always
             * non-nullable.
             *
             * Different from `SERIAL` non-generated columns...
             */
            modifier.nullable = {
                start : serial.start,
                end : serial.end,
                nullable : false,
            };
            modifier.autoIncrement = true;
            modifier.uniqueKey = true;

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

            if (modifier.onUpdate != undefined) {
                pushSyntacticErrorAtNode(
                    columnIdentifier,
                    [],
                    DiagnosticMessages.GeneratedColumnCannotSpecifyOnUpdateCurrentTimestamp
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
