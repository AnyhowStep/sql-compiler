import {TextRange} from "../../parser-node";
import {ExpandedContent, TextRangeMap} from "./expand-content";
import {MacroPartType} from "./find-all-macros";
import {DiagnosticLike} from "./trace-error-3";

export interface PathItem extends TextRange {
    filename : string,
    expandedPart : TextRangeMap
}

export type ExpansionPathItem =
    | PathItem
;

export type ExpansionPath =
    | ExpansionPathItem[]
;

export function isLength<ArrT extends readonly unknown[], LengthT extends number> (
    arr : ArrT,
    length : LengthT
) : arr is Extract<ArrT, { length : LengthT }> {
    return arr.length == length;
}

interface GetExpansionPathImplArgs {
    readonly filename : string,
    readonly diagnostic : DiagnosticLike,
    readonly expandedContent : ExpandedContent,
}

function getExpansionPathImpl (
    {
        filename,
        diagnostic,
        expandedContent,
    } : GetExpansionPathImplArgs
) : ExpansionPath {
    const expandedPart = expandedContent.expandedParts.find(expandedPart => {
        if (expandedPart.expandedSrc.start == expandedPart.expandedSrc.end) {
            return false;
        }
        return (
            expandedPart.expandedSrc.start <= diagnostic.start &&
            expandedPart.expandedSrc.end >= diagnostic.start
        );
    });
    if (expandedPart == undefined) {
        //This should not happen...
        throw new Error(`Diagnostic is outside expanded content`);
    }

    if (expandedPart.expandedPart.type == MacroPartType.PlainText) {
        const diagnosticStartOffset = diagnostic.start - expandedPart.expandedSrc.start;
        return [
            {
                filename,
                start : diagnosticStartOffset + expandedPart.expandedPart.filePart.fileSrc.start,
                end : diagnosticStartOffset + expandedPart.expandedPart.filePart.fileSrc.start + diagnostic.length,
                expandedPart,
            }
        ];
    } else if (expandedPart.expandedPart.type == MacroPartType.ParameterReference) {
        const diagnosticStartOffset = diagnostic.start - expandedPart.expandedSrc.start;
        expandedPart.expandedPart.filePart.fileSrc
        const argTrace = getExpansionPathImpl({
            filename,
            diagnostic : {
                start : diagnosticStartOffset,
                length : diagnostic.length,
            },
            expandedContent : expandedPart.expandedPart.macroArgument.value,
        });
        return [
            {
                filename,
                start : expandedPart.expandedPart.filePart.fileSrc.start,
                end : expandedPart.expandedPart.filePart.fileSrc.end,
                expandedPart,
            },
            ...argTrace,
        ]
    } else {
        const macroCallTrace = getExpansionPathImpl({
            filename : expandedPart.expandedPart.expandedMacro.macro.filename,
            diagnostic,
            expandedContent : expandedPart.expandedPart.expandedMacro.expandedContent,
        });

        if (macroCallTrace[0].expandedPart.expandedPart.type == MacroPartType.PlainText) {
            return [
                {
                    filename,
                    start : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.start,
                    end : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.end,
                    expandedPart,
                },
                ...macroCallTrace,
            ]
        } else if (macroCallTrace[0].expandedPart.expandedPart.type == MacroPartType.ParameterReference) {
            return macroCallTrace;
        } else {
            return [
                {
                    filename,
                    start : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.start,
                    end : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.end,
                    expandedPart,
                },
                ...macroCallTrace,
            ]
        }
    }
}

export function getExpansionPath (
    filename : string,
    diagnostic : DiagnosticLike,
    expandedContent : ExpandedContent,
) : ExpansionPath {
    return getExpansionPathImpl({
        filename,
        diagnostic,
        expandedContent,
    });
}
