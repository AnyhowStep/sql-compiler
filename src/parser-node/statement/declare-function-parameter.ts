import {UnionDataType} from "../data-type";
import {Identifier} from "../identifier";
import {Node} from "../node";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";

export interface DeclareFunctionParameter extends Node {
    syntaxKind : SyntaxKind.DeclareFunctionParameter;
    identifier : Identifier;
    dataType : UnionDataType;
}

export interface DeclareFunctionParameterList extends NodeArray2<SyntaxKind.DeclareFunctionParameterList, DeclareFunctionParameter> {

}
