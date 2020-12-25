import {KeyUsageList, SyntaxKind} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitKeyUsageList (arr : KeyUsageList) {
    return new StringBuilder()
        .append("(")
        .loop(
            arr,
            builder => builder.append(", "),
            (builder, item) => {
                if (item.syntaxKind == SyntaxKind.Identifier) {
                    builder.appendBuilder(emitIdentifier(item))
                } else {
                    builder.append("PRIMARY")
                }
            }
        )
        .append(")")
}
