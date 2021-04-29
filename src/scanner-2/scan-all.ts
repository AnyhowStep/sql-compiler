import {MyToken} from "../grammar-runtime";
import {CharacterCodes, isUnquotedIdentifierCharacter, isWhiteSpace} from "./character-code";
import {scanDelimiter, scanQuotedString, scanOthers, tryScanString, tryScanUnquotedIdentifier, is0xHexLiteral, is0bBitLiteral, scanTillEndOfMultiLineComment, tryScanStringCaseInsensitive, scanQuotedIdentifier, scanTillEndOfLineOrEof, peekTokenAfterExtras} from "./scan-util";
import {TokenKind} from "./token.generated";

export interface LexerState {
    text : string;
    index : number;
    expectCustomDelimiter : boolean;
    customDelimiter : string;

    nextZeroWidthTokenKind : TokenKind|undefined;

    peek (offset : number) : number;
    advance () : number;
    clone () : LexerState;

    isEof (offset : number) : boolean;
}

export class MyLexerState implements LexerState {
    public text : string;
    public index : number;
    public expectCustomDelimiter : boolean;
    public customDelimiter : string;
    public nextZeroWidthTokenKind : TokenKind|undefined;

    public constructor (text : string) {
        this.text = text;
        this.index = 0;
        this.expectCustomDelimiter = false;
        this.customDelimiter = "";
        this.nextZeroWidthTokenKind = undefined;
    }

    public peek (offset : number) : number {
        if (this.index >= this.text.length) {
            return 0;
        }
        return this.text.charCodeAt(this.index+offset);
    }

    public advance () : number {
        const result = this.peek(0);
        ++this.index;
        return result;
    }
    public clone () : LexerState {
        const result = new MyLexerState(this.text);
        result.index = this.index;
        result.expectCustomDelimiter = this.expectCustomDelimiter;
        result.customDelimiter = this.customDelimiter;
        result.nextZeroWidthTokenKind = this.nextZeroWidthTokenKind;
        return result;
    }

    public isEof (offset : number) : boolean {
        return this.peek(offset) == 0;
    }
}

export function scanAll (text : string) : MyToken[] {
    const result : MyToken[] = [];
    const state = new MyLexerState(text);

    while (!state.isEof(0) || state.nextZeroWidthTokenKind != undefined) {
        const start = state.index;
        const tokenKind = scan(state);
        const end = state.index;
        result.push({
            tokenKind,
            start,
            end,
            text : text.substring(start, end),
        });
    }

    return result;
}

