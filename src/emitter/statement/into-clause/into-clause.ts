import {IntoClause} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitIntoDestination} from "./into-destination";

export function emitIntoClause (intoClause : IntoClause) {
    return new StringBuilder()
        .appendBuilder(emitIntoDestination(intoClause.intoDestination))
}
