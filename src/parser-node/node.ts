import {SyntaxKind} from "./syntax-kind.generated";

export interface TextRange {
    start : number;
    end : number;
}

export interface Node extends TextRange {
    syntaxKind : SyntaxKind;
}
