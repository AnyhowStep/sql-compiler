import {CreateTableOptions} from "../../create-table-options";
import {AlterTableAddColumn} from "./alter-table-add-column";
import {AlterTableAddCreateTableDefinitionList} from "./alter-table-add-create-table-definition-list";
import {AlterTableAlterColumnDropDefault} from "./alter-table-alter-column-drop-default";
import {AlterTableAlterColumnSetDefault} from "./alter-table-alter-column-set-default";
import {AlterTableChangeColumn} from "./alter-table-change-column";
import {AlterTableConvertToCharacterSet} from "./alter-table-convert-to-character-set";
import {AlterTableDisableKeys} from "./alter-table-disable-keys";
import {AlterTableDropColumn} from "./alter-table-drop-column";
import {AlterTableDropForeignKey} from "./alter-table-drop-foreign-key";
import {AlterTableDropIndex} from "./alter-table-drop-index";
import {AlterTableDropPrimaryKey} from "./alter-table-drop-primary-key";
import {AlterTableEnableKeys} from "./alter-table-enable-keys";
import {AlterTableForce} from "./alter-table-force";
import {AlterTableModifyColumn} from "./alter-table-modify-column";
import {AlterTableOrderBy} from "./alter-table-order-by";
import {AlterTableRenameIndex} from "./alter-table-rename-index";
import {AlterTableRenameTable} from "./alter-table-rename-table";
import {AlterTableUpgradePartitioning} from "./alter-table-upgrade-partitioning";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8160
 */
export type AlterTableItem =
    /**
     * Space separated
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8335
     */
    | CreateTableOptions
    | AlterTableAddColumn
    | AlterTableAddCreateTableDefinitionList
    | AlterTableChangeColumn
    | AlterTableModifyColumn
    | AlterTableDropColumn
    | AlterTableDropForeignKey
    | AlterTableDropPrimaryKey
    | AlterTableDropIndex
    | AlterTableDisableKeys
    | AlterTableEnableKeys
    | AlterTableAlterColumnSetDefault
    | AlterTableAlterColumnDropDefault
    | AlterTableRenameTable
    | AlterTableRenameIndex
    | AlterTableConvertToCharacterSet
    | AlterTableForce
    | AlterTableUpgradePartitioning
    | AlterTableOrderBy
;
