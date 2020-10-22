import {Diagnostic} from "../diagnostic";
import {ParserSettings} from "./parser-settings";

export interface ParserState {
    settings : ParserSettings,
    syntacticErrors : Diagnostic[],
}
