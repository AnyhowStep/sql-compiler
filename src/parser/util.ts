import {ParserState} from "./parser-state";
import {Diagnostic, DiagnosticMessage} from "../diagnostic";
import {NodeArray, UnknownExpression} from "../parser-node";
import {SyntaxKind, UnknownStatement} from "../parser-node";
import {ReverseTokenKind, TokenKind} from "../scanner";
import {DiagnosticMessages} from "./diagnostic-messages";

export function makeDiagnosticAt (
    start : number,
    end : number,
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) : Diagnostic {
    return {
        start,
        length : end-start,
        messageText : diagnosticMessage.key.replace(/\{(\d+)\}/g, (_match, num) => args[num].toString()),
        category : diagnosticMessage.category,
        code : diagnosticMessage.code,
    }
}

export function pushSyntacticErrorAt (
    state : ParserState,
    start : number,
    end : number,
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) {
    state.syntacticErrors.push(makeDiagnosticAt(start, end, diagnosticMessage, ...args));
}

export function makeDiagnostic (
    state : ParserState,
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) : Diagnostic {
    return makeDiagnosticAt(
        state.scanner.getTokenIndex(),
        state.scanner.getIndex(),
        diagnosticMessage,
        ...args
    );
}

export function pushSyntacticError (
    state : ParserState,
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) {
    state.syntacticErrors.push(makeDiagnostic(state, diagnosticMessage, ...args));
}

export function makeNodeArray<T> (syntaxKind : SyntaxKind, start : number, end : number) : NodeArray<T> {
    const result = [] as unknown as NodeArray<T>;
    result.syntaxKind = syntaxKind;
    result.start = start;
    result.end = end;
    return result;
}

export function parseUnknownStatement (state : ParserState, start : number) : UnknownStatement {
    const peeker = state.scanner.clone();
    let token = peeker.next();
    while (
        token != TokenKind.SemiColon &&
        token != TokenKind.EndOfFile &&
        token != TokenKind.CustomDelimiter
    ) {
        token = peeker.next();
        state.scanner.next();
    }

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.UnknownStatement,
    };
}

export function consumeToken (state : ParserState, token : TokenKind) : boolean {
    if (state.scanner.next() == token) {
        return true;
    } else {
        pushSyntacticError(state, DiagnosticMessages.ExpectedSyntaxKind, ReverseTokenKind[token]);
        return false;
    }
}

/*
export function consumeTokens (state : ParserState, ...tokens : readonly SyntaxKind[]) : boolean {
    for (const token of tokens) {
        if (!consumeToken(state, token)) {
            return false;
        }
    }
    return true;
}
*/

export function tryConsumeToken (state : ParserState, token : TokenKind, reportError = false) : boolean {
    const copy = state.scanner.clone();
    if (copy.next() == token) {
        state.scanner.next();
        return true;
    } else {
        if (reportError) {
            pushSyntacticErrorAt(
                state,
                state.scanner.getIndex(),
                state.scanner.getIndex(),
                DiagnosticMessages.ExpectedSyntaxKind,
                ReverseTokenKind[token]
            );
        }
        return false;
    }
}

export function tryConsumeTokens (state : ParserState, ...tokens : readonly TokenKind[]) : boolean {
    const copy = state.scanner.clone();
    for (const token of tokens) {
        if (copy.next() != token) {
            return false;
        }
    }
    for (const _token of tokens) {
        state.scanner.next();
    }
    return true;
}

export function tryConsumeTokenOneOf (state : ParserState, reportError : boolean, ...tokens : readonly TokenKind[]) : boolean {
    const peeker = state.scanner.clone();
    if (tokens.includes(peeker.next())) {
        state.scanner.next();
        return true;
    } else {
        if (reportError) {
            pushSyntacticErrorAt(
                state,
                peeker.getTokenIndex(),
                peeker.getIndex(),
                DiagnosticMessages.ExpectedSyntaxKind,
                tokens.map(token => ReverseTokenKind[token]).join("|")
            );
        }
        return false;
    }
}

export function tryConsumeTokensOneOf (state : ParserState, ...tokens2d : readonly (readonly TokenKind[])[]) : boolean {
    for (const tokens of tokens2d) {
        if (tryConsumeTokens(state, ...tokens)) {
            return true;
        }
    }
    return false;
}

export function consumeUntilToken (state : ParserState, token : TokenKind) : void {
    while (true) {
        const t = state.scanner.next();
        if (t == token || t == TokenKind.EndOfFile) {
            return;
        }
    }
}

export function makeUnknownExpression (state : ParserState) : UnknownExpression {
    return {
        start : state.scanner.getTokenIndex(),
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.UnknownExpression,
    };
}
