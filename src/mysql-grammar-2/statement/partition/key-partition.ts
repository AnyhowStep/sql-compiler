import {field, optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5239
 */
export const KeyPartition = seq(
    field("partitionToken", TokenKind.PARTITION),
    field("byToken", TokenKind.BY),
    field("linearToken", optional(TokenKind.LINEAR)),
    field("keyToken", TokenKind.KEY),
    field("keyAlgorithm", optional(SyntaxKind.KeyAlgorithm)),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5239
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5284
     */
    field("identTuple1", SyntaxKind.IdentTuple1),
    field("partitionCount", optional(SyntaxKind.PartitionCount)),
);
