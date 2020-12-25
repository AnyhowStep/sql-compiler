import {CreateFunctionStatement} from "../../../parser-node";
import {emitDataType} from "../../data-type";
import {emitAccountIdentifierOrCurrentUser, emitStoredFunctionIdentifier} from "../../identifier";
import {shouldMultiLine, StringBuilder} from "../../string-builder";
import {emitStoredFunctionParameterList} from "./stored-function-parameter";
import {emitStoredProcedureCharacteristics} from "./stored-procedure-characteristics";
import {emitStoredProcedureStatement} from "../../stored-procedure-statement";

function emitCreateFunctionStatementStart (statement : CreateFunctionStatement) : StringBuilder {
    const startA = new StringBuilder()
        .append("CREATE")
        .scope(builder => {
            builder
                .append(" DEFINER = ")
                .appendBuilder(emitAccountIdentifierOrCurrentUser(statement.definer))
        })
        .append(" FUNCTION ")
        .appendBuilder(emitStoredFunctionIdentifier(statement.storedFunctionIdentifier))
        .append(" ");

    const startB = emitStoredFunctionParameterList(statement.parameters, false);

    if (startA.shouldMultiLine()) {
        return new StringBuilder()
            .append("CREATE")
            .scope(builder => {
                builder
                    .append(" DEFINER = ")
                    .appendBuilder(emitAccountIdentifierOrCurrentUser(statement.definer))
            })
            .indent(builder => {
                let part = new StringBuilder()
                    .append("FUNCTION ")
                    .appendBuilder(emitStoredFunctionIdentifier(statement.storedFunctionIdentifier))
                    .append(" ")
                    .appendBuilder(emitStoredFunctionParameterList(statement.parameters, false));

                if (part.shouldMultiLine() && statement.parameters.length == 1) {
                    part = new StringBuilder()
                        .append("FUNCTION ")
                        .appendBuilder(emitStoredFunctionIdentifier(statement.storedFunctionIdentifier))
                        .append(" ")
                        .appendBuilder(emitStoredFunctionParameterList(statement.parameters, true))
                }

                builder.appendBuilder(part)
            })
    }

    if (shouldMultiLine(startA, startB)) {
        return startA
            .appendBuilder(emitStoredFunctionParameterList(statement.parameters, true))
    }

    return startA.appendBuilder(startB)
}

export function emitCreateFunctionStatement (statement : CreateFunctionStatement) {
    let start = emitCreateFunctionStatementStart(statement);

    return start
        .indent(builder => {
            builder
                .append("RETURNS ")
                .appendBuilder(emitDataType(statement.returnType))
        })
        .indent(builder => {
            builder
                .appendBuilder(emitStoredProcedureCharacteristics(statement.characteristics))
        })
        .indent(builder => {
            builder
                .appendBuilder(emitStoredProcedureStatement(statement.statement))
        })
        .append(";")
}
