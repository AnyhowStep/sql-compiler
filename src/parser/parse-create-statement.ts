import {DiagnosticMessages} from "./diagnostic-messages";
//import {parseCreateMacroStatement} from "./parse-create-macro-statement";
import {parseCreateSchemaStatement} from "./parse-create-schema-statement";
//import {parseCreateTableStatement} from "./parse-create-table-statement";
import {ParserState} from "./parser-state";
import {parseUnknownStatement, pushSyntacticError, tryConsumeToken} from "./util";
import {TokenKind} from "../scanner";

export function parseCreateStatement (state : ParserState) {
    tryConsumeToken(state, TokenKind.CREATE, true);
    const start = state.scanner.getTokenIndex();

    const token = state.scanner.next();

    switch (token) {
        case TokenKind.DATABASE:
        case TokenKind.SCHEMA:
            return parseCreateSchemaStatement(state, start);
        //CREATE TEMPORARY TABLE
        case TokenKind.TEMPORARY:
        //CREATE TABLE
        case TokenKind.TABLE:
            //return parseCreateTableStatement(state, start);
            return parseUnknownStatement(state, start);
        case TokenKind.Identifier: {
            /**
             * This is our custom `CREATE MACRO` syntax.
             *
             * + `CREATE MACRO schema.table.@foo (arg0, arg1) RETURN expr`
             * + `CREATE MACRO table.@foo (arg0, arg1) RETURN expr`
             */
            if (state.scanner.getTokenSourceText().toUpperCase() == "MACRO") {
                //return parseCreateMacroStatement(state, start);
                return parseUnknownStatement(state, start);
            } else {
                pushSyntacticError(state, DiagnosticMessages.InvalidCreateStatementType);
                return parseUnknownStatement(state, start);
            }
        }
        default:
            pushSyntacticError(state, DiagnosticMessages.InvalidCreateStatementType);
            return parseUnknownStatement(state, start);
    }
}
