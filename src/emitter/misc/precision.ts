import {Precision} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitPrecision (node : Precision) : StringBuilder {
    return new StringBuilder()
        .append("(")
        .append(node.precision.value.toString())
        .append(", ")
        .append(node.scale.value.toString())
        .append(")");
}
