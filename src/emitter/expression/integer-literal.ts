import {IntegerLiteral} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitIntegerLiteral (expr : IntegerLiteral) : StringBuilder {
    return new StringBuilder().append(expr.value.toString());
}
