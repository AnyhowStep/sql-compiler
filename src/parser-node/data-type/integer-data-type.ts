import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/integer-types.html
 */
export interface IntegerDataType extends Node {
    syntaxKind : SyntaxKind.IntegerDataType;
    bytes : 1|2|3|4|8;
    /**
     * You really should not use this
     */
    displayWidth : number|undefined;

    signed : boolean;

    /**
     * If `true`, then `signed` must be `false`
     */
    zeroFill : boolean;
}
