import {IndexPartList, SortDirection} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitIndexParts (indexParts : IndexPartList) : StringBuilder {
    return new StringBuilder()
        .append("(")
        .loop(
            indexParts,
            builder => builder.append(", "),
            (builder, indexPart) => {
                builder
                    .appendBuilder(emitIdentifier(indexPart.columnName))
                    .scope(builder => {
                        if (indexPart.indexLength == undefined) {
                            return;
                        }
                        builder
                            .append("(")
                            .append(indexPart.indexLength.value.toString())
                            .append(")")
                    })
                    .append(
                        indexPart.sortDirection.value == SortDirection.ASC ?
                        " ASC" :
                        " DESC"
                    )
            }
        )
        .append(")");
}
