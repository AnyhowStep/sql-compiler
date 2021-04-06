import {StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/alter-instance.html
 */
export interface AlterInstanceRotateMasterKey extends Node {
    syntaxKind : SyntaxKind.AlterInstanceRotateMasterKey,

    /**
     * @todo Only `INNODB` allowed for now
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14071-L14079
     */
    engine : Identifier|StringLiteral,
}
