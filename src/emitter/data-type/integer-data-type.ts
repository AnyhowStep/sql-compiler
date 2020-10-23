import {IntegerDataType} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitIntegerDataType (dataType : IntegerDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.bytes == 1 ?
            "TINYINT" :
            dataType.bytes == 2 ?
            "SMALLINT" :
            dataType.bytes == 3 ?
            "MEDIUMINT" :
            dataType.bytes == 4 ?
            "INT" :
            "BIGINT"
        )
        .scope(builder => {
            if (dataType.displayWidth == undefined) {
                return;
            }
            builder
                .append("(")
                .append(dataType.displayWidth.toString())
                .append(")")
        })
        .append(
            dataType.signed ?
            " SIGNED" :
            " UNSIGNED"
        )
        .append(
            dataType.zeroFill ?
            " ZEROFILL" :
            undefined
        );
}
