import {AlterTablespaceAccessStatement, TablespaceAccessMode} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitAlterTablespaceAccessStatement (statement : AlterTablespaceAccessStatement) {
    return new StringBuilder()
        .append("ALTER TABLESPACE ")
        .appendBuilder(emitIdentifier(statement.identifier))
        .indent(builder => {
            builder
                .append(
                    statement.accessMode.value == TablespaceAccessMode.READ_ONLY ?
                    "READ_ONLY" :
                    statement.accessMode.value == TablespaceAccessMode.READ_WRITE ?
                    "READ_WRITE" :
                    "NOT ACCESSIBLE"
                )
        })
}
