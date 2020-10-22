import {findAllSyntacticErrors, SourceFile, SourceFileLite, SyntaxKind} from "../parser-node";
import {Scanner} from "../scanner";
import {ParserSettings} from "./parser-settings";
import {scanAll} from "./scan";
import * as nearley from "nearley";
import * as grammar from "./my.generated";
import {ParserState} from "./parser-state";

export function parse (
    filename : string,
    scanner : Scanner,
    settings : ParserSettings
) : SourceFile|undefined {
    const state : ParserState = {
        settings,
    };
    const tokens = scanAll(scanner);

    const parser = new nearley.Parser(nearley.Grammar.fromCompiled({
        ...grammar,
        ParserRules : grammar.ParserRules.map(rule => {
            return {
                ...rule,
                postprocess : (
                    rule.postprocess == undefined ?
                    undefined :
                    rule.postprocess.bind(state)
                ),
            }
        })
    }));
    parser.feed(tokens as any);

    if (parser.results.length > 1) {
        throw new Error(`Multiple parse results`);
    }

    const sourceFileLite : SourceFileLite|undefined = (
        parser.results == undefined ?
        undefined :
        parser.results.length == 0 ?
        undefined :
        parser.results[0]
    );

    if (sourceFileLite == undefined) {
        return undefined;
    }

    const syntacticErrors = findAllSyntacticErrors(sourceFileLite);

    return {
        start : sourceFileLite.start,
        end : sourceFileLite.end,
        syntaxKind : SyntaxKind.SourceFile,
        statements : sourceFileLite.statements,
        filename,
        text : scanner.getText(),
        syntacticErrors,
    };
}
