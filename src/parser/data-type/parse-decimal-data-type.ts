import {DecimalDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {ParserState} from "../parser-state";
import {pushSyntacticError, tryConsumeToken, tryConsumeTokenOneOf} from "../util";
import {parseIntegerDataTypeModifier} from "./parse-integer-data-type-modifier";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html
 */
export function tryParseDecimalDataType (state : ParserState) : DecimalDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.DECIMAL,
        TokenKind.DEC,
        TokenKind.NUMERIC,
        TokenKind.FIXED,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();

    let precision : number = 10;
    let scale : number = 0;

    if (tryConsumeToken(state, TokenKind.OpenParentheses, false)) {

        if (tryConsumeToken(state, TokenKind.IntegerLiteral, true)) {
            precision = parseInt(state.scanner.getTokenValue(), 10);
            if  (precision > 65) {
                pushSyntacticError(
                    state,
                    DiagnosticMessages.DecimalPrecisionTooHigh
                );
            }
        }

        if (
            tryConsumeToken(state, TokenKind.Comma, false) &&
            tryConsumeToken(state, TokenKind.IntegerLiteral, true)
        ) {
            scale = parseInt(state.scanner.getTokenValue(), 10);
            const maxScale = Math.min(precision, 30);
            if (scale > maxScale) {
                pushSyntacticError(
                    state,
                    DiagnosticMessages.DecimalScaleTooHigh,
                    precision,
                    maxScale
                );
            }
        }

        tryConsumeToken(state, TokenKind.CloseParentheses, true)
    }

    const modifier = parseIntegerDataTypeModifier(state);

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.DecimalDataType,
        precision,
        scale,
        ...modifier,
    };
}
