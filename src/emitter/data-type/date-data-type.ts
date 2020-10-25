import {DateDataType} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitDateDataType (_dataType : DateDataType) : StringBuilder {
    return new StringBuilder().append("DATE");
}
