@preprocessor typescript

@{%
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

%}


Start ->
    SourceFileLite {% data => data[0] %}

BinaryDataType ->
    (%BINARY | %VARBINARY) FieldLength:? {% (data) => {
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
} %}

BitDataType ->
    %BIT FieldLength:? {% (data) => {
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
} %}

BlobDataType ->
    (%TINYBLOB | %BLOB | %MEDIUMBLOB | %LONGBLOB) {% (data) => {
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
} %}
    | %LONG %VARBINARY {% (data) => {
    return {
        syntaxKind: parser_node_1.SyntaxKind.BlobDataType,
        lengthBytes: 24,
        ...parse_util_1.getTextRange(data),
    };
} %}

BlobDataType ->
    %BLOB FieldLength {% (data) => {
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
} %}

BooleanDataType ->
    (%BOOL | %BOOLEAN) {% (data) => {
    return {
        syntaxKind: parser_node_1.SyntaxKind.BooleanDataType,
        ...parse_util_1.getTextRange(data),
    };
} %}

CharacterDataTypeModifier ->
    (((%CHARACTER %SET) | %CHARSET) CharacterSetName):? (%COLLATE (Identifier | StringLiteral)):? {% function ([characterSet, collate]) {
    return parse_util_1.processCharacterDataTypeModifier({
        characterSet: undefined,
        collate: undefined,
        ...parse_util_1.getTextRange([characterSet, collate]),
    }, {
        characterSet: characterSet === null || characterSet === void 0 ? void 0 : characterSet[1],
        collate: collate === null || collate === void 0 ? void 0 : collate[1][0],
    });
} %}
    | %ASCII {% function (data) {
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
} %}
    | ((%ASCII %BINARY) | (%BINARY %ASCII)) {% function (data) {
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
} %}
    | %UNICODE {% function (data) {
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
} %}
    | ((%UNICODE %BINARY) | (%BINARY %UNICODE)) {% function (data) {
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
} %}
    | %BYTE {% function (data) {
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
} %}
    | %BINARY {% function (data) {
    return {
        ...parse_util_1.getTextRange(data),
        characterSet: undefined,
        collate: undefined,
        binary: parse_util_1.getTextRange(data),
    };
} %}
    | ((%BINARY ((%CHARACTER %SET) | %CHARSET) CharacterSetName) | (((%CHARACTER %SET) | %CHARSET) CharacterSetName %BINARY)) {% function (data) {
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
} %}

VarCharStart ->
    %NATIONAL (%VARCHAR | %VARCHARACTER | (%CHAR %VARYING) | (%CHARACTER %VARYING)) {% function (data) {
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
} %}
    | %NCHAR (%VARYING | %VARCHAR) {% function (data) {
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
} %}
    | %NVARCHAR {% function (data) {
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
} %}
    | (%CHAR | %CHARACTER) %VARYING {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        variableLength: true,
        nationalCharacterSet: undefined,
    };
} %}
    | (%VARCHAR | %VARCHARACTER) {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        variableLength: true,
        nationalCharacterSet: undefined,
    };
} %}

CharStart ->
    %NATIONAL (%CHAR | %CHARACTER) {% function (data) {
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
} %}
    | %NCHAR {% function (data) {
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
} %}
    | (%CHAR | %CHARACTER) {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        variableLength: false,
        nationalCharacterSet: undefined,
    };
} %}

CharacterDataType ->
    (CharStart | VarCharStart) FieldLength:? CharacterDataTypeModifier {% (data) => {
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
} %}

DataType ->
    (BinaryDataType | BitDataType | BlobDataType | BooleanDataType | CharacterDataType | DateDataType | DateTimeDataType | DecimalDataType | EnumDataType | GeometryCollectionDataType | GeometryDataType | IntegerDataType | JsonDataType | RealDataType | SetDataType | TextDataType | TimeDataType | TimestampDataType | YearDataType) {% (data) => data[0][0] %}

DateDataType ->
    %DATE {% (data) => {
    return {
        syntaxKind: parser_node_1.SyntaxKind.DateDataType,
        ...parse_util_1.getTextRange(data),
    };
} %}

DateTimeDataType ->
    %DATETIME FieldLength:? {% (data) => {
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
} %}

DecimalDataType ->
    (%DECIMAL | %DEC | %NUMERIC | %FIXED) FieldLength IntegerDataTypeModifier {% function (data) {
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
} %}
    | (%DECIMAL | %DEC | %NUMERIC | %FIXED) DecimalPrecision IntegerDataTypeModifier {% function (data) {
    const [, precision, modifier] = data;
    const result = {
        syntaxKind: parser_node_1.SyntaxKind.DecimalDataType,
        precision,
        ...modifier,
        ...parse_util_1.getTextRange(data),
    };
    return result;
} %}
    | (%DECIMAL | %DEC | %NUMERIC | %FIXED) IntegerDataTypeModifier {% function (data) {
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
} %}

RealDataType ->
    (%REAL | %DOUBLE | (%DOUBLE %PRECISION)) RealPrecision:? IntegerDataTypeModifier {% function (data) {
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
} %}

EnumDataType ->
    %ENUM StringList CharacterDataTypeModifier {% (data) => {
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
} %}

RealDataType ->
    %FLOAT FieldLength IntegerDataTypeModifier {% function (data) {
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
} %}
    | %FLOAT RealPrecision IntegerDataTypeModifier {% function (data) {
    const [, precision, modifier] = data;
    const result = {
        syntaxKind: parser_node_1.SyntaxKind.RealDataType,
        bytes: 4,
        precision,
        ...modifier,
        ...parse_util_1.getTextRange(data),
    };
    return result;
} %}
    | %FLOAT IntegerDataTypeModifier {% function (data) {
    const [, modifier] = data;
    const result = {
        syntaxKind: parser_node_1.SyntaxKind.RealDataType,
        bytes: 4,
        precision: undefined,
        ...modifier,
        ...parse_util_1.getTextRange(data),
    };
    return result;
} %}

GeometryCollectionDataType ->
    (%MULTIPOINT | %MULTILINESTRING | %MULTIPOLYGON | %GEOMETRYCOLLECTION) {% (data) => {
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
} %}

GeometryDataType ->
    (%POINT | %LINESTRING | %POLYGON | %GEOMETRY) {% (data) => {
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
} %}

IntegerDataTypeModifier ->
    (%SIGNED | %UNSIGNED | %ZEROFILL):* {% function (data) {
    let integerDataTypeModifier = parse_util_1.createDefaultIntegerDataTypeModifier();
    for (const ele of data[0]) {
        integerDataTypeModifier = parse_util_1.processIntegerDataTypeModifier(integerDataTypeModifier, ele[0]);
    }
    return integerDataTypeModifier;
} %}

IntegerDataType ->
    (%TINYINT | %SMALLINT | %MEDIUMINT | %INT | %INTEGER | %BIGINT) (%OpenParentheses IntegerLiteral %CloseParentheses):? IntegerDataTypeModifier {% (data) => {
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
} %}

JsonDataType ->
    %JSON {% (data) => {
    return {
        syntaxKind: parser_node_1.SyntaxKind.JsonDataType,
        ...parse_util_1.getTextRange(data),
    };
} %}

SetDataType ->
    %SET StringList CharacterDataTypeModifier {% (data) => {
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
} %}

TextDataType ->
    (%TINYTEXT | %TEXT | %MEDIUMTEXT | %LONGTEXT) CharacterDataTypeModifier {% (data) => {
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
} %}
    | %LONG (%VARCHAR | (%CHAR %VARYING)):? CharacterDataTypeModifier {% (data) => {
    const [, , modifier] = data;
    return {
        syntaxKind: parser_node_1.SyntaxKind.TextDataType,
        lengthBytes: 24,
        characterSet: modifier.characterSet,
        collate: modifier.collate,
        binary: modifier.binary,
        ...parse_util_1.getTextRange(data),
    };
} %}

TextDataType ->
    %TEXT FieldLength CharacterDataTypeModifier {% (data) => {
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
} %}

TimeDataType ->
    %TIME FieldLength:? {% (data) => {
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
} %}

TimestampDataType ->
    %TIMESTAMP FieldLength:? {% (data) => {
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
} %}

