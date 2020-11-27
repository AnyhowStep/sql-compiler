import {Scanner, TokenKind} from "../scanner";
import {scanAll} from "./scan";
import * as nearley from "nearley";
import {Diagnostic} from "../diagnostic";
import {TokenObj} from "../nearley-wrapper";
import {makeDiagnosticAt} from "../parse-util";
import {DiagnosticMessages} from "./diagnostic-messages";

export interface ParseHelperResult<PartialParseT extends unknown> {
    partialParses : PartialParseT[],
    parserSyntacticErrors : Diagnostic[],
    syntacticErrors : Diagnostic[],
}

export interface ParseHelperArgs<PartialParseT extends unknown> {
    state : unknown,
    filename : string,
    scanner : Scanner,
    grammar : nearley.CompiledRules,
    findAllSyntacticErrors : (partialParse : PartialParseT) => Diagnostic[],
}

export function parseHelper<PartialParseT extends unknown> (
    {
        state,
        filename,
        scanner,
        grammar,
        findAllSyntacticErrors,
    } : ParseHelperArgs<PartialParseT>
) : ParseHelperResult<PartialParseT> {
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
    let results : PartialParseT[] = [];
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
                [],
                DiagnosticMessages.Expected,
                //tokenObj.getTokenSourceText(),
                expected.join("|")
            ));

            const partialParse : PartialParseT|undefined = (
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
                    [],
                    DiagnosticMessages.InternalErrorGrammarIsAmbiguous
                ));
            }
            if (partialParse != undefined) {
                results.push(partialParse)
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

    const partialParse : PartialParseT|undefined = (
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
            [],
            DiagnosticMessages.InternalErrorGrammarIsAmbiguous
        ));
        //console.log(JSON.stringify(parser.results, null, 2));
    }
    if (partialParse != undefined) {
        results.push(partialParse)
    }

    const syntacticErrors = [
        ...parserSyntacticErrors,
        ...results.map(sourceFileLite => {
            return findAllSyntacticErrors(sourceFileLite);
        })
    ]
        .flat(1)
        .sort((a, b) => {
            if (a.start == b.start) {
                return a.length - b.length;
            }
            return a.start - b.start;
        })
        .map((err) => {
            if (err.relatedRanges == undefined) {
                return err;
            }
            return {
                ...err,
                relatedRanges : err.relatedRanges.map(related => {
                    return {
                        ...related,
                        filename : (
                            related.filename == undefined || related.filename == "" ?
                            filename :
                            related.filename
                        ),
                    };
                }),
            };
        });

    return {
        partialParses : results,
        parserSyntacticErrors,
        syntacticErrors,
    };
}
