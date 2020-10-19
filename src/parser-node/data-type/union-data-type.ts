import {Node} from "../node";
import {NodeArray} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";
import {DataType} from "./data-type";

export interface UnionDataType extends Node {
    syntaxKind : SyntaxKind.UnionDataType;

    dataTypes : NodeArray<DataType>;
}
