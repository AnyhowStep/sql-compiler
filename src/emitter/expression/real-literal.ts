import {RealLiteral} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitRealLiteral (expr : RealLiteral) : StringBuilder {
    return new StringBuilder().append(expr.sourceText);
}
