import {DefaultCollation} from "../../parser-node";
import {emitCollationNameOrDefault} from "../identifier";
import {StringBuilder} from "../string-builder";

export function emitDefaultCollation (node : DefaultCollation) : StringBuilder {
    return new StringBuilder()
        .append("DEFAULT COLLATE ")
        .appendBuilder(emitCollationNameOrDefault(node.collationName))
}
