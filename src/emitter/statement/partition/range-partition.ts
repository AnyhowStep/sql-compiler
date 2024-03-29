import {RangePartition} from "../../../parser-node";
import {emitExpression, emitIntegerLiteral} from "../../expression";
import {emitIdentifierList} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitRangePartitionDefinition} from "./range-partition-definition";
import {emitSubPartition} from "./sub-partition";

export function emitRangePartition (partition : RangePartition) {
    return new StringBuilder()
        .append("PARTITION BY")
        .scope(builder => {
            if (partition.partitionExprOrColumns instanceof Array) {
                builder
                    .append(" RANGE COLUMNS")
                    .appendBuilder(emitIdentifierList(partition.partitionExprOrColumns))
            } else {
                builder
                    .append(" RANGE(")
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
                .appendNewLine()
                .appendBuilder(emitSubPartition(partition.subPartition))
        })
        .append(" (")
        .indent(builder => {
            builder
                .loop(
                    partition.partitionDefinitions,
                    builder => builder.append(",").appendNewLine(),
                    (builder, partitionDefinition) => builder
                        .appendBuilder(emitRangePartitionDefinition(partitionDefinition))
                )
        })
        .appendNewLine()
        .append(")")
}
