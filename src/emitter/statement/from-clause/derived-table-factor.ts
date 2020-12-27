import {DerivedTableFactor} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitSelectStatement} from "../select-statement";

export function emitDerivedTableFactor (table : DerivedTableFactor) {
    return new StringBuilder()
        .append("(")
        .indent(builder => {
            builder
                .appendBuilder(emitSelectStatement(table.select))
        })
        .appendNewLine()
        .append(") AS ")
        .appendBuilder(emitIdentifier(table.alias))
}
