import {
    CharacterCodes,
    hasSurrogatePair,
    isAllDigit,
    isLineBreak,
    isUnquotedIdentifierCharacter,
    isWhiteSpace,
} from "./character-code";
import {
    DiagnosticMessage,
    Diagnostic,
} from "../diagnostic";
import {TokenKind} from "./token-kind.generated";
import {DiagnosticMessages} from "./diagnostic-messages";
import {MAX_DECIMAL_PRECISION, MAX_IDENTIFIER_LENGTH} from "./constant";
import {tryGetCharacterCodeTokenKind} from "./character-code-to-token-kind";
import {tryGetTokenKindFromText} from "./text-to-token-kind";


export class Scanner {
    private readonly text : string;

    private index : number = 0;
    private precedingLineBreakExists : boolean = false;
    private tokenIndex : number = 0;
    private tokenKind : TokenKind = TokenKind.UnknownToken;
    private tokenValue : string = "";
    private customDelimiter : string|undefined;

    private syntacticErrors : Diagnostic[] = [];

    public constructor (text : string) {
        this.text = text;
    }

    public clone () : Scanner {
        const result = new Scanner(this.text);
        result.index = this.index;
        result.precedingLineBreakExists = this.precedingLineBreakExists;
        result.tokenIndex = this.tokenIndex;
        result.tokenKind = this.tokenKind;
        result.tokenValue = this.tokenValue;
        result.customDelimiter = this.customDelimiter;
        return result;
    }

    public charCodeAt (index : number) {
        return this.text.charCodeAt(index);
    }
    public getText () {
        return this.text;
    }
    public getIndex () {
        return this.index;
    }
    public getTokenIndex () {
        return this.tokenIndex;
    }
    public current () : TokenKind {
        return this.tokenKind;
    }
    public getTokenValue () {
        return this.tokenValue;
    }
    public getTokenSourceText () {
        return this.text.substring(this.tokenIndex, this.index);
    }
    public getCustomDelimiter () {
        return this.customDelimiter;
    }

    public getSyntacticErrors () : readonly Diagnostic[] {
        return this.syntacticErrors;
    }

    private onErrorAt (
        start : number,
        end : number,
        diagnosticMessage : DiagnosticMessage,
        ...args : readonly (string|number)[]
    ) {
        const length = end - start;
        const diagnostic : Diagnostic = {
            start,
            length : length,
            messageText : diagnosticMessage.key.replace(/\{(\d+)\}/g, (_match, num) => args[num].toString()),
            category : diagnosticMessage.category,
            code : diagnosticMessage.code,
        };
        this.syntacticErrors.push(diagnostic);
    }

    private onError (diagnosticMessage : DiagnosticMessage, ...args : readonly (string|number)[]) {
        const length = this.getIndex()-this.getTokenIndex();
        const diagnostic : Diagnostic = {
            start : this.getTokenIndex(),
            length : length,
            messageText : diagnosticMessage.key.replace(/\{(\d+)\}/g, (_match, num) => args[num].toString()),
            category : diagnosticMessage.category,
            code : diagnosticMessage.code,
        };
        this.syntacticErrors.push(diagnostic);
    }

    private scanQuotedIdentifier () : string {
        const quotedIdentifierStart = this.index;
        let index = this.index;

        const quote = this.text.charCodeAt(index);

        let result = "";
        ++index;
        let start = index;

        while (index < this.text.length) {
            const ch = this.text.charCodeAt(index);
            if (ch == quote) {
                if (this.text.charCodeAt(index+1) == quote) {
                    //Identifiers can contain the quote char by using the quote char twice
                    result += this.text.substring(start, index+1);
                    index += 2;
                    start = index;
                } else {
                    result += this.text.substring(start, index);
                    ++index;
                    if (result.length == 0) {
                        //@todo
                        //this.onError(DiagnosticMessages.IdentifierCannotHaveLengthZero);
                    } else {
                        let lastCh = result.charCodeAt(result.length-1);
                        if (isWhiteSpace(lastCh) || isLineBreak(lastCh)) {
                            this.onErrorAt(
                                quotedIdentifierStart,
                                index,
                                DiagnosticMessages.IdentifierCannotEndWithWhiteSpace
                            );
                        }
                        if (hasSurrogatePair(result)) {
                            this.onError(DiagnosticMessages.IdentifierCannotHaveSupplementaryCharacters);
                        }
                        if (result.indexOf("\0") >= 0) {
                            this.onError(DiagnosticMessages.IdentifierCannotHaveNullCharacter);
                        }
                    }
                    this.index = index;
                    return result;
                }
            } else {
                ++index;
            }
        }

        result += this.text.substring(start);
        this.index = index;
        this.onError(DiagnosticMessages.UnexpectedEndOfText);
        return result;
    }

