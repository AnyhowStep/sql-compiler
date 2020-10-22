import {Diagnostic, DiagnosticMessage} from "../../diagnostic";
import {SyntacticErrorContainer, TextRange} from "../../parser-node";
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
    node : SyntacticErrorContainer,
    start : number,
    end : number,
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) {
    if (node.syntacticErrors == undefined) {
        node.syntacticErrors = [makeDiagnosticAt(start, end, diagnosticMessage, ...args)];
    } else {
        node.syntacticErrors.push(makeDiagnosticAt(start, end, diagnosticMessage, ...args));
    }
}

export function pushSyntacticErrorAtNode (
    _state : ParserState,
    node : TextRange & SyntacticErrorContainer,
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) {
    pushSyntacticErrorAt(
        node,
        node.start,
        node.end,
        diagnosticMessage,
        ...args
    );
}
