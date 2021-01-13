import {AlterTableModifiers} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";
import {emitAlterTableAlgorithm, emitAlterTableLock} from "../../create-index-statement";
import {emitAlterTableValidation} from "./alter-table-validation";

export function emitAlterTableModifiers (modifiers : AlterTableModifiers) {
    return new StringBuilder()
        .appendBuilder(emitAlterTableLock(modifiers.alterTableLock))
        .append(",")
        .appendNewLine()
        .appendBuilder(emitAlterTableAlgorithm(modifiers.alterTableAlgorithm))
        .append(",")
        .appendNewLine()
        .appendBuilder(emitAlterTableValidation(modifiers.alterTableValidation))
}
