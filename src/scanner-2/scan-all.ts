import {MyToken} from "../grammar-runtime-3";
import {CharacterCodes, isDigit, isWhiteSpace} from "./character-code";
import {defaultLexerSettings, LexerSettings} from "./lexer-settings";
import {scanDelimiter, scanQuotedString, scanOthers, tryScanString, tryScanUnquotedIdentifier, is0xHexLiteral, is0bBitLiteral, scanTillEndOfMultiLineComment, scanQuotedIdentifier, peekTokenAfterExtras, tryScanNumberFractionalPart, tryScanNumberExponent, scanSingleLineComment, scanHostname, peekTokenAfterExtras2} from "./scan-util";
import {Extras, TokenKind} from "./token.generated";
declare const console : any;
export interface LexerState {
    settings : LexerSettings,
    text : string;
    index : number;
    expectCustomDelimiter : boolean;
    customDelimiter : string;

    nextZeroWidthTokenKind : TokenKind|undefined;
    nextToken : undefined|{ tokenKind : TokenKind, end : number };
    lastNonExtraTokenKind : TokenKind|undefined;

    memoizedTokens : Map<number, { tokenKind : TokenKind, end : number }>;

    peek (offset : number) : number;
    advance () : number;
    clone () : LexerState;

    isEof (offset : number) : boolean;
}

export class MyLexerState implements LexerState {
    public settings : LexerSettings;
    public text : string;
    public index : number;
    public expectCustomDelimiter : boolean;
    public customDelimiter : string;
    public nextZeroWidthTokenKind : TokenKind|undefined;
    public nextToken : undefined|{ tokenKind : TokenKind, end : number };
    public lastNonExtraTokenKind : TokenKind|undefined;
    public memoizedTokens : Map<number, { tokenKind : TokenKind, end : number }>;


    public constructor (settings : LexerSettings, text : string, memoizedTokens : Map<number, { tokenKind : TokenKind, end : number }> = new Map()) {
        this.settings = settings;
        this.text = text;
        this.index = 0;
        this.expectCustomDelimiter = false;
        this.customDelimiter = "";
        this.nextZeroWidthTokenKind = undefined;
        this.nextToken = undefined;
        this.lastNonExtraTokenKind = undefined;
        this.memoizedTokens = memoizedTokens;
    }

