import {Diagnostic} from "../diagnostic";
import {Node} from "./node";
import {NodeArray2} from "./node-array";
import {Statement} from "./statement";
import {SyntaxKind} from "./syntax-kind.generated";

export interface SourceElementList extends NodeArray2<SyntaxKind.SourceElementList, Statement> {

}

export interface SourceFile extends Node {
    syntaxKind : SyntaxKind.SourceFile,
    statements: SourceElementList;

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
    statements: SourceElementList;
}
