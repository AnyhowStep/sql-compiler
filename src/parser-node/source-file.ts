import {Diagnostic} from "../diagnostic";
import {Node} from "./node";
import {NodeArray} from "./node-array";
import {Statement} from "./statement";
import {SyntaxKind} from "./syntax-kind.generated";

export interface SourceFile extends Node {
    syntaxKind : SyntaxKind.SourceFile,
    statements: NodeArray<Statement>;

    //semanticErrors: Diagnostic[];
    //nodeCount: number;
    //identifierCount: number;
    //symbolCount: number;
    filename: string;
    text: string;
    syntacticErrors: Diagnostic[];
}

export interface SourceFileLite extends Node {
    syntaxKind : SyntaxKind.SourceFileLite,
    statements: NodeArray<Statement>;
}
