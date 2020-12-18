import {IntoDestinationVariableList} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {shouldMultiLine, StringBuilder} from "../../string-builder";

export function emitIntoDestinationVariableList (destination : IntoDestinationVariableList) {
    const arr = destination.map(item => emitExpression(item));

    if (shouldMultiLine(...arr)) {
        return new StringBuilder()
            .append("INTO")
            .indent(builder => {
                builder
                    .loop(
                        arr,
                        builder => builder.append(",").appendNewLine(),
                        (builder, item) => builder.appendBuilder(item)
                    )
            });
    } else {
        return new StringBuilder()
            .append("INTO")
            .indent(builder => {
                builder
                    .loop(
                        arr,
                        builder => builder.append(", "),
                        (builder, item) => builder.appendBuilder(item)
                    )
            });
    }
}
