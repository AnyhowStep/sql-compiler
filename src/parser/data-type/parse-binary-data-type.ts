import {BinaryDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {ParserState} from "../parser-state";
import {pushSyntacticError, tryConsumeToken, tryConsumeTokenOneOf} from "../util";

export function tryParseBinaryDataType (state : ParserState) : BinaryDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.BINARY,
        TokenKind.VARBINARY
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();
    const variableLength = (state.scanner.current() == TokenKind.VARBINARY);

    let maxLength : number = 1;
    if (tryConsumeToken(state, TokenKind.OpenParentheses, /*reportError*/variableLength)) {

        if (tryConsumeToken(state, TokenKind.IntegerLiteral, true)) {
            maxLength = parseInt(state.scanner.getTokenValue(), 10);

            const maxMaxLength = variableLength ? 65535 : 255;
            if (maxLength > maxMaxLength) {
                pushSyntacticError(
                    state,
                    DiagnosticMessages.DataTypeMaxLengthTooHigh,
                    (
                        variableLength ?
                        "VARBINARY" :
                        "BINARY"
                    ),
                    maxMaxLength
                );
            }
        }

        tryConsumeToken(state, TokenKind.CloseParentheses, true);
    }

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.BinaryDataType,
        variableLength,
        maxLength,
    };
}
