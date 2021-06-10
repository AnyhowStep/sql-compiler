import {choice, field, optional, seq} from "../../../grammar-builder";
import {parentheses, tuple1} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 *
 */
export const SingletonRangePartitionDefinition = seq(
    field("partitionToken", TokenKind.PARTITION),
    field("partitionName", SyntaxKind.Ident),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5544
     */
    field("valuesToken", TokenKind.VALUES),
    field("lessToken", TokenKind.LESS),
    field("thanToken", TokenKind.THAN),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5574
     */
    field("maxValue", choice(
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5688
         */
        parentheses(choice(SyntaxKind.BitExpression, TokenKind.MAXVALUE)),
        TokenKind.MAXVALUE,
    )),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5504
     */
    field("partitionDefinitionOptionRepeat1", optional(SyntaxKind.PartitionDefinitionOptionRepeat1)),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5505
     *
     * @todo This is only allowed if the parent node's `subPartition` field is set.
     * @todo Merge nodes? Push checking down pipeline?
     */
    field("subPartitionDefinitionTuple1", optional(SyntaxKind.SubPartitionDefinitionTuple1)),
);

export const SingletonRangePartitionDefinitionTuple1 = tuple1(SyntaxKind.SingletonRangePartitionDefinition);
