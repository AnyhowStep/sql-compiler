import {CreateTriggerStatement, TriggerActionTime, TriggerEvent} from "../../../parser-node";
import {emitAccountIdentifierOrCurrentUser, emitTableIdentifier, emitTriggerIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitStoredProcedureStatement} from "../../stored-procedure-statement";
import {emitTriggerOrder} from "./trigger-order";

function emitCreateTriggerStatementStart (statement : CreateTriggerStatement) : StringBuilder {
    const startA = new StringBuilder()
        .append("CREATE")
        .scope(builder => {
            builder
                .append(" DEFINER = ")
                .appendBuilder(emitAccountIdentifierOrCurrentUser(statement.definer))
        })
        .append(" TRIGGER ")
        .appendBuilder(emitTriggerIdentifier(statement.triggerIdentifier))

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
                .append("TRIGGER ")
                .appendBuilder(emitTriggerIdentifier(statement.triggerIdentifier))
        })
}

export function emitCreateTriggerStatement (statement : CreateTriggerStatement) {
    let start = emitCreateTriggerStatementStart(statement);

    return start
        .indent(builder => {
            builder
                .append(
                    statement.triggerActionTime.value == TriggerActionTime.BEFORE ?
                    "BEFORE " :
                    "AFTER "
                )
                .append(
                    statement.triggerEvent.value == TriggerEvent.INSERT ?
                    "INSERT" :
                    statement.triggerEvent.value == TriggerEvent.UPDATE ?
                    "UPDATE" :
                    "DELETE"
                )
        })
        .indent(builder => {
            builder
                .append("ON ")
                .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
                .append(" FOR EACH ROW")
        })
        .scope(builder => {
            if (statement.triggerOrder == undefined) {
                return;
            }
            const triggerOrder = emitTriggerOrder(statement.triggerOrder);
            builder.indent(builder => {
                builder.appendBuilder(triggerOrder)
            })
        })
        .indent(builder => {
            builder
                .appendBuilder(emitStoredProcedureStatement(statement.statement))
        })
}
