import {TextRange} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {TokenObj} from "../nearley-util";
import {getTextRange} from "./text-range";

export interface IntegerDataTypeModifier extends TextRange {
    signed : boolean;

    /**
     * If `true`, then `signed` must be `false`
     */
    zeroFill : boolean;
}

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
