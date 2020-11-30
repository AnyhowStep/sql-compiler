import {EnumDataType} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";
import {emitCharacterDataTypeModifier} from "./emit-character-data-type-modifier";

export function emitEnumDataType (dataType : EnumDataType) : StringBuilder {
    return new StringBuilder()
        .append("ENUM")
        .append("(")
        .loop(
            dataType.elements,
            builder => builder.append(", "),
            (builder, element) => builder.appendBuilder(emitExpression(element)),
        )
        .append(")")
        .appendBuilder(emitCharacterDataTypeModifier(dataType));
}
