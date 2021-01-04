import {StringLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface CreateLogFileGroupAddRedoFile extends Node {
    syntaxKind : SyntaxKind.CreateLogFileGroupAddRedoFile,

    redoFile : StringLiteral,
}
