import {ListPartition} from "../../../parser-node";
import {emitExpression, emitIntegerLiteral} from "../../expression";
import {emitIdentifierList} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitListPartitionDefinition} from "./list-partition-definition";
import {emitSubPartition} from "./sub-partition";

export function emitListPartition (partition : ListPartition) {
    return new StringBuilder()
        .append("PARTITION BY")
        .scope(builder => {
            if (partition.partitionExprOrColumns instanceof Array) {
                builder
                    .append(" LIST COLUMNS")
                    .appendBuilder(emitIdentifierList(partition.partitionExprOrColumns))
            } else {
                builder
                    .append(" LIST(")
                    .appendBuilder(emitExpression(partition.partitionExprOrColumns))
                    .append(")")
            }
        })
        .scope(builder => {
            if (partition.partitionCount == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("PARTITIONS ")
                .appendBuilder(emitIntegerLiteral(partition.partitionCount))
        })
        .scope(builder => {
            if (partition.subPartition == undefined) {
                return;
            }
            builder
                .appendBuilder(emitSubPartition(partition.subPartition))
        })
        .append("(")
        .loop(
            partition.partitionDefinitions,
            builder => builder.append(", "),
            (builder, partitionDefinition) => builder
                .appendBuilder(emitListPartitionDefinition(partitionDefinition))
        )
        .append(")")
}
