import {CreateLogFileGroupStatement} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitCreateLogFileGroupAddFile} from "./create-log-file-group-add-file";
import {emitCreateLogFileGroupOptions} from "./create-log-file-group-options";

export function emitCreateLogFileGroupStatement (statement : CreateLogFileGroupStatement) {
    return new StringBuilder()
        .append("CREATE LOGFILE GROUP ")
        .appendBuilder(emitIdentifier(statement.identifier))
        .indent(builder => {
            builder
                .appendBuilder(emitCreateLogFileGroupAddFile(statement.addFile))
                .appendNewLine()
                .appendBuilder(emitCreateLogFileGroupOptions(statement.createLogFileGroupOptions))
        })
}
