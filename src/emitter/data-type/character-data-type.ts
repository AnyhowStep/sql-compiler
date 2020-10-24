import {CharacterDataType} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {emitFieldLength} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitCharacterDataType (dataType : CharacterDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.variableLength ?
            "VARCHAR" :
            "CHAR"
        )
        .appendBuilder(emitFieldLength(dataType.maxLength))
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
