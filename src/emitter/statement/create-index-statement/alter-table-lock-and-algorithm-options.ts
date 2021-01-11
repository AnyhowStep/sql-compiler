import {AlterTableLockAndAlgorithmOptions} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitAlterTableLockAndAlgorithmOptions (options : AlterTableLockAndAlgorithmOptions) : StringBuilder {
    return new StringBuilder()
        .append("LOCK = ")
        .appendBuilder(emitIdentifier(options.alterTableLock.identifier))
        .appendNewLine()
        .append("ALGORITHM = ")
        .appendBuilder(emitIdentifier(options.alterTableAlgorithm.identifier))
}
