import {field, optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/partitioning-hash.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5217
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5234
 */
export const HashPartition = seq(
    field("partitionToken", TokenKind.PARTITION),
    field("byToken", TokenKind.BY),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5246
     */
    field("linearToken", optional(TokenKind.LINEAR)),
    field("hashToken", TokenKind.HASH),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5248
     */
    field("parenthesizedBitExpression", SyntaxKind.ParenthesizedBitExpression),
    field("partitionCount", optional(SyntaxKind.PartitionCount)),
);
