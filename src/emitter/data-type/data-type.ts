import {DataType, ReverseSyntaxKind, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitBinaryDataType} from "./binary-data-type";
import {emitBitDataType} from "./bit-data-type";
import {emitBlobDataType} from "./blob-data-type";
import {emitBooleanDataType} from "./boolean-data-type";
import {emitCharacterDataType} from "./character-data-type";
import {emitDateDataType} from "./date-data-type";
import {emitIntegerDataType} from "./integer-data-type";
import {emitRealDataType} from "./real-data-type";
import {emitYearDataType} from "./year-data-type";

export function emitDataType (dataType : DataType) : StringBuilder {
    return switchSyntaxKind(dataType)
        .case(SyntaxKind.BinaryDataType, emitBinaryDataType)
        .case(SyntaxKind.BitDataType, emitBitDataType)
        .case(SyntaxKind.BlobDataType, emitBlobDataType)
        .case(SyntaxKind.BooleanDataType, emitBooleanDataType)
        .case(SyntaxKind.CharacterDataType, emitCharacterDataType)
        .case(SyntaxKind.DateDataType, emitDateDataType)
        .case(SyntaxKind.IntegerDataType, emitIntegerDataType)
        .case(SyntaxKind.RealDataType, emitRealDataType)
        .case(SyntaxKind.YearDataType, emitYearDataType)
        .default(() => new StringBuilder()
            .append(`TODO_DATA_TYPE(${ReverseSyntaxKind[dataType.syntaxKind]})`)
        )
}
