import {AlterTableAlterColumnSetDefault} from "../../../../parser-node";
import {emitExpression} from "../../../expression";
import {emitColumnIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableAlterColumnSetDefault (item : AlterTableAlterColumnSetDefault) : StringBuilder {
    return new StringBuilder()
        .append("ALTER COLUMN ")
        .appendBuilder(emitColumnIdentifier(item.columnIdentifier))
        .indent(builder => {
            builder
                .append("SET DEFAULT ")
                .appendBuilder(emitExpression(item.expr))
        })
}
