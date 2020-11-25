import {TextRange} from "../../parser-node";
import {MacroArgument} from "./expand-macro";
import {Argument, Macro, MacroCallPart, ParameterReferencePart, PlainTextPart, MacroIdentifier, MacroPartType} from "./find-all-macros";

export interface SubstitutedPlainTextPart {
    type : MacroPartType.PlainText,
    substitutedSrc : TextRange,
    filePart : PlainTextPart,
}

export interface SubstitutedParameterReferencePart {
    type : MacroPartType.ParameterReference,
    substitutedSrc : TextRange,
    filePart : ParameterReferencePart,
    macroArgument : MacroArgument,
}

export interface SubstitutedMacroIdentifier {
    substitutedSrc : TextRange,
    macroIdentifier : MacroIdentifier
}

export interface SubstitutedArgument {
    substitutedSrc : TextRange,
    argument : Argument,
    parts : (SubstitutedPlainTextPart|SubstitutedParameterReferencePart|SubstitutedMacroCallPart)[]
}

export interface SubstitutedArgumentList extends Array<SubstitutedArgument> {
    substitutedSrc : TextRange,
}

export interface SubstitutedMacroCallPart {
    type : MacroPartType.MacroCall,
    substitutedSrc : TextRange,
    filePart : MacroCallPart,
    macroIdentifier : SubstitutedMacroIdentifier;
    argumentList : SubstitutedArgumentList;
}

export interface SubstitutedMacro {
    macro : Macro,

    parts : (SubstitutedPlainTextPart|SubstitutedParameterReferencePart|SubstitutedMacroCallPart)[],
}

export function getSubstitutedMacro (
    macro : Macro,
    args : MacroArgument[],
) {
    const parts = substitute(
        0,
        macro,
        args,
        macro.parts
    );
    return {
        macro,
        parts,
    };
}

export function substitute (
    substitutedSrcStartoffset : number,
    macro : Macro|undefined,
    args : MacroArgument[],
    parts : (PlainTextPart|ParameterReferencePart|MacroCallPart)[],
) : (SubstitutedPlainTextPart|SubstitutedParameterReferencePart|SubstitutedMacroCallPart)[] {
    if (macro != undefined && args.length != macro.parameterList.length) {
        return [];
    }

    const resultParts : (SubstitutedPlainTextPart|SubstitutedParameterReferencePart|SubstitutedMacroCallPart)[] = [];

    let curSubstitutedSrcStartOffset = substitutedSrcStartoffset;

    for (const part of parts) {
        if ("parameterName" in part) {
            if (macro == undefined) {
                throw new Error(`Unexpected parameter reference`);
            }
            const argumentIndex = macro.parameterList.findIndex(x => x.parameterName == part.parameterName);
            const macroArgument = args[argumentIndex];

            resultParts.push({
                type : MacroPartType.ParameterReference,
                substitutedSrc : {
                    start : curSubstitutedSrcStartOffset,
                    end : curSubstitutedSrcStartOffset + macroArgument.value.expandedText.length,
                },
                filePart : part,
                macroArgument,
            });

            curSubstitutedSrcStartOffset += macroArgument.value.expandedText.length;
        } else if ("value" in part) {
            resultParts.push({
                type : MacroPartType.PlainText,
                substitutedSrc : {
                    start : curSubstitutedSrcStartOffset,
                    end : curSubstitutedSrcStartOffset + part.value.length,
                },
                filePart : part,
            });

            curSubstitutedSrcStartOffset += part.value.length;
        } else {
            const macroCallSubstitutedSrcStart = curSubstitutedSrcStartOffset;

            const macroIdentifier : SubstitutedMacroIdentifier = {
                substitutedSrc : {
                    start : curSubstitutedSrcStartOffset + (part.identifier.start - part.start),
                    end : curSubstitutedSrcStartOffset + (part.identifier.end - part.start),
                },
                macroIdentifier : part.identifier,
            }
            const argumentList : SubstitutedArgumentList = [] as unknown as SubstitutedArgumentList;

            curSubstitutedSrcStartOffset += (part.identifier.end - part.start);

            const argumentListSubstitutedSrcStart = curSubstitutedSrcStartOffset + (part.argumentList.start - part.identifier.end);
            curSubstitutedSrcStartOffset = argumentListSubstitutedSrcStart;
            let prvArgEnd = part.argumentList.start;

            for (const arg of part.argumentList) {
                const gap = arg.start - prvArgEnd;
                const argParts = substitute(
                    curSubstitutedSrcStartOffset + gap,
                    macro,
                    args,
                    arg.parts
                );

                const end = (
                    argParts.length == 0 ?
                    curSubstitutedSrcStartOffset + gap :
                    argParts[argParts.length-1].substitutedSrc.end
                );
                argumentList.push({
                    substitutedSrc : {
                        start : curSubstitutedSrcStartOffset + gap,
                        end,
                    },
                    argument : arg,
                    parts : argParts,
                });

                curSubstitutedSrcStartOffset = end;
                prvArgEnd = arg.end;
            }

            const argumentListSubstitutedSrcEnd = curSubstitutedSrcStartOffset + (part.end - prvArgEnd);
            curSubstitutedSrcStartOffset = argumentListSubstitutedSrcEnd;

            argumentList.substitutedSrc = {
                start : argumentListSubstitutedSrcStart,
                end : argumentListSubstitutedSrcEnd,
            };

            resultParts.push({
                type : MacroPartType.MacroCall,
                substitutedSrc : {
                    start : macroCallSubstitutedSrcStart,
                    end : argumentListSubstitutedSrcEnd,
                },
                filePart : part,
                macroIdentifier,
                argumentList,
            });
        }
    }

    return resultParts;
}
