import {NodeArray} from "../../node-array";
import {SubPartitionDefinition} from "./sub-partition-definition";
import {PartitionDefinitionOptions} from "./partition-definition-options";
import {Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Expression} from "../../expression";

export interface RangePartitionDefinition extends Node {
    syntaxKind : SyntaxKind.RangePartitionDefinition,

    partitionName : Identifier,
    partitionValues : NodeArray<NodeArray<Expression|ValueNode<"MAXVALUE">>>,
    partitionDefinitionOptions : PartitionDefinitionOptions,

    subPartitionDefinitions : NodeArray<SubPartitionDefinition>,
}
