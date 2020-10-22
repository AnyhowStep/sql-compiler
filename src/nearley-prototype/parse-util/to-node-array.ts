import {Node, NodeArray, SyntaxKind, TextRange} from "../../parser-node";

export function toNodeArray<T extends Node> (
    arr : readonly T[],
    syntaxKind : SyntaxKind,
    textRange : TextRange
) : NodeArray<T> {
    (arr as NodeArray<T>).start = textRange.start;
    (arr as NodeArray<T>).end = textRange.end;
    (arr as NodeArray<T>).syntaxKind = syntaxKind;

    return arr as NodeArray<T>;
}
