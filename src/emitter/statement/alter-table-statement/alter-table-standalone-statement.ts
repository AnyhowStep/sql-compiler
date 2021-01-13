import {AlterTableStandaloneStatement} from "../../../parser-node";
import {emitTableIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitAlterTableModifiers} from "./alter-table-modifier";

export function emitAlterTableStandaloneStatement (statement : AlterTableStandaloneStatement) {
    return new StringBuilder()
        .append("ALTER TABLE ")
        .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
        .indent(builder => {
            builder
            .appendBuilder(emitAlterTableModifiers(statement.alterTableModifiers))
            .append(",")
            .appendNewLine()
            .append(statement.alterTableItem.value)
        })
}
