import {ProcedureAnalyseClause} from "../../../parser-node";
import {emitIntegerLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitProcedureAnalyseClause (clause : ProcedureAnalyseClause) {
    if (clause.args == undefined) {
        return new StringBuilder()
            .append("PROCEDURE ANALYSE()")
    } else if (clause.args.maxMemory == undefined) {
        return new StringBuilder()
            .append("PROCEDURE ANALYSE(")
            .appendBuilder(emitIntegerLiteral(clause.args.maxElements))
            .append(")")
    } else {
        return new StringBuilder()
            .append("PROCEDURE ANALYSE(")
            .appendBuilder(emitIntegerLiteral(clause.args.maxElements))
            .append(", ")
            .appendBuilder(emitIntegerLiteral(clause.args.maxMemory))
            .append(")")
    }
}
