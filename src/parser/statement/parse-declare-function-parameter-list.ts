import {DeclareFunctionParameter, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {parseDeclareFunctionParameter} from "./parse-declare-function-parameter";
import {parseSeparatedList} from "../parse-list";
import {ParserState} from "../parser-state";

export function parseDeclareFunctionParameterList (state : ParserState) {
    return parseSeparatedList<DeclareFunctionParameter>(
        state,
        SyntaxKind.DeclareFunctionParameterList,
        TokenKind.Comma,
        (_, peekedToken) => peekedToken == TokenKind.CloseParentheses,
        () => undefined,
        () => {
            const result = parseDeclareFunctionParameter(state);
            return result;
        },
    );
}
