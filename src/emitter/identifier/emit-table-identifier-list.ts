import {TableIdentifierList} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitTableIdentifier} from "./emit-table-identifier";

export function emitTableIdentifierList (tableIdentifiers : TableIdentifierList) {
    return new StringBuilder()
        .append("(")
        .loop(
            tableIdentifiers,
            builder => builder.append(", "),
            (builder, tableIdentifier) => builder.appendBuilder(emitTableIdentifier(tableIdentifier))
        )
        .append(")")
}

export function emitTableIdentifierList2 (tableIdentifiers : TableIdentifierList) {
    return new StringBuilder()
        .loop(
            tableIdentifiers,
            builder => builder.append(",").appendNewLine(),
            (builder, tableIdentifier) => builder.appendBuilder(emitTableIdentifier(tableIdentifier))
        )
}
