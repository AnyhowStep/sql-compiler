import {BooleanDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {ParserState} from "../parser-state";
import {tryConsumeTokenOneOf} from "../util";

export function tryParseBooleanDataType (state : ParserState) : BooleanDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.BOOL,
        TokenKind.BOOLEAN,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.BooleanDataType,
    };
}
