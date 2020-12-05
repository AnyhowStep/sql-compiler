import {Expression, IntegerLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface HashSubPartition extends Node {
    syntaxKind : SyntaxKind.HashSubPartition,

    /**
     * Defaults to `false`
     */
    linear : boolean,
    subPartitionExpr : Expression,
    subPartitionCount : IntegerLiteral|undefined,
}
