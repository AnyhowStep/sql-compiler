import {RelatedRange} from "../../diagnostic";
import {TextRange} from "../../parser-node";
import {ExpandedContent, TextRangeMap} from "./expand-content";
import {ConcreteSubstitution, MacroArgument} from "./expand-macro";
import {Macro} from "./find-all-macros";
import {DiagnosticLike} from "./trace-error";

export interface MyTextRangeMap extends TextRangeMap {
    filename : string,
    macroIdentifier : undefined|{
        src : TextRange,
    }
}

export type ExpansionPathItem =
    & (
        | ExpandedContent
        //| ExpandedMacro
        | MyTextRangeMap
        | (
            & ConcreteSubstitution
            & { macro : Macro }
        )
        | MacroArgument
    )
    & { filename : string, }
;

export type ExpansionPath =
    | [ExpandedContent & { filename : string, }]
    | [ExpandedContent & { filename : string, }, MyTextRangeMap|MacroArgument & { filename : string, }]
    | [ExpandedContent & { filename : string, }, MyTextRangeMap|MacroArgument & { filename : string, }, ...ExpansionPathItem[]];

function isLength<ArrT extends readonly unknown[], LengthT extends number> (
    arr : ArrT,
    length : LengthT
) : arr is Extract<ArrT, { length : LengthT }> {
    return arr.length == length;
}

interface GetExpansionPathImplArgs {
    readonly filename : string,
    readonly diagnostic : DiagnosticLike,
    readonly expandedContent : ExpandedContent,

    readonly traceRelatedRange : (
        relatedRange : RelatedRange,
        expandedContent : ExpandedContent|undefined,
    ) => ExpansionPath,
}

function getExpansionPathImpl (
    {
        filename,
        diagnostic,
        expandedContent,

        traceRelatedRange,
    } : GetExpansionPathImplArgs
) : ExpansionPath {
    const diagnosticEnd = diagnostic.start + diagnostic.length;
    const originalToExpanded = expandedContent.originalToExpanded.find(originalToExpanded => {
        return originalToExpanded.resultDst.end >= diagnosticEnd;
    });
    if (originalToExpanded == undefined) {
        return [
            {
                ...expandedContent,
                filename,
            },
        ];
    }

    if (originalToExpanded.expandedMacro == undefined) {
        return [
            {
                ...expandedContent,
                filename,
            },
            {
                ...originalToExpanded,
                filename,
                macroIdentifier : undefined,
            },
        ];
    }

    //We have a macro call
    const expandedMacro = originalToExpanded.expandedMacro;

    const macroResult = getExpansionPathImpl({
        filename : expandedMacro.macro.filename,
        diagnostic,
        expandedContent : expandedMacro.expandedContent,
        traceRelatedRange,
    });

    const expandedMacro_originalToExpandedOrArg = (
        isLength(macroResult, 1) ?
        {
            src : {
                end : diagnosticEnd,
            }
        } :
        macroResult[1]
    );

    const expandedMacro_originalToExpandedOrArg_src_end = (
        "src" in expandedMacro_originalToExpandedOrArg ?
        expandedMacro_originalToExpandedOrArg.src.end :
        expandedMacro_originalToExpandedOrArg.end
    );

    const originalToSubstituted = expandedMacro.originalToSubstituted.find(originalToSubstituted => {
        return originalToSubstituted.resultDst.end >= expandedMacro_originalToExpandedOrArg_src_end;
    });

    if (originalToSubstituted == undefined) {
        throw new Error(`Should have originalToSubstituted`);
    }

    if (originalToSubstituted.src.parameterName == undefined) {
        //This string did not come from a parameter.
        return [
            {
                ...expandedContent,
                filename,
            },
            {
                ...originalToExpanded,
                macroIdentifier : expandedMacro.macroIdentifier,
                filename,
            },
            //expandedMacro,
            {
                ...originalToSubstituted,
                macro : expandedMacro.macro,
                filename : expandedMacro.macro.filename,
            },
            ...macroResult,
        ];
    }

    const parameterIndex = expandedMacro.macro.parameterList.findIndex(parameter => {
        return parameter.parameterName == originalToSubstituted.src.parameterName;
    });

    if (parameterIndex < 0) {
        throw new Error(`Should have parameterIndex`);
    }

    const arg = expandedMacro.args[parameterIndex];

    //This string came from a parameter.
    return [
        {
            ...expandedContent,
            filename,
        },
        //originalToExpanded,
        {
            ...arg,
            filename,
        },
        //expandedMacro,
        {
            ...originalToSubstituted,
            macro : expandedMacro.macro,
            filename : expandedMacro.macro.filename,
        },
        ...macroResult,
    ];
}

export function getExpansionPath (
    filename : string,
    diagnostic : DiagnosticLike,
    expandedContent : ExpandedContent,
    getExpandedContent : (filename : string) => ExpandedContent,
) : ExpansionPath {
    return getExpansionPathImpl({
        filename,
        diagnostic,
        expandedContent,

        traceRelatedRange : (relatedRange, expandedContent) => {
            return getExpansionPath(
                relatedRange.filename,
                relatedRange,
                expandedContent ?? getExpandedContent(relatedRange.filename),
                getExpandedContent,
            );
        },
    });
}
