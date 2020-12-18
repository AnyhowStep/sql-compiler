import {LineTerminatorOptions} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitLineTerminatorOptions (options : LineTerminatorOptions) {
    return new StringBuilder()
        .append("LINES")
        .indent(builder => {
            builder
                .append("STARTING BY ")
                .appendBuilder(emitStringLiteral(options.startingBy))
                .appendNewLine()
                .append("TERMINATED BY ")
                .appendBuilder(emitStringLiteral(options.terminatedBy))
        })
}
