import {StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {PartitionDefinitionOptions} from "./partition-definition-options";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5768
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5828
 */
export interface SubPartitionDefinition extends Node {
    syntaxKind : SyntaxKind.SubPartitionDefinition,

    subPartitionName : Identifier|StringLiteral,
    partitionDefinitionOptions : PartitionDefinitionOptions,
}
