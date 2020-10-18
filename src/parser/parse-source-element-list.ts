import {CharacterCodes, ReverseTokenKind, TokenKind} from "../scanner";
import {DiagnosticMessages} from "./diagnostic-messages";
import {CreateSchemaStatement, DelimiterStatement, isSyntaxKind, NodeArray, SyntaxKind, UnknownStatement} from "../parser-node";
import {parseCreateStatement} from "./parse-create-statement";
import {ParserState} from "./parser-state";
import {makeNodeArray, parseUnknownStatement, pushSyntacticError, pushSyntacticErrorAt, tryConsumeToken} from "./util";

type SourceElement =
    | UnknownStatement
    | CreateSchemaStatement
    | DelimiterStatement

;
function parseSourceElement (state : ParserState, peekedToken : TokenKind) : SourceElement|undefined {
    switch (peekedToken) {
        /**
         * For now, just implement `CREATE`.
         * We can work on `USE, ALTER, DROP, TRUNCATE, RENAME, TRUNCATE, CALL, DO, HANDLER, LOAD, REPLACE, START, SAVEPOINT, COMMIT, ROLLBACK, RELEASE, LOCK, SET, XA, SHOW, PREPARE, EXECUTE, SELECT, INSERT, UPDATE, DELETE, etc.` next time.
         */
        case TokenKind.CREATE: {
            return parseCreateStatement(state);
        }
        case TokenKind.SET: {
            //return parseSetStatement(state);
            return parseUnknownStatement(state, state.scanner.getIndex());
        }
        /**
         * This is valid MySQL,
         * ```sql
         * (SELECT 1)
         * ```
         */
        case TokenKind.OpenParentheses:
        case TokenKind.SELECT:
            //return parseSelectStatement(state, /*inSubquery*/ false);
            return parseUnknownStatement(state, state.scanner.getIndex());
        case TokenKind.Identifier: {
            state.scanner.next();
            const start = state.scanner.getTokenIndex();
            if (state.scanner.getTokenSourceText().toUpperCase() == "DELIMITER") {
                /**
                 * Special parsing logic is needed here.
                 */
                if (state.scanner.charCodeAt(state.scanner.getIndex()) != CharacterCodes.space) {
                    pushSyntacticError(state, DiagnosticMessages.ExpectedSpaceCharacterAfterDelimiterCommand);
                }
                const customDelimiter = state.scanner.scanDelimiter();
                if (customDelimiter == undefined) {
                    pushSyntacticError(
                        state,
                        DiagnosticMessages.ExpectedSyntaxKind,
                        ReverseTokenKind[TokenKind.CustomDelimiter]
                    );
                }
                const result : DelimiterStatement = {
                    start,
                    end : state.scanner.getIndex(),
                    syntaxKind : SyntaxKind.DelimiterStatement,
                    customDelimiter : customDelimiter ?? "",
                };
                return result;
            } else {
                pushSyntacticError(
                    state,
                    DiagnosticMessages.UnexpectedSyntaxKind,
                    ReverseTokenKind[peekedToken]
                );
                return undefined;
            }
        }
        default:
            return undefined;
    }
}
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
            while (tryConsumeToken(state, TokenKind.SemiColon)) {
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
