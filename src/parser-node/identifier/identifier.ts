import {Node} from "../node";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";

export interface Identifier extends Node {
    readonly syntaxKind : SyntaxKind.Identifier,
    identifier : string,
    quoted : boolean,
}

export interface IdentifierList extends NodeArray2<SyntaxKind.IdentifierList, Identifier> {

}
