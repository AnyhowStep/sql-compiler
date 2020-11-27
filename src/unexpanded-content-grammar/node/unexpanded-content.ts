import {Diagnostic} from "../../diagnostic";
import {TextRange} from "../../nearley-wrapper"
import {MacroCallNode} from "./macro-call";

export interface NonMacroCallNode extends TextRange {
    value : string;
}

export interface UnexpandedContentNode extends TextRange {
    unexpandedContent : (NonMacroCallNode|MacroCallNode)[];
    syntacticErrors? : Diagnostic[],
}