YearDataType ->
    %YEAR FieldLength:? {% (data) => {
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
} %}

BitLiteral ->
    %BitLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.BitLiteral,
        value: data[0].value,
        sourceText: data[0].getTokenSourceText(),
    };
} %}

DecimalLiteral ->
    %DecimalLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.DecimalLiteral,
        value: data[0].value,
    };
} %}

Expression ->
    (IntegerLiteralOrDecimalLiteral | RealLiteral | StringLiteral | Identifier | ParamMarker | UserVariableIdentifier) {% (data) => {
    return data[0][0];
} %}

HexLiteral ->
    %HexLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.HexLiteral,
        value: data[0].value,
        sourceText: data[0].getTokenSourceText(),
    };
} %}

IntegerLiteralOrDecimalLiteral ->
    %IntegerLiteral {% (data) => {
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
} %}

IntegerLiteral ->
    %IntegerLiteral {% (data) => {
    const value = BigInt(data[0].value);
    const result = {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
        value,
    };
    return result;
} %}

ParamMarker ->
    %QuestionMark {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.ParamMarker,
    };
} %}

RealLiteral ->
    %RealLiteral {% (data) => {
    const result = {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.RealLiteral,
        value: parseFloat(data[0].value),
        sourceText: data[0].value,
    };
    return result;
} %}

StringLiteral ->
    %StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.StringLiteral,
        value: data[0].value,
        sourceText: data[0].getTokenSourceText(),
    };
} %}

UserVariableIdentifier ->
    %UserVariableIdentifier {% (data) => {
    const result = {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.UserVariableIdentifier,
        identifier: data[0].value,
        sourceText: data[0].getTokenSourceText(),
    };
    return result;
} %}

AccountIdentifier ->
    (Identifier | StringLiteral) UserVariableIdentifier:? {% (data) => {
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
} %}

AccountIdentifierOrCurrentUser ->
    AccountIdentifier {% (data) => {
    return data[0];
} %}
    | %CURRENT_USER (%OpenParentheses %CloseParentheses):? {% (data) => {
    return parse_util_1.toValueNode("CURRENT_USER", parse_util_1.getTextRange(data));
} %}

CharacterSetNameOrDefault ->
    Identifier {% function (data) {
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
} %}
    | StringLiteral {% function (data) {
    return data[0];
} %}

CharacterSetName ->
    Identifier {% function (data) {
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
} %}
    | StringLiteral {% function (data) {
    return data[0];
} %}



Identifier ->
    %KeywordOrIdentifier {% function (data) {
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
} %}

IdentifierAllowReserved ->
    %KeywordOrIdentifier {% function (data) {
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
} %}

ColumnIdentifier ->
    Identifier (%Dot IdentifierAllowReserved (%Dot IdentifierAllowReserved):?):? {% (data) => {
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
} %}

EventIdentifier ->
    Identifier (%Dot IdentifierAllowReserved):? {% (data) => {
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
} %}

LabelIdentifier ->
    Identifier {% function (data) {
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
} %}

StoredFunctionIdentifier ->
    Identifier (%Dot IdentifierAllowReserved):? {% (data) => {
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
} %}

StoredProcedureIdentifier ->
    Identifier (%Dot IdentifierAllowReserved):? {% (data) => {
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
} %}

TableIdentifier ->
    Identifier (%Dot IdentifierAllowReserved):? {% (data) => {
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
} %}

TriggerIdentifier ->
    Identifier (%Dot IdentifierAllowReserved):? {% (data) => {
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
} %}

Comment ->
    %COMMENT StringLiteral {% (data) => {
    return data[1];
} %}

Constraint ->
    %CONSTRAINT Identifier:? {% (data) => {
    var _a;
    return (_a = data[1]) !== null && _a !== void 0 ? _a : parse_util_1.getTextRange(data);
} %}



CurrentTimestamp ->
    %NowToken %OpenParentheses %CloseParentheses {% (data) => {
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
} %}
    | %CURRENT_TIMESTAMP (%OpenParentheses %CloseParentheses):? {% (data) => {
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
} %}
    | (%CURRENT_TIMESTAMP | %NowToken) FieldLength {% (data) => {
    const [, fractionalSecondPrecision] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.CurrentTimestamp,
        fractionalSecondPrecision,
    };
} %}

DefaultCharacterSet ->
    %DEFAULT:? ((%CHARACTER %SET) | %CHARSET) %Equal:? CharacterSetName {% (data) => {
    let [, , , characterSetName] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.DefaultCharacterSet,
        characterSetName: (characterSetName.syntaxKind == parser_node_1.SyntaxKind.StringLiteral ?
            characterSetName :
            characterSetName.quoted ?
                characterSetName :
                characterSetName.identifier.toUpperCase() == "DEFAULT" ?
                    undefined :
                    characterSetName),
    };
} %}

DefaultCollation ->
    %DEFAULT:? %COLLATE %Equal:? (Identifier | StringLiteral) {% (data) => {
    let [, , , [collationName]] = data;
    collationName = (collationName.syntaxKind == parser_node_1.SyntaxKind.StringLiteral ?
        {
            ...collationName,
            value: collationName.value.toLowerCase(),
        } :
        {
            ...collationName,
            identifier: collationName.identifier.toLowerCase(),
        });
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.DefaultCollation,
        collationName: (collationName.syntaxKind == parser_node_1.SyntaxKind.StringLiteral ?
            collationName :
            collationName.quoted ?
                collationName :
                collationName.identifier.toUpperCase() == "DEFAULT" ?
                    undefined :
                    collationName),
    };
} %}