    private scanUnquotedIdentifier () : string {
        const start = this.index;
        let index = this.index+1;

        while (index < this.text.length) {
            const ch = this.text.charCodeAt(index);
            if (isUnquotedIdentifierCharacter(ch)) {
                ++index;
            } else {
                const result = this.text.substring(start, index);
                this.index = index;
                return result;
            }
        }

        this.index = index;
        return this.text.substring(start);
    }

    private scanUnquotedUserVariableIdentifier () : string {
        const start = this.index;
        let index = this.index+1;

        while (index < this.text.length) {
            const ch = this.text.charCodeAt(index);
            if (isUnquotedIdentifierCharacter(ch) || ch == CharacterCodes.dot) {
                ++index;
            } else {
                const result = this.text.substring(start, index);
                this.index = index;
                return result;
            }
        }

        this.index = index;
        return this.text.substring(start);
    }

    private tryScanNumberExponentPart () : string|undefined {
        const start = this.index;
        let index = this.index;
        const chE = this.text.charCodeAt(index);
        if (chE != CharacterCodes.e && chE != CharacterCodes.E) {
            return undefined;
        }

        ++index;
        /**
         * Optional +/- prefix for exponent
         */
        const chPrefix = this.text.charCodeAt(index);
        if (chPrefix == CharacterCodes.plus || chPrefix == CharacterCodes.minus) {
            ++index;
        }

        const chFirstDigit = this.text.charCodeAt(index);
        if (chFirstDigit < CharacterCodes._0 || chFirstDigit > CharacterCodes._9) {
            return undefined;
        }

        ++index;
        while (index < this.text.length) {
            const ch = this.text.charCodeAt(index);
            if (ch >= CharacterCodes._0 && ch <= CharacterCodes._9) {
                ++index;
            } else {
                this.index = index;
                return this.text.substring(start, index);
            }
        }

        this.index = index;
        return this.text.substring(start, index);
    }

    private tryScanNumberFractionalPart () : string|undefined {
        const start = this.index;
        let index = this.index;
        const chE = this.text.charCodeAt(index);
        if (chE != CharacterCodes.dot) {
            return undefined;
        }

        ++index;
        while (index < this.text.length) {
            const ch = this.text.charCodeAt(index);
            if (ch >= CharacterCodes._0 && ch <= CharacterCodes._9) {
                ++index;
            } else {
                this.index = index;
                return this.text.substring(start, index);
            }
        }

        this.index = index;
        return this.text.substring(start, index);
    }

    private scanTillEndOfMultiLineComment () : string {
        const start = this.index;
        let index = this.index;
        while (index < this.text.length) {
            if (
                this.text.charCodeAt(index) == CharacterCodes.asterisk &&
                this.text.charCodeAt(index+1) == CharacterCodes.slash
            ) {
                const result = this.text.substring(start, index);
                this.index = index+2;
                return result;
            }

            ++index;
        }

        this.index = index;
        this.onError(DiagnosticMessages.UnexpectedEndOfText);
        return this.text.substring(start);
    }

    private scanQuotedString () : string {
        let index = this.index;

        const quote = this.text.charCodeAt(index);

        let result = "";
        ++index;
        let start = index;

        while (index < this.text.length) {
            const ch = this.text.charCodeAt(index);
            if (ch == quote) {
                if (this.text.charCodeAt(index+1) == quote) {
                    //Strings can contain the quote char by using the quote char twice
                    result += this.text.substring(start, index+1);
                    index += 2;
                    start = index;
                } else {
                    result += this.text.substring(start, index);
                    ++index;
                    this.index = index;
                    return result;
                }
            } else if (ch == CharacterCodes.backslash) {
                result += this.text.substring(start, index);
                ++index;
                if (index >= this.text.length) {
                    break;
                }
                const ch = this.text.charCodeAt(index);
                //https://dev.mysql.com/doc/refman/5.7/en/string-literals.html
                switch (ch) {
                    case CharacterCodes._0:
                        result += "\0";
                        break;
                    case CharacterCodes.b:
                        result += "\b";
                        break;
                    case CharacterCodes.t:
                        result += "\t";
                        break;
                    case CharacterCodes.n:
                        result += "\n";
                        break;
                    case CharacterCodes.r:
                        result += "\r";
                        break;
                    case CharacterCodes.singleQuote:
                        result += "\'";
                        break;
                    case CharacterCodes.doubleQuote:
                        result += "\"";
                        break;
                    case CharacterCodes.Z:
                        result += "\x1a";
                        break;
                    default:
                        result += String.fromCharCode(ch);
                        break;
                }
                ++index;
                start = index;
            } else {
                ++index;
            }
        }

        result += this.text.substring(start);
        this.index = index;
        this.onError(DiagnosticMessages.UnexpectedEndOfText);
        return result;
    }

