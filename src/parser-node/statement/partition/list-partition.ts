import {Expression, IntegerLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {ListPartitionDefinition} from "./list-partition-definition";
import {SubPartition} from "./sub-partition";

export interface ListPartition extends Node {
    syntaxKind : SyntaxKind.ListPartition,

    partitionExprOrColumns : Expression|NodeArray<Identifier>,
    /**
     * If set, must equal `partitionDefinitions.length`
     */
    partitionCount : IntegerLiteral|undefined,

    subPartition : SubPartition|undefined,

    partitionDefinitions : NodeArray<ListPartitionDefinition>,
}
