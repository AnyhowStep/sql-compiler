import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

export const DiagnosticMessages = {
    Expected : makeDiagnosticMessage({
        key : "Expected {0}",
        category : DiagnosticCategory.Error,
        code : 220000,
    }),
} as const;
