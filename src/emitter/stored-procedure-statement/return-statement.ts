import {ReturnStatement} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";

export function emitReturnStatement (statement : ReturnStatement) {
    return new StringBuilder()
        .append("RETURN ")
        .appendBuilder(emitExpression(statement.expr));
}
