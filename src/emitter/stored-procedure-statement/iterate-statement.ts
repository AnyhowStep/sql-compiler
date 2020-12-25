import {IterateStatement} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";

export function emitIterateStatement (statement : IterateStatement) : StringBuilder {
    return new StringBuilder()
        .append("ITERATE ")
        .appendBuilder(emitIdentifier(statement.label))
}
