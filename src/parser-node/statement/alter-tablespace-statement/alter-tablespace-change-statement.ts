import {StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTablespaceOptions} from "../create-tablespace-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7674
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4687
 */
export interface AlterTablespaceChangeStatement extends Node {
    syntaxKind : SyntaxKind.AlterTablespaceChangeStatement,

    identifier : Identifier,

    dataFile : StringLiteral,

    /**
     * @todo Some options don't appear valid for `ALTER TABLESPACE CHANGE`
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4752
     */
    createTablespaceOptions : CreateTablespaceOptions,

}
