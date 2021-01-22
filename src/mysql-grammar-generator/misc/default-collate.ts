import {DefaultCollation, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {optional} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";

makeCustomRule(SyntaxKind.DefaultCollation)
    .addSubstitution(
        [
            optional(TokenKind.DEFAULT),
            TokenKind.COLLATE,
            optional(TokenKind.Equal),
            CustomSyntaxKind.CollationNameOrDefault,
        ] as const,
        (data) : DefaultCollation => {
            const [, , , collationName] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DefaultCollation,
                collationName,
            };
        }
    );
