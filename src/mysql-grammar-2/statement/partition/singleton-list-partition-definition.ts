import {field, optional, seq} from "../../../grammar-builder";
import {tuple1} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5485
 */
export const SingletonListPartitionDefinition = seq(
    field("partitionToken", TokenKind.PARTITION),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5520
     */
    field("partitionName", SyntaxKind.Ident),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5558
     */
    field("valuesToken", TokenKind.VALUES),
    field("inToken", TokenKind.IN),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5601
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5646
     */
    field("bitExpressionTuple1", SyntaxKind.BitExpressionTuple1),
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

export const SingletonListPartitionDefinitionTuple1 = tuple1(SyntaxKind.SingletonListPartitionDefinition);
