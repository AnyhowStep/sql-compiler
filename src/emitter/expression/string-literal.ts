import {StringLiteral} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitStringLiteral (expr : StringLiteral) : StringBuilder {
    return new StringBuilder().append(expr.sourceText);
}
