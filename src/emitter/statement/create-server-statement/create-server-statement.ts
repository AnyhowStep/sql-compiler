import {CreateServerStatement} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";
import {emitCreateServerOptions} from "./create-server-options";

export function emitCreateServerStatement (statement : CreateServerStatement) {
    return new StringBuilder()
        .append("CREATE SERVER ")
        .appendBuilder(emitExpression(statement.serverName))
        .indent(builder => {
            builder
                .append("FOREIGN DATA WRAPPER ")
                .appendBuilder(emitExpression(statement.foreignDataWrapper))
                .appendNewLine()
                .append("OPTIONS (")
                .indent(builder => {
                    builder
                        .appendBuilder(emitCreateServerOptions(statement.createServerOptions))
                })
                .appendNewLine()
                .append(")");
        })
}
