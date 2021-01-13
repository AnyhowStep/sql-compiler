import {AlterTableAlgorithm, AlterTableLock, AlterTableLockAndAlgorithmOptions} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitAlterTableLock (modifier : AlterTableLock) {
    return new StringBuilder()
        .append("LOCK = ")
        .appendBuilder(emitIdentifier(modifier.identifier))
}

export function emitAlterTableAlgorithm (modifier : AlterTableAlgorithm) {
    return new StringBuilder()
        .append("ALGORITHM = ")
        .appendBuilder(emitIdentifier(modifier.identifier))
}

export function emitAlterTableLockAndAlgorithmOptions (options : AlterTableLockAndAlgorithmOptions) : StringBuilder {
    return new StringBuilder()
        .appendBuilder(emitAlterTableLock(options.alterTableLock))
        .appendNewLine()
        .appendBuilder(emitAlterTableAlgorithm(options.alterTableAlgorithm))
}
