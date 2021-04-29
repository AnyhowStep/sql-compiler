import {optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const HashPartition = seq(
    TokenKind.PARTITION,
    TokenKind.BY,
    optional(TokenKind.LINEAR),
    TokenKind.HASH,
    TokenKind.OpenParentheses,
    SyntaxKind.BitExpression,
    TokenKind.CloseParentheses,
    optional(seq(
        TokenKind.PARTITIONS,
        TokenKind.IntegerLiteral,
    )),
);
