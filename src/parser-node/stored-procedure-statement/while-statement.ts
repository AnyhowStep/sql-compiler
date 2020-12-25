import {Expression} from "../expression";
import {Node} from "../node";
import {NodeArray2} from "../node-array";
import {StoredProcedureStatement} from "../statement";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4534
 */
export interface WhileStatement extends Node {
    syntaxKind : SyntaxKind.WhileStatement,

    expr : Expression,

    /**
     * Must have at least one statement.
     */
    statements : NodeArray2<SyntaxKind.StoredProcedureStatementList, StoredProcedureStatement>,
}
