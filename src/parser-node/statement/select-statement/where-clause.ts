import {Expression} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface WhereClause extends Node {
    syntaxKind : SyntaxKind.WhereClause,

    expr : Expression,
}
