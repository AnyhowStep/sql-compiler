import {TimestampDataType} from "../../parser-node";
import {emitFieldLength} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitTimestampDataType (dataType : TimestampDataType) : StringBuilder {
    return new StringBuilder()
        .append("TIMESTAMP")
        .appendBuilder(emitFieldLength(dataType.fractionalSecondPrecision));
}
