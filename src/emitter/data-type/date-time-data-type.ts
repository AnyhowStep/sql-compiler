import {DateTimeDataType} from "../../parser-node";
import {emitFieldLength} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitDateTimeDataType (dataType : DateTimeDataType) : StringBuilder {
    return new StringBuilder()
        .append("DATETIME")
        .appendBuilder(emitFieldLength(dataType.fractionalSecondPrecision));
}
