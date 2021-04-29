import {optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const ListPartitionByColumn = seq(
    TokenKind.PARTITION,
    TokenKind.BY,
    TokenKind.LIST,
    TokenKind.COLUMNS,
    TokenKind.OpenParentheses,
    TokenKind.Identifier,
    TokenKind.CloseParentheses,
    optional(seq(
        TokenKind.PARTITIONS,
        TokenKind.IntegerLiteral,
    )),
    optional(SyntaxKind.SubPartition),
    SyntaxKind.SingletonListPartitionDefinitionTuple1,
);
