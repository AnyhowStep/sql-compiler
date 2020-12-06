import {SubPartitionDefinition} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";
import {emitPartitionDefinitionOptions} from "./partition-definition-options";

export function emitSubPartitionDefinition (def : SubPartitionDefinition) {
    return new StringBuilder()
        .append("SUBPARTITION ")
        .appendBuilder(emitExpression(def.subPartitionName))
        .scope(builder => {
            const partitionDefinitionOptions = emitPartitionDefinitionOptions(def.partitionDefinitionOptions);
            if (partitionDefinitionOptions.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder
                    .appendBuilder(partitionDefinitionOptions);
            })
        })
}