    public next () : TokenKind {
        this.precedingLineBreakExists = false;
        this.tokenValue = "";

        if (this.customDelimiter != undefined) {
            while (this.index < this.text.length) {
                const ch = this.text.charCodeAt(this.index);
                if (isWhiteSpace(ch)) {
                    ++this.index;
                    continue;
                }
                if (isLineBreak(ch)) {
                    this.precedingLineBreakExists = true;
                    ++this.index;
                    continue;
                }

                if (
                    this.text.substr(this.index, this.customDelimiter.length) ==
                    this.customDelimiter
                ) {
                    this.tokenIndex = this.index;
                    this.index += this.customDelimiter.length;
                    this.tokenValue = this.customDelimiter;
                    return this.tokenKind = TokenKind.CustomDelimiter;
                } else {
                    break;
                }
            }
        }

        while (this.index < this.text.length) {
            this.tokenIndex = this.index;
            const ch = this.text.charCodeAt(this.index);

            //https://dev.mysql.com/doc/refman/5.7/en/hexadecimal-literals.html
            if (ch == CharacterCodes.x || ch == CharacterCodes.X) {
                if (this.text.charCodeAt(this.index+1) == CharacterCodes.singleQuote) {
                    ++this.index;
                    this.tokenValue = this.scanQuotedString();
                    if (!/^[0-9a-fA-F]*$/.test(this.tokenValue)) {
                        this.onError(DiagnosticMessages.XHexLiteralMustUseHexDigits, this.tokenValue.length)
                    }
                    if (this.tokenValue.length%2 != 0) {
                        /**
                         * Values written using X'val' notation must contain an even number of digits or a syntax error occurs.
                         * To correct the problem, pad the value with a leading zero
                         */
                        this.onError(DiagnosticMessages.XHexLiteralMustHaveEvenNumberOfDigits, this.tokenValue.length)

                    }
                    return this.tokenKind = TokenKind.HexLiteral;
                }
            }

            if (ch == CharacterCodes._0) {
                if (this.text.charCodeAt(this.index+1) == CharacterCodes.x) {
                    const tokenValue = this.scanUnquotedIdentifier();
                    if (/^0x[0-9a-fA-F]+$/.test(tokenValue)) {
                        this.tokenValue = tokenValue;
                        return this.tokenKind = TokenKind.HexLiteral;
                    }
                }
            }

            //https://dev.mysql.com/doc/refman/5.7/en/bit-value-literals.html
            if (ch == CharacterCodes.b || ch == CharacterCodes.B) {
                if (this.text.charCodeAt(this.index+1) == CharacterCodes.singleQuote) {
                    ++this.index;
                    this.tokenValue = this.scanQuotedString();
                    if (!/^[01]*$/.test(this.tokenValue)) {
                        this.onError(DiagnosticMessages.BBitLiteralMustUseBinaryDigits, this.tokenValue.length)
                    }
                    return this.tokenKind = TokenKind.BitLiteral;
                }
            }

            if (ch == CharacterCodes._0) {
                if (this.text.charCodeAt(this.index+1) == CharacterCodes.b) {
                    const tokenValue = this.scanUnquotedIdentifier();
                    if (/^0b[01]+$/.test(tokenValue)) {
                        this.tokenValue = tokenValue;
                        return this.tokenKind = TokenKind.BitLiteral;
                    }
                }
            }

            switch (ch) {
                case CharacterCodes.openBrace: {
                    ++this.index;
                    return this.tokenKind = TokenKind.OpenBrace;
                }
                case CharacterCodes.closeBrace: {
                    ++this.index;
                    return this.tokenKind = TokenKind.CloseBrace;
                }
                case CharacterCodes.backslash: {
                    if (isUnquotedIdentifierCharacter(this.text.charCodeAt(this.index+1))) {
                        ++this.index;
                        this.tokenValue = this.scanUnquotedIdentifier();
                        return this.tokenKind = TokenKind.MacroIdentifier;
                    }
                    if (
                        this.text.charCodeAt(this.index+1) == CharacterCodes.doubleQuote ||
                        this.text.charCodeAt(this.index+1) == CharacterCodes.backtick
                    ) {
                        ++this.index;
                        this.tokenValue = this.scanQuotedIdentifier();
                        return this.tokenKind = TokenKind.MacroIdentifier;
                    }
                    ++this.index;
                    return this.tokenKind = TokenKind.Backslash;
                }
                case CharacterCodes.openParen: {
                    if (
                        this.text.charCodeAt(this.index+1) == CharacterCodes.pound
                    ) {
                        this.index += 2;
                        return this.tokenKind = TokenKind.OpenParenthesesPound;
                    }

                    ++this.index;
                    return this.tokenKind = TokenKind.OpenParentheses;
                }
                case CharacterCodes.lessThan: {
                    //<
                    //<<
                    //<>
                    //<=
                    //<=>
                    switch (this.text.charCodeAt(this.index+1)) {
                        case CharacterCodes.lessThan:
                            this.index += 2;
                            return this.tokenKind = TokenKind.LessLess;
                        case CharacterCodes.greaterThan:
                            this.index += 2;
                            return this.tokenKind = TokenKind.LessGreater;
                        case CharacterCodes.equals:
                            switch (this.text.charCodeAt(this.index+2)) {
                                case CharacterCodes.greaterThan:
                                    this.index += 3;
                                    return this.tokenKind = TokenKind.LessEqualGreater;
                                default:
                                    this.index += 2;
                                    return this.tokenKind = TokenKind.LessEqual;
                            }
                        default:
                            ++this.index;
                            return this.tokenKind = TokenKind.Less;
                    }
                }
                case CharacterCodes.greaterThan: {
                    //>
                    //>>
                    //>=
                    switch (this.text.charCodeAt(this.index+1)) {
                        case CharacterCodes.greaterThan:
                            this.index += 2;
                            return this.tokenKind = TokenKind.GreaterGreater;
                        case CharacterCodes.equals:
                            this.index += 2;
                            return this.tokenKind = TokenKind.GreaterEqual;
                        default:
                            ++this.index;
                            return this.tokenKind = TokenKind.Greater;
                    }
                }
                case CharacterCodes.singleQuote: {
                    this.tokenValue = this.scanQuotedString();
                    return this.tokenKind = TokenKind.StringLiteral;
                }
                case CharacterCodes.slash: {
                    if (this.text.charCodeAt(this.index+1) == CharacterCodes.asterisk) {
                        if (this.text.charCodeAt(this.index+2) == CharacterCodes.exclamation) {
                            //MySQL execution comment
                            //https://dev.mysql.com/doc/refman/5.7/en/comments.html
                            //May be a versioned or unversioned execution comment
                            this.index += 3;
                            this.tokenValue = this.scanTillEndOfMultiLineComment();
                            continue;
                        } else {
                            //Regular multi-line comment
                            this.index += 2;
                            this.tokenValue = this.scanTillEndOfMultiLineComment();
                            continue;
                        }
                    } else {
                        ++this.index;
                        return this.tokenKind = TokenKind.Slash;
                    }
                }
                case CharacterCodes.colon: {
                    if (this.text.charCodeAt(this.index+1) == CharacterCodes.equals) {
                        this.index += 2;
                        return this.tokenKind = TokenKind.ColonEqual;
                    }
                    this.onError(DiagnosticMessages.InvalidCharacter);
                    ++this.index;
                    return this.tokenKind = TokenKind.UnknownToken;
                }
                case CharacterCodes.pound: {
                    if (isUnquotedIdentifierCharacter(this.text.charCodeAt(this.index+1))) {
                        ++this.index;
                        this.tokenValue = this.scanUnquotedIdentifier();
                        return this.tokenKind = TokenKind.MacroIdentifier;
                    }
                    if (
                        this.text.charCodeAt(this.index+1) == CharacterCodes.doubleQuote ||
                        this.text.charCodeAt(this.index+1) == CharacterCodes.backtick
                    ) {
                        ++this.index;
                        this.tokenValue = this.scanQuotedIdentifier();
                        return this.tokenKind = TokenKind.MacroIdentifier;
                    }
                    if (
                        this.text.charCodeAt(this.index+1) == CharacterCodes.closeParen
                    ) {
                        this.index += 2;
                        return this.tokenKind = TokenKind.PoundCloseParentheses;
                    }
                    ++this.index;
                    return this.tokenKind = TokenKind.Pound;
                }
                case CharacterCodes.at: {
                    if (this.text.charCodeAt(this.index+1) == CharacterCodes.at) {
                        this.index += 2;
                        if (this.text.substr(this.index, 7).toUpperCase() == "GLOBAL.") {
                            this.index += 7;
                            return this.tokenKind = TokenKind.AtAtGlobalDot;
                        }
                        if (this.text.substr(this.index, 8).toUpperCase() == "SESSION.") {
                            this.index += 8;
                            return this.tokenKind = TokenKind.AtAtSessionDot;
                        }
                        return this.tokenKind = TokenKind.AtAt;
                    } else {
                        if (
                            this.text.charCodeAt(this.index+1) == CharacterCodes.doubleQuote ||
                            this.text.charCodeAt(this.index+1) == CharacterCodes.backtick ||
                            this.text.charCodeAt(this.index+1) == CharacterCodes.singleQuote
                        ) {
                            ++this.index;
                            this.tokenValue = this.scanQuotedIdentifier();
                            if (this.tokenValue.length > MAX_IDENTIFIER_LENGTH) {
                                this.onError(DiagnosticMessages.IdentifierCannotHaveLengthMoreThan64, this.tokenValue.length)
                            }
                            return this.tokenKind = TokenKind.UserVariableIdentifier;
                        } else if (
                            isUnquotedIdentifierCharacter(this.text.charCodeAt(this.index+1))
                        ) {
                            ++this.index;
                            this.tokenValue = this.scanUnquotedUserVariableIdentifier();
                            if (this.tokenValue.length > MAX_IDENTIFIER_LENGTH) {
                                this.onError(DiagnosticMessages.IdentifierCannotHaveLengthMoreThan64, this.tokenValue.length)
                            }
                            return this.tokenKind = TokenKind.UserVariableIdentifier;
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
                            ++this.index;
                            this.tokenValue = "";
                            return this.tokenKind = TokenKind.UserVariableIdentifier;
                        }
                    }
                }
                case CharacterCodes.doubleQuote:
                case CharacterCodes.backtick: {
                    this.tokenValue = this.scanQuotedIdentifier();
                    if (this.tokenValue.length > MAX_IDENTIFIER_LENGTH) {
                        this.onError(DiagnosticMessages.IdentifierCannotHaveLengthMoreThan64, this.tokenValue.length)
                    }
                    return this.tokenKind = TokenKind.Identifier;
                }
                default: {
                    const singleCharTokenKind = tryGetCharacterCodeTokenKind(ch);
                    if (singleCharTokenKind != undefined) {
                        ++this.index;
                        return this.tokenKind = singleCharTokenKind;
                    }
                    if (isUnquotedIdentifierCharacter(ch)) {
                        /**
                         * Examples:
                         * + `123`
                         * + `0`
                         * + `0e0`
                         * + `0E0`
                         */
                        this.tokenValue = this.scanUnquotedIdentifier();

                        if (isAllDigit(this.tokenValue)) {
                            const fractionalPart = this.tryScanNumberFractionalPart();
                            const exponentPart = this.tryScanNumberExponentPart();

                            if (exponentPart == undefined) {
                                if (fractionalPart == undefined) {
                                    /**
                                     * This integer literal might be too large if positive.
                                     * This integer literal might be too small, if negative.
                                     *
                                     * If too large or too small, it's actually a decimal literal.
                                     */
                                    return this.tokenKind = TokenKind.IntegerLiteral;
                                } else {
                                    const precision = this.tokenValue.length + fractionalPart.length - 1;
                                    if (precision > MAX_DECIMAL_PRECISION) {
                                        this.onError(DiagnosticMessages.DecimalLiteralPrecisionTooHigh);
                                    }

                                    this.tokenValue += fractionalPart;
                                    return this.tokenKind = TokenKind.DecimalLiteral;
                                }
                            } else {
                                if (fractionalPart != undefined) {
                                    this.tokenValue += fractionalPart;
                                }
                                this.tokenValue += exponentPart;

                                const f = Number.parseFloat(this.tokenValue);
                                if (f == Infinity) {
                                    this.onError(DiagnosticMessages.RealLiteralEvaluatesToInfinity);
                                }

                                return this.tokenKind = TokenKind.RealLiteral;
                            }
                        } else if (/^\d+[e|E]$/.test(this.tokenValue)) {
                            --this.index;
                            const exponentPart = this.tryScanNumberExponentPart();
                            if (exponentPart == undefined) {
                                const tokenKind = tryGetTokenKindFromText(this.tokenValue);
                                if (tokenKind == undefined) {
                                    if (this.tokenValue.length > MAX_IDENTIFIER_LENGTH) {
                                        this.onError(DiagnosticMessages.IdentifierCannotHaveLengthMoreThan64, this.tokenValue.length)
                                    }
                                    return this.tokenKind = TokenKind.Identifier;
                                } else {
                                    return this.tokenKind = tokenKind;
                                }
                            } else {
                                this.tokenValue += exponentPart.substring(1);
                                const f = Number.parseFloat(this.tokenValue);
                                if (f == Infinity) {
                                    this.onError(DiagnosticMessages.RealLiteralEvaluatesToInfinity);
                                }

                                return this.tokenKind = TokenKind.RealLiteral;
                            }
                        } else if (/^\d+[e|E]\d+$/.test(this.tokenValue)) {
                            const f = Number.parseFloat(this.tokenValue);
                            if (f == Infinity) {
                                this.onError(DiagnosticMessages.RealLiteralEvaluatesToInfinity);
                            }

                            return this.tokenKind = TokenKind.RealLiteral;
                        } else {
                            const tokenKind = tryGetTokenKindFromText(this.tokenValue);
                            if (tokenKind == undefined) {
                                if (this.tokenValue.length > MAX_IDENTIFIER_LENGTH) {
                                    this.onError(DiagnosticMessages.IdentifierCannotHaveLengthMoreThan64, this.tokenValue.length)
                                }
                                return this.tokenKind = TokenKind.Identifier;
                            } else {
                                /**
                                 * This resolves the ambiguous grammar,
                                 * ```
                                 * | "UNIQUE" "KEY":?
                                 * | "PRIMARY":? "KEY"
                                 * ```
                                 * With the input,
                                 * ```
                                 * UNIQUE KEY
                                 * ```
                                 * You can interpret it as,
                                 * ```
                                 * ["UNIQUE", null], [null, "KEY"]
                                 * or
                                 * ["UNIQUE", "KEY"]
                                 * ```
                                 */
                                if (tokenKind == TokenKind.UNIQUE) {
                                    const peeker = this.clone();
                                    if (peeker.next() == TokenKind.KEY) {
                                        this.next();
                                        return this.tokenKind = TokenKind.UNIQUE_KEY;
                                    } else {
                                        return this.tokenKind = tokenKind;
                                    }
                                }
                                return this.tokenKind = tokenKind;
                            }
                        }
                    }
                    if (isWhiteSpace(ch)) {
                        ++this.index;
                        continue;
                    }
                    if (isLineBreak(ch)) {
                        this.precedingLineBreakExists = true;
                        ++this.index;
                        continue;
                    }
                    this.onError(DiagnosticMessages.InvalidCharacter);
                    ++this.index;
                    return this.tokenKind = TokenKind.UnknownToken;
                }
            }
        }
        this.tokenIndex = this.index;
        return this.tokenKind = TokenKind.EndOfFile;
    }

