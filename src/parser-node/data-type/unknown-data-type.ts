import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

export interface UnknownDataType extends Node {
    syntaxKind : SyntaxKind.UnknownDataType;
}
