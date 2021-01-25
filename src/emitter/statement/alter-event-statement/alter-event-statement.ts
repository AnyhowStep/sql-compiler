import {AlterEventStatement, EventStatus, SyntaxKind} from "../../../parser-node";
import {emitAccountIdentifierOrCurrentUser, emitEventIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitStoredProcedureStatement} from "../../stored-procedure-statement";
import {emitStringLiteral} from "../../expression";
import {emitExecuteAtSchedule, emitIntervalSchedule} from "../create-event-statement";

function emitAlterEventStatementStart (statement : AlterEventStatement) : StringBuilder {
    const definer = statement.definer;

    const startA = new StringBuilder()
        .append("ALTER")
        .scope(builder => {
            builder
                .append(" DEFINER = ")
                .appendBuilder(emitAccountIdentifierOrCurrentUser(definer))
        })
        .append(" EVENT ")
        .appendBuilder(emitEventIdentifier(statement.eventIdentifier))

    if (!startA.shouldMultiLine()) {
        return startA;
    }
    return new StringBuilder()
        .append("ALTER")
        .scope(builder => {
            builder
                .append(" DEFINER = ")
                .appendBuilder(emitAccountIdentifierOrCurrentUser(definer))
        })
        .indent(builder => {
            builder
                .append("EVENT ")
                .appendBuilder(emitEventIdentifier(statement.eventIdentifier))
        })
}

export function emitAlterEventStatement (statement : AlterEventStatement) {
    let start = emitAlterEventStatementStart(statement);

    return start
        .scope(builder => {
            if (statement.schedule == undefined) {
                return;
            }
            const schedule = statement.schedule;
            builder.indent(builder => {
                builder
                    .append("ON SCHEDULE ")
                    .appendBuilder(
                        schedule.syntaxKind == SyntaxKind.ExecuteAtSchedule ?
                        emitExecuteAtSchedule(schedule) :
                        emitIntervalSchedule(schedule)
                    )
            })
        })
        .scope(builder => {
            if (statement.onCompletionPreserve == undefined) {
                return;
            }
            const onCompletionPreserve = statement.onCompletionPreserve;
            builder.indent(builder => {
                builder
                    .append(
                        onCompletionPreserve ?
                        "ON COMPLETION PRESERVE" :
                        "ON COMPLETION NOT PRESERVE"
                    )
            })
        })
        .scope(builder => {
            if (statement.newEventIdentifier == undefined) {
                return;
            }
            const newEventIdentifier = statement.newEventIdentifier;
            builder.indent(builder => {
                builder
                    .append("RENAME TO ")
                    .appendBuilder(emitEventIdentifier(newEventIdentifier))
            })
        })
        .scope(builder => {
            if (statement.eventStatus == undefined) {
                return;
            }
            const eventStatus = statement.eventStatus;
            builder.indent(builder => {
                builder
                    .append(
                        eventStatus == EventStatus.ENABLE ?
                        "ENABLE" :
                        eventStatus == EventStatus.DISABLE ?
                        "DISABLE" :
                        "DISABLE ON SLAVE"
                    )
            })
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
        .scope(builder => {
            if (statement.statement == undefined) {
                return;
            }
            const stmt = emitStoredProcedureStatement(statement.statement)
            builder.indent(builder => {
                builder
                    .append("DO")
                    .indent(builder => {
                        builder
                            .appendBuilder(stmt)
                    })
            })
        })
}
