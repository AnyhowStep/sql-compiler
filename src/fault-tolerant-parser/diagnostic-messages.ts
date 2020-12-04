import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

export const DiagnosticMessages = {
    Expected : makeDiagnosticMessage({
        key : "Expected {0}",
        category : DiagnosticCategory.Error,
        code : 210000,
    }),
    InternalErrorGrammarIsAmbiguous : makeDiagnosticMessage({
        key : "Internal error: grammar is ambiguous",
        category : DiagnosticCategory.Error,
        code : 210001,
    }),
    UnhandledError : makeDiagnosticMessage({
        key : "Unhandled error: {0}",
        category : DiagnosticCategory.Error,
        code : 210002,
    }),
} as const;
