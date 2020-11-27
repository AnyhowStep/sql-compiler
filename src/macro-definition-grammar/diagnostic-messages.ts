import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

export const DiagnosticMessages = {
    Expected : makeDiagnosticMessage({
        key : "Expected {0}",
        category : DiagnosticCategory.Error,
        code : 220000,
    }),

    MacroNotFound : makeDiagnosticMessage({
        key : "Cannot find macro {0}",
        category : DiagnosticCategory.Error,
        code : 220001,
    }),
    MacroArgumentCountMismatch : makeDiagnosticMessage({
        key : "Expected {0} arguments; found {1}",
        category : DiagnosticCategory.Error,
        code : 220002,
    }),
} as const;
