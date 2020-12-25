import {ParameterMode, StoredProcedureParameter, StoredProcedureParameterList} from "../../../parser-node";
import {emitDataType} from "../../data-type";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitStoredProcedureParameter (parameter : StoredProcedureParameter) {
    return new StringBuilder()
        .append(
            parameter.parameterMode.value == ParameterMode.IN ?
            "IN " :
            parameter.parameterMode.value == ParameterMode.OUT ?
            "OUT " :
            "INOUT "
        )
        .appendBuilder(emitIdentifier(parameter.identifier))
        .append(" ")
        .appendBuilder(emitDataType(parameter.dataType))
}

export function emitStoredProcedureParameterList (
    parameters : StoredProcedureParameterList,
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
                        .appendBuilder(emitStoredProcedureParameter(parameters[0]))
                })
                .appendNewLine()
                .append(")")
        } else {
            return new StringBuilder()
                .append("(")
                .appendBuilder(emitStoredProcedureParameter(parameters[0]))
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
                    (builder, item) => builder.appendBuilder(emitStoredProcedureParameter(item))
                )
        })
        .appendNewLine()
        .append(")")
}
