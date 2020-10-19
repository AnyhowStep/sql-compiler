import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/json.html
 */
export interface JsonDataType extends Node {
    syntaxKind : SyntaxKind.JsonDataType;
}
