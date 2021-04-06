import {StringLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/alter-user.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7694
 */
export interface AlterCurrentUserStatement extends Node {
    syntaxKind : SyntaxKind.AlterCurrentUserStatement,

    ifExists : boolean,

    identifiedBy : StringLiteral,

}
