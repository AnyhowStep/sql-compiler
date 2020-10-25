import {TimeDataType} from "../../parser-node";
import {emitFieldLength} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitTimeDataType (dataType : TimeDataType) : StringBuilder {
    return new StringBuilder()
        .append("TIME")
        .appendBuilder(emitFieldLength(dataType.fractionalSecondPrecision));
}
