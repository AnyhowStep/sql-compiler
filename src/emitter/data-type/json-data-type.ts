import {JsonDataType} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitJsonDataType (_dataType : JsonDataType) : StringBuilder {
    return new StringBuilder()
        .append("JSON");
}
