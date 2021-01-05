import {SizeNumber} from "../../parser-node";
import {emitExpression} from "../expression";

export function emitSizeNumber (sizeNumber : SizeNumber) {
    return emitExpression(sizeNumber.value);
}
