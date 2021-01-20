import {ColumnIdentifier} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitQuotedIdentifier} from "./emit-quoted-identifier";

export function emitColumnIdentifier (columnIdentifier : ColumnIdentifier) : StringBuilder {
    if (columnIdentifier.schemaName == undefined) {
        if (columnIdentifier.tableName == undefined) {
            return new StringBuilder()
                .append(emitQuotedIdentifier(columnIdentifier.columnName.identifier));
        } else {
            return new StringBuilder()
                .append(
                    emitQuotedIdentifier(columnIdentifier.tableName.identifier) + "." +
                    emitQuotedIdentifier(columnIdentifier.columnName.identifier)
                );
        }
    } else {
        if (columnIdentifier.tableName == undefined) {
            /**
             * This should not happen...
             */
            return new StringBuilder()
                .append(
                    emitQuotedIdentifier(columnIdentifier.schemaName.identifier) + ".." +
                    emitQuotedIdentifier(columnIdentifier.columnName.identifier)
                );
        } else {
            return new StringBuilder()
                .append(
                    emitQuotedIdentifier(columnIdentifier.schemaName.identifier) + "." +
                    emitQuotedIdentifier(columnIdentifier.tableName.identifier) + "." +
                    emitQuotedIdentifier(columnIdentifier.columnName.identifier)
                );
        }
    }
}
