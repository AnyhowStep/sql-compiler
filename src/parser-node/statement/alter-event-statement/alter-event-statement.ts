import {AccountIdentifierOrCurrentUser, EventIdentifier} from "../../identifier";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Statement} from "../statement";
import {StoredProcedureStatement} from "../../stored-procedure-statement";
import {StringLiteral} from "../../expression";
import {EventStatus, Schedule} from "../create-event-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7631
 */
export interface AlterEventStatement extends Statement {
    syntaxKind : SyntaxKind.AlterEventStatement,

    definer : AccountIdentifierOrCurrentUser,

    eventIdentifier : EventIdentifier,

    schedule : Schedule|undefined,

    onCompletionPreserve : boolean|undefined,

    newEventIdentifier : EventIdentifier|undefined,


    eventStatus : EventStatus|undefined,
    comment : StringLiteral|undefined,

    statement : StoredProcedureStatement|undefined,
}
