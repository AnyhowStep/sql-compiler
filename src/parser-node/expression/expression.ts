import {Node} from "../node";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";

export interface Expression extends Node {

}

export interface ExpressionList extends NodeArray2<SyntaxKind.ExpressionList, Expression> {

}

export interface ExpressionListList extends NodeArray2<SyntaxKind.ExpressionListList, ExpressionList> {

}
