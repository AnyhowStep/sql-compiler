import {Identifier} from "../identifier";
import {Node} from "../node";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L3967
 */
export interface FetchStatement extends Node {
    syntaxKind : SyntaxKind.FetchStatement,

    cursorName : Identifier,

    identifiers : FetchIdentifierList,
}

export interface FetchIdentifierList extends NodeArray2<SyntaxKind.FetchIdentifierList, Identifier> {

}
