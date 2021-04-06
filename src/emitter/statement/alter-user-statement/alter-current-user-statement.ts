import {AlterCurrentUserStatement} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitAlterCurrentUserStatement (statement : AlterCurrentUserStatement) {
    return new StringBuilder()
        .append("ALTER USER")
        .append(
            statement.ifExists ?
            " IF EXISTS" :
            undefined
        )
        .indent(builder => {
            builder
                .append("USER()")
                .indent(builder => {
                    builder
                        .append("IDENTIFIED BY ")
                        .appendBuilder(emitStringLiteral(statement.identifiedBy))
                })
        })
}
