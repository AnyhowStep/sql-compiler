import {StringLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11112
 */
export interface IntoDestinationDumpFile extends Node {
    syntaxKind : SyntaxKind.IntoDestinationDumpFile,

    path : StringLiteral,
}
