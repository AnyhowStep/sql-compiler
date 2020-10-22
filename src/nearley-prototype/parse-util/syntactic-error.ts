import {Diagnostic, DiagnosticMessage} from "../../diagnostic";
import {TextRange} from "../../parser-node";
import {ParserState} from "../parser-state";

export function makeDiagnosticAt (
    start : number,
    end : number,
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) : Diagnostic {
    return {
        start,
        length : end-start,
        messageText : diagnosticMessage.key.replace(/\{(\d+)\}/g, (_match, num) => args[num].toString()),
        category : diagnosticMessage.category,
        code : diagnosticMessage.code,
    }
}

export function pushSyntacticErrorAt (
    state : ParserState,
    start : number,
    end : number,
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) {
    state.syntacticErrors.push(makeDiagnosticAt(start, end, diagnosticMessage, ...args));
}

export function pushSyntacticErrorAtNode (
    state : ParserState,
    node : TextRange,
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) {
    pushSyntacticErrorAt(
        state,
        node.start,
        node.end,
        diagnosticMessage,
        ...args
    );
}
