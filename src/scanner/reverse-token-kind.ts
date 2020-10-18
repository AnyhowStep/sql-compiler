import {TokenKind, tokenKinds} from "./token-kind.generated";

export const ReverseTokenKind = tokenKinds.reduce(
    (memo, key, index) => {
        (memo as any)[index] = key;
        return memo;
    },
    {} as Record<TokenKind, string>
);
