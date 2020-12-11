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
} as const;
