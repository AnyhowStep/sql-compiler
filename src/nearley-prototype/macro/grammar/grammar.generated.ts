//@ts-nocheck
// Generated automatically by nearley, version 2.11.2
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

import {TokenKind, isKeyword} from "../../../scanner";
const scanner_1 = require("../../../scanner");
const parser_node_1 = require("../../../parser-node");
const diagnostic_messages_1 = require("../../diagnostic-messages");
const parse_util_1 = require("../../parse-util");

const NonPound : Tester = {
    test: x => (
        x.tokenKind != TokenKind.Pound &&
        x.tokenKind != TokenKind.OpenParenthesesPound &&
        x.tokenKind != TokenKind.PoundCloseParentheses &&
        x.tokenKind != TokenKind.OpenBrace &&
        x.tokenKind != TokenKind.CloseBrace &&
        x.tokenKind != TokenKind.MacroIdentifier
    ),
    type : "Pound",
};

const KeywordOrIdentifier : Tester = {
    test: x => x.tokenKind == TokenKind.Identifier || isKeyword(x.tokenKind),
    //Even though this could be a keyword, the intention is to use it as an identifier
    type : "Identifier",
};


interface Tester {
    test : (x : { tokenKind : TokenKind }) => boolean,
    type : string,
}
//@ts-ignore
const ACCESSIBLE : Tester = { test: x => x.tokenKind == TokenKind.ACCESSIBLE, type : "ACCESSIBLE" };
//@ts-ignore
const ADD : Tester = { test: x => x.tokenKind == TokenKind.ADD, type : "ADD" };
//@ts-ignore
const ALL : Tester = { test: x => x.tokenKind == TokenKind.ALL, type : "ALL" };
//@ts-ignore
const ALTER : Tester = { test: x => x.tokenKind == TokenKind.ALTER, type : "ALTER" };
//@ts-ignore
const ANALYZE : Tester = { test: x => x.tokenKind == TokenKind.ANALYZE, type : "ANALYZE" };
//@ts-ignore
const AND : Tester = { test: x => x.tokenKind == TokenKind.AND, type : "AND" };
//@ts-ignore
const AS : Tester = { test: x => x.tokenKind == TokenKind.AS, type : "AS" };
//@ts-ignore
const ASC : Tester = { test: x => x.tokenKind == TokenKind.ASC, type : "ASC" };
//@ts-ignore
const ASENSITIVE : Tester = { test: x => x.tokenKind == TokenKind.ASENSITIVE, type : "ASENSITIVE" };
//@ts-ignore
const BEFORE : Tester = { test: x => x.tokenKind == TokenKind.BEFORE, type : "BEFORE" };
//@ts-ignore
const BETWEEN : Tester = { test: x => x.tokenKind == TokenKind.BETWEEN, type : "BETWEEN" };
//@ts-ignore
const BIGINT : Tester = { test: x => x.tokenKind == TokenKind.BIGINT, type : "BIGINT" };
//@ts-ignore
const BINARY : Tester = { test: x => x.tokenKind == TokenKind.BINARY, type : "BINARY" };
//@ts-ignore
const BLOB : Tester = { test: x => x.tokenKind == TokenKind.BLOB, type : "BLOB" };
//@ts-ignore
const BOTH : Tester = { test: x => x.tokenKind == TokenKind.BOTH, type : "BOTH" };
//@ts-ignore
const BY : Tester = { test: x => x.tokenKind == TokenKind.BY, type : "BY" };
//@ts-ignore
const CALL : Tester = { test: x => x.tokenKind == TokenKind.CALL, type : "CALL" };
//@ts-ignore
const CASCADE : Tester = { test: x => x.tokenKind == TokenKind.CASCADE, type : "CASCADE" };
//@ts-ignore
const CASE : Tester = { test: x => x.tokenKind == TokenKind.CASE, type : "CASE" };
//@ts-ignore
const CHANGE : Tester = { test: x => x.tokenKind == TokenKind.CHANGE, type : "CHANGE" };
//@ts-ignore
const CHAR : Tester = { test: x => x.tokenKind == TokenKind.CHAR, type : "CHAR" };
//@ts-ignore
const CHARACTER : Tester = { test: x => x.tokenKind == TokenKind.CHARACTER, type : "CHARACTER" };
//@ts-ignore
const CHECK : Tester = { test: x => x.tokenKind == TokenKind.CHECK, type : "CHECK" };
//@ts-ignore
const COLLATE : Tester = { test: x => x.tokenKind == TokenKind.COLLATE, type : "COLLATE" };
//@ts-ignore
const COLUMN : Tester = { test: x => x.tokenKind == TokenKind.COLUMN, type : "COLUMN" };
//@ts-ignore
const CONDITION : Tester = { test: x => x.tokenKind == TokenKind.CONDITION, type : "CONDITION" };
//@ts-ignore
const CONSTRAINT : Tester = { test: x => x.tokenKind == TokenKind.CONSTRAINT, type : "CONSTRAINT" };
//@ts-ignore
const CONTINUE : Tester = { test: x => x.tokenKind == TokenKind.CONTINUE, type : "CONTINUE" };
//@ts-ignore
const CONVERT : Tester = { test: x => x.tokenKind == TokenKind.CONVERT, type : "CONVERT" };
//@ts-ignore
const CREATE : Tester = { test: x => x.tokenKind == TokenKind.CREATE, type : "CREATE" };
//@ts-ignore
const CROSS : Tester = { test: x => x.tokenKind == TokenKind.CROSS, type : "CROSS" };
//@ts-ignore
const CURRENT_DATE : Tester = { test: x => x.tokenKind == TokenKind.CURRENT_DATE, type : "CURRENT_DATE" };
//@ts-ignore
const CURRENT_TIME : Tester = { test: x => x.tokenKind == TokenKind.CURRENT_TIME, type : "CURRENT_TIME" };
//@ts-ignore
const CURRENT_TIMESTAMP : Tester = { test: x => x.tokenKind == TokenKind.CURRENT_TIMESTAMP, type : "CURRENT_TIMESTAMP" };
//@ts-ignore
const CURRENT_USER : Tester = { test: x => x.tokenKind == TokenKind.CURRENT_USER, type : "CURRENT_USER" };
//@ts-ignore
const CURSOR : Tester = { test: x => x.tokenKind == TokenKind.CURSOR, type : "CURSOR" };
//@ts-ignore
const DATABASE : Tester = { test: x => x.tokenKind == TokenKind.DATABASE, type : "DATABASE" };
//@ts-ignore
const DATABASES : Tester = { test: x => x.tokenKind == TokenKind.DATABASES, type : "DATABASES" };
//@ts-ignore
const DAY_HOUR : Tester = { test: x => x.tokenKind == TokenKind.DAY_HOUR, type : "DAY_HOUR" };
//@ts-ignore
const DAY_MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.DAY_MICROSECOND, type : "DAY_MICROSECOND" };
//@ts-ignore
const DAY_MINUTE : Tester = { test: x => x.tokenKind == TokenKind.DAY_MINUTE, type : "DAY_MINUTE" };
//@ts-ignore
const DAY_SECOND : Tester = { test: x => x.tokenKind == TokenKind.DAY_SECOND, type : "DAY_SECOND" };
//@ts-ignore
const DEC : Tester = { test: x => x.tokenKind == TokenKind.DEC, type : "DEC" };
//@ts-ignore
const DECIMAL : Tester = { test: x => x.tokenKind == TokenKind.DECIMAL, type : "DECIMAL" };
//@ts-ignore
const DECLARE : Tester = { test: x => x.tokenKind == TokenKind.DECLARE, type : "DECLARE" };
//@ts-ignore
const DEFAULT : Tester = { test: x => x.tokenKind == TokenKind.DEFAULT, type : "DEFAULT" };
//@ts-ignore
const DELAYED : Tester = { test: x => x.tokenKind == TokenKind.DELAYED, type : "DELAYED" };
//@ts-ignore
const DELETE : Tester = { test: x => x.tokenKind == TokenKind.DELETE, type : "DELETE" };
//@ts-ignore
const DESC : Tester = { test: x => x.tokenKind == TokenKind.DESC, type : "DESC" };
//@ts-ignore
const DESCRIBE : Tester = { test: x => x.tokenKind == TokenKind.DESCRIBE, type : "DESCRIBE" };
//@ts-ignore
const DETERMINISTIC : Tester = { test: x => x.tokenKind == TokenKind.DETERMINISTIC, type : "DETERMINISTIC" };
//@ts-ignore
const DISTINCT : Tester = { test: x => x.tokenKind == TokenKind.DISTINCT, type : "DISTINCT" };
//@ts-ignore
const DISTINCTROW : Tester = { test: x => x.tokenKind == TokenKind.DISTINCTROW, type : "DISTINCTROW" };
//@ts-ignore
const DIV : Tester = { test: x => x.tokenKind == TokenKind.DIV, type : "DIV" };
//@ts-ignore
const DOUBLE : Tester = { test: x => x.tokenKind == TokenKind.DOUBLE, type : "DOUBLE" };
//@ts-ignore
const DROP : Tester = { test: x => x.tokenKind == TokenKind.DROP, type : "DROP" };
//@ts-ignore
const DUAL : Tester = { test: x => x.tokenKind == TokenKind.DUAL, type : "DUAL" };
//@ts-ignore
const EACH : Tester = { test: x => x.tokenKind == TokenKind.EACH, type : "EACH" };
//@ts-ignore
const ELSE : Tester = { test: x => x.tokenKind == TokenKind.ELSE, type : "ELSE" };
//@ts-ignore
const ELSEIF : Tester = { test: x => x.tokenKind == TokenKind.ELSEIF, type : "ELSEIF" };
//@ts-ignore
const ENCLOSED : Tester = { test: x => x.tokenKind == TokenKind.ENCLOSED, type : "ENCLOSED" };
//@ts-ignore
const ESCAPED : Tester = { test: x => x.tokenKind == TokenKind.ESCAPED, type : "ESCAPED" };
//@ts-ignore
const EXISTS : Tester = { test: x => x.tokenKind == TokenKind.EXISTS, type : "EXISTS" };
//@ts-ignore
const EXIT : Tester = { test: x => x.tokenKind == TokenKind.EXIT, type : "EXIT" };
//@ts-ignore
const EXPLAIN : Tester = { test: x => x.tokenKind == TokenKind.EXPLAIN, type : "EXPLAIN" };
//@ts-ignore
const FALSE : Tester = { test: x => x.tokenKind == TokenKind.FALSE, type : "FALSE" };
//@ts-ignore
const FETCH : Tester = { test: x => x.tokenKind == TokenKind.FETCH, type : "FETCH" };
//@ts-ignore
const FLOAT : Tester = { test: x => x.tokenKind == TokenKind.FLOAT, type : "FLOAT" };
//@ts-ignore
const FLOAT4 : Tester = { test: x => x.tokenKind == TokenKind.FLOAT4, type : "FLOAT4" };
//@ts-ignore
const FLOAT8 : Tester = { test: x => x.tokenKind == TokenKind.FLOAT8, type : "FLOAT8" };
//@ts-ignore
const FOR : Tester = { test: x => x.tokenKind == TokenKind.FOR, type : "FOR" };
//@ts-ignore
const FORCE : Tester = { test: x => x.tokenKind == TokenKind.FORCE, type : "FORCE" };
//@ts-ignore
const FOREIGN : Tester = { test: x => x.tokenKind == TokenKind.FOREIGN, type : "FOREIGN" };
//@ts-ignore
const FROM : Tester = { test: x => x.tokenKind == TokenKind.FROM, type : "FROM" };
//@ts-ignore
const FULLTEXT : Tester = { test: x => x.tokenKind == TokenKind.FULLTEXT, type : "FULLTEXT" };
//@ts-ignore
const GENERATED : Tester = { test: x => x.tokenKind == TokenKind.GENERATED, type : "GENERATED" };
//@ts-ignore
const GET : Tester = { test: x => x.tokenKind == TokenKind.GET, type : "GET" };
//@ts-ignore
const GRANT : Tester = { test: x => x.tokenKind == TokenKind.GRANT, type : "GRANT" };
//@ts-ignore
const GROUP : Tester = { test: x => x.tokenKind == TokenKind.GROUP, type : "GROUP" };
//@ts-ignore
const HAVING : Tester = { test: x => x.tokenKind == TokenKind.HAVING, type : "HAVING" };
//@ts-ignore
const HIGH_PRIORITY : Tester = { test: x => x.tokenKind == TokenKind.HIGH_PRIORITY, type : "HIGH_PRIORITY" };
//@ts-ignore
const HOUR_MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.HOUR_MICROSECOND, type : "HOUR_MICROSECOND" };
//@ts-ignore
const HOUR_MINUTE : Tester = { test: x => x.tokenKind == TokenKind.HOUR_MINUTE, type : "HOUR_MINUTE" };
//@ts-ignore
const HOUR_SECOND : Tester = { test: x => x.tokenKind == TokenKind.HOUR_SECOND, type : "HOUR_SECOND" };
//@ts-ignore
const IF : Tester = { test: x => x.tokenKind == TokenKind.IF, type : "IF" };
//@ts-ignore
const IGNORE : Tester = { test: x => x.tokenKind == TokenKind.IGNORE, type : "IGNORE" };
//@ts-ignore
const IN : Tester = { test: x => x.tokenKind == TokenKind.IN, type : "IN" };
//@ts-ignore
const INDEX : Tester = { test: x => x.tokenKind == TokenKind.INDEX, type : "INDEX" };
//@ts-ignore
const INFILE : Tester = { test: x => x.tokenKind == TokenKind.INFILE, type : "INFILE" };
//@ts-ignore
const INNER : Tester = { test: x => x.tokenKind == TokenKind.INNER, type : "INNER" };
//@ts-ignore
const INOUT : Tester = { test: x => x.tokenKind == TokenKind.INOUT, type : "INOUT" };
//@ts-ignore
const INSENSITIVE : Tester = { test: x => x.tokenKind == TokenKind.INSENSITIVE, type : "INSENSITIVE" };
//@ts-ignore
const INSERT : Tester = { test: x => x.tokenKind == TokenKind.INSERT, type : "INSERT" };
//@ts-ignore
const INT : Tester = { test: x => x.tokenKind == TokenKind.INT, type : "INT" };
//@ts-ignore
const INT1 : Tester = { test: x => x.tokenKind == TokenKind.INT1, type : "INT1" };
//@ts-ignore
const INT2 : Tester = { test: x => x.tokenKind == TokenKind.INT2, type : "INT2" };
//@ts-ignore
const INT3 : Tester = { test: x => x.tokenKind == TokenKind.INT3, type : "INT3" };
//@ts-ignore
const INT4 : Tester = { test: x => x.tokenKind == TokenKind.INT4, type : "INT4" };
//@ts-ignore
const INT8 : Tester = { test: x => x.tokenKind == TokenKind.INT8, type : "INT8" };
//@ts-ignore
const INTEGER : Tester = { test: x => x.tokenKind == TokenKind.INTEGER, type : "INTEGER" };
//@ts-ignore
const INTERVAL : Tester = { test: x => x.tokenKind == TokenKind.INTERVAL, type : "INTERVAL" };
//@ts-ignore
const INTO : Tester = { test: x => x.tokenKind == TokenKind.INTO, type : "INTO" };
//@ts-ignore
const IO_AFTER_GTIDS : Tester = { test: x => x.tokenKind == TokenKind.IO_AFTER_GTIDS, type : "IO_AFTER_GTIDS" };
//@ts-ignore
const IO_BEFORE_GTIDS : Tester = { test: x => x.tokenKind == TokenKind.IO_BEFORE_GTIDS, type : "IO_BEFORE_GTIDS" };
//@ts-ignore
const IS : Tester = { test: x => x.tokenKind == TokenKind.IS, type : "IS" };
//@ts-ignore
const ITERATE : Tester = { test: x => x.tokenKind == TokenKind.ITERATE, type : "ITERATE" };
//@ts-ignore
const JOIN : Tester = { test: x => x.tokenKind == TokenKind.JOIN, type : "JOIN" };
//@ts-ignore
const KEY : Tester = { test: x => x.tokenKind == TokenKind.KEY, type : "KEY" };
//@ts-ignore
const KEYS : Tester = { test: x => x.tokenKind == TokenKind.KEYS, type : "KEYS" };
//@ts-ignore
const KILL : Tester = { test: x => x.tokenKind == TokenKind.KILL, type : "KILL" };
//@ts-ignore
const LEADING : Tester = { test: x => x.tokenKind == TokenKind.LEADING, type : "LEADING" };
//@ts-ignore
const LEAVE : Tester = { test: x => x.tokenKind == TokenKind.LEAVE, type : "LEAVE" };
//@ts-ignore
const LEFT : Tester = { test: x => x.tokenKind == TokenKind.LEFT, type : "LEFT" };
//@ts-ignore
const LIKE : Tester = { test: x => x.tokenKind == TokenKind.LIKE, type : "LIKE" };
//@ts-ignore
const LIMIT : Tester = { test: x => x.tokenKind == TokenKind.LIMIT, type : "LIMIT" };
//@ts-ignore
const LINEAR : Tester = { test: x => x.tokenKind == TokenKind.LINEAR, type : "LINEAR" };
//@ts-ignore
const LINES : Tester = { test: x => x.tokenKind == TokenKind.LINES, type : "LINES" };
//@ts-ignore
const LOAD : Tester = { test: x => x.tokenKind == TokenKind.LOAD, type : "LOAD" };
//@ts-ignore
const LOCALTIME : Tester = { test: x => x.tokenKind == TokenKind.LOCALTIME, type : "LOCALTIME" };
//@ts-ignore
const LOCALTIMESTAMP : Tester = { test: x => x.tokenKind == TokenKind.LOCALTIMESTAMP, type : "LOCALTIMESTAMP" };
//@ts-ignore
const LOCK : Tester = { test: x => x.tokenKind == TokenKind.LOCK, type : "LOCK" };
//@ts-ignore
const LONG : Tester = { test: x => x.tokenKind == TokenKind.LONG, type : "LONG" };
//@ts-ignore
const LONGBLOB : Tester = { test: x => x.tokenKind == TokenKind.LONGBLOB, type : "LONGBLOB" };
//@ts-ignore
const LONGTEXT : Tester = { test: x => x.tokenKind == TokenKind.LONGTEXT, type : "LONGTEXT" };
//@ts-ignore
const LOOP : Tester = { test: x => x.tokenKind == TokenKind.LOOP, type : "LOOP" };
//@ts-ignore
const LOW_PRIORITY : Tester = { test: x => x.tokenKind == TokenKind.LOW_PRIORITY, type : "LOW_PRIORITY" };
//@ts-ignore
const MASTER_BIND : Tester = { test: x => x.tokenKind == TokenKind.MASTER_BIND, type : "MASTER_BIND" };
//@ts-ignore
const MASTER_SSL_VERIFY_SERVER_CERT : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_VERIFY_SERVER_CERT, type : "MASTER_SSL_VERIFY_SERVER_CERT" };
//@ts-ignore
const MATCH : Tester = { test: x => x.tokenKind == TokenKind.MATCH, type : "MATCH" };
//@ts-ignore
const MAXVALUE : Tester = { test: x => x.tokenKind == TokenKind.MAXVALUE, type : "MAXVALUE" };
//@ts-ignore
const MEDIUMBLOB : Tester = { test: x => x.tokenKind == TokenKind.MEDIUMBLOB, type : "MEDIUMBLOB" };
//@ts-ignore
const MEDIUMINT : Tester = { test: x => x.tokenKind == TokenKind.MEDIUMINT, type : "MEDIUMINT" };
//@ts-ignore
const MEDIUMTEXT : Tester = { test: x => x.tokenKind == TokenKind.MEDIUMTEXT, type : "MEDIUMTEXT" };
//@ts-ignore
const MIDDLEINT : Tester = { test: x => x.tokenKind == TokenKind.MIDDLEINT, type : "MIDDLEINT" };
//@ts-ignore
const MINUTE_MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.MINUTE_MICROSECOND, type : "MINUTE_MICROSECOND" };
//@ts-ignore
const MINUTE_SECOND : Tester = { test: x => x.tokenKind == TokenKind.MINUTE_SECOND, type : "MINUTE_SECOND" };
//@ts-ignore
const MOD : Tester = { test: x => x.tokenKind == TokenKind.MOD, type : "MOD" };
//@ts-ignore
const MODIFIES : Tester = { test: x => x.tokenKind == TokenKind.MODIFIES, type : "MODIFIES" };
//@ts-ignore
const NATURAL : Tester = { test: x => x.tokenKind == TokenKind.NATURAL, type : "NATURAL" };
//@ts-ignore
const NOT : Tester = { test: x => x.tokenKind == TokenKind.NOT, type : "NOT" };
//@ts-ignore
const NO_WRITE_TO_BINLOG : Tester = { test: x => x.tokenKind == TokenKind.NO_WRITE_TO_BINLOG, type : "NO_WRITE_TO_BINLOG" };
//@ts-ignore
const NULL : Tester = { test: x => x.tokenKind == TokenKind.NULL, type : "NULL" };
//@ts-ignore
const NUMERIC : Tester = { test: x => x.tokenKind == TokenKind.NUMERIC, type : "NUMERIC" };
//@ts-ignore
const ON : Tester = { test: x => x.tokenKind == TokenKind.ON, type : "ON" };
//@ts-ignore
const OPTIMIZE : Tester = { test: x => x.tokenKind == TokenKind.OPTIMIZE, type : "OPTIMIZE" };
//@ts-ignore
const OPTIMIZER_COSTS : Tester = { test: x => x.tokenKind == TokenKind.OPTIMIZER_COSTS, type : "OPTIMIZER_COSTS" };
//@ts-ignore
const OPTION : Tester = { test: x => x.tokenKind == TokenKind.OPTION, type : "OPTION" };
//@ts-ignore
const OPTIONALLY : Tester = { test: x => x.tokenKind == TokenKind.OPTIONALLY, type : "OPTIONALLY" };
//@ts-ignore
const OR : Tester = { test: x => x.tokenKind == TokenKind.OR, type : "OR" };
//@ts-ignore
const ORDER : Tester = { test: x => x.tokenKind == TokenKind.ORDER, type : "ORDER" };
//@ts-ignore
const OUT : Tester = { test: x => x.tokenKind == TokenKind.OUT, type : "OUT" };
//@ts-ignore
const OUTER : Tester = { test: x => x.tokenKind == TokenKind.OUTER, type : "OUTER" };
//@ts-ignore
const OUTFILE : Tester = { test: x => x.tokenKind == TokenKind.OUTFILE, type : "OUTFILE" };
//@ts-ignore
const PARTITION : Tester = { test: x => x.tokenKind == TokenKind.PARTITION, type : "PARTITION" };
//@ts-ignore
const PRECISION : Tester = { test: x => x.tokenKind == TokenKind.PRECISION, type : "PRECISION" };
//@ts-ignore
const PRIMARY : Tester = { test: x => x.tokenKind == TokenKind.PRIMARY, type : "PRIMARY" };
//@ts-ignore
const PROCEDURE : Tester = { test: x => x.tokenKind == TokenKind.PROCEDURE, type : "PROCEDURE" };
//@ts-ignore
const PURGE : Tester = { test: x => x.tokenKind == TokenKind.PURGE, type : "PURGE" };
//@ts-ignore
const RANGE : Tester = { test: x => x.tokenKind == TokenKind.RANGE, type : "RANGE" };
//@ts-ignore
const READ : Tester = { test: x => x.tokenKind == TokenKind.READ, type : "READ" };
//@ts-ignore
const READS : Tester = { test: x => x.tokenKind == TokenKind.READS, type : "READS" };
//@ts-ignore
const READ_WRITE : Tester = { test: x => x.tokenKind == TokenKind.READ_WRITE, type : "READ_WRITE" };
//@ts-ignore
const REAL : Tester = { test: x => x.tokenKind == TokenKind.REAL, type : "REAL" };
//@ts-ignore
const REFERENCES : Tester = { test: x => x.tokenKind == TokenKind.REFERENCES, type : "REFERENCES" };
//@ts-ignore
const REGEXP : Tester = { test: x => x.tokenKind == TokenKind.REGEXP, type : "REGEXP" };
//@ts-ignore
const RELEASE : Tester = { test: x => x.tokenKind == TokenKind.RELEASE, type : "RELEASE" };
//@ts-ignore
const RENAME : Tester = { test: x => x.tokenKind == TokenKind.RENAME, type : "RENAME" };
//@ts-ignore
const REPEAT : Tester = { test: x => x.tokenKind == TokenKind.REPEAT, type : "REPEAT" };
//@ts-ignore
const REPLACE : Tester = { test: x => x.tokenKind == TokenKind.REPLACE, type : "REPLACE" };
//@ts-ignore
const REQUIRE : Tester = { test: x => x.tokenKind == TokenKind.REQUIRE, type : "REQUIRE" };
//@ts-ignore
const RESIGNAL : Tester = { test: x => x.tokenKind == TokenKind.RESIGNAL, type : "RESIGNAL" };
//@ts-ignore
const RESTRICT : Tester = { test: x => x.tokenKind == TokenKind.RESTRICT, type : "RESTRICT" };
//@ts-ignore
const RETURN : Tester = { test: x => x.tokenKind == TokenKind.RETURN, type : "RETURN" };
//@ts-ignore
const REVOKE : Tester = { test: x => x.tokenKind == TokenKind.REVOKE, type : "REVOKE" };
//@ts-ignore
const RIGHT : Tester = { test: x => x.tokenKind == TokenKind.RIGHT, type : "RIGHT" };
//@ts-ignore
const RLIKE : Tester = { test: x => x.tokenKind == TokenKind.RLIKE, type : "RLIKE" };
//@ts-ignore
const SCHEMA : Tester = { test: x => x.tokenKind == TokenKind.SCHEMA, type : "SCHEMA" };
//@ts-ignore
const SCHEMAS : Tester = { test: x => x.tokenKind == TokenKind.SCHEMAS, type : "SCHEMAS" };
//@ts-ignore
const SECOND_MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.SECOND_MICROSECOND, type : "SECOND_MICROSECOND" };
//@ts-ignore
const SELECT : Tester = { test: x => x.tokenKind == TokenKind.SELECT, type : "SELECT" };
//@ts-ignore
const SENSITIVE : Tester = { test: x => x.tokenKind == TokenKind.SENSITIVE, type : "SENSITIVE" };
//@ts-ignore
const SEPARATOR : Tester = { test: x => x.tokenKind == TokenKind.SEPARATOR, type : "SEPARATOR" };
//@ts-ignore
const SET : Tester = { test: x => x.tokenKind == TokenKind.SET, type : "SET" };
//@ts-ignore
const SHOW : Tester = { test: x => x.tokenKind == TokenKind.SHOW, type : "SHOW" };
//@ts-ignore
const SIGNAL : Tester = { test: x => x.tokenKind == TokenKind.SIGNAL, type : "SIGNAL" };
//@ts-ignore
const SMALLINT : Tester = { test: x => x.tokenKind == TokenKind.SMALLINT, type : "SMALLINT" };
//@ts-ignore
const SPATIAL : Tester = { test: x => x.tokenKind == TokenKind.SPATIAL, type : "SPATIAL" };
//@ts-ignore
const SPECIFIC : Tester = { test: x => x.tokenKind == TokenKind.SPECIFIC, type : "SPECIFIC" };
//@ts-ignore
const SQL : Tester = { test: x => x.tokenKind == TokenKind.SQL, type : "SQL" };
//@ts-ignore
const SQLEXCEPTION : Tester = { test: x => x.tokenKind == TokenKind.SQLEXCEPTION, type : "SQLEXCEPTION" };
//@ts-ignore
const SQLSTATE : Tester = { test: x => x.tokenKind == TokenKind.SQLSTATE, type : "SQLSTATE" };
//@ts-ignore
const SQLWARNING : Tester = { test: x => x.tokenKind == TokenKind.SQLWARNING, type : "SQLWARNING" };
//@ts-ignore
const SQL_BIG_RESULT : Tester = { test: x => x.tokenKind == TokenKind.SQL_BIG_RESULT, type : "SQL_BIG_RESULT" };
//@ts-ignore
const SQL_CALC_FOUND_ROWS : Tester = { test: x => x.tokenKind == TokenKind.SQL_CALC_FOUND_ROWS, type : "SQL_CALC_FOUND_ROWS" };
//@ts-ignore
const SQL_SMALL_RESULT : Tester = { test: x => x.tokenKind == TokenKind.SQL_SMALL_RESULT, type : "SQL_SMALL_RESULT" };
//@ts-ignore
const SSL : Tester = { test: x => x.tokenKind == TokenKind.SSL, type : "SSL" };
//@ts-ignore
const STARTING : Tester = { test: x => x.tokenKind == TokenKind.STARTING, type : "STARTING" };
//@ts-ignore
const STORED : Tester = { test: x => x.tokenKind == TokenKind.STORED, type : "STORED" };
//@ts-ignore
const STRAIGHT_JOIN : Tester = { test: x => x.tokenKind == TokenKind.STRAIGHT_JOIN, type : "STRAIGHT_JOIN" };
//@ts-ignore
const TABLE : Tester = { test: x => x.tokenKind == TokenKind.TABLE, type : "TABLE" };
//@ts-ignore
const TERMINATED : Tester = { test: x => x.tokenKind == TokenKind.TERMINATED, type : "TERMINATED" };
//@ts-ignore
const THEN : Tester = { test: x => x.tokenKind == TokenKind.THEN, type : "THEN" };
//@ts-ignore
const TINYBLOB : Tester = { test: x => x.tokenKind == TokenKind.TINYBLOB, type : "TINYBLOB" };
//@ts-ignore
const TINYINT : Tester = { test: x => x.tokenKind == TokenKind.TINYINT, type : "TINYINT" };
//@ts-ignore
const TINYTEXT : Tester = { test: x => x.tokenKind == TokenKind.TINYTEXT, type : "TINYTEXT" };
//@ts-ignore
const TO : Tester = { test: x => x.tokenKind == TokenKind.TO, type : "TO" };
//@ts-ignore
const TRAILING : Tester = { test: x => x.tokenKind == TokenKind.TRAILING, type : "TRAILING" };
//@ts-ignore
const TRIGGER : Tester = { test: x => x.tokenKind == TokenKind.TRIGGER, type : "TRIGGER" };
//@ts-ignore
const TRUE : Tester = { test: x => x.tokenKind == TokenKind.TRUE, type : "TRUE" };
//@ts-ignore
const UNDO : Tester = { test: x => x.tokenKind == TokenKind.UNDO, type : "UNDO" };
//@ts-ignore
const UNION : Tester = { test: x => x.tokenKind == TokenKind.UNION, type : "UNION" };
//@ts-ignore
const UNIQUE : Tester = { test: x => x.tokenKind == TokenKind.UNIQUE, type : "UNIQUE" };
//@ts-ignore
const UNLOCK : Tester = { test: x => x.tokenKind == TokenKind.UNLOCK, type : "UNLOCK" };
//@ts-ignore
const UNSIGNED : Tester = { test: x => x.tokenKind == TokenKind.UNSIGNED, type : "UNSIGNED" };
//@ts-ignore
const UPDATE : Tester = { test: x => x.tokenKind == TokenKind.UPDATE, type : "UPDATE" };
//@ts-ignore
const USAGE : Tester = { test: x => x.tokenKind == TokenKind.USAGE, type : "USAGE" };
//@ts-ignore
const USE : Tester = { test: x => x.tokenKind == TokenKind.USE, type : "USE" };
//@ts-ignore
const USING : Tester = { test: x => x.tokenKind == TokenKind.USING, type : "USING" };
//@ts-ignore
const UTC_DATE : Tester = { test: x => x.tokenKind == TokenKind.UTC_DATE, type : "UTC_DATE" };
//@ts-ignore
const UTC_TIME : Tester = { test: x => x.tokenKind == TokenKind.UTC_TIME, type : "UTC_TIME" };
//@ts-ignore
const UTC_TIMESTAMP : Tester = { test: x => x.tokenKind == TokenKind.UTC_TIMESTAMP, type : "UTC_TIMESTAMP" };
//@ts-ignore
const VALUES : Tester = { test: x => x.tokenKind == TokenKind.VALUES, type : "VALUES" };
//@ts-ignore
const VARBINARY : Tester = { test: x => x.tokenKind == TokenKind.VARBINARY, type : "VARBINARY" };
//@ts-ignore
const VARCHAR : Tester = { test: x => x.tokenKind == TokenKind.VARCHAR, type : "VARCHAR" };
//@ts-ignore
const VARCHARACTER : Tester = { test: x => x.tokenKind == TokenKind.VARCHARACTER, type : "VARCHARACTER" };
//@ts-ignore
const VARYING : Tester = { test: x => x.tokenKind == TokenKind.VARYING, type : "VARYING" };
//@ts-ignore
const VIRTUAL : Tester = { test: x => x.tokenKind == TokenKind.VIRTUAL, type : "VIRTUAL" };
//@ts-ignore
const WHEN : Tester = { test: x => x.tokenKind == TokenKind.WHEN, type : "WHEN" };
//@ts-ignore
const WHERE : Tester = { test: x => x.tokenKind == TokenKind.WHERE, type : "WHERE" };
//@ts-ignore
const WHILE : Tester = { test: x => x.tokenKind == TokenKind.WHILE, type : "WHILE" };
//@ts-ignore
const WITH : Tester = { test: x => x.tokenKind == TokenKind.WITH, type : "WITH" };
//@ts-ignore
const WRITE : Tester = { test: x => x.tokenKind == TokenKind.WRITE, type : "WRITE" };
//@ts-ignore
const XOR : Tester = { test: x => x.tokenKind == TokenKind.XOR, type : "XOR" };
//@ts-ignore
const YEAR_MONTH : Tester = { test: x => x.tokenKind == TokenKind.YEAR_MONTH, type : "YEAR_MONTH" };
//@ts-ignore
const ZEROFILL : Tester = { test: x => x.tokenKind == TokenKind.ZEROFILL, type : "ZEROFILL" };
//@ts-ignore
const END_OF_RESERVED_KEYWORD : Tester = { test: x => x.tokenKind == TokenKind.END_OF_RESERVED_KEYWORD, type : "END_OF_RESERVED_KEYWORD" };
//@ts-ignore
const ACCOUNT : Tester = { test: x => x.tokenKind == TokenKind.ACCOUNT, type : "ACCOUNT" };
//@ts-ignore
const ACTION : Tester = { test: x => x.tokenKind == TokenKind.ACTION, type : "ACTION" };
//@ts-ignore
const AFTER : Tester = { test: x => x.tokenKind == TokenKind.AFTER, type : "AFTER" };
//@ts-ignore
const AGAINST : Tester = { test: x => x.tokenKind == TokenKind.AGAINST, type : "AGAINST" };
//@ts-ignore
const AGGREGATE : Tester = { test: x => x.tokenKind == TokenKind.AGGREGATE, type : "AGGREGATE" };
//@ts-ignore
const ALGORITHM : Tester = { test: x => x.tokenKind == TokenKind.ALGORITHM, type : "ALGORITHM" };
//@ts-ignore
const ALWAYS : Tester = { test: x => x.tokenKind == TokenKind.ALWAYS, type : "ALWAYS" };
//@ts-ignore
const ANALYSE : Tester = { test: x => x.tokenKind == TokenKind.ANALYSE, type : "ANALYSE" };
//@ts-ignore
const ANY : Tester = { test: x => x.tokenKind == TokenKind.ANY, type : "ANY" };
//@ts-ignore
const ASCII : Tester = { test: x => x.tokenKind == TokenKind.ASCII, type : "ASCII" };
//@ts-ignore
const AT : Tester = { test: x => x.tokenKind == TokenKind.AT, type : "AT" };
//@ts-ignore
const AUTOEXTEND_SIZE : Tester = { test: x => x.tokenKind == TokenKind.AUTOEXTEND_SIZE, type : "AUTOEXTEND_SIZE" };
//@ts-ignore
const AUTO_INCREMENT : Tester = { test: x => x.tokenKind == TokenKind.AUTO_INCREMENT, type : "AUTO_INCREMENT" };
//@ts-ignore
const AVG : Tester = { test: x => x.tokenKind == TokenKind.AVG, type : "AVG" };
//@ts-ignore
const AVG_ROW_LENGTH : Tester = { test: x => x.tokenKind == TokenKind.AVG_ROW_LENGTH, type : "AVG_ROW_LENGTH" };
//@ts-ignore
const BACKUP : Tester = { test: x => x.tokenKind == TokenKind.BACKUP, type : "BACKUP" };
//@ts-ignore
const BEGIN : Tester = { test: x => x.tokenKind == TokenKind.BEGIN, type : "BEGIN" };
//@ts-ignore
const BINLOG : Tester = { test: x => x.tokenKind == TokenKind.BINLOG, type : "BINLOG" };
//@ts-ignore
const BIT : Tester = { test: x => x.tokenKind == TokenKind.BIT, type : "BIT" };
//@ts-ignore
const BLOCK : Tester = { test: x => x.tokenKind == TokenKind.BLOCK, type : "BLOCK" };
//@ts-ignore
const BOOL : Tester = { test: x => x.tokenKind == TokenKind.BOOL, type : "BOOL" };
//@ts-ignore
const BOOLEAN : Tester = { test: x => x.tokenKind == TokenKind.BOOLEAN, type : "BOOLEAN" };
//@ts-ignore
const BTREE : Tester = { test: x => x.tokenKind == TokenKind.BTREE, type : "BTREE" };
//@ts-ignore
const BYTE : Tester = { test: x => x.tokenKind == TokenKind.BYTE, type : "BYTE" };
//@ts-ignore
const CACHE : Tester = { test: x => x.tokenKind == TokenKind.CACHE, type : "CACHE" };
//@ts-ignore
const CASCADED : Tester = { test: x => x.tokenKind == TokenKind.CASCADED, type : "CASCADED" };
//@ts-ignore
const CATALOG_NAME : Tester = { test: x => x.tokenKind == TokenKind.CATALOG_NAME, type : "CATALOG_NAME" };
//@ts-ignore
const CHAIN : Tester = { test: x => x.tokenKind == TokenKind.CHAIN, type : "CHAIN" };
//@ts-ignore
const CHANGED : Tester = { test: x => x.tokenKind == TokenKind.CHANGED, type : "CHANGED" };
//@ts-ignore
const CHANNEL : Tester = { test: x => x.tokenKind == TokenKind.CHANNEL, type : "CHANNEL" };
//@ts-ignore
const CHARSET : Tester = { test: x => x.tokenKind == TokenKind.CHARSET, type : "CHARSET" };
//@ts-ignore
const CHECKSUM : Tester = { test: x => x.tokenKind == TokenKind.CHECKSUM, type : "CHECKSUM" };
//@ts-ignore
const CIPHER : Tester = { test: x => x.tokenKind == TokenKind.CIPHER, type : "CIPHER" };
//@ts-ignore
const CLASS_ORIGIN : Tester = { test: x => x.tokenKind == TokenKind.CLASS_ORIGIN, type : "CLASS_ORIGIN" };
//@ts-ignore
const CLIENT : Tester = { test: x => x.tokenKind == TokenKind.CLIENT, type : "CLIENT" };
//@ts-ignore
const CLOSE : Tester = { test: x => x.tokenKind == TokenKind.CLOSE, type : "CLOSE" };
//@ts-ignore
const COALESCE : Tester = { test: x => x.tokenKind == TokenKind.COALESCE, type : "COALESCE" };
//@ts-ignore
const CODE : Tester = { test: x => x.tokenKind == TokenKind.CODE, type : "CODE" };
//@ts-ignore
const COLLATION : Tester = { test: x => x.tokenKind == TokenKind.COLLATION, type : "COLLATION" };
//@ts-ignore
const COLUMNS : Tester = { test: x => x.tokenKind == TokenKind.COLUMNS, type : "COLUMNS" };
//@ts-ignore
const COLUMN_FORMAT : Tester = { test: x => x.tokenKind == TokenKind.COLUMN_FORMAT, type : "COLUMN_FORMAT" };
//@ts-ignore
const COLUMN_NAME : Tester = { test: x => x.tokenKind == TokenKind.COLUMN_NAME, type : "COLUMN_NAME" };
//@ts-ignore
const COMMENT : Tester = { test: x => x.tokenKind == TokenKind.COMMENT, type : "COMMENT" };
//@ts-ignore
const COMMIT : Tester = { test: x => x.tokenKind == TokenKind.COMMIT, type : "COMMIT" };
//@ts-ignore
const COMMITTED : Tester = { test: x => x.tokenKind == TokenKind.COMMITTED, type : "COMMITTED" };
//@ts-ignore
const COMPACT : Tester = { test: x => x.tokenKind == TokenKind.COMPACT, type : "COMPACT" };
//@ts-ignore
const COMPLETION : Tester = { test: x => x.tokenKind == TokenKind.COMPLETION, type : "COMPLETION" };
//@ts-ignore
const COMPRESSED : Tester = { test: x => x.tokenKind == TokenKind.COMPRESSED, type : "COMPRESSED" };
//@ts-ignore
const COMPRESSION : Tester = { test: x => x.tokenKind == TokenKind.COMPRESSION, type : "COMPRESSION" };
//@ts-ignore
const CONCURRENT : Tester = { test: x => x.tokenKind == TokenKind.CONCURRENT, type : "CONCURRENT" };
//@ts-ignore
const CONNECTION : Tester = { test: x => x.tokenKind == TokenKind.CONNECTION, type : "CONNECTION" };
//@ts-ignore
const CONSISTENT : Tester = { test: x => x.tokenKind == TokenKind.CONSISTENT, type : "CONSISTENT" };
//@ts-ignore
const CONSTRAINT_CATALOG : Tester = { test: x => x.tokenKind == TokenKind.CONSTRAINT_CATALOG, type : "CONSTRAINT_CATALOG" };
//@ts-ignore
const CONSTRAINT_NAME : Tester = { test: x => x.tokenKind == TokenKind.CONSTRAINT_NAME, type : "CONSTRAINT_NAME" };
//@ts-ignore
const CONSTRAINT_SCHEMA : Tester = { test: x => x.tokenKind == TokenKind.CONSTRAINT_SCHEMA, type : "CONSTRAINT_SCHEMA" };
//@ts-ignore
const CONTAINS : Tester = { test: x => x.tokenKind == TokenKind.CONTAINS, type : "CONTAINS" };
//@ts-ignore
const CONTEXT : Tester = { test: x => x.tokenKind == TokenKind.CONTEXT, type : "CONTEXT" };
//@ts-ignore
const CPU : Tester = { test: x => x.tokenKind == TokenKind.CPU, type : "CPU" };
//@ts-ignore
const CUBE : Tester = { test: x => x.tokenKind == TokenKind.CUBE, type : "CUBE" };
//@ts-ignore
const CURRENT : Tester = { test: x => x.tokenKind == TokenKind.CURRENT, type : "CURRENT" };
//@ts-ignore
const CURSOR_NAME : Tester = { test: x => x.tokenKind == TokenKind.CURSOR_NAME, type : "CURSOR_NAME" };
//@ts-ignore
const DATA : Tester = { test: x => x.tokenKind == TokenKind.DATA, type : "DATA" };
//@ts-ignore
const DATAFILE : Tester = { test: x => x.tokenKind == TokenKind.DATAFILE, type : "DATAFILE" };
//@ts-ignore
const DATE : Tester = { test: x => x.tokenKind == TokenKind.DATE, type : "DATE" };
//@ts-ignore
const DATETIME : Tester = { test: x => x.tokenKind == TokenKind.DATETIME, type : "DATETIME" };
//@ts-ignore
const DAY : Tester = { test: x => x.tokenKind == TokenKind.DAY, type : "DAY" };
//@ts-ignore
const DEALLOCATE : Tester = { test: x => x.tokenKind == TokenKind.DEALLOCATE, type : "DEALLOCATE" };
//@ts-ignore
const DEFAULT_AUTH : Tester = { test: x => x.tokenKind == TokenKind.DEFAULT_AUTH, type : "DEFAULT_AUTH" };
//@ts-ignore
const DEFINER : Tester = { test: x => x.tokenKind == TokenKind.DEFINER, type : "DEFINER" };
//@ts-ignore
const DELAY_KEY_WRITE : Tester = { test: x => x.tokenKind == TokenKind.DELAY_KEY_WRITE, type : "DELAY_KEY_WRITE" };
//@ts-ignore
const DES_KEY_FILE : Tester = { test: x => x.tokenKind == TokenKind.DES_KEY_FILE, type : "DES_KEY_FILE" };
//@ts-ignore
const DIAGNOSTICS : Tester = { test: x => x.tokenKind == TokenKind.DIAGNOSTICS, type : "DIAGNOSTICS" };
//@ts-ignore
const DIRECTORY : Tester = { test: x => x.tokenKind == TokenKind.DIRECTORY, type : "DIRECTORY" };
//@ts-ignore
const DISABLE : Tester = { test: x => x.tokenKind == TokenKind.DISABLE, type : "DISABLE" };
//@ts-ignore
const DISCARD : Tester = { test: x => x.tokenKind == TokenKind.DISCARD, type : "DISCARD" };
//@ts-ignore
const DISK : Tester = { test: x => x.tokenKind == TokenKind.DISK, type : "DISK" };
//@ts-ignore
const DO : Tester = { test: x => x.tokenKind == TokenKind.DO, type : "DO" };
//@ts-ignore
const DUMPFILE : Tester = { test: x => x.tokenKind == TokenKind.DUMPFILE, type : "DUMPFILE" };
//@ts-ignore
const DUPLICATE : Tester = { test: x => x.tokenKind == TokenKind.DUPLICATE, type : "DUPLICATE" };
//@ts-ignore
const DYNAMIC : Tester = { test: x => x.tokenKind == TokenKind.DYNAMIC, type : "DYNAMIC" };
//@ts-ignore
const ENABLE : Tester = { test: x => x.tokenKind == TokenKind.ENABLE, type : "ENABLE" };
//@ts-ignore
const ENCRYPTION : Tester = { test: x => x.tokenKind == TokenKind.ENCRYPTION, type : "ENCRYPTION" };
//@ts-ignore
const END : Tester = { test: x => x.tokenKind == TokenKind.END, type : "END" };
//@ts-ignore
const ENDS : Tester = { test: x => x.tokenKind == TokenKind.ENDS, type : "ENDS" };
//@ts-ignore
const ENGINE : Tester = { test: x => x.tokenKind == TokenKind.ENGINE, type : "ENGINE" };
//@ts-ignore
const ENGINES : Tester = { test: x => x.tokenKind == TokenKind.ENGINES, type : "ENGINES" };
//@ts-ignore
const ENUM : Tester = { test: x => x.tokenKind == TokenKind.ENUM, type : "ENUM" };
//@ts-ignore
const ERROR : Tester = { test: x => x.tokenKind == TokenKind.ERROR, type : "ERROR" };
//@ts-ignore
const ERRORS : Tester = { test: x => x.tokenKind == TokenKind.ERRORS, type : "ERRORS" };
//@ts-ignore
const ESCAPE : Tester = { test: x => x.tokenKind == TokenKind.ESCAPE, type : "ESCAPE" };
//@ts-ignore
const EVENT : Tester = { test: x => x.tokenKind == TokenKind.EVENT, type : "EVENT" };
//@ts-ignore
const EVENTS : Tester = { test: x => x.tokenKind == TokenKind.EVENTS, type : "EVENTS" };
//@ts-ignore
const EVERY : Tester = { test: x => x.tokenKind == TokenKind.EVERY, type : "EVERY" };
//@ts-ignore
const EXCHANGE : Tester = { test: x => x.tokenKind == TokenKind.EXCHANGE, type : "EXCHANGE" };
//@ts-ignore
const EXECUTE : Tester = { test: x => x.tokenKind == TokenKind.EXECUTE, type : "EXECUTE" };
//@ts-ignore
const EXPANSION : Tester = { test: x => x.tokenKind == TokenKind.EXPANSION, type : "EXPANSION" };
//@ts-ignore
const EXPIRE : Tester = { test: x => x.tokenKind == TokenKind.EXPIRE, type : "EXPIRE" };
//@ts-ignore
const EXPORT : Tester = { test: x => x.tokenKind == TokenKind.EXPORT, type : "EXPORT" };
//@ts-ignore
const EXTENDED : Tester = { test: x => x.tokenKind == TokenKind.EXTENDED, type : "EXTENDED" };
//@ts-ignore
const EXTENT_SIZE : Tester = { test: x => x.tokenKind == TokenKind.EXTENT_SIZE, type : "EXTENT_SIZE" };
//@ts-ignore
const FAST : Tester = { test: x => x.tokenKind == TokenKind.FAST, type : "FAST" };
//@ts-ignore
const FAULTS : Tester = { test: x => x.tokenKind == TokenKind.FAULTS, type : "FAULTS" };
//@ts-ignore
const FIELDS : Tester = { test: x => x.tokenKind == TokenKind.FIELDS, type : "FIELDS" };
//@ts-ignore
const FILE : Tester = { test: x => x.tokenKind == TokenKind.FILE, type : "FILE" };
//@ts-ignore
const FILE_BLOCK_SIZE : Tester = { test: x => x.tokenKind == TokenKind.FILE_BLOCK_SIZE, type : "FILE_BLOCK_SIZE" };
//@ts-ignore
const FILTER : Tester = { test: x => x.tokenKind == TokenKind.FILTER, type : "FILTER" };
//@ts-ignore
const FIRST : Tester = { test: x => x.tokenKind == TokenKind.FIRST, type : "FIRST" };
//@ts-ignore
const FIXED : Tester = { test: x => x.tokenKind == TokenKind.FIXED, type : "FIXED" };
//@ts-ignore
const FLUSH : Tester = { test: x => x.tokenKind == TokenKind.FLUSH, type : "FLUSH" };
//@ts-ignore
const FOLLOWS : Tester = { test: x => x.tokenKind == TokenKind.FOLLOWS, type : "FOLLOWS" };
//@ts-ignore
const FORMAT : Tester = { test: x => x.tokenKind == TokenKind.FORMAT, type : "FORMAT" };
//@ts-ignore
const FOUND : Tester = { test: x => x.tokenKind == TokenKind.FOUND, type : "FOUND" };
//@ts-ignore
const FULL : Tester = { test: x => x.tokenKind == TokenKind.FULL, type : "FULL" };
//@ts-ignore
const FUNCTION : Tester = { test: x => x.tokenKind == TokenKind.FUNCTION, type : "FUNCTION" };
//@ts-ignore
const GENERAL : Tester = { test: x => x.tokenKind == TokenKind.GENERAL, type : "GENERAL" };
//@ts-ignore
const GEOMETRY : Tester = { test: x => x.tokenKind == TokenKind.GEOMETRY, type : "GEOMETRY" };
//@ts-ignore
const GEOMETRYCOLLECTION : Tester = { test: x => x.tokenKind == TokenKind.GEOMETRYCOLLECTION, type : "GEOMETRYCOLLECTION" };
//@ts-ignore
const GET_FORMAT : Tester = { test: x => x.tokenKind == TokenKind.GET_FORMAT, type : "GET_FORMAT" };
//@ts-ignore
const GLOBAL : Tester = { test: x => x.tokenKind == TokenKind.GLOBAL, type : "GLOBAL" };
//@ts-ignore
const GRANTS : Tester = { test: x => x.tokenKind == TokenKind.GRANTS, type : "GRANTS" };
//@ts-ignore
const GROUP_REPLICATION : Tester = { test: x => x.tokenKind == TokenKind.GROUP_REPLICATION, type : "GROUP_REPLICATION" };
//@ts-ignore
const HANDLER : Tester = { test: x => x.tokenKind == TokenKind.HANDLER, type : "HANDLER" };
//@ts-ignore
const HASH : Tester = { test: x => x.tokenKind == TokenKind.HASH, type : "HASH" };
//@ts-ignore
const HELP : Tester = { test: x => x.tokenKind == TokenKind.HELP, type : "HELP" };
//@ts-ignore
const HOST : Tester = { test: x => x.tokenKind == TokenKind.HOST, type : "HOST" };
//@ts-ignore
const HOSTS : Tester = { test: x => x.tokenKind == TokenKind.HOSTS, type : "HOSTS" };
//@ts-ignore
const HOUR : Tester = { test: x => x.tokenKind == TokenKind.HOUR, type : "HOUR" };
//@ts-ignore
const IDENTIFIED : Tester = { test: x => x.tokenKind == TokenKind.IDENTIFIED, type : "IDENTIFIED" };
//@ts-ignore
const IGNORE_SERVER_IDS : Tester = { test: x => x.tokenKind == TokenKind.IGNORE_SERVER_IDS, type : "IGNORE_SERVER_IDS" };
//@ts-ignore
const IMPORT : Tester = { test: x => x.tokenKind == TokenKind.IMPORT, type : "IMPORT" };
//@ts-ignore
const INDEXES : Tester = { test: x => x.tokenKind == TokenKind.INDEXES, type : "INDEXES" };
//@ts-ignore
const INITIAL_SIZE : Tester = { test: x => x.tokenKind == TokenKind.INITIAL_SIZE, type : "INITIAL_SIZE" };
//@ts-ignore
const INSERT_METHOD : Tester = { test: x => x.tokenKind == TokenKind.INSERT_METHOD, type : "INSERT_METHOD" };
//@ts-ignore
const INSTALL : Tester = { test: x => x.tokenKind == TokenKind.INSTALL, type : "INSTALL" };
//@ts-ignore
const INSTANCE : Tester = { test: x => x.tokenKind == TokenKind.INSTANCE, type : "INSTANCE" };
//@ts-ignore
const INVOKER : Tester = { test: x => x.tokenKind == TokenKind.INVOKER, type : "INVOKER" };
//@ts-ignore
const IO : Tester = { test: x => x.tokenKind == TokenKind.IO, type : "IO" };
//@ts-ignore
const IO_THREAD : Tester = { test: x => x.tokenKind == TokenKind.IO_THREAD, type : "IO_THREAD" };
//@ts-ignore
const IPC : Tester = { test: x => x.tokenKind == TokenKind.IPC, type : "IPC" };
//@ts-ignore
const ISOLATION : Tester = { test: x => x.tokenKind == TokenKind.ISOLATION, type : "ISOLATION" };
//@ts-ignore
const ISSUER : Tester = { test: x => x.tokenKind == TokenKind.ISSUER, type : "ISSUER" };
//@ts-ignore
const JSON : Tester = { test: x => x.tokenKind == TokenKind.JSON, type : "JSON" };
//@ts-ignore
const KEY_BLOCK_SIZE : Tester = { test: x => x.tokenKind == TokenKind.KEY_BLOCK_SIZE, type : "KEY_BLOCK_SIZE" };
//@ts-ignore
const LANGUAGE : Tester = { test: x => x.tokenKind == TokenKind.LANGUAGE, type : "LANGUAGE" };
//@ts-ignore
const LAST : Tester = { test: x => x.tokenKind == TokenKind.LAST, type : "LAST" };
//@ts-ignore
const LEAVES : Tester = { test: x => x.tokenKind == TokenKind.LEAVES, type : "LEAVES" };
//@ts-ignore
const LESS : Tester = { test: x => x.tokenKind == TokenKind.LESS, type : "LESS" };
//@ts-ignore
const LEVEL : Tester = { test: x => x.tokenKind == TokenKind.LEVEL, type : "LEVEL" };
//@ts-ignore
const LINESTRING : Tester = { test: x => x.tokenKind == TokenKind.LINESTRING, type : "LINESTRING" };
//@ts-ignore
const LIST : Tester = { test: x => x.tokenKind == TokenKind.LIST, type : "LIST" };
//@ts-ignore
const LOCAL : Tester = { test: x => x.tokenKind == TokenKind.LOCAL, type : "LOCAL" };
//@ts-ignore
const LOCKS : Tester = { test: x => x.tokenKind == TokenKind.LOCKS, type : "LOCKS" };
//@ts-ignore
const LOGFILE : Tester = { test: x => x.tokenKind == TokenKind.LOGFILE, type : "LOGFILE" };
//@ts-ignore
const LOGS : Tester = { test: x => x.tokenKind == TokenKind.LOGS, type : "LOGS" };
//@ts-ignore
const MASTER : Tester = { test: x => x.tokenKind == TokenKind.MASTER, type : "MASTER" };
//@ts-ignore
const MASTER_AUTO_POSITION : Tester = { test: x => x.tokenKind == TokenKind.MASTER_AUTO_POSITION, type : "MASTER_AUTO_POSITION" };
//@ts-ignore
const MASTER_CONNECT_RETRY : Tester = { test: x => x.tokenKind == TokenKind.MASTER_CONNECT_RETRY, type : "MASTER_CONNECT_RETRY" };
//@ts-ignore
const MASTER_DELAY : Tester = { test: x => x.tokenKind == TokenKind.MASTER_DELAY, type : "MASTER_DELAY" };
//@ts-ignore
const MASTER_HEARTBEAT_PERIOD : Tester = { test: x => x.tokenKind == TokenKind.MASTER_HEARTBEAT_PERIOD, type : "MASTER_HEARTBEAT_PERIOD" };
//@ts-ignore
const MASTER_HOST : Tester = { test: x => x.tokenKind == TokenKind.MASTER_HOST, type : "MASTER_HOST" };
//@ts-ignore
const MASTER_LOG_FILE : Tester = { test: x => x.tokenKind == TokenKind.MASTER_LOG_FILE, type : "MASTER_LOG_FILE" };
//@ts-ignore
const MASTER_LOG_POS : Tester = { test: x => x.tokenKind == TokenKind.MASTER_LOG_POS, type : "MASTER_LOG_POS" };
//@ts-ignore
const MASTER_PASSWORD : Tester = { test: x => x.tokenKind == TokenKind.MASTER_PASSWORD, type : "MASTER_PASSWORD" };
//@ts-ignore
const MASTER_PORT : Tester = { test: x => x.tokenKind == TokenKind.MASTER_PORT, type : "MASTER_PORT" };
//@ts-ignore
const MASTER_RETRY_COUNT : Tester = { test: x => x.tokenKind == TokenKind.MASTER_RETRY_COUNT, type : "MASTER_RETRY_COUNT" };
//@ts-ignore
const MASTER_SERVER_ID : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SERVER_ID, type : "MASTER_SERVER_ID" };
//@ts-ignore
const MASTER_SSL : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL, type : "MASTER_SSL" };
//@ts-ignore
const MASTER_SSL_CA : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CA, type : "MASTER_SSL_CA" };
//@ts-ignore
const MASTER_SSL_CAPATH : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CAPATH, type : "MASTER_SSL_CAPATH" };
//@ts-ignore
const MASTER_SSL_CERT : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CERT, type : "MASTER_SSL_CERT" };
//@ts-ignore
const MASTER_SSL_CIPHER : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CIPHER, type : "MASTER_SSL_CIPHER" };
//@ts-ignore
const MASTER_SSL_CRL : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CRL, type : "MASTER_SSL_CRL" };
//@ts-ignore
const MASTER_SSL_CRLPATH : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CRLPATH, type : "MASTER_SSL_CRLPATH" };
//@ts-ignore
const MASTER_SSL_KEY : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_KEY, type : "MASTER_SSL_KEY" };
//@ts-ignore
const MASTER_TLS_VERSION : Tester = { test: x => x.tokenKind == TokenKind.MASTER_TLS_VERSION, type : "MASTER_TLS_VERSION" };
//@ts-ignore
const MASTER_USER : Tester = { test: x => x.tokenKind == TokenKind.MASTER_USER, type : "MASTER_USER" };
//@ts-ignore
const MAX_CONNECTIONS_PER_HOUR : Tester = { test: x => x.tokenKind == TokenKind.MAX_CONNECTIONS_PER_HOUR, type : "MAX_CONNECTIONS_PER_HOUR" };
//@ts-ignore
const MAX_QUERIES_PER_HOUR : Tester = { test: x => x.tokenKind == TokenKind.MAX_QUERIES_PER_HOUR, type : "MAX_QUERIES_PER_HOUR" };
//@ts-ignore
const MAX_ROWS : Tester = { test: x => x.tokenKind == TokenKind.MAX_ROWS, type : "MAX_ROWS" };
//@ts-ignore
const MAX_SIZE : Tester = { test: x => x.tokenKind == TokenKind.MAX_SIZE, type : "MAX_SIZE" };
//@ts-ignore
const MAX_STATEMENT_TIME : Tester = { test: x => x.tokenKind == TokenKind.MAX_STATEMENT_TIME, type : "MAX_STATEMENT_TIME" };
//@ts-ignore
const MAX_UPDATES_PER_HOUR : Tester = { test: x => x.tokenKind == TokenKind.MAX_UPDATES_PER_HOUR, type : "MAX_UPDATES_PER_HOUR" };
//@ts-ignore
const MAX_USER_CONNECTIONS : Tester = { test: x => x.tokenKind == TokenKind.MAX_USER_CONNECTIONS, type : "MAX_USER_CONNECTIONS" };
//@ts-ignore
const MEDIUM : Tester = { test: x => x.tokenKind == TokenKind.MEDIUM, type : "MEDIUM" };
//@ts-ignore
const MEMORY : Tester = { test: x => x.tokenKind == TokenKind.MEMORY, type : "MEMORY" };
//@ts-ignore
const MERGE : Tester = { test: x => x.tokenKind == TokenKind.MERGE, type : "MERGE" };
//@ts-ignore
const MESSAGE_TEXT : Tester = { test: x => x.tokenKind == TokenKind.MESSAGE_TEXT, type : "MESSAGE_TEXT" };
//@ts-ignore
const MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.MICROSECOND, type : "MICROSECOND" };
//@ts-ignore
const MIGRATE : Tester = { test: x => x.tokenKind == TokenKind.MIGRATE, type : "MIGRATE" };
//@ts-ignore
const MINUTE : Tester = { test: x => x.tokenKind == TokenKind.MINUTE, type : "MINUTE" };
//@ts-ignore
const MIN_ROWS : Tester = { test: x => x.tokenKind == TokenKind.MIN_ROWS, type : "MIN_ROWS" };
//@ts-ignore
const MODE : Tester = { test: x => x.tokenKind == TokenKind.MODE, type : "MODE" };
//@ts-ignore
const MODIFY : Tester = { test: x => x.tokenKind == TokenKind.MODIFY, type : "MODIFY" };
//@ts-ignore
const MONTH : Tester = { test: x => x.tokenKind == TokenKind.MONTH, type : "MONTH" };
//@ts-ignore
const MULTILINESTRING : Tester = { test: x => x.tokenKind == TokenKind.MULTILINESTRING, type : "MULTILINESTRING" };
//@ts-ignore
const MULTIPOINT : Tester = { test: x => x.tokenKind == TokenKind.MULTIPOINT, type : "MULTIPOINT" };
//@ts-ignore
const MULTIPOLYGON : Tester = { test: x => x.tokenKind == TokenKind.MULTIPOLYGON, type : "MULTIPOLYGON" };
//@ts-ignore
const MUTEX : Tester = { test: x => x.tokenKind == TokenKind.MUTEX, type : "MUTEX" };
//@ts-ignore
const MYSQL_ERRNO : Tester = { test: x => x.tokenKind == TokenKind.MYSQL_ERRNO, type : "MYSQL_ERRNO" };
//@ts-ignore
const NAME : Tester = { test: x => x.tokenKind == TokenKind.NAME, type : "NAME" };
//@ts-ignore
const NAMES : Tester = { test: x => x.tokenKind == TokenKind.NAMES, type : "NAMES" };
//@ts-ignore
const NATIONAL : Tester = { test: x => x.tokenKind == TokenKind.NATIONAL, type : "NATIONAL" };
//@ts-ignore
const NCHAR : Tester = { test: x => x.tokenKind == TokenKind.NCHAR, type : "NCHAR" };
//@ts-ignore
const NDB : Tester = { test: x => x.tokenKind == TokenKind.NDB, type : "NDB" };
//@ts-ignore
const NDBCLUSTER : Tester = { test: x => x.tokenKind == TokenKind.NDBCLUSTER, type : "NDBCLUSTER" };
//@ts-ignore
const NEVER : Tester = { test: x => x.tokenKind == TokenKind.NEVER, type : "NEVER" };
//@ts-ignore
const NEW : Tester = { test: x => x.tokenKind == TokenKind.NEW, type : "NEW" };
//@ts-ignore
const NEXT : Tester = { test: x => x.tokenKind == TokenKind.NEXT, type : "NEXT" };
//@ts-ignore
const NO : Tester = { test: x => x.tokenKind == TokenKind.NO, type : "NO" };
//@ts-ignore
const NODEGROUP : Tester = { test: x => x.tokenKind == TokenKind.NODEGROUP, type : "NODEGROUP" };
//@ts-ignore
const NONBLOCKING : Tester = { test: x => x.tokenKind == TokenKind.NONBLOCKING, type : "NONBLOCKING" };
//@ts-ignore
const NONE : Tester = { test: x => x.tokenKind == TokenKind.NONE, type : "NONE" };
//@ts-ignore
const NO_WAIT : Tester = { test: x => x.tokenKind == TokenKind.NO_WAIT, type : "NO_WAIT" };
//@ts-ignore
const NUMBER : Tester = { test: x => x.tokenKind == TokenKind.NUMBER, type : "NUMBER" };
//@ts-ignore
const NVARCHAR : Tester = { test: x => x.tokenKind == TokenKind.NVARCHAR, type : "NVARCHAR" };
//@ts-ignore
const OFFSET : Tester = { test: x => x.tokenKind == TokenKind.OFFSET, type : "OFFSET" };
//@ts-ignore
const OLD_PASSWORD : Tester = { test: x => x.tokenKind == TokenKind.OLD_PASSWORD, type : "OLD_PASSWORD" };
//@ts-ignore
const ONE : Tester = { test: x => x.tokenKind == TokenKind.ONE, type : "ONE" };
//@ts-ignore
const ONLY : Tester = { test: x => x.tokenKind == TokenKind.ONLY, type : "ONLY" };
//@ts-ignore
const OPEN : Tester = { test: x => x.tokenKind == TokenKind.OPEN, type : "OPEN" };
//@ts-ignore
const OPTIONS : Tester = { test: x => x.tokenKind == TokenKind.OPTIONS, type : "OPTIONS" };
//@ts-ignore
const OWNER : Tester = { test: x => x.tokenKind == TokenKind.OWNER, type : "OWNER" };
//@ts-ignore
const PACK_KEYS : Tester = { test: x => x.tokenKind == TokenKind.PACK_KEYS, type : "PACK_KEYS" };
//@ts-ignore
const PAGE : Tester = { test: x => x.tokenKind == TokenKind.PAGE, type : "PAGE" };
//@ts-ignore
const PARSER : Tester = { test: x => x.tokenKind == TokenKind.PARSER, type : "PARSER" };
//@ts-ignore
const PARSE_GCOL_EXPR : Tester = { test: x => x.tokenKind == TokenKind.PARSE_GCOL_EXPR, type : "PARSE_GCOL_EXPR" };
//@ts-ignore
const PARTIAL : Tester = { test: x => x.tokenKind == TokenKind.PARTIAL, type : "PARTIAL" };
//@ts-ignore
const PARTITIONING : Tester = { test: x => x.tokenKind == TokenKind.PARTITIONING, type : "PARTITIONING" };
//@ts-ignore
const PARTITIONS : Tester = { test: x => x.tokenKind == TokenKind.PARTITIONS, type : "PARTITIONS" };
//@ts-ignore
const PASSWORD : Tester = { test: x => x.tokenKind == TokenKind.PASSWORD, type : "PASSWORD" };
//@ts-ignore
const PHASE : Tester = { test: x => x.tokenKind == TokenKind.PHASE, type : "PHASE" };
//@ts-ignore
const PLUGIN : Tester = { test: x => x.tokenKind == TokenKind.PLUGIN, type : "PLUGIN" };
//@ts-ignore
const PLUGINS : Tester = { test: x => x.tokenKind == TokenKind.PLUGINS, type : "PLUGINS" };
//@ts-ignore
const PLUGIN_DIR : Tester = { test: x => x.tokenKind == TokenKind.PLUGIN_DIR, type : "PLUGIN_DIR" };
//@ts-ignore
const POINT : Tester = { test: x => x.tokenKind == TokenKind.POINT, type : "POINT" };
//@ts-ignore
const POLYGON : Tester = { test: x => x.tokenKind == TokenKind.POLYGON, type : "POLYGON" };
//@ts-ignore
const PORT : Tester = { test: x => x.tokenKind == TokenKind.PORT, type : "PORT" };
//@ts-ignore
const PRECEDES : Tester = { test: x => x.tokenKind == TokenKind.PRECEDES, type : "PRECEDES" };
//@ts-ignore
const PREPARE : Tester = { test: x => x.tokenKind == TokenKind.PREPARE, type : "PREPARE" };
//@ts-ignore
const PRESERVE : Tester = { test: x => x.tokenKind == TokenKind.PRESERVE, type : "PRESERVE" };
//@ts-ignore
const PREV : Tester = { test: x => x.tokenKind == TokenKind.PREV, type : "PREV" };
//@ts-ignore
const PRIVILEGES : Tester = { test: x => x.tokenKind == TokenKind.PRIVILEGES, type : "PRIVILEGES" };
//@ts-ignore
const PROCESSLIST : Tester = { test: x => x.tokenKind == TokenKind.PROCESSLIST, type : "PROCESSLIST" };
//@ts-ignore
const PROFILE : Tester = { test: x => x.tokenKind == TokenKind.PROFILE, type : "PROFILE" };
//@ts-ignore
const PROFILES : Tester = { test: x => x.tokenKind == TokenKind.PROFILES, type : "PROFILES" };
//@ts-ignore
const PROXY : Tester = { test: x => x.tokenKind == TokenKind.PROXY, type : "PROXY" };
//@ts-ignore
const QUARTER : Tester = { test: x => x.tokenKind == TokenKind.QUARTER, type : "QUARTER" };
//@ts-ignore
const QUERY : Tester = { test: x => x.tokenKind == TokenKind.QUERY, type : "QUERY" };
//@ts-ignore
const QUICK : Tester = { test: x => x.tokenKind == TokenKind.QUICK, type : "QUICK" };
//@ts-ignore
const READ_ONLY : Tester = { test: x => x.tokenKind == TokenKind.READ_ONLY, type : "READ_ONLY" };
//@ts-ignore
const REBUILD : Tester = { test: x => x.tokenKind == TokenKind.REBUILD, type : "REBUILD" };
//@ts-ignore
const RECOVER : Tester = { test: x => x.tokenKind == TokenKind.RECOVER, type : "RECOVER" };
//@ts-ignore
const REDOFILE : Tester = { test: x => x.tokenKind == TokenKind.REDOFILE, type : "REDOFILE" };
//@ts-ignore
const REDO_BUFFER_SIZE : Tester = { test: x => x.tokenKind == TokenKind.REDO_BUFFER_SIZE, type : "REDO_BUFFER_SIZE" };
//@ts-ignore
const REDUNDANT : Tester = { test: x => x.tokenKind == TokenKind.REDUNDANT, type : "REDUNDANT" };
//@ts-ignore
const RELAY : Tester = { test: x => x.tokenKind == TokenKind.RELAY, type : "RELAY" };
//@ts-ignore
const RELAYLOG : Tester = { test: x => x.tokenKind == TokenKind.RELAYLOG, type : "RELAYLOG" };
//@ts-ignore
const RELAY_LOG_FILE : Tester = { test: x => x.tokenKind == TokenKind.RELAY_LOG_FILE, type : "RELAY_LOG_FILE" };
//@ts-ignore
const RELAY_LOG_POS : Tester = { test: x => x.tokenKind == TokenKind.RELAY_LOG_POS, type : "RELAY_LOG_POS" };
//@ts-ignore
const RELAY_THREAD : Tester = { test: x => x.tokenKind == TokenKind.RELAY_THREAD, type : "RELAY_THREAD" };
//@ts-ignore
const RELOAD : Tester = { test: x => x.tokenKind == TokenKind.RELOAD, type : "RELOAD" };
//@ts-ignore
const REMOVE : Tester = { test: x => x.tokenKind == TokenKind.REMOVE, type : "REMOVE" };
//@ts-ignore
const REORGANIZE : Tester = { test: x => x.tokenKind == TokenKind.REORGANIZE, type : "REORGANIZE" };
//@ts-ignore
const REPAIR : Tester = { test: x => x.tokenKind == TokenKind.REPAIR, type : "REPAIR" };
//@ts-ignore
const REPEATABLE : Tester = { test: x => x.tokenKind == TokenKind.REPEATABLE, type : "REPEATABLE" };
//@ts-ignore
const REPLICATE_DO_DB : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_DO_DB, type : "REPLICATE_DO_DB" };
//@ts-ignore
const REPLICATE_DO_TABLE : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_DO_TABLE, type : "REPLICATE_DO_TABLE" };
//@ts-ignore
const REPLICATE_IGNORE_DB : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_IGNORE_DB, type : "REPLICATE_IGNORE_DB" };
//@ts-ignore
const REPLICATE_IGNORE_TABLE : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_IGNORE_TABLE, type : "REPLICATE_IGNORE_TABLE" };
//@ts-ignore
const REPLICATE_REWRITE_DB : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_REWRITE_DB, type : "REPLICATE_REWRITE_DB" };
//@ts-ignore
const REPLICATE_WILD_DO_TABLE : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_WILD_DO_TABLE, type : "REPLICATE_WILD_DO_TABLE" };
//@ts-ignore
const REPLICATE_WILD_IGNORE_TABLE : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_WILD_IGNORE_TABLE, type : "REPLICATE_WILD_IGNORE_TABLE" };
//@ts-ignore
const REPLICATION : Tester = { test: x => x.tokenKind == TokenKind.REPLICATION, type : "REPLICATION" };
//@ts-ignore
const RESET : Tester = { test: x => x.tokenKind == TokenKind.RESET, type : "RESET" };
//@ts-ignore
const RESTORE : Tester = { test: x => x.tokenKind == TokenKind.RESTORE, type : "RESTORE" };
//@ts-ignore
const RESUME : Tester = { test: x => x.tokenKind == TokenKind.RESUME, type : "RESUME" };
//@ts-ignore
const RETURNED_SQLSTATE : Tester = { test: x => x.tokenKind == TokenKind.RETURNED_SQLSTATE, type : "RETURNED_SQLSTATE" };
//@ts-ignore
const RETURNS : Tester = { test: x => x.tokenKind == TokenKind.RETURNS, type : "RETURNS" };
//@ts-ignore
const REVERSE : Tester = { test: x => x.tokenKind == TokenKind.REVERSE, type : "REVERSE" };
//@ts-ignore
const ROLLBACK : Tester = { test: x => x.tokenKind == TokenKind.ROLLBACK, type : "ROLLBACK" };
//@ts-ignore
const ROLLUP : Tester = { test: x => x.tokenKind == TokenKind.ROLLUP, type : "ROLLUP" };
//@ts-ignore
const ROTATE : Tester = { test: x => x.tokenKind == TokenKind.ROTATE, type : "ROTATE" };
//@ts-ignore
const ROUTINE : Tester = { test: x => x.tokenKind == TokenKind.ROUTINE, type : "ROUTINE" };
//@ts-ignore
const ROW : Tester = { test: x => x.tokenKind == TokenKind.ROW, type : "ROW" };
//@ts-ignore
const ROWS : Tester = { test: x => x.tokenKind == TokenKind.ROWS, type : "ROWS" };
//@ts-ignore
const ROW_COUNT : Tester = { test: x => x.tokenKind == TokenKind.ROW_COUNT, type : "ROW_COUNT" };
//@ts-ignore
const ROW_FORMAT : Tester = { test: x => x.tokenKind == TokenKind.ROW_FORMAT, type : "ROW_FORMAT" };
//@ts-ignore
const RTREE : Tester = { test: x => x.tokenKind == TokenKind.RTREE, type : "RTREE" };
//@ts-ignore
const SAVEPOINT : Tester = { test: x => x.tokenKind == TokenKind.SAVEPOINT, type : "SAVEPOINT" };
//@ts-ignore
const SCHEDULE : Tester = { test: x => x.tokenKind == TokenKind.SCHEDULE, type : "SCHEDULE" };
//@ts-ignore
const SCHEMA_NAME : Tester = { test: x => x.tokenKind == TokenKind.SCHEMA_NAME, type : "SCHEMA_NAME" };
//@ts-ignore
const SECOND : Tester = { test: x => x.tokenKind == TokenKind.SECOND, type : "SECOND" };
//@ts-ignore
const SECURITY : Tester = { test: x => x.tokenKind == TokenKind.SECURITY, type : "SECURITY" };
//@ts-ignore
const SERIAL : Tester = { test: x => x.tokenKind == TokenKind.SERIAL, type : "SERIAL" };
//@ts-ignore
const SERIALIZABLE : Tester = { test: x => x.tokenKind == TokenKind.SERIALIZABLE, type : "SERIALIZABLE" };
//@ts-ignore
const SERVER : Tester = { test: x => x.tokenKind == TokenKind.SERVER, type : "SERVER" };
//@ts-ignore
const SESSION : Tester = { test: x => x.tokenKind == TokenKind.SESSION, type : "SESSION" };
//@ts-ignore
const SHARE : Tester = { test: x => x.tokenKind == TokenKind.SHARE, type : "SHARE" };
//@ts-ignore
const SHUTDOWN : Tester = { test: x => x.tokenKind == TokenKind.SHUTDOWN, type : "SHUTDOWN" };
//@ts-ignore
const SIGNED : Tester = { test: x => x.tokenKind == TokenKind.SIGNED, type : "SIGNED" };
//@ts-ignore
const SIMPLE : Tester = { test: x => x.tokenKind == TokenKind.SIMPLE, type : "SIMPLE" };
//@ts-ignore
const SLAVE : Tester = { test: x => x.tokenKind == TokenKind.SLAVE, type : "SLAVE" };
//@ts-ignore
const SLOW : Tester = { test: x => x.tokenKind == TokenKind.SLOW, type : "SLOW" };
//@ts-ignore
const SNAPSHOT : Tester = { test: x => x.tokenKind == TokenKind.SNAPSHOT, type : "SNAPSHOT" };
//@ts-ignore
const SOCKET : Tester = { test: x => x.tokenKind == TokenKind.SOCKET, type : "SOCKET" };
//@ts-ignore
const SOME : Tester = { test: x => x.tokenKind == TokenKind.SOME, type : "SOME" };
//@ts-ignore
const SONAME : Tester = { test: x => x.tokenKind == TokenKind.SONAME, type : "SONAME" };
//@ts-ignore
const SOUNDS : Tester = { test: x => x.tokenKind == TokenKind.SOUNDS, type : "SOUNDS" };
//@ts-ignore
const SOURCE : Tester = { test: x => x.tokenKind == TokenKind.SOURCE, type : "SOURCE" };
//@ts-ignore
const SQL_AFTER_GTIDS : Tester = { test: x => x.tokenKind == TokenKind.SQL_AFTER_GTIDS, type : "SQL_AFTER_GTIDS" };
//@ts-ignore
const SQL_AFTER_MTS_GAPS : Tester = { test: x => x.tokenKind == TokenKind.SQL_AFTER_MTS_GAPS, type : "SQL_AFTER_MTS_GAPS" };
//@ts-ignore
const SQL_BEFORE_GTIDS : Tester = { test: x => x.tokenKind == TokenKind.SQL_BEFORE_GTIDS, type : "SQL_BEFORE_GTIDS" };
//@ts-ignore
const SQL_BUFFER_RESULT : Tester = { test: x => x.tokenKind == TokenKind.SQL_BUFFER_RESULT, type : "SQL_BUFFER_RESULT" };
//@ts-ignore
const SQL_CACHE : Tester = { test: x => x.tokenKind == TokenKind.SQL_CACHE, type : "SQL_CACHE" };
//@ts-ignore
const SQL_NO_CACHE : Tester = { test: x => x.tokenKind == TokenKind.SQL_NO_CACHE, type : "SQL_NO_CACHE" };
//@ts-ignore
const SQL_THREAD : Tester = { test: x => x.tokenKind == TokenKind.SQL_THREAD, type : "SQL_THREAD" };
//@ts-ignore
const SQL_TSI_DAY : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_DAY, type : "SQL_TSI_DAY" };
//@ts-ignore
const SQL_TSI_HOUR : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_HOUR, type : "SQL_TSI_HOUR" };
//@ts-ignore
const SQL_TSI_MINUTE : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_MINUTE, type : "SQL_TSI_MINUTE" };
//@ts-ignore
const SQL_TSI_MONTH : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_MONTH, type : "SQL_TSI_MONTH" };
//@ts-ignore
const SQL_TSI_QUARTER : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_QUARTER, type : "SQL_TSI_QUARTER" };
//@ts-ignore
const SQL_TSI_SECOND : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_SECOND, type : "SQL_TSI_SECOND" };
//@ts-ignore
const SQL_TSI_WEEK : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_WEEK, type : "SQL_TSI_WEEK" };
//@ts-ignore
const SQL_TSI_YEAR : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_YEAR, type : "SQL_TSI_YEAR" };
//@ts-ignore
const STACKED : Tester = { test: x => x.tokenKind == TokenKind.STACKED, type : "STACKED" };
//@ts-ignore
const START : Tester = { test: x => x.tokenKind == TokenKind.START, type : "START" };
//@ts-ignore
const STARTS : Tester = { test: x => x.tokenKind == TokenKind.STARTS, type : "STARTS" };
//@ts-ignore
const STATS_AUTO_RECALC : Tester = { test: x => x.tokenKind == TokenKind.STATS_AUTO_RECALC, type : "STATS_AUTO_RECALC" };
//@ts-ignore
const STATS_PERSISTENT : Tester = { test: x => x.tokenKind == TokenKind.STATS_PERSISTENT, type : "STATS_PERSISTENT" };
//@ts-ignore
const STATS_SAMPLE_PAGES : Tester = { test: x => x.tokenKind == TokenKind.STATS_SAMPLE_PAGES, type : "STATS_SAMPLE_PAGES" };
//@ts-ignore
const STATUS : Tester = { test: x => x.tokenKind == TokenKind.STATUS, type : "STATUS" };
//@ts-ignore
const STOP : Tester = { test: x => x.tokenKind == TokenKind.STOP, type : "STOP" };
//@ts-ignore
const STORAGE : Tester = { test: x => x.tokenKind == TokenKind.STORAGE, type : "STORAGE" };
//@ts-ignore
const STRING : Tester = { test: x => x.tokenKind == TokenKind.STRING, type : "STRING" };
//@ts-ignore
const SUBCLASS_ORIGIN : Tester = { test: x => x.tokenKind == TokenKind.SUBCLASS_ORIGIN, type : "SUBCLASS_ORIGIN" };
//@ts-ignore
const SUBJECT : Tester = { test: x => x.tokenKind == TokenKind.SUBJECT, type : "SUBJECT" };
//@ts-ignore
const SUBPARTITION : Tester = { test: x => x.tokenKind == TokenKind.SUBPARTITION, type : "SUBPARTITION" };
//@ts-ignore
const SUBPARTITIONS : Tester = { test: x => x.tokenKind == TokenKind.SUBPARTITIONS, type : "SUBPARTITIONS" };
//@ts-ignore
const SUPER : Tester = { test: x => x.tokenKind == TokenKind.SUPER, type : "SUPER" };
//@ts-ignore
const SUSPEND : Tester = { test: x => x.tokenKind == TokenKind.SUSPEND, type : "SUSPEND" };
//@ts-ignore
const SWAPS : Tester = { test: x => x.tokenKind == TokenKind.SWAPS, type : "SWAPS" };
//@ts-ignore
const SWITCHES : Tester = { test: x => x.tokenKind == TokenKind.SWITCHES, type : "SWITCHES" };
//@ts-ignore
const TABLES : Tester = { test: x => x.tokenKind == TokenKind.TABLES, type : "TABLES" };
//@ts-ignore
const TABLESPACE : Tester = { test: x => x.tokenKind == TokenKind.TABLESPACE, type : "TABLESPACE" };
//@ts-ignore
const TABLE_CHECKSUM : Tester = { test: x => x.tokenKind == TokenKind.TABLE_CHECKSUM, type : "TABLE_CHECKSUM" };
//@ts-ignore
const TABLE_NAME : Tester = { test: x => x.tokenKind == TokenKind.TABLE_NAME, type : "TABLE_NAME" };
//@ts-ignore
const TEMPORARY : Tester = { test: x => x.tokenKind == TokenKind.TEMPORARY, type : "TEMPORARY" };
//@ts-ignore
const TEMPTABLE : Tester = { test: x => x.tokenKind == TokenKind.TEMPTABLE, type : "TEMPTABLE" };
//@ts-ignore
const TEXT : Tester = { test: x => x.tokenKind == TokenKind.TEXT, type : "TEXT" };
//@ts-ignore
const THAN : Tester = { test: x => x.tokenKind == TokenKind.THAN, type : "THAN" };
//@ts-ignore
const TIME : Tester = { test: x => x.tokenKind == TokenKind.TIME, type : "TIME" };
//@ts-ignore
const TIMESTAMP : Tester = { test: x => x.tokenKind == TokenKind.TIMESTAMP, type : "TIMESTAMP" };
//@ts-ignore
const TIMESTAMPADD : Tester = { test: x => x.tokenKind == TokenKind.TIMESTAMPADD, type : "TIMESTAMPADD" };
//@ts-ignore
const TIMESTAMPDIFF : Tester = { test: x => x.tokenKind == TokenKind.TIMESTAMPDIFF, type : "TIMESTAMPDIFF" };
//@ts-ignore
const TRANSACTION : Tester = { test: x => x.tokenKind == TokenKind.TRANSACTION, type : "TRANSACTION" };
//@ts-ignore
const TRIGGERS : Tester = { test: x => x.tokenKind == TokenKind.TRIGGERS, type : "TRIGGERS" };
//@ts-ignore
const TRUNCATE : Tester = { test: x => x.tokenKind == TokenKind.TRUNCATE, type : "TRUNCATE" };
//@ts-ignore
const TYPE : Tester = { test: x => x.tokenKind == TokenKind.TYPE, type : "TYPE" };
//@ts-ignore
const TYPES : Tester = { test: x => x.tokenKind == TokenKind.TYPES, type : "TYPES" };
//@ts-ignore
const UNCOMMITTED : Tester = { test: x => x.tokenKind == TokenKind.UNCOMMITTED, type : "UNCOMMITTED" };
//@ts-ignore
const UNDEFINED : Tester = { test: x => x.tokenKind == TokenKind.UNDEFINED, type : "UNDEFINED" };
//@ts-ignore
const UNDOFILE : Tester = { test: x => x.tokenKind == TokenKind.UNDOFILE, type : "UNDOFILE" };
//@ts-ignore
const UNDO_BUFFER_SIZE : Tester = { test: x => x.tokenKind == TokenKind.UNDO_BUFFER_SIZE, type : "UNDO_BUFFER_SIZE" };
//@ts-ignore
const UNICODE : Tester = { test: x => x.tokenKind == TokenKind.UNICODE, type : "UNICODE" };
//@ts-ignore
const UNINSTALL : Tester = { test: x => x.tokenKind == TokenKind.UNINSTALL, type : "UNINSTALL" };
//@ts-ignore
const UNKNOWN : Tester = { test: x => x.tokenKind == TokenKind.UNKNOWN, type : "UNKNOWN" };
//@ts-ignore
const UNTIL : Tester = { test: x => x.tokenKind == TokenKind.UNTIL, type : "UNTIL" };
//@ts-ignore
const UPGRADE : Tester = { test: x => x.tokenKind == TokenKind.UPGRADE, type : "UPGRADE" };
//@ts-ignore
const USER : Tester = { test: x => x.tokenKind == TokenKind.USER, type : "USER" };
//@ts-ignore
const USER_RESOURCES : Tester = { test: x => x.tokenKind == TokenKind.USER_RESOURCES, type : "USER_RESOURCES" };
//@ts-ignore
const USE_FRM : Tester = { test: x => x.tokenKind == TokenKind.USE_FRM, type : "USE_FRM" };
//@ts-ignore
const VALIDATION : Tester = { test: x => x.tokenKind == TokenKind.VALIDATION, type : "VALIDATION" };
//@ts-ignore
const VALUE : Tester = { test: x => x.tokenKind == TokenKind.VALUE, type : "VALUE" };
//@ts-ignore
const VARIABLES : Tester = { test: x => x.tokenKind == TokenKind.VARIABLES, type : "VARIABLES" };
//@ts-ignore
const VIEW : Tester = { test: x => x.tokenKind == TokenKind.VIEW, type : "VIEW" };
//@ts-ignore
const WAIT : Tester = { test: x => x.tokenKind == TokenKind.WAIT, type : "WAIT" };
//@ts-ignore
const WARNINGS : Tester = { test: x => x.tokenKind == TokenKind.WARNINGS, type : "WARNINGS" };
//@ts-ignore
const WEEK : Tester = { test: x => x.tokenKind == TokenKind.WEEK, type : "WEEK" };
//@ts-ignore
const WEIGHT_STRING : Tester = { test: x => x.tokenKind == TokenKind.WEIGHT_STRING, type : "WEIGHT_STRING" };
//@ts-ignore
const WITHOUT : Tester = { test: x => x.tokenKind == TokenKind.WITHOUT, type : "WITHOUT" };
//@ts-ignore
const WORK : Tester = { test: x => x.tokenKind == TokenKind.WORK, type : "WORK" };
//@ts-ignore
const WRAPPER : Tester = { test: x => x.tokenKind == TokenKind.WRAPPER, type : "WRAPPER" };
//@ts-ignore
const X509 : Tester = { test: x => x.tokenKind == TokenKind.X509, type : "X509" };
//@ts-ignore
const XA : Tester = { test: x => x.tokenKind == TokenKind.XA, type : "XA" };
//@ts-ignore
const XID : Tester = { test: x => x.tokenKind == TokenKind.XID, type : "XID" };
//@ts-ignore
const XML : Tester = { test: x => x.tokenKind == TokenKind.XML, type : "XML" };
//@ts-ignore
const YEAR : Tester = { test: x => x.tokenKind == TokenKind.YEAR, type : "YEAR" };
//@ts-ignore
const END_OF_NON_RESERVED_KEYWORD : Tester = { test: x => x.tokenKind == TokenKind.END_OF_NON_RESERVED_KEYWORD, type : "END_OF_NON_RESERVED_KEYWORD" };
//@ts-ignore
const EndOfFile : Tester = { test: x => x.tokenKind == TokenKind.EndOfFile, type : "EndOfFile" };
//@ts-ignore
const UnknownToken : Tester = { test: x => x.tokenKind == TokenKind.UnknownToken, type : "UnknownToken" };
//@ts-ignore
const CustomDelimiter : Tester = { test: x => x.tokenKind == TokenKind.CustomDelimiter, type : "CustomDelimiter" };
//@ts-ignore
const StringLiteral : Tester = { test: x => x.tokenKind == TokenKind.StringLiteral, type : "StringLiteral" };
//@ts-ignore
const IntegerLiteral : Tester = { test: x => x.tokenKind == TokenKind.IntegerLiteral, type : "IntegerLiteral" };
//@ts-ignore
const DecimalLiteral : Tester = { test: x => x.tokenKind == TokenKind.DecimalLiteral, type : "DecimalLiteral" };
//@ts-ignore
const RealLiteral : Tester = { test: x => x.tokenKind == TokenKind.RealLiteral, type : "RealLiteral" };
//@ts-ignore
const Identifier : Tester = { test: x => x.tokenKind == TokenKind.Identifier, type : "Identifier" };
//@ts-ignore
const UserVariableIdentifier : Tester = { test: x => x.tokenKind == TokenKind.UserVariableIdentifier, type : "UserVariableIdentifier" };
//@ts-ignore
const MacroIdentifier : Tester = { test: x => x.tokenKind == TokenKind.MacroIdentifier, type : "MacroIdentifier" };
//@ts-ignore
const Plus : Tester = { test: x => x.tokenKind == TokenKind.Plus, type : "Plus" };
//@ts-ignore
const Minus : Tester = { test: x => x.tokenKind == TokenKind.Minus, type : "Minus" };
//@ts-ignore
const Asterisk : Tester = { test: x => x.tokenKind == TokenKind.Asterisk, type : "Asterisk" };
//@ts-ignore
const Percent : Tester = { test: x => x.tokenKind == TokenKind.Percent, type : "Percent" };
//@ts-ignore
const Slash : Tester = { test: x => x.tokenKind == TokenKind.Slash, type : "Slash" };
//@ts-ignore
const Dot : Tester = { test: x => x.tokenKind == TokenKind.Dot, type : "Dot" };
//@ts-ignore
const SemiColon : Tester = { test: x => x.tokenKind == TokenKind.SemiColon, type : "SemiColon" };
//@ts-ignore
const Comma : Tester = { test: x => x.tokenKind == TokenKind.Comma, type : "Comma" };
//@ts-ignore
const Pound : Tester = { test: x => x.tokenKind == TokenKind.Pound, type : "Pound" };
//@ts-ignore
const OpenParenthesesPound : Tester = { test: x => x.tokenKind == TokenKind.OpenParenthesesPound, type : "OpenParenthesesPound" };
//@ts-ignore
const PoundCloseParentheses : Tester = { test: x => x.tokenKind == TokenKind.PoundCloseParentheses, type : "PoundCloseParentheses" };
//@ts-ignore
const Backslash : Tester = { test: x => x.tokenKind == TokenKind.Backslash, type : "Backslash" };
//@ts-ignore
const ColonEqual : Tester = { test: x => x.tokenKind == TokenKind.ColonEqual, type : "ColonEqual" };
//@ts-ignore
const AtAt : Tester = { test: x => x.tokenKind == TokenKind.AtAt, type : "AtAt" };
//@ts-ignore
const AtAtGlobalDot : Tester = { test: x => x.tokenKind == TokenKind.AtAtGlobalDot, type : "AtAtGlobalDot" };
//@ts-ignore
const AtAtSessionDot : Tester = { test: x => x.tokenKind == TokenKind.AtAtSessionDot, type : "AtAtSessionDot" };
//@ts-ignore
const Tilde : Tester = { test: x => x.tokenKind == TokenKind.Tilde, type : "Tilde" };
//@ts-ignore
const Caret : Tester = { test: x => x.tokenKind == TokenKind.Caret, type : "Caret" };
//@ts-ignore
const Bar : Tester = { test: x => x.tokenKind == TokenKind.Bar, type : "Bar" };
//@ts-ignore
const Equal : Tester = { test: x => x.tokenKind == TokenKind.Equal, type : "Equal" };
//@ts-ignore
const LessEqualGreater : Tester = { test: x => x.tokenKind == TokenKind.LessEqualGreater, type : "LessEqualGreater" };
//@ts-ignore
const GreaterEqual : Tester = { test: x => x.tokenKind == TokenKind.GreaterEqual, type : "GreaterEqual" };
//@ts-ignore
const Greater : Tester = { test: x => x.tokenKind == TokenKind.Greater, type : "Greater" };
//@ts-ignore
const LessEqual : Tester = { test: x => x.tokenKind == TokenKind.LessEqual, type : "LessEqual" };
//@ts-ignore
const Less : Tester = { test: x => x.tokenKind == TokenKind.Less, type : "Less" };
//@ts-ignore
const LessGreater : Tester = { test: x => x.tokenKind == TokenKind.LessGreater, type : "LessGreater" };
//@ts-ignore
const LessLess : Tester = { test: x => x.tokenKind == TokenKind.LessLess, type : "LessLess" };
//@ts-ignore
const GreaterGreater : Tester = { test: x => x.tokenKind == TokenKind.GreaterGreater, type : "GreaterGreater" };
//@ts-ignore
const OpenParentheses : Tester = { test: x => x.tokenKind == TokenKind.OpenParentheses, type : "OpenParentheses" };
//@ts-ignore
const CloseParentheses : Tester = { test: x => x.tokenKind == TokenKind.CloseParentheses, type : "CloseParentheses" };
//@ts-ignore
const OpenBrace : Tester = { test: x => x.tokenKind == TokenKind.OpenBrace, type : "OpenBrace" };
//@ts-ignore
const CloseBrace : Tester = { test: x => x.tokenKind == TokenKind.CloseBrace, type : "CloseBrace" };
//@ts-ignore
const DELIMITER_STATEMENT : Tester = { test: x => x.tokenKind == TokenKind.DELIMITER_STATEMENT, type : "DELIMITER_STATEMENT" };
//@ts-ignore
const UNIQUE_KEY : Tester = { test: x => x.tokenKind == TokenKind.UNIQUE_KEY, type : "UNIQUE_KEY" };


