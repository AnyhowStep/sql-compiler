import {CreateProcedureStatement} from "../../../parser-node";
import {emitAccountIdentifierOrCurrentUser, emitStoredProcedureIdentifier} from "../../identifier";
import {shouldMultiLine, StringBuilder} from "../../string-builder";
import {emitStoredProcedureParameterList} from "./stored-procedure-parameter";
import {emitStoredProcedureCharacteristics} from "./stored-procedure-characteristics";
import {emitStoredProcedureStatement} from "../../stored-procedure-statement";

function emitCreateProcedureStatementStart (statement : CreateProcedureStatement) : StringBuilder {
    const startA = new StringBuilder()
        .append("CREATE")
        .scope(builder => {
            builder
                .append(" DEFINER = ")
                .appendBuilder(emitAccountIdentifierOrCurrentUser(statement.definer))
        })
        .append(" PROCEDURE ")
        .appendBuilder(emitStoredProcedureIdentifier(statement.storedProcedureIdentifier))
        .append(" ");

    const startB = emitStoredProcedureParameterList(statement.parameters, false);

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
                    .append("PROCEDURE ")
                    .appendBuilder(emitStoredProcedureIdentifier(statement.storedProcedureIdentifier))
                    .append(" ")
                    .appendBuilder(emitStoredProcedureParameterList(statement.parameters, false));

                if (part.shouldMultiLine() && statement.parameters.length == 1) {
                    part = new StringBuilder()
                        .append("PROCEDURE ")
                        .appendBuilder(emitStoredProcedureIdentifier(statement.storedProcedureIdentifier))
                        .append(" ")
                        .appendBuilder(emitStoredProcedureParameterList(statement.parameters, true))
                }

                builder.appendBuilder(part)
            })
    }

    if (shouldMultiLine(startA, startB)) {
        return startA
            .appendBuilder(emitStoredProcedureParameterList(statement.parameters, true))
    }

    return startA.appendBuilder(startB)
}

export function emitCreateProcedureStatement (statement : CreateProcedureStatement) {
    let start = emitCreateProcedureStatementStart(statement);

    return start
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
