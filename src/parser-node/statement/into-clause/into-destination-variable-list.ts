import {StringLiteral, UserVariableIdentifier} from "../../expression";
import {Identifier} from "../../identifier";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11116
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11082
 */
export interface IntoDestinationVariableList extends NodeArray2<SyntaxKind.IntoDestinationVariableList, Identifier|StringLiteral|UserVariableIdentifier> {

}
