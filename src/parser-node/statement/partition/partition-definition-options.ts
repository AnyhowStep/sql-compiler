import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5768
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5828
 */
export interface PartitionDefinitionOptions extends Node {
    syntaxKind : SyntaxKind.PartitionDefinitionOptions,

    tablespace : Identifier|undefined;
    /**
     * @todo Figure out what `LEX_HOSTNAME` is
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13245
     */
    engine : Identifier|StringLiteral|undefined;
    nodeGroup : IntegerLiteral|undefined;
    /**
     * The maximum MAX_ROWS value is 4294967295; larger values are truncated to this limit.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/create-table.html
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5923
     */
    maxRows : IntegerLiteral|undefined;
    /**
     * The maximum MIN_ROWS value is 4294967295; larger values are truncated to this limit.
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5928
     */
    minRows : IntegerLiteral|undefined;

    dataDirectory : StringLiteral|undefined;
    indexDirectory : StringLiteral|undefined;

    comment : StringLiteral|undefined;
}
