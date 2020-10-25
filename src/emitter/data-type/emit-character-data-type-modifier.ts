import {CharacterDataType} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";

export function emitCharacterDataTypeModifier (dataType : Pick<CharacterDataType, "characterSet"|"collate"|"binary">) : StringBuilder {
    return new StringBuilder()
        .scope(builder => {
            if (dataType.characterSet == undefined) {
                return;
            }
            builder
                .append(" CHARACTER SET ")
                .appendBuilder(emitIdentifier(dataType.characterSet));
        })
        .scope(builder => {
            if (dataType.collate == undefined) {
                return;
            }
            builder
                .append(" COLLATE ")
                .appendBuilder(emitIdentifier(dataType.collate));
        })
        .append(
            dataType.binary == undefined ?
            undefined :
            " BINARY"
        );
}
