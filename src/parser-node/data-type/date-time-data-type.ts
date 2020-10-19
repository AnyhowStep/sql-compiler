import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/datetime.html
 *
 * https://dev.mysql.com/doc/refman/5.7/en/date-and-time-type-syntax.html
 */
export interface DateTimeDataType extends Node {
    syntaxKind : SyntaxKind.DateTimeDataType;

    /**
     * Should be one of `0|1|2|3|4|5|6`
     */
    fractionalSecondPrecision : number;
}
