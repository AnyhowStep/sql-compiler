import {FieldLength} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitFieldLength (node : FieldLength) : StringBuilder {
    return new StringBuilder()
        .append("(")
        .append(node.length.value.toString())
        .append(")");
}
