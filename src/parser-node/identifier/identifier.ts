import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

export interface Identifier extends Node {
    readonly syntaxKind : SyntaxKind.Identifier,
    identifier : string,
    quoted : boolean,
}
