import {TokenKind} from "../scanner";

export interface TokenObj<TokenKindT extends TokenKind> {
    start : number,
    end : number,
    tokenKind : TokenKindT;
    value : string,
    getTokenSourceText : () => string,
}
