import {NodeArray2} from "../../node-array";
import {SubPartitionDefinitionList} from "./sub-partition-definition";
import {PartitionDefinitionOptions} from "./partition-definition-options";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {ExpressionListList} from "../../expression";

export interface ListPartitionDefinition extends Node {
    syntaxKind : SyntaxKind.ListPartitionDefinition,

    partitionName : Identifier,
    /**
     * Cannot use `MAXVALUE`
     */
    partitionValues : ExpressionListList,
    partitionDefinitionOptions : PartitionDefinitionOptions,

    subPartitionDefinitions : SubPartitionDefinitionList|undefined,
}

export interface ListPartitionDefinitionList extends NodeArray2<SyntaxKind.ListPartitionDefinitionList, ListPartitionDefinition> {

}
