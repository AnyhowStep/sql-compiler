import {SyntaxKind, TextDataType} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {ParserState} from "../parser-state";
import {tryConsumeTokenOneOf} from "../util";
import {parseCharacterDataTypeModifier} from "./parse-character-data-type-modifier";

export function tryParseTextDataType (state : ParserState) : TextDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.TINYTEXT,
        TokenKind.TEXT,
        TokenKind.MEDIUMTEXT,
        TokenKind.LONGTEXT,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();
    const token = state.scanner.current();
    const lengthBytes = (
        token == TokenKind.TINYTEXT ?
        8 :
        token == TokenKind.TEXT ?
        16 :
        token == TokenKind.MEDIUMTEXT ?
        24 :
        32
    );

    const modifier = parseCharacterDataTypeModifier(state);
    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.TextDataType,
        lengthBytes,
        ...modifier,
    };
}
