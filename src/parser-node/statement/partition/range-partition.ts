import {Expression, IntegerLiteral} from "../../expression";
import {IdentifierList} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {RangePartitionDefinitionList} from "./range-partition-definition";
import {SubPartition} from "./sub-partition";

export interface RangePartition extends Node {
    syntaxKind : SyntaxKind.RangePartition,

    partitionExprOrColumns : Expression|IdentifierList,
    /**
     * If set, must equal `partitionDefinitions.length`
     */
    partitionCount : IntegerLiteral|undefined,

    subPartition : SubPartition|undefined,

    partitionDefinitions : RangePartitionDefinitionList,
}
