import {field, optional, seq} from "../../../grammar-builder";
import {identifierOrStringLiteral, tuple1} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5768
 */
export const SubPartitionDefinition = seq(
    field("subPartitionToken", TokenKind.SUBPARTITION),
    field("subPartitionName", identifierOrStringLiteral),
    field("partitionDefinitionOptionRepeat1", optional(SyntaxKind.PartitionDefinitionOptionRepeat1)),
);

export const SubPartitionDefinitionTuple1 = tuple1(SyntaxKind.SubPartitionDefinition);
