import {Statement} from "../statement";
import {BlockStatement} from "./block-statement";
import {CloseStatement} from "./close-statement";
import {IfStatement} from "./if-statement";
import {IterateStatement} from "./iterate-statement";
import {LabelStatement} from "./label-statement";
import {LeaveStatement} from "./leave-statement";
import {LoopStatement} from "./loop-statement";
import {OpenStatement} from "./open-statement";
import {RepeatStatement} from "./repeat-statement";
import {ReturnStatement} from "./return-statement";
import {SearchedCaseStatement} from "./searched-case-statement";
import {SimpleCaseStatement} from "./simple-case-statement";
import {WhileStatement} from "./while-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L3671
 */
export type StoredProcedureStatement =
    | Statement
    | BlockStatement
    | CloseStatement
    | IfStatement
    | IterateStatement
    | LabelStatement
    | LeaveStatement
    | LoopStatement
    | OpenStatement
    | RepeatStatement
    | ReturnStatement
    | SearchedCaseStatement
    | SimpleCaseStatement
    | WhileStatement
;
