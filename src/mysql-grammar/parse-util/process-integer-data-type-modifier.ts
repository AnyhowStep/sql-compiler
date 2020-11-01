import {TokenKind} from "../../scanner";
import {TokenObj} from "../../nearley-wrapper";
import {getTextRange} from "./text-range";
import {IntegerDataTypeModifier} from "../custom-data";

export function createDefaultIntegerDataTypeModifier () : IntegerDataTypeModifier {
    return {
        start : -1,
        end : -1,

        signed : true,
        zeroFill : false,
    };
}

export function processIntegerDataTypeModifier (
    //state : ParserState,
    current : IntegerDataTypeModifier,
    next : (
        | TokenObj<TokenKind.SIGNED>
        | TokenObj<TokenKind.UNSIGNED>
        | TokenObj<TokenKind.ZEROFILL>
    )
) : IntegerDataTypeModifier {
    let result = {
        ...current,
        ...getTextRange([current, next]),
    };

    if (next.tokenKind == TokenKind.SIGNED) {
        return result;
    }

    if (next.tokenKind == TokenKind.UNSIGNED) {
        result.signed = false;
        return result;
    }

    if (next.tokenKind == TokenKind.ZEROFILL) {
        result.signed = false;
        result.zeroFill = true;
        return result;
    }

    return result;
}
