import {Scanner} from "../scanner";
import {ParserSettings} from "./parser-settings";
import {Diagnostic} from "../diagnostic";
import {SourceFile} from "../parser-node";
import {SyntaxKind} from "../parser-node";

export interface ParserState {
    filename : string,
    scanner : Scanner,
    settings : ParserSettings,
    syntacticErrors : Diagnostic[],

    /**
     * While parsing, this will not have the "shape" of a `SourceFile`
     */
    file : SourceFile,

    currentDelimiter : string|undefined;
}

export function makeParserState (
    filename : string,
    scanner : Scanner,
    settings : ParserSettings
) : ParserState {
    const syntacticErrors : Diagnostic[] = [];
    const semanticErrors : Diagnostic[] = [];
    return {
        file : {
            text : scanner.getText(),
            nodeCount : 0,
            identifierCount : 0,
            symbolCount : 0,

            start : 0,
            end : scanner.getText().length,

            syntaxKind : SyntaxKind.SourceFile,
            filename,
            syntacticErrors,
            semanticErrors,
        } as SourceFile,
        filename,
        scanner,
        settings,
        syntacticErrors,
        currentDelimiter : undefined,
    }
}
