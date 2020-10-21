import {SyntaxKind, syntaxKinds} from "./syntax-kind.generated";

export const ReverseSyntaxKind = syntaxKinds.reduce(
    (memo, key, index) => {
        (memo as any)[index + 1000] = key;
        return memo;
    },
    {} as Record<SyntaxKind, string>
);
