import {IntegerLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface KeyPartition extends Node {
    syntaxKind : SyntaxKind.KeyPartition,

    /**
     * Defaults to `false`
     */
    linear : boolean,
    /**
     * @todo
     *
     * Valid values are: 1, 2
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5268-L5281
     */
    algorithm : IntegerLiteral|undefined,
    partitionColumns : NodeArray<Identifier>,
    partitionCount : IntegerLiteral|undefined,
}
