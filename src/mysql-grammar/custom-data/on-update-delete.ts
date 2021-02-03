import {ReferenceOption, TextRange} from "../../parser-node";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7275
 */
export interface OnUpdateDelete extends TextRange {
    onDelete : ReferenceOption|undefined,
    onUpdate : ReferenceOption|undefined,
}
