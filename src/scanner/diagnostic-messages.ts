import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

export const DiagnosticMessages = {
    InvalidCharacter : makeDiagnosticMessage({
        key : "Invalid character",
        category : DiagnosticCategory.Error,
        code : 100000,
    }),
    UnexpectedEndOfText : makeDiagnosticMessage({
        key : "Unexpected end-of-file",
        category : DiagnosticCategory.Error,
        code : 100002,
    }),
    /**
     * > Database, table, and column names cannot end with space characters.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/identifiers.html
     */
    IdentifierCannotEndWithWhiteSpace : makeDiagnosticMessage({
        key : "Identifiers cannot end with whitespace",
        category : DiagnosticCategory.Error,
        code : 100003,
    }),
    /**
     * > ASCII NUL (U+0000) and supplementary characters (U+10000 and higher) are not permitted in quoted or unquoted identifiers.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/identifiers.html
     */
    IdentifierCannotHaveSupplementaryCharacters : makeDiagnosticMessage({
        key : "Identifiers cannot have supplementary characters",
        category : DiagnosticCategory.Error,
        code : 100004,
    }),
    /**
     * > ASCII NUL (U+0000) and supplementary characters (U+10000 and higher) are not permitted in quoted or unquoted identifiers.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/identifiers.html
     */
    IdentifierCannotHaveNullCharacter : makeDiagnosticMessage({
        key : "Identifiers cannot have null character",
        category : DiagnosticCategory.Error,
        code : 100005,
    }),
    IdentifierCannotHaveLengthZero : makeDiagnosticMessage({
        key : "Identifiers cannot have length zero",
        category : DiagnosticCategory.Error,
        code : 100006,
    }),

    RealLiteralEvaluatesToInfinity : makeDiagnosticMessage({
        key : "Real literal evaluates to Infinity",
        category : DiagnosticCategory.Error,
        code : 100007,
    }),
    DecimalLiteralPrecisionTooHigh : makeDiagnosticMessage({
        key : "Decimal literal has precision > 65",
        category : DiagnosticCategory.Error,
        code : 100009,
    }),
    IdentifierCannotHaveLengthMoreThan64 : makeDiagnosticMessage({
        key : "Identifiers cannot have length more than 64; this identifier has length {0}",
        category : DiagnosticCategory.Error,
        code : 100017,
    }),
    DelimiterMustNotEndWithWhiteSpace : makeDiagnosticMessage({
        key : "Delimiter must not end with whitespace",
        category : DiagnosticCategory.Error,
        code : 100043,
    }),

} as const;
