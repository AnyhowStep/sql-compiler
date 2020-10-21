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
    "IntegerLiteral",
    "DecimalLiteral",
    "RealLiteral",

    /**
     * Identifiers
     */
    "Identifier",
    "UserVariableIdentifier",

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

    "HackedDelimiterKeyword",
] as const;
