import {choice, field, optional, seq, tokenSymbol2} from "../../../grammar-builder";
import {identifier} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const DefaultCollate = seq(
    field("defaultToken", optional(TokenKind.DEFAULT)),
    field("collateToken", TokenKind.COLLATE),
    field("equalToken", optional(TokenKind.Equal)),
    field("collationName", SyntaxKind.CollationNameOrDefault),
);

export const CollationNameOrDefault = choice(
    TokenKind.DEFAULT,
    tokenSymbol2(
        identifier,
        TokenKind.StringLiteral,
    ),
);
