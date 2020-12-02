import {CurrentTimestamp} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitFieldLength} from "./field-length";

export function emitCurrentTimestamp (node : CurrentTimestamp) : StringBuilder {
    return new StringBuilder()
        .append("CURRENT_TIMESTAMP")
        .appendBuilder(emitFieldLength(node.fractionalSecondPrecision));
}
