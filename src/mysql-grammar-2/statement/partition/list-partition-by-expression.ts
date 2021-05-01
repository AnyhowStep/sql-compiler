import {optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const ListPartitionByExpression = seq(
    TokenKind.PARTITION,
    TokenKind.BY,
    TokenKind.LIST,
    TokenKind.OpenParentheses,
    /**
     * @todo make this `bit_expr` as in,
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9399
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5408
     */
    SyntaxKind.BitExpression,
    TokenKind.CloseParentheses,
    optional(seq(
        TokenKind.PARTITIONS,
        TokenKind.IntegerLiteral,
    )),
    optional(SyntaxKind.SubPartition),
    SyntaxKind.SingletonListPartitionDefinitionTuple1,
);
