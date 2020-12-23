import {isSyntaxKind, NodeArray, Statement, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitStatement} from "./emit-statement";

export function emitStatementList (statements : NodeArray<Statement>) : StringBuilder {
    const result = new StringBuilder();

    result.loop(
        statements
            .map(statement => {
                return {
                    statement,
                    statementStr : emitStatement(statement),
                }
            })
            .filter(item => !item.statementStr.isEmpty()),
        builder => builder.appendNewLine().appendNewLine(),
        (builder, {statement, statementStr}) => builder
            .appendBuilder(statementStr)
            .append(
                isSyntaxKind(statement, SyntaxKind.DelimiterStatement) ?
                undefined :
                statement.customDelimiter
            )
    );

    return result;
}
