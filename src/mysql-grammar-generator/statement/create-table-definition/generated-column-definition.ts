import {ColumnIdentifier, IntegerDataType, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {
    getTextRange,
} from "../../parse-util";

makeCustomRule(SyntaxKind.ColumnDefinition)
    .addSubstitution(
        [
            SyntaxKind.ColumnIdentifier,
            CustomSyntaxKind.DataType,
            /**
             * @todo Allow `COLLATE` before `GeneratedDefinition`
             * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6358
             */
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
