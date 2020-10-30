export interface TokenObj<TokenKindT> {
    start : number,
    end : number,
    tokenKind : TokenKindT;
    value : string,
    getTokenSourceText : () => string,
}
