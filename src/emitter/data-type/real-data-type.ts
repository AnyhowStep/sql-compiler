import {RealDataType} from "../../parser-node";
import {emitPrecision} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitRealDataType (dataType : RealDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.bytes == 4 ?
            "FLOAT" :
            "DOUBLE"
        )
        .scope(builder => {
            if (dataType.precision == undefined) {
                return;
            }
            builder.appendBuilder(emitPrecision(dataType.precision))
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
