import {reservedKeywords, nonReservedKeywords} from "./keywords";

export const customTokenKinds = [
    /**
     * Misc
     */
    "EndOfFile",
    "UnknownToken",
    "CustomDelimiter",
    "SingleLineComment",
    "MultiLineComment",
    "ExecutionComment",
    /**
     * `SemiColon` and `customDelimiter` are not allowed between
     * `ExecutionCommentStart` and `ExecutionCommentEnd`
     */
    "ExecutionCommentStart",
    "ExecutionCommentEnd",
    "WhiteSpace",
    "LineBreak",

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
    "Colon",

    "Dot",
    "SemiColon",
    "Comma",
    "Pound",
    "OpenParenthesesPound",
    "PoundCloseParentheses",
    "Backslash",
    "QuestionMark",

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
    "DelimiterSpace",
    /**
     * Hacked in to disambiguate MySQL's grammar
     */
    "UNIQUE_KEY",
];

//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
//TODO : https://dev.mysql.com/doc/refman/5.7/en/keywords.html
export const tokenKinds = [
    "START_OF_RESERVED_KEYWORD",
    ...reservedKeywords,
    "END_OF_RESERVED_KEYWORD",

    "START_OF_NON_RESERVED_KEYWORD",
    ...nonReservedKeywords,
    "END_OF_NON_RESERVED_KEYWORD",

    ...customTokenKinds,
] as const;
