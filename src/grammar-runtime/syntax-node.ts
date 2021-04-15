export interface MyToken {
    tokenKind : string;
    text : string,

    errorKind? : "Expected"|"Unexpected",
    expectedTokenKind? : string;

    start : number,
    end : number,

    //consecutiveErrors? : MyToken[],
}

export type Fields = Record<string, (MySyntaxNode|MyToken)[] | MySyntaxNode | MyToken | undefined>;

export interface MySyntaxNode {
    syntaxKind : string;
    children : (MySyntaxNode|MyToken)[];

    start : number,
    end : number,

    fields : Fields;
}
