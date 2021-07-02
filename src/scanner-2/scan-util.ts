import {CharacterCodes, isDigit, isLineBreak, isUnquotedIdentifierCharacter} from "./character-code";
import {LexerState, scan} from "./scan-all";
import {Extras, FunctionKeyword, NonReservedKeyword, ReservedKeyword, TokenKind} from "./token.generated";

/**
 * If it does not encounter a closing quote,
 * it will assume the position just before
 * the first line break was the intended end of the string.
 *
 * Then, we push the actual error reporting down the pipeline.
 *
 * -----
 *
 * Note that quoted strings can contain line breaks without it being an error,
 * if closed properly.
 *
 * The following is valid MySQL,
 * ```sql
 *  SELECT 'A
 *  B
 *  C';
 * ```
 */
export function scanQuotedString (state : LexerState) {
    const tmp = state.clone();

    const quote = tmp.advance();

    let foundLineBreak = false;

    while (!tmp.isEof(0)) {
        const ch = tmp.peek(0);
        if (ch == quote) {
            if (tmp.peek(1) == quote) {
                //Strings can contain the quote char by using the quote char twice
                tmp.advance();
                tmp.advance();
            } else {
                //We closed the token properly
                tmp.advance();
                state.index = tmp.index;
                return;
            }
        } else if (ch == CharacterCodes.backslash) {
            tmp.advance();
            //https://dev.mysql.com/doc/refman/5.7/en/string-literals.html
            tmp.advance();
        } else if (isLineBreak(ch)) {
            //Tentatively mark the end of the token here.
            //If we do not close the token properly,
            //this will be the end of our token for parsing purposes.
            //We push error reporting down the pipeline.
            if (!foundLineBreak) {
                state.index = tmp.index;
                foundLineBreak = true;
            }
            tmp.advance();
        } else {
            tmp.advance();
        }
    }

    if (!foundLineBreak) {
        //We found an EOF and didn't see a line break before.
        //So, we mark the end of the token here.
        //We push error reporting down the pipeline.
        state.index = tmp.index;
    }
    return;
}

export const regex0xHexLiteral = /^0x[0-9a-fA-F]+$/;
export function is0xHexLiteral (str : string) {
    return regex0xHexLiteral.test(str);
}

export const regex0bBitLiteral = /^0b[01]+$/;
export function is0bBitLiteral (str : string) {
    return regex0bBitLiteral.test(str);
}

export function scanTillEndOfMultiLineComment (state : LexerState) {
    const tmp = state.clone();

    while (!tmp.isEof(0)) {
        if (
            tmp.peek(0) == CharacterCodes.asterisk &&
            tmp.peek(1) == CharacterCodes.slash
        ) {
            tmp.advance();
            tmp.advance();
            state.index = tmp.index;
            return;
        }

        tmp.advance();
    }

    /**
     * MultiLine comment not closed properly.
     * We push the error down the pipeline.
     */
    state.index = tmp.index;
    return;
}

export function scanTillEndOfLineOrEof (state : LexerState) {
    const tmp = state.clone();

    while (!tmp.isEof(0)) {
        if (isLineBreak(tmp.peek(0))) {
            state.index = tmp.index;
            return;
        }

        tmp.advance();
    }

    state.index = tmp.index;
    return;
}

export function scanSingleLineComment (state : LexerState) {
    const startIndex = state.index;
    scanTillEndOfLineOrEof(state);
    const endIndex = state.index;

    const commentText = state.text.substring(startIndex, endIndex);
    /**
     * Hacky support for special syntax to modify lexer state dynamically.
     *
     * ```
     * @@ignore_space = false
     * ```
     */
    const ignoreSpaceMatch = /.*@@ignore_space\s*=\s*(\w+)/.exec(commentText);
    if (ignoreSpaceMatch != undefined) {
        state.settings = {
            ...state.settings,
            ignoreSpace : ignoreSpaceMatch[1].toLowerCase() == "true",
        };
    }

    const highNotPrecedenceMatch = /.*@@high_not_precedence\s*=\s*(\w+)/.exec(commentText);
    if (highNotPrecedenceMatch != undefined) {
        state.settings = {
            ...state.settings,
            highNotPrecedence : highNotPrecedenceMatch[1].toLowerCase() == "true",
        };
    }
}

export function tryScanString (state : LexerState, str : string, overwriteIndex = true) {
    const tmp = state.clone();

    for (const ch of str) {
        if (tmp.advance() != ch.charCodeAt(0)) {
            return false;
        }
    }

    if (overwriteIndex) {
        state.index = tmp.index;
    }
    return true;
}