ExpressionListList ->
    %OpenParentheses ExpressionList (%Comma ExpressionList):* %CloseParentheses {% (data) => {
    const [, first, more] = data;
    const arr = more
        .flat(1)
        .filter((x) => {
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.ExpressionListList, parse_util_1.getTextRange(data));
} %}

ExpressionList ->
    %OpenParentheses Expression (%Comma Expression):* %CloseParentheses {% (data) => {
    const [, first, more] = data;
    const arr = more
        .flat(1)
        .filter((x) => {
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.ExpressionList, parse_util_1.getTextRange(data));
} %}

FieldLength ->
    %OpenParentheses (IntegerLiteral | DecimalLiteral | RealLiteral) %CloseParentheses {% (data) => {
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
} %}

IdentifierList ->
    %OpenParentheses Identifier (%Comma Identifier):* %CloseParentheses {% (data) => {
    const [, first, more] = data;
    const arr = more
        .flat(1)
        .filter((x) => {
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.IdentifierList, parse_util_1.getTextRange(data));
} %}

IdentifierList_2OrMore ->
    %OpenParentheses Identifier (%Comma Identifier):+ %CloseParentheses {% (data) => {
    const [, first, more] = data;
    const arr = more
        .flat(1)
        .filter((x) => {
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.IdentifierList, parse_util_1.getTextRange(data));
} %}

Interval ->
    (%DAY | %WEEK | %HOUR | %MINUTE | %MONTH | %QUARTER | %SECOND | %MICROSECOND | %YEAR | %DAY_HOUR | %DAY_MICROSECOND | %DAY_MINUTE | %DAY_SECOND | %HOUR_MICROSECOND | %HOUR_MINUTE | %HOUR_SECOND | %MINUTE_MICROSECOND | %MINUTE_SECOND | %SECOND_MICROSECOND | %YEAR_MONTH) {% (data) => {
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
} %}

Precision ->
    %OpenParentheses (IntegerLiteral | DecimalLiteral | RealLiteral) %Comma (IntegerLiteral | DecimalLiteral | RealLiteral) %CloseParentheses {% (data) => {
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
} %}

RealPrecision ->
    Precision {% function (data) {
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
} %}

DecimalPrecision ->
    Precision {% function (data) {
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
} %}

StringList ->
    %OpenParentheses TextString (%Comma TextString):* %CloseParentheses {% (data) => {
    const [, first, more] = data;
    const arr = more
        .flat(1)
        .filter((x) => {
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.StringList, parse_util_1.getTextRange(data));
} %}

TableIdentifierList ->
    %OpenParentheses TableIdentifier (%Comma TableIdentifier):* %CloseParentheses {% (data) => {
    const [, first, more] = data;
    const arr = more
        .flat(1)
        .filter((x) => {
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.TableIdentifierList, parse_util_1.getTextRange(data));
} %}

TableIdentifierList_AllowEmpty ->
    %OpenParentheses (TableIdentifier (%Comma TableIdentifier):*):? %CloseParentheses {% (data) => {
    const arr = data
        .flat(3)
        .filter((x) => {
        if (x == undefined) {
            return false;
        }
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.TableIdentifierList, parse_util_1.getTextRange(data));
} %}

TextString ->
    (StringLiteral | HexLiteral | BitLiteral) {% (data) => {
    let [[literal]] = data;
    return literal;
} %}

CreateEventStatement ->
    %CREATE (%DEFINER %Equal AccountIdentifierOrCurrentUser):? %EVENT (%IF %NOT %EXISTS):? EventIdentifier %ON %SCHEDULE Schedule (%ON %COMPLETION %NOT:? %PRESERVE):? ((%ENABLE) | (%DISABLE) | (%DISABLE %ON %SLAVE)):? (%COMMENT StringLiteral):? %DO StoredProcedureStatement {% (data) => {
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
} %}

ExecuteAtSchedule ->
    %AT Expression {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.ExecuteAtSchedule,
        executeAt: data[1],
    };
} %}

IntervalSchedule ->
    %EVERY Expression Interval (%STARTS Expression):? (%ENDS Expression):? {% (data) => {
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
} %}

Schedule ->
    ExecuteAtSchedule {% (data) => {
    return data[0];
} %}
    | IntervalSchedule {% (data) => {
    return data[0];
} %}

CreateFunctionStatement ->
    %CREATE (%DEFINER %Equal AccountIdentifierOrCurrentUser):? %FUNCTION StoredFunctionIdentifier StoredFunctionParameterList %RETURNS DataType StoredProcedureCharacteristics StoredProcedureStatement {% (data) => {
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
} %}

CreateProcedureStatement ->
    %CREATE (%DEFINER %Equal AccountIdentifierOrCurrentUser):? %PROCEDURE StoredProcedureIdentifier StoredProcedureParameterList StoredProcedureCharacteristics StoredProcedureStatement {% (data) => {
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
} %}

CreateUserDefinedFunctionStatement ->
    %CREATE %AGGREGATE:? %FUNCTION Identifier %RETURNS (%STRING | %INTEGER | %REAL | %DECIMAL) %SONAME StringLiteral {% (data) => {
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
} %}

StoredFunctionParameter ->
    Identifier DataType {% (data) => {
    const [identifier, dataType,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.StoredFunctionParameter,
        identifier,
        dataType,
    };
} %}

StoredFunctionParameterList ->
    %OpenParentheses (StoredFunctionParameter (%Comma StoredFunctionParameter):*):? %CloseParentheses {% (data) => {
    const arr = data
        .flat(3)
        .filter((item) => {
        if (item == undefined) {
            return false;
        }
        return "syntaxKind" in item;
    });
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.StoredFunctionParameterList, parse_util_1.getTextRange(data));
} %}

StoredProcedureCharacteristic ->
    %DETERMINISTIC {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        deterministic: parse_util_1.toValueNode(true, parse_util_1.getTextRange(data)),
    };
} %}
    | %NOT %DETERMINISTIC {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        deterministic: parse_util_1.toValueNode(false, parse_util_1.getTextRange(data)),
    };
} %}
    | %COMMENT StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        comment: data[1],
    };
} %}
    | %LANGUAGE %SQL {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        language: parse_util_1.toValueNode("SQL", parse_util_1.getTextRange(data)),
    };
} %}
    | %NO %SQL {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        databaseAccessCharacteristic: parse_util_1.toValueNode(parser_node_1.DatabaseAccessCharacteristic.NO_SQL, parse_util_1.getTextRange(data)),
    };
} %}
    | %CONTAINS %SQL {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        databaseAccessCharacteristic: parse_util_1.toValueNode(parser_node_1.DatabaseAccessCharacteristic.CONTAINS_SQL, parse_util_1.getTextRange(data)),
    };
} %}
    | %READS %SQL %DATA {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        databaseAccessCharacteristic: parse_util_1.toValueNode(parser_node_1.DatabaseAccessCharacteristic.READS_SQL_DATA, parse_util_1.getTextRange(data)),
    };
} %}
    | %MODIFIES %SQL %DATA {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        databaseAccessCharacteristic: parse_util_1.toValueNode(parser_node_1.DatabaseAccessCharacteristic.MODIFIES_SQL_DATA, parse_util_1.getTextRange(data)),
    };
} %}
    | %SQL %SECURITY %DEFINER {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        storedProcedureSecurityContext: parse_util_1.toValueNode(parser_node_1.StoredProcedureSecurityContext.DEFINER, parse_util_1.getTextRange(data)),
    };
} %}
    | %SQL %SECURITY %INVOKER {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        storedProcedureSecurityContext: parse_util_1.toValueNode(parser_node_1.StoredProcedureSecurityContext.INVOKER, parse_util_1.getTextRange(data)),
    };
} %}

StoredProcedureCharacteristics ->
    StoredProcedureCharacteristic:* {% (data) => {
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
} %}

StoredProcedureParameter ->
    (%IN | %OUT | %INOUT):? Identifier DataType {% (data) => {
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
} %}

StoredProcedureParameterList ->
    %OpenParentheses (StoredProcedureParameter (%Comma StoredProcedureParameter):*):? %CloseParentheses {% (data) => {
    const arr = data
        .flat(3)
        .filter((item) => {
        if (item == undefined) {
            return false;
        }
        return "syntaxKind" in item;
    });
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.StoredProcedureParameterList, parse_util_1.getTextRange(data));
} %}

CreateSchemaOptionList ->
    (DefaultCharacterSet | DefaultCollation):* {% (data) => {
    return parse_util_1.toNodeArray(data.flat(2), parser_node_1.SyntaxKind.CreateSchemaOptionList, parse_util_1.getTextRange(data));
} %}

CreateSchemaStatement ->
    %CREATE (%SCHEMA | %DATABASE) (%IF %NOT %EXISTS):? Identifier CreateSchemaOptionList {% (data) => {
    const [, , ifNotExists, identifier, createSchemaOptions] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.CreateSchemaStatement,
        schemaName: identifier,
        ifNotExists: ifNotExists != undefined,
        createSchemaOptions,
    };
} %}

CheckDefinition ->
    Constraint:? %CHECK %OpenParentheses Expression %CloseParentheses {% (data) => {
    const [constraintName, , , expr,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.CheckDefinition,
        constraintName: (constraintName != undefined && "syntaxKind" in constraintName ?
            constraintName :
            undefined),
        expr,
    };
} %}

ColumnCheckDefinition ->
    CheckDefinition {% (data) => {
    const [checkDefinition] = data;
    if (checkDefinition.constraintName != undefined) {
        parse_util_1.pushSyntacticErrorAt(checkDefinition.constraintName, checkDefinition.constraintName.start, checkDefinition.constraintName.end, [], diagnostic_messages_1.DiagnosticMessages.UnexpectedSyntaxKind, "CONSTRAINT");
    }
    return checkDefinition;
} %}

CreateTableDefinition ->
    (ColumnDefinition | IndexDefinition | CheckDefinition | PrimaryKeyDefinition | ForeignKeyDefinition) {% (data) => data[0][0] %}

CreateTableDefinitionList ->
    %OpenParentheses CreateTableDefinition (%Comma CreateTableDefinition):* %CloseParentheses {% (data) => {
    const [, first, more] = data;
    const arr = more
        .flat(1)
        .filter((x) => {
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.CreateTableDefinitionList, parse_util_1.getTextRange(data));
} %}

ForeignKeyDefinition ->
    Constraint:? %FOREIGN %KEY Identifier:? IdentifierList ForeignKeyReferenceDefinition {% function (data) {
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
} %}

ReferenceOption ->
    ((%RESTRICT) | (%CASCADE) | (%SET %NULL) | (%NO %ACTION) | (%SET %DEFAULT)) {% (data) => {
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
} %}

OnUpdateDelete ->
    %ON %UPDATE ReferenceOption (%ON %DELETE ReferenceOption):? {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        onUpdate: data[2].referenceOption,
        onDelete: (data[3] == undefined ?
            undefined :
            data[3][2].referenceOption),
    };
} %}
    | %ON %DELETE ReferenceOption (%ON %UPDATE ReferenceOption):? {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        onDelete: data[2].referenceOption,
        onUpdate: (data[3] == undefined ?
            undefined :
            data[3][2].referenceOption),
    };
} %}

