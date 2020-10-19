import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/floating-point-types.html
 */
export interface RealDataType extends Node {
    syntaxKind : SyntaxKind.RealDataType;
    bytes : 4|8;

    signed : boolean;

    /**
     * If `true`, then `signed` must be `false`
     */
    zeroFill : boolean;
}
