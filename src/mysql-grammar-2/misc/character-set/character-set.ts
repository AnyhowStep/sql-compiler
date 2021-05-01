import {choice, field, optional, seq, tokenSymbol2} from "../../../grammar-builder";
import {identifier} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const DefaultCharacterSet = seq(
    field("defaultToken", optional(TokenKind.DEFAULT)),
    SyntaxKind.CharSet,
    field("equalToken", optional(TokenKind.Equal)),
    field("characterSetName", SyntaxKind.CharacterSetNameOrDefault),
);

export const CharacterSetNameOrDefault = choice(
    TokenKind.DEFAULT,
    tokenSymbol2(
        identifier,
        TokenKind.BINARY,
        TokenKind.StringLiteral,
    ),
);

export const CharSet = choice(
    seq(
        field("characterSetToken", TokenKind.CHARACTER),
        field("characterSetToken", TokenKind.SET)
    ),
    field("characterSetToken", TokenKind.CHARSET),
);
