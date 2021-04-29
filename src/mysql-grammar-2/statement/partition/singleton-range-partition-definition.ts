import {choice, optional, seq} from "../../../grammar-builder";
import {parentheses, tuple1} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 *
 */
export const SingletonRangePartitionDefinition = seq(
    TokenKind.PARTITION,
    SyntaxKind.Ident,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5544
     */
    TokenKind.VALUES,
    TokenKind.LESS,
    TokenKind.THAN,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5574
     */
    choice(
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5688
         */
        parentheses(choice(SyntaxKind.BitExpression, TokenKind.MAXVALUE)),
        TokenKind.MAXVALUE,
    ),
    optional(SyntaxKind.PartitionDefinitionOptionRepeat1),
    optional(SyntaxKind.SubPartitionDefinitionTuple1),
);

export const SingletonRangePartitionDefinitionTuple1 = tuple1(SyntaxKind.SingletonRangePartitionDefinition);
