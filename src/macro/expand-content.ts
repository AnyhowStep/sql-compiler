import {Diagnostic} from "../diagnostic";
import {makeDiagnosticAt} from "../parse-util";
import type {TextRange} from "../nearley-wrapper";
import {DiagnosticMessages} from "./diagnostic-messages";
import {ExpandedMacro, expandMacro, MacroArgument} from "./expand-macro";
import {Macro, MacroParameterList, MacroPartType} from "../macro-definition-node";
import {computeSubstitutionContent} from "../macro-definition-grammar";
import {substitute, SubstitutedMacroCallPart, SubstitutedParameterReferencePart, SubstitutedPlainTextPart} from "./substitute";

export interface ExpandedMacroCallPart {
    type : MacroPartType.MacroCall,
    substituted : SubstitutedMacroCallPart,
    macroArguments : MacroArgument[],
    expandedMacro : ExpandedMacro,
}

export interface TextRangeMap {
    expandedSrc : TextRange,
    expandedPart : SubstitutedPlainTextPart|SubstitutedParameterReferencePart|ExpandedMacroCallPart,
}

export interface ExpandedContent {
    originalParts : (SubstitutedPlainTextPart|SubstitutedParameterReferencePart|SubstitutedMacroCallPart)[],
    expandedText : string,

    expandedParts : TextRangeMap[],

    bindErrors : Diagnostic[],
}

export function expandStringContent (
    filename : string,
    macros : Macro[],
    input : string,
) {
    const fileParts = computeSubstitutionContent(
        filename,
        [] as unknown as MacroParameterList,
        {
            filename,
            type : MacroPartType.PlainText,
            start : 0,
            end : input.length,
            fileSrc : {
                start : 0,
                end : input.length,
            },
            value : input,
        }
    );
    const subtitutedParts = substitute(
        0,
        undefined,
        [],
        fileParts
    );
    return expandContent(
        0,
        filename,
        macros,
        subtitutedParts
    );
}

/**
 * Expands `unexpandedContent` recursively.
 */
export function expandContent (
    expandedSrcStartOffset : number,
    filename : string,
    macros : Macro[],
    substitutedParts : (SubstitutedPlainTextPart|SubstitutedParameterReferencePart|SubstitutedMacroCallPart)[],
) : ExpandedContent {
    let expandedText : string = "";
    const expandedParts : TextRangeMap[] = [];

    for (const part of substitutedParts) {
        if (part.type == MacroPartType.MacroCall) {
            const macro = macros.find(m => m.identifier.macroName == part.macroIdentifier.macroIdentifier.macroName);
            if (macro == undefined) {
                //error
                return {
                    originalParts : substitutedParts,
                    expandedText,
                    expandedParts,
                    bindErrors : [
                        makeDiagnosticAt(
                            part.filePart.identifier.start,
                            part.filePart.identifier.end,
                            [],
                            DiagnosticMessages.MacroNotFound,
                            part.filePart.identifier.macroName
                        ),
                    ],
                };
            }

            const args = part.argumentList.map((arg) : MacroArgument => {
                return {
                    substitutedArgument : arg,
                    value : expandContent(
                        0,
                        filename,
                        macros,
                        arg.parts
                    ),
                };
            });

            const expandedMacro = expandMacro(
                expandedSrcStartOffset,
                filename,
                macros,
                part,
                macro,
                args,
            );

            expandedParts.push({
                expandedSrc : {
                    start : expandedSrcStartOffset,
                    end : expandedSrcStartOffset + expandedMacro.expandedContent.expandedText.length,
                },
                expandedPart : {
                    type : MacroPartType.MacroCall,
                    substituted : part,
                    macroArguments : args,
                    expandedMacro,
                },
            });

            expandedSrcStartOffset += expandedMacro.expandedContent.expandedText.length;
            expandedText += expandedMacro.expandedContent.expandedText;
        } else if (part.type == MacroPartType.PlainText) {
            expandedParts.push({
                expandedSrc : {
                    start : expandedSrcStartOffset,
                    end : expandedSrcStartOffset + part.filePart.value.length,
                },
                expandedPart : part,
            });

            expandedSrcStartOffset += part.filePart.value.length;
            expandedText += part.filePart.value;
        } else {
            expandedParts.push({
                expandedSrc : {
                    start : expandedSrcStartOffset,
                    end : expandedSrcStartOffset + part.macroArgument.value.expandedText.length,
                },
                expandedPart : part,
            });

            expandedSrcStartOffset += part.macroArgument.value.expandedText.length;
            expandedText += part.macroArgument.value.expandedText;
        }
    }

    return {
        originalParts: substitutedParts,
        expandedText,
        expandedParts,
        bindErrors : [],
    };
}
