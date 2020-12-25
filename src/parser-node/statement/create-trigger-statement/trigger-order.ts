import {StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L15072
 */
export enum TriggerActionOrder {
    FOLLOWS,
    PRECEDES,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L15079
 */
export interface TriggerOrder extends Node {
    syntaxKind : SyntaxKind.TriggerOrder,

    triggerActionOrder : ValueNode<TriggerActionOrder>,
    otherTriggerName : Identifier|StringLiteral,
}
