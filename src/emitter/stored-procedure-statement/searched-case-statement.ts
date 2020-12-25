import {SearchedWhen, SearchedWhenList, SearchedCaseStatement} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatementList} from "./stored-procedure-statement-list";

export function emitSearchedWhen (searchedWhen : SearchedWhen) {
    return new StringBuilder()
        .append("WHEN ")
        .appendBuilder(emitExpression(searchedWhen.expr))
        .append(" THEN")
        .scope(builder => {
            const statements = emitStoredProcedureStatementList(searchedWhen.statements);
            if (statements.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder
                    .appendBuilder(statements)
            })
        })
}

export function emitSearchedWhenList (searchedWhens : SearchedWhenList) {
    return new StringBuilder()
        .loop(
            searchedWhens,
            builder => builder.appendNewLine(),
            (builder, elseIf) => builder
                .appendBuilder(emitSearchedWhen(elseIf))
        )
}

export function emitSearchedCaseStatement (statement : SearchedCaseStatement) {
    return new StringBuilder()
        .append("CASE")
        .scope(builder => {
            if (statement.searchedWhens == undefined) {
                return;
            }
            const searchedWhens = emitSearchedWhenList(statement.searchedWhens)
            if (searchedWhens.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder.appendBuilder(searchedWhens)
            })
        })
        .scope(builder => {
            if (statement.elseBranch == undefined) {
                return;
            }
            const statements = emitStoredProcedureStatementList(statement.elseBranch.statements);
            builder.indent(builder => {
                builder
                    .append("ELSE")

                if (statements.isEmpty()) {
                    return;
                }
                builder.indent(builder => {
                    builder.appendBuilder(statements)
                })
            })
        })
        .appendNewLine()
        .append("END CASE")
}
