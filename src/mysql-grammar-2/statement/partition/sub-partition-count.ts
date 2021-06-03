import {field, seq} from "../../../grammar-builder";
import {real_ulong_num} from "../../rule-util";
import {TokenKind} from "../../token.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/create-table.html
 *
 * https://dev.mysql.com/doc/refman/5.7/en/create-table.html#:~:text=The%20number%20of%20partitions%20may%20optionally
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5426
 */
export const SubPartitionCount = seq(
    field("subPartitionsToken", TokenKind.SUBPARTITIONS),
    field("partitionCount", real_ulong_num)
);
