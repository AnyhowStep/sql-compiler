import {Identifier, TextRange} from "../../parser-node";

export interface CharacterDataTypeModifier extends TextRange {
    readonly characterSet : Identifier|undefined;
    readonly collate : Identifier|undefined;
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7138
     *
     * When this is set, we simply do not know what character set and collation to use
     * unless we resolve the table's/schema's/server's/connection's character set.
     */
    readonly binary? : TextRange|undefined;
}
