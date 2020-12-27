import {AccountIdentifierOrCurrentUser, IdentifierList, TableIdentifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {SelectStatement} from "../select-statement";

export enum ViewAlgorithm {
    MERGE,
    TEMPTABLE,
    UNDEFINED,
}

export enum ViewSecurityContext {
    DEFINER,
    INVOKER,
}

export enum ViewCheckOption {
    CASCADED,
    LOCAL,
}

export interface CreateViewStatement extends Node {
    syntaxKind : SyntaxKind.CreateViewStatement,

    /**
     * Defaults to `false`
     */
    createOrReplace : ValueNode<boolean>,

    /**
     * https://dev.mysql.com/doc/refman/5.7/en/view-algorithms.html
     *
     * > If no `ALGORITHM` clause is present,
     * > `UNDEFINED` is the default algorithm prior to MySQL 5.7.6.
     *
     * > As of 5.7.6, the default algorithm is determined by the value of the
     * > `derived_merge` flag of the `optimizer_switch` system variable.
     */
    algorithm : ValueNode<ViewAlgorithm>|undefined,


    /**
     * Defaults to `CURRENT_USER`
     */
    definer : AccountIdentifierOrCurrentUser,

    /**
     * Defaults to `DEFINER`
     */
    viewSecurityContext : ValueNode<ViewSecurityContext>,

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
