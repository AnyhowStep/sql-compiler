import {findAllSyntacticErrors, SourceFile, SourceFileLite, SyntaxKind} from "../parser-node";
import {Scanner} from "../scanner";
import {parseHelper} from "../fault-tolerant-parser";
import * as grammar from "./grammar.generated";
import {fullParserSettings, ParserSettings} from "./parser-settings";
import {ParserState} from "./parser-state";
import {toNodeArray} from "./parse-util";

export interface ParseResult {
    scanner : Scanner,
    sourceFile : SourceFile,
}

export function parse (
    filename : string,
    text : string,
    settings : ParserSettings
) : ParseResult {
    const state : ParserState = {
        settings : {
            ...settings,
            ...fullParserSettings,
        },
        sourceText : text,
    };
    const scanner = new Scanner(text);
    const {
        partialParses : results,
        syntacticErrors,
    } = parseHelper<SourceFileLite>({
        state,
        filename,
        scanner,
        grammar : grammar.default,
        findAllSyntacticErrors,
    });

    if (results.length == 0) {
        const textRange = {
            start : 0,
            end : scanner.getText().length,
        };
        return {
            scanner,
            sourceFile : {
                ...textRange,
                syntaxKind : SyntaxKind.SourceFile,
                statements : toNodeArray([], SyntaxKind.SourceElementList, textRange),
                filename,
                text,
                syntacticErrors,
            },
        };
    }

    const textRange = {
        start : results[0].start,
        end : results[results.length-1].end,
    };
    return {
        scanner,
        sourceFile : {
            ...textRange,
            syntaxKind : SyntaxKind.SourceFile,
            statements : toNodeArray(
                results.map(sourceFileLite => sourceFileLite.statements).flat(1),
                SyntaxKind.SourceElementList,
                textRange,
            ),
            filename,
            text,
            syntacticErrors,
        },
    };
}
