import {AlterProcedureStatement} from "../../../parser-node";
import {emitStoredProcedureIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitPartialStoredProcedureCharacteristics} from "../create-function-statement";

export function emitAlterProcedureStatement (statement : AlterProcedureStatement) {
    return new StringBuilder()
        .append("ALTER PROCEDURE ")
        .appendBuilder(emitStoredProcedureIdentifier(statement.storedProcedureIdentifier))
        .scope(builder => {
            const characteristics = emitPartialStoredProcedureCharacteristics(statement.characteristics)
            if (characteristics.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder
                    .appendBuilder(characteristics)
            })
        })
}
