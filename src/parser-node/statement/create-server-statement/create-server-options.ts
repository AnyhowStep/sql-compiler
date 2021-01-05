import {IntegerLiteral, StringLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2399
 */
export interface CreateServerOptions extends Node {
    syntaxKind : SyntaxKind.CreateServerOptions,

    /**
     * Defaults to empty string
     */
    host : StringLiteral,

    /**
     * Defaults to empty string
     */
    database : StringLiteral,

    /**
     * Defaults to empty string
     */
    user : StringLiteral,

    /**
     * Defaults to empty string
     */
    password : StringLiteral,

    /**
     * Defaults to empty string
     */
    socket : StringLiteral,

    /**
     * Defaults to empty string
     */
    owner : StringLiteral,

    /**
     * Defaults to zero.
     *
     * Must be between [0, 9999]
     */
    port : IntegerLiteral,
}
