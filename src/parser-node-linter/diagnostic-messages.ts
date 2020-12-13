import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

export const DiagnosticMessages = {
    UnionLhsSelectWithLimitMustBeParenthesized : makeDiagnosticMessage({
        key : "SELECT with LIMIT must be parenthesized when used with UNION",
        category : DiagnosticCategory.Error,
        code : 240000,
    }),
    UnionLhsSelectWithOrderByMustBeParenthesized : makeDiagnosticMessage({
        key : "SELECT with ORDER BY must be parenthesized when used with UNION",
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
    FullTextAndSpatialIndexCannotSpecifyIndexType : makeDiagnosticMessage({
        key : "FULLTEXT and SPATIAL index cannot specify index type",
        category : DiagnosticCategory.Error,
        code : 240009,
    }),
    RealLiteralEvaluatesToNonFiniteValue : makeDiagnosticMessage({
        key : "Real literal evaluates to non-finite value",
        category : DiagnosticCategory.Error,
        code : 240010,
    }),
    UnionDistinctOverwritesLhsUnionAll : makeDiagnosticMessage({
        key : "UNION DISTINCT overwrites all previous UNION ALL",
        category : DiagnosticCategory.Warning,
        code : 240011,
    }),
    AsteriskSelectItemMustBeFirstSelectItem : makeDiagnosticMessage({
        key : "Asterisk select item must be first select item; did you mean `SELECT *`?",
        category : DiagnosticCategory.Error,
        code : 240012,
    }),
    IntegerLiteralValueTooHigh : makeDiagnosticMessage({
        key : "Integer literal value too high; max value is {0}",
        category : DiagnosticCategory.Error,
        code : 240013,
    }),
    ForceIgnoreIndexHintDefinitionMustHaveNonEmptyKeyUsageList : makeDiagnosticMessage({
        key : "FORCE|IGNORE index hint definition must have non-empty key usage list",
        category : DiagnosticCategory.Error,
        code : 240014,
    }),
} as const;
