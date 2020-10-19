import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/fixed-point-types.html
 */
export interface DecimalDataType extends Node {
    syntaxKind : SyntaxKind.DecimalDataType;
    precision : number,
    scale : number,

    signed : boolean;

    /**
     * If `true`, then `signed` must be `false`
     */
    zeroFill : boolean;
}
