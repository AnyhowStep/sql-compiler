import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4763
 */
export interface CreateTablespaceOptions extends Node {
    syntaxKind : SyntaxKind.CreateTablespaceOptions,


}
