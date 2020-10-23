import {BinaryDataType} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitBinaryDataType (dataType : BinaryDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.variableLength ?
            "VARBINARY" :
            "BINARY"
        )
        .append("(")
        .append(dataType.maxLength.toString())
        .append(")");
}
