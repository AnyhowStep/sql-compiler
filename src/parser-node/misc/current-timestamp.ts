import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {FieldLength} from "./field-length";

/**
 * + `NOW()`
 * + `NOW(0)`
 * + `NOW(1)`
 * + `CURRENT_TIMESTAMP`
 * + `CURRENT_TIMESTAMP()`
 * + `CURRENT_TIMESTAMP(0)`
 * + `CURRENT_TIMESTAMP(1)`
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6993
 */
export interface CurrentTimestamp extends Node {
    syntaxKind : SyntaxKind.CurrentTimestamp;
    fractionalSecondPrecision : FieldLength,
}
