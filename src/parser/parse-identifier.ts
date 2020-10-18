import {DiagnosticMessages} from "./diagnostic-messages";
import {Identifier} from "../parser-node";
import {ReverseSyntaxKind, SyntaxKind} from "../parser-node";
import {ParserState} from "./parser-state";
import {pushSyntacticError} from "./util";
import {isNonReserved, isReserved, TokenKind} from "../scanner";

export function parseIdentifierString (state : ParserState, allowReserved = false) : undefined|string {
    const token = state.scanner.next();
    const identifier = state.scanner.getTokenValue();

    if (token == TokenKind.Identifier || isNonReserved(token)) {
        return identifier;
    }

    if (isReserved(token)) {
        if (!allowReserved) {
            pushSyntacticError(state, DiagnosticMessages.CannotUseReservedKeywordAsIdentifier, identifier);
        }
        return identifier;
    }

    pushSyntacticError(state, DiagnosticMessages.ExpectedSyntaxKind, ReverseSyntaxKind[SyntaxKind.Identifier]);
    return undefined;
}

export function tryParseIdentifierString (state : ParserState, allowReserved = false, reportError = false) : undefined|string {
    const peeker = state.scanner.clone();

    const token = peeker.next();
    const identifier = peeker.getTokenValue();

    if (token == TokenKind.Identifier || isNonReserved(token)) {
        state.scanner.next();
        return identifier;
    }

    if (isReserved(token)) {
        if (!allowReserved) {
            pushSyntacticError(state, DiagnosticMessages.CannotUseReservedKeywordAsIdentifier, identifier);
        }
        state.scanner.next();
        return identifier;
    }

    if (reportError) {
        pushSyntacticError(state, DiagnosticMessages.ExpectedSyntaxKind, ReverseSyntaxKind[SyntaxKind.Identifier]);
    }
    return undefined;
}

export function parseIdentifier (state : ParserState, allowReserved = false) : undefined|Identifier {
    const identifier = parseIdentifierString(state, allowReserved);
    if (identifier == undefined) {
        return undefined;
    }

    return {
        start : state.scanner.getTokenIndex(),
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.Identifier,
        identifier,
        quoted : (
            state.scanner.getText()[state.scanner.getTokenIndex()] == "`" ||
            state.scanner.getText()[state.scanner.getTokenIndex()] == `"`
        ),
    };
}

export function tryParseIdentifier (state : ParserState, allowReserved = false, reportError = false) : undefined|Identifier {
    const identifier = tryParseIdentifierString(state, allowReserved, reportError);
    if (identifier == undefined) {
        return undefined;
    }

    return {
        start : state.scanner.getTokenIndex(),
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.Identifier,
        identifier,
        quoted : (
            state.scanner.getText()[state.scanner.getTokenIndex()] == "`" ||
            state.scanner.getText()[state.scanner.getTokenIndex()] == `"`
        ),
    };
}

export function makeEmptyIdentifier (state : ParserState) : Identifier {
    return {
        start : state.scanner.getTokenIndex(),
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.Identifier,
        identifier : "",
        quoted : true,
    };
}
