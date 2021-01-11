import {CreateTableSelect, CreateTableSelectOnDuplicate} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitSelectStatement} from "../select-statement";

export function emitCreateTableSelect (createTableSelect : CreateTableSelect) : StringBuilder {
    return new StringBuilder()
        .scope(builder => {
            if (createTableSelect.onDuplicate == undefined) {
                return;
            }
            builder
                .append(
                    createTableSelect.onDuplicate == CreateTableSelectOnDuplicate.IGNORE ?
                    "IGNORE" :
                    "REPLACE"
                )
                .appendNewLine()
        })
        .append("AS")
        .appendNewLine()
        .appendBuilder(emitSelectStatement(createTableSelect.select))
}
