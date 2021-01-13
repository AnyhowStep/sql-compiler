import {ValueNode} from "../../../node";
import {CreateTableOptions} from "../../create-table-options";

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
    /**
     * > `ALTER TABLE tbl_name ENGINE=INNODB` and `ALTER TABLE tbl_name FORCE` use online DDL.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/innodb-online-ddl.html
     */
    | ValueNode<"FORCE">
;