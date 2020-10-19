import {RealDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {ParserState} from "../parser-state";
import {tryConsumeToken, tryConsumeTokenOneOf} from "../util";
import {parseIntegerDataTypeModifier} from "./parse-integer-data-type-modifier";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html
 */
export function tryParseRealDataType (state : ParserState) : RealDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.FLOAT,
        TokenKind.DOUBLE,
        TokenKind.REAL,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();
    const token = state.scanner.current();

    if (token == TokenKind.DOUBLE) {
        tryConsumeToken(state, TokenKind.PRECISION, false);
    }

    const bytes = (
        token == TokenKind.FLOAT ?
        4 :
        8
    );

    const modifier = parseIntegerDataTypeModifier(state);

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.RealDataType,
        bytes,
        ...modifier,
    };
}
