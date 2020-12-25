import {LeaveStatement} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";

export function emitLeaveStatement (statement : LeaveStatement) : StringBuilder {
    return new StringBuilder()
        .append("LEAVE ")
        .appendBuilder(emitIdentifier(statement.label))
}
