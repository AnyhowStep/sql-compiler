import {StringLiteral} from "../expression";
import {Identifier} from "../identifier";
import {FieldLength} from "../misc";
import {Node, TextRange} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/char.html
 *
 * https://dev.mysql.com/doc/refman/5.7/en/binary-varbinary.html
 *
 * https://stackoverflow.com/questions/29292353/whats-the-difference-between-varchar-binary-and-varbinary-in-mysql
 */
export interface CharacterDataType extends Node {
    syntaxKind : SyntaxKind.CharacterDataType;

    variableLength : boolean;
    maxLength : FieldLength;

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
