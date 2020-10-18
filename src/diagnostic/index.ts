
export enum DiagnosticCategory {
    Error,
    Warning,
    Information,
    Hint,
}

export interface Diagnostic {
    start: number;
    length: number;
    messageText: string;
    category: DiagnosticCategory;
    code: number;
    relatedRanges? : { filename : string, start : number, length : number }[];
}

export interface DiagnosticMessage {
    readonly key : string;
    readonly category : DiagnosticCategory,
    readonly code : number,
}

export function makeDiagnosticMessage (message : DiagnosticMessage) : DiagnosticMessage {
    return message;
}
