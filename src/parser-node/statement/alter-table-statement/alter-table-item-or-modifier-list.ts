import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {AlterTableItem} from "./alter-table-item";
import {AlterTableModifier} from "./alter-table-modifier";

export type AlterTableItemOrModifier =
    | AlterTableItem
    | AlterTableModifier
;

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7861
 *
 * List may be empty.
 *
 * `ALTER TABLE T;` is a valid alter table statement.
 */
export interface AlterTableItemOrModifierList extends NodeArray2<SyntaxKind.AlterTableItemOrModifierList, AlterTableItemOrModifier> {
}
