import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {AlterInstanceRotateMasterKey} from "./alter-instance-rotate-master-key";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/alter-instance.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14061-L14081
 *
 */
export interface AlterInstanceStatement extends Node {
    syntaxKind : SyntaxKind.AlterInstanceStatement,

    /**
     * @todo MySQL 8.0 has more actions
     * https://dev.mysql.com/doc/refman/8.0/en/alter-instance.html
     */
    alterInstanceAction : AlterInstanceRotateMasterKey,
}
