import {DelimiterStatement} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitDelimiterStatement (statement : DelimiterStatement) : StringBuilder {
    if (statement.customDelimiter == "") {
        return new StringBuilder().append("DELIMITER");
    }
    return new StringBuilder().append("DELIMITER ").append(statement.customDelimiter);
}
