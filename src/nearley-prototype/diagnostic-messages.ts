import {DiagnosticCategory, makeDiagnosticMessage} from "../diagnostic";

/**
 * @todo Parser errors should start with 2
 */
export const DiagnosticMessages = {
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

    MacroNotFound : makeDiagnosticMessage({
        key : "Cannot find macro {0}",
        category : DiagnosticCategory.Error,
        code : 200029,
    }),
    MacroArgumentCountMismatch : makeDiagnosticMessage({
        key : "Expected {0} arguments; found {1}",
        category : DiagnosticCategory.Error,
        code : 200030,
    }),
} as const;
