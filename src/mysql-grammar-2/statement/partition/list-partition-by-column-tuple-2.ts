import {optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const ListPartitionByColumnTuple2 = seq(
    TokenKind.PARTITION,
    TokenKind.BY,
    TokenKind.LIST,
    TokenKind.COLUMNS,
    SyntaxKind.IdentTuple2,
    optional(seq(
        TokenKind.PARTITIONS,
        TokenKind.IntegerLiteral,
    )),
    optional(SyntaxKind.SubPartition),
    optional(SyntaxKind.MultitonListPartitionDefinitionTuple1),
);
