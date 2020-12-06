import {HashPartition} from "../../../parser-node";
import {emitExpression, emitIntegerLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitHashPartition (partition : HashPartition) {
    return new StringBuilder()
        .append("PARTITION BY")
        .append(partition.linear ? " LINEAR" : undefined)
        .append(" HASH (")
        .appendBuilder(emitExpression(partition.partitionExpr))
        .append(")")
        .scope(builder => {
            if (partition.partitionCount == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("PARTITIONS ")
                .appendBuilder(emitIntegerLiteral(partition.partitionCount))
        })
}
