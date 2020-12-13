import {Node, NodeArray2, SyntaxKind, TextRange} from "../../parser-node";

export function toNodeArray<T extends Node, SyntaxKindT extends SyntaxKind> (
    arr : readonly T[],
    syntaxKind : SyntaxKindT,
    textRange : TextRange
) : NodeArray2<SyntaxKindT, T> {
    (arr as NodeArray2<SyntaxKindT, T>).start = textRange.start;
    (arr as NodeArray2<SyntaxKindT, T>).end = textRange.end;
    (arr as NodeArray2<SyntaxKindT, T>).syntaxKind = syntaxKind;

    return arr as NodeArray2<SyntaxKindT, T>;
}
