import {nonReservedKeywords} from "./non-reserved-keyword";
import {reservedKeywords} from "./reserved-keyword";

//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
//TODO : https://dev.mysql.com/doc/refman/5.7/en/keywords.html
export const tokenKinds = [
    ...reservedKeywords,
    "END_OF_RESERVED_KEYWORD",

    ...nonReservedKeywords,
    "END_OF_NON_RESERVED_KEYWORD",

    /**
     * Misc
     */
    "EndOfFile",
    "UnknownToken",
    "CustomDelimiter",

    /**
     * Literals
     */
    "StringLiteral",

    //https://dev.mysql.com/doc/refman/5.7/en/hexadecimal-literals.html
    "HexLiteral",

    //https://dev.mysql.com/doc/refman/5.7/en/bit-value-literals.html
    "BitLiteral",

    "IntegerLiteral",
    "DecimalLiteral",
    "RealLiteral",

    /**
     * Identifiers
     */
    "Identifier",
    "UserVariableIdentifier",
    /**
     * For macro calls,
     * `#macroName(x, y, z)`
     */
    "MacroIdentifier",

    /**
     * Punctuation
     */
    "Plus",
    "Minus",
    "Asterisk",
    "Percent",
    "Slash",

    "Dot",
    "SemiColon",
    "Comma",
    "Pound",
    "OpenParenthesesPound",
    "PoundCloseParentheses",
    "Backslash",

    "ColonEqual",
    "AtAt",
    "AtAtGlobalDot",
    "AtAtSessionDot",

    "Tilde",
    "Caret",
    "Bar",

    "Equal",
    "LessEqualGreater",
    "GreaterEqual",
    "Greater",
    "LessEqual",
    "Less",
    "LessGreater",
    "LessLess",
    "GreaterGreater",

    "OpenParentheses",
    "CloseParentheses",
    "OpenBrace",
    "CloseBrace",

    /**
     * Hacked in to support DELIMITER statements
     */
    "DELIMITER_STATEMENT",
    /**
     * Hacked in to disambiguate MySQL's grammar
     */
    "UNIQUE_KEY",
] as const;
