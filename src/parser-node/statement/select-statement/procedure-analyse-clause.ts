import {IntegerLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11026
 *
 * It's "analy**S**e", not "analy**Z**e"
 *
 * https://dev.mysql.com/doc/refman/5.6/en/procedure-analyse.html
 */
export interface ProcedureAnalyseClause extends Node {
    syntaxKind : SyntaxKind.ProcedureAnalyseClause,

    args : (
        | undefined
        | {
            maxElements : IntegerLiteral,
            maxMemory : IntegerLiteral|undefined,
        }
    )
}
