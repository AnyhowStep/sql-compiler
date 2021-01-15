import {Node} from "../../../node";
import {SyntaxKind} from "../../../syntax-kind.generated";
import {CreateTableDefinitionList} from "../../create-table-definition";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8170
 */
export interface AlterTableAddCreateTableDefinitionList extends Node {
    syntaxKind : SyntaxKind.AlterTableAddCreateTableDefinitionList,

    createTableDefinitionList : CreateTableDefinitionList,
}
