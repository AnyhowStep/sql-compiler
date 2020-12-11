import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

/**
 * @todo Parser errors should start with 2
 */
export const DiagnosticMessages = {

    InvalidDeclareStatementType : makeDiagnosticMessage({
        key : "Can only DECLARE FUNCTION",
        category : DiagnosticCategory.Error,
        code : 200000,
    }),
    DecimalPrecisionTooHigh : makeDiagnosticMessage({
        key : "Max DECIMAL precision is 65",
        category : DiagnosticCategory.Error,
        code : 200001,
    }),
    DecimalScaleTooHigh : makeDiagnosticMessage({
        key : "Max DECIMAL({0}) scale is {1}",
        category : DiagnosticCategory.Error,
        code : 200002,
    }),
    DataTypeMaxLengthTooHigh : makeDiagnosticMessage({
        key : "Highest {0} max length is {1}",
        category : DiagnosticCategory.Error,
        code : 200003,
    }),
    CannotSpecifyCharacterSet : makeDiagnosticMessage({
        key : "CHARACTER SET not allowed here",
        category : DiagnosticCategory.Error,
        code : 200004,
    }),
    InvalidDataTypeFractionalSecondPrecision : makeDiagnosticMessage({
        key : "{0} fractional second precision must be one of 0, 1, 2, 3, 4, 5, 6",
        category : DiagnosticCategory.Error,
        code : 200005,
    }),
    ExpectedDataType : makeDiagnosticMessage({
        key : "Expected data type",
        category : DiagnosticCategory.Error,
        code : 200006,
    }),
    CannotParseSourceFile : makeDiagnosticMessage({
        key : "Cannot parse source file",
        category : DiagnosticCategory.Error,
        code : 200007,
    }),
    Unexpected_Expected : makeDiagnosticMessage({
        key : "Unexpected {0}; Expected {1}",
        category : DiagnosticCategory.Error,
        code : 200008,
    }),
    Expected : makeDiagnosticMessage({
        key : "Expected {0}",
        category : DiagnosticCategory.Error,
        code : 200009,
    }),
    InternalErrorGrammarIsAmbiguous : makeDiagnosticMessage({
        key : "Internal error: grammar is ambiguous",
        category : DiagnosticCategory.Error,
        code : 200010,
    }),
    FullTextAndSpatialIndexCannotSpecifyIndexType : makeDiagnosticMessage({
        key : "FULLTEXT and SPATIAL index cannot specify index type",
        category : DiagnosticCategory.Error,
        code : 200016,
    }),
    NationalCharacterDataTypeCannotSpecifyCharacterSet : makeDiagnosticMessage({
        key : "NATIONAL character data types cannot specify CHARACTER SET",
        category : DiagnosticCategory.Error,
        code : 200017,
    }),
    VariableLengthCharacterDataTypeMustSpecifyFieldLength : makeDiagnosticMessage({
        key : "Variable-length character data types must specify field length",
        category : DiagnosticCategory.Error,
        code : 200018,
    }),
    FieldLengthExpectsIntegerLiteral : makeDiagnosticMessage({
        key : "Field length expects integer literal",
        category : DiagnosticCategory.Error,
        code : 200019,
    }),
    RealLiteralEvaluatesToNonFiniteValue : makeDiagnosticMessage({
        key : "Real literal evaluates to non-finite value",
        category : DiagnosticCategory.Error,
        code : 200019,
    }),
    InvalidRealDataTypePrecisionBits : makeDiagnosticMessage({
        key : "Invalid real data type precision bits; max 53",
        category : DiagnosticCategory.Error,
        code : 200020,
    }),
    PrecisionExpectsIntegerLiteral : makeDiagnosticMessage({
        key : "Precision expects integer literal",
        category : DiagnosticCategory.Error,
        code : 200021,
    }),
    ScaleExpectsIntegerLiteral : makeDiagnosticMessage({
        key : "Scale expects integer literal",
        category : DiagnosticCategory.Error,
        code : 200022,
    }),
    InvalidRealDataTypePrecision : makeDiagnosticMessage({
        key : "Invalid real data type precision; min 0, max 255",
        category : DiagnosticCategory.Error,
        code : 200023,
    }),
    InvalidRealDataTypeScale : makeDiagnosticMessage({
        key : "Invalid real data type scale; max {0}",
        category : DiagnosticCategory.Error,
        code : 200024,
    }),
    VariableLengthBinaryDataTypeMustSpecifyFieldLength : makeDiagnosticMessage({
        key : "Variable-length binary data types must specify field length",
        category : DiagnosticCategory.Error,
        code : 200025,
    }),
    YearFieldLengthMustBe4 : makeDiagnosticMessage({
        key : "Year field length must be 4",
        category : DiagnosticCategory.Error,
        code : 200026,
    }),
    InvalidBlobDataTypeBytes : makeDiagnosticMessage({
        key : "Invalid blob data type bytes; min 0, max 4,294,967,295",
        category : DiagnosticCategory.Error,
        code : 200027,
    }),
    InvalidTextDataTypeBytes : makeDiagnosticMessage({
        key : "Invalid text data type bytes; min 0, max 4,294,967,295",
        category : DiagnosticCategory.Error,
        code : 200028,
    }),
    MacroNotFound : makeDiagnosticMessage({
        key : "Cannot find macro {0}",
        category : DiagnosticCategory.Error,
        code : 200029,
    }),
    MacroArgumentCountMismatch : makeDiagnosticMessage({
        key : "Expected {0} arguments; found {1}",
        category : DiagnosticCategory.Error,
        code : 200030,
    }),
    InvalidDataTypeScale : makeDiagnosticMessage({
        key : "Invalid data type scale; max {0}",
        category : DiagnosticCategory.Error,
        code : 200031,
    }),

    ExpectedSourceElement : makeDiagnosticMessage({
        key : "Expected DDL, DML, expression definition, or function declaration",
        category : DiagnosticCategory.Error,
        code : 100010,
    }),
    InvalidCreateStatementType : makeDiagnosticMessage({
        key : "Can only CREATE DATABASE|EVENT|FUNCTION|INDEX|LOGFILE GROUP|PROCEDURE|SERVER|TABLE|TABLESPACE|TRIGGER|VIEW",
        category : DiagnosticCategory.Error,
        code : 100011,
    }),
    /**
     * @todo Rename to `Expected`, because
     * this could be expecting a kind of syntax or token.
     */
    ExpectedSyntaxKind : makeDiagnosticMessage({
        key : "Expected {0}",
        category : DiagnosticCategory.Error,
        code : 100012,
    }),
    ConflictingDeclarations : makeDiagnosticMessage({
        key : "Conflicting declarations {0}, {1}",
        category : DiagnosticCategory.Error,
        code : 100013,
    }),
    CannotUseReservedKeywordAsIdentifier : makeDiagnosticMessage({
        key : "Cannot use keyword {0} as identifier; escape it with backticks",
        category : DiagnosticCategory.Error,
        code : 100014,
    }),

    UnknownCollation : makeDiagnosticMessage({
        key : "Unknown collation {0}",
        category : DiagnosticCategory.Error,
        code : 100016,
    }),
    UnexpectedSyntaxKind : makeDiagnosticMessage({
        key : "Unexpected {0}",
        category : DiagnosticCategory.Error,
        code : 100026,
    }),
    ExpectedSpaceCharacterAfterDelimiterCommand : makeDiagnosticMessage({
        key : "Expected space character after delimiter command",
        category : DiagnosticCategory.Error,
        code : 100028,
    }),
    CannotUseDistinctAndAllAtTheSameTime : makeDiagnosticMessage({
        key : "Cannot use DISTINCT and ALL at the same time",
        category : DiagnosticCategory.Error,
        code : 100029,
    }),
    CannotUseSqlCacheAndSqlNoCacheAtTheSameTime : makeDiagnosticMessage({
        key : "Cannot use SQL_CACHE and SQL_NO_CACHE at the same time",
        category : DiagnosticCategory.Error,
        code : 100030,
    }),
    UnknownStatement : makeDiagnosticMessage({
        key : "Unknown statement",
        category : DiagnosticCategory.Error,
        code : 100042,
    }),
} as const;
