import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {SelectStatement} from "../select-statement";

export enum CreateTableSelectOnDuplicate {
    IGNORE,
    REPLACE,
}

/**
 * https://dev.mysql.com/doc/refman/5.7/en/create-table-select.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5133
 */
export interface CreateTableSelect extends Node {
    syntaxKind : SyntaxKind.CreateTableSelect,

    onDuplicate : CreateTableSelectOnDuplicate|undefined,

    select : SelectStatement,
}
