import {Node} from "../node";
import {NodeArray2} from "../node-array";
import {StoredProcedureStatement} from "../statement";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4467
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4449
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4415
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L3676-L3677
 */
export interface BlockStatement extends Node {
    syntaxKind : SyntaxKind.BlockStatement,

    /**
     * We will allow a mix of statements and declarations here.
     * @todo We will use linting to check that all declarations are at the beginning of the block.
     *
     * Declarations:
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13394
     *
     */
    statements : NodeArray2<SyntaxKind.StoredProcedureStatementList, StoredProcedureStatement>,
}
