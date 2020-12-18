import {IntoDestinationDumpFile} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitIntoDestinationDumpFile (destination : IntoDestinationDumpFile) {
    return new StringBuilder()
        .append("INTO DUMPFILE ")
        .appendBuilder(emitStringLiteral(destination.path));
}
