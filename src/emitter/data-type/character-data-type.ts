import {CharacterDataType} from "../../parser-node";
import {emitFieldLength} from "../misc";
import {StringBuilder} from "../string-builder";
import {emitCharacterDataTypeModifier} from "./emit-character-data-type-modifier";

export function emitCharacterDataType (dataType : CharacterDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.variableLength ?
            "VARCHAR" :
            "CHAR"
        )
        .appendBuilder(emitFieldLength(dataType.maxLength))
        .appendBuilder(emitCharacterDataTypeModifier(dataType));
}
