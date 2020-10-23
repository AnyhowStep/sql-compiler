import {GeneratedDefinition, GeneratedType} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitGeneratedDefinition (def : GeneratedDefinition) : StringBuilder {
    return new StringBuilder()
        .append("GENERATED ALWAYS AS (")
        .appendBuilder(emitExpression(def.expr))
        .append(")")
        .append(
            def.generatedType == GeneratedType.VIRTUAL ?
            " VIRTUAL" :
            " STORED"
        );
}
