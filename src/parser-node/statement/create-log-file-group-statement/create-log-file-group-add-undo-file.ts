import {StringLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface CreateLogFileGroupAddUndoFile extends Node {
    syntaxKind : SyntaxKind.CreateLogFileGroupAddUndoFile,

    undoFile : StringLiteral,
}
