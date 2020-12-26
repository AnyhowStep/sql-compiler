import {CreateUserDefinedFunctionStatement, UserDefinedFunctionReturnType} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitStringLiteral} from "../../expression";

export function emitCreateUserDefinedFunctionStatement (statement : CreateUserDefinedFunctionStatement) {
    return new StringBuilder()
        .append("CREATE")
        .append(
            statement.aggregate.value ?
            " AGGREGATE" :
            undefined
        )
        .append(" FUNCTION ")
        .appendBuilder(emitIdentifier(statement.identifier))
        .indent(builder => {
            builder
                .append("RETURNS ")
                .append(
                    statement.returnType.value == UserDefinedFunctionReturnType.STRING ?
                    "STRING" :
                    statement.returnType.value == UserDefinedFunctionReturnType.INTEGER ?
                    "INTEGER" :
                    statement.returnType.value == UserDefinedFunctionReturnType.REAL ?
                    "REAL" :
                    "DECIMAL"
                )
        })
        .indent(builder => {
            builder
                .append("SONAME ")
                .appendBuilder(emitStringLiteral(statement.sharedLibraryName))
        })
}
