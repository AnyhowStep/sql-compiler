import {IndexHintDefinition, NodeArray} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitIndexHintDefinition} from "./index-hint-definition";

export function emitIndexHintDefinitionList (arr : NodeArray<IndexHintDefinition>) {
    return new StringBuilder()
        .loop(
            arr,
            builder => builder.appendNewLine(),
            (builder, indexHintDefinition) => builder
                .appendBuilder(emitIndexHintDefinition(indexHintDefinition))
        )
}