export function tryScanStringCaseInsensitive (state : LexerState, str : string, overwriteIndex = true) {
    const tmp = state.clone();

    for (const ch of str) {
        if (String.fromCharCode(tmp.advance()).toUpperCase().charCodeAt(0) != ch.toUpperCase().charCodeAt(0)) {
            return false;
        }
    }

    if (overwriteIndex) {
        state.index = tmp.index;
    }
    return true;
}

/**
 * Unquoted identifiers can be interrupted by custom delimiter.
 * If returned length is zero, there is no unquoted identifier.
 */
export function tryScanUnquotedIdentifier (state : LexerState, customDelimiter : string) {
    const tmp = state.clone();

    let result : string = "";

    while (!tmp.isEof(0)) {
        if (customDelimiter.length > 0) {
            if (result.length > 0) {
                state.index = tmp.index;
            }
            if (tryScanString(tmp, customDelimiter)) {
                //Interrupted by custom delimiter
                return result;
            }
        }

        const ch = tmp.peek(0);
        if (isUnquotedIdentifierCharacter(ch)) {
            result += String.fromCharCode(tmp.advance());
        } else {
            if (result.length > 0) {
                state.index = tmp.index;
            }
            return result;
        }
    }

    if (result.length > 0) {
        state.index = tmp.index;
    }
    return result;
}

/**
 * If it does not encounter a closing quote,
 * it will assume the position just before
 * the first line break was the intended end of the identifier.
 *
 * Then, we push the actual error reporting down the pipeline.
 *
 * -----
 *
 * Note that quoted identifiers can contain line breaks without it being an error,
 * if closed properly.
 *
 * The following is valid MySQL,
 * ```sql
 *  CREATE SCHEMA `A
 *  B
 *  C`;
 * ```
 */
export function scanQuotedIdentifier (state : LexerState) {
    const tmp = state.clone();
    const quote = tmp.advance();

    let foundLineBreak = false;

    while (!tmp.isEof(0)) {
        const ch = tmp.peek(0);
        if (ch == quote) {
            if (tmp.peek(1) == quote) {
                //Identifiers can contain the quote char by using the quote char twice
                tmp.advance();
                tmp.advance();
            } else {
                //We closed the token properly.
                tmp.advance();
                state.index = tmp.index;
                return;
            }
        } else if (isLineBreak(ch)) {
            //Tentatively mark the end of the token here.
            //If we do not close the token properly,
            //this will be the end of our token for parsing purposes.
            //We push error reporting down the pipeline.
            if (!foundLineBreak) {
                state.index = tmp.index;
                foundLineBreak = true;
            }
            tmp.advance();
        } else {
            tmp.advance();
        }
    }

    if (!foundLineBreak) {
        //We found an EOF and didn't see a line break before.
        //So, we mark the end of the token here.
        //We push error reporting down the pipeline.
        state.index = tmp.index;
    }
    return;
}

export const regexDigitE = /^\d+[eE]$/;
export function isDigitE (str : string) {
    return regexDigitE.test(str);
}

export function tryScanDigitEDigit (state : LexerState) {
    const tmp = state.clone();

    //Digit
    if (!isDigit(tmp.peek(0))) {
        return false;
    }
    tmp.advance();

    while (isDigit(tmp.peek(0))) {
        tmp.advance();
    }

    //E
    const chE = tmp.peek(0);
    if (chE != CharacterCodes.e && chE != CharacterCodes.E) {
        return false;
    }
    tmp.advance();

    //Digit
    if (!isDigit(tmp.peek(0))) {
        return false;
    }
    tmp.advance();

    while (isDigit(tmp.peek(0))) {
        tmp.advance();
    }

    state.index = tmp.index;
    return true;
}

export function tryScanNumberFractionalPart (state : LexerState) {
    const tmp = state.clone();

    if (tmp.peek(0) != CharacterCodes.dot) {
        return false;
    }
    tmp.advance();

    while (isDigit(tmp.peek(0))) {
        tmp.advance();
    }

    state.index = tmp.index;
    return true;
}

export function tryScanNumberExponent2 (state : LexerState) {
    const tmp = state.clone();

    /**
     * Optional +/- prefix for exponent
     */
    const chPrefix = tmp.peek(0);
    if (chPrefix == CharacterCodes.plus || chPrefix == CharacterCodes.minus) {
        tmp.advance();
    }

    const chFirstDigit = tmp.peek(0);
    if (!isDigit(chFirstDigit)) {
        return false;
    }
    tmp.advance();

    while (isDigit(tmp.peek(0))) {
        tmp.advance();
    }

    state.index = tmp.index;
    return true;
}

