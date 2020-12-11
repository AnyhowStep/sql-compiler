import {SyntaxKind, Union} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitSelect} from "./select";

export function emitUnion (union : Union) {
    return new StringBuilder()
        .scope(builder => {
            const lhs = union.lhs;
            if (lhs.syntaxKind == SyntaxKind.Union) {
                builder
                    .appendBuilder(emitUnion(lhs))
            } else {
                builder
                    .append("(")
                    .indent(builder => builder.appendBuilder(emitSelect(lhs)))
                    .appendNewLine()
                    .append(")")
            }
        })
        .appendNewLine()
        .append("UNION")
        .append(
            union.distinct.value ?
            " DISTINCT" :
            " ALL"
        )
        .appendNewLine()
        .append("(")
        .indent(builder => builder.appendBuilder(emitSelect(union.rhs)))
        .appendNewLine()
        .append(")")
}
