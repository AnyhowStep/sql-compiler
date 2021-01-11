import {CreateTableLikeStatement} from "../../../parser-node";
import {emitTableIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitCreateTableLikeStatement (statement : CreateTableLikeStatement) : StringBuilder {
    return new StringBuilder()
        .append("CREATE")
        .append(statement.temporary ? " TEMPORARY" : undefined)
        .append(" TABLE")
        .append(statement.ifNotExists ? " IF NOT EXISTS" : undefined)
        .append(" ")
        .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
        .indent(builder => {
            builder
                .append("LIKE ")
                .appendBuilder(emitTableIdentifier(statement.likeTableIdentifier))
        })
}