export function tryScanNumberExponent (state : LexerState) {
    const tmp = state.clone();

    const chE = tmp.peek(0);
    if (chE != CharacterCodes.e && chE != CharacterCodes.E) {
        return false;
    }
    tmp.advance();

    if (tryScanNumberExponent2(tmp)) {
        state.index = tmp.index;
        return true;
    } else {
        return false;
    }
}

export function tryGetKeywordTokenKind (state : LexerState, str : string) : TokenKind|undefined {
    str = str.toUpperCase();
    if (Object.prototype.hasOwnProperty.call(FunctionKeyword, str)) {
        return str as TokenKind;
    }
    if (Object.prototype.hasOwnProperty.call(ReservedKeyword, str)) {
        /**
         * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/sql_lex.cc#L905-L907
         */
        if (str == TokenKind.NOT && state.settings.highNotPrecedence) {
            return TokenKind.NOT2;
        }
        return str as TokenKind;
    }
    if (Object.prototype.hasOwnProperty.call(NonReservedKeyword, str)) {
        return str as TokenKind;
    }
    return undefined;
}

export const regexAllDigit = /^\d+$/;
export function isAllDigit (str : string) {
    return regexAllDigit.test(str);
}

export function tryScanIdentifierOrKeywordOrNumberLiteral (state : LexerState, customDelimiter : string) : TokenKind|undefined {
    const tmp = state.clone();

    if (!isUnquotedIdentifierCharacter(tmp.peek(0))) {
        return undefined;
    }

    if (tryScanDigitEDigit(tmp)) {
        /**
         * + `0e0`
         * + `0E0`
         */
        state.index = tmp.index;
        return TokenKind.RealLiteral;
    }

    /**
     * Examples:
     * + `123`
     * + `0`
     * + `0e` (May be followed by +123; e.g. 0e+123)
     * + `0E`
     */
    const str = tryScanUnquotedIdentifier(tmp, customDelimiter);
    if (str.length == 0) {
        //No unquoted identifier.
        //We already checked peek(0) is unquoted identifier character.
        //So, we were interrupted by custom delimiter.
        if (tryScanString(tmp, customDelimiter)) {
            state.index = tmp.index;
            return TokenKind.CustomDelimiter;
        } else {
            //I don't know what this is, this should never happen.
            //This only happens if `customDelimiter.length == 0`.
            //But, if this is the case, then we have a bug in our code.
            throw new Error(`Empty custom delimiter was matched`);
        }
    }


    if (isAllDigit(str)) {
        /**
         * + 123
         * + 123.
         * + 123.e10
         * + 123.e-10
         * + 123.123
         * + 123.123e123
         * + 123.123e-123
         */
        if (tryScanNumberFractionalPart(tmp)) {
            if (tryScanNumberExponent(tmp)) {
                state.index = tmp.index;
                return TokenKind.RealLiteral;
            } else {
                state.index = tmp.index;
                return TokenKind.DecimalLiteral;
            }
        } else {
            /**
             * @todo
             * This integer literal might be too large, if positive.
             * This integer literal might be too small, if negative.
             *
             * If too large or too small, it's actually a decimal literal.
             */
            state.index = tmp.index;
            return TokenKind.IntegerLiteral;
        }
    }

    if (isDigitE(str)) {
        if (tryScanNumberExponent2(tmp)) {
            state.index = tmp.index;
            return TokenKind.RealLiteral;
        } else {
            state.index = tmp.index;
            return TokenKind.Identifier;
        }
    }

    const keywordTokenKind = tryGetKeywordTokenKind(tmp, str);
    if (keywordTokenKind == undefined) {
        if (str.startsWith("_")) {
            const maybeCharacterSet = str.substr(1);
            if (state.settings.characterSet.has(maybeCharacterSet)) {
                state.index = tmp.index;
                return TokenKind.UnderscoreCharacterSet;
            } else {
                state.index = tmp.index;
                return TokenKind.Identifier;
            }
        } else {
            state.index = tmp.index;
            return TokenKind.Identifier;
        }
    }

    const memoized = state.memoizedTokenKind.get(tmp.index);
    if (memoized != undefined) {
        state.index = tmp.index;
        return memoized;
    }

    /**
     * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/sql_lex.cc#L1490-L1505
     *
     *
     */
    const peeked = (
        state.settings.ignoreSpace ?
        peekTokenAfterExtras(tmp) :
        peekToken(tmp)
    );

    if (peeked == TokenKind.OpenParentheses) {
        /**
         * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/sql_lex.cc#L893-L898
         *
         * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/lex.h
         *
         * We check `sql_keywords_and_funcs` for keywords.
         */
        state.index = tmp.index;
        state.memoizedTokenKind.set(state.index, keywordTokenKind);
        return keywordTokenKind;
    } else {
        /**
         * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/sql_lex.cc#L893-L898
         *
         * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/lex.h
         *
         * We check `sql_keywords` for keywords.
         */
        if (Object.prototype.hasOwnProperty.call(FunctionKeyword, keywordTokenKind)) {
            /**
             * We treat this as just an identifier.
             */
            state.index = tmp.index;
            state.memoizedTokenKind.set(state.index, TokenKind.Identifier);
            return TokenKind.Identifier;
        } else {
            state.index = tmp.index;
            state.memoizedTokenKind.set(state.index, keywordTokenKind);
            return keywordTokenKind;
        }
    }
}

