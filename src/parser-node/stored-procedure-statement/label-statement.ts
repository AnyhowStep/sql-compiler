import {Identifier} from "../identifier";
import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {BlockStatement} from "./block-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4372
 */
export interface LabelStatement extends Node {
    syntaxKind : SyntaxKind.LabelStatement,

    /**
     * We allow certain unquoted keywords,
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13232
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13394
     */
    beginLabel : Identifier|undefined,

    statement : BlockStatement,

    /**
     * We allow certain unquoted keywords,
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13232
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13394
     *
     * Must match `startLabel` (case insensitive)
     */
    endLabel : Identifier|undefined,
}