export function scan (state : LexerState) : TokenKind {
    if (state.nextZeroWidthTokenKind != undefined) {
        /**
         * Zero-width because the start and end index
         * for this `TokenKind` are the same.
         */
        const result = state.nextZeroWidthTokenKind;
        state.nextZeroWidthTokenKind = undefined;
        return result;
    }

    if (state.expectCustomDelimiter) {
        return scanDelimiter(state);
    }

    if (state.customDelimiter.length > 0) {
        if (tryScanString(state, state.customDelimiter)) {
            /**
             * Setting this helps us make the grammar less ambiguous.
             * Consisder,
             * ```sql
             *  DELIMITER $$
             *  SELECT 1;$$
             * ```
             *
             * You could interpret the above as,
             * `SELECT 1;` (select query) and `$$` (empty query).
             *
             * But we really want `SELECT 1;$$`
             */
            state.nextZeroWidthTokenKind = TokenKind.EndOfStatement;

            return TokenKind.CustomDelimiter;
        }
    }

    if (isWhiteSpace(state.peek(0))) {
        state.advance();

        while (isWhiteSpace(state.peek(0))) {
            state.advance();
        }

        return TokenKind.WhiteSpace;
    }

    const ch = state.peek(0);

    if (ch == CharacterCodes.carriageReturn) {
        if (state.peek(1) == CharacterCodes.lineFeed) {
            state.advance();
            state.advance();

            return TokenKind.LineBreak;
        }

        state.advance();
        return TokenKind.LineBreak;
    }

    if (ch == CharacterCodes.lineFeed) {
        state.advance();
        return TokenKind.LineBreak;
    }

    //https://dev.mysql.com/doc/refman/5.7/en/hexadecimal-literals.html
    if (ch == CharacterCodes.x || ch == CharacterCodes.X) {
        if (state.peek(1) == CharacterCodes.singleQuote) {
            state.advance();
            scanQuotedString(state);
            return TokenKind.HexLiteral;
        } else {
            return scanOthers(state);
        }
    }

    if (ch == CharacterCodes._0) {
        if (state.peek(1) == CharacterCodes.x) {
            //String length should never be empty, we confirmed existence of characters 0x
            //And 0x... does not match custom delimiter (already tried to match custom delimiter above)
            const str = tryScanUnquotedIdentifier(state, state.customDelimiter);
            if (is0xHexLiteral(str)) {
                return TokenKind.HexLiteral;
            } else {
                return TokenKind.Identifier;
            }
        } else {
            return scanOthers(state);
        }
    }

    //https://dev.mysql.com/doc/refman/5.7/en/bit-value-literals.html
    if (ch == CharacterCodes.b || ch == CharacterCodes.B) {
        if (state.peek(1) == CharacterCodes.singleQuote) {
            state.advance();
            scanQuotedString(state);
            return TokenKind.BitLiteral;
        } else {
            return scanOthers(state);
        }
    }

    if (ch == CharacterCodes._0) {
        if (state.peek(1) == CharacterCodes.b) {
            //String length should never be empty, we confirmed existence of characters 0b
            //And 0b... does not match custom delimiter (already tried to match custom delimiter above)
            const str = tryScanUnquotedIdentifier(state, state.customDelimiter);
            if (is0bBitLiteral(str)) {
                return TokenKind.BitLiteral;
            } else {
                return TokenKind.Identifier;
            }
        } else {
            return scanOthers(state);
        }
    }

    switch (ch) {
        case CharacterCodes.openBrace:
            state.advance();
            return TokenKind.OpenBrace;
        case CharacterCodes.closeBrace:
            state.advance();
            return TokenKind.CloseBrace;
        case CharacterCodes.openParen:
            state.advance();
            return TokenKind.OpenParentheses;
        case CharacterCodes.closeParen:
            state.advance();
            return TokenKind.CloseParentheses;
        case CharacterCodes.pound:
            scanTillEndOfLineOrEof(state);
            return TokenKind.SingleLineComment;
        case CharacterCodes.caret:
            state.advance();
            return TokenKind.Caret;
        case CharacterCodes.asterisk:
            state.advance();
            return TokenKind.Asterisk;
        case CharacterCodes.minus:
            if (state.peek(1) == CharacterCodes.minus) {
                /**
                 * > the -- start-comment sequence must be followed by a space
                 *
                 * https://dev.mysql.com/doc/refman/5.7/en/ansi-diff-comments.html
                 *
                 * However, we'll leave that to a linter down the pipeline
                 */
                scanTillEndOfLineOrEof(state);
                return TokenKind.SingleLineComment;
            }
            state.advance();
            return TokenKind.Minus;
        case CharacterCodes.plus:
            state.advance();
            return TokenKind.Plus;
        case CharacterCodes.comma:
            state.advance();
            return TokenKind.Comma;
        case CharacterCodes.bar:
            state.advance();
            return TokenKind.Bar;
        case CharacterCodes.ampersand:
            if (state.peek(1) == CharacterCodes.ampersand) {
                state.advance();
                state.advance();
                return TokenKind.AmpersandAmpersand;
            }

            state.advance();
            return TokenKind.Ampersand;
        case CharacterCodes.equals:
            state.advance();
            return TokenKind.Equal;
        case CharacterCodes.semicolon:
            state.advance();
            const peeked = peekTokenAfterExtras(state);
            if (peeked != TokenKind.CustomDelimiter) {
                /**
                 * Setting this helps us make the grammar less ambiguous.
                 * Consisder,
                 * ```sql
                 *  DELIMITER $$
                 *  SELECT 1;$$
                 * ```
                 *
                 * You could interpret the above as,
                 * `SELECT 1;` (select query) and `$$` (empty query).
                 *
                 * But we really want `SELECT 1;$$`
                 */
                state.nextZeroWidthTokenKind = TokenKind.EndOfStatement;
            }
            return TokenKind.SemiColon;
        case CharacterCodes.dot:
            state.advance();
            return TokenKind.Dot;
        case CharacterCodes.lessThan:
            //<
            //<<
            //<>
            //<=
            //<=>
            switch (state.peek(1))
            {
                case CharacterCodes.lessThan:
                    state.advance();
                    state.advance();
                    return TokenKind.LessLess;
                case CharacterCodes.greaterThan:
                    state.advance();
                    state.advance();
                    return TokenKind.LessGreater;
                case CharacterCodes.equals:
                    switch (state.peek(2))
                    {
                        case CharacterCodes.greaterThan:
                            state.advance();
                            state.advance();
                            state.advance();
                            return TokenKind.LessEqualGreater;

                        default:
                            state.advance();
                            state.advance();
                            return TokenKind.LessEqual;
                    }

                default:
                    state.advance();
                    return TokenKind.Less;
            }
        case CharacterCodes.greaterThan:
            //>
            //>>
            //>=
            switch (state.peek(1))
            {
                case CharacterCodes.greaterThan:
                    state.advance();
                    state.advance();
                    return TokenKind.GreaterGreater;

                case CharacterCodes.equals:
                    state.advance();
                    state.advance();
                    return TokenKind.GreaterEqual;

                default:
                    state.advance();
                    return TokenKind.Greater;
            }
        case CharacterCodes.singleQuote:
            scanQuotedString(state);
            return TokenKind.StringLiteral;
        case CharacterCodes.slash:
            if (state.peek(1) == CharacterCodes.asterisk) {
                if (state.peek(2) == CharacterCodes.exclamation) {
                    state.advance();
                    state.advance();
                    state.advance();
                    scanTillEndOfMultiLineComment(state);
                    return TokenKind.ExecutionComment;
                } else {
                    state.advance();
                    state.advance();
                    scanTillEndOfMultiLineComment(state);
                    return TokenKind.MultiLineComment;
                }
            } else {
                state.advance();
                return TokenKind.Slash;
            }
        case CharacterCodes.colon:
            if (state.peek(1) == CharacterCodes.equals) {
                state.advance();
                state.advance();
                return TokenKind.ColonEqual;
            }

            state.advance();
            return TokenKind.Colon;

        case CharacterCodes.at:
            if (state.peek(1) == CharacterCodes.at) {
                state.advance();
                state.advance();
                if (tryScanStringCaseInsensitive(state, "GLOBAL.")) {
                    return TokenKind.AtAtGlobalDot;
                }

                if (tryScanStringCaseInsensitive(state, "SESSION.")) {
                    return TokenKind.AtAtSessionDot;
                }

                return TokenKind.AtAt;
            } else if (
                state.peek(1) == CharacterCodes.doubleQuote ||
                state.peek(1) == CharacterCodes.backtick ||
                state.peek(1) == CharacterCodes.singleQuote
            ) {
                state.advance();
                scanQuotedIdentifier(state);
                return TokenKind.UserVariableIdentifier;
            } else if (
                isUnquotedIdentifierCharacter(state.peek(1))
            ) {
                state.advance();
                //This may be empty.
                const str = tryScanUnquotedIdentifier(state, state.customDelimiter);
                if (str.length == 0) {
                    /**
                     * @todo Investigate why MySQL allows this,
                     * ```sql
                     *  SELECT @;
                     * ```
                     *
                     * @todo Investigate why MySQL allows this,
                     * ```sql
                     *  CREATE DEFINER=root @ FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
                     * ```
                     */
                    return TokenKind.UserVariableIdentifier;
                } else {
                    return TokenKind.UserVariableIdentifier;
                }
            } else {
                /**
                 * @todo Investigate why MySQL allows this,
                 * ```sql
                 *  SELECT @;
                 * ```
                 *
                 * @todo Investigate why MySQL allows this,
                 * ```sql
                 *  CREATE DEFINER=root @ FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
                 * ```
                 */
                state.advance();
                return TokenKind.UserVariableIdentifier;
            }
        case CharacterCodes.doubleQuote:
        case CharacterCodes.backtick:
            scanQuotedIdentifier(state);
            return TokenKind.Identifier;
        default:
            break;
    }

    return scanOthers(state);
}
