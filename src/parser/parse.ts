import {SourceFile} from "../parser-node";
import {Scanner} from "../scanner";
import {parseSourceElementList} from "./statement";
import {ParserSettings} from "./parser-settings";
import {makeParserState} from "./parser-state";

export function parse (
    filename : string,
    scanner : Scanner,
    settings : ParserSettings
) : SourceFile {
    const state = makeParserState(filename, scanner, settings)

    state.file.statements = parseSourceElementList(state);

    return state.file;
}