ForeignKeyReferenceDefinition ->
    %REFERENCES TableIdentifier IdentifierList ((%MATCH %FULL) | (%MATCH %PARTIAL) | (%MATCH %SIMPLE)):? OnUpdateDelete:? {% (data) => {
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
} %}

IndexDefinition ->
    (%FULLTEXT | %SPATIAL) ((Identifier) | ((%INDEX | %KEY) Identifier)):? IndexPartList IndexOption {% function (data) {
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
} %}

ColumnDefinition ->
    ColumnIdentifier DataType GeneratedDefinition ColumnDefinitionModifier {% function (data) {
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
} %}
    | ColumnIdentifier %SERIAL GeneratedDefinition ColumnDefinitionModifier {% function (data) {
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
} %}

GeneratedDefinition ->
    (%GENERATED %ALWAYS):? %AS %OpenParentheses Expression %CloseParentheses (%VIRTUAL | %STORED):? {% (data) => {
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
} %}

IndexDefinition ->
    (%INDEX | %KEY) Identifier:? IndexType:? IndexPartList IndexOption {% function (data) {
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
} %}

IndexOptionElement ->
    ((%KEY_BLOCK_SIZE %Equal:? IntegerLiteral) | IndexType | (%WITH %PARSER Identifier) | Comment) {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        data: data[0][0],
    };
} %}

IndexOption ->
    IndexOptionElement:* {% (data) => {
    let indexOption = parse_util_1.createDefaultIndexOption();
    for (const ele of data[0]) {
        indexOption = parse_util_1.processIndexOption(indexOption, ele.data);
    }
    return indexOption;
} %}

IndexPart ->
    Identifier (%OpenParentheses IntegerLiteral %CloseParentheses):? (%ASC | %DESC):? {% (data) => {
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
} %}

IndexPartList ->
    %OpenParentheses IndexPart (%Comma IndexPart):* %CloseParentheses {% (data) => {
    const [, first, more] = data;
    const arr = more
        .flat(1)
        .filter((x) => {
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.IndexPartList, parse_util_1.getTextRange(data));
} %}

IndexType ->
    %USING (%BTREE | %HASH) {% (data) => {
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
} %}

ColumnModifierElement ->
    (%AUTO_INCREMENT | (%COLUMN_FORMAT (%FIXED | %DYNAMIC | %DEFAULT)) | (%STORAGE (%DISK | %MEMORY | %DEFAULT)) | (%DEFAULT Expression) | %NULL | (%NOT %NULL) | %UNIQUE | %UNIQUE_KEY | (%PRIMARY:? %KEY) | (%COMMENT StringLiteral) | (%SERIAL %DEFAULT %VALUE) | (%ON %UPDATE CurrentTimestamp)) {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        data: data[0][0],
    };
} %}

ColumnDefinitionModifier ->
    ColumnModifierElement:* (ColumnCheckDefinition | ForeignKeyReferenceDefinition):? {% (data) => {
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
} %}

ColumnDefinition ->
    ColumnIdentifier DataType ColumnDefinitionModifier {% (data) => {
    const [columnIdentifier, dataType, modifier] = data;
    return {
        syntaxKind: parser_node_1.SyntaxKind.ColumnDefinition,
        columnIdentifier,
        dataType,
        generated: undefined,
        ...modifier,
        ...parse_util_1.getTextRange(data),
    };
} %}
    | ColumnIdentifier %SERIAL ColumnDefinitionModifier {% (data) => {
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
} %}

PrimaryKeyDefinition ->
    Constraint:? %PRIMARY %KEY Identifier:? IndexType:? IndexPartList IndexOption {% function (data) {
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
} %}

IndexDefinition ->
    Constraint:? %UNIQUE ((Identifier) | ((%INDEX | %KEY) Identifier)):? IndexType:? IndexPartList IndexOption {% function (data) {
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
} %}
    | Constraint:? %UNIQUE_KEY Identifier:? IndexType:? IndexPartList IndexOption {% function (data) {
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
} %}

CreateTableOption ->
    %ENGINE %Equal:? (Identifier | StringLiteral) {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        engine: data[2][0],
    };
} %}
    | %MAX_ROWS %Equal:? IntegerLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        maxRows: data[2],
    };
} %}
    | %MIN_ROWS %Equal:? IntegerLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        minRows: data[2],
    };
} %}
    | %AVG_ROW_LENGTH %Equal:? IntegerLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        averageRowLength: data[2],
    };
} %}
    | %PASSWORD %Equal:? StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        password: data[2],
    };
} %}
    | %COMMENT %Equal:? StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        comment: data[2],
    };
} %}
    | %COMPRESSION %Equal:? StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        compression: data[2],
    };
} %}
    | %ENCRYPTION %Equal:? StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        encryption: data[2],
    };
} %}
    | %AUTO_INCREMENT %Equal:? IntegerLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        autoIncrement: data[2],
    };
} %}
    | %PACK_KEYS %Equal:? (IntegerLiteral | %DEFAULT) {% (data) => {
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
} %}
    | %STATS_AUTO_RECALC %Equal:? (IntegerLiteral | %DEFAULT) {% (data) => {
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
} %}
    | %STATS_PERSISTENT %Equal:? (IntegerLiteral | %DEFAULT) {% (data) => {
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
} %}
    | %STATS_SAMPLE_PAGES %Equal:? (IntegerLiteral | %DEFAULT) {% (data) => {
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
} %}
    | (%TABLE_CHECKSUM | %CHECKSUM) %Equal:? IntegerLiteral {% (data) => {
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
} %}
    | %DELAY_KEY_WRITE %Equal:? IntegerLiteral {% (data) => {
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
} %}
    | %ROW_FORMAT %Equal:? (%DEFAULT | %FIXED | %DYNAMIC | %COMPRESSED | %REDUNDANT | %COMPACT) {% (data) => {
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
} %}
    | %UNION %Equal:? TableIdentifierList_AllowEmpty {% (data) => {
    const union = data[2];
    const result = {
        ...parse_util_1.getTextRange(data),
        union,
    };
    return result;
} %}
    | DefaultCharacterSet {% (data) => {
    const defaultCharacterSet = data[0];
    const result = {
        ...parse_util_1.getTextRange(data),
        defaultCharacterSet,
    };
    return result;
} %}
    | DefaultCollation {% (data) => {
    const defaultCollation = data[0];
    const result = {
        ...parse_util_1.getTextRange(data),
        defaultCollation,
    };
    return result;
} %}
    | %INSERT_METHOD %Equal:? (%NO | %FIRST | %LAST) {% (data) => {
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
} %}
    | %DATA %DIRECTORY %Equal:? StringLiteral {% (data) => {
    const dataDirectory = data[3];
    const result = {
        ...parse_util_1.getTextRange(data),
        dataDirectory,
    };
    return result;
} %}
    | %INDEX %DIRECTORY %Equal:? StringLiteral {% (data) => {
    const indexDirectory = data[3];
    const result = {
        ...parse_util_1.getTextRange(data),
        indexDirectory,
    };
    return result;
} %}
    | %TABLESPACE %Equal:? Identifier {% (data) => {
    const tablespace = data[2];
    const result = {
        ...parse_util_1.getTextRange(data),
        tablespace,
    };
    return result;
} %}
    | %STORAGE (%DISK | %MEMORY) {% (data) => {
    const storage = (data[1][0].tokenKind == scanner_1.TokenKind.DISK ?
        parser_node_1.Storage.DISK :
        parser_node_1.Storage.MEMORY);
    const result = {
        ...parse_util_1.getTextRange(data),
        storage,
    };
    return result;
} %}
    | %CONNECTION %Equal:? StringLiteral {% (data) => {
    const connection = data[2];
    const result = {
        ...parse_util_1.getTextRange(data),
        connection,
    };
    return result;
} %}
    | %KEY_BLOCK_SIZE %Equal:? IntegerLiteral {% (data) => {
    const keyBlockSize = data[2];
    const result = {
        ...parse_util_1.getTextRange(data),
        keyBlockSize,
    };
    return result;
} %}

