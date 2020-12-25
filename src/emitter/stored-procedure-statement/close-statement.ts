import {CloseStatement} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";

export function emitCloseStatement (statement : CloseStatement) : StringBuilder {
    return new StringBuilder()
        .append("CLOSE ")
        .appendBuilder(emitIdentifier(statement.cursorName))
}
