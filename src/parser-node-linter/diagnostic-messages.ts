import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

export const DiagnosticMessages = {
    UnionLhsSelectWithLimitMustBeParenthesized : makeDiagnosticMessage({
        key : "SELECT with LIMIT must be parenthesized when used with UNION",
        category : DiagnosticCategory.Error,
        code : 240000,
    }),
    UnionLhsSelectWithOrderMustBeParenthesized : makeDiagnosticMessage({
        key : "SELECT with ORDER must be parenthesized when used with UNION",
        category : DiagnosticCategory.Error,
        code : 240001,
    }),
    UnexpectedSyntaxKind : makeDiagnosticMessage({
        key : "Unexpected {0}",
        category : DiagnosticCategory.Error,
        code : 240002,
    }),

    GeneratedColumnCannotSpecifyAutoIncrement : makeDiagnosticMessage({
        key : "Generated column cannot specify auto-increment",
        category : DiagnosticCategory.Error,
        code : 240003,
    }),
    GeneratedColumnCannotSpecifyColumnFormat : makeDiagnosticMessage({
        key : "Generated column cannot specify column format",
        category : DiagnosticCategory.Error,
        code : 240004,
    }),
    GeneratedColumnCannotSpecifyStorage : makeDiagnosticMessage({
        key : "Generated column cannot specify storage",
        category : DiagnosticCategory.Error,
        code : 240005,
    }),
    GeneratedColumnCannotSpecifyDefaultValue : makeDiagnosticMessage({
        key : "Generated column cannot specify default value",
        category : DiagnosticCategory.Error,
        code : 240006,
    }),
    GeneratedColumnCannotSpecifyOnUpdateCurrentTimestamp : makeDiagnosticMessage({
        key : "Generated column cannot specify ON UPDATE CurrentTimestamp",
        category : DiagnosticCategory.Error,
        code : 240007,
    }),

    IndexPartSortDirectionDescIgnored : makeDiagnosticMessage({
        key : "Index values are always stored in ascending order; DESC is ignored",
        category : DiagnosticCategory.Warning,
        code : 240008,
    }),
} as const;
