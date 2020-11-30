import {HexLiteral} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitHexLiteral (expr : HexLiteral) : StringBuilder {
    return new StringBuilder().append(expr.sourceText);
}
