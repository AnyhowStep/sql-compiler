import {JsonDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {ParserState} from "../parser-state";
import {tryConsumeTokenOneOf} from "../util";

export function tryParseJsonDataType (state : ParserState) : JsonDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.JSON,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.JsonDataType,
    };
}
