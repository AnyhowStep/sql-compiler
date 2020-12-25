import {ElseIf, ElseIfList, IfStatement} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatementList} from "./stored-procedure-statement-list";

export function emitElseIf (elseIf : ElseIf) {
    return new StringBuilder()
        .append("ELSEIF ")
        .appendBuilder(emitExpression(elseIf.expr))
        .append(" THEN")
        .scope(builder => {
            const statements = emitStoredProcedureStatementList(elseIf.statements);
            if (statements.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder
                    .appendBuilder(statements)
            })
        })
}

export function emitElseIfList (elseIfs : ElseIfList) {
    return new StringBuilder()
        .loop(
            elseIfs,
            builder => builder.appendNewLine(),
            (builder, elseIf) => builder
                .appendBuilder(emitElseIf(elseIf))
        )
}

export function emitIfStatement (statement : IfStatement) {
    return new StringBuilder()
        .append("IF ")
        .appendBuilder(emitExpression(statement.expr))
        .append(" THEN")
        .scope(builder => {
            const statements = emitStoredProcedureStatementList(statement.statements);
            if (statements.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder
                    .appendBuilder(statements)
            })
        })
        .scope(builder => {
            if (statement.elseIfs == undefined) {
                return;
            }
            const elseIfs = emitElseIfList(statement.elseIfs)
            if (elseIfs.isEmpty()) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(elseIfs)
        })
        .scope(builder => {
            if (statement.elseBranch == undefined) {
                return;
            }
            const statements = emitStoredProcedureStatementList(statement.elseBranch.statements);
            builder
                .appendNewLine()
                .append("ELSE")

            if (statements.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder.appendBuilder(statements)
            })
        })
        .appendNewLine()
        .append("END IF")
}
