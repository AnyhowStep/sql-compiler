import {Expression} from "../expression";
import {Node, ValueNode} from "../node";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";
import {StoredProcedureStatementList} from "./stored-procedure-statement-list";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4142
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4062
 */
export interface ElseIf extends Node {
    syntaxKind : SyntaxKind.ElseIf,

    elseIfToken : ValueNode<"ELSEIF">,

    expr : Expression,
    /**
     * Must have at least one statement.
     */
    statements : StoredProcedureStatementList,
}

export interface ElseIfList extends NodeArray2<SyntaxKind.ElseIfList, ElseIf> {

}

export interface ElseBranch extends Node {
    syntaxKind : SyntaxKind.ElseBranch,

    elseToken : ValueNode<"ELSE">,

    /**
     * Must have at least one statement.
     */
    statements : StoredProcedureStatementList,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L3687
 */
export interface IfStatement extends Node {
    syntaxKind : SyntaxKind.IfStatement,

    ifToken : ValueNode<"IF">,

    expr : Expression,
    /**
     * Must have at least one statement.
     */
    statements : StoredProcedureStatementList,

    elseIfs : ElseIfList|undefined,

    elseBranch : ElseBranch|undefined,
}
