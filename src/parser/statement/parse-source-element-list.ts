import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {isSyntaxKind, NodeArray, SyntaxKind} from "../../parser-node";
import {ParserState} from "../parser-state";
import {makeNodeArray, parseUnknownStatement, pushSyntacticErrorAt, tryConsumeToken} from "../util";
import {parseSourceElement, SourceElement} from "./parse-source-element";

export function parseSourceElementList (state : ParserState) : NodeArray<SourceElement> {
    const {scanner} = state;

    const results = makeNodeArray<SourceElement>(
        SyntaxKind.SourceElementList,
        0,
        0
    );;

    let peeker = scanner.clone();
    let peekedToken = peeker.next();

    while (peekedToken != TokenKind.EndOfFile) {
        const errorCount = state.syntacticErrors.length;

        const statement = parseSourceElement(state, peekedToken);

        if (
            state.syntacticErrors.length > errorCount &&
            (
                statement == undefined ||
                statement.syntaxKind != SyntaxKind.DelimiterStatement
            )
        ) {
            const unknownStatement = parseUnknownStatement(state, state.scanner.getIndex());
            if (unknownStatement.start != unknownStatement.end) {
                pushSyntacticErrorAt(
                    state,
                    unknownStatement.start,
                    unknownStatement.end,
                    DiagnosticMessages.UnknownStatement
                );
            }
        }

        if (statement == undefined) {
            pushSyntacticErrorAt(
                state,
                peeker.getTokenIndex(),
                peeker.getTokenIndex(),
                DiagnosticMessages.ExpectedSourceElement
            );
            parseUnknownStatement(state, state.scanner.getIndex());
        } else {
            results.push(statement);
        }

        if (scanner.getCustomDelimiter() == undefined) {
            if (statement == undefined) {
                const semiColonPeeker = scanner.clone();
                if (semiColonPeeker.next() == TokenKind.SemiColon) {
                    scanner.next();
                } else {
                    if (semiColonPeeker.next() != TokenKind.EndOfFile) {
                        tryConsumeToken(state, TokenKind.SemiColon, /*reportError*/true);
                    }
                }
            } else {
                if (!isSyntaxKind(statement, SyntaxKind.DelimiterStatement)) {
                    const semiColonPeeker = scanner.clone();
                    if (semiColonPeeker.next() == TokenKind.SemiColon) {
                        scanner.next();
                    } else {
                        if (semiColonPeeker.next() != TokenKind.EndOfFile) {
                            tryConsumeToken(state, TokenKind.SemiColon, /*reportError*/true);
                        }
                    }
                }
            }
        } else {
            //Swallow all semicolons
            while (tryConsumeToken(state, TokenKind.SemiColon, false)) {
            }

            if (statement == undefined) {
                const delimiterPeeker = scanner.clone();
                if (delimiterPeeker.next() == TokenKind.CustomDelimiter) {
                    scanner.next();
                } else {
                    if (delimiterPeeker.next() != TokenKind.EndOfFile) {
                        tryConsumeToken(state, TokenKind.CustomDelimiter, /*reportError*/true);
                    }
                }
            } else {
                if (!isSyntaxKind(statement, SyntaxKind.DelimiterStatement)) {
                    const delimiterPeeker = scanner.clone();
                    if (delimiterPeeker.next() == TokenKind.CustomDelimiter) {
                        scanner.next();
                    } else {
                        if (delimiterPeeker.next() != TokenKind.EndOfFile) {
                            tryConsumeToken(state, TokenKind.CustomDelimiter, /*reportError*/true);
                        }
                    }
                    statement.customDelimiter = state.scanner.getCustomDelimiter();
                }
            }
        }

        peeker = scanner.clone();
        peekedToken = peeker.next();
    }

    results.end = state.scanner.getIndex();
    return results;
}
