import {Diagnostic} from "../diagnostic";
import {Node} from "./node";
import {NodeArray} from "./node-array";
import {Statement} from "./statement";
import {SyntaxKind} from "./syntax-kind.generated";

export interface SourceFile extends Node {
    syntaxKind : SyntaxKind.SourceFile,
    filename: string;
    text: string;
    syntacticErrors: Diagnostic[];
    semanticErrors: Diagnostic[];
    nodeCount: number;
    identifierCount: number;
    symbolCount: number;
    statements: NodeArray<Statement>;
}
