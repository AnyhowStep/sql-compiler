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
    JoinOperandOdbcTableReferenceMustBeParenthesized : makeDiagnosticMessage({
        key : "ODBC table reference operand of a join must be parenthesized",
        category : DiagnosticCategory.Error,
        code : 240015,
    }),
    CrossJoinShouldNotHaveJoinSpecification : makeDiagnosticMessage({
        key : "CROSS JOIN should not have join specification; consider using an INNER JOIN instead",
        category : DiagnosticCategory.Warning,
        code : 240016,
    }),
    InnerJoinShouldHaveJoinSpecification : makeDiagnosticMessage({
        key : "INNER JOIN should have join specification; consider using a CROSS JOIN instead",
        category : DiagnosticCategory.Warning,
        code : 240017,
    }),
    StraightJoinMustNotHaveJoinSpecificationUsing : makeDiagnosticMessage({
        key : "STRAIGHT_JOIN must not have join specification USING",
        category : DiagnosticCategory.Error,
        code : 240018,
    }),
    NaturalJoinMustNotHaveJoinSpecification : makeDiagnosticMessage({
        key : "NATURAL JOIN must not have join specification",
        category : DiagnosticCategory.Error,
        code : 240019,
    }),
    LeftRightJoinMustHaveJoinSpecification : makeDiagnosticMessage({
        key : "LEFT/RIGHT JOIN must have join specification",
        category : DiagnosticCategory.Error,
        code : 240020,
    }),
    WhereClauseRequiresFromClause : makeDiagnosticMessage({
        key : "Cannot use WHERE clause without FROM clause",
        category : DiagnosticCategory.Error,
        code : 240021,
    }),
    GroupByClauseRequiresFromClause : makeDiagnosticMessage({
        key : "Cannot use GROUP BY clause without FROM clause",
        category : DiagnosticCategory.Error,
        code : 240022,
    }),
    WithCubeUnimplemented : makeDiagnosticMessage({
        key : "WITH CUBE is unimplemented",
        category : DiagnosticCategory.Error,
        code : 240023,
    }),
    GroupingExprSortDirectionDeprecated : makeDiagnosticMessage({
        key : "ASC/DESC in GROUP BY clause is deprecated; use the ORDER BY clause",
        category : DiagnosticCategory.Warning,
        code : 240024,
    }),
    HavingClauseRequiresFromClause : makeDiagnosticMessage({
        key : "Cannot use HAVING clause without FROM clause",
        category : DiagnosticCategory.Error,
        code : 240025,
    }),
    ProcedureAnalyseClauseRequiresFromClause : makeDiagnosticMessage({
        key : "Cannot use PROCEDURE ANALYSE clause without FROM clause",
        category : DiagnosticCategory.Error,
        code : 240026,
    }),
    EnclosedByEscapedByMustBeLengthZeroOrOne : makeDiagnosticMessage({
        key : "ENCLOSED BY/ESCAPED BY must be length zero or one",
        category : DiagnosticCategory.Error,
        code : 240027,
    }),
    CannotSpecifyTwoIntoClauses : makeDiagnosticMessage({
        key : "Cannot specify two INTO clauses",
        category : DiagnosticCategory.Error,
        code : 240028,
    }),
    CannotUseProcedureAnalyseClauseAndIntoClauseTogether : makeDiagnosticMessage({
        key : "Cannot use PROCEDURE ANALYSE clause and INTO clause together",
        category : DiagnosticCategory.Error,
        code : 240029,
    }),
    EndLabelMustHaveBeginLabel : makeDiagnosticMessage({
        key : "END label must have BEGIN label",
        category : DiagnosticCategory.Error,
        code : 240030,
    }),
    BeginLabelEndLabelMustHaveSameIdentifier : makeDiagnosticMessage({
        key : "BEGIN label and END label must have the same identifier",
        category : DiagnosticCategory.Error,
        code : 240031,
    }),
    BeginLabelEndLabelShouldHaveSameIdentifierCaseSensitive : makeDiagnosticMessage({
        key : "BEGIN label and END label should have the same identifier; do they have the same case?",
        category : DiagnosticCategory.Warning,
        code : 240031,
    }),
    MustHaveAtLeastOneStatement : makeDiagnosticMessage({
        key : "{0} must have at least one statement",
        category : DiagnosticCategory.Error,
        code : 240032
    }),
    CaseMustHaveAtLeastOneWhenClause : makeDiagnosticMessage({
        key : "CASE must have at least one WHEN clause",
        category : DiagnosticCategory.Error,
        code : 240033
    }),
} as const;
