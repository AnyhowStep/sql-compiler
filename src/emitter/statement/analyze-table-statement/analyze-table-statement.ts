import {AnalyzeTableStatement} from "../../../parser-node";
import {emitTableIdentifierList2} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitAnalyzeTableStatement (statement : AnalyzeTableStatement) {
    return new StringBuilder()
        .append("ANALYZE")
        .append(
            statement.noWriteToBinLog ?
            " NO_WRITE_TO_BINLOG" :
            undefined
        )
        .append(" TABLE")
        .indent(builder => {
            builder
                .appendBuilder(emitTableIdentifierList2(statement.tableIdentifierList))
        })
}
