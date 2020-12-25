import {Expression} from "../expression";
import {Node, ValueNode} from "../node";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";
import {ElseBranch} from "./if-statement";
import {StoredProcedureStatementList} from "./stored-procedure-statement-list";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4239
 */
export interface SimpleWhen extends Node {
    syntaxKind : SyntaxKind.SimpleWhen,

    whenToken : ValueNode<"WHEN">,

    expr : Expression,
    /**
     * Must have at least one statement.
     */
    statements : StoredProcedureStatementList,
}

export interface SimpleWhenList extends NodeArray2<SyntaxKind.SimpleWhenList, SimpleWhen> {

}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4151
 */
export interface SimpleCaseStatement extends Node {
    syntaxKind : SyntaxKind.SimpleCaseStatement,

    caseToken : ValueNode<"CASE">,

    expr : Expression,

    simpleWhens : SimpleWhenList|undefined,

    elseBranch : ElseBranch|undefined,
}
