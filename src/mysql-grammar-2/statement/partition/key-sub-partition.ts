import {field, optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5375
 */
export const KeySubPartition = seq(
    field("subPartitionToken", TokenKind.SUBPARTITION),
    field("byToken", TokenKind.BY),
    field("linearToken", optional(TokenKind.LINEAR)),
    field("keyToken", TokenKind.KEY),
    field("keyAlgorithm", optional(SyntaxKind.KeyAlgorithm)),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5376
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5385
     */
    field("identTuple1", SyntaxKind.IdentTuple1),
    field("subPartitionCount", optional(SyntaxKind.SubPartitionCount)),
);
