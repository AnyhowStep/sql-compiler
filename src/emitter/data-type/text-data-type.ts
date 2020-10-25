import {TextDataType} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitCharacterDataTypeModifier} from "./emit-character-data-type-modifier";

export function emitTextDataType (dataType : TextDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.lengthBytes == 8 ?
            "TINYTEXT" :
            dataType.lengthBytes == 16 ?
            "TEXT" :
            dataType.lengthBytes == 24 ?
            "MEDIUMTEXT" :
            "LONGTEXT"
        )
        .appendBuilder(emitCharacterDataTypeModifier(dataType));
}
