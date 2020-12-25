import {NodeArray2} from "../../node-array";
import {SubPartitionDefinitionList} from "./sub-partition-definition";
import {PartitionDefinitionOptions} from "./partition-definition-options";
import {Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Expression} from "../../expression";

export interface ExpressionOrMaxValueList extends NodeArray2<SyntaxKind.ExpressionOrMaxValueList, Expression|ValueNode<"MAXVALUE">> {

}

export interface RangePartitionDefinition extends Node {
    syntaxKind : SyntaxKind.RangePartitionDefinition,

    partitionName : Identifier,
    partitionValues : ExpressionOrMaxValueList,
    partitionDefinitionOptions : PartitionDefinitionOptions,

    subPartitionDefinitions : SubPartitionDefinitionList|undefined,
}

export interface RangePartitionDefinitionList extends NodeArray2<SyntaxKind.RangePartitionDefinitionList, RangePartitionDefinition> {

}
