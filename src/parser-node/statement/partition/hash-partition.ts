import {Expression, IntegerLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface HashPartition extends Node {
    syntaxKind : SyntaxKind.HashPartition,

    /**
     * Defaults to `false`
     */
    linear : boolean,
    partitionExpr : Expression,
    partitionCount : IntegerLiteral|undefined,
}
