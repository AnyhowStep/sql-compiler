import {AccountIdentifierOrCurrentUser, IdentifierList, TableIdentifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {ViewAlgorithm, ViewCheckOption, ViewSecurityContext} from "../create-view-statement";
import {SelectStatement} from "../select-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7599
 */
export interface AlterViewStatement extends Node {
    syntaxKind : SyntaxKind.AlterViewStatement,

    algorithm : ValueNode<ViewAlgorithm>|undefined,

    definer : AccountIdentifierOrCurrentUser|undefined,

    viewSecurityContext : ValueNode<ViewSecurityContext>|undefined,

    /**
     * Views and tables share the same namespace.
     */
    tableIdentifier : TableIdentifier,

    /**
     * If set, must be length one or more
     */
    columns : IdentifierList|undefined,

    selectStatement : SelectStatement,

    /**
     * If specified with `WITH CHECK OPTION`, it is `CASCADED`
     */
    checkOption : ValueNode<ViewCheckOption>|undefined,
}
