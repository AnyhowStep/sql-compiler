import {DataType, ReverseSyntaxKind, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitBinaryDataType} from "./binary-data-type";
import {emitBitDataType} from "./bit-data-type";
import {emitBlobDataType} from "./blob-data-type";
import {emitBooleanDataType} from "./boolean-data-type";
import {emitCharacterDataType} from "./character-data-type";
import {emitDateDataType} from "./date-data-type";
import {emitDateTimeDataType} from "./date-time-data-type";
import {emitDecimalDataType} from "./decimal-data-type";
import {emitEnumDataType} from "./enum-data-type";
import {emitGeometryCollectionDataType} from "./geometry-collection-data-type";
import {emitGeometryDataType} from "./geometry-data-type";
import {emitIntegerDataType} from "./integer-data-type";
import {emitJsonDataType} from "./json-data-type";
import {emitRealDataType} from "./real-data-type";
import {emitTextDataType} from "./text-data-type";
import {emitTimeDataType} from "./time-data-type";
import {emitTimestampDataType} from "./timestamp-data-type";
import {emitYearDataType} from "./year-data-type";

export function emitDataType (dataType : DataType) : StringBuilder {
    return switchSyntaxKind(dataType)
        .case(SyntaxKind.BinaryDataType, emitBinaryDataType)
        .case(SyntaxKind.BitDataType, emitBitDataType)
        .case(SyntaxKind.BlobDataType, emitBlobDataType)
        .case(SyntaxKind.BooleanDataType, emitBooleanDataType)
        .case(SyntaxKind.CharacterDataType, emitCharacterDataType)
        .case(SyntaxKind.DateDataType, emitDateDataType)
        .case(SyntaxKind.DateTimeDataType, emitDateTimeDataType)
        .case(SyntaxKind.DecimalDataType, emitDecimalDataType)
        .case(SyntaxKind.EnumDataType, emitEnumDataType)
        .case(SyntaxKind.GeometryCollectionDataType, emitGeometryCollectionDataType)
        .case(SyntaxKind.GeometryDataType, emitGeometryDataType)
        .case(SyntaxKind.IntegerDataType, emitIntegerDataType)
        .case(SyntaxKind.JsonDataType, emitJsonDataType)
        .case(SyntaxKind.RealDataType, emitRealDataType)
        .case(SyntaxKind.TextDataType, emitTextDataType)
        .case(SyntaxKind.TimeDataType, emitTimeDataType)
        .case(SyntaxKind.TimestampDataType, emitTimestampDataType)
        .case(SyntaxKind.YearDataType, emitYearDataType)
        .default(() => new StringBuilder()
            .append(`TODO_DATA_TYPE(${ReverseSyntaxKind[dataType.syntaxKind]})`)
        )
}
