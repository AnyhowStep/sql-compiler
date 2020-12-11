import {SyntaxKind} from "../syntax-kind.generated";
import {Expression} from "./expression";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/prepare.html
 *
 * A param marker is a `?` character that acts
 * as a placeholder for prepared statements.
 */
export interface ParamMarker extends Expression {
    syntaxKind : SyntaxKind.ParamMarker;
}
