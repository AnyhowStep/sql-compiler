import {SimpleWhen, SimpleWhenList, SimpleCaseStatement} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatementList} from "./stored-procedure-statement-list";

export function emitSimpleWhen (simpleWhen : SimpleWhen) {
    return new StringBuilder()
        .append("WHEN ")
        .appendBuilder(emitExpression(simpleWhen.expr))
        .append(" THEN")
        .scope(builder => {
            const statements = emitStoredProcedureStatementList(simpleWhen.statements);
            if (statements.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder
                    .appendBuilder(statements)
            })
        })
}

export function emitSimpleWhenList (simpleWhens : SimpleWhenList) {
    return new StringBuilder()
        .loop(
            simpleWhens,
            builder => builder.appendNewLine(),
            (builder, elseIf) => builder
                .appendBuilder(emitSimpleWhen(elseIf))
        )
}

export function emitSimpleCaseStatement (statement : SimpleCaseStatement) {
    return new StringBuilder()
        .append("CASE ")
        .appendBuilder(emitExpression(statement.expr))
        .scope(builder => {
            if (statement.simpleWhens == undefined) {
                return;
            }
            const simpleWhens = emitSimpleWhenList(statement.simpleWhens)
            if (simpleWhens.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder.appendBuilder(simpleWhens)
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