    public scanDelimiter () : string|undefined {
        //Skip leading spaces
        while (this.index < this.text.length) {
            if (this.text.charCodeAt(this.index) == CharacterCodes.space) {
                ++this.index;
            } else {
                break;
            }
        }

        if (this.index >= this.text.length) {
            return undefined;
        }

        /**
         * Find delimiter.
         *
         * Interesting to note, the following are valid,
         * + `\t$$`
         * + `$$`
         * + `\t`
         * + `$ $` (there is a space character in the middle)
         *
         * The following are invalid,
         * + `$$\t`
         * + `$$ `
         *
         * So, whitespace can be part of delimiter, but cannot be trailing.
         */
        const start = this.index;
        while (this.index < this.text.length) {
            if (
                !isLineBreak(this.text.charCodeAt(this.index)) //&&
                //this.text.charCodeAt(this.index) != CharacterCodes.space
            ) {
                ++this.index;
            } else {
                break;
            }
        }

        const end = this.index;
        const result = this.text.substring(start, end);
        if (result.length == 0) {
            return undefined;
        }

        if (isWhiteSpace(result.charCodeAt(result.length-1))) {
            this.onErrorAt(
                end-1,
                end,
                DiagnosticMessages.DelimiterMustNotEndWithWhiteSpace
            );
        }

        if (result == ";") {
            //This is intentional
            this.customDelimiter = undefined;
            return result;
        }

        this.customDelimiter = result;
        return result;
    }

}
