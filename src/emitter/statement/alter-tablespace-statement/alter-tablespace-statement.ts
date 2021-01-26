import {AlterTablespaceStatement} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitCreateTablespaceOptions} from "../create-tablespace-statement";

export function emitAlterTablespaceStatement (statement : AlterTablespaceStatement) {
    return new StringBuilder()
        .append("ALTER TABLESPACE ")
        .appendBuilder(emitIdentifier(statement.identifier))
        .indent(builder => {
            builder
                .append(
                    statement.add.value ?
                    "ADD " :
                    "DROP "
                )
                .append("DATAFILE ")
                .appendBuilder(emitStringLiteral(statement.dataFile));

            const createTablespaceOptions = emitCreateTablespaceOptions(statement.createTablespaceOptions);
            if (!createTablespaceOptions.isEmpty()) {
                builder
                    .appendNewLine()
                    .appendBuilder(createTablespaceOptions)
            }
        })
}
