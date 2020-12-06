import {KeySubPartition} from "../../../parser-node";
import {emitIntegerLiteral} from "../../expression";
import {emitIdentifierList} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitKeySubPartition (subPartition : KeySubPartition) {
    return new StringBuilder()
        .append("SUBPARTITION BY")
        .append(subPartition.linear ? " LINEAR" : undefined)
        .append(" KEY")
        .scope(builder => {
            if (subPartition.algorithm == undefined) {
                return;
            }
            builder
                .append("ALGORITHM = ")
                .appendBuilder(emitIntegerLiteral(subPartition.algorithm))
                .append(" ")
        })
        .appendBuilder(emitIdentifierList(subPartition.subPartitionColumns))
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
