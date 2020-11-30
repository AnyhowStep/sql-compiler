import {BitLiteral} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitBitLiteral (expr : BitLiteral) : StringBuilder {
    return new StringBuilder().append(expr.sourceText);
}
