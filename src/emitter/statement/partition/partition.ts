import {Partition, SyntaxKind} from "../../../parser-node";
import {emitHashPartition} from "./hash-partition";
import {emitKeyPartition} from "./key-partition";
import {emitListPartition} from "./list-partition";
import {emitRangePartition} from "./range-partition";

export function emitPartition (partition : Partition) {
    switch (partition.syntaxKind) {
        case SyntaxKind.HashPartition:
            return emitHashPartition(partition);
        case SyntaxKind.KeyPartition:
            return emitKeyPartition(partition);
        case SyntaxKind.ListPartition:
            return emitListPartition(partition);
        case SyntaxKind.RangePartition:
            return emitRangePartition(partition);
    }
}
