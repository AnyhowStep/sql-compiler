import {DataType, ReverseSyntaxKind, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitBooleanDataType} from "./boolean-data-type";

export function emitDataType (dataType : DataType) : StringBuilder {
    return switchSyntaxKind(dataType)
        .case(SyntaxKind.BooleanDataType, emitBooleanDataType)
        .default(() => new StringBuilder()
            .append(`TODO_DATA_TYPE(${ReverseSyntaxKind[dataType.syntaxKind]})`)
        )
}
