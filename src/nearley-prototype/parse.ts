import {findAllSyntacticErrors, SourceFile, SourceFileLite, SyntaxKind} from "../parser-node";
import {Scanner, TokenKind} from "../scanner";
import {ParserSettings} from "./parser-settings";
import {scanAll} from "./scan";
import * as nearley from "nearley";
import * as grammar from "./my.generated";
import {ParserState} from "./parser-state";
import {makeDiagnosticAt, toNodeArray} from "./parse-util";
import {DiagnosticMessages} from "./diagnostic-messages";
import {Diagnostic} from "../diagnostic";
import {TokenObj} from "./nearley-util";

export function parse (
    filename : string,
    scanner : Scanner,
    settings : ParserSettings
) : SourceFile {
    const state : ParserState = {
        settings,
    };
    const tokens = scanAll(scanner);

    let tokenIndex = 0;
    let parser = new nearley.Parser(nearley.Grammar.fromCompiled({
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

    const parserSyntacticErrors : Diagnostic[] = [];
    let results : SourceFileLite[] = [];
    while (tokenIndex < tokens.length) {
        try {
            parser.feed([tokens[tokenIndex]] as any);
            ++tokenIndex;
        } catch (err) {
            const tokenObj : TokenObj<TokenKind> = err.token.value;

            const parserColumn : {
                scannable : {
                    dot : number,
                    rule : {
                        symbols : {
                            type : string,
                        }[]
                    }
                }[]
            } = (parser as any).table[parser.current];

            const expected = [
                ...new Set(parserColumn.scannable.map(state => {
                    const expect = state.rule.symbols[state.dot];
                    if (typeof expect == "string") {
                        return expect;
                    }
                    let expectStr = expect.type;
                    for (let i=state.dot+1; i<state.rule.symbols.length; ++i) {
                        const cur = state.rule.symbols[i];
                        if (typeof cur == "string") {
                            break;
                        }
                        expectStr += " " + cur.type;
                    }
                    return expectStr;
                })),
            ].sort((a, b) => a.localeCompare(b));

            parserSyntacticErrors.push(makeDiagnosticAt(
                tokenObj.start,
                tokenObj.start,
                DiagnosticMessages.Expected,
                //tokenObj.getTokenSourceText(),
                expected.join("|")
            ));

            const sourceFileLite : SourceFileLite|undefined = (
                parser.results == undefined ?
                undefined :
                parser.results.length == 1 ?
                parser.results[0] :
                undefined
            );
            if (parser.results != undefined && parser.results.length > 1) {
                parserSyntacticErrors.push(makeDiagnosticAt(
                    tokenObj.start,
                    tokenObj.start,
                    DiagnosticMessages.InternalErrorGrammarIsAmbiguous
                ));
            }
            if (sourceFileLite != undefined) {
                results.push(sourceFileLite)
            }

            //Skip until after a semicolon or custom delimiter
            while (tokenIndex < tokens.length) {
                if (
                    tokens[tokenIndex].tokenKind == TokenKind.SemiColon ||
                    tokens[tokenIndex].tokenKind == TokenKind.CustomDelimiter
                ) {
                    ++tokenIndex;
                    break;
                }
                ++tokenIndex;
            }

            //Create a new parser =)
            parser = new nearley.Parser(nearley.Grammar.fromCompiled({
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
        }
    }

    const sourceFileLite : SourceFileLite|undefined = (
        parser.results == undefined ?
        undefined :
        parser.results.length == 1 ?
        parser.results[0] :
        undefined
    );
    if (parser.results != undefined && parser.results.length > 1) {
        parserSyntacticErrors.push(makeDiagnosticAt(
            scanner.getText().length,
            scanner.getText().length,
            DiagnosticMessages.InternalErrorGrammarIsAmbiguous
        ));
    }
    if (sourceFileLite != undefined) {
        results.push(sourceFileLite)
    }

    const syntacticErrors = [
        ...parserSyntacticErrors,
        ...results.map(sourceFileLite => {
            return findAllSyntacticErrors(sourceFileLite);
        })
    ].flat(1).sort((a, b) => {
        if (a.start == b.start) {
            return a.length - b.length;
        }
        return a.start - b.start;
    });

    if (results.length == 0) {
        const textRange = {
            start : 0,
            end : scanner.getText().length,
        };
        return {
            ...textRange,
            syntaxKind : SyntaxKind.SourceFile,
            statements : toNodeArray([], SyntaxKind.SourceElementList, textRange),
            filename,
            text : scanner.getText(),
            syntacticErrors,
        };
    }

    const textRange = {
        start : results[0].start,
        end : results[results.length-1].end,
    };
    return {
        ...textRange,
        syntaxKind : SyntaxKind.SourceFile,
        statements : toNodeArray(
            results.map(sourceFileLie => sourceFileLie.statements).flat(1),
            SyntaxKind.SourceElementList,
            textRange,
        ),
        filename,
        text : scanner.getText(),
        syntacticErrors,
    };
}
