import {StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTablespaceOptions} from "./create-tablespace-options";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/create-tablespace.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2379
 */
export interface CreateTablespaceStatement extends Node {
    syntaxKind : SyntaxKind.CreateTablespaceStatement,

    identifier : Identifier,

    addDataFile : StringLiteral,

    /**
     * `NDB` Only
     */
    useLogFileGroup : Identifier|undefined,

    createTablespaceOptions : CreateTablespaceOptions,
}
