import {KeyPartition} from "../../../parser-node";
import {emitIntegerLiteral} from "../../expression";
import {emitIdentifierList} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitKeyPartition (partition : KeyPartition) {
    return new StringBuilder()
        .append("PARTITION BY")
        .append(partition.linear ? " LINEAR" : undefined)
        .append(" KEY")
        .scope(builder => {
            if (partition.algorithm == undefined) {
                return;
            }
            builder
                .append(" ALGORITHM = ")
                .appendBuilder(emitIntegerLiteral(partition.algorithm))
                .append(" ")
        })
        .appendBuilder(emitIdentifierList(partition.partitionColumns))
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
