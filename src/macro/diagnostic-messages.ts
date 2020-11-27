import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

export const DiagnosticMessages = {
    MacroNotFound : makeDiagnosticMessage({
        key : "Cannot find macro {0}",
        category : DiagnosticCategory.Error,
        code : 230000,
    }),
    MacroArgumentCountMismatch : makeDiagnosticMessage({
        key : "Expected {0} arguments; found {1}",
        category : DiagnosticCategory.Error,
        code : 230001,
    }),
} as const;
