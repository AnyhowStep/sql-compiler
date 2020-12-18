import {StringLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * For default values,
 * https://dev.mysql.com/doc/refman/5.7/en/load-data.html
 */
export interface LineTerminatorOptions extends Node {
    syntaxKind : SyntaxKind.LineTerminatorOptions;

    /**
     * Defaults to `"\n"`
     */
    terminatedBy : StringLiteral,

    /**
     * Defaults to `""`
     */
    startingBy : StringLiteral,
}
