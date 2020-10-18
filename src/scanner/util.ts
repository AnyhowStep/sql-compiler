import {TokenKind} from "./token-kind.generated";

export function isReserved (tokenKind : TokenKind) : boolean {
    return tokenKind < TokenKind.END_OF_RESERVED_KEYWORD;
}

export function isNonReserved (tokenKind : TokenKind) : boolean {
    return tokenKind > TokenKind.END_OF_RESERVED_KEYWORD && tokenKind < TokenKind.END_OF_NON_RESERVED_KEYWORD;
}

export function isKeyword (tokenKind : TokenKind) : boolean {
    return tokenKind != TokenKind.END_OF_RESERVED_KEYWORD && tokenKind < TokenKind.END_OF_NON_RESERVED_KEYWORD;
}
