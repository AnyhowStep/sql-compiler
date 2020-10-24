import {IntegerLiteral} from "../expression";
import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6851
 */
export interface FieldLength extends Node {
    syntaxKind : SyntaxKind.FieldLength;
    /**
     * This is a valid field length specifier,
     * ```
     * CHAR(3.14159265)
     * ```
     *
     * But the fractional part gets truncated.
     * Why.
     */
    length : IntegerLiteral;
}
