import {TextRange} from "../../nearley-wrapper";

export interface MacroArgumentNode extends TextRange {
    value : string,
}

export interface MacroArgumentListNode extends TextRange {
    args : MacroArgumentNode[];
}

export interface MacroIdentifierNode extends TextRange {
    macroName : string;
}

export interface MacroCallNode extends TextRange {
    identifier : MacroIdentifierNode;
    argumentList : MacroArgumentListNode;
}
