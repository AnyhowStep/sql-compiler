import {AlterFunctionStatement} from "../../../parser-node";
import {emitStoredFunctionIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitPartialStoredProcedureCharacteristics} from "../create-function-statement";

export function emitAlterFunctionStatement (statement : AlterFunctionStatement) {
    return new StringBuilder()
        .append("ALTER FUNCTION ")
        .appendBuilder(emitStoredFunctionIdentifier(statement.storedFunctionIdentifier))
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
