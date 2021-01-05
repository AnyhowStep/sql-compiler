import {CreateTablespaceStatement} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitCreateTablespaceOptions} from "./create-tablespace-options";

export function emitCreateTablespaceStatement (statement : CreateTablespaceStatement) {
    return new StringBuilder()
        .append("CREATE TABLESPACE ")
        .appendBuilder(emitIdentifier(statement.identifier))
        .indent(builder => {
            builder
                .append("ADD DATAFILE ")
                .appendBuilder(emitStringLiteral(statement.addDataFile));

            if (statement.useLogFileGroup != undefined) {
                builder
                    .appendNewLine()
                    .append("USE LOGFILE GROUP ")
                    .appendBuilder(emitIdentifier(statement.useLogFileGroup))
            }

            const createTablespaceOptions = emitCreateTablespaceOptions(statement.createTablespaceOptions);
            if (!createTablespaceOptions.isEmpty()) {
                builder
                    .appendNewLine()
                    .appendBuilder(createTablespaceOptions)
            }
        })
}
