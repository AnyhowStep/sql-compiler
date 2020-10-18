import {TokenKind, tokenKinds} from "./token-kind.generated";

export const textToTokenKind : Record<string, TokenKind> = {
    ...tokenKinds.reduce(
        (memo, key, index) => {
            if (index != TokenKind.END_OF_RESERVED_KEYWORD && index < TokenKind.END_OF_NON_RESERVED_KEYWORD) {
                memo[key] = index;
            }
            return memo;
        },
        {} as Record<string, TokenKind>
    ),
    //@todo Maybe other kinds of tokens?
};

export function tryGetTokenKindFromText (text : string) : TokenKind|undefined {
    const upper = text.toUpperCase();
    if (Object.prototype.hasOwnProperty.call(textToTokenKind, upper)) {
        return textToTokenKind[upper];
    } else {
        return undefined;
    }
}
