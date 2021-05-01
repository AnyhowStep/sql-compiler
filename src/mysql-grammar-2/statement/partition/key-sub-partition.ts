import {optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const HashSubPartition = seq(
    TokenKind.SUBPARTITION,
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
        TokenKind.SUBPARTITIONS,
        TokenKind.IntegerLiteral,
    )),
);
