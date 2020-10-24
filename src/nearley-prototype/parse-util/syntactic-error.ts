import {Diagnostic, DiagnosticMessage} from "../../diagnostic";
import {SyntacticErrorContainer, TextRange} from "../../parser-node";
import {ParserState} from "../parser-state";

export function makeDiagnosticAt (
    start : number,
    end : number,
    relatedRanges : TextRange[],
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) : Diagnostic {
    return {
        start,
        length : end-start,
        messageText : diagnosticMessage.key.replace(/\{(\d+)\}/g, (_match, num) => args[num].toString()),
        category : diagnosticMessage.category,
        code : diagnosticMessage.code,
        relatedRanges : relatedRanges.map(range => {
            return {
                //We set this value later
                filename : "",
                start : range.start,
                length : range.end - range.start,
            }
        }),
    };
}

export function pushSyntacticErrorAt (
    node : SyntacticErrorContainer,
    start : number,
    end : number,
    relatedRanges : TextRange[],
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) {
    if (node.syntacticErrors == undefined) {
        node.syntacticErrors = [makeDiagnosticAt(start, end, relatedRanges, diagnosticMessage, ...args)];
    } else {
        node.syntacticErrors.push(makeDiagnosticAt(start, end, relatedRanges, diagnosticMessage, ...args));
    }
}

export function pushSyntacticErrorAtNode (
    _state : ParserState,
    node : TextRange & SyntacticErrorContainer,
    relatedRanges : TextRange[],
    diagnosticMessage : DiagnosticMessage,
    ...args : (string|number)[]
) {
    pushSyntacticErrorAt(
        node,
        node.start,
        node.end,
        relatedRanges,
        diagnosticMessage,
        ...args
    );
}
