import {Expression} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface HavingClause extends Node {
    syntaxKind : SyntaxKind.HavingClause,

    expr : Expression,
}
