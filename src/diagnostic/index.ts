
export enum DiagnosticCategory {
    Error,
    Warning,
    Information,
    Hint,
}

export interface RelatedRange {
    filename : string,
    start : number,
    length : number,
    messageText? : string,
}

export interface Diagnostic {
    start: number;
    length: number;
    messageText: string;
    category: DiagnosticCategory;
    code: string|number;
    relatedRanges? : RelatedRange[];
}

export interface DiagnosticMessage {
    readonly key : string;
    readonly category : DiagnosticCategory,
    readonly code : string|number,
}

export function makeDiagnosticMessage (message : DiagnosticMessage) : DiagnosticMessage {
    return message;
}
