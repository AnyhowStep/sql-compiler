import {Expression} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface JoinSpecificationOn extends Node {
    syntaxKind : SyntaxKind.JoinSpecificationOn,

    expr : Expression,
}

export interface JoinSpecificationUsing extends Node {
    syntaxKind : SyntaxKind.JoinSpecificationUsing,

    identifiers : NodeArray<Identifier>,
}

export type JoinSpecification =
    | JoinSpecificationOn
    | JoinSpecificationUsing
;
