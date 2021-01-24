//@ts-nocheck
// Generated automatically by nearley, version 2.11.2
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

import {TokenKind, isKeyword} from "../scanner";
const scanner_1 = require("../scanner");
const parser_node_1 = require("../parser-node");
const diagnostic_messages_1 = require("./diagnostic-messages");
const parse_util_1 = require("./parse-util");
const constants_1 = require("./constants");

const KeywordOrIdentifier : Tester = {
    test: x => x.tokenKind == TokenKind.Identifier || isKeyword(x.tokenKind),
    //Even though this could be a keyword, the intention is to use it as an identifier
    type : "Identifier",
};

const NowToken : Tester = {
    test: x => x.tokenKind == TokenKind.Identifier && x.getTokenSourceText().toUpperCase() == "NOW",
    type : "NOW",
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
const HexLiteral : Tester = { test: x => x.tokenKind == TokenKind.HexLiteral, type : "HexLiteral" };
//@ts-ignore
const BitLiteral : Tester = { test: x => x.tokenKind == TokenKind.BitLiteral, type : "BitLiteral" };
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
const Colon : Tester = { test: x => x.tokenKind == TokenKind.Colon, type : "Colon" };
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
const QuestionMark : Tester = { test: x => x.tokenKind == TokenKind.QuestionMark, type : "QuestionMark" };
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
    {"name": "Start", "symbols": ["SourceFileLite"], "postprocess": data => data[0]},
    {"name": "BinaryDataType$subexpression$1", "symbols": [BINARY]},
    {"name": "BinaryDataType$subexpression$1", "symbols": [VARBINARY]},
    {"name": "BinaryDataType$ebnf$1", "symbols": ["FieldLength"], "postprocess": id},
    {"name": "BinaryDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "BinaryDataType", "symbols": ["BinaryDataType$subexpression$1", "BinaryDataType$ebnf$1"], "postprocess":  (data) => {
            const [[dataType], maxLength] = data;
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.BinaryDataType,
                variableLength: dataType.tokenKind == scanner_1.TokenKind.VARBINARY,
                maxLength: (maxLength !== null && maxLength !== void 0 ? maxLength : {
                    start: dataType.end,
                    end: dataType.end,
                    syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                    length: {
                        start: dataType.end,
                        end: dataType.end,
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        value: BigInt(1),
                    },
                }),
            };
            if (result.variableLength &&
                maxLength == undefined) {
                parse_util_1.pushSyntacticErrorAt(result, dataType.end, dataType.end, [dataType], diagnostic_messages_1.DiagnosticMessages.VariableLengthBinaryDataTypeMustSpecifyFieldLength);
            }
            return result;
        } },
    {"name": "BitDataType$ebnf$1", "symbols": ["FieldLength"], "postprocess": id},
    {"name": "BitDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "BitDataType", "symbols": [BIT, "BitDataType$ebnf$1"], "postprocess":  (data) => {
            const [dataType, bits] = data;
            return {
                syntaxKind: parser_node_1.SyntaxKind.BitDataType,
                bits: (bits == undefined ?
                    {
                        start: dataType.end,
                        end: dataType.end,
                        syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                        length: {
                            start: dataType.end,
                            end: dataType.end,
                            syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                            value: BigInt(1),
                        },
                    } :
                    bits),
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "BlobDataType$subexpression$1", "symbols": [TINYBLOB]},
    {"name": "BlobDataType$subexpression$1", "symbols": [BLOB]},
    {"name": "BlobDataType$subexpression$1", "symbols": [MEDIUMBLOB]},
    {"name": "BlobDataType$subexpression$1", "symbols": [LONGBLOB]},
    {"name": "BlobDataType", "symbols": ["BlobDataType$subexpression$1"], "postprocess":  (data) => {
            const [[token]] = data;
            return {
                syntaxKind: parser_node_1.SyntaxKind.BlobDataType,
                lengthBytes: (token.tokenKind == scanner_1.TokenKind.TINYBLOB ?
                    8 :
                    token.tokenKind == scanner_1.TokenKind.BLOB ?
                        16 :
                        token.tokenKind == scanner_1.TokenKind.MEDIUMBLOB ?
                            24 :
                            32),
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "BlobDataType", "symbols": [LONG, VARBINARY], "postprocess":  (data) => {
            return {
                syntaxKind: parser_node_1.SyntaxKind.BlobDataType,
                lengthBytes: 24,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "BlobDataType", "symbols": [BLOB, "FieldLength"], "postprocess":  (data) => {
            const [, fieldLength] = data;
            const result = {
                syntaxKind: parser_node_1.SyntaxKind.BlobDataType,
                lengthBytes: (fieldLength.length.value < (BigInt(1) << BigInt(8)) ?
                    8 :
                    fieldLength.length.value < (BigInt(1) << BigInt(16)) ?
                        16 :
                        fieldLength.length.value < (BigInt(1) << BigInt(24)) ?
                            24 :
                            32),
                ...parse_util_1.getTextRange(data),
            };
            if (fieldLength.length.value >= (BigInt(1) << BigInt(32))) {
                parse_util_1.pushSyntacticErrorAt(result, fieldLength.length.start, fieldLength.length.end, [], diagnostic_messages_1.DiagnosticMessages.InvalidBlobDataTypeBytes);
            }
            return result;
        } },
    {"name": "BooleanDataType$subexpression$1", "symbols": [BOOL]},
    {"name": "BooleanDataType$subexpression$1", "symbols": [BOOLEAN]},
    {"name": "BooleanDataType", "symbols": ["BooleanDataType$subexpression$1"], "postprocess":  (data) => {
            return {
                syntaxKind: parser_node_1.SyntaxKind.BooleanDataType,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "CharacterDataTypeModifier$ebnf$1$subexpression$1$subexpression$1$subexpression$1", "symbols": [CHARACTER, SET]},
    {"name": "CharacterDataTypeModifier$ebnf$1$subexpression$1$subexpression$1", "symbols": ["CharacterDataTypeModifier$ebnf$1$subexpression$1$subexpression$1$subexpression$1"]},
    {"name": "CharacterDataTypeModifier$ebnf$1$subexpression$1$subexpression$1", "symbols": [CHARSET]},
    {"name": "CharacterDataTypeModifier$ebnf$1$subexpression$1", "symbols": ["CharacterDataTypeModifier$ebnf$1$subexpression$1$subexpression$1", "CharacterSetName"]},
    {"name": "CharacterDataTypeModifier$ebnf$1", "symbols": ["CharacterDataTypeModifier$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CharacterDataTypeModifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CharacterDataTypeModifier$ebnf$2$subexpression$1$subexpression$1", "symbols": ["Identifier"]},
    {"name": "CharacterDataTypeModifier$ebnf$2$subexpression$1$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "CharacterDataTypeModifier$ebnf$2$subexpression$1", "symbols": [COLLATE, "CharacterDataTypeModifier$ebnf$2$subexpression$1$subexpression$1"]},
    {"name": "CharacterDataTypeModifier$ebnf$2", "symbols": ["CharacterDataTypeModifier$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "CharacterDataTypeModifier$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CharacterDataTypeModifier", "symbols": ["CharacterDataTypeModifier$ebnf$1", "CharacterDataTypeModifier$ebnf$2"], "postprocess":  function ([characterSet, collate]) {
            return parse_util_1.processCharacterDataTypeModifier({
                characterSet: undefined,
                collate: undefined,
                ...parse_util_1.getTextRange([characterSet, collate]),
            }, {
                characterSet: characterSet === null || characterSet === void 0 ? void 0 : characterSet[1],
                collate: collate === null || collate === void 0 ? void 0 : collate[1][0],
            });
        } },
    {"name": "CharacterDataTypeModifier", "symbols": [ASCII], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                characterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.asciiCharacterSet,
                    quoted: false,
                },
                collate: undefined,
            };
        } },
    {"name": "CharacterDataTypeModifier$subexpression$1$subexpression$1", "symbols": [ASCII, BINARY]},
    {"name": "CharacterDataTypeModifier$subexpression$1", "symbols": ["CharacterDataTypeModifier$subexpression$1$subexpression$1"]},
    {"name": "CharacterDataTypeModifier$subexpression$1$subexpression$2", "symbols": [BINARY, ASCII]},
    {"name": "CharacterDataTypeModifier$subexpression$1", "symbols": ["CharacterDataTypeModifier$subexpression$1$subexpression$2"]},
    {"name": "CharacterDataTypeModifier", "symbols": ["CharacterDataTypeModifier$subexpression$1"], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                characterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.asciiCharacterSet,
                    quoted: false,
                },
                collate: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.asciiBinaryCollation,
                    quoted: false,
                },
            };
        } },
    {"name": "CharacterDataTypeModifier", "symbols": [UNICODE], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                characterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.unicodeCharacterSet,
                    quoted: false,
                },
                collate: undefined,
            };
        } },
    {"name": "CharacterDataTypeModifier$subexpression$2$subexpression$1", "symbols": [UNICODE, BINARY]},
    {"name": "CharacterDataTypeModifier$subexpression$2", "symbols": ["CharacterDataTypeModifier$subexpression$2$subexpression$1"]},
    {"name": "CharacterDataTypeModifier$subexpression$2$subexpression$2", "symbols": [BINARY, UNICODE]},
    {"name": "CharacterDataTypeModifier$subexpression$2", "symbols": ["CharacterDataTypeModifier$subexpression$2$subexpression$2"]},
    {"name": "CharacterDataTypeModifier", "symbols": ["CharacterDataTypeModifier$subexpression$2"], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                characterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.unicodeCharacterSet,
                    quoted: false,
                },
                collate: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.unicodeBinaryCollation,
                    quoted: false,
                },
            };
        } },
    {"name": "CharacterDataTypeModifier", "symbols": [BYTE], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                characterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.binaryCharacterSet,
                    quoted: false,
                },
                collate: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.binaryCollation,
                    quoted: false,
                },
            };
        } },
    {"name": "CharacterDataTypeModifier", "symbols": [BINARY], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                characterSet: undefined,
                collate: undefined,
                binary: parse_util_1.getTextRange(data),
            };
        } },
    {"name": "CharacterDataTypeModifier$subexpression$3$subexpression$1$subexpression$1$subexpression$1", "symbols": [CHARACTER, SET]},
    {"name": "CharacterDataTypeModifier$subexpression$3$subexpression$1$subexpression$1", "symbols": ["CharacterDataTypeModifier$subexpression$3$subexpression$1$subexpression$1$subexpression$1"]},
    {"name": "CharacterDataTypeModifier$subexpression$3$subexpression$1$subexpression$1", "symbols": [CHARSET]},
    {"name": "CharacterDataTypeModifier$subexpression$3$subexpression$1", "symbols": [BINARY, "CharacterDataTypeModifier$subexpression$3$subexpression$1$subexpression$1", "CharacterSetName"]},
    {"name": "CharacterDataTypeModifier$subexpression$3", "symbols": ["CharacterDataTypeModifier$subexpression$3$subexpression$1"]},
    {"name": "CharacterDataTypeModifier$subexpression$3$subexpression$2$subexpression$1$subexpression$1", "symbols": [CHARACTER, SET]},
    {"name": "CharacterDataTypeModifier$subexpression$3$subexpression$2$subexpression$1", "symbols": ["CharacterDataTypeModifier$subexpression$3$subexpression$2$subexpression$1$subexpression$1"]},
    {"name": "CharacterDataTypeModifier$subexpression$3$subexpression$2$subexpression$1", "symbols": [CHARSET]},
    {"name": "CharacterDataTypeModifier$subexpression$3$subexpression$2", "symbols": ["CharacterDataTypeModifier$subexpression$3$subexpression$2$subexpression$1", "CharacterSetName", BINARY]},
    {"name": "CharacterDataTypeModifier$subexpression$3", "symbols": ["CharacterDataTypeModifier$subexpression$3$subexpression$2"]},
    {"name": "CharacterDataTypeModifier", "symbols": ["CharacterDataTypeModifier$subexpression$3"], "postprocess":  function (data) {
            const x = data[0][0].filter((item) => "syntaxKind" in item);
            const characterSet = x[0];
            return {
                ...parse_util_1.getTextRange(data),
                characterSet,
                collate: {
                    ...parse_util_1.getTextRange(characterSet),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.characterSetToBinaryCollation(characterSet.identifier),
                    quoted: false,
                },
            };
        } },
    {"name": "VarCharStart$subexpression$1", "symbols": [VARCHAR]},
    {"name": "VarCharStart$subexpression$1", "symbols": [VARCHARACTER]},
    {"name": "VarCharStart$subexpression$1$subexpression$1", "symbols": [CHAR, VARYING]},
    {"name": "VarCharStart$subexpression$1", "symbols": ["VarCharStart$subexpression$1$subexpression$1"]},
    {"name": "VarCharStart$subexpression$1$subexpression$2", "symbols": [CHARACTER, VARYING]},
    {"name": "VarCharStart$subexpression$1", "symbols": ["VarCharStart$subexpression$1$subexpression$2"]},
    {"name": "VarCharStart", "symbols": [NATIONAL, "VarCharStart$subexpression$1"], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.nationalCharacterSet,
                    quoted: false,
                },
            };
        } },
    {"name": "VarCharStart$subexpression$2", "symbols": [VARYING]},
    {"name": "VarCharStart$subexpression$2", "symbols": [VARCHAR]},
    {"name": "VarCharStart", "symbols": [NCHAR, "VarCharStart$subexpression$2"], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.nationalCharacterSet,
                    quoted: false,
                },
            };
        } },
    {"name": "VarCharStart", "symbols": [NVARCHAR], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.nationalCharacterSet,
                    quoted: false,
                },
            };
        } },
    {"name": "VarCharStart$subexpression$3", "symbols": [CHAR]},
    {"name": "VarCharStart$subexpression$3", "symbols": [CHARACTER]},
    {"name": "VarCharStart", "symbols": ["VarCharStart$subexpression$3", VARYING], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: undefined,
            };
        } },
    {"name": "VarCharStart$subexpression$4", "symbols": [VARCHAR]},
    {"name": "VarCharStart$subexpression$4", "symbols": [VARCHARACTER]},
    {"name": "VarCharStart", "symbols": ["VarCharStart$subexpression$4"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: undefined,
            };
        } },
    {"name": "CharStart$subexpression$1", "symbols": [CHAR]},
    {"name": "CharStart$subexpression$1", "symbols": [CHARACTER]},
    {"name": "CharStart", "symbols": [NATIONAL, "CharStart$subexpression$1"], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: false,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.nationalCharacterSet,
                    quoted: false,
                },
            };
        } },
    {"name": "CharStart", "symbols": [NCHAR], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: false,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: this.settings.nationalCharacterSet,
                    quoted: false,
                },
            };
        } },
    {"name": "CharStart$subexpression$2", "symbols": [CHAR]},
    {"name": "CharStart$subexpression$2", "symbols": [CHARACTER]},
    {"name": "CharStart", "symbols": ["CharStart$subexpression$2"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: false,
                nationalCharacterSet: undefined,
            };
        } },
    {"name": "CharacterDataType$subexpression$1", "symbols": ["CharStart"]},
    {"name": "CharacterDataType$subexpression$1", "symbols": ["VarCharStart"]},
    {"name": "CharacterDataType$ebnf$1", "symbols": ["FieldLength"], "postprocess": id},
    {"name": "CharacterDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CharacterDataType", "symbols": ["CharacterDataType$subexpression$1", "CharacterDataType$ebnf$1", "CharacterDataTypeModifier"], "postprocess":  (data) => {
            var _a;
            const [[char], maxLength, modifier] = data;
            if (char.nationalCharacterSet != undefined &&
                modifier.characterSet != undefined) {
                parse_util_1.pushSyntacticErrorAt(char.nationalCharacterSet, modifier.characterSet.start, modifier.characterSet.end, [char.nationalCharacterSet], diagnostic_messages_1.DiagnosticMessages.NationalCharacterDataTypeCannotSpecifyCharacterSet);
            }
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CharacterDataType,
                variableLength: char.variableLength,
                maxLength: (maxLength == undefined ?
                    {
                        start: char.end,
                        end: char.end,
                        syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                        length: {
                            start: char.end,
                            end: char.end,
                            syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                            value: BigInt(1),
                        },
                    } :
                    maxLength),
                characterSet: ((_a = char.nationalCharacterSet) !== null && _a !== void 0 ? _a : modifier.characterSet),
                collate: modifier.collate,
                binary: modifier.binary,
            };
            if (char.variableLength &&
                maxLength == undefined) {
                parse_util_1.pushSyntacticErrorAt(result, char.end, char.end, [char], diagnostic_messages_1.DiagnosticMessages.VariableLengthCharacterDataTypeMustSpecifyFieldLength);
            }
            return result;
        } },
    {"name": "DataType$subexpression$1", "symbols": ["BinaryDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["BitDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["BlobDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["BooleanDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["CharacterDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["DateDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["DateTimeDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["DecimalDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["EnumDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["GeometryCollectionDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["GeometryDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["IntegerDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["JsonDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["RealDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["SetDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["TextDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["TimeDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["TimestampDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["YearDataType"]},
    {"name": "DataType", "symbols": ["DataType$subexpression$1"], "postprocess": (data) => data[0][0]},
    {"name": "DateDataType", "symbols": [DATE], "postprocess":  (data) => {
            return {
                syntaxKind: parser_node_1.SyntaxKind.DateDataType,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "DateTimeDataType$ebnf$1", "symbols": ["FieldLength"], "postprocess": id},
    {"name": "DateTimeDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "DateTimeDataType", "symbols": [DATETIME, "DateTimeDataType$ebnf$1"], "postprocess":  (data) => {
            const [dataType, fractionalSecondPrecision] = data;
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.DateTimeDataType,
                fractionalSecondPrecision: (fractionalSecondPrecision !== null && fractionalSecondPrecision !== void 0 ? fractionalSecondPrecision : {
                    start: dataType.end,
                    end: dataType.end,
                    syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                    length: {
                        start: dataType.end,
                        end: dataType.end,
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        value: BigInt(0),
                    },
                }),
            };
            return result;
        } },
    {"name": "DecimalDataType$subexpression$1", "symbols": [DECIMAL]},
    {"name": "DecimalDataType$subexpression$1", "symbols": [DEC]},
    {"name": "DecimalDataType$subexpression$1", "symbols": [NUMERIC]},
    {"name": "DecimalDataType$subexpression$1", "symbols": [FIXED]},
    {"name": "DecimalDataType", "symbols": ["DecimalDataType$subexpression$1", "FieldLength", "IntegerDataTypeModifier"], "postprocess":  function (data) {
            const [, fieldLength, modifier] = data;
            const result = {
                syntaxKind: parser_node_1.SyntaxKind.DecimalDataType,
                precision: {
                    syntaxKind: parser_node_1.SyntaxKind.Precision,
                    start: fieldLength.start,
                    end: fieldLength.end,
                    precision: fieldLength.length,
                    scale: {
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        start: fieldLength.length.end,
                        end: fieldLength.length.end,
                        value: BigInt(0),
                    },
                },
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
            if (fieldLength.length.value > BigInt(65)) {
                parse_util_1.pushSyntacticErrorAt(result, fieldLength.length.start, fieldLength.length.end, [], diagnostic_messages_1.DiagnosticMessages.DecimalPrecisionTooHigh);
            }
            return result;
        } },
    {"name": "DecimalDataType$subexpression$2", "symbols": [DECIMAL]},
    {"name": "DecimalDataType$subexpression$2", "symbols": [DEC]},
    {"name": "DecimalDataType$subexpression$2", "symbols": [NUMERIC]},
    {"name": "DecimalDataType$subexpression$2", "symbols": [FIXED]},
    {"name": "DecimalDataType", "symbols": ["DecimalDataType$subexpression$2", "DecimalPrecision", "IntegerDataTypeModifier"], "postprocess":  function (data) {
            const [, precision, modifier] = data;
            const result = {
                syntaxKind: parser_node_1.SyntaxKind.DecimalDataType,
                precision,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
            return result;
        } },
    {"name": "DecimalDataType$subexpression$3", "symbols": [DECIMAL]},
    {"name": "DecimalDataType$subexpression$3", "symbols": [DEC]},
    {"name": "DecimalDataType$subexpression$3", "symbols": [NUMERIC]},
    {"name": "DecimalDataType$subexpression$3", "symbols": [FIXED]},
    {"name": "DecimalDataType", "symbols": ["DecimalDataType$subexpression$3", "IntegerDataTypeModifier"], "postprocess":  function (data) {
            const [, modifier] = data;
            const dataTextRange = parse_util_1.getTextRange(data);
            const result = {
                syntaxKind: parser_node_1.SyntaxKind.DecimalDataType,
                precision: {
                    syntaxKind: parser_node_1.SyntaxKind.Precision,
                    start: dataTextRange.end,
                    end: dataTextRange.end,
                    /**
                     * https://dev.mysql.com/doc/refman/5.7/en/fixed-point-types.html
                     *
                     * the syntax DECIMAL is equivalent to DECIMAL(M,0),
                     * where the implementation is permitted to decide the value of M.
                     * MySQL supports both of these variant forms of DECIMAL syntax.
                     * The default value of M is 10.
                     */
                    precision: {
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        start: dataTextRange.end,
                        end: dataTextRange.end,
                        value: BigInt(10),
                    },
                    scale: {
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        start: dataTextRange.end,
                        end: dataTextRange.end,
                        value: BigInt(0),
                    },
                },
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
            return result;
        } },
    {"name": "RealDataType$subexpression$1", "symbols": [REAL]},
    {"name": "RealDataType$subexpression$1", "symbols": [DOUBLE]},
    {"name": "RealDataType$subexpression$1$subexpression$1", "symbols": [DOUBLE, PRECISION]},
    {"name": "RealDataType$subexpression$1", "symbols": ["RealDataType$subexpression$1$subexpression$1"]},
    {"name": "RealDataType$ebnf$1", "symbols": ["RealPrecision"], "postprocess": id},
    {"name": "RealDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "RealDataType", "symbols": ["RealDataType$subexpression$1", "RealDataType$ebnf$1", "IntegerDataTypeModifier"], "postprocess":  function (data) {
            const [dataType, precision, modifier] = data;
            const bytes = (dataType[0] instanceof Array ?
                8 :
                dataType[0].tokenKind == scanner_1.TokenKind.DOUBLE ?
                    8 :
                    this.settings.realAsFloat ?
                        4 :
                        8);
            return {
                syntaxKind: parser_node_1.SyntaxKind.RealDataType,
                bytes,
                precision: precision !== null && precision !== void 0 ? precision : undefined,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "EnumDataType", "symbols": [ENUM, "StringList", "CharacterDataTypeModifier"], "postprocess":  (data) => {
            const [, elements, modifier] = data;
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.EnumDataType,
                /**
                 * @todo Check for duplicate elements
                 */
                elements,
                characterSet: modifier.characterSet,
                collate: modifier.collate,
                binary: modifier.binary,
            };
            return result;
        } },
    {"name": "RealDataType", "symbols": [FLOAT, "FieldLength", "IntegerDataTypeModifier"], "postprocess":  function (data) {
            const [, fieldLength, modifier] = data;
            const bytes = (fieldLength.length.value <= BigInt(24) ?
                4 :
                fieldLength.length.value <= BigInt(53) ?
                    8 :
                    undefined);
            const result = {
                syntaxKind: parser_node_1.SyntaxKind.RealDataType,
                bytes: bytes !== null && bytes !== void 0 ? bytes : 8,
                precision: undefined,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
            if (bytes == undefined) {
                parse_util_1.pushSyntacticErrorAt(result, fieldLength.length.start, fieldLength.length.end, [], diagnostic_messages_1.DiagnosticMessages.InvalidRealDataTypePrecisionBits);
            }
            return result;
        } },
    {"name": "RealDataType", "symbols": [FLOAT, "RealPrecision", "IntegerDataTypeModifier"], "postprocess":  function (data) {
            const [, precision, modifier] = data;
            const result = {
                syntaxKind: parser_node_1.SyntaxKind.RealDataType,
                bytes: 4,
                precision,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
            return result;
        } },
    {"name": "RealDataType", "symbols": [FLOAT, "IntegerDataTypeModifier"], "postprocess":  function (data) {
            const [, modifier] = data;
            const result = {
                syntaxKind: parser_node_1.SyntaxKind.RealDataType,
                bytes: 4,
                precision: undefined,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
            return result;
        } },
    {"name": "GeometryCollectionDataType$subexpression$1", "symbols": [MULTIPOINT]},
    {"name": "GeometryCollectionDataType$subexpression$1", "symbols": [MULTILINESTRING]},
    {"name": "GeometryCollectionDataType$subexpression$1", "symbols": [MULTIPOLYGON]},
    {"name": "GeometryCollectionDataType$subexpression$1", "symbols": [GEOMETRYCOLLECTION]},
    {"name": "GeometryCollectionDataType", "symbols": ["GeometryCollectionDataType$subexpression$1"], "postprocess":  (data) => {
            const [[token]] = data;
            return {
                syntaxKind: parser_node_1.SyntaxKind.GeometryCollectionDataType,
                geometryType: (token.tokenKind == scanner_1.TokenKind.MULTIPOINT ?
                    parser_node_1.GeometryType.Point :
                    token.tokenKind == scanner_1.TokenKind.MULTILINESTRING ?
                        parser_node_1.GeometryType.LineString :
                        token.tokenKind == scanner_1.TokenKind.MULTIPOLYGON ?
                            parser_node_1.GeometryType.Polygon :
                            parser_node_1.GeometryType.Geometry),
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "GeometryDataType$subexpression$1", "symbols": [POINT]},
    {"name": "GeometryDataType$subexpression$1", "symbols": [LINESTRING]},
    {"name": "GeometryDataType$subexpression$1", "symbols": [POLYGON]},
    {"name": "GeometryDataType$subexpression$1", "symbols": [GEOMETRY]},
    {"name": "GeometryDataType", "symbols": ["GeometryDataType$subexpression$1"], "postprocess":  (data) => {
            const [[token]] = data;
            return {
                syntaxKind: parser_node_1.SyntaxKind.GeometryDataType,
                geometryType: (token.tokenKind == scanner_1.TokenKind.POINT ?
                    parser_node_1.GeometryType.Point :
                    token.tokenKind == scanner_1.TokenKind.LINESTRING ?
                        parser_node_1.GeometryType.LineString :
                        token.tokenKind == scanner_1.TokenKind.POLYGON ?
                            parser_node_1.GeometryType.Polygon :
                            parser_node_1.GeometryType.Geometry),
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "IntegerDataTypeModifier$ebnf$1", "symbols": []},
    {"name": "IntegerDataTypeModifier$ebnf$1$subexpression$1", "symbols": [SIGNED]},
    {"name": "IntegerDataTypeModifier$ebnf$1$subexpression$1", "symbols": [UNSIGNED]},
    {"name": "IntegerDataTypeModifier$ebnf$1$subexpression$1", "symbols": [ZEROFILL]},
    {"name": "IntegerDataTypeModifier$ebnf$1", "symbols": ["IntegerDataTypeModifier$ebnf$1", "IntegerDataTypeModifier$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "IntegerDataTypeModifier", "symbols": ["IntegerDataTypeModifier$ebnf$1"], "postprocess":  function (data) {
            let integerDataTypeModifier = parse_util_1.createDefaultIntegerDataTypeModifier();
            for (const ele of data[0]) {
                integerDataTypeModifier = parse_util_1.processIntegerDataTypeModifier(integerDataTypeModifier, ele[0]);
            }
            return integerDataTypeModifier;
        } },
    {"name": "IntegerDataType$subexpression$1", "symbols": [TINYINT]},
    {"name": "IntegerDataType$subexpression$1", "symbols": [SMALLINT]},
    {"name": "IntegerDataType$subexpression$1", "symbols": [MEDIUMINT]},
    {"name": "IntegerDataType$subexpression$1", "symbols": [INT]},
    {"name": "IntegerDataType$subexpression$1", "symbols": [INTEGER]},
    {"name": "IntegerDataType$subexpression$1", "symbols": [BIGINT]},
    {"name": "IntegerDataType$ebnf$1$subexpression$1", "symbols": [OpenParentheses, "IntegerLiteral", CloseParentheses]},
    {"name": "IntegerDataType$ebnf$1", "symbols": ["IntegerDataType$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "IntegerDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IntegerDataType", "symbols": ["IntegerDataType$subexpression$1", "IntegerDataType$ebnf$1", "IntegerDataTypeModifier"], "postprocess":  (data) => {
            const [dataType, displayWidth, modifier] = data;
            const token = dataType[0].tokenKind;
            const bytes = (token == scanner_1.TokenKind.TINYINT ?
                1 :
                token == scanner_1.TokenKind.SMALLINT ?
                    2 :
                    token == scanner_1.TokenKind.MEDIUMINT ?
                        3 :
                        token == scanner_1.TokenKind.INT ?
                            4 :
                            token == scanner_1.TokenKind.INTEGER ?
                                4 :
                                8);
            return {
                syntaxKind: parser_node_1.SyntaxKind.IntegerDataType,
                bytes,
                displayWidth: (displayWidth == undefined ?
                    undefined :
                    Number(displayWidth[1].value)),
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "JsonDataType", "symbols": [JSON], "postprocess":  (data) => {
            return {
                syntaxKind: parser_node_1.SyntaxKind.JsonDataType,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "SetDataType", "symbols": [SET, "StringList", "CharacterDataTypeModifier"], "postprocess":  (data) => {
            const [, elements, modifier] = data;
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.SetDataType,
                /**
                 * @todo Check for duplicate elements
                 */
                elements,
                characterSet: modifier.characterSet,
                collate: modifier.collate,
                binary: modifier.binary,
            };
            return result;
        } },
    {"name": "TextDataType$subexpression$1", "symbols": [TINYTEXT]},
    {"name": "TextDataType$subexpression$1", "symbols": [TEXT]},
    {"name": "TextDataType$subexpression$1", "symbols": [MEDIUMTEXT]},
    {"name": "TextDataType$subexpression$1", "symbols": [LONGTEXT]},
    {"name": "TextDataType", "symbols": ["TextDataType$subexpression$1", "CharacterDataTypeModifier"], "postprocess":  (data) => {
            const [[token], modifier] = data;
            return {
                syntaxKind: parser_node_1.SyntaxKind.TextDataType,
                lengthBytes: (token.tokenKind == scanner_1.TokenKind.TINYTEXT ?
                    8 :
                    token.tokenKind == scanner_1.TokenKind.TEXT ?
                        16 :
                        token.tokenKind == scanner_1.TokenKind.MEDIUMTEXT ?
                            24 :
                            32),
                characterSet: modifier.characterSet,
                collate: modifier.collate,
                binary: modifier.binary,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "TextDataType$ebnf$1$subexpression$1", "symbols": [VARCHAR]},
    {"name": "TextDataType$ebnf$1$subexpression$1$subexpression$1", "symbols": [CHAR, VARYING]},
    {"name": "TextDataType$ebnf$1$subexpression$1", "symbols": ["TextDataType$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "TextDataType$ebnf$1", "symbols": ["TextDataType$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "TextDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TextDataType", "symbols": [LONG, "TextDataType$ebnf$1", "CharacterDataTypeModifier"], "postprocess":  (data) => {
            const [, , modifier] = data;
            return {
                syntaxKind: parser_node_1.SyntaxKind.TextDataType,
                lengthBytes: 24,
                characterSet: modifier.characterSet,
                collate: modifier.collate,
                binary: modifier.binary,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "TextDataType", "symbols": [TEXT, "FieldLength", "CharacterDataTypeModifier"], "postprocess":  (data) => {
            const [, fieldLength, modifier] = data;
            const result = {
                syntaxKind: parser_node_1.SyntaxKind.TextDataType,
                lengthBytes: (fieldLength.length.value < (BigInt(1) << BigInt(8)) ?
                    8 :
                    fieldLength.length.value < (BigInt(1) << BigInt(16)) ?
                        16 :
                        fieldLength.length.value < (BigInt(1) << BigInt(24)) ?
                            24 :
                            32),
                characterSet: modifier.characterSet,
                collate: modifier.collate,
                binary: modifier.binary,
                ...parse_util_1.getTextRange(data),
            };
            if (fieldLength.length.value >= (BigInt(1) << BigInt(32))) {
                parse_util_1.pushSyntacticErrorAt(result, fieldLength.length.start, fieldLength.length.end, [], diagnostic_messages_1.DiagnosticMessages.InvalidTextDataTypeBytes);
            }
            return result;
        } },
    {"name": "TimeDataType$ebnf$1", "symbols": ["FieldLength"], "postprocess": id},
    {"name": "TimeDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TimeDataType", "symbols": [TIME, "TimeDataType$ebnf$1"], "postprocess":  (data) => {
            const [dataType, fractionalSecondPrecision] = data;
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.TimeDataType,
                fractionalSecondPrecision: (fractionalSecondPrecision !== null && fractionalSecondPrecision !== void 0 ? fractionalSecondPrecision : {
                    start: dataType.end,
                    end: dataType.end,
                    syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                    length: {
                        start: dataType.end,
                        end: dataType.end,
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        value: BigInt(0),
                    },
                }),
            };
            return result;
        } },
    {"name": "TimestampDataType$ebnf$1", "symbols": ["FieldLength"], "postprocess": id},
    {"name": "TimestampDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TimestampDataType", "symbols": [TIMESTAMP, "TimestampDataType$ebnf$1"], "postprocess":  (data) => {
            const [dataType, fractionalSecondPrecision] = data;
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.TimestampDataType,
                fractionalSecondPrecision: (fractionalSecondPrecision !== null && fractionalSecondPrecision !== void 0 ? fractionalSecondPrecision : {
                    start: dataType.end,
                    end: dataType.end,
                    syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                    length: {
                        start: dataType.end,
                        end: dataType.end,
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        value: BigInt(0),
                    },
                }),
            };
            return result;
        } },
    {"name": "YearDataType$ebnf$1", "symbols": ["FieldLength"], "postprocess": id},
    {"name": "YearDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "YearDataType", "symbols": [YEAR, "YearDataType$ebnf$1"], "postprocess":  (data) => {
            const [dataType, fieldLength] = data;
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.YearDataType,
                fieldLength: (fieldLength !== null && fieldLength !== void 0 ? fieldLength : {
                    start: dataType.end,
                    end: dataType.end,
                    syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                    length: {
                        start: dataType.end,
                        end: dataType.end,
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        value: BigInt(4),
                    },
                }),
            };
            if (fieldLength != undefined &&
                fieldLength.length.value != BigInt(4)) {
                parse_util_1.pushSyntacticErrorAt(result, dataType.end, dataType.end, [dataType], diagnostic_messages_1.DiagnosticMessages.YearFieldLengthMustBe4);
            }
            return result;
        } },
    {"name": "BitLiteral", "symbols": [BitLiteral], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.BitLiteral,
                value: data[0].value,
                sourceText: data[0].getTokenSourceText(),
            };
        } },
    {"name": "DecimalLiteral", "symbols": [DecimalLiteral], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.DecimalLiteral,
                value: data[0].value,
            };
        } },
    {"name": "Expression$subexpression$1", "symbols": ["IntegerLiteralOrDecimalLiteral"]},
    {"name": "Expression$subexpression$1", "symbols": ["RealLiteral"]},
    {"name": "Expression$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "Expression$subexpression$1", "symbols": ["Identifier"]},
    {"name": "Expression$subexpression$1", "symbols": ["ParamMarker"]},
    {"name": "Expression$subexpression$1", "symbols": ["UserVariableIdentifier"]},
    {"name": "Expression", "symbols": ["Expression$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "HexLiteral", "symbols": [HexLiteral], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.HexLiteral,
                value: data[0].value,
                sourceText: data[0].getTokenSourceText(),
            };
        } },
    {"name": "IntegerLiteralOrDecimalLiteral", "symbols": [IntegerLiteral], "postprocess":  (data) => {
            const value = BigInt(data[0].value);
            if (value > constants_1.BigIntUnsignedMaxValue) {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.DecimalLiteral,
                    value: data[0].value,
                };
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                value,
            };
        } },
    {"name": "IntegerLiteral", "symbols": [IntegerLiteral], "postprocess":  (data) => {
            const value = BigInt(data[0].value);
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                value,
            };
            return result;
        } },
    {"name": "ParamMarker", "symbols": [QuestionMark], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ParamMarker,
            };
        } },
    {"name": "RealLiteral", "symbols": [RealLiteral], "postprocess":  (data) => {
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.RealLiteral,
                value: parseFloat(data[0].value),
                sourceText: data[0].value,
            };
            return result;
        } },
    {"name": "StringLiteral", "symbols": [StringLiteral], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                value: data[0].value,
                sourceText: data[0].getTokenSourceText(),
            };
        } },
    {"name": "UserVariableIdentifier", "symbols": [UserVariableIdentifier], "postprocess":  (data) => {
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.UserVariableIdentifier,
                identifier: data[0].value,
                sourceText: data[0].getTokenSourceText(),
            };
            return result;
        } },
    {"name": "AccountIdentifier$subexpression$1", "symbols": ["Identifier"]},
    {"name": "AccountIdentifier$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "AccountIdentifier$ebnf$1", "symbols": ["UserVariableIdentifier"], "postprocess": id},
    {"name": "AccountIdentifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AccountIdentifier", "symbols": ["AccountIdentifier$subexpression$1", "AccountIdentifier$ebnf$1"], "postprocess":  (data) => {
            const [userName, hostName] = data;
            if (hostName == null) {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.AccountIdentifier,
                    userName: userName[0],
                    hostName: {
                        start: userName[0].end,
                        end: userName[0].end,
                        syntaxKind: parser_node_1.SyntaxKind.UserVariableIdentifier,
                        identifier: "%",
                        sourceText: "@'%'",
                    },
                };
            }
            else {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.AccountIdentifier,
                    userName: userName[0],
                    hostName: hostName,
                };
            }
        } },
    {"name": "AccountIdentifierOrCurrentUser", "symbols": ["AccountIdentifier"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "AccountIdentifierOrCurrentUser$ebnf$1$subexpression$1", "symbols": [OpenParentheses, CloseParentheses]},
    {"name": "AccountIdentifierOrCurrentUser$ebnf$1", "symbols": ["AccountIdentifierOrCurrentUser$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AccountIdentifierOrCurrentUser$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AccountIdentifierOrCurrentUser", "symbols": [CURRENT_USER, "AccountIdentifierOrCurrentUser$ebnf$1"], "postprocess":  (data) => {
            return parse_util_1.toValueNode("CURRENT_USER", parse_util_1.getTextRange(data));
        } },
    {"name": "CharacterSetNameOrDefault", "symbols": ["Identifier"], "postprocess":  function (data) {
            const identifier = data[0];
            if (!identifier.quoted &&
                identifier.identifier.toUpperCase() == "DEFAULT") {
                /**
                 * We allow `DEFAULT` here.
                 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7028
                 */
                return parse_util_1.toValueNode("DEFAULT", parse_util_1.getTextRange(data));
            }
            //We allow `BINARY` here
            //https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7016
            if (identifier.identifier.toUpperCase() == "BINARY") {
                return {
                    ...identifier,
                    identifier: identifier.identifier.toLowerCase(),
                    //Hack; remove the syntactic error
                    syntacticErrors: undefined,
                };
            }
            else {
                return {
                    ...identifier,
                    identifier: identifier.identifier.toLowerCase(),
                };
            }
        } },
    {"name": "CharacterSetNameOrDefault", "symbols": ["StringLiteral"], "postprocess":  function (data) {
            return data[0];
        } },
    {"name": "CharacterSetName", "symbols": ["Identifier"], "postprocess":  function (data) {
            const identifier = data[0];
            //We allow `BINARY` here
            //https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7016
            if (identifier.identifier.toUpperCase() == "BINARY") {
                return {
                    ...identifier,
                    identifier: identifier.identifier.toLowerCase(),
                    //Hack; remove the syntactic error
                    syntacticErrors: undefined,
                };
            }
            else {
                return {
                    ...identifier,
                    identifier: identifier.identifier.toLowerCase(),
                };
            }
        } },
    {"name": "CharacterSetName", "symbols": ["StringLiteral"], "postprocess":  function (data) {
            return data[0];
        } },
    {"name": "CollationNameOrDefault$subexpression$1", "symbols": ["Identifier"]},
    {"name": "CollationNameOrDefault$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "CollationNameOrDefault", "symbols": ["CollationNameOrDefault$subexpression$1"], "postprocess":  function (data) {
            let [[collationName]] = data;
            collationName = (collationName.syntaxKind == parser_node_1.SyntaxKind.StringLiteral ?
                {
                    ...collationName,
                    value: collationName.value.toLowerCase(),
                } :
                {
                    ...collationName,
                    identifier: collationName.identifier.toLowerCase(),
                });
            return (collationName.syntaxKind == parser_node_1.SyntaxKind.StringLiteral ?
                collationName :
                collationName.quoted ?
                    collationName :
                    collationName.identifier.toUpperCase() == "DEFAULT" ?
                        parse_util_1.toValueNode("DEFAULT", parse_util_1.getTextRange(collationName)) :
                        collationName);
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
                    identifier: tokenObj.getTokenSourceText(),
                    quoted: false,
                };
            }
            const result = {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Identifier,
                identifier: tokenObj.getTokenSourceText(),
                quoted: false,
            };
            parse_util_1.pushSyntacticErrorAtNode(result, [], diagnostic_messages_1.DiagnosticMessages.CannotUseReservedKeywordAsIdentifier, scanner_1.ReverseTokenKind[tokenObj.tokenKind]);
            return result;
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
                identifier: tokenObj.getTokenSourceText(),
                quoted: false,
            };
        } },
    {"name": "ColumnIdentifier$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [Dot, "IdentifierAllowReserved"]},
    {"name": "ColumnIdentifier$ebnf$1$subexpression$1$ebnf$1", "symbols": ["ColumnIdentifier$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "ColumnIdentifier$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "ColumnIdentifier$ebnf$1$subexpression$1", "symbols": [Dot, "IdentifierAllowReserved", "ColumnIdentifier$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "ColumnIdentifier$ebnf$1", "symbols": ["ColumnIdentifier$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "ColumnIdentifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "ColumnIdentifier", "symbols": ["Identifier", "ColumnIdentifier$ebnf$1"], "postprocess":  (data) => {
            const [nameA, nameB] = data;
            if (nameB == null) {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.ColumnIdentifier,
                    schemaName: undefined,
                    tableName: undefined,
                    columnName: nameA,
                };
            }
            else {
                const nameC = nameB[2];
                if (nameC == null) {
                    return {
                        ...parse_util_1.getTextRange(data),
                        syntaxKind: parser_node_1.SyntaxKind.ColumnIdentifier,
                        schemaName: undefined,
                        tableName: nameA,
                        columnName: nameB[1],
                    };
                }
                else {
                    return {
                        ...parse_util_1.getTextRange(data),
                        syntaxKind: parser_node_1.SyntaxKind.ColumnIdentifier,
                        schemaName: nameA,
                        tableName: nameB[1],
                        columnName: nameC[1],
                    };
                }
            }
        } },
    {"name": "EventIdentifier$ebnf$1$subexpression$1", "symbols": [Dot, "IdentifierAllowReserved"]},
    {"name": "EventIdentifier$ebnf$1", "symbols": ["EventIdentifier$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "EventIdentifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "EventIdentifier", "symbols": ["Identifier", "EventIdentifier$ebnf$1"], "postprocess":  (data) => {
            const [nameA, nameB] = data;
            if (nameB == null) {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.EventIdentifier,
                    schemaName: undefined,
                    eventName: nameA,
                };
            }
            else {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.EventIdentifier,
                    schemaName: nameA,
                    eventName: nameB[1],
                };
            }
        } },
    {"name": "LabelIdentifier", "symbols": ["Identifier"], "postprocess":  function (data) {
            if (data[0].quoted) {
                return data[0];
            }
            /**
             * @todo Should this check be in linter instead?
             *
             * It shouldn't introduce an ambiguous grammar.
             */
            if (constants_1.labelIdentifierNonReservedKeywords.includes(data[0].identifier.toUpperCase())) {
                /**
                 * We allow certain keywords for label identifiers
                 */
                return {
                    ...data[0],
                    syntacticErrors: undefined,
                };
            }
            return data[0];
        } },
    {"name": "StoredFunctionIdentifier$ebnf$1$subexpression$1", "symbols": [Dot, "IdentifierAllowReserved"]},
    {"name": "StoredFunctionIdentifier$ebnf$1", "symbols": ["StoredFunctionIdentifier$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "StoredFunctionIdentifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "StoredFunctionIdentifier", "symbols": ["Identifier", "StoredFunctionIdentifier$ebnf$1"], "postprocess":  (data) => {
            const [nameA, nameB] = data;
            if (nameB == null) {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.StoredFunctionIdentifier,
                    schemaName: undefined,
                    storedFunctionName: nameA,
                };
            }
            else {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.StoredFunctionIdentifier,
                    schemaName: nameA,
                    storedFunctionName: nameB[1],
                };
            }
        } },
    {"name": "StoredProcedureIdentifier$ebnf$1$subexpression$1", "symbols": [Dot, "IdentifierAllowReserved"]},
    {"name": "StoredProcedureIdentifier$ebnf$1", "symbols": ["StoredProcedureIdentifier$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "StoredProcedureIdentifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "StoredProcedureIdentifier", "symbols": ["Identifier", "StoredProcedureIdentifier$ebnf$1"], "postprocess":  (data) => {
            const [nameA, nameB] = data;
            if (nameB == null) {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.StoredProcedureIdentifier,
                    schemaName: undefined,
                    storedProcedureName: nameA,
                };
            }
            else {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.StoredProcedureIdentifier,
                    schemaName: nameA,
                    storedProcedureName: nameB[1],
                };
            }
        } },
    {"name": "TableIdentifier$ebnf$1$subexpression$1", "symbols": [Dot, "IdentifierAllowReserved"]},
    {"name": "TableIdentifier$ebnf$1", "symbols": ["TableIdentifier$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "TableIdentifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TableIdentifier", "symbols": ["Identifier", "TableIdentifier$ebnf$1"], "postprocess":  (data) => {
            const [nameA, nameB] = data;
            if (nameB == null) {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.TableIdentifier,
                    schemaName: undefined,
                    tableName: nameA,
                };
            }
            else {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.TableIdentifier,
                    schemaName: nameA,
                    tableName: nameB[1],
                };
            }
        } },
    {"name": "TriggerIdentifier$ebnf$1$subexpression$1", "symbols": [Dot, "IdentifierAllowReserved"]},
    {"name": "TriggerIdentifier$ebnf$1", "symbols": ["TriggerIdentifier$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "TriggerIdentifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TriggerIdentifier", "symbols": ["Identifier", "TriggerIdentifier$ebnf$1"], "postprocess":  (data) => {
            const [nameA, nameB] = data;
            if (nameB == null) {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.TriggerIdentifier,
                    schemaName: undefined,
                    triggerName: nameA,
                };
            }
            else {
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.TriggerIdentifier,
                    schemaName: nameA,
                    triggerName: nameB[1],
                };
            }
        } },
    {"name": "Comment", "symbols": [COMMENT, "StringLiteral"], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "Constraint$ebnf$1", "symbols": ["Identifier"], "postprocess": id},
    {"name": "Constraint$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Constraint", "symbols": [CONSTRAINT, "Constraint$ebnf$1"], "postprocess":  (data) => {
            var _a;
            return (_a = data[1]) !== null && _a !== void 0 ? _a : parse_util_1.getTextRange(data);
        } },
    {"name": "CurrentTimestamp", "symbols": [NowToken, OpenParentheses, CloseParentheses], "postprocess":  (data) => {
            const textRange = parse_util_1.getTextRange(data);
            return {
                ...textRange,
                syntaxKind: parser_node_1.SyntaxKind.CurrentTimestamp,
                fractionalSecondPrecision: {
                    ...textRange,
                    syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                    length: {
                        ...textRange,
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        value: BigInt(0),
                    },
                },
            };
        } },
    {"name": "CurrentTimestamp$ebnf$1$subexpression$1", "symbols": [OpenParentheses, CloseParentheses]},
    {"name": "CurrentTimestamp$ebnf$1", "symbols": ["CurrentTimestamp$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CurrentTimestamp$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CurrentTimestamp", "symbols": [CURRENT_TIMESTAMP, "CurrentTimestamp$ebnf$1"], "postprocess":  (data) => {
            const textRange = parse_util_1.getTextRange(data);
            return {
                ...textRange,
                syntaxKind: parser_node_1.SyntaxKind.CurrentTimestamp,
                fractionalSecondPrecision: {
                    ...textRange,
                    syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                    length: {
                        ...textRange,
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        value: BigInt(0),
                    },
                },
            };
        } },
    {"name": "CurrentTimestamp$subexpression$1", "symbols": [CURRENT_TIMESTAMP]},
    {"name": "CurrentTimestamp$subexpression$1", "symbols": [NowToken]},
    {"name": "CurrentTimestamp", "symbols": ["CurrentTimestamp$subexpression$1", "FieldLength"], "postprocess":  (data) => {
            const [, fractionalSecondPrecision] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CurrentTimestamp,
                fractionalSecondPrecision,
            };
        } },
    {"name": "DefaultCharacterSet$ebnf$1", "symbols": [DEFAULT], "postprocess": id},
    {"name": "DefaultCharacterSet$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "DefaultCharacterSet$subexpression$1$subexpression$1", "symbols": [CHARACTER, SET]},
    {"name": "DefaultCharacterSet$subexpression$1", "symbols": ["DefaultCharacterSet$subexpression$1$subexpression$1"]},
    {"name": "DefaultCharacterSet$subexpression$1", "symbols": [CHARSET]},
    {"name": "DefaultCharacterSet$ebnf$2", "symbols": [Equal], "postprocess": id},
    {"name": "DefaultCharacterSet$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "DefaultCharacterSet", "symbols": ["DefaultCharacterSet$ebnf$1", "DefaultCharacterSet$subexpression$1", "DefaultCharacterSet$ebnf$2", "CharacterSetNameOrDefault"], "postprocess":  (data) => {
            let [, , , characterSetName] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.DefaultCharacterSet,
                characterSetName,
            };
        } },
    {"name": "DefaultCollation$ebnf$1", "symbols": [DEFAULT], "postprocess": id},
    {"name": "DefaultCollation$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "DefaultCollation$ebnf$2", "symbols": [Equal], "postprocess": id},
    {"name": "DefaultCollation$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "DefaultCollation", "symbols": ["DefaultCollation$ebnf$1", COLLATE, "DefaultCollation$ebnf$2", "CollationNameOrDefault"], "postprocess":  (data) => {
            const [, , , collationName] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.DefaultCollation,
                collationName,
            };
        } },
    {"name": "ExpressionListList$ebnf$1", "symbols": []},
    {"name": "ExpressionListList$ebnf$1$subexpression$1", "symbols": [Comma, "ExpressionList"]},
    {"name": "ExpressionListList$ebnf$1", "symbols": ["ExpressionListList$ebnf$1", "ExpressionListList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ExpressionListList", "symbols": [OpenParentheses, "ExpressionList", "ExpressionListList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.ExpressionListList, parse_util_1.getTextRange(data));
        } },
    {"name": "ExpressionList$ebnf$1", "symbols": []},
    {"name": "ExpressionList$ebnf$1$subexpression$1", "symbols": [Comma, "Expression"]},
    {"name": "ExpressionList$ebnf$1", "symbols": ["ExpressionList$ebnf$1", "ExpressionList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ExpressionList", "symbols": [OpenParentheses, "Expression", "ExpressionList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.ExpressionList, parse_util_1.getTextRange(data));
        } },
    {"name": "FieldLength$subexpression$1", "symbols": ["IntegerLiteral"]},
    {"name": "FieldLength$subexpression$1", "symbols": ["DecimalLiteral"]},
    {"name": "FieldLength$subexpression$1", "symbols": ["RealLiteral"]},
    {"name": "FieldLength", "symbols": [OpenParentheses, "FieldLength$subexpression$1", CloseParentheses], "postprocess":  (data) => {
            let [, [literal],] = data;
            if (literal.syntaxKind == parser_node_1.SyntaxKind.DecimalLiteral) {
                literal = {
                    ...literal,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(literal.value.replace(/\.\d*$/, "")),
                };
                parse_util_1.pushSyntacticErrorAt(literal, literal.start, literal.end, [], diagnostic_messages_1.DiagnosticMessages.FieldLengthExpectsIntegerLiteral);
            }
            else if (literal.syntaxKind == parser_node_1.SyntaxKind.RealLiteral) {
                literal = {
                    ...literal,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(Math.floor(literal.value)),
                };
                parse_util_1.pushSyntacticErrorAt(literal, literal.start, literal.end, [], diagnostic_messages_1.DiagnosticMessages.FieldLengthExpectsIntegerLiteral);
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.FieldLength,
                length: literal,
            };
        } },
    {"name": "IdentifierList$ebnf$1", "symbols": []},
    {"name": "IdentifierList$ebnf$1$subexpression$1", "symbols": [Comma, "Identifier"]},
    {"name": "IdentifierList$ebnf$1", "symbols": ["IdentifierList$ebnf$1", "IdentifierList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "IdentifierList", "symbols": [OpenParentheses, "Identifier", "IdentifierList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.IdentifierList, parse_util_1.getTextRange(data));
        } },
    {"name": "IdentifierList_2OrMore$ebnf$1$subexpression$1", "symbols": [Comma, "Identifier"]},
    {"name": "IdentifierList_2OrMore$ebnf$1", "symbols": ["IdentifierList_2OrMore$ebnf$1$subexpression$1"]},
    {"name": "IdentifierList_2OrMore$ebnf$1$subexpression$2", "symbols": [Comma, "Identifier"]},
    {"name": "IdentifierList_2OrMore$ebnf$1", "symbols": ["IdentifierList_2OrMore$ebnf$1", "IdentifierList_2OrMore$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "IdentifierList_2OrMore", "symbols": [OpenParentheses, "Identifier", "IdentifierList_2OrMore$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.IdentifierList, parse_util_1.getTextRange(data));
        } },
    {"name": "Interval$subexpression$1", "symbols": [DAY]},
    {"name": "Interval$subexpression$1", "symbols": [WEEK]},
    {"name": "Interval$subexpression$1", "symbols": [HOUR]},
    {"name": "Interval$subexpression$1", "symbols": [MINUTE]},
    {"name": "Interval$subexpression$1", "symbols": [MONTH]},
    {"name": "Interval$subexpression$1", "symbols": [QUARTER]},
    {"name": "Interval$subexpression$1", "symbols": [SECOND]},
    {"name": "Interval$subexpression$1", "symbols": [MICROSECOND]},
    {"name": "Interval$subexpression$1", "symbols": [YEAR]},
    {"name": "Interval$subexpression$1", "symbols": [DAY_HOUR]},
    {"name": "Interval$subexpression$1", "symbols": [DAY_MICROSECOND]},
    {"name": "Interval$subexpression$1", "symbols": [DAY_MINUTE]},
    {"name": "Interval$subexpression$1", "symbols": [DAY_SECOND]},
    {"name": "Interval$subexpression$1", "symbols": [HOUR_MICROSECOND]},
    {"name": "Interval$subexpression$1", "symbols": [HOUR_MINUTE]},
    {"name": "Interval$subexpression$1", "symbols": [HOUR_SECOND]},
    {"name": "Interval$subexpression$1", "symbols": [MINUTE_MICROSECOND]},
    {"name": "Interval$subexpression$1", "symbols": [MINUTE_SECOND]},
    {"name": "Interval$subexpression$1", "symbols": [SECOND_MICROSECOND]},
    {"name": "Interval$subexpression$1", "symbols": [YEAR_MONTH]},
    {"name": "Interval", "symbols": ["Interval$subexpression$1"], "postprocess":  (data) => {
            const [[intervalType]] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Interval,
                intervalType: (intervalType.tokenKind == scanner_1.TokenKind.DAY ?
                    parser_node_1.IntervalType.DAY :
                    intervalType.tokenKind == scanner_1.TokenKind.WEEK ?
                        parser_node_1.IntervalType.WEEK :
                        intervalType.tokenKind == scanner_1.TokenKind.HOUR ?
                            parser_node_1.IntervalType.HOUR :
                            intervalType.tokenKind == scanner_1.TokenKind.MINUTE ?
                                parser_node_1.IntervalType.MINUTE :
                                intervalType.tokenKind == scanner_1.TokenKind.MONTH ?
                                    parser_node_1.IntervalType.MONTH :
                                    intervalType.tokenKind == scanner_1.TokenKind.QUARTER ?
                                        parser_node_1.IntervalType.QUARTER :
                                        intervalType.tokenKind == scanner_1.TokenKind.SECOND ?
                                            parser_node_1.IntervalType.SECOND :
                                            intervalType.tokenKind == scanner_1.TokenKind.MICROSECOND ?
                                                parser_node_1.IntervalType.MICROSECOND :
                                                intervalType.tokenKind == scanner_1.TokenKind.YEAR ?
                                                    parser_node_1.IntervalType.YEAR :
                                                    intervalType.tokenKind == scanner_1.TokenKind.DAY_HOUR ?
                                                        parser_node_1.IntervalType.DAY_HOUR :
                                                        intervalType.tokenKind == scanner_1.TokenKind.DAY_MICROSECOND ?
                                                            parser_node_1.IntervalType.DAY_MICROSECOND :
                                                            intervalType.tokenKind == scanner_1.TokenKind.DAY_MINUTE ?
                                                                parser_node_1.IntervalType.DAY_MINUTE :
                                                                intervalType.tokenKind == scanner_1.TokenKind.DAY_SECOND ?
                                                                    parser_node_1.IntervalType.DAY_SECOND :
                                                                    intervalType.tokenKind == scanner_1.TokenKind.HOUR_MICROSECOND ?
                                                                        parser_node_1.IntervalType.HOUR_MICROSECOND :
                                                                        intervalType.tokenKind == scanner_1.TokenKind.HOUR_MINUTE ?
                                                                            parser_node_1.IntervalType.HOUR_MINUTE :
                                                                            intervalType.tokenKind == scanner_1.TokenKind.HOUR_SECOND ?
                                                                                parser_node_1.IntervalType.HOUR_SECOND :
                                                                                intervalType.tokenKind == scanner_1.TokenKind.MINUTE_MICROSECOND ?
                                                                                    parser_node_1.IntervalType.MINUTE_MICROSECOND :
                                                                                    intervalType.tokenKind == scanner_1.TokenKind.MINUTE_SECOND ?
                                                                                        parser_node_1.IntervalType.MINUTE_SECOND :
                                                                                        intervalType.tokenKind == scanner_1.TokenKind.SECOND_MICROSECOND ?
                                                                                            parser_node_1.IntervalType.SECOND_MICROSECOND :
                                                                                            parser_node_1.IntervalType.YEAR_MONTH)
            };
        } },
    {"name": "Precision$subexpression$1", "symbols": ["IntegerLiteral"]},
    {"name": "Precision$subexpression$1", "symbols": ["DecimalLiteral"]},
    {"name": "Precision$subexpression$1", "symbols": ["RealLiteral"]},
    {"name": "Precision$subexpression$2", "symbols": ["IntegerLiteral"]},
    {"name": "Precision$subexpression$2", "symbols": ["DecimalLiteral"]},
    {"name": "Precision$subexpression$2", "symbols": ["RealLiteral"]},
    {"name": "Precision", "symbols": [OpenParentheses, "Precision$subexpression$1", Comma, "Precision$subexpression$2", CloseParentheses], "postprocess":  (data) => {
            let [, [precision], , [scale],] = data;
            if (precision.syntaxKind == parser_node_1.SyntaxKind.DecimalLiteral) {
                precision = {
                    ...precision,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(precision.value.replace(/\.\d*$/, "")),
                };
                parse_util_1.pushSyntacticErrorAt(precision, precision.start, precision.end, [], diagnostic_messages_1.DiagnosticMessages.PrecisionExpectsIntegerLiteral);
            }
            else if (precision.syntaxKind == parser_node_1.SyntaxKind.RealLiteral) {
                precision = {
                    ...precision,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(Math.floor(precision.value)),
                };
                parse_util_1.pushSyntacticErrorAt(precision, precision.start, precision.end, [], diagnostic_messages_1.DiagnosticMessages.PrecisionExpectsIntegerLiteral);
            }
            if (scale.syntaxKind == parser_node_1.SyntaxKind.DecimalLiteral) {
                scale = {
                    ...scale,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(scale.value.replace(/\.\d*$/, "")),
                };
                parse_util_1.pushSyntacticErrorAt(scale, scale.start, scale.end, [], diagnostic_messages_1.DiagnosticMessages.ScaleExpectsIntegerLiteral);
            }
            else if (scale.syntaxKind == parser_node_1.SyntaxKind.RealLiteral) {
                scale = {
                    ...scale,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(Math.floor(scale.value)),
                };
                parse_util_1.pushSyntacticErrorAt(scale, scale.start, scale.end, [], diagnostic_messages_1.DiagnosticMessages.ScaleExpectsIntegerLiteral);
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Precision,
                precision,
                scale,
            };
        } },
    {"name": "RealPrecision", "symbols": ["Precision"], "postprocess":  function (data) {
            const result = data[0];
            if (result.precision.value == BigInt(0) || result.precision.value > BigInt(255)) {
                parse_util_1.pushSyntacticErrorAt(result.precision, result.precision.start, result.precision.end, [], diagnostic_messages_1.DiagnosticMessages.InvalidRealDataTypePrecision);
            }
            const maxScale = (result.precision.value > BigInt(30) ?
                BigInt(30) :
                result.precision.value);
            if (result.scale.value > maxScale) {
                parse_util_1.pushSyntacticErrorAt(result.scale, result.scale.start, result.scale.end, [], diagnostic_messages_1.DiagnosticMessages.InvalidRealDataTypeScale, maxScale.toString());
            }
            return result;
        } },
    {"name": "DecimalPrecision", "symbols": ["Precision"], "postprocess":  function (data) {
            const result = data[0];
            /**
             * https://dev.mysql.com/doc/refman/5.7/en/fixed-point-types.html
             */
            if (result.precision.value > BigInt(65)) {
                parse_util_1.pushSyntacticErrorAt(result.precision, result.precision.start, result.precision.end, [], diagnostic_messages_1.DiagnosticMessages.DecimalPrecisionTooHigh);
            }
            const maxScale = (result.precision.value > BigInt(30) ?
                BigInt(30) :
                result.precision.value);
            if (result.scale.value > maxScale) {
                parse_util_1.pushSyntacticErrorAt(result.scale, result.scale.start, result.scale.end, [], diagnostic_messages_1.DiagnosticMessages.InvalidDataTypeScale, maxScale.toString());
            }
            return result;
        } },
    {"name": "SizeNumber$subexpression$1", "symbols": ["Identifier"]},
    {"name": "SizeNumber$subexpression$1", "symbols": ["IntegerLiteral"]},
    {"name": "SizeNumber", "symbols": ["SizeNumber$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.SizeNumber,
                value: data[0][0],
            };
        } },
    {"name": "StringList$ebnf$1", "symbols": []},
    {"name": "StringList$ebnf$1$subexpression$1", "symbols": [Comma, "TextString"]},
    {"name": "StringList$ebnf$1", "symbols": ["StringList$ebnf$1", "StringList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "StringList", "symbols": [OpenParentheses, "TextString", "StringList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.StringList, parse_util_1.getTextRange(data));
        } },
    {"name": "TableIdentifierList$ebnf$1", "symbols": []},
    {"name": "TableIdentifierList$ebnf$1$subexpression$1", "symbols": [Comma, "TableIdentifier"]},
    {"name": "TableIdentifierList$ebnf$1", "symbols": ["TableIdentifierList$ebnf$1", "TableIdentifierList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "TableIdentifierList", "symbols": [OpenParentheses, "TableIdentifier", "TableIdentifierList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.TableIdentifierList, parse_util_1.getTextRange(data));
        } },
    {"name": "TableIdentifierList_AllowEmpty$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "TableIdentifierList_AllowEmpty$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [Comma, "TableIdentifier"]},
    {"name": "TableIdentifierList_AllowEmpty$ebnf$1$subexpression$1$ebnf$1", "symbols": ["TableIdentifierList_AllowEmpty$ebnf$1$subexpression$1$ebnf$1", "TableIdentifierList_AllowEmpty$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "TableIdentifierList_AllowEmpty$ebnf$1$subexpression$1", "symbols": ["TableIdentifier", "TableIdentifierList_AllowEmpty$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "TableIdentifierList_AllowEmpty$ebnf$1", "symbols": ["TableIdentifierList_AllowEmpty$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "TableIdentifierList_AllowEmpty$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TableIdentifierList_AllowEmpty", "symbols": [OpenParentheses, "TableIdentifierList_AllowEmpty$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((x) => {
                if (x == undefined) {
                    return false;
                }
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.TableIdentifierList, parse_util_1.getTextRange(data));
        } },
    {"name": "TextString$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "TextString$subexpression$1", "symbols": ["HexLiteral"]},
    {"name": "TextString$subexpression$1", "symbols": ["BitLiteral"]},
    {"name": "TextString", "symbols": ["TextString$subexpression$1"], "postprocess":  (data) => {
            let [[literal]] = data;
            return literal;
        } },
    {"name": "AlterFunctionStatement", "symbols": [ALTER, FUNCTION, "StoredFunctionIdentifier", "PartialStoredProcedureCharacteristics"], "postprocess":  (data) => {
            const [, , storedFunctionIdentifier, characteristics,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterFunctionStatement,
                storedFunctionIdentifier,
                characteristics,
            };
        } },
    {"name": "AlterProcedureStatement", "symbols": [ALTER, PROCEDURE, "StoredProcedureIdentifier", "PartialStoredProcedureCharacteristics"], "postprocess":  (data) => {
            const [, , storedProcedureIdentifier, characteristics,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterProcedureStatement,
                storedProcedureIdentifier,
                characteristics,
            };
        } },
    {"name": "AlterSchemaStatement$subexpression$1", "symbols": [SCHEMA]},
    {"name": "AlterSchemaStatement$subexpression$1", "symbols": [DATABASE]},
    {"name": "AlterSchemaStatement$ebnf$1", "symbols": ["Identifier"], "postprocess": id},
    {"name": "AlterSchemaStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterSchemaStatement", "symbols": [ALTER, "AlterSchemaStatement$subexpression$1", "AlterSchemaStatement$ebnf$1", "CreateSchemaOptionList"], "postprocess":  (data) => {
            const [, , schemaName, createSchemaOptions,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterSchemaStatement,
                schemaName: schemaName !== null && schemaName !== void 0 ? schemaName : undefined,
                createSchemaOptions,
            };
        } },
    {"name": "AlterSchemaUpgradeDataDirectoryNameStatement$subexpression$1", "symbols": [SCHEMA]},
    {"name": "AlterSchemaUpgradeDataDirectoryNameStatement$subexpression$1", "symbols": [DATABASE]},
    {"name": "AlterSchemaUpgradeDataDirectoryNameStatement", "symbols": [ALTER, "AlterSchemaUpgradeDataDirectoryNameStatement$subexpression$1", "Identifier", UPGRADE, DATA, DIRECTORY, NAME], "postprocess":  (data) => {
            const [, , schemaName,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterSchemaUpgradeDataDirectoryNameStatement,
                schemaName,
            };
        } },
    {"name": "AlterTableAddColumn$ebnf$1", "symbols": [COLUMN], "postprocess": id},
    {"name": "AlterTableAddColumn$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableAddColumn$ebnf$2$subexpression$1", "symbols": [FIRST]},
    {"name": "AlterTableAddColumn$ebnf$2$subexpression$1$subexpression$1", "symbols": [AFTER, "Identifier"]},
    {"name": "AlterTableAddColumn$ebnf$2$subexpression$1", "symbols": ["AlterTableAddColumn$ebnf$2$subexpression$1$subexpression$1"]},
    {"name": "AlterTableAddColumn$ebnf$2", "symbols": ["AlterTableAddColumn$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "AlterTableAddColumn$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableAddColumn", "symbols": [ADD, "AlterTableAddColumn$ebnf$1", "ColumnDefinition", "AlterTableAddColumn$ebnf$2"], "postprocess":  (data) => {
            const [, , columnDefinition, placeAfter,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableAddColumn,
                columnDefinition,
                placeAfter: (placeAfter == undefined ?
                    undefined :
                    placeAfter[0] instanceof Array ?
                        placeAfter[0][1] :
                        parse_util_1.toValueNode("FIRST", parse_util_1.getTextRange(placeAfter))),
            };
        } },
    {"name": "AlterTableAddCreateTableDefinitionList$ebnf$1", "symbols": [COLUMN], "postprocess": id},
    {"name": "AlterTableAddCreateTableDefinitionList$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableAddCreateTableDefinitionList", "symbols": [ADD, "AlterTableAddCreateTableDefinitionList$ebnf$1", "CreateTableDefinitionList"], "postprocess":  (data) => {
            const [, , createTableDefinitionList,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableAddCreateTableDefinitionList,
                createTableDefinitionList,
            };
        } },
    {"name": "AlterTableAlterColumnDropDefault$ebnf$1", "symbols": [COLUMN], "postprocess": id},
    {"name": "AlterTableAlterColumnDropDefault$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableAlterColumnDropDefault", "symbols": [ALTER, "AlterTableAlterColumnDropDefault$ebnf$1", "ColumnIdentifier", DROP, DEFAULT], "postprocess":  (data) => {
            const [, , columnIdentifier,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableAlterColumnDropDefault,
                columnIdentifier,
            };
        } },
    {"name": "AlterTableAlterColumnSetDefault$ebnf$1", "symbols": [COLUMN], "postprocess": id},
    {"name": "AlterTableAlterColumnSetDefault$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableAlterColumnSetDefault", "symbols": [ALTER, "AlterTableAlterColumnSetDefault$ebnf$1", "ColumnIdentifier", SET, DEFAULT, "Expression"], "postprocess":  (data) => {
            const [, , columnIdentifier, , , expr,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableAlterColumnSetDefault,
                columnIdentifier,
                expr,
            };
        } },
    {"name": "AlterTableChangeColumn$ebnf$1", "symbols": [COLUMN], "postprocess": id},
    {"name": "AlterTableChangeColumn$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableChangeColumn$ebnf$2$subexpression$1", "symbols": [FIRST]},
    {"name": "AlterTableChangeColumn$ebnf$2$subexpression$1$subexpression$1", "symbols": [AFTER, "Identifier"]},
    {"name": "AlterTableChangeColumn$ebnf$2$subexpression$1", "symbols": ["AlterTableChangeColumn$ebnf$2$subexpression$1$subexpression$1"]},
    {"name": "AlterTableChangeColumn$ebnf$2", "symbols": ["AlterTableChangeColumn$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "AlterTableChangeColumn$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableChangeColumn", "symbols": [CHANGE, "AlterTableChangeColumn$ebnf$1", "ColumnIdentifier", "ColumnDefinition", "AlterTableChangeColumn$ebnf$2"], "postprocess":  (data) => {
            const [, , oldColumnIdentifier, columnDefinition, placeAfter,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableChangeColumn,
                oldColumnIdentifier,
                columnDefinition,
                placeAfter: (placeAfter == undefined ?
                    undefined :
                    placeAfter[0] instanceof Array ?
                        placeAfter[0][1] :
                        parse_util_1.toValueNode("FIRST", parse_util_1.getTextRange(placeAfter))),
            };
        } },
    {"name": "AlterTableConvertToCharacterSet$subexpression$1$subexpression$1", "symbols": [CHARACTER, SET]},
    {"name": "AlterTableConvertToCharacterSet$subexpression$1", "symbols": ["AlterTableConvertToCharacterSet$subexpression$1$subexpression$1"]},
    {"name": "AlterTableConvertToCharacterSet$subexpression$1", "symbols": [CHARSET]},
    {"name": "AlterTableConvertToCharacterSet$ebnf$1$subexpression$1", "symbols": [COLLATE, "CollationNameOrDefault"]},
    {"name": "AlterTableConvertToCharacterSet$ebnf$1", "symbols": ["AlterTableConvertToCharacterSet$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AlterTableConvertToCharacterSet$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableConvertToCharacterSet", "symbols": [CONVERT, TO, "AlterTableConvertToCharacterSet$subexpression$1", "CharacterSetNameOrDefault", "AlterTableConvertToCharacterSet$ebnf$1"], "postprocess":  (data) => {
            const [, , , characterSetName, collationName,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableConvertToCharacterSet,
                characterSetName,
                collationName: (collationName == undefined ?
                    undefined :
                    collationName[1]),
            };
        } },
    {"name": "AlterTableDisableKeys", "symbols": [DISABLE, KEYS], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableDisableKeys,
            };
        } },
    {"name": "AlterTableDropColumn$ebnf$1", "symbols": [COLUMN], "postprocess": id},
    {"name": "AlterTableDropColumn$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableDropColumn$ebnf$2$subexpression$1", "symbols": [RESTRICT]},
    {"name": "AlterTableDropColumn$ebnf$2$subexpression$1", "symbols": [CASCADE]},
    {"name": "AlterTableDropColumn$ebnf$2", "symbols": ["AlterTableDropColumn$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "AlterTableDropColumn$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableDropColumn", "symbols": [DROP, "AlterTableDropColumn$ebnf$1", "ColumnIdentifier", "AlterTableDropColumn$ebnf$2"], "postprocess":  (data) => {
            const [, , columnIdentifier, dropMode,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableDropColumn,
                columnIdentifier,
                dropMode: (dropMode == undefined ?
                    undefined :
                    parse_util_1.toValueNode((dropMode[0].tokenKind == scanner_1.TokenKind.RESTRICT ?
                        "RESTRICT" :
                        "CASCADE"), parse_util_1.getTextRange(dropMode))),
            };
        } },
    {"name": "AlterTableDropForeignKey", "symbols": [DROP, FOREIGN, KEY, "ColumnIdentifier"], "postprocess":  (data) => {
            const [, , , foreignKeyIdentifier,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableDropForeignKey,
                foreignKeyIdentifier,
            };
        } },
    {"name": "AlterTableDropIndex$subexpression$1", "symbols": [INDEX]},
    {"name": "AlterTableDropIndex$subexpression$1", "symbols": [KEY]},
    {"name": "AlterTableDropIndex", "symbols": [DROP, "AlterTableDropIndex$subexpression$1", "ColumnIdentifier"], "postprocess":  (data) => {
            const [, , indexIdentifier,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableDropIndex,
                indexIdentifier,
            };
        } },
    {"name": "AlterTableDropPrimaryKey", "symbols": [DROP, PRIMARY, KEY], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableDropPrimaryKey,
            };
        } },
    {"name": "AlterTableEnableKeys", "symbols": [ENABLE, KEYS], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableEnableKeys,
            };
        } },
    {"name": "AlterTableForce", "symbols": [FORCE], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableForce,
            };
        } },
    {"name": "AlterTableItem$subexpression$1", "symbols": ["CreateTableOptionsSpaceSeparated"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableAddColumn"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableAddCreateTableDefinitionList"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableChangeColumn"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableModifyColumn"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableDropColumn"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableDropForeignKey"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableDropPrimaryKey"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableDropIndex"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableDisableKeys"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableEnableKeys"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableAlterColumnSetDefault"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableAlterColumnDropDefault"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableRenameTable"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableRenameIndex"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableConvertToCharacterSet"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableForce"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableUpgradePartitioning"]},
    {"name": "AlterTableItem$subexpression$1", "symbols": ["AlterTableOrderBy"]},
    {"name": "AlterTableItem", "symbols": ["AlterTableItem$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "AlterTableModifyColumn$ebnf$1", "symbols": [COLUMN], "postprocess": id},
    {"name": "AlterTableModifyColumn$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableModifyColumn$ebnf$2$subexpression$1", "symbols": [FIRST]},
    {"name": "AlterTableModifyColumn$ebnf$2$subexpression$1$subexpression$1", "symbols": [AFTER, "Identifier"]},
    {"name": "AlterTableModifyColumn$ebnf$2$subexpression$1", "symbols": ["AlterTableModifyColumn$ebnf$2$subexpression$1$subexpression$1"]},
    {"name": "AlterTableModifyColumn$ebnf$2", "symbols": ["AlterTableModifyColumn$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "AlterTableModifyColumn$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableModifyColumn", "symbols": [MODIFY, "AlterTableModifyColumn$ebnf$1", "ColumnDefinition", "AlterTableModifyColumn$ebnf$2"], "postprocess":  (data) => {
            const [, , columnDefinition, placeAfter,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableModifyColumn,
                columnDefinition,
                placeAfter: (placeAfter == undefined ?
                    undefined :
                    placeAfter[0] instanceof Array ?
                        placeAfter[0][1] :
                        parse_util_1.toValueNode("FIRST", parse_util_1.getTextRange(placeAfter))),
            };
        } },
    {"name": "AlterTableOrderBy", "symbols": [ORDER, BY, "AlterTableOrderExprList"], "postprocess":  (data) => {
            const [, , alterTableOrderExprList,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableOrderBy,
                alterTableOrderExprList,
            };
        } },
    {"name": "AlterTableOrderExpr$ebnf$1$subexpression$1", "symbols": [ASC]},
    {"name": "AlterTableOrderExpr$ebnf$1$subexpression$1", "symbols": [DESC]},
    {"name": "AlterTableOrderExpr$ebnf$1", "symbols": ["AlterTableOrderExpr$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AlterTableOrderExpr$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableOrderExpr", "symbols": ["ColumnIdentifier", "AlterTableOrderExpr$ebnf$1"], "postprocess":  (data) => {
            const [expr, orderingDirection] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableOrderExpr,
                expr,
                orderingDirection: (orderingDirection == undefined ?
                    parser_node_1.OrderingDirection.ASC :
                    orderingDirection[0].tokenKind == scanner_1.TokenKind.ASC ?
                        parser_node_1.OrderingDirection.ASC :
                        parser_node_1.OrderingDirection.DESC),
            };
        } },
    {"name": "AlterTableOrderExprList$ebnf$1", "symbols": []},
    {"name": "AlterTableOrderExprList$ebnf$1$subexpression$1", "symbols": [Comma, "AlterTableOrderExpr"]},
    {"name": "AlterTableOrderExprList$ebnf$1", "symbols": ["AlterTableOrderExprList$ebnf$1", "AlterTableOrderExprList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "AlterTableOrderExprList", "symbols": ["AlterTableOrderExpr", "AlterTableOrderExprList$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((data) => {
                return "syntaxKind" in data;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.AlterTableOrderExprList, parse_util_1.getTextRange(data));
        } },
    {"name": "AlterTableRenameIndex$subexpression$1", "symbols": [INDEX]},
    {"name": "AlterTableRenameIndex$subexpression$1", "symbols": [KEY]},
    {"name": "AlterTableRenameIndex", "symbols": [RENAME, "AlterTableRenameIndex$subexpression$1", "ColumnIdentifier", TO, "ColumnIdentifier"], "postprocess":  (data) => {
            const [, , oldIndexIdentifier, , newIndexIdentifier,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableRenameIndex,
                oldIndexIdentifier,
                newIndexIdentifier,
            };
        } },
    {"name": "AlterTableRenameTable$ebnf$1$subexpression$1", "symbols": [TO]},
    {"name": "AlterTableRenameTable$ebnf$1$subexpression$1", "symbols": [Equal]},
    {"name": "AlterTableRenameTable$ebnf$1$subexpression$1", "symbols": [AS]},
    {"name": "AlterTableRenameTable$ebnf$1", "symbols": ["AlterTableRenameTable$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AlterTableRenameTable$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableRenameTable", "symbols": [RENAME, "AlterTableRenameTable$ebnf$1", "TableIdentifier"], "postprocess":  (data) => {
            const [, , newTableIdentifier,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableRenameTable,
                newTableIdentifier,
            };
        } },
    {"name": "AlterTableUpgradePartitioning", "symbols": [UPGRADE, PARTITIONING], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableUpgradePartitioning,
            };
        } },
    {"name": "AlterTableItemOrModifier", "symbols": ["AlterTableItem"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "AlterTableItemOrModifier", "symbols": ["AlterTableModifier"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "AlterTableItemOrModifierList$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "AlterTableItemOrModifierList$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [Comma, "AlterTableItemOrModifier"]},
    {"name": "AlterTableItemOrModifierList$ebnf$1$subexpression$1$ebnf$1", "symbols": ["AlterTableItemOrModifierList$ebnf$1$subexpression$1$ebnf$1", "AlterTableItemOrModifierList$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "AlterTableItemOrModifierList$ebnf$1$subexpression$1", "symbols": ["AlterTableItemOrModifier", "AlterTableItemOrModifierList$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "AlterTableItemOrModifierList$ebnf$1", "symbols": ["AlterTableItemOrModifierList$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AlterTableItemOrModifierList$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableItemOrModifierList", "symbols": ["AlterTableItemOrModifierList$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.AlterTableItemOrModifierList, parse_util_1.getTextRange(data));
        } },
    {"name": "AlterTableModifier", "symbols": ["AlterTableLock"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "AlterTableModifier", "symbols": ["AlterTableAlgorithm"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "AlterTableModifier", "symbols": ["AlterTableValidation"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "AlterTableModifiers$ebnf$1", "symbols": []},
    {"name": "AlterTableModifiers$ebnf$1$subexpression$1", "symbols": [Comma, "AlterTableModifier"]},
    {"name": "AlterTableModifiers$ebnf$1", "symbols": ["AlterTableModifiers$ebnf$1", "AlterTableModifiers$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "AlterTableModifiers", "symbols": ["AlterTableModifier", "AlterTableModifiers$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const start = parse_util_1.getEnd(data);
            const end = start;
            const result = {
                alterTableLock: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.AlterTableLock,
                    identifier: {
                        start,
                        end,
                        syntaxKind: parser_node_1.SyntaxKind.Identifier,
                        quoted: false,
                        identifier: "DEFAULT",
                    }
                },
                alterTableAlgorithm: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.AlterTableAlgorithm,
                    identifier: {
                        start,
                        end,
                        syntaxKind: parser_node_1.SyntaxKind.Identifier,
                        quoted: false,
                        identifier: "DEFAULT",
                    }
                },
                alterTableValidation: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.AlterTableValidation,
                    withValidation: false,
                },
            };
            for (const item of arr) {
                if (item.syntaxKind == parser_node_1.SyntaxKind.AlterTableLock) {
                    result.alterTableLock = item;
                }
                else if (item.syntaxKind == parser_node_1.SyntaxKind.AlterTableAlgorithm) {
                    result.alterTableAlgorithm = item;
                }
                else {
                    result.alterTableValidation = item;
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableModifiers,
                ...result,
            };
        } },
    {"name": "AlterTableValidation", "symbols": [WITH, VALIDATION], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableValidation,
                withValidation: true,
            };
        } },
    {"name": "AlterTableValidation", "symbols": [WITHOUT, VALIDATION], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableValidation,
                withValidation: false,
            };
        } },
    {"name": "AlterTableStandaloneStatement$subexpression$1$subexpression$1", "symbols": [DISCARD, TABLESPACE]},
    {"name": "AlterTableStandaloneStatement$subexpression$1", "symbols": ["AlterTableStandaloneStatement$subexpression$1$subexpression$1"]},
    {"name": "AlterTableStandaloneStatement$subexpression$1$subexpression$2", "symbols": [IMPORT, TABLESPACE]},
    {"name": "AlterTableStandaloneStatement$subexpression$1", "symbols": ["AlterTableStandaloneStatement$subexpression$1$subexpression$2"]},
    {"name": "AlterTableStandaloneStatement", "symbols": [ALTER, TABLE, "TableIdentifier", "AlterTableModifiers", Comma, "AlterTableStandaloneStatement$subexpression$1"], "postprocess":  (data) => {
            const [, , tableIdentifier, alterTableModifiers, , alterTableItem,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableStandaloneStatement,
                tableIdentifier,
                alterTableModifiers,
                alterTableItem: parse_util_1.toValueNode((alterTableItem[0][0].tokenKind == scanner_1.TokenKind.DISCARD ?
                    "DISCARD TABLESPACE" :
                    "IMPORT TABLESPACE"), parse_util_1.getTextRange(alterTableItem)),
            };
        } },
    {"name": "AlterTableStandaloneStatement$subexpression$2$subexpression$1", "symbols": [DISCARD, TABLESPACE]},
    {"name": "AlterTableStandaloneStatement$subexpression$2", "symbols": ["AlterTableStandaloneStatement$subexpression$2$subexpression$1"]},
    {"name": "AlterTableStandaloneStatement$subexpression$2$subexpression$2", "symbols": [IMPORT, TABLESPACE]},
    {"name": "AlterTableStandaloneStatement$subexpression$2", "symbols": ["AlterTableStandaloneStatement$subexpression$2$subexpression$2"]},
    {"name": "AlterTableStandaloneStatement", "symbols": [ALTER, TABLE, "TableIdentifier", "AlterTableStandaloneStatement$subexpression$2"], "postprocess":  (data) => {
            const [, , tableIdentifier, alterTableItem,] = data;
            const start = tableIdentifier.end;
            const end = tableIdentifier.end;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableStandaloneStatement,
                tableIdentifier,
                alterTableModifiers: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.AlterTableModifiers,
                    alterTableLock: {
                        start,
                        end,
                        syntaxKind: parser_node_1.SyntaxKind.AlterTableLock,
                        identifier: {
                            start,
                            end,
                            syntaxKind: parser_node_1.SyntaxKind.Identifier,
                            quoted: false,
                            identifier: "DEFAULT",
                        }
                    },
                    alterTableAlgorithm: {
                        start,
                        end,
                        syntaxKind: parser_node_1.SyntaxKind.AlterTableAlgorithm,
                        identifier: {
                            start,
                            end,
                            syntaxKind: parser_node_1.SyntaxKind.Identifier,
                            quoted: false,
                            identifier: "DEFAULT",
                        }
                    },
                    alterTableValidation: {
                        start,
                        end,
                        syntaxKind: parser_node_1.SyntaxKind.AlterTableValidation,
                        withValidation: false,
                    },
                },
                alterTableItem: parse_util_1.toValueNode((alterTableItem[0][0].tokenKind == scanner_1.TokenKind.DISCARD ?
                    "DISCARD TABLESPACE" :
                    "IMPORT TABLESPACE"), parse_util_1.getTextRange(alterTableItem)),
            };
        } },
    {"name": "AlterTableStatement$ebnf$1$subexpression$1", "symbols": ["Partition"]},
    {"name": "AlterTableStatement$ebnf$1$subexpression$1$subexpression$1", "symbols": [REMOVE, PARTITIONING]},
    {"name": "AlterTableStatement$ebnf$1$subexpression$1", "symbols": ["AlterTableStatement$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "AlterTableStatement$ebnf$1", "symbols": ["AlterTableStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AlterTableStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableStatement", "symbols": [ALTER, TABLE, "TableIdentifier", "AlterTableItemOrModifierList", "AlterTableStatement$ebnf$1"], "postprocess":  (data) => {
            const [, , tableIdentifier, alterTableItemOrModifierList, partition,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableStatement,
                tableIdentifier,
                alterTableItemOrModifierList,
                partition: (partition == undefined ?
                    undefined :
                    partition[0] instanceof Array ?
                        parse_util_1.toValueNode("REMOVE PARTITIONING", parse_util_1.getTextRange(partition)) :
                        partition[0]),
            };
        } },
    {"name": "CreateEventStatement$ebnf$1$subexpression$1", "symbols": [DEFINER, Equal, "AccountIdentifierOrCurrentUser"]},
    {"name": "CreateEventStatement$ebnf$1", "symbols": ["CreateEventStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateEventStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateEventStatement$ebnf$2$subexpression$1", "symbols": [IF, NOT, EXISTS]},
    {"name": "CreateEventStatement$ebnf$2", "symbols": ["CreateEventStatement$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "CreateEventStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateEventStatement$ebnf$3$subexpression$1$ebnf$1", "symbols": [NOT], "postprocess": id},
    {"name": "CreateEventStatement$ebnf$3$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateEventStatement$ebnf$3$subexpression$1", "symbols": [ON, COMPLETION, "CreateEventStatement$ebnf$3$subexpression$1$ebnf$1", PRESERVE]},
    {"name": "CreateEventStatement$ebnf$3", "symbols": ["CreateEventStatement$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "CreateEventStatement$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "CreateEventStatement$ebnf$4$subexpression$1$subexpression$1", "symbols": [ENABLE]},
    {"name": "CreateEventStatement$ebnf$4$subexpression$1", "symbols": ["CreateEventStatement$ebnf$4$subexpression$1$subexpression$1"]},
    {"name": "CreateEventStatement$ebnf$4$subexpression$1$subexpression$2", "symbols": [DISABLE]},
    {"name": "CreateEventStatement$ebnf$4$subexpression$1", "symbols": ["CreateEventStatement$ebnf$4$subexpression$1$subexpression$2"]},
    {"name": "CreateEventStatement$ebnf$4$subexpression$1$subexpression$3", "symbols": [DISABLE, ON, SLAVE]},
    {"name": "CreateEventStatement$ebnf$4$subexpression$1", "symbols": ["CreateEventStatement$ebnf$4$subexpression$1$subexpression$3"]},
    {"name": "CreateEventStatement$ebnf$4", "symbols": ["CreateEventStatement$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "CreateEventStatement$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "CreateEventStatement$ebnf$5$subexpression$1", "symbols": [COMMENT, "StringLiteral"]},
    {"name": "CreateEventStatement$ebnf$5", "symbols": ["CreateEventStatement$ebnf$5$subexpression$1"], "postprocess": id},
    {"name": "CreateEventStatement$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "CreateEventStatement", "symbols": [CREATE, "CreateEventStatement$ebnf$1", EVENT, "CreateEventStatement$ebnf$2", "EventIdentifier", ON, SCHEDULE, "Schedule", "CreateEventStatement$ebnf$3", "CreateEventStatement$ebnf$4", "CreateEventStatement$ebnf$5", DO, "StoredProcedureStatement"], "postprocess":  (data) => {
            const [, definer, eventToken, ifNotExists, eventIdentifier, , , schedule, onCompletionPreserve, eventStatus, comment, , statement,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateEventStatement,
                definer: (definer == undefined ?
                    parse_util_1.toValueNode("CURRENT_USER", {
                        start: eventToken.start,
                        end: eventToken.start,
                    }) :
                    definer[2]),
                ifNotExists: ifNotExists != undefined,
                eventIdentifier,
                schedule,
                onCompletionPreserve: (onCompletionPreserve == undefined ?
                    false :
                    onCompletionPreserve[2] == undefined),
                eventStatus: (eventStatus == undefined ?
                    parser_node_1.EventStatus.ENABLE :
                    eventStatus[0].length == 3 ?
                        parser_node_1.EventStatus.DISABLE_ON_SLAVE :
                        eventStatus[0][0].tokenKind == scanner_1.TokenKind.ENABLE ?
                            parser_node_1.EventStatus.ENABLE :
                            parser_node_1.EventStatus.DISABLE),
                comment: (comment == undefined ?
                    undefined :
                    comment[1]),
                statement,
            };
        } },
    {"name": "ExecuteAtSchedule", "symbols": [AT, "Expression"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ExecuteAtSchedule,
                executeAt: data[1],
            };
        } },
    {"name": "IntervalSchedule$ebnf$1$subexpression$1", "symbols": [STARTS, "Expression"]},
    {"name": "IntervalSchedule$ebnf$1", "symbols": ["IntervalSchedule$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "IntervalSchedule$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IntervalSchedule$ebnf$2$subexpression$1", "symbols": [ENDS, "Expression"]},
    {"name": "IntervalSchedule$ebnf$2", "symbols": ["IntervalSchedule$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "IntervalSchedule$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "IntervalSchedule", "symbols": [EVERY, "Expression", "Interval", "IntervalSchedule$ebnf$1", "IntervalSchedule$ebnf$2"], "postprocess":  (data) => {
            const [, intervalExpr, interval, startsAt, endsAt,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IntervalSchedule,
                intervalExpr,
                interval,
                startsAt: (startsAt == undefined ?
                    undefined :
                    startsAt[1]),
                endsAt: (endsAt == undefined ?
                    undefined :
                    endsAt[1]),
            };
        } },
    {"name": "Schedule", "symbols": ["ExecuteAtSchedule"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "Schedule", "symbols": ["IntervalSchedule"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "CreateFunctionStatement$ebnf$1$subexpression$1", "symbols": [DEFINER, Equal, "AccountIdentifierOrCurrentUser"]},
    {"name": "CreateFunctionStatement$ebnf$1", "symbols": ["CreateFunctionStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateFunctionStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateFunctionStatement", "symbols": [CREATE, "CreateFunctionStatement$ebnf$1", FUNCTION, "StoredFunctionIdentifier", "StoredFunctionParameterList", RETURNS, "DataType", "StoredProcedureCharacteristics", "StoredProcedureStatement"], "postprocess":  (data) => {
            const [, definer, functionToken, storedFunctionIdentifier, parameters, , returnType, characteristics, statement,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateFunctionStatement,
                definer: (definer == undefined ?
                    parse_util_1.toValueNode("CURRENT_USER", {
                        start: functionToken.start,
                        end: functionToken.start,
                    }) :
                    definer[2]),
                storedFunctionIdentifier,
                parameters,
                returnType,
                characteristics,
                statement,
            };
        } },
    {"name": "CreateProcedureStatement$ebnf$1$subexpression$1", "symbols": [DEFINER, Equal, "AccountIdentifierOrCurrentUser"]},
    {"name": "CreateProcedureStatement$ebnf$1", "symbols": ["CreateProcedureStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateProcedureStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateProcedureStatement", "symbols": [CREATE, "CreateProcedureStatement$ebnf$1", PROCEDURE, "StoredProcedureIdentifier", "StoredProcedureParameterList", "StoredProcedureCharacteristics", "StoredProcedureStatement"], "postprocess":  (data) => {
            const [, definer, functionToken, storedProcedureIdentifier, parameters, characteristics, statement,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateProcedureStatement,
                definer: (definer == undefined ?
                    parse_util_1.toValueNode("CURRENT_USER", {
                        start: functionToken.start,
                        end: functionToken.start,
                    }) :
                    definer[2]),
                storedProcedureIdentifier,
                parameters,
                characteristics,
                statement,
            };
        } },
    {"name": "CreateUserDefinedFunctionStatement$ebnf$1", "symbols": [AGGREGATE], "postprocess": id},
    {"name": "CreateUserDefinedFunctionStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateUserDefinedFunctionStatement$subexpression$1", "symbols": [STRING]},
    {"name": "CreateUserDefinedFunctionStatement$subexpression$1", "symbols": [INTEGER]},
    {"name": "CreateUserDefinedFunctionStatement$subexpression$1", "symbols": [REAL]},
    {"name": "CreateUserDefinedFunctionStatement$subexpression$1", "symbols": [DECIMAL]},
    {"name": "CreateUserDefinedFunctionStatement", "symbols": [CREATE, "CreateUserDefinedFunctionStatement$ebnf$1", FUNCTION, "Identifier", RETURNS, "CreateUserDefinedFunctionStatement$subexpression$1", SONAME, "StringLiteral"], "postprocess":  (data) => {
            const [, aggregate, functionToken, identifier, , returnType, , sharedLibraryName,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateUserDefinedFunctionStatement,
                aggregate: (aggregate == undefined ?
                    parse_util_1.toValueNode(false, {
                        start: functionToken.start,
                        end: functionToken.start,
                    }) :
                    parse_util_1.toValueNode(true, parse_util_1.getTextRange(aggregate))),
                identifier,
                returnType: parse_util_1.toValueNode((returnType[0].tokenKind == scanner_1.TokenKind.STRING ?
                    parser_node_1.UserDefinedFunctionReturnType.STRING :
                    returnType[0].tokenKind == scanner_1.TokenKind.INTEGER ?
                        parser_node_1.UserDefinedFunctionReturnType.INTEGER :
                        returnType[0].tokenKind == scanner_1.TokenKind.REAL ?
                            parser_node_1.UserDefinedFunctionReturnType.REAL :
                            parser_node_1.UserDefinedFunctionReturnType.DECIMAL), parse_util_1.getTextRange(returnType)),
                sharedLibraryName,
            };
        } },
    {"name": "PartialStoredProcedureCharacteristics$ebnf$1", "symbols": []},
    {"name": "PartialStoredProcedureCharacteristics$ebnf$1", "symbols": ["PartialStoredProcedureCharacteristics$ebnf$1", "StoredProcedureCharacteristic"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PartialStoredProcedureCharacteristics", "symbols": ["PartialStoredProcedureCharacteristics$ebnf$1"], "postprocess":  (data) => {
            const arr = data[0];
            const result = {
                comment: undefined,
                language: undefined,
                databaseAccessCharacteristic: undefined,
                deterministic: undefined,
                storedProcedureSecurityContext: undefined,
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.PartialStoredProcedureCharacteristics,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "StoredFunctionParameter", "symbols": ["Identifier", "DataType"], "postprocess":  (data) => {
            const [identifier, dataType,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.StoredFunctionParameter,
                identifier,
                dataType,
            };
        } },
    {"name": "StoredFunctionParameterList$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "StoredFunctionParameterList$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [Comma, "StoredFunctionParameter"]},
    {"name": "StoredFunctionParameterList$ebnf$1$subexpression$1$ebnf$1", "symbols": ["StoredFunctionParameterList$ebnf$1$subexpression$1$ebnf$1", "StoredFunctionParameterList$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "StoredFunctionParameterList$ebnf$1$subexpression$1", "symbols": ["StoredFunctionParameter", "StoredFunctionParameterList$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "StoredFunctionParameterList$ebnf$1", "symbols": ["StoredFunctionParameterList$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "StoredFunctionParameterList$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "StoredFunctionParameterList", "symbols": [OpenParentheses, "StoredFunctionParameterList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                return "syntaxKind" in item;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.StoredFunctionParameterList, parse_util_1.getTextRange(data));
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [DETERMINISTIC], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                deterministic: parse_util_1.toValueNode(true, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [NOT, DETERMINISTIC], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                deterministic: parse_util_1.toValueNode(false, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [COMMENT, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                comment: data[1],
            };
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [LANGUAGE, SQL], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                language: parse_util_1.toValueNode("SQL", parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [NO, SQL], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                databaseAccessCharacteristic: parse_util_1.toValueNode(parser_node_1.DatabaseAccessCharacteristic.NO_SQL, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [CONTAINS, SQL], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                databaseAccessCharacteristic: parse_util_1.toValueNode(parser_node_1.DatabaseAccessCharacteristic.CONTAINS_SQL, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [READS, SQL, DATA], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                databaseAccessCharacteristic: parse_util_1.toValueNode(parser_node_1.DatabaseAccessCharacteristic.READS_SQL_DATA, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [MODIFIES, SQL, DATA], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                databaseAccessCharacteristic: parse_util_1.toValueNode(parser_node_1.DatabaseAccessCharacteristic.MODIFIES_SQL_DATA, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [SQL, SECURITY, DEFINER], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                storedProcedureSecurityContext: parse_util_1.toValueNode(parser_node_1.StoredProcedureSecurityContext.DEFINER, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "StoredProcedureCharacteristic", "symbols": [SQL, SECURITY, INVOKER], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                storedProcedureSecurityContext: parse_util_1.toValueNode(parser_node_1.StoredProcedureSecurityContext.INVOKER, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "StoredProcedureCharacteristics$ebnf$1", "symbols": []},
    {"name": "StoredProcedureCharacteristics$ebnf$1", "symbols": ["StoredProcedureCharacteristics$ebnf$1", "StoredProcedureCharacteristic"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "StoredProcedureCharacteristics", "symbols": ["StoredProcedureCharacteristics$ebnf$1"], "postprocess":  (data) => {
            const arr = data[0];
            const result = {
                comment: undefined,
                language: undefined,
                databaseAccessCharacteristic: undefined,
                deterministic: parse_util_1.toValueNode(false, {
                    start: -1,
                    end: -1,
                }),
                storedProcedureSecurityContext: parse_util_1.toValueNode(parser_node_1.StoredProcedureSecurityContext.DEFINER, {
                    start: -1,
                    end: -1,
                }),
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.StoredProcedureCharacteristics,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "StoredProcedureParameter$ebnf$1$subexpression$1", "symbols": [IN]},
    {"name": "StoredProcedureParameter$ebnf$1$subexpression$1", "symbols": [OUT]},
    {"name": "StoredProcedureParameter$ebnf$1$subexpression$1", "symbols": [INOUT]},
    {"name": "StoredProcedureParameter$ebnf$1", "symbols": ["StoredProcedureParameter$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "StoredProcedureParameter$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "StoredProcedureParameter", "symbols": ["StoredProcedureParameter$ebnf$1", "Identifier", "DataType"], "postprocess":  (data) => {
            const [parameterMode, identifier, dataType,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.StoredProcedureParameter,
                parameterMode: (parameterMode == undefined ?
                    parse_util_1.toValueNode(parser_node_1.ParameterMode.IN, {
                        start: identifier.start,
                        end: identifier.start,
                    }) :
                    parse_util_1.toValueNode((parameterMode[0].tokenKind == scanner_1.TokenKind.IN ?
                        parser_node_1.ParameterMode.IN :
                        parameterMode[0].tokenKind == scanner_1.TokenKind.OUT ?
                            parser_node_1.ParameterMode.OUT :
                            parser_node_1.ParameterMode.INOUT), parse_util_1.getTextRange(parameterMode))),
                identifier,
                dataType,
            };
        } },
    {"name": "StoredProcedureParameterList$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "StoredProcedureParameterList$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [Comma, "StoredProcedureParameter"]},
    {"name": "StoredProcedureParameterList$ebnf$1$subexpression$1$ebnf$1", "symbols": ["StoredProcedureParameterList$ebnf$1$subexpression$1$ebnf$1", "StoredProcedureParameterList$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "StoredProcedureParameterList$ebnf$1$subexpression$1", "symbols": ["StoredProcedureParameter", "StoredProcedureParameterList$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "StoredProcedureParameterList$ebnf$1", "symbols": ["StoredProcedureParameterList$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "StoredProcedureParameterList$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "StoredProcedureParameterList", "symbols": [OpenParentheses, "StoredProcedureParameterList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                return "syntaxKind" in item;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.StoredProcedureParameterList, parse_util_1.getTextRange(data));
        } },
    {"name": "AlterTableAlgorithm$ebnf$1", "symbols": [Equal], "postprocess": id},
    {"name": "AlterTableAlgorithm$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableAlgorithm", "symbols": [ALGORITHM, "AlterTableAlgorithm$ebnf$1", "Identifier"], "postprocess":  (data) => {
            const [, , identifier,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableAlgorithm,
                identifier: (identifier.quoted ?
                    identifier :
                    identifier.identifier.toUpperCase() == "DEFAULT" ?
                        {
                            ...identifier,
                            syntacticErrors: undefined,
                        } :
                        identifier),
            };
        } },
    {"name": "AlterTableLockAndAlgorithmOptions$ebnf$1", "symbols": ["AlterTableAlgorithm"], "postprocess": id},
    {"name": "AlterTableLockAndAlgorithmOptions$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableLockAndAlgorithmOptions", "symbols": ["AlterTableLock", "AlterTableLockAndAlgorithmOptions$ebnf$1"], "postprocess":  (data) => {
            const [alterTableLock, alterTableAlgorithm,] = data;
            const start = alterTableLock.end;
            const end = alterTableLock.end;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableLockAndAlgorithmOptions,
                alterTableLock,
                alterTableAlgorithm: (alterTableAlgorithm == undefined ?
                    {
                        start,
                        end,
                        syntaxKind: parser_node_1.SyntaxKind.AlterTableAlgorithm,
                        identifier: {
                            start,
                            end,
                            syntaxKind: parser_node_1.SyntaxKind.Identifier,
                            quoted: false,
                            identifier: "DEFAULT",
                        }
                    } :
                    alterTableAlgorithm),
            };
        } },
    {"name": "AlterTableLockAndAlgorithmOptions$ebnf$2$subexpression$1$ebnf$1", "symbols": ["AlterTableLock"], "postprocess": id},
    {"name": "AlterTableLockAndAlgorithmOptions$ebnf$2$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableLockAndAlgorithmOptions$ebnf$2$subexpression$1", "symbols": ["AlterTableAlgorithm", "AlterTableLockAndAlgorithmOptions$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "AlterTableLockAndAlgorithmOptions$ebnf$2", "symbols": ["AlterTableLockAndAlgorithmOptions$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "AlterTableLockAndAlgorithmOptions$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableLockAndAlgorithmOptions", "symbols": ["AlterTableLockAndAlgorithmOptions$ebnf$2"], "postprocess":  (data) => {
            if (data[0] == undefined) {
                const start = -1;
                const end = -1;
                return {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.AlterTableLockAndAlgorithmOptions,
                    alterTableLock: {
                        start,
                        end,
                        syntaxKind: parser_node_1.SyntaxKind.AlterTableLock,
                        identifier: {
                            start,
                            end,
                            syntaxKind: parser_node_1.SyntaxKind.Identifier,
                            quoted: false,
                            identifier: "DEFAULT",
                        }
                    },
                    alterTableAlgorithm: {
                        start,
                        end,
                        syntaxKind: parser_node_1.SyntaxKind.AlterTableAlgorithm,
                        identifier: {
                            start,
                            end,
                            syntaxKind: parser_node_1.SyntaxKind.Identifier,
                            quoted: false,
                            identifier: "DEFAULT",
                        }
                    },
                };
            }
            const [alterTableAlgorithm, alterTableLock,] = data[0];
            const start = alterTableAlgorithm.end;
            const end = alterTableAlgorithm.end;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableLockAndAlgorithmOptions,
                alterTableLock: (alterTableLock == undefined ?
                    {
                        start,
                        end,
                        syntaxKind: parser_node_1.SyntaxKind.AlterTableLock,
                        identifier: {
                            start,
                            end,
                            syntaxKind: parser_node_1.SyntaxKind.Identifier,
                            quoted: false,
                            identifier: "DEFAULT",
                        }
                    } :
                    alterTableLock),
                alterTableAlgorithm,
            };
        } },
    {"name": "AlterTableLock$ebnf$1", "symbols": [Equal], "postprocess": id},
    {"name": "AlterTableLock$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AlterTableLock", "symbols": [LOCK, "AlterTableLock$ebnf$1", "Identifier"], "postprocess":  (data) => {
            const [, , identifier,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AlterTableLock,
                identifier: (identifier.quoted ?
                    identifier :
                    identifier.identifier.toUpperCase() == "DEFAULT" ?
                        {
                            ...identifier,
                            syntacticErrors: undefined,
                        } :
                        identifier),
            };
        } },
    {"name": "CreateIndexStatement$ebnf$1$subexpression$1", "symbols": [UNIQUE]},
    {"name": "CreateIndexStatement$ebnf$1$subexpression$1", "symbols": [FULLTEXT]},
    {"name": "CreateIndexStatement$ebnf$1$subexpression$1", "symbols": [SPATIAL]},
    {"name": "CreateIndexStatement$ebnf$1", "symbols": ["CreateIndexStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateIndexStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateIndexStatement$ebnf$2", "symbols": ["IndexType"], "postprocess": id},
    {"name": "CreateIndexStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateIndexStatement", "symbols": [CREATE, "CreateIndexStatement$ebnf$1", INDEX, "Identifier", "CreateIndexStatement$ebnf$2", ON, "TableIdentifier", "IndexPartList", "IndexOption", "AlterTableLockAndAlgorithmOptions"], "postprocess":  function (data) {
            const [, indexClassToken, , indexName, indexType, , tableIdentifier, indexParts, rawIndexOption, alterTableLockAndAlgorithmOptions,] = data;
            const indexOption = (indexType == undefined ?
                rawIndexOption :
                rawIndexOption.indexType == undefined ?
                    {
                        ...rawIndexOption,
                        indexType: indexType.indexType,
                    } :
                    rawIndexOption);
            return {
                ...indexOption,
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateIndexStatement,
                indexClass: (indexClassToken == undefined ?
                    parser_node_1.IndexClass.INDEX :
                    indexClassToken[0].tokenKind == scanner_1.TokenKind.UNIQUE ?
                        parser_node_1.IndexClass.UNIQUE :
                        indexClassToken[0].tokenKind == scanner_1.TokenKind.FULLTEXT ?
                            parser_node_1.IndexClass.FULLTEXT :
                            parser_node_1.IndexClass.SPATIAL),
                indexName,
                tableIdentifier,
                indexParts,
                alterTableLockAndAlgorithmOptions
            };
        } },
    {"name": "CreateLogFileGroupAddFile", "symbols": [ADD, UNDOFILE, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateLogFileGroupAddUndoFile,
                undoFile: data[2],
            };
        } },
    {"name": "CreateLogFileGroupAddFile", "symbols": [ADD, REDOFILE, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateLogFileGroupAddRedoFile,
                redoFile: data[2],
            };
        } },
    {"name": "CreateLogFileGroupOption$ebnf$1", "symbols": [Equal], "postprocess": id},
    {"name": "CreateLogFileGroupOption$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateLogFileGroupOption", "symbols": [INITIAL_SIZE, "CreateLogFileGroupOption$ebnf$1", "SizeNumber"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                initialSize: data[2],
            };
        } },
    {"name": "CreateLogFileGroupOption$ebnf$2", "symbols": [Equal], "postprocess": id},
    {"name": "CreateLogFileGroupOption$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateLogFileGroupOption", "symbols": [UNDO_BUFFER_SIZE, "CreateLogFileGroupOption$ebnf$2", "SizeNumber"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                undoBufferSize: data[2],
            };
        } },
    {"name": "CreateLogFileGroupOption$ebnf$3", "symbols": [Equal], "postprocess": id},
    {"name": "CreateLogFileGroupOption$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "CreateLogFileGroupOption", "symbols": [REDO_BUFFER_SIZE, "CreateLogFileGroupOption$ebnf$3", "SizeNumber"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                redoBufferSize: data[2],
            };
        } },
    {"name": "CreateLogFileGroupOption$ebnf$4", "symbols": [Equal], "postprocess": id},
    {"name": "CreateLogFileGroupOption$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "CreateLogFileGroupOption", "symbols": [NODEGROUP, "CreateLogFileGroupOption$ebnf$4", "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                nodeGroup: data[2],
            };
        } },
    {"name": "CreateLogFileGroupOption$ebnf$5", "symbols": [STORAGE], "postprocess": id},
    {"name": "CreateLogFileGroupOption$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "CreateLogFileGroupOption$ebnf$6", "symbols": [Equal], "postprocess": id},
    {"name": "CreateLogFileGroupOption$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "CreateLogFileGroupOption$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "CreateLogFileGroupOption$subexpression$1", "symbols": ["Identifier"]},
    {"name": "CreateLogFileGroupOption", "symbols": ["CreateLogFileGroupOption$ebnf$5", ENGINE, "CreateLogFileGroupOption$ebnf$6", "CreateLogFileGroupOption$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                engine: data[3][0],
            };
        } },
    {"name": "CreateLogFileGroupOption", "symbols": [WAIT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                wait: parse_util_1.toValueNode(true, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "CreateLogFileGroupOption", "symbols": [NO_WAIT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                wait: parse_util_1.toValueNode(false, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "CreateLogFileGroupOption$ebnf$7", "symbols": [Equal], "postprocess": id},
    {"name": "CreateLogFileGroupOption$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "CreateLogFileGroupOption", "symbols": [COMMENT, "CreateLogFileGroupOption$ebnf$7", "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                comment: data[2],
            };
        } },
    {"name": "CreateLogFileGroupOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "CreateLogFileGroupOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [Comma], "postprocess": id},
    {"name": "CreateLogFileGroupOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateLogFileGroupOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["CreateLogFileGroupOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "CreateLogFileGroupOption"]},
    {"name": "CreateLogFileGroupOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": ["CreateLogFileGroupOptions$ebnf$1$subexpression$1$ebnf$1", "CreateLogFileGroupOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "CreateLogFileGroupOptions$ebnf$1$subexpression$1", "symbols": ["CreateLogFileGroupOption", "CreateLogFileGroupOptions$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "CreateLogFileGroupOptions$ebnf$1", "symbols": ["CreateLogFileGroupOptions$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateLogFileGroupOptions$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateLogFileGroupOptions", "symbols": ["CreateLogFileGroupOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const result = {
                initialSize: {
                    start: -1,
                    end: -1,
                    syntaxKind: parser_node_1.SyntaxKind.SizeNumber,
                    value: {
                        start: -1,
                        end: -1,
                        syntaxKind: parser_node_1.SyntaxKind.Identifier,
                        quoted: false,
                        identifier: "128M",
                    },
                },
                undoBufferSize: {
                    start: -1,
                    end: -1,
                    syntaxKind: parser_node_1.SyntaxKind.SizeNumber,
                    value: {
                        start: -1,
                        end: -1,
                        syntaxKind: parser_node_1.SyntaxKind.Identifier,
                        quoted: false,
                        identifier: "8M",
                    },
                },
                redoBufferSize: undefined,
                nodeGroup: undefined,
                engine: undefined,
                wait: undefined,
                comment: undefined,
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateLogFileGroupOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "CreateLogFileGroupStatement", "symbols": [CREATE, LOGFILE, GROUP, "Identifier", "CreateLogFileGroupAddFile", "CreateLogFileGroupOptions"], "postprocess":  (data) => {
            const [, , , identifier, addFile, createLogFileGroupOptions,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateLogFileGroupStatement,
                identifier,
                addFile,
                createLogFileGroupOptions,
            };
        } },
    {"name": "CreateSchemaOptionList$ebnf$1", "symbols": []},
    {"name": "CreateSchemaOptionList$ebnf$1$subexpression$1", "symbols": ["DefaultCharacterSet"]},
    {"name": "CreateSchemaOptionList$ebnf$1$subexpression$1", "symbols": ["DefaultCollation"]},
    {"name": "CreateSchemaOptionList$ebnf$1", "symbols": ["CreateSchemaOptionList$ebnf$1", "CreateSchemaOptionList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "CreateSchemaOptionList", "symbols": ["CreateSchemaOptionList$ebnf$1"], "postprocess":  (data) => {
            return parse_util_1.toNodeArray(data.flat(2), parser_node_1.SyntaxKind.CreateSchemaOptionList, parse_util_1.getTextRange(data));
        } },
    {"name": "CreateSchemaStatement$subexpression$1", "symbols": [SCHEMA]},
    {"name": "CreateSchemaStatement$subexpression$1", "symbols": [DATABASE]},
    {"name": "CreateSchemaStatement$ebnf$1$subexpression$1", "symbols": [IF, NOT, EXISTS]},
    {"name": "CreateSchemaStatement$ebnf$1", "symbols": ["CreateSchemaStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateSchemaStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateSchemaStatement", "symbols": [CREATE, "CreateSchemaStatement$subexpression$1", "CreateSchemaStatement$ebnf$1", "Identifier", "CreateSchemaOptionList"], "postprocess":  (data) => {
            const [, , ifNotExists, identifier, createSchemaOptions] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateSchemaStatement,
                schemaName: identifier,
                ifNotExists: ifNotExists != undefined,
                createSchemaOptions,
            };
        } },
    {"name": "CreateServerOption", "symbols": [HOST, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                host: data[1],
            };
        } },
    {"name": "CreateServerOption", "symbols": [DATABASE, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                database: data[1],
            };
        } },
    {"name": "CreateServerOption", "symbols": [USER, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                user: data[1],
            };
        } },
    {"name": "CreateServerOption", "symbols": [PASSWORD, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                password: data[1],
            };
        } },
    {"name": "CreateServerOption", "symbols": [SOCKET, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                socket: data[1],
            };
        } },
    {"name": "CreateServerOption", "symbols": [OWNER, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                owner: data[1],
            };
        } },
    {"name": "CreateServerOption", "symbols": [PORT, "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                port: data[1],
            };
        } },
    {"name": "CreateServerOptions$ebnf$1", "symbols": []},
    {"name": "CreateServerOptions$ebnf$1$subexpression$1", "symbols": [Comma, "CreateServerOption"]},
    {"name": "CreateServerOptions$ebnf$1", "symbols": ["CreateServerOptions$ebnf$1", "CreateServerOptions$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "CreateServerOptions", "symbols": ["CreateServerOption", "CreateServerOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const start = parse_util_1.getStart(data);
            const end = start;
            const result = {
                host: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "",
                    sourceText: "''",
                },
                database: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "",
                    sourceText: "''",
                },
                user: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "",
                    sourceText: "''",
                },
                password: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "",
                    sourceText: "''",
                },
                socket: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "",
                    sourceText: "''",
                },
                owner: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "",
                    sourceText: "''",
                },
                port: {
                    start,
                    end,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(0),
                },
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateServerOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "CreateServerStatement$subexpression$1", "symbols": ["Identifier"]},
    {"name": "CreateServerStatement$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "CreateServerStatement$subexpression$2", "symbols": ["Identifier"]},
    {"name": "CreateServerStatement$subexpression$2", "symbols": ["StringLiteral"]},
    {"name": "CreateServerStatement", "symbols": [CREATE, SERVER, "CreateServerStatement$subexpression$1", FOREIGN, DATA, WRAPPER, "CreateServerStatement$subexpression$2", OPTIONS, OpenParentheses, "CreateServerOptions", CloseParentheses], "postprocess":  (data) => {
            const [, , serverName, , , , foreignDataWrapper, , , createServerOptions,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateServerStatement,
                serverName: serverName[0],
                foreignDataWrapper: foreignDataWrapper[0],
                createServerOptions,
            };
        } },
    {"name": "CheckDefinition$ebnf$1", "symbols": ["Constraint"], "postprocess": id},
    {"name": "CheckDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CheckDefinition", "symbols": ["CheckDefinition$ebnf$1", CHECK, OpenParentheses, "Expression", CloseParentheses], "postprocess":  (data) => {
            const [constraintName, , , expr,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CheckDefinition,
                constraintName: (constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName :
                    undefined),
                expr,
            };
        } },
    {"name": "ColumnCheckDefinition", "symbols": ["CheckDefinition"], "postprocess":  (data) => {
            const [checkDefinition] = data;
            if (checkDefinition.constraintName != undefined) {
                parse_util_1.pushSyntacticErrorAt(checkDefinition.constraintName, checkDefinition.constraintName.start, checkDefinition.constraintName.end, [], diagnostic_messages_1.DiagnosticMessages.UnexpectedSyntaxKind, "CONSTRAINT");
            }
            return checkDefinition;
        } },
    {"name": "CreateTableDefinition$subexpression$1", "symbols": ["ColumnDefinition"]},
    {"name": "CreateTableDefinition$subexpression$1", "symbols": ["IndexDefinition"]},
    {"name": "CreateTableDefinition$subexpression$1", "symbols": ["CheckDefinition"]},
    {"name": "CreateTableDefinition$subexpression$1", "symbols": ["PrimaryKeyDefinition"]},
    {"name": "CreateTableDefinition$subexpression$1", "symbols": ["ForeignKeyDefinition"]},
    {"name": "CreateTableDefinition", "symbols": ["CreateTableDefinition$subexpression$1"], "postprocess": (data) => data[0][0]},
    {"name": "CreateTableDefinitionList$ebnf$1", "symbols": []},
    {"name": "CreateTableDefinitionList$ebnf$1$subexpression$1", "symbols": [Comma, "CreateTableDefinition"]},
    {"name": "CreateTableDefinitionList$ebnf$1", "symbols": ["CreateTableDefinitionList$ebnf$1", "CreateTableDefinitionList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "CreateTableDefinitionList", "symbols": [OpenParentheses, "CreateTableDefinition", "CreateTableDefinitionList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.CreateTableDefinitionList, parse_util_1.getTextRange(data));
        } },
    {"name": "ForeignKeyDefinition$ebnf$1", "symbols": ["Constraint"], "postprocess": id},
    {"name": "ForeignKeyDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "ForeignKeyDefinition$ebnf$2", "symbols": ["Identifier"], "postprocess": id},
    {"name": "ForeignKeyDefinition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "ForeignKeyDefinition", "symbols": ["ForeignKeyDefinition$ebnf$1", FOREIGN, KEY, "ForeignKeyDefinition$ebnf$2", "IdentifierList", "ForeignKeyReferenceDefinition"], "postprocess":  function (data) {
            const [constraintName, , , indexName, columns, foreignKeyReferenceDefinition] = data;
            return {
                syntaxKind: parser_node_1.SyntaxKind.ForeignKeyDefinition,
                constraintName: (constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName :
                    undefined),
                indexName: (constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName : indexName !== null && indexName !== void 0 ? indexName : undefined),
                columns,
                foreignKeyReferenceDefinition,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "ReferenceOption$subexpression$1$subexpression$1", "symbols": [RESTRICT]},
    {"name": "ReferenceOption$subexpression$1", "symbols": ["ReferenceOption$subexpression$1$subexpression$1"]},
    {"name": "ReferenceOption$subexpression$1$subexpression$2", "symbols": [CASCADE]},
    {"name": "ReferenceOption$subexpression$1", "symbols": ["ReferenceOption$subexpression$1$subexpression$2"]},
    {"name": "ReferenceOption$subexpression$1$subexpression$3", "symbols": [SET, NULL]},
    {"name": "ReferenceOption$subexpression$1", "symbols": ["ReferenceOption$subexpression$1$subexpression$3"]},
    {"name": "ReferenceOption$subexpression$1$subexpression$4", "symbols": [NO, ACTION]},
    {"name": "ReferenceOption$subexpression$1", "symbols": ["ReferenceOption$subexpression$1$subexpression$4"]},
    {"name": "ReferenceOption$subexpression$1$subexpression$5", "symbols": [SET, DEFAULT]},
    {"name": "ReferenceOption$subexpression$1", "symbols": ["ReferenceOption$subexpression$1$subexpression$5"]},
    {"name": "ReferenceOption", "symbols": ["ReferenceOption$subexpression$1"], "postprocess":  (data) => {
            const tokens = data[0][0];
            return {
                ...parse_util_1.getTextRange(data),
                referenceOption: (tokens.length == 1 ?
                    (tokens[0].tokenKind == scanner_1.TokenKind.RESTRICT ?
                        parser_node_1.ReferenceOption.RESTRICT :
                        parser_node_1.ReferenceOption.CASCADE) :
                    (tokens[1].tokenKind == scanner_1.TokenKind.NULL ?
                        parser_node_1.ReferenceOption.SET_NULL :
                        tokens[1].tokenKind == scanner_1.TokenKind.ACTION ?
                            parser_node_1.ReferenceOption.NO_ACTION :
                            parser_node_1.ReferenceOption.SET_DEFAULT)),
            };
        } },
    {"name": "OnUpdateDelete$ebnf$1$subexpression$1", "symbols": [ON, DELETE, "ReferenceOption"]},
    {"name": "OnUpdateDelete$ebnf$1", "symbols": ["OnUpdateDelete$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "OnUpdateDelete$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "OnUpdateDelete", "symbols": [ON, UPDATE, "ReferenceOption", "OnUpdateDelete$ebnf$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                onUpdate: data[2].referenceOption,
                onDelete: (data[3] == undefined ?
                    undefined :
                    data[3][2].referenceOption),
            };
        } },
    {"name": "OnUpdateDelete$ebnf$2$subexpression$1", "symbols": [ON, UPDATE, "ReferenceOption"]},
    {"name": "OnUpdateDelete$ebnf$2", "symbols": ["OnUpdateDelete$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "OnUpdateDelete$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "OnUpdateDelete", "symbols": [ON, DELETE, "ReferenceOption", "OnUpdateDelete$ebnf$2"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                onDelete: data[2].referenceOption,
                onUpdate: (data[3] == undefined ?
                    undefined :
                    data[3][2].referenceOption),
            };
        } },
    {"name": "ForeignKeyReferenceDefinition$ebnf$1$subexpression$1$subexpression$1", "symbols": [MATCH, FULL]},
    {"name": "ForeignKeyReferenceDefinition$ebnf$1$subexpression$1", "symbols": ["ForeignKeyReferenceDefinition$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "ForeignKeyReferenceDefinition$ebnf$1$subexpression$1$subexpression$2", "symbols": [MATCH, PARTIAL]},
    {"name": "ForeignKeyReferenceDefinition$ebnf$1$subexpression$1", "symbols": ["ForeignKeyReferenceDefinition$ebnf$1$subexpression$1$subexpression$2"]},
    {"name": "ForeignKeyReferenceDefinition$ebnf$1$subexpression$1$subexpression$3", "symbols": [MATCH, SIMPLE]},
    {"name": "ForeignKeyReferenceDefinition$ebnf$1$subexpression$1", "symbols": ["ForeignKeyReferenceDefinition$ebnf$1$subexpression$1$subexpression$3"]},
    {"name": "ForeignKeyReferenceDefinition$ebnf$1", "symbols": ["ForeignKeyReferenceDefinition$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "ForeignKeyReferenceDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "ForeignKeyReferenceDefinition$ebnf$2", "symbols": ["OnUpdateDelete"], "postprocess": id},
    {"name": "ForeignKeyReferenceDefinition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "ForeignKeyReferenceDefinition", "symbols": [REFERENCES, "TableIdentifier", "IdentifierList", "ForeignKeyReferenceDefinition$ebnf$1", "ForeignKeyReferenceDefinition$ebnf$2"], "postprocess":  (data) => {
            const [, referencedTableName, referencedColumns, match, onUpdateDelete] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ForeignKeyReferenceDefinition,
                referencedTableName,
                referencedColumns,
                match: (match == undefined ?
                    undefined :
                    match[0][1].tokenKind == scanner_1.TokenKind.FULL ?
                        parser_node_1.ReferenceMatch.FULL :
                        match[0][1].tokenKind == scanner_1.TokenKind.PARTIAL ?
                            parser_node_1.ReferenceMatch.PARTIAL :
                            parser_node_1.ReferenceMatch.SIMPLE),
                onUpdate: (onUpdateDelete == undefined ?
                    undefined :
                    onUpdateDelete.onUpdate),
                onDelete: (onUpdateDelete == undefined ?
                    undefined :
                    onUpdateDelete.onDelete),
            };
        } },
    {"name": "IndexDefinition$subexpression$1", "symbols": [FULLTEXT]},
    {"name": "IndexDefinition$subexpression$1", "symbols": [SPATIAL]},
    {"name": "IndexDefinition$ebnf$1$subexpression$1$subexpression$1", "symbols": ["Identifier"]},
    {"name": "IndexDefinition$ebnf$1$subexpression$1", "symbols": ["IndexDefinition$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "IndexDefinition$ebnf$1$subexpression$1$subexpression$2$subexpression$1", "symbols": [INDEX]},
    {"name": "IndexDefinition$ebnf$1$subexpression$1$subexpression$2$subexpression$1", "symbols": [KEY]},
    {"name": "IndexDefinition$ebnf$1$subexpression$1$subexpression$2", "symbols": ["IndexDefinition$ebnf$1$subexpression$1$subexpression$2$subexpression$1", "Identifier"]},
    {"name": "IndexDefinition$ebnf$1$subexpression$1", "symbols": ["IndexDefinition$ebnf$1$subexpression$1$subexpression$2"]},
    {"name": "IndexDefinition$ebnf$1", "symbols": ["IndexDefinition$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition", "symbols": ["IndexDefinition$subexpression$1", "IndexDefinition$ebnf$1", "IndexPartList", "IndexOption"], "postprocess":  function (data) {
            const [indexClass, rawIndexName, indexParts, indexOption] = data;
            const indexName = (rawIndexName == undefined ?
                undefined :
                rawIndexName[0].length == 2 ?
                    rawIndexName[0][1] :
                    rawIndexName[0][0].quoted ?
                        rawIndexName[0][0] :
                        (rawIndexName[0][0].identifier.toUpperCase() == "INDEX" ||
                            rawIndexName[0][0].identifier.toUpperCase() == "KEY") ?
                            undefined :
                            rawIndexName[0][0]);
            const result = {
                syntaxKind: parser_node_1.SyntaxKind.IndexDefinition,
                constraintName: undefined,
                indexClass: (indexClass[0].tokenKind == scanner_1.TokenKind.FULLTEXT ?
                    parser_node_1.IndexClass.FULLTEXT :
                    parser_node_1.IndexClass.SPATIAL),
                indexName,
                indexParts,
                ...indexOption,
                ...parse_util_1.getTextRange(data),
            };
            return result;
        } },
    {"name": "ColumnDefinition", "symbols": ["ColumnIdentifier", "DataType", "GeneratedDefinition", "ColumnDefinitionModifier"], "postprocess":  function (data) {
            const [columnIdentifierOriginal, dataType, generated, modifier] = data;
            const columnIdentifier = {
                ...columnIdentifierOriginal,
                syntacticErrors: (columnIdentifierOriginal.syntacticErrors == undefined ?
                    undefined :
                    [...columnIdentifierOriginal.syntacticErrors]),
            };
            return {
                syntaxKind: parser_node_1.SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated: generated,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "ColumnDefinition", "symbols": ["ColumnIdentifier", SERIAL, "GeneratedDefinition", "ColumnDefinitionModifier"], "postprocess":  function (data) {
            const [columnIdentifierOriginal, serial, generated, modifier] = data;
            const columnIdentifier = {
                ...columnIdentifierOriginal,
                syntacticErrors: (columnIdentifierOriginal.syntacticErrors == undefined ?
                    undefined :
                    [...columnIdentifierOriginal.syntacticErrors]),
            };
            const dataType = {
                start: serial.start,
                end: serial.end,
                syntaxKind: parser_node_1.SyntaxKind.IntegerDataType,
                bytes: 8,
                displayWidth: undefined,
                signed: false,
                zeroFill: false,
            };
            /**
             * For some reason, `SERIAL GENERATED` columns are always
             * non-nullable.
             *
             * Different from `SERIAL` non-generated columns...
             */
            modifier.nullable = {
                start: serial.start,
                end: serial.end,
                nullable: false,
            };
            modifier.autoIncrement = true;
            modifier.uniqueKey = true;
            return {
                syntaxKind: parser_node_1.SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated: generated,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "GeneratedDefinition$ebnf$1$subexpression$1", "symbols": [GENERATED, ALWAYS]},
    {"name": "GeneratedDefinition$ebnf$1", "symbols": ["GeneratedDefinition$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "GeneratedDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "GeneratedDefinition$ebnf$2$subexpression$1", "symbols": [VIRTUAL]},
    {"name": "GeneratedDefinition$ebnf$2$subexpression$1", "symbols": [STORED]},
    {"name": "GeneratedDefinition$ebnf$2", "symbols": ["GeneratedDefinition$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "GeneratedDefinition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "GeneratedDefinition", "symbols": ["GeneratedDefinition$ebnf$1", AS, OpenParentheses, "Expression", CloseParentheses, "GeneratedDefinition$ebnf$2"], "postprocess":  (data) => {
            const [, , , expr, , generatedType] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.GeneratedDefinition,
                expr,
                generatedType: (generatedType == null ?
                    parser_node_1.GeneratedType.VIRTUAL :
                    generatedType[0].tokenKind == scanner_1.TokenKind.STORED ?
                        parser_node_1.GeneratedType.STORED :
                        parser_node_1.GeneratedType.VIRTUAL),
            };
        } },
    {"name": "IndexDefinition$subexpression$2", "symbols": [INDEX]},
    {"name": "IndexDefinition$subexpression$2", "symbols": [KEY]},
    {"name": "IndexDefinition$ebnf$2", "symbols": ["Identifier"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition$ebnf$3", "symbols": ["IndexType"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition", "symbols": ["IndexDefinition$subexpression$2", "IndexDefinition$ebnf$2", "IndexDefinition$ebnf$3", "IndexPartList", "IndexOption"], "postprocess":  function (data) {
            const [, indexName, indexType, indexParts, rawIndexOption] = data;
            const indexOption = (indexType == undefined ?
                rawIndexOption :
                rawIndexOption.indexType == undefined ?
                    {
                        ...rawIndexOption,
                        indexType: indexType.indexType,
                    } :
                    rawIndexOption);
            return {
                syntaxKind: parser_node_1.SyntaxKind.IndexDefinition,
                constraintName: undefined,
                indexClass: parser_node_1.IndexClass.INDEX,
                indexName: indexName !== null && indexName !== void 0 ? indexName : undefined,
                indexParts,
                ...indexOption,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "IndexOptionElement$subexpression$1$subexpression$1$ebnf$1", "symbols": [Equal], "postprocess": id},
    {"name": "IndexOptionElement$subexpression$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IndexOptionElement$subexpression$1$subexpression$1", "symbols": [KEY_BLOCK_SIZE, "IndexOptionElement$subexpression$1$subexpression$1$ebnf$1", "IntegerLiteral"]},
    {"name": "IndexOptionElement$subexpression$1", "symbols": ["IndexOptionElement$subexpression$1$subexpression$1"]},
    {"name": "IndexOptionElement$subexpression$1", "symbols": ["IndexType"]},
    {"name": "IndexOptionElement$subexpression$1$subexpression$2", "symbols": [WITH, PARSER, "Identifier"]},
    {"name": "IndexOptionElement$subexpression$1", "symbols": ["IndexOptionElement$subexpression$1$subexpression$2"]},
    {"name": "IndexOptionElement$subexpression$1", "symbols": ["Comment"]},
    {"name": "IndexOptionElement", "symbols": ["IndexOptionElement$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                data: data[0][0],
            };
        } },
    {"name": "IndexOption$ebnf$1", "symbols": []},
    {"name": "IndexOption$ebnf$1", "symbols": ["IndexOption$ebnf$1", "IndexOptionElement"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "IndexOption", "symbols": ["IndexOption$ebnf$1"], "postprocess":  (data) => {
            let indexOption = parse_util_1.createDefaultIndexOption();
            for (const ele of data[0]) {
                indexOption = parse_util_1.processIndexOption(indexOption, ele.data);
            }
            return indexOption;
        } },
    {"name": "IndexPart$ebnf$1$subexpression$1", "symbols": [OpenParentheses, "IntegerLiteral", CloseParentheses]},
    {"name": "IndexPart$ebnf$1", "symbols": ["IndexPart$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "IndexPart$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IndexPart$ebnf$2$subexpression$1", "symbols": [ASC]},
    {"name": "IndexPart$ebnf$2$subexpression$1", "symbols": [DESC]},
    {"name": "IndexPart$ebnf$2", "symbols": ["IndexPart$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "IndexPart$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "IndexPart", "symbols": ["Identifier", "IndexPart$ebnf$1", "IndexPart$ebnf$2"], "postprocess":  (data) => {
            const [columnName, indexLength, rawSortDirection] = data;
            const sortDirection = (rawSortDirection == undefined ?
                parser_node_1.SortDirection.ASC :
                rawSortDirection[0].tokenKind == scanner_1.TokenKind.ASC ?
                    parser_node_1.SortDirection.ASC :
                    parser_node_1.SortDirection.DESC);
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IndexPart,
                columnName,
                indexLength: (indexLength == undefined ?
                    undefined :
                    indexLength[1]),
                sortDirection: {
                    ...(rawSortDirection == undefined ?
                        {
                            start: parse_util_1.getEnd(data),
                            end: parse_util_1.getEnd(data),
                        } :
                        parse_util_1.getTextRange(rawSortDirection)),
                    syntaxKind: parser_node_1.SyntaxKind.Value,
                    value: sortDirection,
                },
            };
        } },
    {"name": "IndexPartList$ebnf$1", "symbols": []},
    {"name": "IndexPartList$ebnf$1$subexpression$1", "symbols": [Comma, "IndexPart"]},
    {"name": "IndexPartList$ebnf$1", "symbols": ["IndexPartList$ebnf$1", "IndexPartList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "IndexPartList", "symbols": [OpenParentheses, "IndexPart", "IndexPartList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.IndexPartList, parse_util_1.getTextRange(data));
        } },
    {"name": "IndexType$subexpression$1", "symbols": [BTREE]},
    {"name": "IndexType$subexpression$1", "symbols": [HASH]},
    {"name": "IndexType", "symbols": [USING, "IndexType$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                indexType: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Value,
                    value: (data[1][0].tokenKind == scanner_1.TokenKind.BTREE ?
                        parser_node_1.IndexType.BTREE :
                        parser_node_1.IndexType.HASH),
                },
            };
        } },
    {"name": "ColumnModifierElement$subexpression$1", "symbols": [AUTO_INCREMENT]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$1$subexpression$1", "symbols": [FIXED]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$1$subexpression$1", "symbols": [DYNAMIC]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$1$subexpression$1", "symbols": [DEFAULT]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$1", "symbols": [COLUMN_FORMAT, "ColumnModifierElement$subexpression$1$subexpression$1$subexpression$1"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$1"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$2$subexpression$1", "symbols": [DISK]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$2$subexpression$1", "symbols": [MEMORY]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$2$subexpression$1", "symbols": [DEFAULT]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$2", "symbols": [STORAGE, "ColumnModifierElement$subexpression$1$subexpression$2$subexpression$1"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$2"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$3", "symbols": [DEFAULT, "Expression"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$3"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": [NULL]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$4", "symbols": [NOT, NULL]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$4"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": [UNIQUE]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": [UNIQUE_KEY]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$5$ebnf$1", "symbols": [PRIMARY], "postprocess": id},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$5$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$5", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$5$ebnf$1", KEY]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$5"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$6", "symbols": [COMMENT, "StringLiteral"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$6"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$7", "symbols": [SERIAL, DEFAULT, VALUE]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$7"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$8", "symbols": [ON, UPDATE, "CurrentTimestamp"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$8"]},
    {"name": "ColumnModifierElement", "symbols": ["ColumnModifierElement$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                data: data[0][0],
            };
        } },
    {"name": "ColumnDefinitionModifier$ebnf$1", "symbols": []},
    {"name": "ColumnDefinitionModifier$ebnf$1", "symbols": ["ColumnDefinitionModifier$ebnf$1", "ColumnModifierElement"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ColumnDefinitionModifier$ebnf$2$subexpression$1", "symbols": ["ColumnCheckDefinition"]},
    {"name": "ColumnDefinitionModifier$ebnf$2$subexpression$1", "symbols": ["ForeignKeyReferenceDefinition"]},
    {"name": "ColumnDefinitionModifier$ebnf$2", "symbols": ["ColumnDefinitionModifier$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "ColumnDefinitionModifier$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "ColumnDefinitionModifier", "symbols": ["ColumnDefinitionModifier$ebnf$1", "ColumnDefinitionModifier$ebnf$2"], "postprocess":  (data) => {
            let columnDefinitionModifier = parse_util_1.createDefaultColumnDefinitionModifier();
            for (const ele of data[0]) {
                columnDefinitionModifier = parse_util_1.processColumnDefinitionModifier(columnDefinitionModifier, ele.data);
            }
            const checkOrForeignKeyReference = data[1];
            if (checkOrForeignKeyReference != undefined) {
                if (checkOrForeignKeyReference[0].syntaxKind == parser_node_1.SyntaxKind.CheckDefinition) {
                    columnDefinitionModifier.checkDefinition = checkOrForeignKeyReference[0];
                }
                else {
                    columnDefinitionModifier.foreignKeyReferenceDefinition = checkOrForeignKeyReference[0];
                }
            }
            return columnDefinitionModifier;
        } },
    {"name": "ColumnDefinition", "symbols": ["ColumnIdentifier", "DataType", "ColumnDefinitionModifier"], "postprocess":  (data) => {
            const [columnIdentifier, dataType, modifier] = data;
            return {
                syntaxKind: parser_node_1.SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated: undefined,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "ColumnDefinition", "symbols": ["ColumnIdentifier", SERIAL, "ColumnDefinitionModifier"], "postprocess":  (data) => {
            const [columnIdentifier, serial, modifier] = data;
            const dataType = {
                start: serial.start,
                end: serial.end,
                syntaxKind: parser_node_1.SyntaxKind.IntegerDataType,
                bytes: 8,
                displayWidth: undefined,
                signed: false,
                zeroFill: false,
            };
            /**
             * For some reason, we can make `SERIAL` columns nullable.
             */
            modifier.nullable = (modifier.nullable == undefined ?
                {
                    start: serial.start,
                    end: serial.end,
                    nullable: false,
                } :
                modifier.nullable);
            modifier.autoIncrement = true;
            modifier.uniqueKey = true;
            return {
                syntaxKind: parser_node_1.SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated: undefined,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "PrimaryKeyDefinition$ebnf$1", "symbols": ["Constraint"], "postprocess": id},
    {"name": "PrimaryKeyDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "PrimaryKeyDefinition$ebnf$2", "symbols": ["Identifier"], "postprocess": id},
    {"name": "PrimaryKeyDefinition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "PrimaryKeyDefinition$ebnf$3", "symbols": ["IndexType"], "postprocess": id},
    {"name": "PrimaryKeyDefinition$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "PrimaryKeyDefinition", "symbols": ["PrimaryKeyDefinition$ebnf$1", PRIMARY, KEY, "PrimaryKeyDefinition$ebnf$2", "PrimaryKeyDefinition$ebnf$3", "IndexPartList", "IndexOption"], "postprocess":  function (data) {
            const [constraintName, , , indexName, indexType, indexParts, rawIndexOption] = data;
            const indexOption = (indexType == undefined ?
                rawIndexOption :
                rawIndexOption.indexType == undefined ?
                    {
                        ...rawIndexOption,
                        indexType: indexType.indexType,
                    } :
                    rawIndexOption);
            return {
                syntaxKind: parser_node_1.SyntaxKind.PrimaryKeyDefinition,
                constraintName: (constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName :
                    undefined),
                indexName: indexName !== null && indexName !== void 0 ? indexName : undefined,
                indexParts,
                ...indexOption,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "IndexDefinition$ebnf$4", "symbols": ["Constraint"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition$ebnf$5$subexpression$1$subexpression$1", "symbols": ["Identifier"]},
    {"name": "IndexDefinition$ebnf$5$subexpression$1", "symbols": ["IndexDefinition$ebnf$5$subexpression$1$subexpression$1"]},
    {"name": "IndexDefinition$ebnf$5$subexpression$1$subexpression$2$subexpression$1", "symbols": [INDEX]},
    {"name": "IndexDefinition$ebnf$5$subexpression$1$subexpression$2$subexpression$1", "symbols": [KEY]},
    {"name": "IndexDefinition$ebnf$5$subexpression$1$subexpression$2", "symbols": ["IndexDefinition$ebnf$5$subexpression$1$subexpression$2$subexpression$1", "Identifier"]},
    {"name": "IndexDefinition$ebnf$5$subexpression$1", "symbols": ["IndexDefinition$ebnf$5$subexpression$1$subexpression$2"]},
    {"name": "IndexDefinition$ebnf$5", "symbols": ["IndexDefinition$ebnf$5$subexpression$1"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition$ebnf$6", "symbols": ["IndexType"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition", "symbols": ["IndexDefinition$ebnf$4", UNIQUE, "IndexDefinition$ebnf$5", "IndexDefinition$ebnf$6", "IndexPartList", "IndexOption"], "postprocess":  function (data) {
            const [constraintName, , rawIndexName, indexType, indexParts, rawIndexOption] = data;
            const indexName = (rawIndexName == undefined ?
                undefined :
                rawIndexName[0].length == 2 ?
                    rawIndexName[0][1] :
                    rawIndexName[0][0].quoted ?
                        rawIndexName[0][0] :
                        (rawIndexName[0][0].identifier.toUpperCase() == "INDEX" ||
                            rawIndexName[0][0].identifier.toUpperCase() == "KEY") ?
                            undefined :
                            rawIndexName[0][0]);
            const indexOption = (indexType == undefined ?
                rawIndexOption :
                rawIndexOption.indexType == undefined ?
                    {
                        ...rawIndexOption,
                        indexType: indexType.indexType,
                    } :
                    rawIndexOption);
            return {
                syntaxKind: parser_node_1.SyntaxKind.IndexDefinition,
                constraintName: (constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName :
                    undefined),
                indexClass: parser_node_1.IndexClass.UNIQUE,
                indexName: indexName !== null && indexName !== void 0 ? indexName : undefined,
                indexParts,
                ...indexOption,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "IndexDefinition$ebnf$7", "symbols": ["Constraint"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition$ebnf$8", "symbols": ["Identifier"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition$ebnf$9", "symbols": ["IndexType"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$9", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition", "symbols": ["IndexDefinition$ebnf$7", UNIQUE_KEY, "IndexDefinition$ebnf$8", "IndexDefinition$ebnf$9", "IndexPartList", "IndexOption"], "postprocess":  function (data) {
            const [constraintName, , indexName, indexType, indexParts, rawIndexOption] = data;
            const indexOption = (indexType == undefined ?
                rawIndexOption :
                rawIndexOption.indexType == undefined ?
                    {
                        ...rawIndexOption,
                        indexType: indexType.indexType,
                    } :
                    rawIndexOption);
            return {
                syntaxKind: parser_node_1.SyntaxKind.IndexDefinition,
                constraintName: (constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName :
                    undefined),
                indexClass: parser_node_1.IndexClass.UNIQUE,
                indexName: indexName !== null && indexName !== void 0 ? indexName : undefined,
                indexParts,
                ...indexOption,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "CreateTableLikeStatement$ebnf$1", "symbols": [TEMPORARY], "postprocess": id},
    {"name": "CreateTableLikeStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableLikeStatement$ebnf$2$subexpression$1", "symbols": [IF, NOT, EXISTS]},
    {"name": "CreateTableLikeStatement$ebnf$2", "symbols": ["CreateTableLikeStatement$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "CreateTableLikeStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableLikeStatement", "symbols": [CREATE, "CreateTableLikeStatement$ebnf$1", TABLE, "CreateTableLikeStatement$ebnf$2", "TableIdentifier", LIKE, "TableIdentifier"], "postprocess":  (data) => {
            const [, temporary, , ifNotExists, tableIdentifier, , likeTableIdentifier,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTableLikeStatement,
                temporary: temporary != null,
                ifNotExists: ifNotExists != null,
                tableIdentifier,
                likeTableIdentifier,
            };
        } },
    {"name": "CreateTableLikeStatement$ebnf$3", "symbols": [TEMPORARY], "postprocess": id},
    {"name": "CreateTableLikeStatement$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableLikeStatement$ebnf$4$subexpression$1", "symbols": [IF, NOT, EXISTS]},
    {"name": "CreateTableLikeStatement$ebnf$4", "symbols": ["CreateTableLikeStatement$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "CreateTableLikeStatement$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableLikeStatement", "symbols": [CREATE, "CreateTableLikeStatement$ebnf$3", TABLE, "CreateTableLikeStatement$ebnf$4", "TableIdentifier", OpenParentheses, LIKE, "TableIdentifier", CloseParentheses], "postprocess":  (data) => {
            const [, temporary, , ifNotExists, tableIdentifier, , , likeTableIdentifier,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTableLikeStatement,
                temporary: temporary != null,
                ifNotExists: ifNotExists != null,
                tableIdentifier,
                likeTableIdentifier,
            };
        } },
    {"name": "CreateTableOption$ebnf$1", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption$subexpression$1", "symbols": ["Identifier"]},
    {"name": "CreateTableOption$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "CreateTableOption", "symbols": [ENGINE, "CreateTableOption$ebnf$1", "CreateTableOption$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                engine: data[2][0],
            };
        } },
    {"name": "CreateTableOption$ebnf$2", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [MAX_ROWS, "CreateTableOption$ebnf$2", "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                maxRows: data[2],
            };
        } },
    {"name": "CreateTableOption$ebnf$3", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [MIN_ROWS, "CreateTableOption$ebnf$3", "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                minRows: data[2],
            };
        } },
    {"name": "CreateTableOption$ebnf$4", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [AVG_ROW_LENGTH, "CreateTableOption$ebnf$4", "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                averageRowLength: data[2],
            };
        } },
    {"name": "CreateTableOption$ebnf$5", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [PASSWORD, "CreateTableOption$ebnf$5", "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                password: data[2],
            };
        } },
    {"name": "CreateTableOption$ebnf$6", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [COMMENT, "CreateTableOption$ebnf$6", "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                comment: data[2],
            };
        } },
    {"name": "CreateTableOption$ebnf$7", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [COMPRESSION, "CreateTableOption$ebnf$7", "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                compression: data[2],
            };
        } },
    {"name": "CreateTableOption$ebnf$8", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [ENCRYPTION, "CreateTableOption$ebnf$8", "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                encryption: data[2],
            };
        } },
    {"name": "CreateTableOption$ebnf$9", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$9", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [AUTO_INCREMENT, "CreateTableOption$ebnf$9", "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                autoIncrement: data[2],
            };
        } },
    {"name": "CreateTableOption$ebnf$10", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$10", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption$subexpression$2", "symbols": ["IntegerLiteral"]},
    {"name": "CreateTableOption$subexpression$2", "symbols": [DEFAULT]},
    {"name": "CreateTableOption", "symbols": [PACK_KEYS, "CreateTableOption$ebnf$10", "CreateTableOption$subexpression$2"], "postprocess":  (data) => {
            const packKeys = ("tokenKind" in data[2][0] ?
                parser_node_1.PackKeys.DEFAULT :
                data[2][0].value == BigInt(0) ?
                    parser_node_1.PackKeys._0 :
                    data[2][0].value == BigInt(1) ?
                        parser_node_1.PackKeys._1 :
                        undefined);
            const result = {
                ...parse_util_1.getTextRange(data),
                packKeys,
            };
            if (packKeys == undefined) {
                parse_util_1.pushSyntacticErrorAt(result, data[2][0].start, data[2][0].end, [], diagnostic_messages_1.DiagnosticMessages.Unexpected_Expected, data[2][0].value.toString(), "0|1|DEFAULT");
            }
            return result;
        } },
    {"name": "CreateTableOption$ebnf$11", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$11", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption$subexpression$3", "symbols": ["IntegerLiteral"]},
    {"name": "CreateTableOption$subexpression$3", "symbols": [DEFAULT]},
    {"name": "CreateTableOption", "symbols": [STATS_AUTO_RECALC, "CreateTableOption$ebnf$11", "CreateTableOption$subexpression$3"], "postprocess":  (data) => {
            const statsAutoRecalc = ("tokenKind" in data[2][0] ?
                parser_node_1.StatsAutoRecalc.DEFAULT :
                data[2][0].value == BigInt(0) ?
                    parser_node_1.StatsAutoRecalc._0 :
                    data[2][0].value == BigInt(1) ?
                        parser_node_1.StatsAutoRecalc._1 :
                        undefined);
            const result = {
                ...parse_util_1.getTextRange(data),
                statsAutoRecalc,
            };
            if (statsAutoRecalc == undefined) {
                parse_util_1.pushSyntacticErrorAt(result, data[2][0].start, data[2][0].end, [], diagnostic_messages_1.DiagnosticMessages.Unexpected_Expected, data[2][0].value.toString(), "0|1|DEFAULT");
            }
            return result;
        } },
    {"name": "CreateTableOption$ebnf$12", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$12", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption$subexpression$4", "symbols": ["IntegerLiteral"]},
    {"name": "CreateTableOption$subexpression$4", "symbols": [DEFAULT]},
    {"name": "CreateTableOption", "symbols": [STATS_PERSISTENT, "CreateTableOption$ebnf$12", "CreateTableOption$subexpression$4"], "postprocess":  (data) => {
            const statsPersistent = ("tokenKind" in data[2][0] ?
                parser_node_1.StatsPersistent.DEFAULT :
                data[2][0].value == BigInt(0) ?
                    parser_node_1.StatsPersistent._0 :
                    data[2][0].value == BigInt(1) ?
                        parser_node_1.StatsPersistent._1 :
                        undefined);
            const result = {
                ...parse_util_1.getTextRange(data),
                statsPersistent,
            };
            if (statsPersistent == undefined) {
                parse_util_1.pushSyntacticErrorAt(result, data[2][0].start, data[2][0].end, [], diagnostic_messages_1.DiagnosticMessages.Unexpected_Expected, data[2][0].value.toString(), "0|1|DEFAULT");
            }
            return result;
        } },
    {"name": "CreateTableOption$ebnf$13", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$13", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption$subexpression$5", "symbols": ["IntegerLiteral"]},
    {"name": "CreateTableOption$subexpression$5", "symbols": [DEFAULT]},
    {"name": "CreateTableOption", "symbols": [STATS_SAMPLE_PAGES, "CreateTableOption$ebnf$13", "CreateTableOption$subexpression$5"], "postprocess":  (data) => {
            const statsSamplePages = ("tokenKind" in data[2][0] ?
                {
                    start: data[2][0].start,
                    end: data[2][0].end,
                    syntaxKind: parser_node_1.SyntaxKind.Value,
                    value: undefined,
                } :
                data[2][0]);
            const result = {
                ...parse_util_1.getTextRange(data),
                statsSamplePages,
            };
            return result;
        } },
    {"name": "CreateTableOption$subexpression$6", "symbols": [TABLE_CHECKSUM]},
    {"name": "CreateTableOption$subexpression$6", "symbols": [CHECKSUM]},
    {"name": "CreateTableOption$ebnf$14", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$14", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": ["CreateTableOption$subexpression$6", "CreateTableOption$ebnf$14", "IntegerLiteral"], "postprocess":  (data) => {
            const checksum = (data[2].value == BigInt(0) ?
                false :
                data[2].value == BigInt(1) ?
                    true :
                    undefined);
            const result = {
                ...parse_util_1.getTextRange(data),
                /**
                 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6050
                 */
                checksum: (checksum == undefined ?
                    //data[2].value > 1
                    true :
                    checksum),
            };
            if (checksum == undefined) {
                parse_util_1.pushSyntacticErrorAt(result, data[2].start, data[2].end, [], diagnostic_messages_1.DiagnosticMessages.Unexpected_Expected, data[2].value.toString(), "0|1");
            }
            return result;
        } },
    {"name": "CreateTableOption$ebnf$15", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$15", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [DELAY_KEY_WRITE, "CreateTableOption$ebnf$15", "IntegerLiteral"], "postprocess":  (data) => {
            const delayKeyWrite = (data[2].value == BigInt(0) ?
                false :
                data[2].value == BigInt(1) ?
                    true :
                    undefined);
            const result = {
                ...parse_util_1.getTextRange(data),
                /**
                 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6060
                 */
                delayKeyWrite: (delayKeyWrite == undefined ?
                    //data[2].value > 1
                    true :
                    delayKeyWrite),
            };
            if (delayKeyWrite == undefined) {
                parse_util_1.pushSyntacticErrorAt(result, data[2].start, data[2].end, [], diagnostic_messages_1.DiagnosticMessages.Unexpected_Expected, data[2].value.toString(), "0|1");
            }
            return result;
        } },
    {"name": "CreateTableOption$ebnf$16", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$16", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption$subexpression$7", "symbols": [DEFAULT]},
    {"name": "CreateTableOption$subexpression$7", "symbols": [FIXED]},
    {"name": "CreateTableOption$subexpression$7", "symbols": [DYNAMIC]},
    {"name": "CreateTableOption$subexpression$7", "symbols": [COMPRESSED]},
    {"name": "CreateTableOption$subexpression$7", "symbols": [REDUNDANT]},
    {"name": "CreateTableOption$subexpression$7", "symbols": [COMPACT]},
    {"name": "CreateTableOption", "symbols": [ROW_FORMAT, "CreateTableOption$ebnf$16", "CreateTableOption$subexpression$7"], "postprocess":  (data) => {
            const rowFormat = (data[2][0].tokenKind == scanner_1.TokenKind.FIXED ?
                parser_node_1.RowFormat.FIXED :
                data[2][0].tokenKind == scanner_1.TokenKind.DYNAMIC ?
                    parser_node_1.RowFormat.DYNAMIC :
                    data[2][0].tokenKind == scanner_1.TokenKind.COMPRESSED ?
                        parser_node_1.RowFormat.COMPRESSED :
                        data[2][0].tokenKind == scanner_1.TokenKind.REDUNDANT ?
                            parser_node_1.RowFormat.REDUNDANT :
                            data[2][0].tokenKind == scanner_1.TokenKind.COMPACT ?
                                parser_node_1.RowFormat.COMPACT :
                                parser_node_1.RowFormat.DEFAULT);
            const result = {
                ...parse_util_1.getTextRange(data),
                rowFormat,
            };
            return result;
        } },
    {"name": "CreateTableOption$ebnf$17", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$17", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [UNION, "CreateTableOption$ebnf$17", "TableIdentifierList_AllowEmpty"], "postprocess":  (data) => {
            const union = data[2];
            const result = {
                ...parse_util_1.getTextRange(data),
                union,
            };
            return result;
        } },
    {"name": "CreateTableOption", "symbols": ["DefaultCharacterSet"], "postprocess":  (data) => {
            const defaultCharacterSet = data[0];
            const result = {
                ...parse_util_1.getTextRange(data),
                defaultCharacterSet,
            };
            return result;
        } },
    {"name": "CreateTableOption", "symbols": ["DefaultCollation"], "postprocess":  (data) => {
            const defaultCollation = data[0];
            const result = {
                ...parse_util_1.getTextRange(data),
                defaultCollation,
            };
            return result;
        } },
    {"name": "CreateTableOption$ebnf$18", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$18", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption$subexpression$8", "symbols": [NO]},
    {"name": "CreateTableOption$subexpression$8", "symbols": [FIRST]},
    {"name": "CreateTableOption$subexpression$8", "symbols": [LAST]},
    {"name": "CreateTableOption", "symbols": [INSERT_METHOD, "CreateTableOption$ebnf$18", "CreateTableOption$subexpression$8"], "postprocess":  (data) => {
            const insertMethod = (data[2][0].tokenKind == scanner_1.TokenKind.FIRST ?
                parser_node_1.InsertMethod.FIRST :
                data[2][0].tokenKind == scanner_1.TokenKind.LAST ?
                    parser_node_1.InsertMethod.LAST :
                    parser_node_1.InsertMethod.NO);
            const result = {
                ...parse_util_1.getTextRange(data),
                insertMethod,
            };
            return result;
        } },
    {"name": "CreateTableOption$ebnf$19", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$19", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [DATA, DIRECTORY, "CreateTableOption$ebnf$19", "StringLiteral"], "postprocess":  (data) => {
            const dataDirectory = data[3];
            const result = {
                ...parse_util_1.getTextRange(data),
                dataDirectory,
            };
            return result;
        } },
    {"name": "CreateTableOption$ebnf$20", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$20", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [INDEX, DIRECTORY, "CreateTableOption$ebnf$20", "StringLiteral"], "postprocess":  (data) => {
            const indexDirectory = data[3];
            const result = {
                ...parse_util_1.getTextRange(data),
                indexDirectory,
            };
            return result;
        } },
    {"name": "CreateTableOption$ebnf$21", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$21", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [TABLESPACE, "CreateTableOption$ebnf$21", "Identifier"], "postprocess":  (data) => {
            const tablespace = data[2];
            const result = {
                ...parse_util_1.getTextRange(data),
                tablespace,
            };
            return result;
        } },
    {"name": "CreateTableOption$subexpression$9", "symbols": [DISK]},
    {"name": "CreateTableOption$subexpression$9", "symbols": [MEMORY]},
    {"name": "CreateTableOption", "symbols": [STORAGE, "CreateTableOption$subexpression$9"], "postprocess":  (data) => {
            const storage = (data[1][0].tokenKind == scanner_1.TokenKind.DISK ?
                parser_node_1.Storage.DISK :
                parser_node_1.Storage.MEMORY);
            const result = {
                ...parse_util_1.getTextRange(data),
                storage,
            };
            return result;
        } },
    {"name": "CreateTableOption$ebnf$22", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$22", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [CONNECTION, "CreateTableOption$ebnf$22", "StringLiteral"], "postprocess":  (data) => {
            const connection = data[2];
            const result = {
                ...parse_util_1.getTextRange(data),
                connection,
            };
            return result;
        } },
    {"name": "CreateTableOption$ebnf$23", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTableOption$ebnf$23", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOption", "symbols": [KEY_BLOCK_SIZE, "CreateTableOption$ebnf$23", "IntegerLiteral"], "postprocess":  (data) => {
            const keyBlockSize = data[2];
            const result = {
                ...parse_util_1.getTextRange(data),
                keyBlockSize,
            };
            return result;
        } },
    {"name": "CreateTableOptionsSpaceSeparated$ebnf$1", "symbols": ["CreateTableOption"]},
    {"name": "CreateTableOptionsSpaceSeparated$ebnf$1", "symbols": ["CreateTableOptionsSpaceSeparated$ebnf$1", "CreateTableOption"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "CreateTableOptionsSpaceSeparated", "symbols": ["CreateTableOptionsSpaceSeparated$ebnf$1"], "postprocess":  (data) => {
            const arr = data[0];
            const result = {
                engine: undefined,
                maxRows: undefined,
                minRows: undefined,
                averageRowLength: undefined,
                password: undefined,
                comment: undefined,
                compression: undefined,
                encryption: undefined,
                autoIncrement: undefined,
                packKeys: undefined,
                statsAutoRecalc: undefined,
                statsPersistent: undefined,
                statsSamplePages: undefined,
                checksum: undefined,
                delayKeyWrite: undefined,
                rowFormat: undefined,
                union: undefined,
                defaultCharacterSet: undefined,
                defaultCollation: undefined,
                insertMethod: undefined,
                dataDirectory: undefined,
                indexDirectory: undefined,
                tablespace: undefined,
                storage: undefined,
                connection: undefined,
                keyBlockSize: undefined,
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTableOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "CreateTableOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "CreateTableOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [Comma], "postprocess": id},
    {"name": "CreateTableOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["CreateTableOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "CreateTableOption"]},
    {"name": "CreateTableOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": ["CreateTableOptions$ebnf$1$subexpression$1$ebnf$1", "CreateTableOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "CreateTableOptions$ebnf$1$subexpression$1", "symbols": ["CreateTableOption", "CreateTableOptions$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "CreateTableOptions$ebnf$1", "symbols": ["CreateTableOptions$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateTableOptions$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableOptions", "symbols": ["CreateTableOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const result = {
                engine: undefined,
                maxRows: undefined,
                minRows: undefined,
                averageRowLength: undefined,
                password: undefined,
                comment: undefined,
                compression: undefined,
                encryption: undefined,
                autoIncrement: undefined,
                packKeys: undefined,
                statsAutoRecalc: undefined,
                statsPersistent: undefined,
                statsSamplePages: undefined,
                checksum: undefined,
                delayKeyWrite: undefined,
                rowFormat: undefined,
                union: undefined,
                defaultCharacterSet: undefined,
                defaultCollation: undefined,
                insertMethod: undefined,
                dataDirectory: undefined,
                indexDirectory: undefined,
                tablespace: undefined,
                storage: undefined,
                connection: undefined,
                keyBlockSize: undefined,
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTableOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "CreateTableSelectStatement$ebnf$1", "symbols": [TEMPORARY], "postprocess": id},
    {"name": "CreateTableSelectStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableSelectStatement$ebnf$2$subexpression$1", "symbols": [IF, NOT, EXISTS]},
    {"name": "CreateTableSelectStatement$ebnf$2", "symbols": ["CreateTableSelectStatement$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "CreateTableSelectStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableSelectStatement$ebnf$3", "symbols": ["CreateTableDefinitionList"], "postprocess": id},
    {"name": "CreateTableSelectStatement$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableSelectStatement$ebnf$4", "symbols": ["Partition"], "postprocess": id},
    {"name": "CreateTableSelectStatement$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableSelectStatement", "symbols": [CREATE, "CreateTableSelectStatement$ebnf$1", TABLE, "CreateTableSelectStatement$ebnf$2", "TableIdentifier", "CreateTableSelectStatement$ebnf$3", "CreateTableOptions", "CreateTableSelectStatement$ebnf$4", "CreateTableSelect"], "postprocess":  (data) => {
            const [, temporary, , ifNotExists, tableIdentifier, createTableDefinitions, createTableOptions, partition, createTableSelect,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTableSelectStatement,
                temporary: temporary != null,
                ifNotExists: ifNotExists != null,
                tableIdentifier,
                createTableDefinitions: createTableDefinitions !== null && createTableDefinitions !== void 0 ? createTableDefinitions : undefined,
                createTableOptions,
                partition: partition !== null && partition !== void 0 ? partition : undefined,
                createTableSelect: createTableSelect,
            };
        } },
    {"name": "CreateTableSelect$ebnf$1$subexpression$1", "symbols": [IGNORE]},
    {"name": "CreateTableSelect$ebnf$1$subexpression$1", "symbols": [REPLACE]},
    {"name": "CreateTableSelect$ebnf$1", "symbols": ["CreateTableSelect$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateTableSelect$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableSelect$ebnf$2", "symbols": [AS], "postprocess": id},
    {"name": "CreateTableSelect$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableSelect", "symbols": ["CreateTableSelect$ebnf$1", "CreateTableSelect$ebnf$2", "SelectStatement"], "postprocess":  (data) => {
            const [onDuplicate, , select,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTableSelect,
                onDuplicate: (onDuplicate == undefined ?
                    undefined :
                    onDuplicate[0].tokenKind == scanner_1.TokenKind.IGNORE ?
                        parser_node_1.CreateTableSelectOnDuplicate.IGNORE :
                        parser_node_1.CreateTableSelectOnDuplicate.REPLACE),
                select,
            };
        } },
    {"name": "CreateTableStatement$ebnf$1", "symbols": [TEMPORARY], "postprocess": id},
    {"name": "CreateTableStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableStatement$ebnf$2$subexpression$1", "symbols": [IF, NOT, EXISTS]},
    {"name": "CreateTableStatement$ebnf$2", "symbols": ["CreateTableStatement$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "CreateTableStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableStatement$ebnf$3", "symbols": ["Partition"], "postprocess": id},
    {"name": "CreateTableStatement$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableStatement", "symbols": [CREATE, "CreateTableStatement$ebnf$1", TABLE, "CreateTableStatement$ebnf$2", "TableIdentifier", "CreateTableDefinitionList", "CreateTableOptions", "CreateTableStatement$ebnf$3"], "postprocess":  (data) => {
            const [, temporary, , ifNotExists, tableIdentifier, createTableDefinitions, createTableOptions, partition,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTableStatement,
                temporary: temporary != null,
                ifNotExists: ifNotExists != null,
                tableIdentifier,
                createTableDefinitions,
                createTableOptions,
                partition: partition !== null && partition !== void 0 ? partition : undefined,
            };
        } },
    {"name": "CreateTablespaceOption$ebnf$1", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTablespaceOption$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOption", "symbols": [INITIAL_SIZE, "CreateTablespaceOption$ebnf$1", "SizeNumber"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                initialSize: data[2],
            };
        } },
    {"name": "CreateTablespaceOption$ebnf$2", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTablespaceOption$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOption", "symbols": [AUTOEXTEND_SIZE, "CreateTablespaceOption$ebnf$2", "SizeNumber"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                autoExtendSize: data[2],
            };
        } },
    {"name": "CreateTablespaceOption$ebnf$3", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTablespaceOption$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOption", "symbols": [MAX_SIZE, "CreateTablespaceOption$ebnf$3", "SizeNumber"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                maxSize: data[2],
            };
        } },
    {"name": "CreateTablespaceOption$ebnf$4", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTablespaceOption$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOption", "symbols": [EXTENT_SIZE, "CreateTablespaceOption$ebnf$4", "SizeNumber"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                extentSize: data[2],
            };
        } },
    {"name": "CreateTablespaceOption$ebnf$5", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTablespaceOption$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOption", "symbols": [NODEGROUP, "CreateTablespaceOption$ebnf$5", "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                nodeGroup: data[2],
            };
        } },
    {"name": "CreateTablespaceOption$ebnf$6", "symbols": [STORAGE], "postprocess": id},
    {"name": "CreateTablespaceOption$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOption$ebnf$7", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTablespaceOption$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOption$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "CreateTablespaceOption$subexpression$1", "symbols": ["Identifier"]},
    {"name": "CreateTablespaceOption", "symbols": ["CreateTablespaceOption$ebnf$6", ENGINE, "CreateTablespaceOption$ebnf$7", "CreateTablespaceOption$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                engine: data[3][0],
            };
        } },
    {"name": "CreateTablespaceOption", "symbols": [WAIT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                wait: parse_util_1.toValueNode(true, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "CreateTablespaceOption", "symbols": [NO_WAIT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                wait: parse_util_1.toValueNode(false, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "CreateTablespaceOption$ebnf$8", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTablespaceOption$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOption", "symbols": [COMMENT, "CreateTablespaceOption$ebnf$8", "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                comment: data[2],
            };
        } },
    {"name": "CreateTablespaceOption$ebnf$9", "symbols": [Equal], "postprocess": id},
    {"name": "CreateTablespaceOption$ebnf$9", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOption", "symbols": [FILE_BLOCK_SIZE, "CreateTablespaceOption$ebnf$9", "SizeNumber"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                fileBlockSize: data[2],
            };
        } },
    {"name": "CreateTablespaceOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "CreateTablespaceOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [Comma], "postprocess": id},
    {"name": "CreateTablespaceOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["CreateTablespaceOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "CreateTablespaceOption"]},
    {"name": "CreateTablespaceOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": ["CreateTablespaceOptions$ebnf$1$subexpression$1$ebnf$1", "CreateTablespaceOptions$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "CreateTablespaceOptions$ebnf$1$subexpression$1", "symbols": ["CreateTablespaceOption", "CreateTablespaceOptions$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "CreateTablespaceOptions$ebnf$1", "symbols": ["CreateTablespaceOptions$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateTablespaceOptions$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceOptions", "symbols": ["CreateTablespaceOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const result = {
                initialSize: undefined,
                autoExtendSize: undefined,
                maxSize: undefined,
                extentSize: undefined,
                nodeGroup: undefined,
                engine: undefined,
                wait: undefined,
                comment: undefined,
                fileBlockSize: undefined,
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTablespaceOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "CreateTablespaceStatement$ebnf$1$subexpression$1", "symbols": [USE, LOGFILE, GROUP, "Identifier"]},
    {"name": "CreateTablespaceStatement$ebnf$1", "symbols": ["CreateTablespaceStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateTablespaceStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTablespaceStatement", "symbols": [CREATE, TABLESPACE, "Identifier", ADD, DATAFILE, "StringLiteral", "CreateTablespaceStatement$ebnf$1", "CreateTablespaceOptions"], "postprocess":  (data) => {
            const [, , identifier, , , addDataFile, useLogFileGroup, createTablespaceOptions,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTablespaceStatement,
                identifier,
                addDataFile,
                useLogFileGroup: (useLogFileGroup == undefined ?
                    undefined :
                    useLogFileGroup[3]),
                createTablespaceOptions,
            };
        } },
    {"name": "CreateTriggerStatement$ebnf$1$subexpression$1", "symbols": [DEFINER, Equal, "AccountIdentifierOrCurrentUser"]},
    {"name": "CreateTriggerStatement$ebnf$1", "symbols": ["CreateTriggerStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateTriggerStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTriggerStatement$subexpression$1", "symbols": [BEFORE]},
    {"name": "CreateTriggerStatement$subexpression$1", "symbols": [AFTER]},
    {"name": "CreateTriggerStatement$subexpression$2", "symbols": [INSERT]},
    {"name": "CreateTriggerStatement$subexpression$2", "symbols": [UPDATE]},
    {"name": "CreateTriggerStatement$subexpression$2", "symbols": [DELETE]},
    {"name": "CreateTriggerStatement$ebnf$2", "symbols": ["TriggerOrder"], "postprocess": id},
    {"name": "CreateTriggerStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateTriggerStatement", "symbols": [CREATE, "CreateTriggerStatement$ebnf$1", TRIGGER, "TriggerIdentifier", "CreateTriggerStatement$subexpression$1", "CreateTriggerStatement$subexpression$2", ON, "TableIdentifier", FOR, EACH, ROW, "CreateTriggerStatement$ebnf$2", "StoredProcedureStatement"], "postprocess":  (data) => {
            const [, definer, triggerToken, triggerIdentifier, triggerActionTime, triggerEvent, , tableIdentifier, , , , triggerOrder, statement,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTriggerStatement,
                definer: (definer == undefined ?
                    parse_util_1.toValueNode("CURRENT_USER", {
                        start: triggerToken.start,
                        end: triggerToken.start,
                    }) :
                    definer[2]),
                triggerIdentifier,
                triggerActionTime: parse_util_1.toValueNode((triggerActionTime[0].tokenKind == scanner_1.TokenKind.BEFORE ?
                    parser_node_1.TriggerActionTime.BEFORE :
                    parser_node_1.TriggerActionTime.AFTER), parse_util_1.getTextRange(triggerActionTime)),
                triggerEvent: parse_util_1.toValueNode((triggerEvent[0].tokenKind == scanner_1.TokenKind.INSERT ?
                    parser_node_1.TriggerEvent.INSERT :
                    triggerEvent[0].tokenKind == scanner_1.TokenKind.UPDATE ?
                        parser_node_1.TriggerEvent.UPDATE :
                        parser_node_1.TriggerEvent.DELETE), parse_util_1.getTextRange(triggerActionTime)),
                tableIdentifier,
                triggerOrder: triggerOrder !== null && triggerOrder !== void 0 ? triggerOrder : undefined,
                statement,
            };
        } },
    {"name": "TriggerOrder$subexpression$1", "symbols": [FOLLOWS]},
    {"name": "TriggerOrder$subexpression$1", "symbols": [PRECEDES]},
    {"name": "TriggerOrder$subexpression$2", "symbols": ["Identifier"]},
    {"name": "TriggerOrder$subexpression$2", "symbols": ["StringLiteral"]},
    {"name": "TriggerOrder", "symbols": ["TriggerOrder$subexpression$1", "TriggerOrder$subexpression$2"], "postprocess":  (data) => {
            const [triggerActionOrder, otherTriggerName,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.TriggerOrder,
                triggerActionOrder: parse_util_1.toValueNode((triggerActionOrder[0].tokenKind == scanner_1.TokenKind.FOLLOWS ?
                    parser_node_1.TriggerActionOrder.FOLLOWS :
                    parser_node_1.TriggerActionOrder.PRECEDES), parse_util_1.getTextRange(triggerActionOrder)),
                otherTriggerName: otherTriggerName[0],
            };
        } },
    {"name": "AccountLockAndPasswordExpiryOption", "symbols": [ACCOUNT, UNLOCK], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                accountLocked: false,
            };
        } },
    {"name": "AccountLockAndPasswordExpiryOption", "symbols": [ACCOUNT, LOCK], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                accountLocked: true,
            };
        } },
    {"name": "AccountLockAndPasswordExpiryOption", "symbols": [PASSWORD, EXPIRE], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                passwordExpiry: parse_util_1.toValueNode("ON_FIRST_CONNECT", parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "AccountLockAndPasswordExpiryOption", "symbols": [PASSWORD, EXPIRE, NEVER], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                passwordExpiry: parse_util_1.toValueNode("NEVER", parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "AccountLockAndPasswordExpiryOption", "symbols": [PASSWORD, EXPIRE, DEFAULT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                passwordExpiry: parse_util_1.toValueNode("DEFAULT", parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "AccountLockAndPasswordExpiryOption", "symbols": [PASSWORD, EXPIRE, INTERVAL, "IntegerLiteral", DAY], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                passwordExpiry: data[3],
            };
        } },
    {"name": "AccountLockAndPasswordExpiryOptions$ebnf$1", "symbols": []},
    {"name": "AccountLockAndPasswordExpiryOptions$ebnf$1", "symbols": ["AccountLockAndPasswordExpiryOptions$ebnf$1", "AccountLockAndPasswordExpiryOption"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "AccountLockAndPasswordExpiryOptions", "symbols": ["AccountLockAndPasswordExpiryOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data[0];
            const result = {
                accountLocked: false,
                passwordExpiry: parse_util_1.toValueNode("DEFAULT", {
                    start: -1,
                    end: -1,
                }),
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AccountLockAndPasswordExpiryOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "CreateUserStatement$ebnf$1$subexpression$1", "symbols": [IF, NOT, EXISTS]},
    {"name": "CreateUserStatement$ebnf$1", "symbols": ["CreateUserStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateUserStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateUserStatement", "symbols": [CREATE, USER, "CreateUserStatement$ebnf$1", "GrantUserList", "RequiredEncryptedConnectionOptions2", "RateLimitOptions", "AccountLockAndPasswordExpiryOptions"], "postprocess":  (data) => {
            const [, , ifNotExists, grantUserList, requiredEncryptedConnectionOptions, rateLimitOptions, accountLockAndPasswordExpiryOptions,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateUserStatement,
                ifNotExists: ifNotExists != undefined,
                grantUserList,
                requiredEncryptedConnectionOptions,
                rateLimitOptions,
                accountLockAndPasswordExpiryOptions,
            };
        } },
    {"name": "GrantUser", "symbols": ["AccountIdentifier"], "postprocess":  (data) => {
            const end = data[0].end;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.GrantUser,
                accountIdentifier: data[0],
                authenticationPlugin: undefined,
                identifiedByPasswordToken: undefined,
                password: {
                    start: end,
                    end: end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "",
                    sourceText: `''`,
                },
            };
        } },
    {"name": "GrantUser$ebnf$1", "symbols": [PASSWORD], "postprocess": id},
    {"name": "GrantUser$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "GrantUser", "symbols": ["AccountIdentifier", IDENTIFIED, BY, "GrantUser$ebnf$1", "StringLiteral"], "postprocess":  (data) => {
            const [accountIdentifier, identifiedToken, , passwordToken, password,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.GrantUser,
                accountIdentifier,
                authenticationPlugin: undefined,
                identifiedByPasswordToken: (passwordToken == undefined ?
                    undefined :
                    parse_util_1.toValueNode("IDENTIFIED BY PASSWORD", parse_util_1.getTextRange([identifiedToken, passwordToken]))),
                password,
            };
        } },
    {"name": "GrantUser$subexpression$1", "symbols": ["Identifier"]},
    {"name": "GrantUser$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "GrantUser$ebnf$2$subexpression$1$subexpression$1", "symbols": [AS]},
    {"name": "GrantUser$ebnf$2$subexpression$1$subexpression$1", "symbols": [BY]},
    {"name": "GrantUser$ebnf$2$subexpression$1", "symbols": ["GrantUser$ebnf$2$subexpression$1$subexpression$1", "StringLiteral"]},
    {"name": "GrantUser$ebnf$2", "symbols": ["GrantUser$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "GrantUser$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "GrantUser", "symbols": ["AccountIdentifier", IDENTIFIED, WITH, "GrantUser$subexpression$1", "GrantUser$ebnf$2"], "postprocess":  (data) => {
            const [accountIdentifier, , , authenticationPlugin, password,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.GrantUser,
                accountIdentifier,
                authenticationPlugin: authenticationPlugin[0],
                identifiedByPasswordToken: undefined,
                password: (password == undefined ?
                    {
                        start: authenticationPlugin[0].end,
                        end: authenticationPlugin[0].end,
                        syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                        value: "",
                        sourceText: `''`,
                    } :
                    password[1]),
            };
        } },
    {"name": "GrantUserList$ebnf$1", "symbols": []},
    {"name": "GrantUserList$ebnf$1$subexpression$1", "symbols": [Comma, "GrantUser"]},
    {"name": "GrantUserList$ebnf$1", "symbols": ["GrantUserList$ebnf$1", "GrantUserList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "GrantUserList", "symbols": ["GrantUser", "GrantUserList$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((item) => {
                return "syntaxKind" in item;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.GrantUserList, parse_util_1.getTextRange(data));
        } },
    {"name": "RateLimitOption", "symbols": [MAX_QUERIES_PER_HOUR, "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                maxQueriesPerHour: data[1],
            };
        } },
    {"name": "RateLimitOption", "symbols": [MAX_UPDATES_PER_HOUR, "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                maxUpdatesPerHour: data[1],
            };
        } },
    {"name": "RateLimitOption", "symbols": [MAX_CONNECTIONS_PER_HOUR, "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                maxConnectionsPerHour: data[1],
            };
        } },
    {"name": "RateLimitOption", "symbols": [MAX_USER_CONNECTIONS, "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                maxUserConnections: data[1],
            };
        } },
    {"name": "RateLimitOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": ["RateLimitOption"]},
    {"name": "RateLimitOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": ["RateLimitOptions$ebnf$1$subexpression$1$ebnf$1", "RateLimitOption"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "RateLimitOptions$ebnf$1$subexpression$1", "symbols": [WITH, "RateLimitOptions$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "RateLimitOptions$ebnf$1", "symbols": ["RateLimitOptions$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "RateLimitOptions$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "RateLimitOptions", "symbols": ["RateLimitOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const result = {
                maxQueriesPerHour: {
                    start: -1,
                    end: -1,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(0),
                },
                maxUpdatesPerHour: {
                    start: -1,
                    end: -1,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(0),
                },
                maxConnectionsPerHour: {
                    start: -1,
                    end: -1,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(0),
                },
                maxUserConnections: {
                    start: -1,
                    end: -1,
                    syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                    value: BigInt(0),
                },
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.RateLimitOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "RequiredEncryptedConnectionOption", "symbols": [SUBJECT, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                x509Subject: data[1],
            };
        } },
    {"name": "RequiredEncryptedConnectionOption", "symbols": [ISSUER, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                x509Issuer: data[1],
            };
        } },
    {"name": "RequiredEncryptedConnectionOption", "symbols": [CIPHER, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                sslCipher: data[1],
            };
        } },
    {"name": "RequiredEncryptedConnectionOptions2$ebnf$1$subexpression$1$subexpression$1", "symbols": [NONE]},
    {"name": "RequiredEncryptedConnectionOptions2$ebnf$1$subexpression$1$subexpression$1", "symbols": [SSL]},
    {"name": "RequiredEncryptedConnectionOptions2$ebnf$1$subexpression$1$subexpression$1", "symbols": [X509]},
    {"name": "RequiredEncryptedConnectionOptions2$ebnf$1$subexpression$1$subexpression$1", "symbols": ["RequiredEncryptedConnectionOptions"]},
    {"name": "RequiredEncryptedConnectionOptions2$ebnf$1$subexpression$1", "symbols": [REQUIRE, "RequiredEncryptedConnectionOptions2$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "RequiredEncryptedConnectionOptions2$ebnf$1", "symbols": ["RequiredEncryptedConnectionOptions2$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "RequiredEncryptedConnectionOptions2$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "RequiredEncryptedConnectionOptions2", "symbols": ["RequiredEncryptedConnectionOptions2$ebnf$1"], "postprocess":  (data) => {
            const item = data[0];
            if (item == undefined) {
                return parse_util_1.toValueNode("NONE", {
                    start: -1,
                    end: -1,
                });
            }
            const options = item[1][0];
            if ("syntaxKind" in options) {
                return options;
            }
            return parse_util_1.toValueNode((options.tokenKind == scanner_1.TokenKind.NONE ?
                "NONE" :
                options.tokenKind == scanner_1.TokenKind.SSL ?
                    "SSL" :
                    "X509"), options);
        } },
    {"name": "RequiredEncryptedConnectionOptions$ebnf$1", "symbols": []},
    {"name": "RequiredEncryptedConnectionOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": [AND], "postprocess": id},
    {"name": "RequiredEncryptedConnectionOptions$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "RequiredEncryptedConnectionOptions$ebnf$1$subexpression$1", "symbols": ["RequiredEncryptedConnectionOptions$ebnf$1$subexpression$1$ebnf$1", "RequiredEncryptedConnectionOption"]},
    {"name": "RequiredEncryptedConnectionOptions$ebnf$1", "symbols": ["RequiredEncryptedConnectionOptions$ebnf$1", "RequiredEncryptedConnectionOptions$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "RequiredEncryptedConnectionOptions", "symbols": ["RequiredEncryptedConnectionOption", "RequiredEncryptedConnectionOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const result = {
                x509Subject: undefined,
                x509Issuer: undefined,
                sslCipher: undefined,
            };
            const syntacticErrors = [];
            const optionLocations = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        optionLocations.push(parse_util_1.toValueNode(k, item));
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.RequiredEncryptedConnectionOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
                optionLocations,
            };
        } },
    {"name": "CreateViewStatement$ebnf$1$subexpression$1", "symbols": [OR, REPLACE]},
    {"name": "CreateViewStatement$ebnf$1", "symbols": ["CreateViewStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateViewStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateViewStatement$ebnf$2$subexpression$1$subexpression$1", "symbols": [UNDEFINED]},
    {"name": "CreateViewStatement$ebnf$2$subexpression$1$subexpression$1", "symbols": [MERGE]},
    {"name": "CreateViewStatement$ebnf$2$subexpression$1$subexpression$1", "symbols": [TEMPTABLE]},
    {"name": "CreateViewStatement$ebnf$2$subexpression$1", "symbols": [ALGORITHM, Equal, "CreateViewStatement$ebnf$2$subexpression$1$subexpression$1"]},
    {"name": "CreateViewStatement$ebnf$2", "symbols": ["CreateViewStatement$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "CreateViewStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateViewStatement$ebnf$3$subexpression$1", "symbols": [DEFINER, Equal, "AccountIdentifierOrCurrentUser"]},
    {"name": "CreateViewStatement$ebnf$3", "symbols": ["CreateViewStatement$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "CreateViewStatement$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "CreateViewStatement$ebnf$4$subexpression$1$subexpression$1", "symbols": [DEFINER]},
    {"name": "CreateViewStatement$ebnf$4$subexpression$1$subexpression$1", "symbols": [INVOKER]},
    {"name": "CreateViewStatement$ebnf$4$subexpression$1", "symbols": [SQL, SECURITY, "CreateViewStatement$ebnf$4$subexpression$1$subexpression$1"]},
    {"name": "CreateViewStatement$ebnf$4", "symbols": ["CreateViewStatement$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "CreateViewStatement$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "CreateViewStatement$ebnf$5", "symbols": ["IdentifierList"], "postprocess": id},
    {"name": "CreateViewStatement$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "CreateViewStatement$ebnf$6$subexpression$1$ebnf$1$subexpression$1", "symbols": [CASCADED]},
    {"name": "CreateViewStatement$ebnf$6$subexpression$1$ebnf$1$subexpression$1", "symbols": [LOCAL]},
    {"name": "CreateViewStatement$ebnf$6$subexpression$1$ebnf$1", "symbols": ["CreateViewStatement$ebnf$6$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CreateViewStatement$ebnf$6$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateViewStatement$ebnf$6$subexpression$1", "symbols": [WITH, "CreateViewStatement$ebnf$6$subexpression$1$ebnf$1", CHECK, OPTION]},
    {"name": "CreateViewStatement$ebnf$6", "symbols": ["CreateViewStatement$ebnf$6$subexpression$1"], "postprocess": id},
    {"name": "CreateViewStatement$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "CreateViewStatement", "symbols": [CREATE, "CreateViewStatement$ebnf$1", "CreateViewStatement$ebnf$2", "CreateViewStatement$ebnf$3", "CreateViewStatement$ebnf$4", VIEW, "TableIdentifier", "CreateViewStatement$ebnf$5", AS, "SelectStatement", "CreateViewStatement$ebnf$6"], "postprocess":  (data) => {
            const [, createOrReplace, algorithm, definer, viewSecurityContext, viewToken, tableIdentifier, columns, , selectStatement, checkOption,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateViewStatement,
                createOrReplace: (createOrReplace == undefined ?
                    parse_util_1.toValueNode(false, {
                        start: parse_util_1.getStart([algorithm, definer, viewSecurityContext, viewToken]),
                        end: parse_util_1.getStart([algorithm, definer, viewSecurityContext, viewToken]),
                    }) :
                    parse_util_1.toValueNode(true, parse_util_1.getTextRange(createOrReplace))),
                algorithm: (algorithm == undefined ?
                    undefined :
                    parse_util_1.toValueNode((algorithm[2][0].tokenKind == scanner_1.TokenKind.MERGE ?
                        parser_node_1.ViewAlgorithm.MERGE :
                        algorithm[2][0].tokenKind == scanner_1.TokenKind.TEMPTABLE ?
                            parser_node_1.ViewAlgorithm.TEMPTABLE :
                            parser_node_1.ViewAlgorithm.UNDEFINED), parse_util_1.getTextRange(algorithm[2]))),
                definer: (definer == undefined ?
                    parse_util_1.toValueNode("CURRENT_USER", {
                        start: viewToken.start,
                        end: viewToken.start,
                    }) :
                    definer[2]),
                viewSecurityContext: (viewSecurityContext == undefined ?
                    parse_util_1.toValueNode(parser_node_1.ViewSecurityContext.DEFINER, {
                        start: viewToken.start,
                        end: viewToken.start,
                    }) :
                    parse_util_1.toValueNode((viewSecurityContext[2][0].tokenKind == scanner_1.TokenKind.DEFINER ?
                        parser_node_1.ViewSecurityContext.DEFINER :
                        parser_node_1.ViewSecurityContext.INVOKER), parse_util_1.getTextRange(viewSecurityContext[2]))),
                tableIdentifier,
                columns: columns !== null && columns !== void 0 ? columns : undefined,
                selectStatement,
                checkOption: (checkOption == undefined ?
                    undefined :
                    parse_util_1.toValueNode((checkOption[1] == undefined ?
                        parser_node_1.ViewCheckOption.CASCADED :
                        checkOption[1][0].tokenKind == scanner_1.TokenKind.CASCADED ?
                            parser_node_1.ViewCheckOption.CASCADED :
                            parser_node_1.ViewCheckOption.LOCAL), parse_util_1.getTextRange(checkOption))),
            };
        } },
    {"name": "DelimiterStatement", "symbols": [DELIMITER_STATEMENT, CustomDelimiter], "postprocess":  (data) => {
            const [identifier, customDelimiter] = data;
            return {
                start: identifier.start,
                end: customDelimiter.end,
                syntaxKind: parser_node_1.SyntaxKind.DelimiterStatement,
                customDelimiter: customDelimiter.value,
            };
        } },
    {"name": "DerivedTableFactorSelect", "symbols": [OpenParentheses, "DerivedTableFactorSelect", CloseParentheses], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "DerivedTableFactorSelect$subexpression$1", "symbols": ["Select"]},
    {"name": "DerivedTableFactorSelect$subexpression$1", "symbols": ["Union"]},
    {"name": "DerivedTableFactorSelect$subexpression$1", "symbols": ["UnionOrderLimit"]},
    {"name": "DerivedTableFactorSelect$subexpression$1", "symbols": ["ParenthesizedUnion_UnionOrderLimit"]},
    {"name": "DerivedTableFactorSelect", "symbols": [OpenParentheses, "DerivedTableFactorSelect$subexpression$1", CloseParentheses], "postprocess":  (data) => {
            return data[1][0];
        } },
    {"name": "DerivedTableFactor", "symbols": ["DerivedTableFactorSelect", "TableAlias"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.DerivedTableFactor,
                select: data[0],
                alias: data[1],
            };
        } },
    {"name": "FromClause", "symbols": [FROM, "TableReferenceList"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.FromClause,
                tableReferenceList: data[1],
            };
        } },
    {"name": "FromClause", "symbols": [FROM, DUAL], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.FromClause,
                tableReferenceList: {
                    ...parse_util_1.getTextRange(data[1]),
                    syntaxKind: parser_node_1.SyntaxKind.Value,
                    value: "DUAL",
                },
            };
        } },
    {"name": "IndexHintClause$ebnf$1$subexpression$1$subexpression$1$subexpression$1", "symbols": [JOIN]},
    {"name": "IndexHintClause$ebnf$1$subexpression$1$subexpression$1", "symbols": ["IndexHintClause$ebnf$1$subexpression$1$subexpression$1$subexpression$1"]},
    {"name": "IndexHintClause$ebnf$1$subexpression$1$subexpression$1$subexpression$2", "symbols": [ORDER, BY]},
    {"name": "IndexHintClause$ebnf$1$subexpression$1$subexpression$1", "symbols": ["IndexHintClause$ebnf$1$subexpression$1$subexpression$1$subexpression$2"]},
    {"name": "IndexHintClause$ebnf$1$subexpression$1$subexpression$1$subexpression$3", "symbols": [GROUP, BY]},
    {"name": "IndexHintClause$ebnf$1$subexpression$1$subexpression$1", "symbols": ["IndexHintClause$ebnf$1$subexpression$1$subexpression$1$subexpression$3"]},
    {"name": "IndexHintClause$ebnf$1$subexpression$1", "symbols": [FOR, "IndexHintClause$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "IndexHintClause$ebnf$1", "symbols": ["IndexHintClause$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "IndexHintClause$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IndexHintClause", "symbols": ["IndexHintClause$ebnf$1"], "postprocess":  function (data) {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Value,
                value: (data[0] == undefined ?
                    (
                    /**
                     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10621
                     */
                    this.settings.indexHintClauseOldMode ?
                        parser_node_1.IndexHintClause.JOIN :
                        parser_node_1.IndexHintClause.ALL) :
                    data[0][1][0][0].tokenKind == scanner_1.TokenKind.JOIN ?
                        parser_node_1.IndexHintClause.JOIN :
                        data[0][1][0][0].tokenKind == scanner_1.TokenKind.ORDER ?
                            parser_node_1.IndexHintClause.ORDER_BY :
                            parser_node_1.IndexHintClause.GROUP_BY),
            };
        } },
    {"name": "IndexHintDefinitionList$ebnf$1", "symbols": []},
    {"name": "IndexHintDefinitionList$ebnf$1", "symbols": ["IndexHintDefinitionList$ebnf$1", "IndexHintDefinition"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "IndexHintDefinitionList", "symbols": ["IndexHintDefinition", "IndexHintDefinitionList$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(1);
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.IndexHintDefinitionList, parse_util_1.getTextRange(data));
        } },
    {"name": "IndexHintDefinition$subexpression$1", "symbols": [FORCE]},
    {"name": "IndexHintDefinition$subexpression$1", "symbols": [IGNORE]},
    {"name": "IndexHintDefinition$subexpression$2", "symbols": [KEY]},
    {"name": "IndexHintDefinition$subexpression$2", "symbols": [INDEX]},
    {"name": "IndexHintDefinition", "symbols": ["IndexHintDefinition$subexpression$1", "IndexHintDefinition$subexpression$2", "IndexHintClause", "KeyUsageList"], "postprocess":  (data) => {
            const [indexHintType, , indexHintClause, indexes,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IndexHintDefinition,
                indexHintType: (indexHintType[0].tokenKind == scanner_1.TokenKind.FORCE ?
                    parser_node_1.IndexHintType.FORCE :
                    parser_node_1.IndexHintType.IGNORE),
                indexHintClause: indexHintClause.value,
                indexes,
            };
        } },
    {"name": "IndexHintDefinition$subexpression$3", "symbols": [KEY]},
    {"name": "IndexHintDefinition$subexpression$3", "symbols": [INDEX]},
    {"name": "IndexHintDefinition", "symbols": [USE, "IndexHintDefinition$subexpression$3", "IndexHintClause", "KeyUsageList"], "postprocess":  (data) => {
            const [, , indexHintClause, indexes,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IndexHintDefinition,
                indexHintType: parser_node_1.IndexHintType.USE,
                indexHintClause: indexHintClause.value,
                indexes,
            };
        } },
    {"name": "Join$ebnf$1$subexpression$1", "symbols": [INNER]},
    {"name": "Join$ebnf$1$subexpression$1", "symbols": [CROSS]},
    {"name": "Join$ebnf$1", "symbols": ["Join$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Join$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Join$ebnf$2", "symbols": ["JoinSpecification"], "postprocess": id},
    {"name": "Join$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "Join", "symbols": ["TableReference", "Join$ebnf$1", JOIN, "JoinRhsTableReference", "Join$ebnf$2"], "postprocess":  (data) => {
            const [lhs, joinType, joinToken, rhs, joinSpecification,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Join,
                joinType: parse_util_1.toValueNode((joinType == undefined ?
                    parser_node_1.JoinType.INNER :
                    joinType[0].tokenKind == scanner_1.TokenKind.INNER ?
                        parser_node_1.JoinType.INNER :
                        parser_node_1.JoinType.CROSS), parse_util_1.getTextRange([joinType, joinToken])),
                lhs,
                rhs,
                joinSpecification: joinSpecification !== null && joinSpecification !== void 0 ? joinSpecification : undefined,
            };
        } },
    {"name": "Join$ebnf$3", "symbols": ["JoinSpecification"], "postprocess": id},
    {"name": "Join$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "Join", "symbols": ["TableReference", STRAIGHT_JOIN, "JoinRhsTableReference", "Join$ebnf$3"], "postprocess":  (data) => {
            const [lhs, joinType, rhs, joinSpecification,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Join,
                joinType: parse_util_1.toValueNode(parser_node_1.JoinType.STRAIGHT, parse_util_1.getTextRange(joinType)),
                lhs,
                rhs,
                joinSpecification: joinSpecification !== null && joinSpecification !== void 0 ? joinSpecification : undefined,
            };
        } },
    {"name": "Join$ebnf$4", "symbols": ["JoinSpecification"], "postprocess": id},
    {"name": "Join$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "Join", "symbols": ["TableReference", NATURAL, JOIN, "JoinRhsTableReference", "Join$ebnf$4"], "postprocess":  (data) => {
            const [lhs, naturalToken, joinToken, rhs, joinSpecification,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Join,
                joinType: parse_util_1.toValueNode(parser_node_1.JoinType.NATURAL_INNER, parse_util_1.getTextRange([naturalToken, joinToken])),
                lhs,
                rhs,
                joinSpecification: joinSpecification !== null && joinSpecification !== void 0 ? joinSpecification : undefined,
            };
        } },
    {"name": "JoinRhsTableReference_Unparenthesized$subexpression$1", "symbols": ["NamedTableFactor"]},
    {"name": "JoinRhsTableReference_Unparenthesized$subexpression$1", "symbols": ["DerivedTableFactor"]},
    {"name": "JoinRhsTableReference_Unparenthesized$subexpression$1", "symbols": ["OdbcTableReference"]},
    {"name": "JoinRhsTableReference_Unparenthesized", "symbols": ["JoinRhsTableReference_Unparenthesized$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "JoinRhsTableReference_Parenthesized", "symbols": [OpenParentheses, "JoinRhsTableReference_Parenthesized", CloseParentheses], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "JoinRhsTableReference_Parenthesized$subexpression$1", "symbols": ["NamedTableFactor"]},
    {"name": "JoinRhsTableReference_Parenthesized$subexpression$1", "symbols": ["DerivedTableFactor"]},
    {"name": "JoinRhsTableReference_Parenthesized$subexpression$1", "symbols": ["Join"]},
    {"name": "JoinRhsTableReference_Parenthesized$subexpression$1", "symbols": ["OdbcTableReference"]},
    {"name": "JoinRhsTableReference_Parenthesized$subexpression$1", "symbols": ["TableReferenceList_2OrMore"]},
    {"name": "JoinRhsTableReference_Parenthesized", "symbols": [OpenParentheses, "JoinRhsTableReference_Parenthesized$subexpression$1", CloseParentheses], "postprocess":  (data) => {
            if (data[1][0].syntaxKind == parser_node_1.SyntaxKind.OdbcTableReference) {
                return {
                    ...data[1][0],
                    parenthesized: true,
                };
            }
            else {
                return data[1][0];
            }
        } },
    {"name": "JoinRhsTableReference", "symbols": ["JoinRhsTableReference_Unparenthesized"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "JoinRhsTableReference", "symbols": ["JoinRhsTableReference_Parenthesized"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "JoinSpecificationOn", "symbols": [ON, "Expression"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.JoinSpecificationOn,
                expr: data[1],
            };
        } },
    {"name": "JoinSpecificationUsing", "symbols": [USING, "IdentifierList"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.JoinSpecificationUsing,
                identifiers: data[1],
            };
        } },
    {"name": "JoinSpecification$subexpression$1", "symbols": ["JoinSpecificationOn"]},
    {"name": "JoinSpecification$subexpression$1", "symbols": ["JoinSpecificationUsing"]},
    {"name": "JoinSpecification", "symbols": ["JoinSpecification$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "KeyUsageList$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "KeyUsageList$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [Comma, "Identifier"]},
    {"name": "KeyUsageList$ebnf$1$subexpression$1$ebnf$1", "symbols": ["KeyUsageList$ebnf$1$subexpression$1$ebnf$1", "KeyUsageList$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "KeyUsageList$ebnf$1$subexpression$1", "symbols": ["Identifier", "KeyUsageList$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "KeyUsageList$ebnf$1", "symbols": ["KeyUsageList$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "KeyUsageList$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "KeyUsageList", "symbols": [OpenParentheses, "KeyUsageList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                return "syntaxKind" in item;
            })
                .map((item) => {
                if (item.quoted) {
                    return item;
                }
                if (item.identifier.toUpperCase() != "PRIMARY") {
                    return item;
                }
                return {
                    ...parse_util_1.getTextRange(item),
                    syntaxKind: parser_node_1.SyntaxKind.Value,
                    value: "PRIMARY",
                };
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.KeyUsageList, parse_util_1.getTextRange(data));
        } },
    {"name": "Join$subexpression$1", "symbols": [LEFT]},
    {"name": "Join$subexpression$1", "symbols": [RIGHT]},
    {"name": "Join$ebnf$5", "symbols": [OUTER], "postprocess": id},
    {"name": "Join$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "Join$ebnf$6", "symbols": ["JoinSpecification"], "postprocess": id},
    {"name": "Join$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "Join", "symbols": ["TableReference", "Join$subexpression$1", "Join$ebnf$5", JOIN, "JoinRhsTableReference", "Join$ebnf$6"], "postprocess":  (data) => {
            const [lhs, joinType, , joinToken, rhs, joinSpecification,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Join,
                joinType: parse_util_1.toValueNode((joinType[0].tokenKind == scanner_1.TokenKind.LEFT ?
                    parser_node_1.JoinType.LEFT :
                    parser_node_1.JoinType.RIGHT), parse_util_1.getTextRange([joinType, joinToken])),
                lhs,
                rhs,
                joinSpecification: joinSpecification !== null && joinSpecification !== void 0 ? joinSpecification : undefined,
            };
        } },
    {"name": "Join$subexpression$2", "symbols": [LEFT]},
    {"name": "Join$subexpression$2", "symbols": [RIGHT]},
    {"name": "Join$ebnf$7", "symbols": [OUTER], "postprocess": id},
    {"name": "Join$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "Join$ebnf$8", "symbols": ["JoinSpecification"], "postprocess": id},
    {"name": "Join$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "Join", "symbols": ["TableReference", NATURAL, "Join$subexpression$2", "Join$ebnf$7", JOIN, "JoinRhsTableReference", "Join$ebnf$8"], "postprocess":  (data) => {
            const [lhs, naturalToken, joinType, , joinToken, rhs, joinSpecification,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Join,
                joinType: parse_util_1.toValueNode((joinType[0].tokenKind == scanner_1.TokenKind.LEFT ?
                    parser_node_1.JoinType.NATURAL_LEFT :
                    parser_node_1.JoinType.NATURAL_RIGHT), parse_util_1.getTextRange([naturalToken, joinToken])),
                lhs,
                rhs,
                joinSpecification: joinSpecification !== null && joinSpecification !== void 0 ? joinSpecification : undefined,
            };
        } },
    {"name": "NamedTableFactor$ebnf$1", "symbols": ["UsePartition"], "postprocess": id},
    {"name": "NamedTableFactor$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "NamedTableFactor$ebnf$2", "symbols": ["TableAlias"], "postprocess": id},
    {"name": "NamedTableFactor$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "NamedTableFactor$ebnf$3", "symbols": ["IndexHintDefinitionList"], "postprocess": id},
    {"name": "NamedTableFactor$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "NamedTableFactor", "symbols": ["TableIdentifier", "NamedTableFactor$ebnf$1", "NamedTableFactor$ebnf$2", "NamedTableFactor$ebnf$3"], "postprocess":  (data) => {
            var _a, _b, _c;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.NamedTableFactor,
                tableIdentifier: data[0],
                usedPartitions: (_a = data[1]) !== null && _a !== void 0 ? _a : undefined,
                alias: (_b = data[2]) !== null && _b !== void 0 ? _b : undefined,
                indexHintDefinitions: (_c = data[3]) !== null && _c !== void 0 ? _c : undefined,
            };
        } },
    {"name": "OdbcTableReference", "symbols": [OpenBrace, "Identifier", "OdbcNestedTableReference", CloseBrace], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.OdbcTableReference,
                parenthesized: false,
                identifier: data[1],
                tableReference: data[2],
            };
        } },
    {"name": "OdbcNestedTableReference_Unparenthesized$subexpression$1", "symbols": ["NamedTableFactor"]},
    {"name": "OdbcNestedTableReference_Unparenthesized$subexpression$1", "symbols": ["DerivedTableFactor"]},
    {"name": "OdbcNestedTableReference_Unparenthesized$subexpression$1", "symbols": ["Join"]},
    {"name": "OdbcNestedTableReference_Unparenthesized", "symbols": ["OdbcNestedTableReference_Unparenthesized$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "OdbcNestedTableReference_Parenthesized", "symbols": [OpenParentheses, "OdbcNestedTableReference_Parenthesized", CloseParentheses], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "OdbcNestedTableReference_Parenthesized$subexpression$1", "symbols": ["NamedTableFactor"]},
    {"name": "OdbcNestedTableReference_Parenthesized$subexpression$1", "symbols": ["DerivedTableFactor"]},
    {"name": "OdbcNestedTableReference_Parenthesized$subexpression$1", "symbols": ["Join"]},
    {"name": "OdbcNestedTableReference_Parenthesized$subexpression$1", "symbols": ["OdbcTableReference"]},
    {"name": "OdbcNestedTableReference_Parenthesized$subexpression$1", "symbols": ["TableReferenceList_2OrMore"]},
    {"name": "OdbcNestedTableReference_Parenthesized", "symbols": [OpenParentheses, "OdbcNestedTableReference_Parenthesized$subexpression$1", CloseParentheses], "postprocess":  (data) => {
            if (data[1][0].syntaxKind == parser_node_1.SyntaxKind.OdbcTableReference) {
                return {
                    ...data[1][0],
                    parenthesized: true,
                };
            }
            else {
                return data[1][0];
            }
        } },
    {"name": "OdbcNestedTableReference", "symbols": ["OdbcNestedTableReference_Unparenthesized"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "OdbcNestedTableReference", "symbols": ["OdbcNestedTableReference_Parenthesized"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "TableAlias$ebnf$1$subexpression$1", "symbols": [AS]},
    {"name": "TableAlias$ebnf$1$subexpression$1", "symbols": [Equal]},
    {"name": "TableAlias$ebnf$1", "symbols": ["TableAlias$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "TableAlias$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TableAlias", "symbols": ["TableAlias$ebnf$1", "Identifier"], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "TableReferenceList$ebnf$1", "symbols": []},
    {"name": "TableReferenceList$ebnf$1$subexpression$1", "symbols": [Comma, "TableReference"]},
    {"name": "TableReferenceList$ebnf$1", "symbols": ["TableReferenceList$ebnf$1", "TableReferenceList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "TableReferenceList", "symbols": ["TableReference", "TableReferenceList$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((item) => {
                return "syntaxKind" in item;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.TableReferenceList, parse_util_1.getTextRange(data));
        } },
    {"name": "TableReferenceList_2OrMore$ebnf$1$subexpression$1", "symbols": [Comma, "TableReference"]},
    {"name": "TableReferenceList_2OrMore$ebnf$1", "symbols": ["TableReferenceList_2OrMore$ebnf$1$subexpression$1"]},
    {"name": "TableReferenceList_2OrMore$ebnf$1$subexpression$2", "symbols": [Comma, "TableReference"]},
    {"name": "TableReferenceList_2OrMore$ebnf$1", "symbols": ["TableReferenceList_2OrMore$ebnf$1", "TableReferenceList_2OrMore$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "TableReferenceList_2OrMore", "symbols": ["TableReference", "TableReferenceList_2OrMore$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((item) => {
                return "syntaxKind" in item;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.TableReferenceList, parse_util_1.getTextRange(data));
        } },
    {"name": "TableReference_Unparenthesized$subexpression$1", "symbols": ["NamedTableFactor"]},
    {"name": "TableReference_Unparenthesized$subexpression$1", "symbols": ["DerivedTableFactor"]},
    {"name": "TableReference_Unparenthesized$subexpression$1", "symbols": ["Join"]},
    {"name": "TableReference_Unparenthesized$subexpression$1", "symbols": ["OdbcTableReference"]},
    {"name": "TableReference_Unparenthesized", "symbols": ["TableReference_Unparenthesized$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "TableReference_Parenthesized", "symbols": [OpenParentheses, "TableReference_Parenthesized", CloseParentheses], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "TableReference_Parenthesized$subexpression$1", "symbols": ["NamedTableFactor"]},
    {"name": "TableReference_Parenthesized$subexpression$1", "symbols": ["DerivedTableFactor"]},
    {"name": "TableReference_Parenthesized$subexpression$1", "symbols": ["Join"]},
    {"name": "TableReference_Parenthesized$subexpression$1", "symbols": ["OdbcTableReference"]},
    {"name": "TableReference_Parenthesized$subexpression$1", "symbols": ["TableReferenceList_2OrMore"]},
    {"name": "TableReference_Parenthesized", "symbols": [OpenParentheses, "TableReference_Parenthesized$subexpression$1", CloseParentheses], "postprocess":  (data) => {
            if (data[1][0].syntaxKind == parser_node_1.SyntaxKind.OdbcTableReference) {
                return {
                    ...data[1][0],
                    parenthesized: true,
                };
            }
            else {
                return data[1][0];
            }
        } },
    {"name": "TableReference", "symbols": ["TableReference_Unparenthesized"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "TableReference", "symbols": ["TableReference_Parenthesized"], "postprocess":  (data) => {
            return data[0];
        } },
    {"name": "UsePartition", "symbols": [PARTITION, "IdentifierList"], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "GroupByClause$ebnf$1$subexpression$1$subexpression$1", "symbols": [CUBE]},
    {"name": "GroupByClause$ebnf$1$subexpression$1$subexpression$1", "symbols": [ROLLUP]},
    {"name": "GroupByClause$ebnf$1$subexpression$1", "symbols": [WITH, "GroupByClause$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "GroupByClause$ebnf$1", "symbols": ["GroupByClause$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "GroupByClause$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "GroupByClause", "symbols": [GROUP, BY, "GroupingExprList", "GroupByClause$ebnf$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.GroupByClause,
                groupingExprs: data[2],
                olapOption: (data[3] == undefined ?
                    undefined :
                    parse_util_1.toValueNode((data[3][1][0].tokenKind == scanner_1.TokenKind.CUBE ?
                        parser_node_1.OlapOption.WITH_CUBE :
                        parser_node_1.OlapOption.WITH_ROLLUP), parse_util_1.getTextRange(data[3]))),
            };
        } },
    {"name": "GroupingExpr$ebnf$1$subexpression$1", "symbols": [ASC]},
    {"name": "GroupingExpr$ebnf$1$subexpression$1", "symbols": [DESC]},
    {"name": "GroupingExpr$ebnf$1", "symbols": ["GroupingExpr$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "GroupingExpr$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "GroupingExpr", "symbols": ["Expression", "GroupingExpr$ebnf$1"], "postprocess":  (data) => {
            const [expr, sortDirection] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.GroupingExpr,
                expr,
                sortDirection: (sortDirection == undefined ?
                    undefined :
                    parse_util_1.toValueNode((sortDirection[0].tokenKind == scanner_1.TokenKind.ASC ?
                        parser_node_1.SortDirection.ASC :
                        parser_node_1.SortDirection.DESC), sortDirection[0])),
            };
        } },
    {"name": "GroupingExprList$ebnf$1", "symbols": []},
    {"name": "GroupingExprList$ebnf$1$subexpression$1", "symbols": [Comma, "GroupingExpr"]},
    {"name": "GroupingExprList$ebnf$1", "symbols": ["GroupingExprList$ebnf$1", "GroupingExprList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "GroupingExprList", "symbols": ["GroupingExpr", "GroupingExprList$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((data) => {
                return "syntaxKind" in data;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.GroupingExprList, parse_util_1.getTextRange(data));
        } },
    {"name": "FieldTerminatorOption", "symbols": [TERMINATED, BY, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                terminatedBy: data[2],
            };
        } },
    {"name": "FieldTerminatorOption", "symbols": [OPTIONALLY, ENCLOSED, BY, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                optionallyEnclosed: true,
                enclosedBy: data[3],
            };
        } },
    {"name": "FieldTerminatorOption", "symbols": [ENCLOSED, BY, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                enclosedBy: data[2],
            };
        } },
    {"name": "FieldTerminatorOption", "symbols": [ESCAPED, BY, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                escapedBy: data[2],
            };
        } },
    {"name": "FieldTerminatorOptions$subexpression$1", "symbols": [FIELDS]},
    {"name": "FieldTerminatorOptions$subexpression$1", "symbols": [COLUMNS]},
    {"name": "FieldTerminatorOptions$ebnf$1", "symbols": []},
    {"name": "FieldTerminatorOptions$ebnf$1", "symbols": ["FieldTerminatorOptions$ebnf$1", "FieldTerminatorOption"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "FieldTerminatorOptions", "symbols": ["FieldTerminatorOptions$subexpression$1", "FieldTerminatorOption", "FieldTerminatorOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(1)
                .filter((item) => {
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const result = {
                terminatedBy: {
                    start: data[0][0].start,
                    end: data[0][0].end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "\t",
                    sourceText: "'\\t'",
                },
                optionallyEnclosed: false,
                enclosedBy: {
                    start: data[0][0].start,
                    end: data[0][0].end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "",
                    sourceText: "''",
                },
                escapedBy: {
                    start: data[0][0].start,
                    end: data[0][0].end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "\\",
                    sourceText: "'\\\\'",
                },
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.FieldTerminatorOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "IntoClause", "symbols": [INTO, "IntoDestination"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IntoClause,
                intoDestination: data[1],
            };
        } },
    {"name": "IntoDestinationDumpFile", "symbols": [DUMPFILE, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IntoDestinationDumpFile,
                path: data[1],
            };
        } },
    {"name": "IntoDestinationOutFile$ebnf$1$subexpression$1$subexpression$1$subexpression$1", "symbols": [CHARACTER, SET]},
    {"name": "IntoDestinationOutFile$ebnf$1$subexpression$1$subexpression$1", "symbols": ["IntoDestinationOutFile$ebnf$1$subexpression$1$subexpression$1$subexpression$1"]},
    {"name": "IntoDestinationOutFile$ebnf$1$subexpression$1$subexpression$1", "symbols": [CHARSET]},
    {"name": "IntoDestinationOutFile$ebnf$1$subexpression$1", "symbols": ["IntoDestinationOutFile$ebnf$1$subexpression$1$subexpression$1", "CharacterSetNameOrDefault"]},
    {"name": "IntoDestinationOutFile$ebnf$1", "symbols": ["IntoDestinationOutFile$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "IntoDestinationOutFile$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IntoDestinationOutFile$ebnf$2", "symbols": ["FieldTerminatorOptions"], "postprocess": id},
    {"name": "IntoDestinationOutFile$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "IntoDestinationOutFile$ebnf$3", "symbols": ["LineTerminatorOptions"], "postprocess": id},
    {"name": "IntoDestinationOutFile$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "IntoDestinationOutFile", "symbols": [OUTFILE, "StringLiteral", "IntoDestinationOutFile$ebnf$1", "IntoDestinationOutFile$ebnf$2", "IntoDestinationOutFile$ebnf$3"], "postprocess":  (data) => {
            const [, path, characterSet, fieldTerminatorOptions, lineTerminatorOptions,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IntoDestinationOutFile,
                path: path,
                characterSet: (characterSet == undefined ?
                    undefined :
                    characterSet[1]),
                fieldTerminatorOptions: fieldTerminatorOptions !== null && fieldTerminatorOptions !== void 0 ? fieldTerminatorOptions : undefined,
                lineTerminatorOptions: lineTerminatorOptions !== null && lineTerminatorOptions !== void 0 ? lineTerminatorOptions : undefined,
            };
        } },
    {"name": "IntoDestinationVariableList$subexpression$1", "symbols": ["Identifier"]},
    {"name": "IntoDestinationVariableList$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "IntoDestinationVariableList$subexpression$1", "symbols": ["UserVariableIdentifier"]},
    {"name": "IntoDestinationVariableList$ebnf$1", "symbols": []},
    {"name": "IntoDestinationVariableList$ebnf$1$subexpression$1$subexpression$1", "symbols": ["Identifier"]},
    {"name": "IntoDestinationVariableList$ebnf$1$subexpression$1$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "IntoDestinationVariableList$ebnf$1$subexpression$1$subexpression$1", "symbols": ["UserVariableIdentifier"]},
    {"name": "IntoDestinationVariableList$ebnf$1$subexpression$1", "symbols": [Comma, "IntoDestinationVariableList$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "IntoDestinationVariableList$ebnf$1", "symbols": ["IntoDestinationVariableList$ebnf$1", "IntoDestinationVariableList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "IntoDestinationVariableList", "symbols": ["IntoDestinationVariableList$subexpression$1", "IntoDestinationVariableList$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((data) => {
                return "syntaxKind" in data;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.IntoDestinationVariableList, parse_util_1.getTextRange(data));
        } },
    {"name": "IntoDestination$subexpression$1", "symbols": ["IntoDestinationDumpFile"]},
    {"name": "IntoDestination$subexpression$1", "symbols": ["IntoDestinationOutFile"]},
    {"name": "IntoDestination$subexpression$1", "symbols": ["IntoDestinationVariableList"]},
    {"name": "IntoDestination", "symbols": ["IntoDestination$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "LineTerminatorOption", "symbols": [TERMINATED, BY, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                terminatedBy: data[2],
            };
        } },
    {"name": "LineTerminatorOption", "symbols": [STARTING, BY, "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                startingBy: data[2],
            };
        } },
    {"name": "LineTerminatorOptions$ebnf$1", "symbols": []},
    {"name": "LineTerminatorOptions$ebnf$1", "symbols": ["LineTerminatorOptions$ebnf$1", "LineTerminatorOption"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "LineTerminatorOptions", "symbols": [LINES, "LineTerminatorOption", "LineTerminatorOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(1)
                .filter((item) => {
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const result = {
                terminatedBy: {
                    start: data[0].start,
                    end: data[0].end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "\n",
                    sourceText: "'\\n'",
                },
                startingBy: {
                    start: data[0].start,
                    end: data[0].end,
                    syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
                    value: "",
                    sourceText: "''",
                },
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.LineTerminatorOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "HashPartition$ebnf$1", "symbols": [LINEAR], "postprocess": id},
    {"name": "HashPartition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "HashPartition$ebnf$2$subexpression$1", "symbols": [PARTITIONS, "IntegerLiteral"]},
    {"name": "HashPartition$ebnf$2", "symbols": ["HashPartition$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "HashPartition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "HashPartition", "symbols": [PARTITION, BY, "HashPartition$ebnf$1", HASH, OpenParentheses, "Expression", CloseParentheses, "HashPartition$ebnf$2"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.HashPartition,
                linear: data[2] != undefined,
                partitionExpr: data[5],
                partitionCount: (data[7] == undefined ?
                    undefined :
                    data[7][1]),
            };
        } },
    {"name": "HashSubPartition$ebnf$1", "symbols": [LINEAR], "postprocess": id},
    {"name": "HashSubPartition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "HashSubPartition$ebnf$2$subexpression$1", "symbols": [SUBPARTITIONS, "IntegerLiteral"]},
    {"name": "HashSubPartition$ebnf$2", "symbols": ["HashSubPartition$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "HashSubPartition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "HashSubPartition", "symbols": [SUBPARTITION, BY, "HashSubPartition$ebnf$1", HASH, OpenParentheses, "Expression", CloseParentheses, "HashSubPartition$ebnf$2"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.HashSubPartition,
                linear: data[2] != undefined,
                subPartitionExpr: data[5],
                subPartitionCount: (data[7] == undefined ?
                    undefined :
                    data[7][1]),
            };
        } },
    {"name": "KeyPartition$ebnf$1", "symbols": [LINEAR], "postprocess": id},
    {"name": "KeyPartition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "KeyPartition$ebnf$2$subexpression$1", "symbols": [ALGORITHM, Equal, "IntegerLiteral"]},
    {"name": "KeyPartition$ebnf$2", "symbols": ["KeyPartition$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "KeyPartition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "KeyPartition$ebnf$3$subexpression$1", "symbols": [PARTITIONS, "IntegerLiteral"]},
    {"name": "KeyPartition$ebnf$3", "symbols": ["KeyPartition$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "KeyPartition$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "KeyPartition", "symbols": [PARTITION, BY, "KeyPartition$ebnf$1", KEY, "KeyPartition$ebnf$2", "IdentifierList", "KeyPartition$ebnf$3"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.KeyPartition,
                linear: data[2] != undefined,
                algorithm: (data[4] == undefined ?
                    undefined :
                    data[4][2]),
                partitionColumns: data[5],
                partitionCount: (data[6] == undefined ?
                    undefined :
                    data[6][1]),
            };
        } },
    {"name": "KeySubPartition$ebnf$1", "symbols": [LINEAR], "postprocess": id},
    {"name": "KeySubPartition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "KeySubPartition$ebnf$2$subexpression$1", "symbols": [ALGORITHM, Equal, "IntegerLiteral"]},
    {"name": "KeySubPartition$ebnf$2", "symbols": ["KeySubPartition$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "KeySubPartition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "KeySubPartition$ebnf$3$subexpression$1", "symbols": [SUBPARTITIONS, "IntegerLiteral"]},
    {"name": "KeySubPartition$ebnf$3", "symbols": ["KeySubPartition$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "KeySubPartition$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "KeySubPartition", "symbols": [SUBPARTITION, BY, "KeySubPartition$ebnf$1", KEY, "KeySubPartition$ebnf$2", "IdentifierList", "KeySubPartition$ebnf$3"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.KeySubPartition,
                linear: data[2] != undefined,
                algorithm: (data[4] == undefined ?
                    undefined :
                    data[4][2]),
                subPartitionColumns: data[5],
                subPartitionCount: (data[6] == undefined ?
                    undefined :
                    data[6][1]),
            };
        } },
    {"name": "ListPartition$ebnf$1$subexpression$1", "symbols": [PARTITIONS, "IntegerLiteral"]},
    {"name": "ListPartition$ebnf$1", "symbols": ["ListPartition$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "ListPartition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "ListPartition$ebnf$2", "symbols": ["SubPartition"], "postprocess": id},
    {"name": "ListPartition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "ListPartition$ebnf$3", "symbols": []},
    {"name": "ListPartition$ebnf$3$subexpression$1", "symbols": [Comma, "SingletonListPartitionDefinition"]},
    {"name": "ListPartition$ebnf$3", "symbols": ["ListPartition$ebnf$3", "ListPartition$ebnf$3$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ListPartition", "symbols": [PARTITION, BY, LIST, OpenParentheses, "Expression", CloseParentheses, "ListPartition$ebnf$1", "ListPartition$ebnf$2", OpenParentheses, "SingletonListPartitionDefinition", "ListPartition$ebnf$3", CloseParentheses], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ListPartition,
                partitionExprOrColumns: data[4],
                partitionCount: (data[6] == undefined ?
                    undefined :
                    data[6][1]),
                subPartition: (data[7] == undefined ?
                    undefined :
                    data[7]),
                partitionDefinitions: parse_util_1.toNodeArray([
                    data[9],
                    ...data[10].flat(1).filter((item) => {
                        return "syntaxKind" in item;
                    })
                ], parser_node_1.SyntaxKind.ListPartitionDefinitionList, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "ListPartition$ebnf$4$subexpression$1", "symbols": [PARTITIONS, "IntegerLiteral"]},
    {"name": "ListPartition$ebnf$4", "symbols": ["ListPartition$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "ListPartition$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "ListPartition$ebnf$5", "symbols": ["SubPartition"], "postprocess": id},
    {"name": "ListPartition$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "ListPartition$ebnf$6", "symbols": []},
    {"name": "ListPartition$ebnf$6$subexpression$1", "symbols": [Comma, "SingletonListPartitionDefinition"]},
    {"name": "ListPartition$ebnf$6", "symbols": ["ListPartition$ebnf$6", "ListPartition$ebnf$6$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ListPartition", "symbols": [PARTITION, BY, LIST, COLUMNS, OpenParentheses, "Identifier", CloseParentheses, "ListPartition$ebnf$4", "ListPartition$ebnf$5", OpenParentheses, "SingletonListPartitionDefinition", "ListPartition$ebnf$6", CloseParentheses], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ListPartition,
                partitionExprOrColumns: parse_util_1.toNodeArray([data[5]], parser_node_1.SyntaxKind.IdentifierList, data[5]),
                partitionCount: (data[7] == undefined ?
                    undefined :
                    data[7][1]),
                subPartition: (data[8] == undefined ?
                    undefined :
                    data[8]),
                partitionDefinitions: parse_util_1.toNodeArray([
                    data[10],
                    ...data[11].flat(1).filter((item) => {
                        return "syntaxKind" in item;
                    })
                ], parser_node_1.SyntaxKind.ListPartitionDefinitionList, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "ListPartition$ebnf$7$subexpression$1", "symbols": [PARTITIONS, "IntegerLiteral"]},
    {"name": "ListPartition$ebnf$7", "symbols": ["ListPartition$ebnf$7$subexpression$1"], "postprocess": id},
    {"name": "ListPartition$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "ListPartition$ebnf$8", "symbols": ["SubPartition"], "postprocess": id},
    {"name": "ListPartition$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "ListPartition$ebnf$9", "symbols": []},
    {"name": "ListPartition$ebnf$9$subexpression$1", "symbols": [Comma, "NonSingletonListPartitionDefinition"]},
    {"name": "ListPartition$ebnf$9", "symbols": ["ListPartition$ebnf$9", "ListPartition$ebnf$9$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ListPartition", "symbols": [PARTITION, BY, LIST, COLUMNS, "IdentifierList_2OrMore", "ListPartition$ebnf$7", "ListPartition$ebnf$8", OpenParentheses, "NonSingletonListPartitionDefinition", "ListPartition$ebnf$9", CloseParentheses], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ListPartition,
                partitionExprOrColumns: data[4],
                partitionCount: (data[5] == undefined ?
                    undefined :
                    data[5][1]),
                subPartition: (data[6] == undefined ?
                    undefined :
                    data[6]),
                partitionDefinitions: parse_util_1.toNodeArray([
                    data[8],
                    ...data[9].flat(1).filter((item) => {
                        return "syntaxKind" in item;
                    })
                ], parser_node_1.SyntaxKind.ListPartitionDefinitionList, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "NonSingletonListPartitionDefinition$ebnf$1", "symbols": ["SubPartitionDefinitionList"], "postprocess": id},
    {"name": "NonSingletonListPartitionDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "NonSingletonListPartitionDefinition", "symbols": [PARTITION, "Identifier", VALUES, IN, "ExpressionListList", "PartitionDefinitionOptions", "NonSingletonListPartitionDefinition$ebnf$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ListPartitionDefinition,
                partitionName: data[1],
                partitionValues: data[4],
                partitionDefinitionOptions: data[5],
                subPartitionDefinitions: (data[6] == undefined ?
                    undefined :
                    data[6]),
            };
        } },
    {"name": "NonSingletonRangePartitionDefinition$ebnf$1$subexpression$1", "symbols": [Comma, "Expression"]},
    {"name": "NonSingletonRangePartitionDefinition$ebnf$1", "symbols": ["NonSingletonRangePartitionDefinition$ebnf$1$subexpression$1"]},
    {"name": "NonSingletonRangePartitionDefinition$ebnf$1$subexpression$2", "symbols": [Comma, "Expression"]},
    {"name": "NonSingletonRangePartitionDefinition$ebnf$1", "symbols": ["NonSingletonRangePartitionDefinition$ebnf$1", "NonSingletonRangePartitionDefinition$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "NonSingletonRangePartitionDefinition$ebnf$2", "symbols": ["SubPartitionDefinitionList"], "postprocess": id},
    {"name": "NonSingletonRangePartitionDefinition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "NonSingletonRangePartitionDefinition", "symbols": [PARTITION, "Identifier", VALUES, LESS, THAN, OpenParentheses, "Expression", "NonSingletonRangePartitionDefinition$ebnf$1", CloseParentheses, "PartitionDefinitionOptions", "NonSingletonRangePartitionDefinition$ebnf$2"], "postprocess":  (data) => {
            const exprOrMaxValueArray = [data[6], ...data[7]]
                .flat(2)
                .filter((item) => {
                return "syntaxKind" in item;
            })
                .map((exprOrMaxValue) => {
                return (!("syntaxKind" in exprOrMaxValue) ||
                    (parser_node_1.isSyntaxKind(exprOrMaxValue, parser_node_1.SyntaxKind.Identifier) &&
                        !exprOrMaxValue.quoted &&
                        exprOrMaxValue.identifier.toUpperCase() == "MAXVALUE")) ?
                    {
                        ...parse_util_1.getTextRange(exprOrMaxValue),
                        syntaxKind: parser_node_1.SyntaxKind.Value,
                        value: "MAXVALUE"
                    } :
                    exprOrMaxValue;
            });
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.RangePartitionDefinition,
                partitionName: data[1],
                partitionValues: parse_util_1.toNodeArray(exprOrMaxValueArray, parser_node_1.SyntaxKind.ExpressionOrMaxValueList, parse_util_1.getTextRange(exprOrMaxValueArray)),
                partitionDefinitionOptions: data[9],
                subPartitionDefinitions: (data[10] == undefined ?
                    undefined :
                    data[10]),
            };
        } },
    {"name": "PartitionDefinitionOption$ebnf$1", "symbols": [STORAGE], "postprocess": id},
    {"name": "PartitionDefinitionOption$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "PartitionDefinitionOption$ebnf$2", "symbols": [Equal], "postprocess": id},
    {"name": "PartitionDefinitionOption$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "PartitionDefinitionOption$subexpression$1", "symbols": ["Identifier"]},
    {"name": "PartitionDefinitionOption$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "PartitionDefinitionOption", "symbols": ["PartitionDefinitionOption$ebnf$1", ENGINE, "PartitionDefinitionOption$ebnf$2", "PartitionDefinitionOption$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                engine: data[3][0],
            };
        } },
    {"name": "PartitionDefinitionOption$ebnf$3", "symbols": [Equal], "postprocess": id},
    {"name": "PartitionDefinitionOption$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "PartitionDefinitionOption", "symbols": [MAX_ROWS, "PartitionDefinitionOption$ebnf$3", "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                maxRows: data[2],
            };
        } },
    {"name": "PartitionDefinitionOption$ebnf$4", "symbols": [Equal], "postprocess": id},
    {"name": "PartitionDefinitionOption$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "PartitionDefinitionOption", "symbols": [MIN_ROWS, "PartitionDefinitionOption$ebnf$4", "IntegerLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                minRows: data[2],
            };
        } },
    {"name": "PartitionDefinitionOption$ebnf$5", "symbols": [Equal], "postprocess": id},
    {"name": "PartitionDefinitionOption$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "PartitionDefinitionOption", "symbols": [COMMENT, "PartitionDefinitionOption$ebnf$5", "StringLiteral"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                comment: data[2],
            };
        } },
    {"name": "PartitionDefinitionOption$ebnf$6", "symbols": [Equal], "postprocess": id},
    {"name": "PartitionDefinitionOption$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "PartitionDefinitionOption", "symbols": [DATA, DIRECTORY, "PartitionDefinitionOption$ebnf$6", "StringLiteral"], "postprocess":  (data) => {
            const dataDirectory = data[3];
            const result = {
                ...parse_util_1.getTextRange(data),
                dataDirectory,
            };
            return result;
        } },
    {"name": "PartitionDefinitionOption$ebnf$7", "symbols": [Equal], "postprocess": id},
    {"name": "PartitionDefinitionOption$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "PartitionDefinitionOption", "symbols": [INDEX, DIRECTORY, "PartitionDefinitionOption$ebnf$7", "StringLiteral"], "postprocess":  (data) => {
            const indexDirectory = data[3];
            const result = {
                ...parse_util_1.getTextRange(data),
                indexDirectory,
            };
            return result;
        } },
    {"name": "PartitionDefinitionOption$ebnf$8", "symbols": [Equal], "postprocess": id},
    {"name": "PartitionDefinitionOption$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "PartitionDefinitionOption", "symbols": [TABLESPACE, "PartitionDefinitionOption$ebnf$8", "Identifier"], "postprocess":  (data) => {
            const tablespace = data[2];
            const result = {
                ...parse_util_1.getTextRange(data),
                tablespace,
            };
            return result;
        } },
    {"name": "PartitionDefinitionOption$ebnf$9", "symbols": [Equal], "postprocess": id},
    {"name": "PartitionDefinitionOption$ebnf$9", "symbols": [], "postprocess": () => null},
    {"name": "PartitionDefinitionOption", "symbols": [NODEGROUP, "PartitionDefinitionOption$ebnf$9", "IntegerLiteral"], "postprocess":  (data) => {
            const nodeGroup = data[2];
            const result = {
                ...parse_util_1.getTextRange(data),
                nodeGroup,
            };
            return result;
        } },
    {"name": "PartitionDefinitionOptions$ebnf$1", "symbols": []},
    {"name": "PartitionDefinitionOptions$ebnf$1$subexpression$1", "symbols": ["PartitionDefinitionOption"]},
    {"name": "PartitionDefinitionOptions$ebnf$1", "symbols": ["PartitionDefinitionOptions$ebnf$1", "PartitionDefinitionOptions$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PartitionDefinitionOptions", "symbols": ["PartitionDefinitionOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const result = {
                tablespace: undefined,
                engine: undefined,
                nodeGroup: undefined,
                maxRows: undefined,
                minRows: undefined,
                dataDirectory: undefined,
                indexDirectory: undefined,
                comment: undefined,
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.PartitionDefinitionOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "Partition", "symbols": ["HashPartition"], "postprocess": data => data[0]},
    {"name": "Partition", "symbols": ["KeyPartition"], "postprocess": data => data[0]},
    {"name": "Partition", "symbols": ["ListPartition"], "postprocess": data => data[0]},
    {"name": "Partition", "symbols": ["RangePartition"], "postprocess": data => data[0]},
    {"name": "RangePartition$ebnf$1$subexpression$1", "symbols": [PARTITIONS, "IntegerLiteral"]},
    {"name": "RangePartition$ebnf$1", "symbols": ["RangePartition$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "RangePartition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "RangePartition$ebnf$2", "symbols": ["SubPartition"], "postprocess": id},
    {"name": "RangePartition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "RangePartition$ebnf$3", "symbols": []},
    {"name": "RangePartition$ebnf$3$subexpression$1", "symbols": [Comma, "SingletonRangePartitionDefinition"]},
    {"name": "RangePartition$ebnf$3", "symbols": ["RangePartition$ebnf$3", "RangePartition$ebnf$3$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "RangePartition", "symbols": [PARTITION, BY, RANGE, OpenParentheses, "Expression", CloseParentheses, "RangePartition$ebnf$1", "RangePartition$ebnf$2", OpenParentheses, "SingletonRangePartitionDefinition", "RangePartition$ebnf$3", CloseParentheses], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.RangePartition,
                partitionExprOrColumns: data[4],
                partitionCount: (data[6] == undefined ?
                    undefined :
                    data[6][1]),
                subPartition: (data[7] == undefined ?
                    undefined :
                    data[7]),
                partitionDefinitions: parse_util_1.toNodeArray([
                    data[9],
                    ...data[10].flat(1).filter((item) => {
                        return "syntaxKind" in item;
                    })
                ], parser_node_1.SyntaxKind.RangePartitionDefinitionList, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "RangePartition$ebnf$4$subexpression$1", "symbols": [PARTITIONS, "IntegerLiteral"]},
    {"name": "RangePartition$ebnf$4", "symbols": ["RangePartition$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "RangePartition$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "RangePartition$ebnf$5", "symbols": ["SubPartition"], "postprocess": id},
    {"name": "RangePartition$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "RangePartition$ebnf$6", "symbols": []},
    {"name": "RangePartition$ebnf$6$subexpression$1", "symbols": [Comma, "SingletonRangePartitionDefinition"]},
    {"name": "RangePartition$ebnf$6", "symbols": ["RangePartition$ebnf$6", "RangePartition$ebnf$6$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "RangePartition", "symbols": [PARTITION, BY, RANGE, COLUMNS, OpenParentheses, "Identifier", CloseParentheses, "RangePartition$ebnf$4", "RangePartition$ebnf$5", OpenParentheses, "SingletonRangePartitionDefinition", "RangePartition$ebnf$6", CloseParentheses], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.RangePartition,
                partitionExprOrColumns: parse_util_1.toNodeArray([data[5]], parser_node_1.SyntaxKind.IdentifierList, data[5]),
                partitionCount: (data[7] == undefined ?
                    undefined :
                    data[7][1]),
                subPartition: (data[8] == undefined ?
                    undefined :
                    data[8]),
                partitionDefinitions: parse_util_1.toNodeArray([
                    data[10],
                    ...data[11].flat(1).filter((item) => {
                        return "syntaxKind" in item;
                    })
                ], parser_node_1.SyntaxKind.RangePartitionDefinitionList, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "RangePartition$ebnf$7$subexpression$1", "symbols": [PARTITIONS, "IntegerLiteral"]},
    {"name": "RangePartition$ebnf$7", "symbols": ["RangePartition$ebnf$7$subexpression$1"], "postprocess": id},
    {"name": "RangePartition$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "RangePartition$ebnf$8", "symbols": ["SubPartition"], "postprocess": id},
    {"name": "RangePartition$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "RangePartition$ebnf$9", "symbols": []},
    {"name": "RangePartition$ebnf$9$subexpression$1", "symbols": [Comma, "NonSingletonRangePartitionDefinition"]},
    {"name": "RangePartition$ebnf$9", "symbols": ["RangePartition$ebnf$9", "RangePartition$ebnf$9$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "RangePartition", "symbols": [PARTITION, BY, RANGE, COLUMNS, "IdentifierList_2OrMore", "RangePartition$ebnf$7", "RangePartition$ebnf$8", OpenParentheses, "NonSingletonRangePartitionDefinition", "RangePartition$ebnf$9", CloseParentheses], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.RangePartition,
                partitionExprOrColumns: data[4],
                partitionCount: (data[5] == undefined ?
                    undefined :
                    data[5][1]),
                subPartition: (data[6] == undefined ?
                    undefined :
                    data[6]),
                partitionDefinitions: parse_util_1.toNodeArray([
                    data[8],
                    ...data[9].flat(1).filter((item) => {
                        return "syntaxKind" in item;
                    })
                ], parser_node_1.SyntaxKind.RangePartitionDefinitionList, parse_util_1.getTextRange(data)),
            };
        } },
    {"name": "SingletonListPartitionDefinition$ebnf$1", "symbols": ["SubPartitionDefinitionList"], "postprocess": id},
    {"name": "SingletonListPartitionDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "SingletonListPartitionDefinition", "symbols": [PARTITION, "Identifier", VALUES, IN, "ExpressionList", "PartitionDefinitionOptions", "SingletonListPartitionDefinition$ebnf$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ListPartitionDefinition,
                partitionName: data[1],
                partitionValues: parse_util_1.toNodeArray(data[4].map(expression => {
                    return parse_util_1.toNodeArray([expression], parser_node_1.SyntaxKind.ExpressionList, parse_util_1.getTextRange(expression));
                }), parser_node_1.SyntaxKind.ExpressionListList, parse_util_1.getTextRange(data[4])),
                partitionDefinitionOptions: data[5],
                subPartitionDefinitions: (data[6] == undefined ?
                    undefined :
                    data[6]),
            };
        } },
    {"name": "SingletonRangePartitionDefinition$subexpression$1$subexpression$1", "symbols": [OpenParentheses, "Expression", CloseParentheses]},
    {"name": "SingletonRangePartitionDefinition$subexpression$1", "symbols": ["SingletonRangePartitionDefinition$subexpression$1$subexpression$1"]},
    {"name": "SingletonRangePartitionDefinition$subexpression$1$subexpression$2", "symbols": [MAXVALUE]},
    {"name": "SingletonRangePartitionDefinition$subexpression$1", "symbols": ["SingletonRangePartitionDefinition$subexpression$1$subexpression$2"]},
    {"name": "SingletonRangePartitionDefinition$ebnf$1", "symbols": ["SubPartitionDefinitionList"], "postprocess": id},
    {"name": "SingletonRangePartitionDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "SingletonRangePartitionDefinition", "symbols": [PARTITION, "Identifier", VALUES, LESS, THAN, "SingletonRangePartitionDefinition$subexpression$1", "PartitionDefinitionOptions", "SingletonRangePartitionDefinition$ebnf$1"], "postprocess":  (data) => {
            const exprOrMaxValue = data[5]
                .flat(2)
                .filter((item) => {
                if ("syntaxKind" in item) {
                    return true;
                }
                return item.tokenKind == scanner_1.TokenKind.MAXVALUE;
            });
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.RangePartitionDefinition,
                partitionName: data[1],
                partitionValues: parse_util_1.toNodeArray([
                    (!("syntaxKind" in exprOrMaxValue[0]) ||
                        (parser_node_1.isSyntaxKind(exprOrMaxValue[0], parser_node_1.SyntaxKind.Identifier) &&
                            !exprOrMaxValue[0].quoted &&
                            exprOrMaxValue[0].identifier.toUpperCase() == "MAXVALUE")) ?
                        {
                            ...parse_util_1.getTextRange(exprOrMaxValue[0]),
                            syntaxKind: parser_node_1.SyntaxKind.Value,
                            value: "MAXVALUE"
                        } :
                        exprOrMaxValue[0]
                ], parser_node_1.SyntaxKind.ExpressionOrMaxValueList, parse_util_1.getTextRange(data[5])),
                partitionDefinitionOptions: data[6],
                subPartitionDefinitions: (data[7] == undefined ?
                    undefined :
                    data[7]),
            };
        } },
    {"name": "SubPartitionDefinitionList$ebnf$1", "symbols": []},
    {"name": "SubPartitionDefinitionList$ebnf$1$subexpression$1", "symbols": [Comma, "SubPartitionDefinition"]},
    {"name": "SubPartitionDefinitionList$ebnf$1", "symbols": ["SubPartitionDefinitionList$ebnf$1", "SubPartitionDefinitionList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "SubPartitionDefinitionList", "symbols": [OpenParentheses, "SubPartitionDefinition", "SubPartitionDefinitionList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.SubPartitionDefinitionList, parse_util_1.getTextRange(data));
        } },
    {"name": "SubPartitionDefinition$subexpression$1", "symbols": ["Identifier"]},
    {"name": "SubPartitionDefinition$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "SubPartitionDefinition", "symbols": [SUBPARTITION, "SubPartitionDefinition$subexpression$1", "PartitionDefinitionOptions"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.SubPartitionDefinition,
                subPartitionName: data[1][0],
                partitionDefinitionOptions: data[2],
            };
        } },
    {"name": "SubPartition", "symbols": ["HashSubPartition"], "postprocess": data => data[0]},
    {"name": "SubPartition", "symbols": ["KeySubPartition"], "postprocess": data => data[0]},
    {"name": "AsteriskSelectItem", "symbols": [Asterisk], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.AsteriskSelectItem,
            };
        } },
    {"name": "HavingClause", "symbols": [HAVING, "Expression"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.HavingClause,
                expr: data[1],
            };
        } },
    {"name": "LimitOption$subexpression$1", "symbols": ["Identifier"]},
    {"name": "LimitOption$subexpression$1", "symbols": ["ParamMarker"]},
    {"name": "LimitOption$subexpression$1", "symbols": ["IntegerLiteral"]},
    {"name": "LimitOption", "symbols": ["LimitOption$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "Limit", "symbols": [LIMIT, "LimitOption"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Limit,
                offset: undefined,
                rowCount: data[1],
            };
        } },
    {"name": "Limit", "symbols": [LIMIT, "LimitOption", Comma, "LimitOption"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Limit,
                offset: data[1],
                rowCount: data[3],
            };
        } },
    {"name": "Limit", "symbols": [LIMIT, "LimitOption", OFFSET, "LimitOption"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Limit,
                offset: data[3],
                rowCount: data[1],
            };
        } },
    {"name": "OrderExpr$ebnf$1$subexpression$1", "symbols": [ASC]},
    {"name": "OrderExpr$ebnf$1$subexpression$1", "symbols": [DESC]},
    {"name": "OrderExpr$ebnf$1", "symbols": ["OrderExpr$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "OrderExpr$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "OrderExpr", "symbols": ["Expression", "OrderExpr$ebnf$1"], "postprocess":  (data) => {
            const [expr, orderingDirection] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.OrderExpr,
                expr,
                orderingDirection: (orderingDirection == undefined ?
                    parser_node_1.OrderingDirection.ASC :
                    orderingDirection[0].tokenKind == scanner_1.TokenKind.ASC ?
                        parser_node_1.OrderingDirection.ASC :
                        parser_node_1.OrderingDirection.DESC),
            };
        } },
    {"name": "OrderExprList$ebnf$1", "symbols": []},
    {"name": "OrderExprList$ebnf$1$subexpression$1", "symbols": [Comma, "OrderExpr"]},
    {"name": "OrderExprList$ebnf$1", "symbols": ["OrderExprList$ebnf$1", "OrderExprList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "OrderExprList", "symbols": [ORDER, BY, "OrderExpr", "OrderExprList$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(2)
                .filter((data) => {
                return "syntaxKind" in data;
            });
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.OrderExprList, parse_util_1.getTextRange(data));
        } },
    {"name": "ProcedureAnalyseClause", "symbols": [PROCEDURE, ANALYSE, OpenParentheses, CloseParentheses], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ProcedureAnalyseClause,
                args: undefined,
            };
        } },
    {"name": "ProcedureAnalyseClause", "symbols": [PROCEDURE, ANALYSE, OpenParentheses, "IntegerLiteral", CloseParentheses], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ProcedureAnalyseClause,
                args: {
                    maxElements: data[3],
                    maxMemory: undefined,
                },
            };
        } },
    {"name": "ProcedureAnalyseClause", "symbols": [PROCEDURE, ANALYSE, OpenParentheses, "IntegerLiteral", Comma, "IntegerLiteral", CloseParentheses], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ProcedureAnalyseClause,
                args: {
                    maxElements: data[3],
                    maxMemory: data[5],
                },
            };
        } },
    {"name": "SelectItem$ebnf$1$subexpression$1$ebnf$1", "symbols": [AS], "postprocess": id},
    {"name": "SelectItem$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "SelectItem$ebnf$1$subexpression$1$subexpression$1", "symbols": ["Identifier"]},
    {"name": "SelectItem$ebnf$1$subexpression$1$subexpression$1", "symbols": ["StringLiteral"]},
    {"name": "SelectItem$ebnf$1$subexpression$1", "symbols": ["SelectItem$ebnf$1$subexpression$1$ebnf$1", "SelectItem$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "SelectItem$ebnf$1", "symbols": ["SelectItem$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "SelectItem$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "SelectItem", "symbols": ["Expression", "SelectItem$ebnf$1"], "postprocess":  (data) => {
            const [expr, alias] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.SelectItem,
                expr,
                alias: (alias == undefined ?
                    undefined :
                    alias[1][0]),
            };
        } },
    {"name": "SelectOption", "symbols": [SQL_NO_CACHE], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                sqlCache: false,
            };
        } },
    {"name": "SelectOption", "symbols": [SQL_CACHE], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                sqlCache: true,
            };
        } },
    {"name": "SelectOption", "symbols": [STRAIGHT_JOIN], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                straightJoin: true,
            };
        } },
    {"name": "SelectOption", "symbols": [HIGH_PRIORITY], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                highPriority: true,
            };
        } },
    {"name": "SelectOption", "symbols": [DISTINCT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                distinct: true,
            };
        } },
    {"name": "SelectOption", "symbols": [DISTINCTROW], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                distinct: true,
            };
        } },
    {"name": "SelectOption", "symbols": [SQL_SMALL_RESULT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                sqlSmallResult: true,
            };
        } },
    {"name": "SelectOption", "symbols": [SQL_BIG_RESULT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                sqlBigResult: true,
            };
        } },
    {"name": "SelectOption", "symbols": [SQL_BUFFER_RESULT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                sqlBufferResult: true,
            };
        } },
    {"name": "SelectOption", "symbols": [SQL_CALC_FOUND_ROWS], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                sqlCalcFoundRows: true,
            };
        } },
    {"name": "SelectOption", "symbols": [ALL], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                distinct: false,
            };
        } },
    {"name": "SelectOptions$ebnf$1", "symbols": []},
    {"name": "SelectOptions$ebnf$1$subexpression$1", "symbols": ["SelectOption"]},
    {"name": "SelectOptions$ebnf$1", "symbols": ["SelectOptions$ebnf$1", "SelectOptions$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "SelectOptions", "symbols": ["SelectOptions$ebnf$1"], "postprocess":  (data) => {
            const arr = data
                .flat(3)
                .filter((item) => {
                if (item == undefined) {
                    return false;
                }
                if ("tokenKind" in item) {
                    return false;
                }
                return true;
            });
            const result = {
                distinct: undefined,
                highPriority: false,
                straightJoin: false,
                sqlSmallResult: false,
                sqlBigResult: false,
                sqlBufferResult: false,
                sqlCache: undefined,
                sqlCalcFoundRows: false,
            };
            const syntacticErrors = [];
            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                if ("distinct" in item) {
                    if (result.distinct !== undefined && result.distinct !== item.distinct) {
                        syntacticErrors.push(parse_util_2.makeDiagnosticAt(item.start, item.end, [], diagnostic_messages_1.DiagnosticMessages.CannotUseDistinctAndAllAtTheSameTime));
                    }
                }
                if ("sqlCache" in item) {
                    if (result.sqlCache !== undefined && result.sqlCache !== item.sqlCache) {
                        syntacticErrors.push(parse_util_2.makeDiagnosticAt(item.start, item.end, [], diagnostic_messages_1.DiagnosticMessages.CannotUseSqlCacheAndSqlNoCacheAtTheSameTime));
                    }
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        result[k] = item[k];
                        break;
                    }
                }
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.SelectOptions,
                ...result,
                syntacticErrors: (syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined),
            };
        } },
    {"name": "SelectStatement$subexpression$1", "symbols": ["Select"]},
    {"name": "SelectStatement$subexpression$1", "symbols": ["ParenthesizedSelect"]},
    {"name": "SelectStatement$subexpression$1", "symbols": ["Union"]},
    {"name": "SelectStatement$subexpression$1", "symbols": ["UnionOrderLimit"]},
    {"name": "SelectStatement", "symbols": ["SelectStatement$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "Select$subexpression$1", "symbols": ["AsteriskSelectItem"]},
    {"name": "Select$subexpression$1", "symbols": ["TableAsteriskSelectItem"]},
    {"name": "Select$subexpression$1", "symbols": ["SelectItem"]},
    {"name": "Select$ebnf$1", "symbols": []},
    {"name": "Select$ebnf$1$subexpression$1$subexpression$1", "symbols": ["AsteriskSelectItem"]},
    {"name": "Select$ebnf$1$subexpression$1$subexpression$1", "symbols": ["TableAsteriskSelectItem"]},
    {"name": "Select$ebnf$1$subexpression$1$subexpression$1", "symbols": ["SelectItem"]},
    {"name": "Select$ebnf$1$subexpression$1", "symbols": [Comma, "Select$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "Select$ebnf$1", "symbols": ["Select$ebnf$1", "Select$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Select$ebnf$2", "symbols": ["IntoClause"], "postprocess": id},
    {"name": "Select$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "Select$ebnf$3", "symbols": ["FromClause"], "postprocess": id},
    {"name": "Select$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "Select$ebnf$4", "symbols": ["WhereClause"], "postprocess": id},
    {"name": "Select$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "Select$ebnf$5", "symbols": ["GroupByClause"], "postprocess": id},
    {"name": "Select$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "Select$ebnf$6", "symbols": ["HavingClause"], "postprocess": id},
    {"name": "Select$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "Select$ebnf$7", "symbols": ["OrderExprList"], "postprocess": id},
    {"name": "Select$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "Select$ebnf$8", "symbols": ["Limit"], "postprocess": id},
    {"name": "Select$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "Select$ebnf$9", "symbols": ["ProcedureAnalyseClause"], "postprocess": id},
    {"name": "Select$ebnf$9", "symbols": [], "postprocess": () => null},
    {"name": "Select$ebnf$10", "symbols": ["IntoClause"], "postprocess": id},
    {"name": "Select$ebnf$10", "symbols": [], "postprocess": () => null},
    {"name": "Select$ebnf$11$subexpression$1$subexpression$1", "symbols": [FOR, UPDATE]},
    {"name": "Select$ebnf$11$subexpression$1", "symbols": ["Select$ebnf$11$subexpression$1$subexpression$1"]},
    {"name": "Select$ebnf$11$subexpression$1$subexpression$2", "symbols": [LOCK, IN, SHARE, MODE]},
    {"name": "Select$ebnf$11$subexpression$1", "symbols": ["Select$ebnf$11$subexpression$1$subexpression$2"]},
    {"name": "Select$ebnf$11", "symbols": ["Select$ebnf$11$subexpression$1"], "postprocess": id},
    {"name": "Select$ebnf$11", "symbols": [], "postprocess": () => null},
    {"name": "Select", "symbols": [SELECT, "SelectOptions", "Select$subexpression$1", "Select$ebnf$1", "Select$ebnf$2", "Select$ebnf$3", "Select$ebnf$4", "Select$ebnf$5", "Select$ebnf$6", "Select$ebnf$7", "Select$ebnf$8", "Select$ebnf$9", "Select$ebnf$10", "Select$ebnf$11"], "postprocess":  (data) => {
            const [, selectOptions, firstSelectItem, trailingSelectItems, intoClauseA, fromClause, whereClause, groupByClause, havingClause, order, limit, procedureAnalyseClause, intoClauseB, rawSelectLockType,] = data;
            const selectLockType = (rawSelectLockType == undefined ?
                undefined :
                parse_util_1.toValueNode((rawSelectLockType[0][0].tokenKind == scanner_1.TokenKind.FOR ?
                    parser_node_1.SelectLockType.FOR_UPDATE :
                    parser_node_1.SelectLockType.LOCK_IN_SHARE_MODE), parse_util_1.getTextRange(rawSelectLockType)));
            /**
             * Hack to resolve ambiguities related to `INTO` clause.
             */
            const [preIntoClause, postIntoClause] = ((intoClauseA == undefined &&
                intoClauseB != undefined &&
                [fromClause, whereClause, groupByClause, havingClause, order, limit, procedureAnalyseClause]
                    .every(item => item == undefined)) ?
                [intoClauseB, undefined] :
                [intoClauseA, intoClauseB]);
            const selectItems = parse_util_1.toNodeArray([...firstSelectItem, ...trailingSelectItems]
                .flat(2)
                .filter((item) => {
                return "syntaxKind" in item;
            }), parser_node_1.SyntaxKind.SelectItemList, parse_util_1.getTextRange([firstSelectItem, trailingSelectItems]));
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.Select,
                parenthesized: false,
                selectOptions,
                selectItems,
                preIntoClause: preIntoClause !== null && preIntoClause !== void 0 ? preIntoClause : undefined,
                fromClause: fromClause !== null && fromClause !== void 0 ? fromClause : undefined,
                whereClause: whereClause !== null && whereClause !== void 0 ? whereClause : undefined,
                groupByClause: groupByClause !== null && groupByClause !== void 0 ? groupByClause : undefined,
                havingClause: havingClause !== null && havingClause !== void 0 ? havingClause : undefined,
                order: order !== null && order !== void 0 ? order : undefined,
                limit: limit !== null && limit !== void 0 ? limit : undefined,
                procedureAnalyseClause: procedureAnalyseClause !== null && procedureAnalyseClause !== void 0 ? procedureAnalyseClause : undefined,
                postIntoClause: postIntoClause !== null && postIntoClause !== void 0 ? postIntoClause : undefined,
                selectLockType,
            };
        } },
    {"name": "ParenthesizedSelect", "symbols": [OpenParentheses, "ParenthesizedSelect", CloseParentheses], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "ParenthesizedSelect", "symbols": [OpenParentheses, "Select", CloseParentheses], "postprocess":  (data) => {
            return {
                ...data[1],
                parenthesized: true,
            };
        } },
    {"name": "TableAsteriskSelectItem", "symbols": ["TableIdentifier", Dot, Asterisk], "postprocess":  (data) => {
            const [tableIdentifier] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.TableAsteriskSelectItem,
                tableIdentifier,
            };
        } },
    {"name": "UnionOrderLimit_Helper$ebnf$1", "symbols": ["Limit"], "postprocess": id},
    {"name": "UnionOrderLimit_Helper$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "UnionOrderLimit_Helper", "symbols": ["OrderExprList", "UnionOrderLimit_Helper$ebnf$1"], "postprocess":  (data) => {
            const [order, limit,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.UnionOrderLimit,
                order,
                limit: limit !== null && limit !== void 0 ? limit : undefined,
            };
        } },
    {"name": "UnionOrderLimit_Helper", "symbols": ["Limit"], "postprocess":  (data) => {
            const [limit,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.UnionOrderLimit,
                order: undefined,
                limit,
            };
        } },
    {"name": "UnionOrderLimit", "symbols": ["ParenthesizedSelect", "UnionOrderLimit_Helper"], "postprocess":  (data) => {
            const [select, helper,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.UnionOrderLimit,
                select,
                order: helper.order,
                limit: helper.limit,
            };
        } },
    {"name": "UnionOrderLimit$subexpression$1", "symbols": ["Union"]},
    {"name": "UnionOrderLimit$subexpression$1", "symbols": ["Select"]},
    {"name": "UnionOrderLimit$subexpression$1", "symbols": ["ParenthesizedSelect"]},
    {"name": "UnionOrderLimit$ebnf$1$subexpression$1", "symbols": [ALL]},
    {"name": "UnionOrderLimit$ebnf$1$subexpression$1", "symbols": [DISTINCT]},
    {"name": "UnionOrderLimit$ebnf$1", "symbols": ["UnionOrderLimit$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "UnionOrderLimit$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "UnionOrderLimit", "symbols": ["UnionOrderLimit$subexpression$1", UNION, "UnionOrderLimit$ebnf$1", "ParenthesizedSelect", "UnionOrderLimit_Helper"], "postprocess":  (data) => {
            const [lhs, unionToken, distinct, rhs, helper,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.UnionOrderLimit,
                select: {
                    ...parse_util_1.getTextRange([lhs, rhs]),
                    syntaxKind: parser_node_1.SyntaxKind.Union,
                    distinct: (distinct == undefined ?
                        {
                            start: unionToken.end,
                            end: unionToken.end,
                            syntaxKind: parser_node_1.SyntaxKind.Value,
                            value: true,
                        } :
                        {
                            ...parse_util_1.getTextRange(distinct[0]),
                            syntaxKind: parser_node_1.SyntaxKind.Value,
                            value: distinct[0].tokenKind == scanner_1.TokenKind.DISTINCT,
                        }),
                    lhs: lhs[0],
                    rhs,
                },
                order: helper.order,
                limit: helper.limit,
            };
        } },
    {"name": "ParenthesizedUnion_UnionOrderLimit", "symbols": ["ParenthesizedUnion", "UnionOrderLimit_Helper"], "postprocess":  (data) => {
            const [select, helper,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.UnionOrderLimit,
                select,
                order: helper.order,
                limit: helper.limit,
            };
        } },
    {"name": "Union$subexpression$1", "symbols": ["Select"]},
    {"name": "Union$subexpression$1", "symbols": ["ParenthesizedSelect"]},
    {"name": "Union$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [ALL]},
    {"name": "Union$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [DISTINCT]},
    {"name": "Union$ebnf$1$subexpression$1$ebnf$1", "symbols": ["Union$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Union$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Union$ebnf$1$subexpression$1$subexpression$1", "symbols": ["Select"]},
    {"name": "Union$ebnf$1$subexpression$1$subexpression$1", "symbols": ["ParenthesizedSelect"]},
    {"name": "Union$ebnf$1$subexpression$1", "symbols": [UNION, "Union$ebnf$1$subexpression$1$ebnf$1", "Union$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "Union$ebnf$1", "symbols": ["Union$ebnf$1$subexpression$1"]},
    {"name": "Union$ebnf$1$subexpression$2$ebnf$1$subexpression$1", "symbols": [ALL]},
    {"name": "Union$ebnf$1$subexpression$2$ebnf$1$subexpression$1", "symbols": [DISTINCT]},
    {"name": "Union$ebnf$1$subexpression$2$ebnf$1", "symbols": ["Union$ebnf$1$subexpression$2$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Union$ebnf$1$subexpression$2$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Union$ebnf$1$subexpression$2$subexpression$1", "symbols": ["Select"]},
    {"name": "Union$ebnf$1$subexpression$2$subexpression$1", "symbols": ["ParenthesizedSelect"]},
    {"name": "Union$ebnf$1$subexpression$2", "symbols": [UNION, "Union$ebnf$1$subexpression$2$ebnf$1", "Union$ebnf$1$subexpression$2$subexpression$1"]},
    {"name": "Union$ebnf$1", "symbols": ["Union$ebnf$1", "Union$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Union", "symbols": ["Union$subexpression$1", "Union$ebnf$1"], "postprocess":  (data) => {
            const first = data[0][0];
            const trailing = data[1].map(item => {
                return {
                    ...parse_util_1.getTextRange(item),
                    distinct: (item[1] == undefined ?
                        {
                            start: item[0].end,
                            end: item[0].end,
                            syntaxKind: parser_node_1.SyntaxKind.Value,
                            value: true,
                        } :
                        {
                            ...parse_util_1.getTextRange(item[1][0]),
                            syntaxKind: parser_node_1.SyntaxKind.Value,
                            value: item[1][0].tokenKind == scanner_1.TokenKind.DISTINCT,
                        }),
                    rhs: item[2][0],
                };
            });
            const second = trailing.shift();
            let result = {
                ...parse_util_1.getTextRange([first, second]),
                syntaxKind: parser_node_1.SyntaxKind.Union,
                distinct: second.distinct,
                lhs: first,
                rhs: second.rhs,
            };
            for (const item of trailing) {
                result = {
                    ...parse_util_1.getTextRange([result, item]),
                    syntaxKind: parser_node_1.SyntaxKind.Union,
                    distinct: item.distinct,
                    lhs: result,
                    rhs: item.rhs,
                };
            }
            return result;
        } },
    {"name": "ParenthesizedUnion", "symbols": [OpenParentheses, "ParenthesizedUnion", CloseParentheses], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "ParenthesizedUnion", "symbols": [OpenParentheses, "Union", CloseParentheses], "postprocess":  (data) => {
            return data[1];
        } },
    {"name": "WhereClause", "symbols": [WHERE, "Expression"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.WhereClause,
                expr: data[1],
            };
        } },
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateSchemaStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateTableStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateFunctionStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateProcedureStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateTriggerStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateEventStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateUserDefinedFunctionStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateViewStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateUserStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateLogFileGroupStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateTablespaceStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateServerStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateIndexStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["SelectStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateTableLikeStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateTableSelectStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["AlterTableStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["AlterTableStandaloneStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["AlterSchemaStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["AlterSchemaUpgradeDataDirectoryNameStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["AlterProcedureStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["AlterFunctionStatement"]},
    {"name": "NonDelimiterStatement", "symbols": ["NonDelimiterStatement$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "LeadingStatement$ebnf$1", "symbols": [CustomDelimiter], "postprocess": id},
    {"name": "LeadingStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "LeadingStatement", "symbols": ["NonDelimiterStatement", SemiColon, "LeadingStatement$ebnf$1"], "postprocess":  (data) => {
            var _a, _b;
            data[0].customDelimiter = (_b = (_a = data[2]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : undefined;
            return data[0];
        } },
    {"name": "LeadingStatement", "symbols": ["DelimiterStatement"], "postprocess": (data) => data[0]},
    {"name": "TrailingStatement$ebnf$1", "symbols": [SemiColon], "postprocess": id},
    {"name": "TrailingStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TrailingStatement$ebnf$2", "symbols": [CustomDelimiter], "postprocess": id},
    {"name": "TrailingStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "TrailingStatement", "symbols": ["NonDelimiterStatement", "TrailingStatement$ebnf$1", "TrailingStatement$ebnf$2"], "postprocess":  (data) => {
            var _a, _b;
            data[0].customDelimiter = (_b = (_a = data[2]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : undefined;
            return data[0];
        } },
    {"name": "TrailingStatement", "symbols": ["DelimiterStatement"], "postprocess": (data) => data[0]},
    {"name": "SourceFileLite$ebnf$1", "symbols": []},
    {"name": "SourceFileLite$ebnf$1", "symbols": ["SourceFileLite$ebnf$1", "LeadingStatement"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "SourceFileLite", "symbols": ["SourceFileLite$ebnf$1", "TrailingStatement"], "postprocess":  (data) => {
            const arr = data.flat(1);
            const statements = parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.SourceElementList, parse_util_1.getTextRange(data));
            return {
                start: statements.start,
                end: statements.end,
                syntaxKind: parser_node_1.SyntaxKind.SourceFileLite,
                statements,
            };
        } },
    {"name": "BlockStatement", "symbols": [BEGIN, "StoredProcedureStatementList", END], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.BlockStatement,
                statements: data[1],
            };
        } },
    {"name": "CloseStatement", "symbols": [CLOSE, "Identifier"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CloseStatement,
                cursorName: data[1],
            };
        } },
    {"name": "FetchStatement$ebnf$1$subexpression$1$subexpression$1", "symbols": [NEXT, FROM]},
    {"name": "FetchStatement$ebnf$1$subexpression$1", "symbols": ["FetchStatement$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "FetchStatement$ebnf$1$subexpression$1$subexpression$2", "symbols": [FROM]},
    {"name": "FetchStatement$ebnf$1$subexpression$1", "symbols": ["FetchStatement$ebnf$1$subexpression$1$subexpression$2"]},
    {"name": "FetchStatement$ebnf$1", "symbols": ["FetchStatement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "FetchStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "FetchStatement$ebnf$2", "symbols": []},
    {"name": "FetchStatement$ebnf$2$subexpression$1", "symbols": [Comma, "Identifier"]},
    {"name": "FetchStatement$ebnf$2", "symbols": ["FetchStatement$ebnf$2", "FetchStatement$ebnf$2$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "FetchStatement", "symbols": [FETCH, "FetchStatement$ebnf$1", "Identifier", INTO, "Identifier", "FetchStatement$ebnf$2"], "postprocess":  (data) => {
            const [, , cursorName, , firstIdentifier, trailingIdentifiers,] = data;
            const arr = [firstIdentifier, ...trailingIdentifiers]
                .flat(1)
                .filter((item) => {
                return "syntaxKind" in item;
            });
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.FetchStatement,
                cursorName,
                identifiers: parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.FetchIdentifierList, parse_util_1.getTextRange(arr)),
            };
        } },
    {"name": "ElseIf", "symbols": [ELSEIF, "Expression", THEN, "StoredProcedureStatementList"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ElseIf,
                elseIfToken: parse_util_1.toValueNode("ELSEIF", parse_util_1.getTextRange(data[0])),
                expr: data[1],
                statements: data[3],
            };
        } },
    {"name": "ElseIfList$ebnf$1", "symbols": ["ElseIf"]},
    {"name": "ElseIfList$ebnf$1", "symbols": ["ElseIfList$ebnf$1", "ElseIf"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ElseIfList", "symbols": ["ElseIfList$ebnf$1"], "postprocess":  (data) => {
            return parse_util_1.toNodeArray(data[0], parser_node_1.SyntaxKind.ElseIfList, parse_util_1.getTextRange(data));
        } },
    {"name": "ElseBranch", "symbols": [ELSE, "StoredProcedureStatementList"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ElseBranch,
                elseToken: parse_util_1.toValueNode("ELSE", parse_util_1.getTextRange(data[0])),
                statements: data[1],
            };
        } },
    {"name": "IfStatement$ebnf$1", "symbols": ["ElseIfList"], "postprocess": id},
    {"name": "IfStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IfStatement$ebnf$2", "symbols": ["ElseBranch"], "postprocess": id},
    {"name": "IfStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "IfStatement", "symbols": [IF, "Expression", THEN, "StoredProcedureStatementList", "IfStatement$ebnf$1", "IfStatement$ebnf$2", END, IF], "postprocess":  (data) => {
            const [, expr, , statements, elseIfs, elseBranch,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IfStatement,
                ifToken: parse_util_1.toValueNode("IF", parse_util_1.getTextRange(data[0])),
                expr,
                statements,
                elseIfs: elseIfs !== null && elseIfs !== void 0 ? elseIfs : undefined,
                elseBranch: elseBranch !== null && elseBranch !== void 0 ? elseBranch : undefined,
            };
        } },
    {"name": "IterateStatement", "symbols": [ITERATE, "LabelIdentifier"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IterateStatement,
                label: data[1],
            };
        } },
    {"name": "UnlabeledStatement$subexpression$1", "symbols": ["BlockStatement"]},
    {"name": "UnlabeledStatement$subexpression$1", "symbols": ["LoopStatement"]},
    {"name": "UnlabeledStatement$subexpression$1", "symbols": ["WhileStatement"]},
    {"name": "UnlabeledStatement$subexpression$1", "symbols": ["RepeatStatement"]},
    {"name": "UnlabeledStatement", "symbols": ["UnlabeledStatement$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "LabelStatement$ebnf$1", "symbols": ["LabelIdentifier"], "postprocess": id},
    {"name": "LabelStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "LabelStatement", "symbols": ["LabelIdentifier", Colon, "UnlabeledStatement", "LabelStatement$ebnf$1"], "postprocess":  (data) => {
            var _a;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.LabelStatement,
                beginLabel: data[0],
                statement: data[2],
                endLabel: (_a = data[3]) !== null && _a !== void 0 ? _a : undefined,
            };
        } },
    {"name": "LabelStatement$ebnf$2", "symbols": ["LabelIdentifier"], "postprocess": id},
    {"name": "LabelStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "LabelStatement", "symbols": ["UnlabeledStatement", "LabelStatement$ebnf$2"], "postprocess":  (data) => {
            var _a;
            if (data[1] == undefined) {
                return data[0];
            }
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.LabelStatement,
                beginLabel: undefined,
                statement: data[0],
                endLabel: (_a = data[1]) !== null && _a !== void 0 ? _a : undefined,
            };
        } },
    {"name": "LeaveStatement", "symbols": [LEAVE, "LabelIdentifier"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.LeaveStatement,
                label: data[1],
            };
        } },
    {"name": "LoopStatement", "symbols": [LOOP, "StoredProcedureStatementList", END, LOOP], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.LoopStatement,
                statements: data[1],
            };
        } },
    {"name": "OpenStatement", "symbols": [OPEN, "Identifier"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.OpenStatement,
                cursorName: data[1],
            };
        } },
    {"name": "RepeatStatement", "symbols": [REPEAT, "StoredProcedureStatementList", UNTIL, "Expression", END, REPEAT], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.RepeatStatement,
                statements: data[1],
                expr: data[3],
            };
        } },
    {"name": "ReturnStatement", "symbols": [RETURN, "Expression"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ReturnStatement,
                expr: data[1],
            };
        } },
    {"name": "SearchedWhen", "symbols": [WHEN, "Expression", THEN, "StoredProcedureStatementList"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.SearchedWhen,
                whenToken: parse_util_1.toValueNode("WHEN", parse_util_1.getTextRange(data[0])),
                expr: data[1],
                statements: data[3],
            };
        } },
    {"name": "SearchedWhenList$ebnf$1", "symbols": ["SearchedWhen"]},
    {"name": "SearchedWhenList$ebnf$1", "symbols": ["SearchedWhenList$ebnf$1", "SearchedWhen"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "SearchedWhenList", "symbols": ["SearchedWhenList$ebnf$1"], "postprocess":  (data) => {
            return parse_util_1.toNodeArray(data[0], parser_node_1.SyntaxKind.SearchedWhenList, parse_util_1.getTextRange(data));
        } },
    {"name": "SearchedCaseStatement$ebnf$1", "symbols": ["SearchedWhenList"], "postprocess": id},
    {"name": "SearchedCaseStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "SearchedCaseStatement$ebnf$2", "symbols": ["ElseBranch"], "postprocess": id},
    {"name": "SearchedCaseStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "SearchedCaseStatement", "symbols": [CASE, "SearchedCaseStatement$ebnf$1", "SearchedCaseStatement$ebnf$2", END, CASE], "postprocess":  (data) => {
            const [, searchedWhens, elseBranch,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.SearchedCaseStatement,
                caseToken: parse_util_1.toValueNode("CASE", parse_util_1.getTextRange(data[0])),
                searchedWhens: searchedWhens !== null && searchedWhens !== void 0 ? searchedWhens : undefined,
                elseBranch: elseBranch !== null && elseBranch !== void 0 ? elseBranch : undefined,
            };
        } },
    {"name": "SimpleWhen", "symbols": [WHEN, "Expression", THEN, "StoredProcedureStatementList"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.SimpleWhen,
                whenToken: parse_util_1.toValueNode("WHEN", parse_util_1.getTextRange(data[0])),
                expr: data[1],
                statements: data[3],
            };
        } },
    {"name": "SimpleWhenList$ebnf$1", "symbols": ["SimpleWhen"]},
    {"name": "SimpleWhenList$ebnf$1", "symbols": ["SimpleWhenList$ebnf$1", "SimpleWhen"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "SimpleWhenList", "symbols": ["SimpleWhenList$ebnf$1"], "postprocess":  (data) => {
            return parse_util_1.toNodeArray(data[0], parser_node_1.SyntaxKind.SimpleWhenList, parse_util_1.getTextRange(data));
        } },
    {"name": "SimpleCaseStatement$ebnf$1", "symbols": ["SimpleWhenList"], "postprocess": id},
    {"name": "SimpleCaseStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "SimpleCaseStatement$ebnf$2", "symbols": ["ElseBranch"], "postprocess": id},
    {"name": "SimpleCaseStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "SimpleCaseStatement", "symbols": [CASE, "Expression", "SimpleCaseStatement$ebnf$1", "SimpleCaseStatement$ebnf$2", END, CASE], "postprocess":  (data) => {
            const [, expr, simpleWhens, elseBranch,] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.SimpleCaseStatement,
                caseToken: parse_util_1.toValueNode("CASE", parse_util_1.getTextRange(data[0])),
                expr,
                simpleWhens: simpleWhens !== null && simpleWhens !== void 0 ? simpleWhens : undefined,
                elseBranch: elseBranch !== null && elseBranch !== void 0 ? elseBranch : undefined,
            };
        } },
    {"name": "StoredProcedureStatementList$ebnf$1", "symbols": []},
    {"name": "StoredProcedureStatementList$ebnf$1$subexpression$1", "symbols": ["StoredProcedureStatement", SemiColon]},
    {"name": "StoredProcedureStatementList$ebnf$1", "symbols": ["StoredProcedureStatementList$ebnf$1", "StoredProcedureStatementList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "StoredProcedureStatementList", "symbols": ["StoredProcedureStatementList$ebnf$1"], "postprocess":  (data) => {
            const arr = data[0].map(item => item[0]);
            return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.StoredProcedureStatementList, parse_util_1.getTextRange(data));
        } },
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["NonDelimiterStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["ReturnStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["LabelStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["IfStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["SimpleCaseStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["SearchedCaseStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["LeaveStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["IterateStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["OpenStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["CloseStatement"]},
    {"name": "StoredProcedureStatement$subexpression$1", "symbols": ["FetchStatement"]},
    {"name": "StoredProcedureStatement", "symbols": ["StoredProcedureStatement$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "WhileStatement", "symbols": [WHILE, "Expression", DO, "StoredProcedureStatementList", END, WHILE], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.WhileStatement,
                expr: data[1],
                statements: data[3],
            };
        } }
];

export var ParserStart: string = "Start";