export function scanDelimiter (state : LexerState) {
    if (state.isEof(0)) {
        return TokenKind.EndOfFile;
    }

    const tmp = state.clone();

    //Skip leading spaces
    if (tmp.peek(0) == CharacterCodes.space) {
        tmp.advance();

        while (tmp.peek(0) == CharacterCodes.space) {
            tmp.advance();
        }

        state.index = tmp.index;
        return TokenKind.WhiteSpace;
    }

    if (tmp.peek(0) == CharacterCodes.carriageReturn) {
        if (state.peek(1) == CharacterCodes.lineFeed) {
            //Cannot have delimiter of length zero
            tmp.advance();
            tmp.advance();
            //This is intentional.
            //We assume there is no custom delimiter anymore.
            state.customDelimiter = "";
            state.expectCustomDelimiter = false;
            state.index = tmp.index;
            return TokenKind.LineBreak;
        }

        //Cannot have delimiter of length zero
        tmp.advance();
        //This is intentional.
        //We assume there is no custom delimiter anymore.
        state.customDelimiter = "";
        state.expectCustomDelimiter = false;
        state.index = tmp.index;
        return TokenKind.LineBreak;
    }

    if (tmp.peek(0) == CharacterCodes.lineFeed) {
        //Cannot have delimiter of length zero
        tmp.advance();
        //This is intentional.
        //We assume there is no custom delimiter anymore.
        state.customDelimiter = "";
        state.expectCustomDelimiter = false;
        state.index = tmp.index;
        return TokenKind.LineBreak;
    }

    /**
     * Find delimiter.
     *
     * Interesting to note, the following are valid,
     * + `\t$$`
     * + `$$`
     * + `\t`
     * + `\t `
     * + `\t\t`
     * + `\t\t `
     * + `$ $` (there is a space character in the middle)
     *
     * The following are invalid,
     * + `$$\t`
     * + `$$ `
     *
     * So, whitespace can be part of delimiter, but cannot be trailing,
     * unless the entire delimiter is whitespace.
     */
    state.customDelimiter = "";
    while (!tmp.isEof(0) && !isLineBreak(tmp.peek(0))) {
        state.customDelimiter += String.fromCharCode(tmp.advance());
    }

    if (state.customDelimiter == ";") {
        //This is intentional.
        //Semicolon is the same as using the "original" delimiter,
        //Not a custom delimiter.
        state.customDelimiter = "";
    }

    state.expectCustomDelimiter = false;
    state.index = tmp.index;

    return TokenKind.CustomDelimiter;
}

export function scanOthers (state : LexerState) : TokenKind {
    const tmp = state.clone();

    /**
     * Yes, we want "DELIMITER "
     *                        ^
     *
     * With a space at the end.
     */
    if (tryScanStringCaseInsensitive(tmp, "DELIMITER ")) {
        state.expectCustomDelimiter = true;
        state.index = tmp.index;

        return TokenKind.DelimiterSpace;
    }

    const tokenKind = tryScanIdentifierOrKeywordOrNumberLiteral(tmp, state.customDelimiter);
    if (tokenKind == undefined) {
        if (tmp.isEof(0)) {
            return TokenKind.EndOfFile;
        }
        tmp.advance();
        state.index = tmp.index;
        return TokenKind.UnknownToken;
    }

    state.index = tmp.index;
    return tokenKind;
}

export function peekTokenAfterExtras (state : LexerState) : TokenKind {
    const tmp = state.clone();
    while (!tmp.isEof(0)) {
        const tokenKind = scan(tmp);
        if (Object.prototype.hasOwnProperty.call(Extras, tokenKind)) {
            continue;
        }
        return tokenKind;
    }
    return TokenKind.EndOfFile;
}

export function peekToken (state : LexerState) : TokenKind {
    const tmp = state.clone();
    if (!tmp.isEof(0)) {
        const tokenKind = scan(tmp);
        return tokenKind;
    }
    return TokenKind.EndOfFile;
}
