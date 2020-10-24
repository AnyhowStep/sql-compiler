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
    GeneratedColumnCannotSpecifyAutoIncrement : makeDiagnosticMessage({
        key : "Generated column cannot specify auto-increment",
        category : DiagnosticCategory.Error,
        code : 200011,
    }),
    GeneratedColumnCannotSpecifyColumnFormat : makeDiagnosticMessage({
        key : "Generated column cannot specify column format",
        category : DiagnosticCategory.Error,
        code : 200012,
    }),
    GeneratedColumnCannotSpecifyStorage : makeDiagnosticMessage({
        key : "Generated column cannot specify storage",
        category : DiagnosticCategory.Error,
        code : 200013,
    }),
    GeneratedColumnCannotSpecifyDefaultValue : makeDiagnosticMessage({
        key : "Generated column cannot specify default value",
        category : DiagnosticCategory.Error,
        code : 200014,
    }),
    IndexPartSortDirectionDescIgnored : makeDiagnosticMessage({
        key : "Index values are always stored in ascending order; DESC is ignored",
        category : DiagnosticCategory.Warning,
        code : 200015,
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
    UnknownStatement : makeDiagnosticMessage({
        key : "Unknown statement",
        category : DiagnosticCategory.Error,
        code : 100042,
    }),
} as const;
