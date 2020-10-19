import {DeclareFunctionStatement, UnknownStatement} from "../../parser-node";
import {SyntaxKind} from "../../parser-node";
import {tryParseIdentifier} from "../parse-identifier";
import {ParserState} from "../parser-state";
import {makeUnknownDataType, parseUnknownStatement, tryConsumeToken} from "../util";
import {TokenKind} from "../../scanner";
import {parseDeclareFunctionParameterList} from "./parse-declare-function-parameter-list";
import {tryParseDataType} from "../data-type";
import {parseDeclareFunctionStatementModifier} from "./parse-declare-function-statement-modifier";

/**
 * Custom syntax:
 * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type;`
 * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type AGGREGATE;`
 * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type WINDOW;`
 * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type AGGREGATE WINDOW;`
 * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type WINDOW FROM_FIRST_LAST;`
 * + `DECLARE FUNCTION foo (arg0 type, arg1 type) RETURNS type WINDOW NULL_TREATMENT;`
 */
export function parseDeclareFunctionStatement (state : ParserState, start : number) : DeclareFunctionStatement|UnknownStatement {
    tryConsumeToken(state, TokenKind.FUNCTION, true);

    const functionName = tryParseIdentifier(state, false, true);
    if (functionName == undefined) {
        return parseUnknownStatement(state, start);
    }

    tryConsumeToken(state, TokenKind.OpenParentheses, true);
    const parameters = parseDeclareFunctionParameterList(state);
    tryConsumeToken(state, TokenKind.CloseParentheses, true);

    tryConsumeToken(state, TokenKind.RETURNS, true);
    let returns = tryParseDataType(state, true);
    if (returns == undefined) {
        returns = makeUnknownDataType(state.scanner.getIndex());
    }


    const modifier = parseDeclareFunctionStatementModifier(state);

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.DeclareFunctionStatement,
        functionName,
        parameters,
        returns,
        ...modifier,
    };
}
