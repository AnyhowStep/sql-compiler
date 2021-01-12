import {CreateTableSelectStatement} from "../../../parser-node";
import {emitTableIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitCreateTableDefinition} from "../create-table-definition";
import {emitCreateTableOptions} from "../create-table-options";
import {emitPartition} from "../partition";
import {emitCreateTableSelect} from "./create-table-select";

export function emitCreateTableSelectStatement (statement : CreateTableSelectStatement) : StringBuilder {
    const builder = new StringBuilder()
        .append("CREATE")
        .append(statement.temporary ? " TEMPORARY" : undefined)
        .append(" TABLE")
        .append(statement.ifNotExists ? " IF NOT EXISTS" : undefined)
        .append(" ")
        .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
        .scope(builder => {
            if (statement.createTableDefinitions == undefined) {
                return;
            }
            const createTableDefinitions = statement.createTableDefinitions;
            builder
                .append(" (")
                .indent(builder => builder.loop(
                    createTableDefinitions,
                    builder => builder.append(",").appendNewLine(),
                    (builder, def) => builder.appendBuilder(emitCreateTableDefinition(def))
                ))
                .appendNewLine()
                .append(")")
        })
        .scope(builder => {
            const createTableOptions = emitCreateTableOptions(statement.createTableOptions);
            if (createTableOptions.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder.appendBuilder(createTableOptions);
            })
        })
        .scope(builder => {
            if (statement.partition == undefined) {
                return;
            }
            const partition = statement.partition;
            builder.indent(builder => {
                builder.appendBuilder(emitPartition(partition));
            })
        })
        .indent(builder => {
            builder.appendBuilder(emitCreateTableSelect(statement.createTableSelect));
        })
    return builder;
}
