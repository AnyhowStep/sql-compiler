import {Node} from "./node";
import {SyntaxKind} from "./syntax-kind.generated";

/**
 * @deprecated
 */
export interface NodeArray<T> extends Array<T>, Node {

}

export interface NodeArray2<SyntaxKindT extends SyntaxKind, T> extends Array<T>, Node {
    syntaxKind : SyntaxKindT;
}
