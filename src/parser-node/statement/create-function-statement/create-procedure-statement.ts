import {AccountIdentifierOrCurrentUser, StoredProcedureIdentifier} from "../../identifier";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Statement} from "../statement";
import {StoredProcedureParameterList} from "./stored-procedure-parameter";
import {StoredProcedureCharacteristics} from "./stored-procedure-characteristics";
import {StoredProcedureStatement} from "../../stored-procedure-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L15354
 */
export interface CreateProcedureStatement extends Statement {
    syntaxKind : SyntaxKind.CreateProcedureStatement,

    /**
     * Defaults to `CURRENT_USER`
     */
    definer : AccountIdentifierOrCurrentUser,
    storedProcedureIdentifier : StoredProcedureIdentifier,
    parameters : StoredProcedureParameterList,

    characteristics : StoredProcedureCharacteristics,

    statement : StoredProcedureStatement,
}
