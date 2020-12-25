import {StoredFunctionParameter, StoredFunctionParameterList} from "../../../parser-node";
import {emitDataType} from "../../data-type";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitStoredFunctionParameter (parameter : StoredFunctionParameter) {
    return new StringBuilder()
        .appendBuilder(emitIdentifier(parameter.identifier))
        .append(" ")
        .appendBuilder(emitDataType(parameter.dataType))
}

export function emitStoredFunctionParameterList (
    parameters : StoredFunctionParameterList,
    forceMultiLine : boolean
) {
    if (parameters.length == 0) {
        return new StringBuilder().append("()")
    }

    if (parameters.length == 1) {
        if (forceMultiLine) {
            return new StringBuilder()
                .append("(")
                .indent(builder => {
                    builder
                        .appendBuilder(emitStoredFunctionParameter(parameters[0]))
                })
                .appendNewLine()
                .append(")")
        } else {
            return new StringBuilder()
                .append("(")
                .appendBuilder(emitStoredFunctionParameter(parameters[0]))
                .append(")")
        }
    }

    return new StringBuilder()
        .append("(")
        .indent(builder => {
            builder
                .loop(
                    parameters,
                    builder => builder.append(",").appendNewLine(),
                    (builder, item) => builder.appendBuilder(emitStoredFunctionParameter(item))
                )
        })
        .appendNewLine()
        .append(")")
}
