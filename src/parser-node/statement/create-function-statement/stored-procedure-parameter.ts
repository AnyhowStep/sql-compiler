import {DataType} from "../../data-type";
import {Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2883
 */
export enum ParameterMode {
    IN,
    OUT,
    INOUT,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2854
 */
export interface StoredProcedureParameter extends Node {
    syntaxKind : SyntaxKind.StoredProcedureParameter,

    /**
     * Defaults to `IN`
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2883
     */
    parameterMode : ValueNode<ParameterMode>,

    identifier : Identifier,
    dataType : DataType,
}

export interface StoredProcedureParameterList extends NodeArray2<SyntaxKind.StoredProcedureParameterList, StoredProcedureParameter> {

}
