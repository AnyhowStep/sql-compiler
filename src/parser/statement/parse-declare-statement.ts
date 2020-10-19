import {DiagnosticMessages} from "../diagnostic-messages";
import {ParserState} from "../parser-state";
import {parseUnknownStatement, pushSyntacticError, tryConsumeToken} from "../util";
import {TokenKind} from "../../scanner";
import {parseDeclareFunctionStatement} from "./parse-declare-function-statement";

export function parseDeclareStatement (state : ParserState) {
    tryConsumeToken(state, TokenKind.DECLARE, true);
    const start = state.scanner.getTokenIndex();

    const token = state.scanner.clone().next();
    switch (token) {
        case TokenKind.FUNCTION:
            return parseDeclareFunctionStatement(state, start);
        default:
            pushSyntacticError(state, DiagnosticMessages.InvalidDeclareStatementType);
            return parseUnknownStatement(state, start);
    }
}
