import {YearDataType} from "../../parser-node";
import {emitFieldLength} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitYearDataType (dataType : YearDataType) : StringBuilder {
    return new StringBuilder()
        .append("YEAR")
        .appendBuilder(emitFieldLength(dataType.fieldLength));
}
