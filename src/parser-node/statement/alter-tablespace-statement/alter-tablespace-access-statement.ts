import {Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4887
 */
export enum TablespaceAccessMode {
    READ_ONLY,
    READ_WRITE,
    NOT_ACCESSIBLE,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7679
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4682
 */
export interface AlterTablespaceAccessStatement extends Node {
    syntaxKind : SyntaxKind.AlterTablespaceAccessStatement,

    identifier : Identifier,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4887
     */
    accessMode : ValueNode<TablespaceAccessMode>,
}
