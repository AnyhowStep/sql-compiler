export interface MyToken<TokenKindT extends string=string> {
    tokenKind : TokenKindT;
    text : string,

    errorKind? : "Expected"|"Unexpected",
    expectedTokenKind? : string;

    start : number,
    end : number,

    //consecutiveErrors? : MyToken[],
}

export interface MyToken2 extends MyToken {
    tokenIndex : number;
}

export type Fields = Record<string, (MySyntaxNode|MyToken)[] | MySyntaxNode | MyToken | undefined>;

export interface MySyntaxNode {
    syntaxKind : string;
    children : (MySyntaxNode|MyToken2)[];

    start : number,
    end : number,

    startTokenIndex : number,
    endTokenIndex : number,

    fields : Fields;

    precedence : number;
}
