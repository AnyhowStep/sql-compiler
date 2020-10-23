import {BooleanDataType} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitBooleanDataType (_dataType : BooleanDataType) : StringBuilder {
    return new StringBuilder().append("BOOLEAN");
}
