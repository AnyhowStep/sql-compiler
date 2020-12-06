import {NodeArray, SubPartitionDefinition} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitSubPartitionDefinition} from "./sub-partition-definition";

export function emitSubPartitionDefinitionList (arr : NodeArray<SubPartitionDefinition>) {
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
