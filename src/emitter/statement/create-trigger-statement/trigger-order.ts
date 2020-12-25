import {TriggerOrder, TriggerActionOrder} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitExpression} from "../../expression";

export function emitTriggerOrder (statement : TriggerOrder) {

    return new StringBuilder()
        .append(
            statement.triggerActionOrder.value == TriggerActionOrder.FOLLOWS ?
            "FOLLOWS " :
            "PRECEDES "
        )
        .appendBuilder(emitExpression(statement.otherTriggerName));
}
