import {StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11106
 */
export interface IntoDestinationOutFile extends Node {
    syntaxKind : SyntaxKind.IntoDestinationOutFile,


    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7051
     *
     * `BINARY` and `DEFAULT` are valid keywords.
     * String values are allowed.
     */
    characterSet : Identifier|StringLiteral|undefined,

    path : StringLiteral,
}
