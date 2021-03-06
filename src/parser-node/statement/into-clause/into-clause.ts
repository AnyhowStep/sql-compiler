import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {IntoDestination} from "./into-destination";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11099
 */
export interface IntoClause extends Node {
    syntaxKind : SyntaxKind.IntoClause,

    intoDestination : IntoDestination,
}
