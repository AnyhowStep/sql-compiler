import {Diagnostic} from "../diagnostic";
import {SyntaxKind} from "./syntax-kind.generated";

export interface SyntacticErrorContainer {
    syntacticErrors? : Diagnostic[],
}

export interface TextRange {
    start : number;
    end : number;
}

export interface Node extends TextRange, SyntacticErrorContainer {
    syntaxKind : SyntaxKind;
}

export interface ValueNode<T> extends Node {
    syntaxKind : SyntaxKind.Value,
    value : T,
}
