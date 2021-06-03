import {field, optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/partitioning-subpartitions.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5372-L5374
 */
export const HashSubPartition = seq(
    field("subPartitionToken", TokenKind.SUBPARTITION),
    field("byToken", TokenKind.BY),
    field("linearToken", optional(TokenKind.LINEAR)),
    field("hashToken", TokenKind.HASH),
    field("parenthesizedBitExpression", SyntaxKind.ParenthesizedBitExpression),
    field("subPartitionCount", optional(SyntaxKind.SubPartitionCount)),
);
