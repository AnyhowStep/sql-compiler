import {TableIdentifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12961
 */
export interface TableAsteriskSelectItem extends Node {
    syntaxKind : SyntaxKind.TableAsteriskSelectItem;

    /**
     * + `SELECT table.*`
     * + `SELECT schema.table.*`
     */
    tableIdentifier : TableIdentifier,
}
