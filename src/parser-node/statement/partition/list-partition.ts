import {Expression, IntegerLiteral} from "../../expression";
import {IdentifierList} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {ListPartitionDefinitionList} from "./list-partition-definition";
import {SubPartition} from "./sub-partition";

export interface ListPartition extends Node {
    syntaxKind : SyntaxKind.ListPartition,

    partitionExprOrColumns : Expression|IdentifierList,
    /**
     * If set, must equal `partitionDefinitions.length`
     */
    partitionCount : IntegerLiteral|undefined,

    subPartition : SubPartition|undefined,

    partitionDefinitions : ListPartitionDefinitionList,
}
