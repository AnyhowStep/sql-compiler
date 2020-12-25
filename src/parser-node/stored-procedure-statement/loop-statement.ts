import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {StoredProcedureStatementList} from "./stored-procedure-statement-list";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4518
 */
export interface LoopStatement extends Node {
    syntaxKind : SyntaxKind.LoopStatement,

    /**
     * Must have at least one statement.
     */
    statements : StoredProcedureStatementList,
}