CreateTableOptions ->
    (CreateTableOption (%Comma:? CreateTableOption):*):? {% (data) => {
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
} %}

CreateTableStatement ->
    %CREATE %TEMPORARY:? %TABLE (%IF %NOT %EXISTS):? TableIdentifier CreateTableDefinitionList CreateTableOptions Partition:? {% (data) => {
    const [, temporary, , ifNotExists, tableIdentifier, createTableDefinitions, createTableOptions, partition] = data;
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
} %}

CreateTriggerStatement ->
    %CREATE (%DEFINER %Equal AccountIdentifierOrCurrentUser):? %TRIGGER TriggerIdentifier (%BEFORE | %AFTER) (%INSERT | %UPDATE | %DELETE) %ON TableIdentifier %FOR %EACH %ROW TriggerOrder:? StoredProcedureStatement {% (data) => {
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
} %}

TriggerOrder ->
    (%FOLLOWS | %PRECEDES) (Identifier | StringLiteral) {% (data) => {
    const [triggerActionOrder, otherTriggerName,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.TriggerOrder,
        triggerActionOrder: parse_util_1.toValueNode((triggerActionOrder[0].tokenKind == scanner_1.TokenKind.FOLLOWS ?
            parser_node_1.TriggerActionOrder.FOLLOWS :
            parser_node_1.TriggerActionOrder.PRECEDES), parse_util_1.getTextRange(triggerActionOrder)),
        otherTriggerName: otherTriggerName[0],
    };
} %}

CreateViewStatement ->
    %CREATE (%OR %REPLACE):? (%ALGORITHM %Equal (%UNDEFINED | %MERGE | %TEMPTABLE)):? (%DEFINER %Equal AccountIdentifierOrCurrentUser):? (%SQL %SECURITY (%DEFINER | %INVOKER)):? %VIEW TableIdentifier IdentifierList:? %AS SelectStatement (%WITH (%CASCADED | %LOCAL):? %CHECK %OPTION):? {% (data) => {
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
} %}

DelimiterStatement ->
    %DELIMITER_STATEMENT %CustomDelimiter {% (data) => {
    const [identifier, customDelimiter] = data;
    return {
        start: identifier.start,
        end: customDelimiter.end,
        syntaxKind: parser_node_1.SyntaxKind.DelimiterStatement,
        customDelimiter: customDelimiter.value,
    };
} %}

DerivedTableFactorSelect ->
    %OpenParentheses DerivedTableFactorSelect %CloseParentheses {% (data) => {
    return data[1];
} %}
    | %OpenParentheses (Select | Union | UnionOrderLimit | ParenthesizedUnion_UnionOrderLimit) %CloseParentheses {% (data) => {
    return data[1][0];
} %}

DerivedTableFactor ->
    DerivedTableFactorSelect TableAlias {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.DerivedTableFactor,
        select: data[0],
        alias: data[1],
    };
} %}

FromClause ->
    %FROM TableReferenceList {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.FromClause,
        tableReferenceList: data[1],
    };
} %}
    | %FROM %DUAL {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.FromClause,
        tableReferenceList: {
            ...parse_util_1.getTextRange(data[1]),
            syntaxKind: parser_node_1.SyntaxKind.Value,
            value: "DUAL",
        },
    };
} %}

IndexHintClause ->
    (%FOR ((%JOIN) | (%ORDER %BY) | (%GROUP %BY))):? {% function (data) {
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
} %}

IndexHintDefinitionList ->
    IndexHintDefinition IndexHintDefinition:* {% (data) => {
    const arr = data
        .flat(1);
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.IndexHintDefinitionList, parse_util_1.getTextRange(data));
} %}

IndexHintDefinition ->
    (%FORCE | %IGNORE) (%KEY | %INDEX) IndexHintClause KeyUsageList {% (data) => {
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
} %}
    | %USE (%KEY | %INDEX) IndexHintClause KeyUsageList {% (data) => {
    const [, , indexHintClause, indexes,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.IndexHintDefinition,
        indexHintType: parser_node_1.IndexHintType.USE,
        indexHintClause: indexHintClause.value,
        indexes,
    };
} %}

Join ->
    TableReference (%INNER | %CROSS):? %JOIN JoinRhsTableReference JoinSpecification:? {% (data) => {
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
} %}
    | TableReference %STRAIGHT_JOIN JoinRhsTableReference JoinSpecification:? {% (data) => {
    const [lhs, joinType, rhs, joinSpecification,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.Join,
        joinType: parse_util_1.toValueNode(parser_node_1.JoinType.STRAIGHT, parse_util_1.getTextRange(joinType)),
        lhs,
        rhs,
        joinSpecification: joinSpecification !== null && joinSpecification !== void 0 ? joinSpecification : undefined,
    };
} %}
    | TableReference %NATURAL %JOIN JoinRhsTableReference JoinSpecification:? {% (data) => {
    const [lhs, naturalToken, joinToken, rhs, joinSpecification,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.Join,
        joinType: parse_util_1.toValueNode(parser_node_1.JoinType.NATURAL_INNER, parse_util_1.getTextRange([naturalToken, joinToken])),
        lhs,
        rhs,
        joinSpecification: joinSpecification !== null && joinSpecification !== void 0 ? joinSpecification : undefined,
    };
} %}

JoinRhsTableReference_Unparenthesized ->
    (NamedTableFactor | DerivedTableFactor | OdbcTableReference) {% (data) => {
    return data[0][0];
} %}

JoinRhsTableReference_Parenthesized ->
    %OpenParentheses JoinRhsTableReference_Parenthesized %CloseParentheses {% (data) => {
    return data[1];
} %}
    | %OpenParentheses (NamedTableFactor | DerivedTableFactor | Join | OdbcTableReference | TableReferenceList_2OrMore) %CloseParentheses {% (data) => {
    if (data[1][0].syntaxKind == parser_node_1.SyntaxKind.OdbcTableReference) {
        return {
            ...data[1][0],
            parenthesized: true,
        };
    }
    else {
        return data[1][0];
    }
} %}

JoinRhsTableReference ->
    JoinRhsTableReference_Unparenthesized {% (data) => {
    return data[0];
} %}
    | JoinRhsTableReference_Parenthesized {% (data) => {
    return data[0];
} %}

JoinSpecificationOn ->
    %ON Expression {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.JoinSpecificationOn,
        expr: data[1],
    };
} %}

JoinSpecificationUsing ->
    %USING IdentifierList {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.JoinSpecificationUsing,
        identifiers: data[1],
    };
} %}

JoinSpecification ->
    (JoinSpecificationOn | JoinSpecificationUsing) {% (data) => {
    return data[0][0];
} %}

KeyUsageList ->
    %OpenParentheses (Identifier (%Comma Identifier):*):? %CloseParentheses {% (data) => {
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
} %}

Join ->
    TableReference (%LEFT | %RIGHT) %OUTER:? %JOIN JoinRhsTableReference JoinSpecification:? {% (data) => {
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
} %}
    | TableReference %NATURAL (%LEFT | %RIGHT) %OUTER:? %JOIN JoinRhsTableReference JoinSpecification:? {% (data) => {
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
} %}

NamedTableFactor ->
    TableIdentifier UsePartition:? TableAlias:? IndexHintDefinitionList:? {% (data) => {
    var _a, _b, _c;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.NamedTableFactor,
        tableIdentifier: data[0],
        usedPartitions: (_a = data[1]) !== null && _a !== void 0 ? _a : undefined,
        alias: (_b = data[2]) !== null && _b !== void 0 ? _b : undefined,
        indexHintDefinitions: (_c = data[3]) !== null && _c !== void 0 ? _c : undefined,
    };
} %}

OdbcTableReference ->
    %OpenBrace Identifier OdbcNestedTableReference %CloseBrace {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.OdbcTableReference,
        parenthesized: false,
        identifier: data[1],
        tableReference: data[2],
    };
} %}

OdbcNestedTableReference_Unparenthesized ->
    (NamedTableFactor | DerivedTableFactor | Join) {% (data) => {
    return data[0][0];
} %}

