import {StringLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * For default values,
 * https://dev.mysql.com/doc/refman/5.7/en/load-data.html
 */
export interface FieldTerminatorOptions extends Node {
    syntaxKind : SyntaxKind.FieldTerminatorOptions;

    /**
     * Defaults to `"\t"`
     */
    terminatedBy : StringLiteral,

    /**
     * Defaults to `false`
     */
    optionallyEnclosed : boolean,

    /**
     * Defaults to `""`
     */
    enclosedBy : StringLiteral,

    /**
     * Defaults to `"\\"`
     */
    escapedBy : StringLiteral,
}
