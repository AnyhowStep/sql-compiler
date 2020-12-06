import {SubPartition, SyntaxKind} from "../../../parser-node";
import {emitHashSubPartition} from "./hash-sub-partition";
import {emitKeySubPartition} from "./key-sub-partition";

export function emitSubPartition (subPartition : SubPartition) {
    switch (subPartition.syntaxKind) {
        case SyntaxKind.HashSubPartition:
            return emitHashSubPartition(subPartition);
        case SyntaxKind.KeySubPartition:
            return emitKeySubPartition(subPartition);
    }
}
