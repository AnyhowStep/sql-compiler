import {FieldTerminatorOptions} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitFieldTerminatorOptions (options : FieldTerminatorOptions) {
    return new StringBuilder()
        .append("FIELDS")
        .indent(builder => {
            builder
                .append("TERMINATED BY ")
                .appendBuilder(emitStringLiteral(options.terminatedBy))
                .appendNewLine()
                .append(
                    options.optionallyEnclosed ?
                    "OPTIONALLY ENCLOSED BY " :
                    "ENCLOSED BY "
                )
                .appendBuilder(emitStringLiteral(options.enclosedBy))
                .appendNewLine()
                .append("ESCAPED BY ")
                .appendBuilder(emitStringLiteral(options.escapedBy))
        })
}
