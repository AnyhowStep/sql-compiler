import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html
 */
export interface BooleanDataType extends Node {
    syntaxKind : SyntaxKind.BooleanDataType;
}
