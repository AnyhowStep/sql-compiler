import {StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTablespaceOptions} from "../create-tablespace-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7664
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4709
 */
export interface AlterTablespaceStatement extends Node {
    syntaxKind : SyntaxKind.AlterTablespaceStatement,

    identifier : Identifier,

    add : ValueNode<boolean>,
    dataFile : StringLiteral,

    /**
     * @todo Some options don't appear valid for `ALTER TABLESPACE`
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4792
     */
    createTablespaceOptions : CreateTablespaceOptions,

}
