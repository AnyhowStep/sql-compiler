import {field, optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const ListPartitionByExpression = seq(
    field("partitionToken", TokenKind.PARTITION),
    field("byToken", TokenKind.BY),
    field("listToken", TokenKind.LIST),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5408
     */
    field("parenthesizedBitExpression", SyntaxKind.ParenthesizedBitExpression),
    field("partitionCount", optional(SyntaxKind.PartitionCount)),
    field("subPartition", optional(SyntaxKind.SubPartition)),
    field("listPartitionDefinitionTuple1", SyntaxKind.ListPartitionDefinitionTuple1),
);
