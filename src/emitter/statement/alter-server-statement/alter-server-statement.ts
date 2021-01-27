import {AlterServerStatement} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";
import {emitCreateServerOptions} from "../create-server-statement";

export function emitAlterServerStatement (statement : AlterServerStatement) {
    return new StringBuilder()
        .append("ALTER SERVER ")
        .appendBuilder(emitExpression(statement.serverName))
        .indent(builder => {
            builder
                .append("OPTIONS (")
                .indent(builder => {
                    builder
                        .appendBuilder(emitCreateServerOptions(statement.createServerOptions))
                })
                .appendNewLine()
                .append(")");
        })
}
