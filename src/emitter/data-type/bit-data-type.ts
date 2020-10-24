import {BitDataType} from "../../parser-node";
import {emitFieldLength} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitBitDataType (dataType : BitDataType) : StringBuilder {
    return new StringBuilder()
        .append("BIT")
        .appendBuilder(emitFieldLength(dataType.bits));
}
