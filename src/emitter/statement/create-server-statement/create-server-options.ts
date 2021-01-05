import {CreateServerOptions} from "../../../parser-node";
import {emitIntegerLiteral, emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitCreateServerOptions (options : CreateServerOptions) {
    return new StringBuilder()
        .append("HOST ")
        .appendBuilder(emitStringLiteral(options.host))
        .append(",")
        .appendNewLine()
        .append("DATABASE ")
        .appendBuilder(emitStringLiteral(options.database))
        .append(",")
        .appendNewLine()
        .append("USER ")
        .appendBuilder(emitStringLiteral(options.user))
        .append(",")
        .appendNewLine()
        .append("PASSWORD ")
        .appendBuilder(emitStringLiteral(options.password))
        .append(",")
        .appendNewLine()
        .append("SOCKET ")
        .appendBuilder(emitStringLiteral(options.socket))
        .append(",")
        .appendNewLine()
        .append("OWNER ")
        .appendBuilder(emitStringLiteral(options.owner))
        .append(",")
        .appendNewLine()
        .append("PORT ")
        .appendBuilder(emitIntegerLiteral(options.port))
}
