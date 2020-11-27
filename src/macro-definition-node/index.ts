import type {TextRange} from "../nearley-wrapper";
import type {SyntacticErrorContainer} from "../parse-util";

export interface MacroIdentifier extends TextRange {
    fileSrc : TextRange,
    macroName : string
}
export interface MacroParameter extends TextRange {
    parameterName : string,
    /**
     * `TextRange` is within `content.value`
     */
    references : (
        & TextRange
        & { fileSrc : TextRange }
    )[],
}

export enum MacroPartType {
    ParameterReference = "ParameterReference",
    PlainText = "PlainText",
    MacroCall = "MacroCall",
}

/**
 * `TextRange` is within `content.value`
 */
export interface ParameterReferencePart extends TextRange {
    filename : string,
    type : MacroPartType.ParameterReference,
    fileSrc : TextRange,
    parameterName : string,
    value : string
}
export interface MacroParameterList extends TextRange, Array<MacroParameter>, SyntacticErrorContainer {

}
export interface PlainTextPart extends TextRange {
    filename : string,
    type : MacroPartType.PlainText,
    fileSrc : TextRange,
    value : string
}

export interface Argument extends TextRange {
    filename : string,
    fileSrc : TextRange,
    parts : (PlainTextPart|ParameterReferencePart|MacroCallPart)[]
}

export interface ArgumentList extends TextRange, Array<Argument> {

}
export interface MacroCallPart extends TextRange {
    filename : string,
    type : MacroPartType.MacroCall,
    fileSrc : TextRange,
    identifier : MacroIdentifier;
    argumentList : ArgumentList;
    value : string,
}

export interface Macro extends TextRange {
    filename : string,
    identifier : MacroIdentifier,
    parameterList : MacroParameterList,
    /**
     * May contain references to other macros
     */
    content : PlainTextPart,

    parts : (PlainTextPart|ParameterReferencePart|MacroCallPart)[],
}
