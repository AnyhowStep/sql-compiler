import {StringLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/binlog.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8761
 */
export interface BinLogStatement extends Node {
    syntaxKind : SyntaxKind.BinLogStatement,

    /**
     * The 'str' value is a base 64-encoded string that the
     * server decodes to determine the data change indicated by the corresponding event.
     *
     * This statement can execute only format description events and row events.
     */
    str : StringLiteral,

}
