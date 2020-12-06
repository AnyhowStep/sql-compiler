import {RangePartitionDefinition, SyntaxKind} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitPartitionDefinitionOptions} from "./partition-definition-options";
import {emitSubPartitionDefinitionList} from "./sub-partition-definition-list";

export function emitRangePartitionDefinition (def : RangePartitionDefinition) {
    return new StringBuilder()
        .append("PARTITION ")
        .appendBuilder(emitIdentifier(def.partitionName))
        .append(" VALUES LESS THAN (")
        .loop(
            def.partitionValues,
            builder => builder.append(", "),
            (builder, partitionValue) => {
                if (partitionValue.syntaxKind == SyntaxKind.Value) {
                    builder.append("MAXVALUE")
                } else {
                    builder.appendBuilder(emitExpression(partitionValue))
                }
            }
        )
        .append(")")
        .appendBuilder(emitPartitionDefinitionOptions(def.partitionDefinitionOptions))
        .scope(builder => {
            if (def.subPartitionDefinitions == undefined) {
                return;
            }
            builder
                .appendBuilder(emitSubPartitionDefinitionList(def.subPartitionDefinitions))
        })
}
