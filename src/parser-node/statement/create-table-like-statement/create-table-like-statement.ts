import {TableIdentifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5084
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5099
 */
export interface CreateTableLikeStatement extends Node {
    syntaxKind : SyntaxKind.CreateTableLikeStatement,

    temporary : boolean,
    ifNotExists : boolean,
    tableIdentifier : TableIdentifier,

    likeTableIdentifier : TableIdentifier,
}
