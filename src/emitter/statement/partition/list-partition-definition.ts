import {ListPartitionDefinition} from "../../../parser-node";
import {emitExpression, emitExpressionList} from "../../expression";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitPartitionDefinitionOptions} from "./partition-definition-options";
import {emitSubPartitionDefinitionList} from "./sub-partition-definition-list";

export function emitListPartitionDefinition (def : ListPartitionDefinition) {
    return new StringBuilder()
        .append("PARTITION ")
        .appendBuilder(emitIdentifier(def.partitionName))
        .append(" VALUES IN (")
        .loop(
            def.partitionValues,
            builder => builder.append(", "),
            (builder, partitionValue) => {
                if (partitionValue.length == 1) {
                    builder.appendBuilder(emitExpression(partitionValue[0]))
                } else {
                    builder.appendBuilder(emitExpressionList(partitionValue))
                }
            }
        )
        .append(")")
        .scope(builder => {
            const partitionDefinitionOptions = emitPartitionDefinitionOptions(def.partitionDefinitionOptions);
            if (partitionDefinitionOptions.isEmpty()) {
                builder
                    .scope(builder => {
                        if (def.subPartitionDefinitions == undefined) {
                            return;
                        }
                        builder
                            .append(" ")
                            .appendBuilder(emitSubPartitionDefinitionList(def.subPartitionDefinitions))
                    })
                return;
            }
            builder.indent(builder => {
                builder
                    .appendBuilder(partitionDefinitionOptions)
                    .scope(builder => {
                        if (def.subPartitionDefinitions == undefined) {
                            return;
                        }
                        builder
                            .append(" ")
                            .appendBuilder(emitSubPartitionDefinitionList(def.subPartitionDefinitions))
                    });
            })
        })
}
