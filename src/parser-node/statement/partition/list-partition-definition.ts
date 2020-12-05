import {NodeArray} from "../../node-array";
import {SubPartitionDefinition} from "./sub-partition-definition";
import {PartitionDefinitionOptions} from "./partition-definition-options";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Expression} from "../../expression";

export interface ListPartitionDefinition extends Node {
    syntaxKind : SyntaxKind.ListPartitionDefinition,

    partitionName : Identifier,
    /**
     * Cannot use `MAXVALUE`
     */
    partitionValues : NodeArray<NodeArray<Expression>>,
    partitionDefinitionOptions : PartitionDefinitionOptions,

    subPartitionDefinitions : NodeArray<SubPartitionDefinition>,
}
