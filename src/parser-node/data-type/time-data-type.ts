import {FieldLength} from "../misc";
import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6584
 */
export interface TimeDataType extends Node {
    syntaxKind : SyntaxKind.TimeDataType;

    /**
     * 0 to 6, defaults to 0
     */
    fractionalSecondPrecision : FieldLength;
}
