import {CheckDefinition} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitCheckDefinition (def : CheckDefinition) : StringBuilder {
    return new StringBuilder()
        .append("CHECK (")
        .appendBuilder(emitExpression(def.expr))
        .append(")");
}
