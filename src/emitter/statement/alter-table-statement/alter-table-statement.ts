import {AlterTableStatement, SyntaxKind} from "../../../parser-node";
import {emitTableIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitPartition} from "../partition";
import {emitAlterTableItemOrModifierList} from "./alter-table-item-or-modifier-list";

export function emitAlterTableStatement (statement : AlterTableStatement) {
    return new StringBuilder()
        .append("ALTER TABLE ")
        .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
        .scope(builder => {
            const alterTableItemOrModifierList = emitAlterTableItemOrModifierList(
                statement.alterTableItemOrModifierList
            );
            if (alterTableItemOrModifierList.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder.appendBuilder(alterTableItemOrModifierList)
            })
        })
        .scope(builder => {
            if (statement.partition == undefined) {
                return;
            }
            const partition = (
                statement.partition.syntaxKind == SyntaxKind.Value ?
                new StringBuilder().append(statement.partition.value) :
                emitPartition(statement.partition)
            )
            builder.indent(builder => {
                builder.appendBuilder(partition)
            })
        })
}
