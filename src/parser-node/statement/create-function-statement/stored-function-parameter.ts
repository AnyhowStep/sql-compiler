import {DataType} from "../../data-type";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2813
 */
export interface StoredFunctionParameter extends Node {
    syntaxKind : SyntaxKind.StoredFunctionParameter,

    identifier : Identifier,
    dataType : DataType,
}

export interface StoredFunctionParameterList extends NodeArray2<SyntaxKind.StoredFunctionParameterList, StoredFunctionParameter> {

}
