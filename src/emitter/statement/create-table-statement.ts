import {CreateTableStatement} from "../../parser-node";
import {emitTableIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";
import {emitCreateTableDefinition} from "./create-table-definition";
import {emitCreateTableOptions} from "./create-table-options";

export function emitCreateTableStatement (statement : CreateTableStatement) : StringBuilder {
    const builder = new StringBuilder()
        .append("CREATE")
        .append(statement.temporary ? " TEMPORARY" : undefined)
        .append(" TABLE")
        .append(statement.ifNotExists ? " IF NOT EXISTS" : undefined)
        .append(" ")
        .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
        .append(" (")
        .indent(builder => builder.loop(
            statement.createTableDefinitions,
            builder => builder.append(",").appendNewLine(),
            (builder, def) => builder.appendBuilder(emitCreateTableDefinition(def))
        ))
        .appendNewLine()
        .append(")")
        .scope(builder => {
            const createTableOptions = emitCreateTableOptions(statement.createTableOptions);
            if (createTableOptions.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder.appendBuilder(createTableOptions);
            })
        })
        .append(";");
    return builder;
}
