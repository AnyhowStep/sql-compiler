import {optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const KeySubPartition = seq(
    TokenKind.SUBPARTITION,
    TokenKind.BY,
    optional(TokenKind.LINEAR),
    TokenKind.HASH,
    TokenKind.OpenParentheses,
    SyntaxKind.BitExpression,
    TokenKind.CloseParentheses,
    optional(seq(
        TokenKind.SUBPARTITIONS,
        TokenKind.IntegerLiteral,
    )),
);
