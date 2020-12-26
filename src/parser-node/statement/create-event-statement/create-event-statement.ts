import {AccountIdentifierOrCurrentUser, EventIdentifier} from "../../identifier";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Statement} from "../statement";
import {StoredProcedureStatement} from "../../stored-procedure-statement";
import {StringLiteral} from "../../expression";
import {Schedule} from "./schedule";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2485
 */
export enum EventStatus {
    ENABLE,
    DISABLE,
    DISABLE_ON_SLAVE,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2436
 */
export interface CreateEventStatement extends Statement {
    syntaxKind : SyntaxKind.CreateEventStatement,

    /**
     * Defaults to `CURRENT_USER`
     */
    definer : AccountIdentifierOrCurrentUser,
    ifNotExists : boolean,
    eventIdentifier : EventIdentifier,

    schedule : Schedule,

    /**
     * Defaults to `false`
     */
    onCompletionPreserve : boolean,

    /**
     * Defaults to `ENABLE`
     */
    eventStatus : EventStatus,
    comment : StringLiteral|undefined,

    statement : StoredProcedureStatement,
}
