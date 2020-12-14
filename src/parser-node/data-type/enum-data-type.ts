import {BitLiteral, HexLiteral, StringLiteral} from "../expression";
import {Identifier} from "../identifier";
import {Node, TextRange} from "../node";
import {NodeArray} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/enum.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6704-L6711
 */
export interface EnumDataType extends Node {
    syntaxKind : SyntaxKind.EnumDataType;
    elements : NodeArray<StringLiteral|HexLiteral|BitLiteral>;

    characterSet : Identifier|StringLiteral|undefined,
    collate : Identifier|StringLiteral|undefined,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7138
     *
     * When this is set, we simply do not know what character set and collation to use
     * unless we resolve the table's/schema's/server's/connection's character set.
     */
    binary : TextRange|undefined,
}
