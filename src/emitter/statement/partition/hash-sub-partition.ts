import {HashSubPartition} from "../../../parser-node";
import {emitExpression, emitIntegerLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitHashSubPartition (subPartition : HashSubPartition) {
    return new StringBuilder()
        .append("SUBPARTITION BY")
        .append(subPartition.linear ? " LINEAR" : undefined)
        .append(" HASH (")
        .appendBuilder(emitExpression(subPartition.subPartitionExpr))
        .append(")")
        .scope(builder => {
            if (subPartition.subPartitionCount == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("SUBPARTITIONS ")
                .appendBuilder(emitIntegerLiteral(subPartition.subPartitionCount))
        })
}
