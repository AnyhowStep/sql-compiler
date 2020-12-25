import {SubPartitionDefinitionList} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitSubPartitionDefinition} from "./sub-partition-definition";

export function emitSubPartitionDefinitionList (arr : SubPartitionDefinitionList) {
    return new StringBuilder()
        .append("(")
        .indent(builder => {
            builder
                .loop(
                    arr,
                    builder => builder.append(",").appendNewLine(),
                    (builder, subPartitionDefinition) => builder
                        .appendBuilder(emitSubPartitionDefinition(subPartitionDefinition))
                )
        })
        .appendNewLine()
        .append(")")
}
