import {DecimalDataType} from "../../parser-node";
import {emitPrecision} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitDecimalDataType (dataType : DecimalDataType) : StringBuilder {
    return new StringBuilder()
        .append("DECIMAL")
        .appendBuilder(emitPrecision(dataType.precision))
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
