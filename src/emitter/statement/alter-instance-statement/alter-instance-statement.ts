import {AlterInstanceRotateMasterKey} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitAlterInstanceRotateMasterKey (action : AlterInstanceRotateMasterKey) {
    return new StringBuilder()
        .append("ROTATE ")
        .appendBuilder(emitExpression(action.engine))
        .append(" MASTER KEY")
}
