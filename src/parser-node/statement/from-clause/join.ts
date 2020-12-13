import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {JoinSpecification} from "./join-specification";
import {TableReference} from "./table-reference";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/join.html
 */
export enum JoinType {
    INNER,
    CROSS,
    STRAIGHT,

    LEFT,
    RIGHT,

    NATURAL_INNER,
    NATURAL_LEFT,
    NATURAL_RIGHT,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10424
 */
export interface Join extends Node {
    syntaxKind : SyntaxKind.Join,

    joinType : ValueNode<JoinType>,

    lhs : TableReference,
    rhs : TableReference,
    joinSpecification : JoinSpecification|undefined,
}
