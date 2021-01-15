import {CreateTableDefinitionList} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitCreateTableDefinition} from "./create-table-definition";

export function emitCreateTableDefinitionList (arr : CreateTableDefinitionList) {
    return new StringBuilder()
        .append("(")
        .indent(builder => builder.loop(
            arr,
            builder => builder.append(",").appendNewLine(),
            (builder, def) => builder.appendBuilder(emitCreateTableDefinition(def))
        ))
        .appendNewLine()
        .append(")")
}
