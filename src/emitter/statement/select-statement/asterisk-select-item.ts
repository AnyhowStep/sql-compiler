import {AsteriskSelectItem} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";

export function emitAsteriskSelectItem (_item : AsteriskSelectItem) {
    return new StringBuilder().append("*")
}