OdbcNestedTableReference_Parenthesized ->
    %OpenParentheses OdbcNestedTableReference_Parenthesized %CloseParentheses {% (data) => {
    return data[1];
} %}
    | %OpenParentheses (NamedTableFactor | DerivedTableFactor | Join | OdbcTableReference | TableReferenceList_2OrMore) %CloseParentheses {% (data) => {
    if (data[1][0].syntaxKind == parser_node_1.SyntaxKind.OdbcTableReference) {
        return {
            ...data[1][0],
            parenthesized: true,
        };
    }
    else {
        return data[1][0];
    }
} %}

OdbcNestedTableReference ->
    OdbcNestedTableReference_Unparenthesized {% (data) => {
    return data[0];
} %}
    | OdbcNestedTableReference_Parenthesized {% (data) => {
    return data[0];
} %}

TableAlias ->
    (%AS | %Equal):? Identifier {% (data) => {
    return data[1];
} %}

TableReferenceList ->
    TableReference (%Comma TableReference):* {% (data) => {
    const arr = data
        .flat(2)
        .filter((item) => {
        return "syntaxKind" in item;
    });
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.TableReferenceList, parse_util_1.getTextRange(data));
} %}

TableReferenceList_2OrMore ->
    TableReference (%Comma TableReference):+ {% (data) => {
    const arr = data
        .flat(2)
        .filter((item) => {
        return "syntaxKind" in item;
    });
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.TableReferenceList, parse_util_1.getTextRange(data));
} %}

TableReference_Unparenthesized ->
    (NamedTableFactor | DerivedTableFactor | Join | OdbcTableReference) {% (data) => {
    return data[0][0];
} %}

TableReference_Parenthesized ->
    %OpenParentheses TableReference_Parenthesized %CloseParentheses {% (data) => {
    return data[1];
} %}
    | %OpenParentheses (NamedTableFactor | DerivedTableFactor | Join | OdbcTableReference | TableReferenceList_2OrMore) %CloseParentheses {% (data) => {
    if (data[1][0].syntaxKind == parser_node_1.SyntaxKind.OdbcTableReference) {
        return {
            ...data[1][0],
            parenthesized: true,
        };
    }
    else {
        return data[1][0];
    }
} %}

TableReference ->
    TableReference_Unparenthesized {% (data) => {
    return data[0];
} %}
    | TableReference_Parenthesized {% (data) => {
    return data[0];
} %}

UsePartition ->
    %PARTITION IdentifierList {% (data) => {
    return data[1];
} %}

GroupByClause ->
    %GROUP %BY GroupingExprList (%WITH (%CUBE | %ROLLUP)):? {% (data) => {
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
} %}

GroupingExpr ->
    Expression (%ASC | %DESC):? {% (data) => {
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
} %}

GroupingExprList ->
    GroupingExpr (%Comma GroupingExpr):* {% (data) => {
    const arr = data
        .flat(2)
        .filter((data) => {
        return "syntaxKind" in data;
    });
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.GroupingExprList, parse_util_1.getTextRange(data));
} %}

FieldTerminatorOption ->
    %TERMINATED %BY StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        terminatedBy: data[2],
    };
} %}
    | %OPTIONALLY %ENCLOSED %BY StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        optionallyEnclosed: true,
        enclosedBy: data[3],
    };
} %}
    | %ENCLOSED %BY StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        enclosedBy: data[2],
    };
} %}
    | %ESCAPED %BY StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        escapedBy: data[2],
    };
} %}

FieldTerminatorOptions ->
    (%FIELDS | %COLUMNS) FieldTerminatorOption FieldTerminatorOption:* {% (data) => {
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
} %}

IntoClause ->
    %INTO IntoDestination {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.IntoClause,
        intoDestination: data[1],
    };
} %}

IntoDestinationDumpFile ->
    %DUMPFILE StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.IntoDestinationDumpFile,
        path: data[1],
    };
} %}

IntoDestinationOutFile ->
    %OUTFILE StringLiteral (((%CHARACTER %SET) | %CHARSET) CharacterSetNameOrDefault):? FieldTerminatorOptions:? LineTerminatorOptions:? {% (data) => {
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
} %}

IntoDestinationVariableList ->
    (Identifier | StringLiteral | UserVariableIdentifier) (%Comma (Identifier | StringLiteral | UserVariableIdentifier)):* {% (data) => {
    const arr = data
        .flat(3)
        .filter((data) => {
        return "syntaxKind" in data;
    });
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.IntoDestinationVariableList, parse_util_1.getTextRange(data));
} %}

IntoDestination ->
    (IntoDestinationDumpFile | IntoDestinationOutFile | IntoDestinationVariableList) {% (data) => {
    return data[0][0];
} %}

LineTerminatorOption ->
    %TERMINATED %BY StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        terminatedBy: data[2],
    };
} %}
    | %STARTING %BY StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        startingBy: data[2],
    };
} %}

LineTerminatorOptions ->
    %LINES LineTerminatorOption LineTerminatorOption:* {% (data) => {
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
} %}

HashPartition ->
    %PARTITION %BY %LINEAR:? %HASH %OpenParentheses Expression %CloseParentheses (%PARTITIONS IntegerLiteral):? {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.HashPartition,
        linear: data[2] != undefined,
        partitionExpr: data[5],
        partitionCount: (data[7] == undefined ?
            undefined :
            data[7][1]),
    };
} %}

HashSubPartition ->
    %SUBPARTITION %BY %LINEAR:? %HASH %OpenParentheses Expression %CloseParentheses (%SUBPARTITIONS IntegerLiteral):? {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.HashSubPartition,
        linear: data[2] != undefined,
        subPartitionExpr: data[5],
        subPartitionCount: (data[7] == undefined ?
            undefined :
            data[7][1]),
    };
} %}

KeyPartition ->
    %PARTITION %BY %LINEAR:? %KEY (%ALGORITHM %Equal IntegerLiteral):? IdentifierList (%PARTITIONS IntegerLiteral):? {% (data) => {
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
} %}

KeySubPartition ->
    %SUBPARTITION %BY %LINEAR:? %KEY (%ALGORITHM %Equal IntegerLiteral):? IdentifierList (%SUBPARTITIONS IntegerLiteral):? {% (data) => {
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
} %}

ListPartition ->
    %PARTITION %BY %LIST %OpenParentheses Expression %CloseParentheses (%PARTITIONS IntegerLiteral):? SubPartition:? %OpenParentheses SingletonListPartitionDefinition (%Comma SingletonListPartitionDefinition):* %CloseParentheses {% (data) => {
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
} %}
    | %PARTITION %BY %LIST %COLUMNS %OpenParentheses Identifier %CloseParentheses (%PARTITIONS IntegerLiteral):? SubPartition:? %OpenParentheses SingletonListPartitionDefinition (%Comma SingletonListPartitionDefinition):* %CloseParentheses {% (data) => {
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
} %}
    | %PARTITION %BY %LIST %COLUMNS IdentifierList_2OrMore (%PARTITIONS IntegerLiteral):? SubPartition:? %OpenParentheses NonSingletonListPartitionDefinition (%Comma NonSingletonListPartitionDefinition):* %CloseParentheses {% (data) => {
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
} %}

NonSingletonListPartitionDefinition ->
    %PARTITION Identifier %VALUES %IN ExpressionListList PartitionDefinitionOptions SubPartitionDefinitionList:? {% (data) => {
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
} %}

NonSingletonRangePartitionDefinition ->
    %PARTITION Identifier %VALUES %LESS %THAN %OpenParentheses Expression (%Comma Expression):+ %CloseParentheses PartitionDefinitionOptions SubPartitionDefinitionList:? {% (data) => {
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
} %}

