import {AlterTableAlterColumnDropDefault} from "../../../../parser-node";
import {emitColumnIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableAlterColumnDropDefault (item : AlterTableAlterColumnDropDefault) : StringBuilder {
    return new StringBuilder()
        .append("ALTER COLUMN ")
        .appendBuilder(emitColumnIdentifier(item.columnIdentifier))
        .indent(builder => {
            builder
                .append("DROP DEFAULT")
        })
}
