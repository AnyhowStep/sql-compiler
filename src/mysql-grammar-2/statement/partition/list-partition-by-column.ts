import {allowedSyntaxKinds, field, optional, seq, tokenSymbol} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5255
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5313
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5284
 *
 * @see {ListPartitionByColumnTuple2}
 */
export const ListPartitionByColumn = seq(
    field("partitionToken", TokenKind.PARTITION),
    field("byToken", TokenKind.BY),
    field("listToken", TokenKind.LIST),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5314
     */
    field("columnsToken", tokenSymbol(TokenKind.COLUMNS, TokenKind.FIELDS)),
    field("parenthesizedIdent", SyntaxKind.ParenthesizedIdent),
    field("partitionCount", optional(SyntaxKind.PartitionCount)),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5235
     *
     * `opt_sub_part`
     */
    field("subPartition", optional(SyntaxKind.SubPartition)),
    field("listPartitionDefinitionTuple1", allowedSyntaxKinds(
        [SyntaxKind.SingletonListPartitionDefinitionTuple1],
        SyntaxKind.ListPartitionDefinitionTuple1
    )),
);
