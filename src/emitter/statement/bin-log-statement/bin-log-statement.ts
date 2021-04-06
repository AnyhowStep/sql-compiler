import {BinLogStatement} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitBinLogStatement (statement : BinLogStatement) {
    return new StringBuilder()
        .append("BINLOG ")
        .appendBuilder(emitStringLiteral(statement.str))
}
