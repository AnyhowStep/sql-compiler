import {DateTimeDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {ParserState} from "../parser-state";
import {pushSyntacticError, tryConsumeToken, tryConsumeTokenOneOf} from "../util";

export function tryParseDateTimeDataType (state : ParserState) : DateTimeDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.DATETIME,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();

    let fractionalSecondPrecision : number = 0;
    if (tryConsumeToken(state, TokenKind.OpenParentheses, false)) {
        if (tryConsumeToken(state, TokenKind.IntegerLiteral, true)) {
            fractionalSecondPrecision = parseInt(state.scanner.getTokenValue(), 10);

            if (![0, 1, 2, 3, 4, 5, 6].includes(fractionalSecondPrecision)) {
                pushSyntacticError(
                    state,
                    DiagnosticMessages.InvalidDataTypeFractionalSecondPrecision,
                    "DATETIME"
                );
            }
        }

        tryConsumeToken(state, TokenKind.CloseParentheses, true);
    }

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.DateTimeDataType,
        fractionalSecondPrecision,
    };
}
