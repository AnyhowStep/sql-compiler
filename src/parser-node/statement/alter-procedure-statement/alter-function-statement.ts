import {StoredFunctionIdentifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {PartialStoredProcedureCharacteristics} from "../create-function-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7581
 */
export interface AlterFunctionStatement extends Node {
    syntaxKind : SyntaxKind.AlterFunctionStatement,


    storedFunctionIdentifier : StoredFunctionIdentifier,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2708
     *
     * `DETERMINISTIC` and `NOT DETERMINISTIC` are not part of the `ALTER PROCEDURE` statement
     */
    characteristics : PartialStoredProcedureCharacteristics,
}
