import {IndexHintClause, IndexHintDefinition, IndexHintType} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitKeyUsageList} from "./key-usage-list";

export function emitIndexHintDefinition (indexHintDefinition : IndexHintDefinition) {
    return new StringBuilder()
        .append(
            indexHintDefinition.indexHintType == IndexHintType.FORCE ?
            "FORCE" :
            indexHintDefinition.indexHintType == IndexHintType.IGNORE ?
            "IGNORE" :
            "USE"
        )
        .append(" INDEX")
        .append(
            indexHintDefinition.indexHintClause == IndexHintClause.JOIN ?
            " FOR JOIN" :
            indexHintDefinition.indexHintClause == IndexHintClause.ORDER_BY ?
            " FOR ORDER BY" :
            indexHintDefinition.indexHintClause == IndexHintClause.GROUP_BY ?
            " FOR GROUP BY" :
            undefined
        )
        .append(" ")
        .appendBuilder(emitKeyUsageList(indexHintDefinition.indexes))
}
