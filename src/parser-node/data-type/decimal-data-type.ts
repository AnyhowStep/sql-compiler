import {Precision} from "../misc";
import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/fixed-point-types.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6686-L6703
 */
export interface DecimalDataType extends Node {
    syntaxKind : SyntaxKind.DecimalDataType;

    precision : Precision;

    signed : boolean;

    /**
     * If `true`, then `signed` must be `false`
     */
    zeroFill : boolean;
}