PartitionDefinitionOption ->
    %STORAGE:? %ENGINE %Equal:? (Identifier | StringLiteral) {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        engine: data[3][0],
    };
} %}
    | %MAX_ROWS %Equal:? IntegerLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        maxRows: data[2],
    };
} %}
    | %MIN_ROWS %Equal:? IntegerLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        minRows: data[2],
    };
} %}
    | %COMMENT %Equal:? StringLiteral {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        comment: data[2],
    };
} %}
    | %DATA %DIRECTORY %Equal:? StringLiteral {% (data) => {
    const dataDirectory = data[3];
    const result = {
        ...parse_util_1.getTextRange(data),
        dataDirectory,
    };
    return result;
} %}
    | %INDEX %DIRECTORY %Equal:? StringLiteral {% (data) => {
    const indexDirectory = data[3];
    const result = {
        ...parse_util_1.getTextRange(data),
        indexDirectory,
    };
    return result;
} %}
    | %TABLESPACE %Equal:? Identifier {% (data) => {
    const tablespace = data[2];
    const result = {
        ...parse_util_1.getTextRange(data),
        tablespace,
    };
    return result;
} %}
    | %NODEGROUP %Equal:? IntegerLiteral {% (data) => {
    const nodeGroup = data[2];
    const result = {
        ...parse_util_1.getTextRange(data),
        nodeGroup,
    };
    return result;
} %}

PartitionDefinitionOptions ->
    (PartitionDefinitionOption):* {% (data) => {
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
} %}

Partition ->
    HashPartition {% data => data[0] %}
    | KeyPartition {% data => data[0] %}
    | ListPartition {% data => data[0] %}
    | RangePartition {% data => data[0] %}

RangePartition ->
    %PARTITION %BY %RANGE %OpenParentheses Expression %CloseParentheses (%PARTITIONS IntegerLiteral):? SubPartition:? %OpenParentheses SingletonRangePartitionDefinition (%Comma SingletonRangePartitionDefinition):* %CloseParentheses {% (data) => {
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
} %}
    | %PARTITION %BY %RANGE %COLUMNS %OpenParentheses Identifier %CloseParentheses (%PARTITIONS IntegerLiteral):? SubPartition:? %OpenParentheses SingletonRangePartitionDefinition (%Comma SingletonRangePartitionDefinition):* %CloseParentheses {% (data) => {
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
} %}
    | %PARTITION %BY %RANGE %COLUMNS IdentifierList_2OrMore (%PARTITIONS IntegerLiteral):? SubPartition:? %OpenParentheses NonSingletonRangePartitionDefinition (%Comma NonSingletonRangePartitionDefinition):* %CloseParentheses {% (data) => {
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
} %}

SingletonListPartitionDefinition ->
    %PARTITION Identifier %VALUES %IN ExpressionList PartitionDefinitionOptions SubPartitionDefinitionList:? {% (data) => {
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
} %}

SingletonRangePartitionDefinition ->
    %PARTITION Identifier %VALUES %LESS %THAN ((%OpenParentheses Expression %CloseParentheses) | (%MAXVALUE)) PartitionDefinitionOptions SubPartitionDefinitionList:? {% (data) => {
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
} %}

SubPartitionDefinitionList ->
    %OpenParentheses SubPartitionDefinition (%Comma SubPartitionDefinition):* %CloseParentheses {% (data) => {
    const [, first, more] = data;
    const arr = more
        .flat(1)
        .filter((x) => {
        return "syntaxKind" in x;
    });
    return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.SubPartitionDefinitionList, parse_util_1.getTextRange(data));
} %}

SubPartitionDefinition ->
    %SUBPARTITION (Identifier | StringLiteral) PartitionDefinitionOptions {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.SubPartitionDefinition,
        subPartitionName: data[1][0],
        partitionDefinitionOptions: data[2],
    };
} %}

SubPartition ->
    HashSubPartition {% data => data[0] %}
    | KeySubPartition {% data => data[0] %}

AsteriskSelectItem ->
    %Asterisk {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.AsteriskSelectItem,
    };
} %}

HavingClause ->
    %HAVING Expression {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.HavingClause,
        expr: data[1],
    };
} %}

LimitOption ->
    (Identifier | ParamMarker | IntegerLiteral) {% (data) => {
    return data[0][0];
} %}

Limit ->
    %LIMIT LimitOption {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.Limit,
        offset: undefined,
        rowCount: data[1],
    };
} %}
    | %LIMIT LimitOption %Comma LimitOption {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.Limit,
        offset: data[1],
        rowCount: data[3],
    };
} %}
    | %LIMIT LimitOption %OFFSET LimitOption {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.Limit,
        offset: data[3],
        rowCount: data[1],
    };
} %}

OrderExpr ->
    Expression (%ASC | %DESC):? {% (data) => {
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
} %}

OrderExprList ->
    %ORDER %BY OrderExpr (%Comma OrderExpr):* {% (data) => {
    const arr = data
        .flat(2)
        .filter((data) => {
        return "syntaxKind" in data;
    });
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.OrderExprList, parse_util_1.getTextRange(data));
} %}

ProcedureAnalyseClause ->
    %PROCEDURE %ANALYSE %OpenParentheses %CloseParentheses {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.ProcedureAnalyseClause,
        args: undefined,
    };
} %}
    | %PROCEDURE %ANALYSE %OpenParentheses IntegerLiteral %CloseParentheses {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.ProcedureAnalyseClause,
        args: {
            maxElements: data[3],
            maxMemory: undefined,
        },
    };
} %}
    | %PROCEDURE %ANALYSE %OpenParentheses IntegerLiteral %Comma IntegerLiteral %CloseParentheses {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.ProcedureAnalyseClause,
        args: {
            maxElements: data[3],
            maxMemory: data[5],
        },
    };
} %}

SelectItem ->
    Expression (%AS:? (Identifier | StringLiteral)):? {% (data) => {
    const [expr, alias] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.SelectItem,
        expr,
        alias: (alias == undefined ?
            undefined :
            alias[1][0]),
    };
} %}

SelectOption ->
    %SQL_NO_CACHE {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        sqlCache: false,
    };
} %}
    | %SQL_CACHE {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        sqlCache: true,
    };
} %}
    | %STRAIGHT_JOIN {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        straightJoin: true,
    };
} %}
    | %HIGH_PRIORITY {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        highPriority: true,
    };
} %}
    | %DISTINCT {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        distinct: true,
    };
} %}
    | %DISTINCTROW {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        distinct: true,
    };
} %}
    | %SQL_SMALL_RESULT {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        sqlSmallResult: true,
    };
} %}
    | %SQL_BIG_RESULT {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        sqlBigResult: true,
    };
} %}
    | %SQL_BUFFER_RESULT {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        sqlBufferResult: true,
    };
} %}
    | %SQL_CALC_FOUND_ROWS {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        sqlCalcFoundRows: true,
    };
} %}
    | %ALL {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        distinct: false,
    };
} %}

SelectOptions ->
    (SelectOption):* {% (data) => {
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
} %}

SelectStatement ->
    (Select | ParenthesizedSelect | Union | UnionOrderLimit) {% (data) => {
    return data[0][0];
} %}

Select ->
    %SELECT SelectOptions (AsteriskSelectItem | TableAsteriskSelectItem | SelectItem) (%Comma (AsteriskSelectItem | TableAsteriskSelectItem | SelectItem)):* IntoClause:? FromClause:? WhereClause:? GroupByClause:? HavingClause:? OrderExprList:? Limit:? ProcedureAnalyseClause:? IntoClause:? ((%FOR %UPDATE) | (%LOCK %IN %SHARE %MODE)):? {% (data) => {
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
} %}

ParenthesizedSelect ->
    %OpenParentheses ParenthesizedSelect %CloseParentheses {% (data) => {
    return data[1];
} %}
    | %OpenParentheses Select %CloseParentheses {% (data) => {
    return {
        ...data[1],
        parenthesized: true,
    };
} %}

TableAsteriskSelectItem ->
    TableIdentifier %Dot %Asterisk {% (data) => {
    const [tableIdentifier] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.TableAsteriskSelectItem,
        tableIdentifier,
    };
} %}

UnionOrderLimit_Helper ->
    OrderExprList Limit:? {% (data) => {
    const [order, limit,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.UnionOrderLimit,
        order,
        limit: limit !== null && limit !== void 0 ? limit : undefined,
    };
} %}
    | Limit {% (data) => {
    const [limit,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.UnionOrderLimit,
        order: undefined,
        limit,
    };
} %}

