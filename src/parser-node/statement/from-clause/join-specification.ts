import {Expression} from "../../expression";
import {IdentifierList} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface JoinSpecificationOn extends Node {
    syntaxKind : SyntaxKind.JoinSpecificationOn,

    expr : Expression,
}

export interface JoinSpecificationUsing extends Node {
    syntaxKind : SyntaxKind.JoinSpecificationUsing,

    identifiers : IdentifierList,
}

export type JoinSpecification =
    | JoinSpecificationOn
    | JoinSpecificationUsing
;
