import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

/**
 * @todo Parser errors should start with 2
 */
export const DiagnosticMessages = {

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