UnionOrderLimit ->
    ParenthesizedSelect UnionOrderLimit_Helper {% (data) => {
    const [select, helper,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.UnionOrderLimit,
        select,
        order: helper.order,
        limit: helper.limit,
    };
} %}
    | (Union | Select | ParenthesizedSelect) %UNION (%ALL | %DISTINCT):? ParenthesizedSelect UnionOrderLimit_Helper {% (data) => {
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
} %}

ParenthesizedUnion_UnionOrderLimit ->
    ParenthesizedUnion UnionOrderLimit_Helper {% (data) => {
    const [select, helper,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.UnionOrderLimit,
        select,
        order: helper.order,
        limit: helper.limit,
    };
} %}

Union ->
    (Select | ParenthesizedSelect) (%UNION (%ALL | %DISTINCT):? (Select | ParenthesizedSelect)):+ {% (data) => {
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
} %}

ParenthesizedUnion ->
    %OpenParentheses ParenthesizedUnion %CloseParentheses {% (data) => {
    return data[1];
} %}
    | %OpenParentheses Union %CloseParentheses {% (data) => {
    return data[1];
} %}

WhereClause ->
    %WHERE Expression {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.WhereClause,
        expr: data[1],
    };
} %}

NonDelimiterStatement ->
    (CreateSchemaStatement | CreateTableStatement | CreateFunctionStatement | CreateProcedureStatement | CreateTriggerStatement | CreateEventStatement | CreateUserDefinedFunctionStatement | CreateViewStatement | SelectStatement) {% (data) => {
    return data[0][0];
} %}

LeadingStatement ->
    NonDelimiterStatement %SemiColon %CustomDelimiter:? {% (data) => {
    var _a, _b;
    data[0].customDelimiter = (_b = (_a = data[2]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : undefined;
    return data[0];
} %}
    | DelimiterStatement {% (data) => data[0] %}

TrailingStatement ->
    NonDelimiterStatement %SemiColon:? %CustomDelimiter:? {% (data) => {
    var _a, _b;
    data[0].customDelimiter = (_b = (_a = data[2]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : undefined;
    return data[0];
} %}
    | DelimiterStatement {% (data) => data[0] %}

SourceFileLite ->
    LeadingStatement:* TrailingStatement {% (data) => {
    const arr = data.flat(1);
    const statements = parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.SourceElementList, parse_util_1.getTextRange(data));
    return {
        start: statements.start,
        end: statements.end,
        syntaxKind: parser_node_1.SyntaxKind.SourceFileLite,
        statements,
    };
} %}

BlockStatement ->
    %BEGIN StoredProcedureStatementList %END {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.BlockStatement,
        statements: data[1],
    };
} %}

CloseStatement ->
    %CLOSE Identifier {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.CloseStatement,
        cursorName: data[1],
    };
} %}

FetchStatement ->
    %FETCH ((%NEXT %FROM) | (%FROM)):? Identifier %INTO Identifier (%Comma Identifier):* {% (data) => {
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
} %}

ElseIf ->
    %ELSEIF Expression %THEN StoredProcedureStatementList {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.ElseIf,
        elseIfToken: parse_util_1.toValueNode("ELSEIF", parse_util_1.getTextRange(data[0])),
        expr: data[1],
        statements: data[3],
    };
} %}

ElseIfList ->
    ElseIf:+ {% (data) => {
    return parse_util_1.toNodeArray(data[0], parser_node_1.SyntaxKind.ElseIfList, parse_util_1.getTextRange(data));
} %}

ElseBranch ->
    %ELSE StoredProcedureStatementList {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.ElseBranch,
        elseToken: parse_util_1.toValueNode("ELSE", parse_util_1.getTextRange(data[0])),
        statements: data[1],
    };
} %}

IfStatement ->
    %IF Expression %THEN StoredProcedureStatementList ElseIfList:? ElseBranch:? %END %IF {% (data) => {
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
} %}

IterateStatement ->
    %ITERATE LabelIdentifier {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.IterateStatement,
        label: data[1],
    };
} %}

UnlabeledStatement ->
    (BlockStatement | LoopStatement | WhileStatement | RepeatStatement) {% (data) => {
    return data[0][0];
} %}

LabelStatement ->
    LabelIdentifier %Colon UnlabeledStatement LabelIdentifier:? {% (data) => {
    var _a;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.LabelStatement,
        beginLabel: data[0],
        statement: data[2],
        endLabel: (_a = data[3]) !== null && _a !== void 0 ? _a : undefined,
    };
} %}
    | UnlabeledStatement LabelIdentifier:? {% (data) => {
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
} %}

LeaveStatement ->
    %LEAVE LabelIdentifier {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.LeaveStatement,
        label: data[1],
    };
} %}

LoopStatement ->
    %LOOP StoredProcedureStatementList %END %LOOP {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.LoopStatement,
        statements: data[1],
    };
} %}

OpenStatement ->
    %OPEN Identifier {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.OpenStatement,
        cursorName: data[1],
    };
} %}

RepeatStatement ->
    %REPEAT StoredProcedureStatementList %UNTIL Expression %END %REPEAT {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.RepeatStatement,
        statements: data[1],
        expr: data[3],
    };
} %}

ReturnStatement ->
    %RETURN Expression {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.ReturnStatement,
        expr: data[1],
    };
} %}

SearchedWhen ->
    %WHEN Expression %THEN StoredProcedureStatementList {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.SearchedWhen,
        whenToken: parse_util_1.toValueNode("WHEN", parse_util_1.getTextRange(data[0])),
        expr: data[1],
        statements: data[3],
    };
} %}

SearchedWhenList ->
    SearchedWhen:+ {% (data) => {
    return parse_util_1.toNodeArray(data[0], parser_node_1.SyntaxKind.SearchedWhenList, parse_util_1.getTextRange(data));
} %}

SearchedCaseStatement ->
    %CASE SearchedWhenList:? ElseBranch:? %END %CASE {% (data) => {
    const [, searchedWhens, elseBranch,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.SearchedCaseStatement,
        caseToken: parse_util_1.toValueNode("CASE", parse_util_1.getTextRange(data[0])),
        searchedWhens: searchedWhens !== null && searchedWhens !== void 0 ? searchedWhens : undefined,
        elseBranch: elseBranch !== null && elseBranch !== void 0 ? elseBranch : undefined,
    };
} %}

SimpleWhen ->
    %WHEN Expression %THEN StoredProcedureStatementList {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.SimpleWhen,
        whenToken: parse_util_1.toValueNode("WHEN", parse_util_1.getTextRange(data[0])),
        expr: data[1],
        statements: data[3],
    };
} %}

SimpleWhenList ->
    SimpleWhen:+ {% (data) => {
    return parse_util_1.toNodeArray(data[0], parser_node_1.SyntaxKind.SimpleWhenList, parse_util_1.getTextRange(data));
} %}

SimpleCaseStatement ->
    %CASE Expression SimpleWhenList:? ElseBranch:? %END %CASE {% (data) => {
    const [, expr, simpleWhens, elseBranch,] = data;
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.SimpleCaseStatement,
        caseToken: parse_util_1.toValueNode("CASE", parse_util_1.getTextRange(data[0])),
        expr,
        simpleWhens: simpleWhens !== null && simpleWhens !== void 0 ? simpleWhens : undefined,
        elseBranch: elseBranch !== null && elseBranch !== void 0 ? elseBranch : undefined,
    };
} %}

StoredProcedureStatementList ->
    (StoredProcedureStatement %SemiColon):* {% (data) => {
    const arr = data[0].map(item => item[0]);
    return parse_util_1.toNodeArray(arr, parser_node_1.SyntaxKind.StoredProcedureStatementList, parse_util_1.getTextRange(data));
} %}

StoredProcedureStatement ->
    (NonDelimiterStatement | ReturnStatement | LabelStatement | IfStatement | SimpleCaseStatement | SearchedCaseStatement | LeaveStatement | IterateStatement | OpenStatement | CloseStatement | FetchStatement) {% (data) => {
    return data[0][0];
} %}

WhileStatement ->
    %WHILE Expression %DO StoredProcedureStatementList %END %WHILE {% (data) => {
    return {
        ...parse_util_1.getTextRange(data),
        syntaxKind: parser_node_1.SyntaxKind.WhileStatement,
        expr: data[1],
        statements: data[3],
    };
} %}
