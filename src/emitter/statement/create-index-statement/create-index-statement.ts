import {IndexClass, CreateIndexStatement} from "../../../parser-node";
import {emitIdentifier, emitTableIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitIndexDefinitionOptionsMultiLine} from "../create-table-definition";
import {emitIndexParts} from "../create-table-definition";
import {emitAlterTableLockAndAlgorithmOptions} from "./alter-table-lock-and-algorithm-options";

export function emitCreateIndexStatement (statement : CreateIndexStatement) : StringBuilder {
    return new StringBuilder()
        .append("CREATE ")
        .append(
            statement.indexClass == IndexClass.INDEX ?
            "INDEX" :
            statement.indexClass == IndexClass.FULLTEXT ?
            "FULLTEXT INDEX" :
            statement.indexClass == IndexClass.SPATIAL ?
            "SPATIAL INDEX" :
            "UNIQUE KEY"
        )
        .append(" ")
        .appendBuilder(emitIdentifier(statement.indexName))
        .indent(builder => {
            builder
                .append("ON ")
                .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
                .appendNewLine()
                .appendBuilder(emitIndexParts(statement.indexParts))
                .appendBuilder(emitIndexDefinitionOptionsMultiLine(statement))
                .appendNewLine()
                .appendBuilder(emitAlterTableLockAndAlgorithmOptions(statement.alterTableLockAndAlgorithmOptions));
        })
}
