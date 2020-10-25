import {FieldLength} from "../misc";
import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6566
 *
 * This type seems so useless. Max value is 2155.
 */
export interface YearDataType extends Node {
    syntaxKind : SyntaxKind.YearDataType;

    /**
     * 4 is the only valid value, at the moment.
     */
    fieldLength : FieldLength;
}
