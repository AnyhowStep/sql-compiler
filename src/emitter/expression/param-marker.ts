import {ParamMarker} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitParamMarker (_expr : ParamMarker) : StringBuilder {
    return new StringBuilder().append("?");
}
