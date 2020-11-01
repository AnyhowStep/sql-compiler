import {Node, NodeArray, SyntaxKind, TextRange} from "../../parser-node";

export function toNodeArray<T extends Node, SyntaxKindT extends SyntaxKind> (
    arr : readonly T[],
    syntaxKind : SyntaxKindT,
    textRange : TextRange
) : NodeArray<T> & { syntaxKind : SyntaxKindT } {
    (arr as NodeArray<T>).start = textRange.start;
    (arr as NodeArray<T>).end = textRange.end;
    (arr as NodeArray<T>).syntaxKind = syntaxKind;

    return arr as NodeArray<T> & { syntaxKind : SyntaxKindT };
}
