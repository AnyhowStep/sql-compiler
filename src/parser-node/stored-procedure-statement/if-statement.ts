import {Expression} from "../expression";
import {Node} from "../node";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";
import {StoredProcedureStatementList} from "./stored-procedure-statement-list";

export interface ElseIf extends Node {
    syntaxKind : SyntaxKind.ElseIf,

    expr : Expression,
    /**
     * Must have at least one statement.
     */
    statements : StoredProcedureStatementList,
}

export interface ElseIfList extends NodeArray2<SyntaxKind.ElseIfList, ElseIf> {

}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L3687
 */
export interface IfStatement extends Node {
    syntaxKind : SyntaxKind.IfStatement,

    expr : Expression,
    /**
     * Must have at least one statement.
     */
    statements : StoredProcedureStatementList,

    elseIfs : ElseIfList|undefined,

    else : StoredProcedureStatementList|undefined,
}
