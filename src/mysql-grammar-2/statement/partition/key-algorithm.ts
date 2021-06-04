import {field, seq} from "../../../grammar-builder";
import {real_ulong_num} from "../../rule-util";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5265
 */
export const KeyAlgorithm = seq(
    field("algorithmToken", TokenKind.ALGORITHM),
    field("equalToken", TokenKind.Equal),
    field("keyAlgorithm", real_ulong_num),
);
