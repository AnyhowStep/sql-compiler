import {optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const KeyPartition = seq(
    TokenKind.PARTITION,
    TokenKind.BY,
    optional(TokenKind.LINEAR),
    TokenKind.KEY,
    optional(seq(
        TokenKind.ALGORITHM,
        TokenKind.Equal,
        TokenKind.IntegerLiteral,
    )),
    SyntaxKind.IdentTuple1,
    optional(seq(
        TokenKind.PARTITIONS,
        TokenKind.IntegerLiteral,
    )),
);