export interface Token { value: any; [key: string]: any };

export interface Lexer {
  reset: (chunk: string, info: any) => void;
  next: () => Token | undefined;
  save: () => any;
  formatError: (token: Token) => string;
  has: (tokenType: string) => boolean
};

export interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any
};

export type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

export var Lexer: Lexer | undefined = undefined;

export var ParserRules: NearleyRule[] = [
    {"name": "Start", "symbols": ["UnexpandedContent"], "postprocess": data => data[0]},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": ["NonEmptyNonMacroCall"], "postprocess": id},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["MacroCall", "NonEmptyUnexpandedContent$subexpression$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$1$ebnf$1", "symbols": ["NonEmptyUnexpandedContent$subexpression$1$subexpression$1$ebnf$1", "NonEmptyUnexpandedContent$subexpression$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$1", "symbols": ["NonEmptyNonMacroCall", "NonEmptyUnexpandedContent$subexpression$1$subexpression$1$ebnf$1"]},
    {"name": "NonEmptyUnexpandedContent$subexpression$1", "symbols": ["NonEmptyUnexpandedContent$subexpression$1$subexpression$1"]},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$1", "symbols": ["NonEmptyNonMacroCall"], "postprocess": id},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$1$ebnf$1", "symbols": ["NonEmptyNonMacroCall"], "postprocess": id},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$1", "symbols": ["MacroCall", "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2", "symbols": ["NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$1"]},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$2$ebnf$1", "symbols": ["NonEmptyNonMacroCall"], "postprocess": id},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$2$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$2", "symbols": ["MacroCall", "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$2$ebnf$1"]},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2", "symbols": ["NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2", "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "NonEmptyUnexpandedContent$subexpression$1$subexpression$2", "symbols": ["NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$1", "NonEmptyUnexpandedContent$subexpression$1$subexpression$2$ebnf$2"]},
    {"name": "NonEmptyUnexpandedContent$subexpression$1", "symbols": ["NonEmptyUnexpandedContent$subexpression$1$subexpression$2"]},
    {"name": "NonEmptyUnexpandedContent", "symbols": ["NonEmptyUnexpandedContent$subexpression$1"], "postprocess":  function (data) {
            const [firstPart, trailingParts] = data[0][0];
            if (trailingParts.length == 0) {
                if (firstPart == undefined) {
                    return {
                        ...parse_util_1.getTextRange(data),
                        unexpandedContent: [],
                    };
                }
                else {
                    return {
                        ...parse_util_1.getTextRange(data),
                        unexpandedContent: [firstPart],
                    };
                }
            }
            const unexpandedContent = [];
            const firstPartStart = 0;
            const firstPartEnd = trailingParts[0][0].start;
            unexpandedContent.push({
                start: firstPartStart,
                end: firstPartEnd,
                value: this.sourceText.substring(firstPartStart, firstPartEnd),
            });
            for (let i = 0; i < trailingParts.length; ++i) {
                const curPart = trailingParts[i];
                unexpandedContent.push(curPart[0]);
                const nextPart = (i + 1 < trailingParts.length ?
                    trailingParts[i + 1] :
                    undefined);
                const start = curPart[0].end;
                const end = (nextPart == undefined ?
                    (curPart[1] == undefined ?
                        curPart[0].end :
                        curPart[1].end) :
                    nextPart[0].start);
                unexpandedContent.push({
                    start,
                    end,
                    value: this.sourceText.substring(start, end),
                });
            }
            if (unexpandedContent.length == 0) {
                const trailingWhitespace = {
                    start: 0,
                    end: this.sourceText.length,
                    value: this.sourceText,
                };
                unexpandedContent.push(trailingWhitespace);
            }
            else {
                const trailingWhitespace = {
                    start: unexpandedContent[unexpandedContent.length - 1].end,
                    end: this.sourceText.length,
                    value: this.sourceText.substring(unexpandedContent[unexpandedContent.length - 1].end, this.sourceText.length),
                };
                unexpandedContent.push(trailingWhitespace);
            }
            return {
                ...parse_util_1.getTextRange(data),
                unexpandedContent,
            };
        } },
    {"name": "UnexpandedContent$ebnf$1", "symbols": ["NonEmptyNonMacroCall"], "postprocess": id},
    {"name": "UnexpandedContent$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "UnexpandedContent$ebnf$2", "symbols": []},
    {"name": "UnexpandedContent$ebnf$2$subexpression$1$ebnf$1", "symbols": ["NonEmptyNonMacroCall"], "postprocess": id},
    {"name": "UnexpandedContent$ebnf$2$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "UnexpandedContent$ebnf$2$subexpression$1", "symbols": ["MacroCall", "UnexpandedContent$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "UnexpandedContent$ebnf$2", "symbols": ["UnexpandedContent$ebnf$2", "UnexpandedContent$ebnf$2$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "UnexpandedContent", "symbols": ["UnexpandedContent$ebnf$1", "UnexpandedContent$ebnf$2"], "postprocess":  function (data) {
            const [firstPart, trailingParts] = data;
            if (trailingParts.length == 0) {
                if (firstPart == undefined) {
                    return {
                        ...parse_util_1.getTextRange(data),
                        unexpandedContent: [],
                    };
                }
                else {
                    return {
                        ...parse_util_1.getTextRange(data),
                        unexpandedContent: [firstPart],
                    };
                }
            }
            const unexpandedContent = [];
            const firstPartStart = 0;
            const firstPartEnd = trailingParts[0][0].start;
            unexpandedContent.push({
                start: firstPartStart,
                end: firstPartEnd,
                value: this.sourceText.substring(firstPartStart, firstPartEnd),
            });
            for (let i = 0; i < trailingParts.length; ++i) {
                const curPart = trailingParts[i];
                unexpandedContent.push(curPart[0]);
                const nextPart = (i + 1 < trailingParts.length ?
                    trailingParts[i + 1] :
                    undefined);
                const start = curPart[0].end;
                const end = (nextPart == undefined ?
                    (curPart[1] == undefined ?
                        curPart[0].end :
                        curPart[1].end) :
                    nextPart[0].start);
                unexpandedContent.push({
                    start,
                    end,
                    value: this.sourceText.substring(start, end),
                });
            }
            if (unexpandedContent.length == 0) {
                const trailingWhitespace = {
                    start: 0,
                    end: this.sourceText.length,
                    value: this.sourceText,
                };
                unexpandedContent.push(trailingWhitespace);
            }
            else {
                const trailingWhitespace = {
                    start: unexpandedContent[unexpandedContent.length - 1].end,
                    end: this.sourceText.length,
                    value: this.sourceText.substring(unexpandedContent[unexpandedContent.length - 1].end, this.sourceText.length),
                };
                unexpandedContent.push(trailingWhitespace);
            }
            return {
                ...parse_util_1.getTextRange(data),
                unexpandedContent,
            };
        } },
    {"name": "NonEmptyNonMacroCall$ebnf$1", "symbols": [NonPound]},
    {"name": "NonEmptyNonMacroCall$ebnf$1", "symbols": ["NonEmptyNonMacroCall$ebnf$1", NonPound], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "NonEmptyNonMacroCall", "symbols": ["NonEmptyNonMacroCall$ebnf$1"], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                value: "",
            };
        } },
    {"name": "MacroCall", "symbols": ["MacroIdentifier", "MacroArgumentList"], "postprocess":  function (data) {
            const [identifier, argumentList] = data;
            return {
                ...parse_util_1.getTextRange(data),
                identifier,
                argumentList,
            };
        } },
    {"name": "MacroIdentifier$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [Dot, "IdentifierAllowReserved"]},
    {"name": "MacroIdentifier$ebnf$1$subexpression$1$ebnf$1", "symbols": ["MacroIdentifier$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "MacroIdentifier$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "MacroIdentifier$ebnf$1$subexpression$1", "symbols": [Dot, "IdentifierAllowReserved", "MacroIdentifier$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "MacroIdentifier$ebnf$1", "symbols": ["MacroIdentifier$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "MacroIdentifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "MacroIdentifier", "symbols": [MacroIdentifier, "MacroIdentifier$ebnf$1"], "postprocess":  function (data) {
            const nameA = data[0];
            const partB = data[1];
            if (partB == undefined) {
                return {
                    ...parse_util_1.getTextRange(data),
                    macroName: nameA.value,
                };
            }
            const nameB = partB[1];
            const partC = partB[2];
            if (partC == undefined) {
                return {
                    ...parse_util_1.getTextRange(data),
                    macroName: nameA.value + "." + nameB.identifier,
                };
            }
            const nameC = partC[1];
            return {
                ...parse_util_1.getTextRange(data),
                macroName: nameA.value + "." + nameB.identifier + "." + nameC.identifier,
            };
        } },
    {"name": "MacroArgumentList$ebnf$1", "symbols": []},
    {"name": "MacroArgumentList$ebnf$1$subexpression$1", "symbols": [OpenBrace, "MacroArgument", CloseBrace]},
    {"name": "MacroArgumentList$ebnf$1", "symbols": ["MacroArgumentList$ebnf$1", "MacroArgumentList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "MacroArgumentList", "symbols": ["MacroArgumentList$ebnf$1"], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                args: data[0].map(([openBrace, _arg, closeBrace]) => {
                    return {
                        start: openBrace.end,
                        end: closeBrace.start,
                        value: this.sourceText.substring(openBrace.end, closeBrace.start),
                    };
                })
            };
            /*
            const rawData = data[0][0];
            if (rawData[0].tokenKind == TokenKind.OpenParentheses) {
                return {
                    ...getTextRange(data),
                    args : [],
                };
            }
            const [openParen, rawArgs, closeParen] = rawData as Exclude<typeof rawData, readonly [TokenObj<TokenKind.OpenParentheses>, ...any[]]>;
            if (rawArgs == undefined) {
                return {
                    ...getTextRange(data),
                    args : [],
                };
            }
        
        
            const args : MacroArgumentNode[] = [];
        
            const firstArgStart = openParen.end;
            const firstArgEnd = (
                rawArgs[1].length == 0 ?
                closeParen.start :
                //The start of the first pound character
                rawArgs[1][0][0].start
            );
            args.push({
                start : firstArgStart,
                end : firstArgEnd,
                value : this.sourceText.substring(
                    firstArgStart,
                    firstArgEnd
                ),
            });
        
            for (let i=0; i<rawArgs[1].length; ++i) {
                const curArg = rawArgs[1][i];
                const nextArg = (
                    i+1 < rawArgs[1].length ?
                    rawArgs[1][i+1] :
                    undefined
                );
                const start = curArg[0].end;
                const end = (
                    nextArg == undefined ?
                    closeParen.start :
                    nextArg[0].start
                );
                args.push({
                    start,
                    end,
                    value : this.sourceText.substring(
                        start,
                        end
                    ),
                });
            }
        
            return {
                ...getTextRange(data),
                args,
            };*/
        } },
    {"name": "MacroArgument", "symbols": ["UnexpandedContent"], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                value: "",
            };
        } },
    {"name": "IdentifierAllowReserved", "symbols": [KeywordOrIdentifier], "postprocess":  function (data) {
            const [tokenObj] = data;
            if (data[0].tokenKind == scanner_1.TokenKind.Identifier) {
                const sourceText = tokenObj.getTokenSourceText();
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: tokenObj.value,
                    quoted: sourceText[0] == "`" || sourceText[0] == "\"",
                };
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Identifier,
                identifier: tokenObj.value,
                quoted: false,
            };
        } },
    {"name": "Identifier", "symbols": [KeywordOrIdentifier], "postprocess":  function (data) {
            const [tokenObj] = data;
            if (data[0].tokenKind == scanner_1.TokenKind.Identifier) {
                const sourceText = tokenObj.getTokenSourceText();
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: tokenObj.value,
                    quoted: sourceText[0] == "`" || sourceText[0] == "\"",
                };
            }
            if (scanner_1.isNonReserved(tokenObj.tokenKind)) {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: tokenObj.value,
                    quoted: false,
                };
            }
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Identifier,
                identifier: tokenObj.value,
                quoted: false,
            };
            parse_util_1.pushSyntacticErrorAtNode(this, result, [], diagnostic_messages_1.DiagnosticMessages.CannotUseReservedKeywordAsIdentifier, scanner_1.ReverseTokenKind[tokenObj.tokenKind]);
            return result;
        } }
];

export var ParserStart: string = "Start";
