import {FieldLength} from "../misc";
import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/datetime.html
 *
 * https://dev.mysql.com/doc/refman/5.7/en/date-and-time-type-syntax.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6618
 */
export interface DateTimeDataType extends Node {
    syntaxKind : SyntaxKind.DateTimeDataType;

    /**
     * 0 to 6, defaults to 0
     */
    fractionalSecondPrecision : FieldLength;
}
