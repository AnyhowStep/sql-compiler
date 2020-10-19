import {CharacterCodes, ReverseTokenKind, TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {CreateSchemaStatement, DeclareFunctionStatement, DelimiterStatement, SyntaxKind, UnknownStatement} from "../../parser-node";
import {parseCreateStatement} from "./parse-create-statement";
import {ParserState} from "../parser-state";
import {parseUnknownStatement, pushSyntacticError} from "../util";
import {parseDeclareStatement} from "./parse-declare-statement";

export type SourceElement =
    | UnknownStatement
    | CreateSchemaStatement
    | DelimiterStatement
    | DeclareFunctionStatement
;

export function parseSourceElement (state : ParserState, peekedToken : TokenKind) : SourceElement|undefined {
    switch (peekedToken) {
        /**
         * For now, just implement `CREATE`.
         * We can work on `USE, ALTER, DROP, TRUNCATE, RENAME, TRUNCATE, CALL, DO, HANDLER, LOAD, REPLACE, START, SAVEPOINT, COMMIT, ROLLBACK, RELEASE, LOCK, SET, XA, SHOW, PREPARE, EXECUTE, SELECT, INSERT, UPDATE, DELETE, etc.` next time.
         */
        case TokenKind.CREATE: {
            return parseCreateStatement(state);
        }
        case TokenKind.DECLARE: {
            /**
             * MySQL-specific syntax: https://dev.mysql.com/doc/refman/8.0/en/declare.html
             *
             * Custom syntax:
             * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type;`
             * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type AGGREGATE;`
             * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type WINDOW;`
             * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type AGGREGATE WINDOW;`
             */
            return parseDeclareStatement(state);
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
            const sourceText = state.scanner.getTokenSourceText().toUpperCase();

            if (sourceText == "DELIMITER") {
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
