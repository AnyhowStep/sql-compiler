import {allowedSyntaxKinds, field, optional, seq, tokenSymbol} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const ListPartitionByColumnTuple2 = seq(
    field("partitionToken", TokenKind.PARTITION),
    field("byToken", TokenKind.BY),
    field("listToken", TokenKind.LIST),
    field("columnsToken", tokenSymbol(TokenKind.COLUMNS, TokenKind.FIELDS)),
    field("identTuple2", SyntaxKind.IdentTuple2),
    field("partitionCount", optional(SyntaxKind.PartitionCount)),
    field("subPartition", optional(SyntaxKind.SubPartition)),
    field("listPartitionDefinitionTuple1", allowedSyntaxKinds(
            [SyntaxKind.MultitonListPartitionDefinitionTuple1],
            SyntaxKind.ListPartitionDefinitionTuple1
    )),
);
