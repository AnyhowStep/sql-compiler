import {BinaryDataType} from "../../parser-node";
import {emitFieldLength} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitBinaryDataType (dataType : BinaryDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.variableLength ?
            "VARBINARY" :
            "BINARY"
        )
        .appendBuilder(emitFieldLength(dataType.maxLength));
}
