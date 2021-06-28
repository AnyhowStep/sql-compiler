import {FieldCheck} from "./grammar";

export interface MyToken<TokenKindT extends string=string> {
    tokenKind : TokenKindT;
    text : string,

    errorKind? : "Expected"|"Unexpected",
    expectedTokenKind? : string;
    skipExpectationAfterExtraCost? : number | undefined;

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
    /**
     * We don't have `Expected` yet.
     * Errors in `MySyntaxNode` do not increase `errorCount` of the state.
     */
    errorKind : "Unexpected"|undefined,
    fieldErrors : undefined | FieldCheck[],
}
