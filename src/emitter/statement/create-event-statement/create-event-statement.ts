import {CreateEventStatement, EventStatus, SyntaxKind} from "../../../parser-node";
import {emitAccountIdentifierOrCurrentUser, emitEventIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitStoredProcedureStatement} from "../../stored-procedure-statement";
import {emitStringLiteral} from "../../expression";
import {emitExecuteAtSchedule} from "./execute-at-schedule";
import {emitIntervalSchedule} from "./interval-schedule";

function emitCreateEventStatementStart (statement : CreateEventStatement) : StringBuilder {
    const startA = new StringBuilder()
        .append("CREATE")
        .scope(builder => {
            builder
                .append(" DEFINER = ")
                .appendBuilder(emitAccountIdentifierOrCurrentUser(statement.definer))
        })
        .append(" EVENT ")
        .append(
            statement.ifNotExists ?
            "IF NOT EXISTS " :
            undefined
        )
        .appendBuilder(emitEventIdentifier(statement.eventIdentifier))

    if (!startA.shouldMultiLine()) {
        return startA;
    }
    return new StringBuilder()
        .append("CREATE")
        .scope(builder => {
            builder
                .append(" DEFINER = ")
                .appendBuilder(emitAccountIdentifierOrCurrentUser(statement.definer))
        })
        .indent(builder => {
            builder
                .append("EVENT ")
                .append(
                    statement.ifNotExists ?
                    "IF NOT EXISTS " :
                    undefined
                )
                .appendBuilder(emitEventIdentifier(statement.eventIdentifier))
        })
}

export function emitCreateEventStatement (statement : CreateEventStatement) {
    let start = emitCreateEventStatementStart(statement);

    return start
        .indent(builder => {
            builder
                .append("ON SCHEDULE ")
                .appendBuilder(
                    statement.schedule.syntaxKind == SyntaxKind.ExecuteAtSchedule ?
                    emitExecuteAtSchedule(statement.schedule) :
                    emitIntervalSchedule(statement.schedule)
                )
        })
        .indent(builder => {
            builder
                .append(
                    statement.onCompletionPreserve ?
                    "ON COMPLETION PRESERVE" :
                    "ON COMPLETION NOT PRESERVE"
                )
        })
        .indent(builder => {
            builder
                .append(
                    statement.eventStatus == EventStatus.ENABLE ?
                    "ENABLE" :
                    statement.eventStatus == EventStatus.DISABLE ?
                    "DISABLE" :
                    "DISABLE ON SLAVE"
                )
        })
        .scope(builder => {
            if (statement.comment == undefined) {
                return;
            }
            const comment = emitStringLiteral(statement.comment);
            builder.indent(builder => {
                builder
                    .append("COMMENT ")
                    .appendBuilder(comment)
            })
        })
        .indent(builder => {
            builder
                .append("DO")
                .indent(builder => {
                    builder
                        .appendBuilder(emitStoredProcedureStatement(statement.statement))
                })
        })
}
