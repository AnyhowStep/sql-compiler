import {DataType} from "../../data-type";
import {AccountIdentifierOrCurrentUser, StoredProcedureIdentifier} from "../../identifier";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Statement} from "../statement";
import {StoredFunctionParameter} from "./stored-function-parameter";
import {StoredProcedureCharacteristics} from "./stored-procedure-characteristics";
import {StoredProcedureStatement} from "./stored-procedure-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L15226
 */
export interface CreateFunctionStatement extends Statement {
    syntaxKind : SyntaxKind.CreateFunctionStatement,

    /**
     * Defaults to `CURRENT_USER`
     */
    definer : AccountIdentifierOrCurrentUser,
    storedProcedureIdentifier : StoredProcedureIdentifier,
    parameters : NodeArray2<SyntaxKind.StoredFunctionParameterList, StoredFunctionParameter>,
    returnType : DataType,
    characteristics : StoredProcedureCharacteristics,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L3671
     */
    statement : StoredProcedureStatement,
}
