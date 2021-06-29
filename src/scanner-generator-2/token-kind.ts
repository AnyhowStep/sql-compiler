import {functionKeywords, reservedKeywords, nonReservedKeywords} from "./keywords";

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
     * We mark the end of statements with a zero-width token
     * to help make the grammar less ambiguous.
     */
    "EndOfStatement",

    /**
     * Literals
     */
    "StringLiteral",
    /**
     * https://dev.mysql.com/doc/refman/8.0/en/charset-national.html
     */
    "NationalStringLiteral",

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
    /**
     * For macro calls,
     * `#macroName(x, y, z)`
     */
    "MacroIdentifier",

    /**
     * This could be a string literal, or an identifier.
     * It really depends on whether `ANSI_QUOTES` is enabled or not.
     * What a headache.
     */
    "DoubleQuotedLiteral",

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
    //https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/gen_lex_token.cc#L289
    "QuestionMark",

    "ColonEqual",
    "At",

    "Tilde",
    "Caret",
    "Bar",
    "BarBar",
    "Ampersand",
    "AmpersandAmpersand",

    "Exclamation",
    "ExclamationEqual",

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

    /**
     * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/sql_lex.cc#L1538
     *
     * This has higher priority than identifiers on a lexing level
     */
    "UnderscoreCharacterSet",
];

//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
//TODO : https://dev.mysql.com/doc/refman/5.7/en/keywords.html
export const tokenKinds = [
    "START_OF_FUNCTION_KEYWORD",
    ...functionKeywords,
    "END_OF_FUNCTION_KEYWORD",

    "START_OF_RESERVED_KEYWORD",
    ...reservedKeywords,
    "END_OF_RESERVED_KEYWORD",

    "START_OF_NON_RESERVED_KEYWORD",
    ...nonReservedKeywords,
    "END_OF_NON_RESERVED_KEYWORD",

    ...customTokenKinds,
] as const;
