import {AlterTableAlterColumnDropDefault} from "../../../../parser-node";
import {emitIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableAlterColumnDropDefault (item : AlterTableAlterColumnDropDefault) : StringBuilder {
    return new StringBuilder()
        .append("ALTER COLUMN ")
        .appendBuilder(emitIdentifier(item.columnIdentifier.columnName))
        .indent(builder => {
            builder
                .append("DROP DEFAULT")
        })
}
