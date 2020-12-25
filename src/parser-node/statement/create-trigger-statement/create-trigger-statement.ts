import {AccountIdentifierOrCurrentUser, TableIdentifier, TriggerIdentifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {StoredProcedureStatement} from "../../stored-procedure-statement";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TriggerOrder} from "./trigger-order";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4654
 */
export enum TriggerActionTime {
    BEFORE,
    AFTER,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4661
 */
export enum TriggerEvent {
    INSERT,
    UPDATE,
    DELETE,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L15094
 */
export interface CreateTriggerStatement extends Node {
    syntaxKind : SyntaxKind.CreateTriggerStatement,

    /**
     * Defaults to `CURRENT_USER`
     */
    definer : AccountIdentifierOrCurrentUser,
    triggerIdentifier : TriggerIdentifier,

    triggerActionTime : ValueNode<TriggerActionTime>,
    triggerEvent : ValueNode<TriggerEvent>,

    tableIdentifier : TableIdentifier,

    triggerOrder : TriggerOrder|undefined,

    statement : StoredProcedureStatement,
}
