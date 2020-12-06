import {SubPartitionDefinition} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";
import {emitPartitionDefinitionOptions} from "./partition-definition-options";

export function emitSubPartitionDefinition (def : SubPartitionDefinition) {
    return new StringBuilder()
        .append("SUBPARTITION ")
        .appendBuilder(emitExpression(def.subPartitionName))
        .appendBuilder(emitPartitionDefinitionOptions(def.partitionDefinitionOptions))
}
