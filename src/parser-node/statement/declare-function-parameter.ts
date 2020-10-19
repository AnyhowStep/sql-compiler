import {UnionDataType} from "../data-type";
import {Identifier} from "../identifier";
import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

export interface DeclareFunctionParameter extends Node {
    syntaxKind : SyntaxKind.DeclareFunctionParameter;
    identifier : Identifier;
    dataType : UnionDataType;
}
