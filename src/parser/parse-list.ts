import {Diagnostic} from "../diagnostic";
import {NodeArray, SyntaxKind} from "../parser-node";
import {TokenKind} from "../scanner";
import {ParserState} from "./parser-state";
import {tryConsumeToken} from "./util";

export function parseList<T>(
    state : ParserState,
    syntaxKind : SyntaxKind,
    isListTerminator : (state : ParserState, token : TokenKind, result : NodeArray<T>) => boolean,
    getListElementExpectedDiagnostic : (state : ParserState, peekedStart : number, peekedEnd : number) => Diagnostic|undefined,
    tryParseElement: (state : ParserState, peekedToken : TokenKind, result : NodeArray<T>) => T|undefined
) : NodeArray<T> {
    const {
        scanner,
    } = state;
    var result = [] as unknown as NodeArray<T>;
    result.syntaxKind = syntaxKind;

    let peeker = scanner.clone();
    let peekedToken = peeker.next();
    result.start = peeker.getTokenIndex();
    while (
        peekedToken != TokenKind.EndOfFile &&
        !isListTerminator(state, peekedToken, result)
    ) {
        const element = tryParseElement(state, peekedToken, result);
        if (element == undefined) {
            const diagnostic = getListElementExpectedDiagnostic(state, peeker.getTokenIndex(), peeker.getIndex());
            if (diagnostic != undefined) {
                state.syntacticErrors.push(diagnostic);
            }
            break;
        }

        result.push(element);

        peeker = scanner.clone();
        peekedToken = peeker.next();
    }
    if (result.length == 0) {
        result.start = scanner.getIndex();
    }
    result.end = scanner.getIndex();
    return result;
}

export function parseSeparatedList<T> (
    state : ParserState,
    syntaxKind : SyntaxKind,
    separator : TokenKind,
    isListTerminator : (state : ParserState, token : TokenKind, result : NodeArray<T>) => boolean,
    getListElementExpectedDiagnostic : (state : ParserState, peekedStart : number, peekedEnd : number) => Diagnostic|undefined,
    tryParseElement: (state : ParserState, peekedToken : TokenKind, result : NodeArray<T>) => T|undefined
) : NodeArray<T> {
    const {
        scanner,
    } = state;
    var result = [] as unknown as NodeArray<T>;
    result.syntaxKind = syntaxKind;

    let peeker = scanner.clone();
    let peekedToken = peeker.next();
    result.start = peeker.getTokenIndex();
    while (
        peekedToken != TokenKind.EndOfFile &&
        !isListTerminator(state, peekedToken, result)
    ) {
        if (result.length > 0) {
            if (tryConsumeToken(state, separator, /*reportError*/true)) {
                peeker = scanner.clone();
                peekedToken = peeker.next();
            }
        }
        const element = tryParseElement(state, peekedToken, result);
        if (element == undefined) {
            const diagnostic = getListElementExpectedDiagnostic(state, peeker.getTokenIndex(), peeker.getIndex());
            if (diagnostic != undefined) {
                state.syntacticErrors.push(diagnostic);
            }
            break;
        }

        result.push(element);

        peeker = scanner.clone();
        peekedToken = peeker.next();
    }
    if (result.length == 0) {
        result.start = scanner.getIndex();
    }
    result.end = scanner.getIndex();
    return result;
}
