import {CharacterDataType} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";

export function emitCharacterDataTypeModifier (dataType : Pick<CharacterDataType, "characterSet"|"collate"|"binary">) : StringBuilder {
    return new StringBuilder()
        .scope(builder => {
            if (dataType.characterSet == undefined) {
                return;
            }
            builder
                .append(" CHARACTER SET ")
                .appendBuilder(emitExpression(dataType.characterSet));
        })
        .scope(builder => {
            if (dataType.collate == undefined) {
                return;
            }
            builder
                .append(" COLLATE ")
                .appendBuilder(emitExpression(dataType.collate));
        })
        .append(
            dataType.binary == undefined ?
            undefined :
            " BINARY"
        );
}
