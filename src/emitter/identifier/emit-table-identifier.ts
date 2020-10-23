import {TableIdentifier} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitQuotedIdentifier} from "./emit-quoted-identifier";

export function emitTableIdentifier (tableIdentifier : TableIdentifier) : StringBuilder {
    if (tableIdentifier.schemaName == undefined) {
        return new StringBuilder()
            .append(emitQuotedIdentifier(tableIdentifier.tableName.identifier));
    } else {
        return new StringBuilder()
            .append((
                emitQuotedIdentifier(tableIdentifier.schemaName.identifier) + "." +
                emitQuotedIdentifier(tableIdentifier.tableName.identifier)
            ));
    }
}