    public peek (offset : number) : number {
        if (this.index+offset >= this.text.length) {
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
        /**
         * We do not clone `this.memoizedTokens` because all clones will end up deriving the same info anyway.
         */
        const result = new MyLexerState(this.settings, this.text, this.memoizedTokens);
        result.index = this.index;
        result.expectCustomDelimiter = this.expectCustomDelimiter;
        result.customDelimiter = this.customDelimiter;
        result.nextZeroWidthTokenKind = this.nextZeroWidthTokenKind;
        result.nextToken = this.nextToken;
        result.lastNonExtraTokenKind = this.lastNonExtraTokenKind;
        return result;
    }

    public isEof (offset : number) : boolean {
        return this.peek(offset) == 0;
    }
}

export function scanAll (settings : Partial<LexerSettings>, text : string) : MyToken[] {
    const result : MyToken[] = [];
    const mySettings : LexerSettings = {
        characterSet : settings.characterSet ?? defaultLexerSettings.characterSet,
        ignoreSpace : settings.ignoreSpace ?? defaultLexerSettings.ignoreSpace,
        highNotPrecedence : settings.highNotPrecedence ?? defaultLexerSettings.highNotPrecedence,
    };
    const state = new MyLexerState(mySettings, text);

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
    const tokenKind = scanImpl(state);
    if (!Object.prototype.hasOwnProperty.call(Extras, tokenKind)) {
        state.lastNonExtraTokenKind = tokenKind;
    }
    return tokenKind;
}

export function scanImpl (state : LexerState) : TokenKind {
    if (state.nextZeroWidthTokenKind != undefined) {
        /**
         * Zero-width because the start and end index
         * for this `TokenKind` are the same.
         */
        const result = state.nextZeroWidthTokenKind;
        state.nextZeroWidthTokenKind = undefined;
        return result;
    }

    if (state.nextToken != undefined) {
        console.log("nextToken", state.nextToken);
        const result = state.nextToken.tokenKind;
        state.index = state.nextToken.end;
        state.nextToken = undefined;
        return result;
    }

    const memoized = state.memoizedTokens.get(state.index);
    if (memoized != undefined) {
        console.log("memoized", memoized);
        state.index = memoized.end;
        return memoized.tokenKind;
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

    //https://dev.mysql.com/doc/refman/8.0/en/charset-national.html
    if (ch == CharacterCodes.n || ch == CharacterCodes.N) {
        if (state.peek(1) == CharacterCodes.singleQuote) {
            state.advance();
            scanQuotedString(state);
            return TokenKind.NationalStringLiteral;
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
        } else if (state.peek(1) == CharacterCodes.b) {
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
            scanSingleLineComment(state);
            return TokenKind.SingleLineComment;
        case CharacterCodes.caret:
            state.advance();
            return TokenKind.Caret;
        case CharacterCodes.asterisk:
            state.advance();
            return TokenKind.Asterisk;
        case CharacterCodes.percent:
            state.advance();
            return TokenKind.Percent;
        case CharacterCodes.minus:
            if (state.peek(1) == CharacterCodes.minus) {
                /**
                 * > the -- start-comment sequence must be followed by a space
                 *
                 * https://dev.mysql.com/doc/refman/5.7/en/ansi-diff-comments.html
                 *
                 * However, we'll leave that to a linter down the pipeline
                 */
                 scanSingleLineComment(state);
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
            if (state.peek(1) == CharacterCodes.bar) {
                state.advance();
                state.advance();
                return TokenKind.BarBar;
            }

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
        case CharacterCodes.exclamation:
            if (state.peek(1) == CharacterCodes.equals) {
                state.advance();
                state.advance();
                return TokenKind.ExclamationEqual;
            }

            state.advance();
            return TokenKind.Exclamation;
        case CharacterCodes.equals:
            state.advance();
            return TokenKind.Equal;
        case CharacterCodes.semicolon:
            state.advance();
            const peeked = peekTokenAfterExtras(state, TokenKind.SemiColon);
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
            /**
             * Could just be a dot.
             * Could also be the start of a decimal literal or real literal.
             *
             * + `.0`    (Decimal)
             * + `.0e0`  (Real)
             * + `.0e+0` (Real)
             *
             * Note that `0.e0` is a valid real literal, but `.e0` is not.
             */
            if (isDigit(state.peek(1))) {
                /**
                 * `^\.\d` is a valid literal.
                 */
                tryScanNumberFractionalPart(state);
                if (tryScanNumberExponent(state)) {
                    return TokenKind.RealLiteral;
                } else {
                    const chE = state.peek(0);
                    if (chE == CharacterCodes.e || chE == CharacterCodes.E) {
                        state.advance();
                        return TokenKind.MalformedRealLiteral;
                    } else {
                        return TokenKind.DecimalLiteral;
                    }
                }
            } else {
                /**
                 * `^\.\D` is not a valid literal.
                 */
                state.advance();
                return TokenKind.Dot;
            }
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
            state.advance();

            const peekedAfterExtras = peekTokenAfterExtras2(state, TokenKind.At);
            if (peekedAfterExtras.tokenKind == TokenKind.At) {
                /**
                 * We have `@@` or `@ @` (which would be some kind of syntax error we handle later).
                 *
                 * In such an event, we should treat integer literals as identifiers...
                 * And if we have a decimal literal, we should take the integer part as the identifier (unless there is no integer part).
                 * And if we have a real literal, we should take the integer part as the identifier (unless there is no integer part).
                 */
                const tmp = peekedAfterExtras.lexerState;
                //tmp just scanned the 'At' token.
                //We call scan one more time to see if we get identifier, integer, decimal, or real literal
                const start = tmp.index;
                console.log("tmp.lastNonExtraTokenKind", tmp.lastNonExtraTokenKind);
                const tokenKind = scan(tmp);
                const end = tmp.index;
                console.log("scan(tmp)", tokenKind, start, end);

                if (
                    tokenKind == TokenKind.GLOBAL ||
                    tokenKind == TokenKind.LOCAL ||
                    tokenKind == TokenKind.SESSION
                ) {
                    console.log("Scoped", tokenKind);
                    //https://github.com/mysql/mysql-server/blob/beb865a960b9a8a16cf999c323e46c5b0c67f21f/sql/parse_tree_items.cc#L565
                    //https://github.com/mysql/mysql-server/blob/3290a66c89eb1625a7058e0ef732432b6952b435/sql/item_func.cc#L155
                    //disallow "SELECT @@global.global.variable"
                    //Expect a dot here
                    const peekForDot = peekTokenAfterExtras2(tmp, tmp.lastNonExtraTokenKind);
                    console.log("peekForDot", peekForDot);
                    if (peekForDot.tokenKind == TokenKind.Dot) {
                        const tmp = peekForDot.lexerState;
                        tmp.memoizedTokens.delete(tmp.index);
                        peekTokenAfterExtras2(tmp, TokenKind.At);
                    }
                }

                if (tokenKind == TokenKind.Hostname) {
                    const substr = state.text.substring(start, end);
                    const dot = substr.indexOf(".");

                    if (dot < 0) {
                        state.memoizedTokens.set(start, {
                            tokenKind : TokenKind.Identifier,
                            end,
                        });
                    } else if (dot == 0) {
                        state.memoizedTokens.set(start, {
                            tokenKind : TokenKind.Dot,
                            end : start + 1,
                        });
                    } else {
                        state.memoizedTokens.set(start, {
                            tokenKind : TokenKind.Identifier,
                            end : start + dot,
                        });
                        state.memoizedTokens.set(start + dot, {
                            tokenKind : TokenKind.Dot,
                            end : start + dot + 1,
                        });
                    }
                    console.log("hostname set");
                    return TokenKind.At;
                }

                if (tokenKind == TokenKind.Identifier) {
                    console.log("tokenKind", tokenKind, state.text.substring(start, end), tmp.lastNonExtraTokenKind);
                    state.memoizedTokens.set(start, {
                        tokenKind,
                        end,
                    });
                    return TokenKind.At;
                }

                if (tokenKind == TokenKind.IntegerLiteral) {
                    state.memoizedTokens.set(start, {
                        //Pretend the integer literal is an identifier
                        tokenKind : TokenKind.Identifier,
                        end,
                    });
                    return TokenKind.At;
                }

                if (
                    tokenKind == TokenKind.DecimalLiteral ||
                    tokenKind == TokenKind.RealLiteral ||
                    tokenKind == TokenKind.MalformedRealLiteral
                ) {
                    const substr = state.text.substring(start, end);
                    const dot = substr.indexOf(".");
                    if (dot < 0) {
                        //No dot, treat the entire thing as an identifier... If there is no +/-
                        const exponentSign = Math.max(
                            substr.indexOf("+"),
                            substr.indexOf("-")
                        );

                        if (exponentSign < 0) {
                            state.memoizedTokens.set(start, {
                                //Pretend everything is an identifier
                                tokenKind : TokenKind.Identifier,
                                end,
                            });
                        } else {
                            state.memoizedTokens.set(start, {
                                //Pretend everything up till exponent sign is an identifier
                                tokenKind : TokenKind.Identifier,
                                end : start + exponentSign,
                            });
                        }
                    } else if (dot == 0) {
                        //Starts with dot, no integer part.
                        //No identifier
                        state.memoizedTokens.set(start, {
                            tokenKind : TokenKind.Dot,
                            end : start+1,
                        });

                        const cpy = state.clone();
                        cpy.index = start + 1;
                        const unquotedIdentifier = tryScanUnquotedIdentifier(cpy, cpy.customDelimiter);

                        if (unquotedIdentifier != "") {
                            state.memoizedTokens.set(start + 1, {
                                tokenKind : TokenKind.Identifier,
                                end : start + 1 + unquotedIdentifier.length,
                            });
                        }
                    } else if (dot > 0) {
                        //We have an integer part.
                        state.memoizedTokens.set(start, {
                            //Pretend the integer part is an identifier
                            tokenKind : TokenKind.Identifier,
                            end : start + dot,
                        });
                        state.memoizedTokens.set(start + dot, {
                            tokenKind : TokenKind.Dot,
                            end : start + dot + 1,
                        });

                        const cpy = state.clone();
                        cpy.index = start + dot + 1;
                        const unquotedIdentifier = tryScanUnquotedIdentifier(cpy, cpy.customDelimiter);

                        if (unquotedIdentifier != "") {
                            state.memoizedTokens.set(start + dot + 1, {
                                tokenKind : TokenKind.Identifier,
                                end : start + dot + 1 + unquotedIdentifier.length,
                            });
                        }
                    }
                    return TokenKind.At;
                }
            }
            /**
             * https://github.com/mysql/mysql-server/blob/3290a66c89eb1625a7058e0ef732432b6952b435/sql/sql_lex.cc#L1966-L1976
             * https://github.com/mysql/mysql-server/blob/3290a66c89eb1625a7058e0ef732432b6952b435/sql/sql_lex.cc#L1982-L1985
             */
            const peekedCh = state.peek(0);
            if (
                peekedCh == CharacterCodes.at ||
                peekedCh == CharacterCodes.doubleQuote ||
                peekedCh == CharacterCodes.backtick ||
                peekedCh == CharacterCodes.singleQuote
            ) {
                /**
                 * We have `@@`, so we have a scoped or unscoped system variable.
                 * Or,
                 * We have `@"`, `@'` or @``
                 */
                return TokenKind.At;
            } else {
                if (state.lastNonExtraTokenKind == TokenKind.At) {
                    return TokenKind.At;
                }
                /**
                 * We try and parse the `LEX_HOSTNAME` which, surprisingly, can be empty...
                 */
                scanHostname(state);
                return TokenKind.At;
            }
            // if (state.peek(1) == CharacterCodes.at) {
            //     state.advance();
            //     state.advance();

            //     return TokenKind.At;
            // } else if (
            //     state.peek(1) == CharacterCodes.doubleQuote ||
            //     state.peek(1) == CharacterCodes.backtick ||
            //     state.peek(1) == CharacterCodes.singleQuote
            // ) {
            //     state.advance();
            //     scanQuotedIdentifier(state);
            //     return TokenKind.UserVariableIdentifier;
            // } else if (
            //     isUnquotedIdentifierCharacter(state.peek(1))
            // ) {
            //     state.advance();
            //     //This may be empty.
            //     const str = tryScanUnquotedIdentifier(state, state.customDelimiter);
            //     if (str.length == 0) {
            //         /**
            //          * @todo Investigate why MySQL allows this,
            //          * ```sql
            //          *  SELECT @;
            //          * ```
            //          *
            //          * @todo Investigate why MySQL allows this,
            //          * ```sql
            //          *  CREATE DEFINER=root @ FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
            //          * ```
            //          */
            //         return TokenKind.UserVariableIdentifier;
            //     } else {
            //         return TokenKind.UserVariableIdentifier;
            //     }
            // } else {
            //     /**
            //      * @todo Investigate why MySQL allows this,
            //      * ```sql
            //      *  SELECT @;
            //      * ```
            //      *
            //      * @todo Investigate why MySQL allows this,
            //      * ```sql
            //      *  CREATE DEFINER=root @ FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
            //      * ```
            //      */
            //     state.advance();
            //     return TokenKind.UserVariableIdentifier;
            // }
        case CharacterCodes.question:
            state.advance();
            return TokenKind.QuestionMark;
        case CharacterCodes.doubleQuote:
            scanQuotedIdentifier(state);
            return TokenKind.DoubleQuotedLiteral;
        case CharacterCodes.backtick:
            scanQuotedIdentifier(state);
            return TokenKind.Identifier;
        default:
            break;
    }

    return scanOthers(state);
}
