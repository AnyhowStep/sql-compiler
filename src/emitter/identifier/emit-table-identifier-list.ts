import {TableIdentifier, NodeArray} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitTableIdentifier} from "./emit-table-identifier";

export function emitTableIdentifierList (tableIdentifiers : NodeArray<TableIdentifier>) {
    return new StringBuilder()
        .append("(")
        .loop(
            tableIdentifiers,
            builder => builder.append(", "),
            (builder, tableIdentifier) => builder.appendBuilder(emitTableIdentifier(tableIdentifier))
        )
        .append(")")
}
