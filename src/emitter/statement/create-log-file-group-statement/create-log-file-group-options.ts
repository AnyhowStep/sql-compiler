import {CreateLogFileGroupOptions} from "../../../parser-node";
import {emitExpression, emitIntegerLiteral, emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitCreateLogFileGroupOptions (options : CreateLogFileGroupOptions) {
    return new StringBuilder()
        .scope(builder => {
            builder
                .append("INITIAL_SIZE = ")
                .appendBuilder(emitExpression(options.initialSize))
        })
        .scope(builder => {
            builder
                .appendNewLine()
                .append("UNDO_BUFFER_SIZE = ")
                .appendBuilder(emitExpression(options.undoBufferSize))
        })
        .scope(builder => {
            if (options.redoBufferSize == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("REDO_BUFFER_SIZE = ")
                .appendBuilder(emitExpression(options.redoBufferSize))
        })
        .scope(builder => {
            if (options.nodeGroup == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("NODEGROUP = ")
                .appendBuilder(emitIntegerLiteral(options.nodeGroup))
        })
        .scope(builder => {
            if (options.engine == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("ENGINE = ")
                .appendBuilder(emitExpression(options.engine))
        })
        .scope(builder => {
            if (options.wait == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append(
                    options.wait.value ?
                    "WAIT" :
                    "NO_WAIT"
                )
        })
        .scope(builder => {
            if (options.comment == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("COMMENT = ")
                .appendBuilder(emitStringLiteral(options.comment))
        })
}
