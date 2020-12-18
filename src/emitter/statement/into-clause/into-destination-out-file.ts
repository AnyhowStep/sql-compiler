import {IntoDestinationOutFile, SyntaxKind} from "../../../parser-node";
import {emitExpression, emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";
import {emitFieldTerminatorOptions} from "./field-terminator-options";
import {emitLineTerminatorOptions} from "./line-terminator-options";

export function emitIntoDestinationOutFile (destination : IntoDestinationOutFile) {
    return new StringBuilder()
        .append("INTO OUTFILE ")
        .appendBuilder(emitStringLiteral(destination.path))
        .scope(builder => {
            if (destination.characterSet == undefined) {
                return;
            }

            const characterSet = destination.characterSet;

            builder.indent(builder => {
                builder
                    .append("CHARACTER SET ")

                if (characterSet.syntaxKind == SyntaxKind.Value) {
                    builder.append("DEFAULT")
                } else {
                    builder.appendBuilder(emitExpression(characterSet))
                }
            })
        })
        .scope(builder => {
            if (destination.fieldTerminatorOptions == undefined) {
                return;
            }

            const fieldTerminatorOptions = destination.fieldTerminatorOptions;

            builder.indent(builder => {
                builder
                    .appendBuilder(emitFieldTerminatorOptions(fieldTerminatorOptions))
            })
        })
        .scope(builder => {
            if (destination.lineTerminatorOptions == undefined) {
                return;
            }

            const lineTerminatorOptions = destination.lineTerminatorOptions;

            builder.indent(builder => {
                builder
                    .appendBuilder(emitLineTerminatorOptions(lineTerminatorOptions))
            })
        })
}
