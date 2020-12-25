import {Expression} from "../expression";
import {Node, ValueNode} from "../node";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";
import {ElseBranch} from "./if-statement";
import {StoredProcedureStatementList} from "./stored-procedure-statement-list";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4299
 */
export interface SearchedWhen extends Node {
    syntaxKind : SyntaxKind.SearchedWhen,

    whenToken : ValueNode<"WHEN">,

    expr : Expression,
    /**
     * Must have at least one statement.
     */
    statements : StoredProcedureStatementList,
}

export interface SearchedWhenList extends NodeArray2<SyntaxKind.SearchedWhenList, SearchedWhen> {

}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4215
 */
export interface SearchedCaseStatement extends Node {
    syntaxKind : SyntaxKind.SearchedCaseStatement,

    caseToken : ValueNode<"CASE">,

    searchedWhens : SearchedWhenList|undefined,

    elseBranch : ElseBranch|undefined,
}
