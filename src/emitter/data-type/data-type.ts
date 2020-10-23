import {DataType, ReverseSyntaxKind, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitBinaryDataType} from "./binary-data-type";
import {emitBlobDataType} from "./blob-data-type";
import {emitBooleanDataType} from "./boolean-data-type";
import {emitIntegerDataType} from "./integer-data-type";

export function emitDataType (dataType : DataType) : StringBuilder {
    return switchSyntaxKind(dataType)
        .case(SyntaxKind.BinaryDataType, emitBinaryDataType)
        .case(SyntaxKind.BlobDataType, emitBlobDataType)
        .case(SyntaxKind.BooleanDataType, emitBooleanDataType)
        .case(SyntaxKind.IntegerDataType, emitIntegerDataType)
        .default(() => new StringBuilder()
            .append(`TODO_DATA_TYPE(${ReverseSyntaxKind[dataType.syntaxKind]})`)
        )
}
