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
    "Equal",
    "Plus",
    "Minus",
    "Dot",
    "SemiColon",
    "Slash",
    "Comma",
    "AtAt",
    "AtAtGlobalDot",
    "AtAtSessionDot",
    "Asterisk",
    "Caret",
    "ColonEqual",
    "Percent",
    "Tilde",
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
] as const;
