import {OpenStatement} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";

export function emitOpenStatement (statement : OpenStatement) : StringBuilder {
    return new StringBuilder()
        .append("OPEN ")
        .appendBuilder(emitIdentifier(statement.cursorName))
}
