import {IntegerDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {ParserState} from "../parser-state";
import {tryConsumeToken, tryConsumeTokenOneOf} from "../util";
import {parseIntegerDataTypeModifier} from "./parse-integer-data-type-modifier";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html
 */
export function tryParseIntegerDataType (state : ParserState) : IntegerDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.TINYINT,
        TokenKind.SMALLINT,
        TokenKind.MEDIUMTEXT,
        TokenKind.INT,
        TokenKind.INTEGER,
        TokenKind.BIGINT,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();
    const token = state.scanner.current();
    const bytes = (
        token == TokenKind.TINYINT ?
        1 :
        token == TokenKind.SMALLINT ?
        2 :
        token == TokenKind.MEDIUMINT ?
        3 :
        token == TokenKind.INT ?
        4 :
        token == TokenKind.INTEGER ?
        4 :
        8
    );

    let displayWidth : number|undefined;
    if (tryConsumeToken(state, TokenKind.OpenParentheses, false)) {

        if (tryConsumeToken(state, TokenKind.IntegerLiteral, true)) {
            displayWidth = parseInt(state.scanner.getTokenValue(), 10);
        }

        tryConsumeToken(state, TokenKind.CloseParentheses, true)
    }

    const modifier = parseIntegerDataTypeModifier(state);

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.IntegerDataType,
        bytes,
        displayWidth,
        ...modifier,
    };
}
