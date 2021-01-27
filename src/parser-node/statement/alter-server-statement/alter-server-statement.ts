import {StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateServerOptions} from "../create-server-statement";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/alter-server.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7684
 */
export interface AlterServerStatement extends Node {
    syntaxKind : SyntaxKind.AlterServerStatement,

    /**
     * @todo Must not be empty
     */
    serverName : StringLiteral|Identifier,

    createServerOptions : CreateServerOptions,
}
