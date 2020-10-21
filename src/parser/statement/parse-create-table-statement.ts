import {DiagnosticMessages} from "../diagnostic-messages";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/create-table.html
 */
export function parseCreateTableStatement (state : ParserState, start : number) : CreateTableStatement|Statement {
    const temporary = state.scanner.current() == SyntaxKind.TEMPORARY;
    if (temporary) {
        state.scanner.next();
    }

    if (state.scanner.current() != SyntaxKind.TABLE) {
        pushSyntacticError(state, DiagnosticMessages.ExpectedSyntaxKind, ReverseSyntaxKind[SyntaxKind.TABLE]);
        return parseUnknownStatement(state, start);
    }

    const ifNotExists = tryConsumeTokens(state, SyntaxKind.IF, SyntaxKind.NOT, SyntaxKind.EXISTS);

    const tableIdentifier = parseTableIdentifier(state);
    if (tableIdentifier == undefined) {
        return parseUnknownStatement(state, start);
    }

    if (!consumeToken(state, SyntaxKind.OpenParentheses)) {
        const end = state.scanner.getIndex();
        parseUnknownStatement(state, start);
        return {
            start,
            end,
            syntaxKind : SyntaxKind.CreateTableStatement,
            temporary,
            ifNotExists,
            tableIdentifier,
            createTableDefinitions : makeNodeArray(
                SyntaxKind.CreateTableDefinitionList,
                start,
                state.scanner.getIndex()
            ),
        };
    }

    const createTableDefinitions = parseCreateTableDefinitionList(state);
    if (createTableDefinitions.length == 0) {
        pushSyntacticError(state, DiagnosticMessages.EmptyTableDefinitionList);
        consumeUntilToken(state, SyntaxKind.CloseParentheses);
    } else {
        if (!consumeToken(state, SyntaxKind.CloseParentheses)) {
            consumeUntilToken(state, SyntaxKind.CloseParentheses);
        }
    }

    /**
     * @todo Table options
     * @todo Parition options
     * @todo IGNORE|REPLACE
     * @todo AS query_expression
     * @todo LIKE old_table_name | (LIKE old_table_name)
     */
    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.CreateTableStatement,
        temporary,
        ifNotExists,
        tableIdentifier,
        createTableDefinitions,
    }
}
