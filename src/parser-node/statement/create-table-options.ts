import {IntegerLiteral, StringLiteral} from "../expression";
import {Identifier} from "../identifier";
import {Node, ValueNode} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

export enum PackKeys {
    _0,
    _1,
    DEFAULT,
}

export enum StatsAutoRecalc {
    _0,
    _1,
    DEFAULT,
}

export enum StatsPersistent {
    _0,
    _1,
    DEFAULT,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5911
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5917
 */
export interface CreateTableOptions extends Node {
    syntaxKind : SyntaxKind.CreateTableOptions;

    /**
     *
     */
    autoIncrement : IntegerLiteral|undefined;
    /**
     * The maximum MAX_ROWS value is 4294967295; larger values are **ignored**.
     */
    averageRowLength : IntegerLiteral|undefined;
    /*
    characterSet;
    */
    checksum : boolean|undefined;
    /*
    collate;
    */
    comment : StringLiteral|undefined;
    /**
     * Supported values include Zlib, LZ4, and None.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/create-table.html
     */
    compression : StringLiteral|undefined;
    /*
    connection;
    dataDirectory;
    indexDirectory;
    */
    delayKeyWrite : boolean|undefined;
    /**
     * Supported values include Y, and N.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/create-table.html
     */
    encryption : StringLiteral|undefined;
    /**
     * @todo Figure out what `LEX_HOSTNAME` is
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13245
     */
    engine : Identifier|StringLiteral|undefined;
    /*
    insertMethod;
    keyBlockSize;
    */
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
    packKeys : PackKeys|undefined;
    password : StringLiteral|undefined;
    /*
    rowFormat;
    */
    statsAutoRecalc : StatsAutoRecalc|undefined;
    statsPersistent : StatsPersistent|undefined;
    /**
     * @todo Limit values to `[0, 65535]`
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6027-L6034
     */
    statsSamplePages : IntegerLiteral|ValueNode<undefined>|undefined;
    /*
    tablespace;
    union;
    */
}
