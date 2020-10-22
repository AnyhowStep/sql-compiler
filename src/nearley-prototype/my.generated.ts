//@ts-nocheck
// Generated automatically by nearley, version 2.11.2
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

import {TokenKind, isKeyword} from "../scanner";
//import * as util from "util";
//import {SyntaxKind, Node, NodeArray} from "../parser-node";
//const nearley_util_1 = require("./nearley-util");
const scanner_1 = require("../scanner");
const parser_node_1 = require("../parser-node");
const diagnostic_messages_1 = require("./diagnostic-messages");
const parse_util_1 = require("./parse-util");

const KeywordOrIdentifier : Tester = { test: x => x.tokenKind == TokenKind.Identifier || isKeyword(x.tokenKind) };


interface Tester {
    test : (x : { tokenKind : TokenKind }) => boolean
}
//@ts-ignore
const ACCESSIBLE : Tester = { test: x => x.tokenKind == TokenKind.ACCESSIBLE };
//@ts-ignore
const ADD : Tester = { test: x => x.tokenKind == TokenKind.ADD };
//@ts-ignore
const ALL : Tester = { test: x => x.tokenKind == TokenKind.ALL };
//@ts-ignore
const ALTER : Tester = { test: x => x.tokenKind == TokenKind.ALTER };
//@ts-ignore
const ANALYZE : Tester = { test: x => x.tokenKind == TokenKind.ANALYZE };
//@ts-ignore
const AND : Tester = { test: x => x.tokenKind == TokenKind.AND };
//@ts-ignore
const AS : Tester = { test: x => x.tokenKind == TokenKind.AS };
//@ts-ignore
const ASC : Tester = { test: x => x.tokenKind == TokenKind.ASC };
//@ts-ignore
const ASENSITIVE : Tester = { test: x => x.tokenKind == TokenKind.ASENSITIVE };
//@ts-ignore
const BEFORE : Tester = { test: x => x.tokenKind == TokenKind.BEFORE };
//@ts-ignore
const BETWEEN : Tester = { test: x => x.tokenKind == TokenKind.BETWEEN };
//@ts-ignore
const BIGINT : Tester = { test: x => x.tokenKind == TokenKind.BIGINT };
//@ts-ignore
const BINARY : Tester = { test: x => x.tokenKind == TokenKind.BINARY };
//@ts-ignore
const BLOB : Tester = { test: x => x.tokenKind == TokenKind.BLOB };
//@ts-ignore
const BOTH : Tester = { test: x => x.tokenKind == TokenKind.BOTH };
//@ts-ignore
const BY : Tester = { test: x => x.tokenKind == TokenKind.BY };
//@ts-ignore
const CALL : Tester = { test: x => x.tokenKind == TokenKind.CALL };
//@ts-ignore
const CASCADE : Tester = { test: x => x.tokenKind == TokenKind.CASCADE };
//@ts-ignore
const CASE : Tester = { test: x => x.tokenKind == TokenKind.CASE };
//@ts-ignore
const CHANGE : Tester = { test: x => x.tokenKind == TokenKind.CHANGE };
//@ts-ignore
const CHAR : Tester = { test: x => x.tokenKind == TokenKind.CHAR };
//@ts-ignore
const CHARACTER : Tester = { test: x => x.tokenKind == TokenKind.CHARACTER };
//@ts-ignore
const CHECK : Tester = { test: x => x.tokenKind == TokenKind.CHECK };
//@ts-ignore
const COLLATE : Tester = { test: x => x.tokenKind == TokenKind.COLLATE };
//@ts-ignore
const COLUMN : Tester = { test: x => x.tokenKind == TokenKind.COLUMN };
//@ts-ignore
const CONDITION : Tester = { test: x => x.tokenKind == TokenKind.CONDITION };
//@ts-ignore
const CONSTRAINT : Tester = { test: x => x.tokenKind == TokenKind.CONSTRAINT };
//@ts-ignore
const CONTINUE : Tester = { test: x => x.tokenKind == TokenKind.CONTINUE };
//@ts-ignore
const CONVERT : Tester = { test: x => x.tokenKind == TokenKind.CONVERT };
//@ts-ignore
const CREATE : Tester = { test: x => x.tokenKind == TokenKind.CREATE };
//@ts-ignore
const CROSS : Tester = { test: x => x.tokenKind == TokenKind.CROSS };
//@ts-ignore
const CURRENT_DATE : Tester = { test: x => x.tokenKind == TokenKind.CURRENT_DATE };
//@ts-ignore
const CURRENT_TIME : Tester = { test: x => x.tokenKind == TokenKind.CURRENT_TIME };
//@ts-ignore
const CURRENT_TIMESTAMP : Tester = { test: x => x.tokenKind == TokenKind.CURRENT_TIMESTAMP };
//@ts-ignore
const CURRENT_USER : Tester = { test: x => x.tokenKind == TokenKind.CURRENT_USER };
//@ts-ignore
const CURSOR : Tester = { test: x => x.tokenKind == TokenKind.CURSOR };
//@ts-ignore
const DATABASE : Tester = { test: x => x.tokenKind == TokenKind.DATABASE };
//@ts-ignore
const DATABASES : Tester = { test: x => x.tokenKind == TokenKind.DATABASES };
//@ts-ignore
const DAY_HOUR : Tester = { test: x => x.tokenKind == TokenKind.DAY_HOUR };
//@ts-ignore
const DAY_MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.DAY_MICROSECOND };
//@ts-ignore
const DAY_MINUTE : Tester = { test: x => x.tokenKind == TokenKind.DAY_MINUTE };
//@ts-ignore
const DAY_SECOND : Tester = { test: x => x.tokenKind == TokenKind.DAY_SECOND };
//@ts-ignore
const DEC : Tester = { test: x => x.tokenKind == TokenKind.DEC };
//@ts-ignore
const DECIMAL : Tester = { test: x => x.tokenKind == TokenKind.DECIMAL };
//@ts-ignore
const DECLARE : Tester = { test: x => x.tokenKind == TokenKind.DECLARE };
//@ts-ignore
const DEFAULT : Tester = { test: x => x.tokenKind == TokenKind.DEFAULT };
//@ts-ignore
const DELAYED : Tester = { test: x => x.tokenKind == TokenKind.DELAYED };
//@ts-ignore
const DELETE : Tester = { test: x => x.tokenKind == TokenKind.DELETE };
//@ts-ignore
const DESC : Tester = { test: x => x.tokenKind == TokenKind.DESC };
//@ts-ignore
const DESCRIBE : Tester = { test: x => x.tokenKind == TokenKind.DESCRIBE };
//@ts-ignore
const DETERMINISTIC : Tester = { test: x => x.tokenKind == TokenKind.DETERMINISTIC };
//@ts-ignore
const DISTINCT : Tester = { test: x => x.tokenKind == TokenKind.DISTINCT };
//@ts-ignore
const DISTINCTROW : Tester = { test: x => x.tokenKind == TokenKind.DISTINCTROW };
//@ts-ignore
const DIV : Tester = { test: x => x.tokenKind == TokenKind.DIV };
//@ts-ignore
const DOUBLE : Tester = { test: x => x.tokenKind == TokenKind.DOUBLE };
//@ts-ignore
const DROP : Tester = { test: x => x.tokenKind == TokenKind.DROP };
//@ts-ignore
const DUAL : Tester = { test: x => x.tokenKind == TokenKind.DUAL };
//@ts-ignore
const EACH : Tester = { test: x => x.tokenKind == TokenKind.EACH };
//@ts-ignore
const ELSE : Tester = { test: x => x.tokenKind == TokenKind.ELSE };
//@ts-ignore
const ELSEIF : Tester = { test: x => x.tokenKind == TokenKind.ELSEIF };
//@ts-ignore
const ENCLOSED : Tester = { test: x => x.tokenKind == TokenKind.ENCLOSED };
//@ts-ignore
const ESCAPED : Tester = { test: x => x.tokenKind == TokenKind.ESCAPED };
//@ts-ignore
const EXISTS : Tester = { test: x => x.tokenKind == TokenKind.EXISTS };
//@ts-ignore
const EXIT : Tester = { test: x => x.tokenKind == TokenKind.EXIT };
//@ts-ignore
const EXPLAIN : Tester = { test: x => x.tokenKind == TokenKind.EXPLAIN };
//@ts-ignore
const FALSE : Tester = { test: x => x.tokenKind == TokenKind.FALSE };
//@ts-ignore
const FETCH : Tester = { test: x => x.tokenKind == TokenKind.FETCH };
//@ts-ignore
const FLOAT : Tester = { test: x => x.tokenKind == TokenKind.FLOAT };
//@ts-ignore
const FLOAT4 : Tester = { test: x => x.tokenKind == TokenKind.FLOAT4 };
//@ts-ignore
const FLOAT8 : Tester = { test: x => x.tokenKind == TokenKind.FLOAT8 };
//@ts-ignore
const FOR : Tester = { test: x => x.tokenKind == TokenKind.FOR };
//@ts-ignore
const FORCE : Tester = { test: x => x.tokenKind == TokenKind.FORCE };
//@ts-ignore
const FOREIGN : Tester = { test: x => x.tokenKind == TokenKind.FOREIGN };
//@ts-ignore
const FROM : Tester = { test: x => x.tokenKind == TokenKind.FROM };
//@ts-ignore
const FULLTEXT : Tester = { test: x => x.tokenKind == TokenKind.FULLTEXT };
//@ts-ignore
const GENERATED : Tester = { test: x => x.tokenKind == TokenKind.GENERATED };
//@ts-ignore
const GET : Tester = { test: x => x.tokenKind == TokenKind.GET };
//@ts-ignore
const GRANT : Tester = { test: x => x.tokenKind == TokenKind.GRANT };
//@ts-ignore
const GROUP : Tester = { test: x => x.tokenKind == TokenKind.GROUP };
//@ts-ignore
const HAVING : Tester = { test: x => x.tokenKind == TokenKind.HAVING };
//@ts-ignore
const HIGH_PRIORITY : Tester = { test: x => x.tokenKind == TokenKind.HIGH_PRIORITY };
//@ts-ignore
const HOUR_MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.HOUR_MICROSECOND };
//@ts-ignore
const HOUR_MINUTE : Tester = { test: x => x.tokenKind == TokenKind.HOUR_MINUTE };
//@ts-ignore
const HOUR_SECOND : Tester = { test: x => x.tokenKind == TokenKind.HOUR_SECOND };
//@ts-ignore
const IF : Tester = { test: x => x.tokenKind == TokenKind.IF };
//@ts-ignore
const IGNORE : Tester = { test: x => x.tokenKind == TokenKind.IGNORE };
//@ts-ignore
const IN : Tester = { test: x => x.tokenKind == TokenKind.IN };
//@ts-ignore
const INDEX : Tester = { test: x => x.tokenKind == TokenKind.INDEX };
//@ts-ignore
const INFILE : Tester = { test: x => x.tokenKind == TokenKind.INFILE };
//@ts-ignore
const INNER : Tester = { test: x => x.tokenKind == TokenKind.INNER };
//@ts-ignore
const INOUT : Tester = { test: x => x.tokenKind == TokenKind.INOUT };
//@ts-ignore
const INSENSITIVE : Tester = { test: x => x.tokenKind == TokenKind.INSENSITIVE };
//@ts-ignore
const INSERT : Tester = { test: x => x.tokenKind == TokenKind.INSERT };
//@ts-ignore
const INT : Tester = { test: x => x.tokenKind == TokenKind.INT };
//@ts-ignore
const INT1 : Tester = { test: x => x.tokenKind == TokenKind.INT1 };
//@ts-ignore
const INT2 : Tester = { test: x => x.tokenKind == TokenKind.INT2 };
//@ts-ignore
const INT3 : Tester = { test: x => x.tokenKind == TokenKind.INT3 };
//@ts-ignore
const INT4 : Tester = { test: x => x.tokenKind == TokenKind.INT4 };
//@ts-ignore
const INT8 : Tester = { test: x => x.tokenKind == TokenKind.INT8 };
//@ts-ignore
const INTEGER : Tester = { test: x => x.tokenKind == TokenKind.INTEGER };
//@ts-ignore
const INTERVAL : Tester = { test: x => x.tokenKind == TokenKind.INTERVAL };
//@ts-ignore
const INTO : Tester = { test: x => x.tokenKind == TokenKind.INTO };
//@ts-ignore
const IO_AFTER_GTIDS : Tester = { test: x => x.tokenKind == TokenKind.IO_AFTER_GTIDS };
//@ts-ignore
const IO_BEFORE_GTIDS : Tester = { test: x => x.tokenKind == TokenKind.IO_BEFORE_GTIDS };
//@ts-ignore
const IS : Tester = { test: x => x.tokenKind == TokenKind.IS };
//@ts-ignore
const ITERATE : Tester = { test: x => x.tokenKind == TokenKind.ITERATE };
//@ts-ignore
const JOIN : Tester = { test: x => x.tokenKind == TokenKind.JOIN };
//@ts-ignore
const KEY : Tester = { test: x => x.tokenKind == TokenKind.KEY };
//@ts-ignore
const KEYS : Tester = { test: x => x.tokenKind == TokenKind.KEYS };
//@ts-ignore
const KILL : Tester = { test: x => x.tokenKind == TokenKind.KILL };
//@ts-ignore
const LEADING : Tester = { test: x => x.tokenKind == TokenKind.LEADING };
//@ts-ignore
const LEAVE : Tester = { test: x => x.tokenKind == TokenKind.LEAVE };
//@ts-ignore
const LEFT : Tester = { test: x => x.tokenKind == TokenKind.LEFT };
//@ts-ignore
const LIKE : Tester = { test: x => x.tokenKind == TokenKind.LIKE };
//@ts-ignore
const LIMIT : Tester = { test: x => x.tokenKind == TokenKind.LIMIT };
//@ts-ignore
const LINEAR : Tester = { test: x => x.tokenKind == TokenKind.LINEAR };
//@ts-ignore
const LINES : Tester = { test: x => x.tokenKind == TokenKind.LINES };
//@ts-ignore
const LOAD : Tester = { test: x => x.tokenKind == TokenKind.LOAD };
//@ts-ignore
const LOCALTIME : Tester = { test: x => x.tokenKind == TokenKind.LOCALTIME };
//@ts-ignore
const LOCALTIMESTAMP : Tester = { test: x => x.tokenKind == TokenKind.LOCALTIMESTAMP };
//@ts-ignore
const LOCK : Tester = { test: x => x.tokenKind == TokenKind.LOCK };
//@ts-ignore
const LONG : Tester = { test: x => x.tokenKind == TokenKind.LONG };
//@ts-ignore
const LONGBLOB : Tester = { test: x => x.tokenKind == TokenKind.LONGBLOB };
//@ts-ignore
const LONGTEXT : Tester = { test: x => x.tokenKind == TokenKind.LONGTEXT };
//@ts-ignore
const LOOP : Tester = { test: x => x.tokenKind == TokenKind.LOOP };
//@ts-ignore
const LOW_PRIORITY : Tester = { test: x => x.tokenKind == TokenKind.LOW_PRIORITY };
//@ts-ignore
const MASTER_BIND : Tester = { test: x => x.tokenKind == TokenKind.MASTER_BIND };
//@ts-ignore
const MASTER_SSL_VERIFY_SERVER_CERT : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_VERIFY_SERVER_CERT };
//@ts-ignore
const MATCH : Tester = { test: x => x.tokenKind == TokenKind.MATCH };
//@ts-ignore
const MAXVALUE : Tester = { test: x => x.tokenKind == TokenKind.MAXVALUE };
//@ts-ignore
const MEDIUMBLOB : Tester = { test: x => x.tokenKind == TokenKind.MEDIUMBLOB };
//@ts-ignore
const MEDIUMINT : Tester = { test: x => x.tokenKind == TokenKind.MEDIUMINT };
//@ts-ignore
const MEDIUMTEXT : Tester = { test: x => x.tokenKind == TokenKind.MEDIUMTEXT };
//@ts-ignore
const MIDDLEINT : Tester = { test: x => x.tokenKind == TokenKind.MIDDLEINT };
//@ts-ignore
const MINUTE_MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.MINUTE_MICROSECOND };
//@ts-ignore
const MINUTE_SECOND : Tester = { test: x => x.tokenKind == TokenKind.MINUTE_SECOND };
//@ts-ignore
const MOD : Tester = { test: x => x.tokenKind == TokenKind.MOD };
//@ts-ignore
const MODIFIES : Tester = { test: x => x.tokenKind == TokenKind.MODIFIES };
//@ts-ignore
const NATURAL : Tester = { test: x => x.tokenKind == TokenKind.NATURAL };
//@ts-ignore
const NOT : Tester = { test: x => x.tokenKind == TokenKind.NOT };
//@ts-ignore
const NO_WRITE_TO_BINLOG : Tester = { test: x => x.tokenKind == TokenKind.NO_WRITE_TO_BINLOG };
//@ts-ignore
const NULL : Tester = { test: x => x.tokenKind == TokenKind.NULL };
//@ts-ignore
const NUMERIC : Tester = { test: x => x.tokenKind == TokenKind.NUMERIC };
//@ts-ignore
const ON : Tester = { test: x => x.tokenKind == TokenKind.ON };
//@ts-ignore
const OPTIMIZE : Tester = { test: x => x.tokenKind == TokenKind.OPTIMIZE };
//@ts-ignore
const OPTIMIZER_COSTS : Tester = { test: x => x.tokenKind == TokenKind.OPTIMIZER_COSTS };
//@ts-ignore
const OPTION : Tester = { test: x => x.tokenKind == TokenKind.OPTION };
//@ts-ignore
const OPTIONALLY : Tester = { test: x => x.tokenKind == TokenKind.OPTIONALLY };
//@ts-ignore
const OR : Tester = { test: x => x.tokenKind == TokenKind.OR };
//@ts-ignore
const ORDER : Tester = { test: x => x.tokenKind == TokenKind.ORDER };
//@ts-ignore
const OUT : Tester = { test: x => x.tokenKind == TokenKind.OUT };
//@ts-ignore
const OUTER : Tester = { test: x => x.tokenKind == TokenKind.OUTER };
//@ts-ignore
const OUTFILE : Tester = { test: x => x.tokenKind == TokenKind.OUTFILE };
//@ts-ignore
const PARTITION : Tester = { test: x => x.tokenKind == TokenKind.PARTITION };
//@ts-ignore
const PRECISION : Tester = { test: x => x.tokenKind == TokenKind.PRECISION };
//@ts-ignore
const PRIMARY : Tester = { test: x => x.tokenKind == TokenKind.PRIMARY };
//@ts-ignore
const PROCEDURE : Tester = { test: x => x.tokenKind == TokenKind.PROCEDURE };
//@ts-ignore
const PURGE : Tester = { test: x => x.tokenKind == TokenKind.PURGE };
//@ts-ignore
const RANGE : Tester = { test: x => x.tokenKind == TokenKind.RANGE };
//@ts-ignore
const READ : Tester = { test: x => x.tokenKind == TokenKind.READ };
//@ts-ignore
const READS : Tester = { test: x => x.tokenKind == TokenKind.READS };
//@ts-ignore
const READ_WRITE : Tester = { test: x => x.tokenKind == TokenKind.READ_WRITE };
//@ts-ignore
const REAL : Tester = { test: x => x.tokenKind == TokenKind.REAL };
//@ts-ignore
const REFERENCES : Tester = { test: x => x.tokenKind == TokenKind.REFERENCES };
//@ts-ignore
const REGEXP : Tester = { test: x => x.tokenKind == TokenKind.REGEXP };
//@ts-ignore
const RELEASE : Tester = { test: x => x.tokenKind == TokenKind.RELEASE };
//@ts-ignore
const RENAME : Tester = { test: x => x.tokenKind == TokenKind.RENAME };
//@ts-ignore
const REPEAT : Tester = { test: x => x.tokenKind == TokenKind.REPEAT };
//@ts-ignore
const REPLACE : Tester = { test: x => x.tokenKind == TokenKind.REPLACE };
//@ts-ignore
const REQUIRE : Tester = { test: x => x.tokenKind == TokenKind.REQUIRE };
//@ts-ignore
const RESIGNAL : Tester = { test: x => x.tokenKind == TokenKind.RESIGNAL };
//@ts-ignore
const RESTRICT : Tester = { test: x => x.tokenKind == TokenKind.RESTRICT };
//@ts-ignore
const RETURN : Tester = { test: x => x.tokenKind == TokenKind.RETURN };
//@ts-ignore
const REVOKE : Tester = { test: x => x.tokenKind == TokenKind.REVOKE };
//@ts-ignore
const RIGHT : Tester = { test: x => x.tokenKind == TokenKind.RIGHT };
//@ts-ignore
const RLIKE : Tester = { test: x => x.tokenKind == TokenKind.RLIKE };
//@ts-ignore
const SCHEMA : Tester = { test: x => x.tokenKind == TokenKind.SCHEMA };
//@ts-ignore
const SCHEMAS : Tester = { test: x => x.tokenKind == TokenKind.SCHEMAS };
//@ts-ignore
const SECOND_MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.SECOND_MICROSECOND };
//@ts-ignore
const SELECT : Tester = { test: x => x.tokenKind == TokenKind.SELECT };
//@ts-ignore
const SENSITIVE : Tester = { test: x => x.tokenKind == TokenKind.SENSITIVE };
//@ts-ignore
const SEPARATOR : Tester = { test: x => x.tokenKind == TokenKind.SEPARATOR };
//@ts-ignore
const SET : Tester = { test: x => x.tokenKind == TokenKind.SET };
//@ts-ignore
const SHOW : Tester = { test: x => x.tokenKind == TokenKind.SHOW };
//@ts-ignore
const SIGNAL : Tester = { test: x => x.tokenKind == TokenKind.SIGNAL };
//@ts-ignore
const SMALLINT : Tester = { test: x => x.tokenKind == TokenKind.SMALLINT };
//@ts-ignore
const SPATIAL : Tester = { test: x => x.tokenKind == TokenKind.SPATIAL };
//@ts-ignore
const SPECIFIC : Tester = { test: x => x.tokenKind == TokenKind.SPECIFIC };
//@ts-ignore
const SQL : Tester = { test: x => x.tokenKind == TokenKind.SQL };
//@ts-ignore
const SQLEXCEPTION : Tester = { test: x => x.tokenKind == TokenKind.SQLEXCEPTION };
//@ts-ignore
const SQLSTATE : Tester = { test: x => x.tokenKind == TokenKind.SQLSTATE };
//@ts-ignore
const SQLWARNING : Tester = { test: x => x.tokenKind == TokenKind.SQLWARNING };
//@ts-ignore
const SQL_BIG_RESULT : Tester = { test: x => x.tokenKind == TokenKind.SQL_BIG_RESULT };
//@ts-ignore
const SQL_CALC_FOUND_ROWS : Tester = { test: x => x.tokenKind == TokenKind.SQL_CALC_FOUND_ROWS };
//@ts-ignore
const SQL_SMALL_RESULT : Tester = { test: x => x.tokenKind == TokenKind.SQL_SMALL_RESULT };
//@ts-ignore
const SSL : Tester = { test: x => x.tokenKind == TokenKind.SSL };
//@ts-ignore
const STARTING : Tester = { test: x => x.tokenKind == TokenKind.STARTING };
//@ts-ignore
const STORED : Tester = { test: x => x.tokenKind == TokenKind.STORED };
//@ts-ignore
const STRAIGHT_JOIN : Tester = { test: x => x.tokenKind == TokenKind.STRAIGHT_JOIN };
//@ts-ignore
const TABLE : Tester = { test: x => x.tokenKind == TokenKind.TABLE };
//@ts-ignore
const TERMINATED : Tester = { test: x => x.tokenKind == TokenKind.TERMINATED };
//@ts-ignore
const THEN : Tester = { test: x => x.tokenKind == TokenKind.THEN };
//@ts-ignore
const TINYBLOB : Tester = { test: x => x.tokenKind == TokenKind.TINYBLOB };
//@ts-ignore
const TINYINT : Tester = { test: x => x.tokenKind == TokenKind.TINYINT };
//@ts-ignore
const TINYTEXT : Tester = { test: x => x.tokenKind == TokenKind.TINYTEXT };
//@ts-ignore
const TO : Tester = { test: x => x.tokenKind == TokenKind.TO };
//@ts-ignore
const TRAILING : Tester = { test: x => x.tokenKind == TokenKind.TRAILING };
//@ts-ignore
const TRIGGER : Tester = { test: x => x.tokenKind == TokenKind.TRIGGER };
//@ts-ignore
const TRUE : Tester = { test: x => x.tokenKind == TokenKind.TRUE };
//@ts-ignore
const UNDO : Tester = { test: x => x.tokenKind == TokenKind.UNDO };
//@ts-ignore
const UNION : Tester = { test: x => x.tokenKind == TokenKind.UNION };
//@ts-ignore
const UNIQUE : Tester = { test: x => x.tokenKind == TokenKind.UNIQUE };
//@ts-ignore
const UNLOCK : Tester = { test: x => x.tokenKind == TokenKind.UNLOCK };
//@ts-ignore
const UNSIGNED : Tester = { test: x => x.tokenKind == TokenKind.UNSIGNED };
//@ts-ignore
const UPDATE : Tester = { test: x => x.tokenKind == TokenKind.UPDATE };
//@ts-ignore
const USAGE : Tester = { test: x => x.tokenKind == TokenKind.USAGE };
//@ts-ignore
const USE : Tester = { test: x => x.tokenKind == TokenKind.USE };
//@ts-ignore
const USING : Tester = { test: x => x.tokenKind == TokenKind.USING };
//@ts-ignore
const UTC_DATE : Tester = { test: x => x.tokenKind == TokenKind.UTC_DATE };
//@ts-ignore
const UTC_TIME : Tester = { test: x => x.tokenKind == TokenKind.UTC_TIME };
//@ts-ignore
const UTC_TIMESTAMP : Tester = { test: x => x.tokenKind == TokenKind.UTC_TIMESTAMP };
//@ts-ignore
const VALUES : Tester = { test: x => x.tokenKind == TokenKind.VALUES };
//@ts-ignore
const VARBINARY : Tester = { test: x => x.tokenKind == TokenKind.VARBINARY };
//@ts-ignore
const VARCHAR : Tester = { test: x => x.tokenKind == TokenKind.VARCHAR };
//@ts-ignore
const VARCHARACTER : Tester = { test: x => x.tokenKind == TokenKind.VARCHARACTER };
//@ts-ignore
const VARYING : Tester = { test: x => x.tokenKind == TokenKind.VARYING };
//@ts-ignore
const VIRTUAL : Tester = { test: x => x.tokenKind == TokenKind.VIRTUAL };
//@ts-ignore
const WHEN : Tester = { test: x => x.tokenKind == TokenKind.WHEN };
//@ts-ignore
const WHERE : Tester = { test: x => x.tokenKind == TokenKind.WHERE };
//@ts-ignore
const WHILE : Tester = { test: x => x.tokenKind == TokenKind.WHILE };
//@ts-ignore
const WITH : Tester = { test: x => x.tokenKind == TokenKind.WITH };
//@ts-ignore
const WRITE : Tester = { test: x => x.tokenKind == TokenKind.WRITE };
//@ts-ignore
const XOR : Tester = { test: x => x.tokenKind == TokenKind.XOR };
//@ts-ignore
const YEAR_MONTH : Tester = { test: x => x.tokenKind == TokenKind.YEAR_MONTH };
//@ts-ignore
const ZEROFILL : Tester = { test: x => x.tokenKind == TokenKind.ZEROFILL };
//@ts-ignore
const END_OF_RESERVED_KEYWORD : Tester = { test: x => x.tokenKind == TokenKind.END_OF_RESERVED_KEYWORD };
//@ts-ignore
const ACCOUNT : Tester = { test: x => x.tokenKind == TokenKind.ACCOUNT };
//@ts-ignore
const ACTION : Tester = { test: x => x.tokenKind == TokenKind.ACTION };
//@ts-ignore
const AFTER : Tester = { test: x => x.tokenKind == TokenKind.AFTER };
//@ts-ignore
const AGAINST : Tester = { test: x => x.tokenKind == TokenKind.AGAINST };
//@ts-ignore
const AGGREGATE : Tester = { test: x => x.tokenKind == TokenKind.AGGREGATE };
//@ts-ignore
const ALGORITHM : Tester = { test: x => x.tokenKind == TokenKind.ALGORITHM };
//@ts-ignore
const ALWAYS : Tester = { test: x => x.tokenKind == TokenKind.ALWAYS };
//@ts-ignore
const ANALYSE : Tester = { test: x => x.tokenKind == TokenKind.ANALYSE };
//@ts-ignore
const ANY : Tester = { test: x => x.tokenKind == TokenKind.ANY };
//@ts-ignore
const ASCII : Tester = { test: x => x.tokenKind == TokenKind.ASCII };
//@ts-ignore
const AT : Tester = { test: x => x.tokenKind == TokenKind.AT };
//@ts-ignore
const AUTOEXTEND_SIZE : Tester = { test: x => x.tokenKind == TokenKind.AUTOEXTEND_SIZE };
//@ts-ignore
const AUTO_INCREMENT : Tester = { test: x => x.tokenKind == TokenKind.AUTO_INCREMENT };
//@ts-ignore
const AVG : Tester = { test: x => x.tokenKind == TokenKind.AVG };
//@ts-ignore
const AVG_ROW_LENGTH : Tester = { test: x => x.tokenKind == TokenKind.AVG_ROW_LENGTH };
//@ts-ignore
const BACKUP : Tester = { test: x => x.tokenKind == TokenKind.BACKUP };
//@ts-ignore
const BEGIN : Tester = { test: x => x.tokenKind == TokenKind.BEGIN };
//@ts-ignore
const BINLOG : Tester = { test: x => x.tokenKind == TokenKind.BINLOG };
//@ts-ignore
const BIT : Tester = { test: x => x.tokenKind == TokenKind.BIT };
//@ts-ignore
const BLOCK : Tester = { test: x => x.tokenKind == TokenKind.BLOCK };
//@ts-ignore
const BOOL : Tester = { test: x => x.tokenKind == TokenKind.BOOL };
//@ts-ignore
const BOOLEAN : Tester = { test: x => x.tokenKind == TokenKind.BOOLEAN };
//@ts-ignore
const BTREE : Tester = { test: x => x.tokenKind == TokenKind.BTREE };
//@ts-ignore
const BYTE : Tester = { test: x => x.tokenKind == TokenKind.BYTE };
//@ts-ignore
const CACHE : Tester = { test: x => x.tokenKind == TokenKind.CACHE };
//@ts-ignore
const CASCADED : Tester = { test: x => x.tokenKind == TokenKind.CASCADED };
//@ts-ignore
const CATALOG_NAME : Tester = { test: x => x.tokenKind == TokenKind.CATALOG_NAME };
//@ts-ignore
const CHAIN : Tester = { test: x => x.tokenKind == TokenKind.CHAIN };
//@ts-ignore
const CHANGED : Tester = { test: x => x.tokenKind == TokenKind.CHANGED };
//@ts-ignore
const CHANNEL : Tester = { test: x => x.tokenKind == TokenKind.CHANNEL };
//@ts-ignore
const CHARSET : Tester = { test: x => x.tokenKind == TokenKind.CHARSET };
//@ts-ignore
const CHECKSUM : Tester = { test: x => x.tokenKind == TokenKind.CHECKSUM };
//@ts-ignore
const CIPHER : Tester = { test: x => x.tokenKind == TokenKind.CIPHER };
//@ts-ignore
const CLASS_ORIGIN : Tester = { test: x => x.tokenKind == TokenKind.CLASS_ORIGIN };
//@ts-ignore
const CLIENT : Tester = { test: x => x.tokenKind == TokenKind.CLIENT };
//@ts-ignore
const CLOSE : Tester = { test: x => x.tokenKind == TokenKind.CLOSE };
//@ts-ignore
const COALESCE : Tester = { test: x => x.tokenKind == TokenKind.COALESCE };
//@ts-ignore
const CODE : Tester = { test: x => x.tokenKind == TokenKind.CODE };
//@ts-ignore
const COLLATION : Tester = { test: x => x.tokenKind == TokenKind.COLLATION };
//@ts-ignore
const COLUMNS : Tester = { test: x => x.tokenKind == TokenKind.COLUMNS };
//@ts-ignore
const COLUMN_FORMAT : Tester = { test: x => x.tokenKind == TokenKind.COLUMN_FORMAT };
//@ts-ignore
const COLUMN_NAME : Tester = { test: x => x.tokenKind == TokenKind.COLUMN_NAME };
//@ts-ignore
const COMMENT : Tester = { test: x => x.tokenKind == TokenKind.COMMENT };
//@ts-ignore
const COMMIT : Tester = { test: x => x.tokenKind == TokenKind.COMMIT };
//@ts-ignore
const COMMITTED : Tester = { test: x => x.tokenKind == TokenKind.COMMITTED };
//@ts-ignore
const COMPACT : Tester = { test: x => x.tokenKind == TokenKind.COMPACT };
//@ts-ignore
const COMPLETION : Tester = { test: x => x.tokenKind == TokenKind.COMPLETION };
//@ts-ignore
const COMPRESSED : Tester = { test: x => x.tokenKind == TokenKind.COMPRESSED };
//@ts-ignore
const COMPRESSION : Tester = { test: x => x.tokenKind == TokenKind.COMPRESSION };
//@ts-ignore
const CONCURRENT : Tester = { test: x => x.tokenKind == TokenKind.CONCURRENT };
//@ts-ignore
const CONNECTION : Tester = { test: x => x.tokenKind == TokenKind.CONNECTION };
//@ts-ignore
const CONSISTENT : Tester = { test: x => x.tokenKind == TokenKind.CONSISTENT };
//@ts-ignore
const CONSTRAINT_CATALOG : Tester = { test: x => x.tokenKind == TokenKind.CONSTRAINT_CATALOG };
//@ts-ignore
const CONSTRAINT_NAME : Tester = { test: x => x.tokenKind == TokenKind.CONSTRAINT_NAME };
//@ts-ignore
const CONSTRAINT_SCHEMA : Tester = { test: x => x.tokenKind == TokenKind.CONSTRAINT_SCHEMA };
//@ts-ignore
const CONTAINS : Tester = { test: x => x.tokenKind == TokenKind.CONTAINS };
//@ts-ignore
const CONTEXT : Tester = { test: x => x.tokenKind == TokenKind.CONTEXT };
//@ts-ignore
const CPU : Tester = { test: x => x.tokenKind == TokenKind.CPU };
//@ts-ignore
const CUBE : Tester = { test: x => x.tokenKind == TokenKind.CUBE };
//@ts-ignore
const CURRENT : Tester = { test: x => x.tokenKind == TokenKind.CURRENT };
//@ts-ignore
const CURSOR_NAME : Tester = { test: x => x.tokenKind == TokenKind.CURSOR_NAME };
//@ts-ignore
const DATA : Tester = { test: x => x.tokenKind == TokenKind.DATA };
//@ts-ignore
const DATAFILE : Tester = { test: x => x.tokenKind == TokenKind.DATAFILE };
//@ts-ignore
const DATE : Tester = { test: x => x.tokenKind == TokenKind.DATE };
//@ts-ignore
const DATETIME : Tester = { test: x => x.tokenKind == TokenKind.DATETIME };
//@ts-ignore
const DAY : Tester = { test: x => x.tokenKind == TokenKind.DAY };
//@ts-ignore
const DEALLOCATE : Tester = { test: x => x.tokenKind == TokenKind.DEALLOCATE };
//@ts-ignore
const DEFAULT_AUTH : Tester = { test: x => x.tokenKind == TokenKind.DEFAULT_AUTH };
//@ts-ignore
const DEFINER : Tester = { test: x => x.tokenKind == TokenKind.DEFINER };
//@ts-ignore
const DELAY_KEY_WRITE : Tester = { test: x => x.tokenKind == TokenKind.DELAY_KEY_WRITE };
//@ts-ignore
const DES_KEY_FILE : Tester = { test: x => x.tokenKind == TokenKind.DES_KEY_FILE };
//@ts-ignore
const DIAGNOSTICS : Tester = { test: x => x.tokenKind == TokenKind.DIAGNOSTICS };
//@ts-ignore
const DIRECTORY : Tester = { test: x => x.tokenKind == TokenKind.DIRECTORY };
//@ts-ignore
const DISABLE : Tester = { test: x => x.tokenKind == TokenKind.DISABLE };
//@ts-ignore
const DISCARD : Tester = { test: x => x.tokenKind == TokenKind.DISCARD };
//@ts-ignore
const DISK : Tester = { test: x => x.tokenKind == TokenKind.DISK };
//@ts-ignore
const DO : Tester = { test: x => x.tokenKind == TokenKind.DO };
//@ts-ignore
const DUMPFILE : Tester = { test: x => x.tokenKind == TokenKind.DUMPFILE };
//@ts-ignore
const DUPLICATE : Tester = { test: x => x.tokenKind == TokenKind.DUPLICATE };
//@ts-ignore
const DYNAMIC : Tester = { test: x => x.tokenKind == TokenKind.DYNAMIC };
//@ts-ignore
const ENABLE : Tester = { test: x => x.tokenKind == TokenKind.ENABLE };
//@ts-ignore
const ENCRYPTION : Tester = { test: x => x.tokenKind == TokenKind.ENCRYPTION };
//@ts-ignore
const END : Tester = { test: x => x.tokenKind == TokenKind.END };
//@ts-ignore
const ENDS : Tester = { test: x => x.tokenKind == TokenKind.ENDS };
//@ts-ignore
const ENGINE : Tester = { test: x => x.tokenKind == TokenKind.ENGINE };
//@ts-ignore
const ENGINES : Tester = { test: x => x.tokenKind == TokenKind.ENGINES };
//@ts-ignore
const ENUM : Tester = { test: x => x.tokenKind == TokenKind.ENUM };
//@ts-ignore
const ERROR : Tester = { test: x => x.tokenKind == TokenKind.ERROR };
//@ts-ignore
const ERRORS : Tester = { test: x => x.tokenKind == TokenKind.ERRORS };
//@ts-ignore
const ESCAPE : Tester = { test: x => x.tokenKind == TokenKind.ESCAPE };
//@ts-ignore
const EVENT : Tester = { test: x => x.tokenKind == TokenKind.EVENT };
//@ts-ignore
const EVENTS : Tester = { test: x => x.tokenKind == TokenKind.EVENTS };
//@ts-ignore
const EVERY : Tester = { test: x => x.tokenKind == TokenKind.EVERY };
//@ts-ignore
const EXCHANGE : Tester = { test: x => x.tokenKind == TokenKind.EXCHANGE };
//@ts-ignore
const EXECUTE : Tester = { test: x => x.tokenKind == TokenKind.EXECUTE };
//@ts-ignore
const EXPANSION : Tester = { test: x => x.tokenKind == TokenKind.EXPANSION };
//@ts-ignore
const EXPIRE : Tester = { test: x => x.tokenKind == TokenKind.EXPIRE };
//@ts-ignore
const EXPORT : Tester = { test: x => x.tokenKind == TokenKind.EXPORT };
//@ts-ignore
const EXTENDED : Tester = { test: x => x.tokenKind == TokenKind.EXTENDED };
//@ts-ignore
const EXTENT_SIZE : Tester = { test: x => x.tokenKind == TokenKind.EXTENT_SIZE };
//@ts-ignore
const FAST : Tester = { test: x => x.tokenKind == TokenKind.FAST };
//@ts-ignore
const FAULTS : Tester = { test: x => x.tokenKind == TokenKind.FAULTS };
//@ts-ignore
const FIELDS : Tester = { test: x => x.tokenKind == TokenKind.FIELDS };
//@ts-ignore
const FILE : Tester = { test: x => x.tokenKind == TokenKind.FILE };
//@ts-ignore
const FILE_BLOCK_SIZE : Tester = { test: x => x.tokenKind == TokenKind.FILE_BLOCK_SIZE };
//@ts-ignore
const FILTER : Tester = { test: x => x.tokenKind == TokenKind.FILTER };
//@ts-ignore
const FIRST : Tester = { test: x => x.tokenKind == TokenKind.FIRST };
//@ts-ignore
const FIXED : Tester = { test: x => x.tokenKind == TokenKind.FIXED };
//@ts-ignore
const FLUSH : Tester = { test: x => x.tokenKind == TokenKind.FLUSH };
//@ts-ignore
const FOLLOWS : Tester = { test: x => x.tokenKind == TokenKind.FOLLOWS };
//@ts-ignore
const FORMAT : Tester = { test: x => x.tokenKind == TokenKind.FORMAT };
//@ts-ignore
const FOUND : Tester = { test: x => x.tokenKind == TokenKind.FOUND };
//@ts-ignore
const FULL : Tester = { test: x => x.tokenKind == TokenKind.FULL };
//@ts-ignore
const FUNCTION : Tester = { test: x => x.tokenKind == TokenKind.FUNCTION };
//@ts-ignore
const GENERAL : Tester = { test: x => x.tokenKind == TokenKind.GENERAL };
//@ts-ignore
const GEOMETRY : Tester = { test: x => x.tokenKind == TokenKind.GEOMETRY };
//@ts-ignore
const GEOMETRYCOLLECTION : Tester = { test: x => x.tokenKind == TokenKind.GEOMETRYCOLLECTION };
//@ts-ignore
const GET_FORMAT : Tester = { test: x => x.tokenKind == TokenKind.GET_FORMAT };
//@ts-ignore
const GLOBAL : Tester = { test: x => x.tokenKind == TokenKind.GLOBAL };
//@ts-ignore
const GRANTS : Tester = { test: x => x.tokenKind == TokenKind.GRANTS };
//@ts-ignore
const GROUP_REPLICATION : Tester = { test: x => x.tokenKind == TokenKind.GROUP_REPLICATION };
//@ts-ignore
const HANDLER : Tester = { test: x => x.tokenKind == TokenKind.HANDLER };
//@ts-ignore
const HASH : Tester = { test: x => x.tokenKind == TokenKind.HASH };
//@ts-ignore
const HELP : Tester = { test: x => x.tokenKind == TokenKind.HELP };
//@ts-ignore
const HOST : Tester = { test: x => x.tokenKind == TokenKind.HOST };
//@ts-ignore
const HOSTS : Tester = { test: x => x.tokenKind == TokenKind.HOSTS };
//@ts-ignore
const HOUR : Tester = { test: x => x.tokenKind == TokenKind.HOUR };
//@ts-ignore
const IDENTIFIED : Tester = { test: x => x.tokenKind == TokenKind.IDENTIFIED };
//@ts-ignore
const IGNORE_SERVER_IDS : Tester = { test: x => x.tokenKind == TokenKind.IGNORE_SERVER_IDS };
//@ts-ignore
const IMPORT : Tester = { test: x => x.tokenKind == TokenKind.IMPORT };
//@ts-ignore
const INDEXES : Tester = { test: x => x.tokenKind == TokenKind.INDEXES };
//@ts-ignore
const INITIAL_SIZE : Tester = { test: x => x.tokenKind == TokenKind.INITIAL_SIZE };
//@ts-ignore
const INSERT_METHOD : Tester = { test: x => x.tokenKind == TokenKind.INSERT_METHOD };
//@ts-ignore
const INSTALL : Tester = { test: x => x.tokenKind == TokenKind.INSTALL };
//@ts-ignore
const INSTANCE : Tester = { test: x => x.tokenKind == TokenKind.INSTANCE };
//@ts-ignore
const INVOKER : Tester = { test: x => x.tokenKind == TokenKind.INVOKER };
//@ts-ignore
const IO : Tester = { test: x => x.tokenKind == TokenKind.IO };
//@ts-ignore
const IO_THREAD : Tester = { test: x => x.tokenKind == TokenKind.IO_THREAD };
//@ts-ignore
const IPC : Tester = { test: x => x.tokenKind == TokenKind.IPC };
//@ts-ignore
const ISOLATION : Tester = { test: x => x.tokenKind == TokenKind.ISOLATION };
//@ts-ignore
const ISSUER : Tester = { test: x => x.tokenKind == TokenKind.ISSUER };
//@ts-ignore
const JSON : Tester = { test: x => x.tokenKind == TokenKind.JSON };
//@ts-ignore
const KEY_BLOCK_SIZE : Tester = { test: x => x.tokenKind == TokenKind.KEY_BLOCK_SIZE };
//@ts-ignore
const LANGUAGE : Tester = { test: x => x.tokenKind == TokenKind.LANGUAGE };
//@ts-ignore
const LAST : Tester = { test: x => x.tokenKind == TokenKind.LAST };
//@ts-ignore
const LEAVES : Tester = { test: x => x.tokenKind == TokenKind.LEAVES };
//@ts-ignore
const LESS : Tester = { test: x => x.tokenKind == TokenKind.LESS };
//@ts-ignore
const LEVEL : Tester = { test: x => x.tokenKind == TokenKind.LEVEL };
//@ts-ignore
const LINESTRING : Tester = { test: x => x.tokenKind == TokenKind.LINESTRING };
//@ts-ignore
const LIST : Tester = { test: x => x.tokenKind == TokenKind.LIST };
//@ts-ignore
const LOCAL : Tester = { test: x => x.tokenKind == TokenKind.LOCAL };
//@ts-ignore
const LOCKS : Tester = { test: x => x.tokenKind == TokenKind.LOCKS };
//@ts-ignore
const LOGFILE : Tester = { test: x => x.tokenKind == TokenKind.LOGFILE };
//@ts-ignore
const LOGS : Tester = { test: x => x.tokenKind == TokenKind.LOGS };
//@ts-ignore
const MASTER : Tester = { test: x => x.tokenKind == TokenKind.MASTER };
//@ts-ignore
const MASTER_AUTO_POSITION : Tester = { test: x => x.tokenKind == TokenKind.MASTER_AUTO_POSITION };
//@ts-ignore
const MASTER_CONNECT_RETRY : Tester = { test: x => x.tokenKind == TokenKind.MASTER_CONNECT_RETRY };
//@ts-ignore
const MASTER_DELAY : Tester = { test: x => x.tokenKind == TokenKind.MASTER_DELAY };
//@ts-ignore
const MASTER_HEARTBEAT_PERIOD : Tester = { test: x => x.tokenKind == TokenKind.MASTER_HEARTBEAT_PERIOD };
//@ts-ignore
const MASTER_HOST : Tester = { test: x => x.tokenKind == TokenKind.MASTER_HOST };
//@ts-ignore
const MASTER_LOG_FILE : Tester = { test: x => x.tokenKind == TokenKind.MASTER_LOG_FILE };
//@ts-ignore
const MASTER_LOG_POS : Tester = { test: x => x.tokenKind == TokenKind.MASTER_LOG_POS };
//@ts-ignore
const MASTER_PASSWORD : Tester = { test: x => x.tokenKind == TokenKind.MASTER_PASSWORD };
//@ts-ignore
const MASTER_PORT : Tester = { test: x => x.tokenKind == TokenKind.MASTER_PORT };
//@ts-ignore
const MASTER_RETRY_COUNT : Tester = { test: x => x.tokenKind == TokenKind.MASTER_RETRY_COUNT };
//@ts-ignore
const MASTER_SERVER_ID : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SERVER_ID };
//@ts-ignore
const MASTER_SSL : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL };
//@ts-ignore
const MASTER_SSL_CA : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CA };
//@ts-ignore
const MASTER_SSL_CAPATH : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CAPATH };
//@ts-ignore
const MASTER_SSL_CERT : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CERT };
//@ts-ignore
const MASTER_SSL_CIPHER : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CIPHER };
//@ts-ignore
const MASTER_SSL_CRL : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CRL };
//@ts-ignore
const MASTER_SSL_CRLPATH : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_CRLPATH };
//@ts-ignore
const MASTER_SSL_KEY : Tester = { test: x => x.tokenKind == TokenKind.MASTER_SSL_KEY };
//@ts-ignore
const MASTER_TLS_VERSION : Tester = { test: x => x.tokenKind == TokenKind.MASTER_TLS_VERSION };
//@ts-ignore
const MASTER_USER : Tester = { test: x => x.tokenKind == TokenKind.MASTER_USER };
//@ts-ignore
const MAX_CONNECTIONS_PER_HOUR : Tester = { test: x => x.tokenKind == TokenKind.MAX_CONNECTIONS_PER_HOUR };
//@ts-ignore
const MAX_QUERIES_PER_HOUR : Tester = { test: x => x.tokenKind == TokenKind.MAX_QUERIES_PER_HOUR };
//@ts-ignore
const MAX_ROWS : Tester = { test: x => x.tokenKind == TokenKind.MAX_ROWS };
//@ts-ignore
const MAX_SIZE : Tester = { test: x => x.tokenKind == TokenKind.MAX_SIZE };
//@ts-ignore
const MAX_STATEMENT_TIME : Tester = { test: x => x.tokenKind == TokenKind.MAX_STATEMENT_TIME };
//@ts-ignore
const MAX_UPDATES_PER_HOUR : Tester = { test: x => x.tokenKind == TokenKind.MAX_UPDATES_PER_HOUR };
//@ts-ignore
const MAX_USER_CONNECTIONS : Tester = { test: x => x.tokenKind == TokenKind.MAX_USER_CONNECTIONS };
//@ts-ignore
const MEDIUM : Tester = { test: x => x.tokenKind == TokenKind.MEDIUM };
//@ts-ignore
const MEMORY : Tester = { test: x => x.tokenKind == TokenKind.MEMORY };
//@ts-ignore
const MERGE : Tester = { test: x => x.tokenKind == TokenKind.MERGE };
//@ts-ignore
const MESSAGE_TEXT : Tester = { test: x => x.tokenKind == TokenKind.MESSAGE_TEXT };
//@ts-ignore
const MICROSECOND : Tester = { test: x => x.tokenKind == TokenKind.MICROSECOND };
//@ts-ignore
const MIGRATE : Tester = { test: x => x.tokenKind == TokenKind.MIGRATE };
//@ts-ignore
const MINUTE : Tester = { test: x => x.tokenKind == TokenKind.MINUTE };
//@ts-ignore
const MIN_ROWS : Tester = { test: x => x.tokenKind == TokenKind.MIN_ROWS };
//@ts-ignore
const MODE : Tester = { test: x => x.tokenKind == TokenKind.MODE };
//@ts-ignore
const MODIFY : Tester = { test: x => x.tokenKind == TokenKind.MODIFY };
//@ts-ignore
const MONTH : Tester = { test: x => x.tokenKind == TokenKind.MONTH };
//@ts-ignore
const MULTILINESTRING : Tester = { test: x => x.tokenKind == TokenKind.MULTILINESTRING };
//@ts-ignore
const MULTIPOINT : Tester = { test: x => x.tokenKind == TokenKind.MULTIPOINT };
//@ts-ignore
const MULTIPOLYGON : Tester = { test: x => x.tokenKind == TokenKind.MULTIPOLYGON };
//@ts-ignore
const MUTEX : Tester = { test: x => x.tokenKind == TokenKind.MUTEX };
//@ts-ignore
const MYSQL_ERRNO : Tester = { test: x => x.tokenKind == TokenKind.MYSQL_ERRNO };
//@ts-ignore
const NAME : Tester = { test: x => x.tokenKind == TokenKind.NAME };
//@ts-ignore
const NAMES : Tester = { test: x => x.tokenKind == TokenKind.NAMES };
//@ts-ignore
const NATIONAL : Tester = { test: x => x.tokenKind == TokenKind.NATIONAL };
//@ts-ignore
const NCHAR : Tester = { test: x => x.tokenKind == TokenKind.NCHAR };
//@ts-ignore
const NDB : Tester = { test: x => x.tokenKind == TokenKind.NDB };
//@ts-ignore
const NDBCLUSTER : Tester = { test: x => x.tokenKind == TokenKind.NDBCLUSTER };
//@ts-ignore
const NEVER : Tester = { test: x => x.tokenKind == TokenKind.NEVER };
//@ts-ignore
const NEW : Tester = { test: x => x.tokenKind == TokenKind.NEW };
//@ts-ignore
const NEXT : Tester = { test: x => x.tokenKind == TokenKind.NEXT };
//@ts-ignore
const NO : Tester = { test: x => x.tokenKind == TokenKind.NO };
//@ts-ignore
const NODEGROUP : Tester = { test: x => x.tokenKind == TokenKind.NODEGROUP };
//@ts-ignore
const NONBLOCKING : Tester = { test: x => x.tokenKind == TokenKind.NONBLOCKING };
//@ts-ignore
const NONE : Tester = { test: x => x.tokenKind == TokenKind.NONE };
//@ts-ignore
const NO_WAIT : Tester = { test: x => x.tokenKind == TokenKind.NO_WAIT };
//@ts-ignore
const NUMBER : Tester = { test: x => x.tokenKind == TokenKind.NUMBER };
//@ts-ignore
const NVARCHAR : Tester = { test: x => x.tokenKind == TokenKind.NVARCHAR };
//@ts-ignore
const OFFSET : Tester = { test: x => x.tokenKind == TokenKind.OFFSET };
//@ts-ignore
const OLD_PASSWORD : Tester = { test: x => x.tokenKind == TokenKind.OLD_PASSWORD };
//@ts-ignore
const ONE : Tester = { test: x => x.tokenKind == TokenKind.ONE };
//@ts-ignore
const ONLY : Tester = { test: x => x.tokenKind == TokenKind.ONLY };
//@ts-ignore
const OPEN : Tester = { test: x => x.tokenKind == TokenKind.OPEN };
//@ts-ignore
const OPTIONS : Tester = { test: x => x.tokenKind == TokenKind.OPTIONS };
//@ts-ignore
const OWNER : Tester = { test: x => x.tokenKind == TokenKind.OWNER };
//@ts-ignore
const PACK_KEYS : Tester = { test: x => x.tokenKind == TokenKind.PACK_KEYS };
//@ts-ignore
const PAGE : Tester = { test: x => x.tokenKind == TokenKind.PAGE };
//@ts-ignore
const PARSER : Tester = { test: x => x.tokenKind == TokenKind.PARSER };
//@ts-ignore
const PARSE_GCOL_EXPR : Tester = { test: x => x.tokenKind == TokenKind.PARSE_GCOL_EXPR };
//@ts-ignore
const PARTIAL : Tester = { test: x => x.tokenKind == TokenKind.PARTIAL };
//@ts-ignore
const PARTITIONING : Tester = { test: x => x.tokenKind == TokenKind.PARTITIONING };
//@ts-ignore
const PARTITIONS : Tester = { test: x => x.tokenKind == TokenKind.PARTITIONS };
//@ts-ignore
const PASSWORD : Tester = { test: x => x.tokenKind == TokenKind.PASSWORD };
//@ts-ignore
const PHASE : Tester = { test: x => x.tokenKind == TokenKind.PHASE };
//@ts-ignore
const PLUGIN : Tester = { test: x => x.tokenKind == TokenKind.PLUGIN };
//@ts-ignore
const PLUGINS : Tester = { test: x => x.tokenKind == TokenKind.PLUGINS };
//@ts-ignore
const PLUGIN_DIR : Tester = { test: x => x.tokenKind == TokenKind.PLUGIN_DIR };
//@ts-ignore
const POINT : Tester = { test: x => x.tokenKind == TokenKind.POINT };
//@ts-ignore
const POLYGON : Tester = { test: x => x.tokenKind == TokenKind.POLYGON };
//@ts-ignore
const PORT : Tester = { test: x => x.tokenKind == TokenKind.PORT };
//@ts-ignore
const PRECEDES : Tester = { test: x => x.tokenKind == TokenKind.PRECEDES };
//@ts-ignore
const PREPARE : Tester = { test: x => x.tokenKind == TokenKind.PREPARE };
//@ts-ignore
const PRESERVE : Tester = { test: x => x.tokenKind == TokenKind.PRESERVE };
//@ts-ignore
const PREV : Tester = { test: x => x.tokenKind == TokenKind.PREV };
//@ts-ignore
const PRIVILEGES : Tester = { test: x => x.tokenKind == TokenKind.PRIVILEGES };
//@ts-ignore
const PROCESSLIST : Tester = { test: x => x.tokenKind == TokenKind.PROCESSLIST };
//@ts-ignore
const PROFILE : Tester = { test: x => x.tokenKind == TokenKind.PROFILE };
//@ts-ignore
const PROFILES : Tester = { test: x => x.tokenKind == TokenKind.PROFILES };
//@ts-ignore
const PROXY : Tester = { test: x => x.tokenKind == TokenKind.PROXY };
//@ts-ignore
const QUARTER : Tester = { test: x => x.tokenKind == TokenKind.QUARTER };
//@ts-ignore
const QUERY : Tester = { test: x => x.tokenKind == TokenKind.QUERY };
//@ts-ignore
const QUICK : Tester = { test: x => x.tokenKind == TokenKind.QUICK };
//@ts-ignore
const READ_ONLY : Tester = { test: x => x.tokenKind == TokenKind.READ_ONLY };
//@ts-ignore
const REBUILD : Tester = { test: x => x.tokenKind == TokenKind.REBUILD };
//@ts-ignore
const RECOVER : Tester = { test: x => x.tokenKind == TokenKind.RECOVER };
//@ts-ignore
const REDOFILE : Tester = { test: x => x.tokenKind == TokenKind.REDOFILE };
//@ts-ignore
const REDO_BUFFER_SIZE : Tester = { test: x => x.tokenKind == TokenKind.REDO_BUFFER_SIZE };
//@ts-ignore
const REDUNDANT : Tester = { test: x => x.tokenKind == TokenKind.REDUNDANT };
//@ts-ignore
const RELAY : Tester = { test: x => x.tokenKind == TokenKind.RELAY };
//@ts-ignore
const RELAYLOG : Tester = { test: x => x.tokenKind == TokenKind.RELAYLOG };
//@ts-ignore
const RELAY_LOG_FILE : Tester = { test: x => x.tokenKind == TokenKind.RELAY_LOG_FILE };
//@ts-ignore
const RELAY_LOG_POS : Tester = { test: x => x.tokenKind == TokenKind.RELAY_LOG_POS };
//@ts-ignore
const RELAY_THREAD : Tester = { test: x => x.tokenKind == TokenKind.RELAY_THREAD };
//@ts-ignore
const RELOAD : Tester = { test: x => x.tokenKind == TokenKind.RELOAD };
//@ts-ignore
const REMOVE : Tester = { test: x => x.tokenKind == TokenKind.REMOVE };
//@ts-ignore
const REORGANIZE : Tester = { test: x => x.tokenKind == TokenKind.REORGANIZE };
//@ts-ignore
const REPAIR : Tester = { test: x => x.tokenKind == TokenKind.REPAIR };
//@ts-ignore
const REPEATABLE : Tester = { test: x => x.tokenKind == TokenKind.REPEATABLE };
//@ts-ignore
const REPLICATE_DO_DB : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_DO_DB };
//@ts-ignore
const REPLICATE_DO_TABLE : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_DO_TABLE };
//@ts-ignore
const REPLICATE_IGNORE_DB : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_IGNORE_DB };
//@ts-ignore
const REPLICATE_IGNORE_TABLE : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_IGNORE_TABLE };
//@ts-ignore
const REPLICATE_REWRITE_DB : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_REWRITE_DB };
//@ts-ignore
const REPLICATE_WILD_DO_TABLE : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_WILD_DO_TABLE };
//@ts-ignore
const REPLICATE_WILD_IGNORE_TABLE : Tester = { test: x => x.tokenKind == TokenKind.REPLICATE_WILD_IGNORE_TABLE };
//@ts-ignore
const REPLICATION : Tester = { test: x => x.tokenKind == TokenKind.REPLICATION };
//@ts-ignore
const RESET : Tester = { test: x => x.tokenKind == TokenKind.RESET };
//@ts-ignore
const RESTORE : Tester = { test: x => x.tokenKind == TokenKind.RESTORE };
//@ts-ignore
const RESUME : Tester = { test: x => x.tokenKind == TokenKind.RESUME };
//@ts-ignore
const RETURNED_SQLSTATE : Tester = { test: x => x.tokenKind == TokenKind.RETURNED_SQLSTATE };
//@ts-ignore
const RETURNS : Tester = { test: x => x.tokenKind == TokenKind.RETURNS };
//@ts-ignore
const REVERSE : Tester = { test: x => x.tokenKind == TokenKind.REVERSE };
//@ts-ignore
const ROLLBACK : Tester = { test: x => x.tokenKind == TokenKind.ROLLBACK };
//@ts-ignore
const ROLLUP : Tester = { test: x => x.tokenKind == TokenKind.ROLLUP };
//@ts-ignore
const ROTATE : Tester = { test: x => x.tokenKind == TokenKind.ROTATE };
//@ts-ignore
const ROUTINE : Tester = { test: x => x.tokenKind == TokenKind.ROUTINE };
//@ts-ignore
const ROW : Tester = { test: x => x.tokenKind == TokenKind.ROW };
//@ts-ignore
const ROWS : Tester = { test: x => x.tokenKind == TokenKind.ROWS };
//@ts-ignore
const ROW_COUNT : Tester = { test: x => x.tokenKind == TokenKind.ROW_COUNT };
//@ts-ignore
const ROW_FORMAT : Tester = { test: x => x.tokenKind == TokenKind.ROW_FORMAT };
//@ts-ignore
const RTREE : Tester = { test: x => x.tokenKind == TokenKind.RTREE };
//@ts-ignore
const SAVEPOINT : Tester = { test: x => x.tokenKind == TokenKind.SAVEPOINT };
//@ts-ignore
const SCHEDULE : Tester = { test: x => x.tokenKind == TokenKind.SCHEDULE };
//@ts-ignore
const SCHEMA_NAME : Tester = { test: x => x.tokenKind == TokenKind.SCHEMA_NAME };
//@ts-ignore
const SECOND : Tester = { test: x => x.tokenKind == TokenKind.SECOND };
//@ts-ignore
const SECURITY : Tester = { test: x => x.tokenKind == TokenKind.SECURITY };
//@ts-ignore
const SERIAL : Tester = { test: x => x.tokenKind == TokenKind.SERIAL };
//@ts-ignore
const SERIALIZABLE : Tester = { test: x => x.tokenKind == TokenKind.SERIALIZABLE };
//@ts-ignore
const SERVER : Tester = { test: x => x.tokenKind == TokenKind.SERVER };
//@ts-ignore
const SESSION : Tester = { test: x => x.tokenKind == TokenKind.SESSION };
//@ts-ignore
const SHARE : Tester = { test: x => x.tokenKind == TokenKind.SHARE };
//@ts-ignore
const SHUTDOWN : Tester = { test: x => x.tokenKind == TokenKind.SHUTDOWN };
//@ts-ignore
const SIGNED : Tester = { test: x => x.tokenKind == TokenKind.SIGNED };
//@ts-ignore
const SIMPLE : Tester = { test: x => x.tokenKind == TokenKind.SIMPLE };
//@ts-ignore
const SLAVE : Tester = { test: x => x.tokenKind == TokenKind.SLAVE };
//@ts-ignore
const SLOW : Tester = { test: x => x.tokenKind == TokenKind.SLOW };
//@ts-ignore
const SNAPSHOT : Tester = { test: x => x.tokenKind == TokenKind.SNAPSHOT };
//@ts-ignore
const SOCKET : Tester = { test: x => x.tokenKind == TokenKind.SOCKET };
//@ts-ignore
const SOME : Tester = { test: x => x.tokenKind == TokenKind.SOME };
//@ts-ignore
const SONAME : Tester = { test: x => x.tokenKind == TokenKind.SONAME };
//@ts-ignore
const SOUNDS : Tester = { test: x => x.tokenKind == TokenKind.SOUNDS };
//@ts-ignore
const SOURCE : Tester = { test: x => x.tokenKind == TokenKind.SOURCE };
//@ts-ignore
const SQL_AFTER_GTIDS : Tester = { test: x => x.tokenKind == TokenKind.SQL_AFTER_GTIDS };
//@ts-ignore
const SQL_AFTER_MTS_GAPS : Tester = { test: x => x.tokenKind == TokenKind.SQL_AFTER_MTS_GAPS };
//@ts-ignore
const SQL_BEFORE_GTIDS : Tester = { test: x => x.tokenKind == TokenKind.SQL_BEFORE_GTIDS };
//@ts-ignore
const SQL_BUFFER_RESULT : Tester = { test: x => x.tokenKind == TokenKind.SQL_BUFFER_RESULT };
//@ts-ignore
const SQL_CACHE : Tester = { test: x => x.tokenKind == TokenKind.SQL_CACHE };
//@ts-ignore
const SQL_NO_CACHE : Tester = { test: x => x.tokenKind == TokenKind.SQL_NO_CACHE };
//@ts-ignore
const SQL_THREAD : Tester = { test: x => x.tokenKind == TokenKind.SQL_THREAD };
//@ts-ignore
const SQL_TSI_DAY : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_DAY };
//@ts-ignore
const SQL_TSI_HOUR : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_HOUR };
//@ts-ignore
const SQL_TSI_MINUTE : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_MINUTE };
//@ts-ignore
const SQL_TSI_MONTH : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_MONTH };
//@ts-ignore
const SQL_TSI_QUARTER : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_QUARTER };
//@ts-ignore
const SQL_TSI_SECOND : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_SECOND };
//@ts-ignore
const SQL_TSI_WEEK : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_WEEK };
//@ts-ignore
const SQL_TSI_YEAR : Tester = { test: x => x.tokenKind == TokenKind.SQL_TSI_YEAR };
//@ts-ignore
const STACKED : Tester = { test: x => x.tokenKind == TokenKind.STACKED };
//@ts-ignore
const START : Tester = { test: x => x.tokenKind == TokenKind.START };
//@ts-ignore
const STARTS : Tester = { test: x => x.tokenKind == TokenKind.STARTS };
//@ts-ignore
const STATS_AUTO_RECALC : Tester = { test: x => x.tokenKind == TokenKind.STATS_AUTO_RECALC };
//@ts-ignore
const STATS_PERSISTENT : Tester = { test: x => x.tokenKind == TokenKind.STATS_PERSISTENT };
//@ts-ignore
const STATS_SAMPLE_PAGES : Tester = { test: x => x.tokenKind == TokenKind.STATS_SAMPLE_PAGES };
//@ts-ignore
const STATUS : Tester = { test: x => x.tokenKind == TokenKind.STATUS };
//@ts-ignore
const STOP : Tester = { test: x => x.tokenKind == TokenKind.STOP };
//@ts-ignore
const STORAGE : Tester = { test: x => x.tokenKind == TokenKind.STORAGE };
//@ts-ignore
const STRING : Tester = { test: x => x.tokenKind == TokenKind.STRING };
//@ts-ignore
const SUBCLASS_ORIGIN : Tester = { test: x => x.tokenKind == TokenKind.SUBCLASS_ORIGIN };
//@ts-ignore
const SUBJECT : Tester = { test: x => x.tokenKind == TokenKind.SUBJECT };
//@ts-ignore
const SUBPARTITION : Tester = { test: x => x.tokenKind == TokenKind.SUBPARTITION };
//@ts-ignore
const SUBPARTITIONS : Tester = { test: x => x.tokenKind == TokenKind.SUBPARTITIONS };
//@ts-ignore
const SUPER : Tester = { test: x => x.tokenKind == TokenKind.SUPER };
//@ts-ignore
const SUSPEND : Tester = { test: x => x.tokenKind == TokenKind.SUSPEND };
//@ts-ignore
const SWAPS : Tester = { test: x => x.tokenKind == TokenKind.SWAPS };
//@ts-ignore
const SWITCHES : Tester = { test: x => x.tokenKind == TokenKind.SWITCHES };
//@ts-ignore
const TABLES : Tester = { test: x => x.tokenKind == TokenKind.TABLES };
//@ts-ignore
const TABLESPACE : Tester = { test: x => x.tokenKind == TokenKind.TABLESPACE };
//@ts-ignore
const TABLE_CHECKSUM : Tester = { test: x => x.tokenKind == TokenKind.TABLE_CHECKSUM };
//@ts-ignore
const TABLE_NAME : Tester = { test: x => x.tokenKind == TokenKind.TABLE_NAME };
//@ts-ignore
const TEMPORARY : Tester = { test: x => x.tokenKind == TokenKind.TEMPORARY };
//@ts-ignore
const TEMPTABLE : Tester = { test: x => x.tokenKind == TokenKind.TEMPTABLE };
//@ts-ignore
const TEXT : Tester = { test: x => x.tokenKind == TokenKind.TEXT };
//@ts-ignore
const THAN : Tester = { test: x => x.tokenKind == TokenKind.THAN };
//@ts-ignore
const TIME : Tester = { test: x => x.tokenKind == TokenKind.TIME };
//@ts-ignore
const TIMESTAMP : Tester = { test: x => x.tokenKind == TokenKind.TIMESTAMP };
//@ts-ignore
const TIMESTAMPADD : Tester = { test: x => x.tokenKind == TokenKind.TIMESTAMPADD };
//@ts-ignore
const TIMESTAMPDIFF : Tester = { test: x => x.tokenKind == TokenKind.TIMESTAMPDIFF };
//@ts-ignore
const TRANSACTION : Tester = { test: x => x.tokenKind == TokenKind.TRANSACTION };
//@ts-ignore
const TRIGGERS : Tester = { test: x => x.tokenKind == TokenKind.TRIGGERS };
//@ts-ignore
const TRUNCATE : Tester = { test: x => x.tokenKind == TokenKind.TRUNCATE };
//@ts-ignore
const TYPE : Tester = { test: x => x.tokenKind == TokenKind.TYPE };
//@ts-ignore
const TYPES : Tester = { test: x => x.tokenKind == TokenKind.TYPES };
//@ts-ignore
const UNCOMMITTED : Tester = { test: x => x.tokenKind == TokenKind.UNCOMMITTED };
//@ts-ignore
const UNDEFINED : Tester = { test: x => x.tokenKind == TokenKind.UNDEFINED };
//@ts-ignore
const UNDOFILE : Tester = { test: x => x.tokenKind == TokenKind.UNDOFILE };
//@ts-ignore
const UNDO_BUFFER_SIZE : Tester = { test: x => x.tokenKind == TokenKind.UNDO_BUFFER_SIZE };
//@ts-ignore
const UNICODE : Tester = { test: x => x.tokenKind == TokenKind.UNICODE };
//@ts-ignore
const UNINSTALL : Tester = { test: x => x.tokenKind == TokenKind.UNINSTALL };
//@ts-ignore
const UNKNOWN : Tester = { test: x => x.tokenKind == TokenKind.UNKNOWN };
//@ts-ignore
const UNTIL : Tester = { test: x => x.tokenKind == TokenKind.UNTIL };
//@ts-ignore
const UPGRADE : Tester = { test: x => x.tokenKind == TokenKind.UPGRADE };
//@ts-ignore
const USER : Tester = { test: x => x.tokenKind == TokenKind.USER };
//@ts-ignore
const USER_RESOURCES : Tester = { test: x => x.tokenKind == TokenKind.USER_RESOURCES };
//@ts-ignore
const USE_FRM : Tester = { test: x => x.tokenKind == TokenKind.USE_FRM };
//@ts-ignore
const VALIDATION : Tester = { test: x => x.tokenKind == TokenKind.VALIDATION };
//@ts-ignore
const VALUE : Tester = { test: x => x.tokenKind == TokenKind.VALUE };
//@ts-ignore
const VARIABLES : Tester = { test: x => x.tokenKind == TokenKind.VARIABLES };
//@ts-ignore
const VIEW : Tester = { test: x => x.tokenKind == TokenKind.VIEW };
//@ts-ignore
const WAIT : Tester = { test: x => x.tokenKind == TokenKind.WAIT };
//@ts-ignore
const WARNINGS : Tester = { test: x => x.tokenKind == TokenKind.WARNINGS };
//@ts-ignore
const WEEK : Tester = { test: x => x.tokenKind == TokenKind.WEEK };
//@ts-ignore
const WEIGHT_STRING : Tester = { test: x => x.tokenKind == TokenKind.WEIGHT_STRING };
//@ts-ignore
const WITHOUT : Tester = { test: x => x.tokenKind == TokenKind.WITHOUT };
//@ts-ignore
const WORK : Tester = { test: x => x.tokenKind == TokenKind.WORK };
//@ts-ignore
const WRAPPER : Tester = { test: x => x.tokenKind == TokenKind.WRAPPER };
//@ts-ignore
const X509 : Tester = { test: x => x.tokenKind == TokenKind.X509 };
//@ts-ignore
const XA : Tester = { test: x => x.tokenKind == TokenKind.XA };
//@ts-ignore
const XID : Tester = { test: x => x.tokenKind == TokenKind.XID };
//@ts-ignore
const XML : Tester = { test: x => x.tokenKind == TokenKind.XML };
//@ts-ignore
const YEAR : Tester = { test: x => x.tokenKind == TokenKind.YEAR };
//@ts-ignore
const END_OF_NON_RESERVED_KEYWORD : Tester = { test: x => x.tokenKind == TokenKind.END_OF_NON_RESERVED_KEYWORD };
//@ts-ignore
const EndOfFile : Tester = { test: x => x.tokenKind == TokenKind.EndOfFile };
//@ts-ignore
const UnknownToken : Tester = { test: x => x.tokenKind == TokenKind.UnknownToken };
//@ts-ignore
const CustomDelimiter : Tester = { test: x => x.tokenKind == TokenKind.CustomDelimiter };
//@ts-ignore
const StringLiteral : Tester = { test: x => x.tokenKind == TokenKind.StringLiteral };
//@ts-ignore
const IntegerLiteral : Tester = { test: x => x.tokenKind == TokenKind.IntegerLiteral };
//@ts-ignore
const DecimalLiteral : Tester = { test: x => x.tokenKind == TokenKind.DecimalLiteral };
//@ts-ignore
const RealLiteral : Tester = { test: x => x.tokenKind == TokenKind.RealLiteral };
//@ts-ignore
const Identifier : Tester = { test: x => x.tokenKind == TokenKind.Identifier };
//@ts-ignore
const UserVariableIdentifier : Tester = { test: x => x.tokenKind == TokenKind.UserVariableIdentifier };
//@ts-ignore
const Plus : Tester = { test: x => x.tokenKind == TokenKind.Plus };
//@ts-ignore
const Minus : Tester = { test: x => x.tokenKind == TokenKind.Minus };
//@ts-ignore
const Asterisk : Tester = { test: x => x.tokenKind == TokenKind.Asterisk };
//@ts-ignore
const Percent : Tester = { test: x => x.tokenKind == TokenKind.Percent };
//@ts-ignore
const Slash : Tester = { test: x => x.tokenKind == TokenKind.Slash };
//@ts-ignore
const Dot : Tester = { test: x => x.tokenKind == TokenKind.Dot };
//@ts-ignore
const SemiColon : Tester = { test: x => x.tokenKind == TokenKind.SemiColon };
//@ts-ignore
const Comma : Tester = { test: x => x.tokenKind == TokenKind.Comma };
//@ts-ignore
const ColonEqual : Tester = { test: x => x.tokenKind == TokenKind.ColonEqual };
//@ts-ignore
const AtAt : Tester = { test: x => x.tokenKind == TokenKind.AtAt };
//@ts-ignore
const AtAtGlobalDot : Tester = { test: x => x.tokenKind == TokenKind.AtAtGlobalDot };
//@ts-ignore
const AtAtSessionDot : Tester = { test: x => x.tokenKind == TokenKind.AtAtSessionDot };
//@ts-ignore
const Tilde : Tester = { test: x => x.tokenKind == TokenKind.Tilde };
//@ts-ignore
const Caret : Tester = { test: x => x.tokenKind == TokenKind.Caret };
//@ts-ignore
const Bar : Tester = { test: x => x.tokenKind == TokenKind.Bar };
//@ts-ignore
const Equal : Tester = { test: x => x.tokenKind == TokenKind.Equal };
//@ts-ignore
const LessEqualGreater : Tester = { test: x => x.tokenKind == TokenKind.LessEqualGreater };
//@ts-ignore
const GreaterEqual : Tester = { test: x => x.tokenKind == TokenKind.GreaterEqual };
//@ts-ignore
const Greater : Tester = { test: x => x.tokenKind == TokenKind.Greater };
//@ts-ignore
const LessEqual : Tester = { test: x => x.tokenKind == TokenKind.LessEqual };
//@ts-ignore
const Less : Tester = { test: x => x.tokenKind == TokenKind.Less };
//@ts-ignore
const LessGreater : Tester = { test: x => x.tokenKind == TokenKind.LessGreater };
//@ts-ignore
const LessLess : Tester = { test: x => x.tokenKind == TokenKind.LessLess };
//@ts-ignore
const GreaterGreater : Tester = { test: x => x.tokenKind == TokenKind.GreaterGreater };
//@ts-ignore
const OpenParentheses : Tester = { test: x => x.tokenKind == TokenKind.OpenParentheses };
//@ts-ignore
const CloseParentheses : Tester = { test: x => x.tokenKind == TokenKind.CloseParentheses };
//@ts-ignore
const HackedDelimiterKeyword : Tester = { test: x => x.tokenKind == TokenKind.HackedDelimiterKeyword };


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
    {"name": "TrailingStatement$ebnf$1", "symbols": [SemiColon], "postprocess": id},
    {"name": "TrailingStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TrailingStatement$ebnf$2", "symbols": [CustomDelimiter], "postprocess": id},
    {"name": "TrailingStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "TrailingStatement", "symbols": ["NonDelimiterStatement", "TrailingStatement$ebnf$1", "TrailingStatement$ebnf$2"], "postprocess":  (data) => {
            data[0].customDelimiter = data[2]?.value ?? undefined;
            return data[0];
        } },
    {"name": "TrailingStatement", "symbols": ["DelimiterStatement"], "postprocess": (data) => data[0]},
    {"name": "LeadingStatement$ebnf$1", "symbols": [CustomDelimiter], "postprocess": id},
    {"name": "LeadingStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "LeadingStatement", "symbols": ["NonDelimiterStatement", SemiColon, "LeadingStatement$ebnf$1"], "postprocess":  (data) => {
            data[0].customDelimiter = data[2]?.value ?? undefined;
            return data[0];
        } },
    {"name": "LeadingStatement", "symbols": ["DelimiterStatement"], "postprocess": (data) => data[0]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateSchemaStatement"]},
    {"name": "NonDelimiterStatement$subexpression$1", "symbols": ["CreateTableStatement"]},
    {"name": "NonDelimiterStatement", "symbols": ["NonDelimiterStatement$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "DelimiterStatement", "symbols": [HackedDelimiterKeyword, CustomDelimiter], "postprocess":  (data) => {
            const [identifier, customDelimiter] = data;
            return {
                start: identifier.start,
                end: customDelimiter.end,
                syntaxKind: parser_node_1.SyntaxKind.DelimiterStatement,
                customDelimiter: customDelimiter.value,
            };
        } },
    {"name": "CreateTableStatement$ebnf$1", "symbols": [TEMPORARY], "postprocess": id},
    {"name": "CreateTableStatement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableStatement$ebnf$2$subexpression$1", "symbols": [IF, NOT, EXISTS]},
    {"name": "CreateTableStatement$ebnf$2", "symbols": ["CreateTableStatement$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "CreateTableStatement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateTableStatement", "symbols": [CREATE, "CreateTableStatement$ebnf$1", TABLE, "CreateTableStatement$ebnf$2", "TableIdentifier", "CreateTableDefinitionList"], "postprocess":  (data) => {
            const [, temporary, , ifNotExists, tableIdentifier, createTableDefinitions] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CreateTableStatement,
                temporary: temporary != null,
                ifNotExists: ifNotExists != null,
                tableIdentifier,
                createTableDefinitions,
            };
        } },
    {"name": "IndexDefinition$subexpression$1", "symbols": [INDEX]},
    {"name": "IndexDefinition$subexpression$1", "symbols": [KEY]},
    {"name": "IndexDefinition$ebnf$1", "symbols": ["Identifier"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition$ebnf$2", "symbols": ["IndexType"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition", "symbols": ["Constraint", UNIQUE, "IndexDefinition$subexpression$1", "IndexDefinition$ebnf$1", "IndexDefinition$ebnf$2", "IndexPartList", "IndexOption"], "postprocess":  function (data) {
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
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IndexDefinition,
                constraintName: ("syntaxKind" in constraintName ?
                    constraintName :
                    undefined),
                indexClass: parser_node_1.IndexClass.UNIQUE,
                indexName: indexName ?? undefined,
                indexParts,
                ...indexOption,
            };
        } },
    {"name": "ColumnDefinition", "symbols": ["ColumnIdentifier", "DataType", "ColumnModifier"], "postprocess":  (data) => {
            const [columnIdentifier, dataType, modifier] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated: undefined,
                ...modifier,
            };
        } },
    {"name": "ColumnModifier$ebnf$1", "symbols": []},
    {"name": "ColumnModifier$ebnf$1", "symbols": ["ColumnModifier$ebnf$1", "ColumnModifierElement"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ColumnModifier", "symbols": ["ColumnModifier$ebnf$1"], "postprocess":  (data) => {
            let columnDefinitionModifier = parse_util_1.createDefaultColumnDefinitionModifier();
            for (const ele of data[0]) {
                columnDefinitionModifier = parse_util_1.processColumnDefinitionModifier(columnDefinitionModifier, ele.data);
            }
            return columnDefinitionModifier;
        } },
    {"name": "ColumnModifierElement$subexpression$1", "symbols": [AUTO_INCREMENT]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$1$subexpression$1", "symbols": [FIXED]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$1$subexpression$1", "symbols": [DYNAMIC]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$1$subexpression$1", "symbols": [DEFAULT]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$1", "symbols": [COLUMN_FORMAT, "ColumnModifierElement$subexpression$1$subexpression$1$subexpression$1"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$1"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$2$subexpression$1", "symbols": [DISK]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$2$subexpression$1", "symbols": [MEMORY]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$2", "symbols": [STORAGE, "ColumnModifierElement$subexpression$1$subexpression$2$subexpression$1"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$2"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$3", "symbols": [DEFAULT, "Expression"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$3"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": [NULL]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$4", "symbols": [NOT, NULL]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$4"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$5$ebnf$1", "symbols": [KEY], "postprocess": id},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$5$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$5", "symbols": [UNIQUE, "ColumnModifierElement$subexpression$1$subexpression$5$ebnf$1"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$5"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$6$ebnf$1", "symbols": [PRIMARY], "postprocess": id},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$6$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$6", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$6$ebnf$1", KEY]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$6"]},
    {"name": "ColumnModifierElement$subexpression$1$subexpression$7", "symbols": [COMMENT, "StringLiteral"]},
    {"name": "ColumnModifierElement$subexpression$1", "symbols": ["ColumnModifierElement$subexpression$1$subexpression$7"]},
    {"name": "ColumnModifierElement", "symbols": ["ColumnModifierElement$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                data: data[0][0],
            };
        } },
    {"name": "IndexDefinition$subexpression$2", "symbols": [INDEX]},
    {"name": "IndexDefinition$subexpression$2", "symbols": [KEY]},
    {"name": "IndexDefinition$ebnf$3", "symbols": ["Identifier"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition$ebnf$4", "symbols": ["IndexType"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition", "symbols": ["IndexDefinition$subexpression$2", "IndexDefinition$ebnf$3", "IndexDefinition$ebnf$4", "IndexPartList", "IndexOption"], "postprocess":  function (data) {
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
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IndexDefinition,
                constraintName: undefined,
                indexClass: parser_node_1.IndexClass.INDEX,
                indexName: indexName ?? undefined,
                indexParts,
                ...indexOption,
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
    {"name": "IndexType$subexpression$1", "symbols": [BTREE]},
    {"name": "IndexType$subexpression$1", "symbols": [HASH]},
    {"name": "IndexType", "symbols": [USING, "IndexType$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                indexType: (data[1][0].tokenKind == scanner_1.TokenKind.BTREE ?
                    parser_node_1.IndexType.BTREE :
                    parser_node_1.IndexType.HASH),
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
    {"name": "ColumnDefinition", "symbols": ["ColumnIdentifier", "DataType", "GeneratedDefinition", "GeneratedColumnModifier"], "postprocess":  (data) => {
            const [columnIdentifier, dataType, generated, modifier] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated: generated,
                ...modifier,
            };
        } },
    {"name": "GeneratedColumnModifier$ebnf$1", "symbols": []},
    {"name": "GeneratedColumnModifier$ebnf$1", "symbols": ["GeneratedColumnModifier$ebnf$1", "GeneratedColumnModifierElement"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "GeneratedColumnModifier", "symbols": ["GeneratedColumnModifier$ebnf$1"], "postprocess":  (data) => {
            let columnDefinitionModifier = parse_util_1.createDefaultColumnDefinitionModifier();
            for (const ele of data[0]) {
                columnDefinitionModifier = parse_util_1.processColumnDefinitionModifier(columnDefinitionModifier, ele.data);
            }
            return columnDefinitionModifier;
        } },
    {"name": "GeneratedColumnModifierElement$subexpression$1", "symbols": [NULL]},
    {"name": "GeneratedColumnModifierElement$subexpression$1$subexpression$1", "symbols": [NOT, NULL]},
    {"name": "GeneratedColumnModifierElement$subexpression$1", "symbols": ["GeneratedColumnModifierElement$subexpression$1$subexpression$1"]},
    {"name": "GeneratedColumnModifierElement$subexpression$1$subexpression$2$ebnf$1", "symbols": [KEY], "postprocess": id},
    {"name": "GeneratedColumnModifierElement$subexpression$1$subexpression$2$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "GeneratedColumnModifierElement$subexpression$1$subexpression$2", "symbols": [UNIQUE, "GeneratedColumnModifierElement$subexpression$1$subexpression$2$ebnf$1"]},
    {"name": "GeneratedColumnModifierElement$subexpression$1", "symbols": ["GeneratedColumnModifierElement$subexpression$1$subexpression$2"]},
    {"name": "GeneratedColumnModifierElement$subexpression$1$subexpression$3$ebnf$1", "symbols": [PRIMARY], "postprocess": id},
    {"name": "GeneratedColumnModifierElement$subexpression$1$subexpression$3$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "GeneratedColumnModifierElement$subexpression$1$subexpression$3", "symbols": ["GeneratedColumnModifierElement$subexpression$1$subexpression$3$ebnf$1", KEY]},
    {"name": "GeneratedColumnModifierElement$subexpression$1", "symbols": ["GeneratedColumnModifierElement$subexpression$1$subexpression$3"]},
    {"name": "GeneratedColumnModifierElement$subexpression$1$subexpression$4", "symbols": [COMMENT, "StringLiteral"]},
    {"name": "GeneratedColumnModifierElement$subexpression$1", "symbols": ["GeneratedColumnModifierElement$subexpression$1$subexpression$4"]},
    {"name": "GeneratedColumnModifierElement", "symbols": ["GeneratedColumnModifierElement$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                data: data[0][0],
            };
        } },
    {"name": "IndexDefinition$subexpression$3", "symbols": [FULLTEXT]},
    {"name": "IndexDefinition$subexpression$3", "symbols": [SPATIAL]},
    {"name": "IndexDefinition$ebnf$5$subexpression$1", "symbols": [INDEX]},
    {"name": "IndexDefinition$ebnf$5$subexpression$1", "symbols": [KEY]},
    {"name": "IndexDefinition$ebnf$5", "symbols": ["IndexDefinition$ebnf$5$subexpression$1"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition$ebnf$6", "symbols": ["Identifier"], "postprocess": id},
    {"name": "IndexDefinition$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "IndexDefinition", "symbols": ["IndexDefinition$subexpression$3", "IndexDefinition$ebnf$5", "IndexDefinition$ebnf$6", "IndexPartList", "FullTextOrSpatialIndexOption"], "postprocess":  function (data) {
            const [indexClass, , indexName, indexParts, indexOption] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IndexDefinition,
                constraintName: undefined,
                indexClass: (indexClass[0].tokenKind == scanner_1.TokenKind.FULLTEXT ?
                    parser_node_1.IndexClass.FULLTEXT :
                    parser_node_1.IndexClass.SPATIAL),
                indexName: indexName ?? undefined,
                indexParts,
                ...indexOption,
            };
        } },
    {"name": "FullTextOrSpatialIndexOption$ebnf$1", "symbols": []},
    {"name": "FullTextOrSpatialIndexOption$ebnf$1", "symbols": ["FullTextOrSpatialIndexOption$ebnf$1", "FullTextOrSpatialIndexOptionElement"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "FullTextOrSpatialIndexOption", "symbols": ["FullTextOrSpatialIndexOption$ebnf$1"], "postprocess":  (data) => {
            let indexOption = parse_util_1.createDefaultIndexOption();
            for (const ele of data[0]) {
                indexOption = parse_util_1.processIndexOption(indexOption, ele.data);
            }
            return indexOption;
        } },
    {"name": "FullTextOrSpatialIndexOptionElement$subexpression$1$subexpression$1$ebnf$1", "symbols": [Equal], "postprocess": id},
    {"name": "FullTextOrSpatialIndexOptionElement$subexpression$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "FullTextOrSpatialIndexOptionElement$subexpression$1$subexpression$1", "symbols": [KEY_BLOCK_SIZE, "FullTextOrSpatialIndexOptionElement$subexpression$1$subexpression$1$ebnf$1", "IntegerLiteral"]},
    {"name": "FullTextOrSpatialIndexOptionElement$subexpression$1", "symbols": ["FullTextOrSpatialIndexOptionElement$subexpression$1$subexpression$1"]},
    {"name": "FullTextOrSpatialIndexOptionElement$subexpression$1$subexpression$2", "symbols": [WITH, PARSER, "Identifier"]},
    {"name": "FullTextOrSpatialIndexOptionElement$subexpression$1", "symbols": ["FullTextOrSpatialIndexOptionElement$subexpression$1$subexpression$2"]},
    {"name": "FullTextOrSpatialIndexOptionElement$subexpression$1", "symbols": ["Comment"]},
    {"name": "FullTextOrSpatialIndexOptionElement", "symbols": ["FullTextOrSpatialIndexOptionElement$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                data: data[0][0],
            };
        } },
    {"name": "IndexPartList$ebnf$1", "symbols": []},
    {"name": "IndexPartList$ebnf$1$subexpression$1", "symbols": [Comma, "IndexPart"]},
    {"name": "IndexPartList$ebnf$1", "symbols": ["IndexPartList$ebnf$1", "IndexPartList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "IndexPartList", "symbols": [OpenParentheses, "IndexPart", "IndexPartList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                //@ts-ignore
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.IndexPartList, parse_util_1.getTextRange(data));
        } },
    {"name": "IndexPart$ebnf$1$subexpression$1", "symbols": [OpenParentheses, "IntegerLiteral", CloseParentheses]},
    {"name": "IndexPart$ebnf$1", "symbols": ["IndexPart$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "IndexPart$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "IndexPart$ebnf$2$subexpression$1", "symbols": [ASC]},
    {"name": "IndexPart$ebnf$2$subexpression$1", "symbols": [DESC]},
    {"name": "IndexPart$ebnf$2", "symbols": ["IndexPart$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "IndexPart$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "IndexPart", "symbols": ["Identifier", "IndexPart$ebnf$1", "IndexPart$ebnf$2"], "postprocess":  (data) => {
            const [columnName, indexLength, sortDirection] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IndexPart,
                columnName,
                indexLength: (indexLength == undefined ?
                    undefined :
                    indexLength[1]),
                sortDirection: (sortDirection == undefined ?
                    parser_node_1.SortDirection.ASC :
                    sortDirection[0].tokenKind == scanner_1.TokenKind.ASC ?
                        parser_node_1.SortDirection.ASC :
                        parser_node_1.SortDirection.DESC),
            };
        } },
    {"name": "CreateTableDefinitionList$ebnf$1", "symbols": []},
    {"name": "CreateTableDefinitionList$ebnf$1$subexpression$1", "symbols": [Comma, "CreateTableDefinition"]},
    {"name": "CreateTableDefinitionList$ebnf$1", "symbols": ["CreateTableDefinitionList$ebnf$1", "CreateTableDefinitionList$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "CreateTableDefinitionList", "symbols": [OpenParentheses, "CreateTableDefinition", "CreateTableDefinitionList$ebnf$1", CloseParentheses], "postprocess":  (data) => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                //@ts-ignore
                .filter((x) => {
                return "syntaxKind" in x;
            });
            return parse_util_1.toNodeArray([first, ...arr], parser_node_1.SyntaxKind.CreateTableDefinitionList, parse_util_1.getTextRange(data));
        } },
    {"name": "CreateTableDefinition$subexpression$1", "symbols": ["ColumnDefinition"]},
    {"name": "CreateTableDefinition$subexpression$1", "symbols": ["IndexDefinition"]},
    {"name": "CreateTableDefinition", "symbols": ["CreateTableDefinition$subexpression$1"], "postprocess": (data) => data[0][0]},
    {"name": "CreateSchemaStatement", "symbols": [CREATE, SCHEMA, "Identifier", "CreateSchemaStatementModifier"], "postprocess":  (data) => {
            const [, , identifier, modifier] = data;
            return {
                syntaxKind: parser_node_1.SyntaxKind.CreateSchemaStatement,
                schemaName: identifier,
                ifNotExists: false,
                ...modifier,
                ...parse_util_1.getTextRange(data),
            };
        } },
    {"name": "CreateSchemaStatementModifier$ebnf$1", "symbols": []},
    {"name": "CreateSchemaStatementModifier$ebnf$1$subexpression$1$ebnf$1", "symbols": [DEFAULT], "postprocess": id},
    {"name": "CreateSchemaStatementModifier$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CreateSchemaStatementModifier$ebnf$1$subexpression$1$subexpression$1$subexpression$1", "symbols": [CHARACTER, SET]},
    {"name": "CreateSchemaStatementModifier$ebnf$1$subexpression$1$subexpression$1", "symbols": ["CreateSchemaStatementModifier$ebnf$1$subexpression$1$subexpression$1$subexpression$1"]},
    {"name": "CreateSchemaStatementModifier$ebnf$1$subexpression$1$subexpression$1", "symbols": [COLLATE]},
    {"name": "CreateSchemaStatementModifier$ebnf$1$subexpression$1$ebnf$2", "symbols": [Equal], "postprocess": id},
    {"name": "CreateSchemaStatementModifier$ebnf$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CreateSchemaStatementModifier$ebnf$1$subexpression$1", "symbols": ["CreateSchemaStatementModifier$ebnf$1$subexpression$1$ebnf$1", "CreateSchemaStatementModifier$ebnf$1$subexpression$1$subexpression$1", "CreateSchemaStatementModifier$ebnf$1$subexpression$1$ebnf$2", "Identifier"]},
    {"name": "CreateSchemaStatementModifier$ebnf$1", "symbols": ["CreateSchemaStatementModifier$ebnf$1", "CreateSchemaStatementModifier$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "CreateSchemaStatementModifier", "symbols": ["CreateSchemaStatementModifier$ebnf$1"], "postprocess":  function (data) {
            const arr = data[0].map(([, kind, , identifier]) => {
                return {
                    kind,
                    identifier,
                };
            });
            let characterDataTypeModifier = {
                ...parse_util_1.getTextRange(data),
                characterSet: undefined,
                collate: undefined,
            };
            for (const ele of arr) {
                if (ele.kind instanceof Array) {
                    //CHARACTER SET
                    characterDataTypeModifier = parse_util_1.processCharacterDataTypeModifier(this, characterDataTypeModifier, {
                        characterSet: ele.identifier,
                        collate: undefined,
                    });
                }
                else {
                    //COLLATE
                    characterDataTypeModifier = parse_util_1.processCharacterDataTypeModifier(this, characterDataTypeModifier, {
                        characterSet: undefined,
                        collate: ele.identifier,
                    });
                }
            }
            return characterDataTypeModifier;
        } },
    {"name": "Constraint$ebnf$1", "symbols": ["Identifier"], "postprocess": id},
    {"name": "Constraint$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Constraint", "symbols": [CONSTRAINT, "Constraint$ebnf$1"], "postprocess":  (data) => {
            return data[1] ?? parse_util_1.getTextRange(data);
        } },
    {"name": "Comment", "symbols": [COMMENT, "StringLiteral"], "postprocess":  (data) => {
            return data[1];
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
            parse_util_1.pushSyntacticErrorAtNode(this, result, diagnostic_messages_1.DiagnosticMessages.CannotUseReservedKeywordAsIdentifier, tokenObj.value);
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
    {"name": "IntegerLiteral", "symbols": [IntegerLiteral], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                value: BigInt(data[0].value),
            };
        } },
    {"name": "Expression$subexpression$1", "symbols": ["IntegerLiteral"]},
    {"name": "Expression", "symbols": ["Expression$subexpression$1"], "postprocess":  (data) => {
            return data[0][0];
        } },
    {"name": "DataType$subexpression$1", "symbols": ["BinaryDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["BlobDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["BooleanDataType"]},
    {"name": "DataType$subexpression$1", "symbols": ["CharacterDataType"]},
    {"name": "DataType", "symbols": ["DataType$subexpression$1"], "postprocess": (data) => data[0][0]},
    {"name": "CharacterDataType$ebnf$1$subexpression$1", "symbols": [OpenParentheses, "IntegerLiteral", CloseParentheses]},
    {"name": "CharacterDataType$ebnf$1", "symbols": ["CharacterDataType$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CharacterDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CharacterDataType", "symbols": ["CharStart", "CharacterDataType$ebnf$1", "CharacterDataTypeModifier"], "postprocess":  (data) => {
            const [char, maxLength, modifier] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CharacterDataType,
                nationalCharacterSet: char.nationalCharacterSet,
                variableLength: false,
                maxLength: (maxLength == undefined ?
                    {
                        start: char.end,
                        end: char.end,
                        syntaxKind: parser_node_1.SyntaxKind.IntegerLiteral,
                        value: BigInt(1),
                    } :
                    maxLength[1]),
                ...modifier,
            };
        } },
    {"name": "CharacterDataType", "symbols": ["VarCharStart", OpenParentheses, "IntegerLiteral", CloseParentheses, "CharacterDataTypeModifier"], "postprocess":  (data) => {
            const [varChar, , maxLength, , modifier] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.CharacterDataType,
                nationalCharacterSet: varChar.nationalCharacterSet,
                variableLength: varChar.variableLength,
                maxLength,
                ...modifier,
            };
        } },
    {"name": "CharStart$subexpression$1", "symbols": [CHAR]},
    {"name": "CharStart$subexpression$1", "symbols": [CHARACTER]},
    {"name": "CharStart", "symbols": [NATIONAL, "CharStart$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: false,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: "utf8",
                    quoted: false,
                },
            };
        } },
    {"name": "CharStart", "symbols": [NCHAR], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: false,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: "utf8",
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
    {"name": "VarCharStart$subexpression$1", "symbols": [VARCHAR]},
    {"name": "VarCharStart$subexpression$1", "symbols": [VARCHARACTER]},
    {"name": "VarCharStart$subexpression$1$subexpression$1", "symbols": [CHAR, VARYING]},
    {"name": "VarCharStart$subexpression$1", "symbols": ["VarCharStart$subexpression$1$subexpression$1"]},
    {"name": "VarCharStart$subexpression$1$subexpression$2", "symbols": [CHARACTER, VARYING]},
    {"name": "VarCharStart$subexpression$1", "symbols": ["VarCharStart$subexpression$1$subexpression$2"]},
    {"name": "VarCharStart", "symbols": [NATIONAL, "VarCharStart$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: "utf8",
                    quoted: false,
                },
            };
        } },
    {"name": "VarCharStart", "symbols": [NCHAR, VARYING], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: "utf8",
                    quoted: false,
                },
            };
        } },
    {"name": "VarCharStart", "symbols": [NVARCHAR], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: {
                    ...parse_util_1.getTextRange(data),
                    syntaxKind: parser_node_1.SyntaxKind.Identifier,
                    identifier: "utf8",
                    quoted: false,
                },
            };
        } },
    {"name": "VarCharStart$subexpression$2", "symbols": [CHAR]},
    {"name": "VarCharStart$subexpression$2", "symbols": [CHARACTER]},
    {"name": "VarCharStart", "symbols": ["VarCharStart$subexpression$2", VARYING], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: undefined,
            };
        } },
    {"name": "VarCharStart$subexpression$3", "symbols": [VARCHAR]},
    {"name": "VarCharStart$subexpression$3", "symbols": [VARCHARACTER]},
    {"name": "VarCharStart", "symbols": ["VarCharStart$subexpression$3"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                variableLength: true,
                nationalCharacterSet: undefined,
            };
        } },
    {"name": "CharacterDataTypeModifier$ebnf$1$subexpression$1", "symbols": [CHARACTER, SET, "Identifier"]},
    {"name": "CharacterDataTypeModifier$ebnf$1", "symbols": ["CharacterDataTypeModifier$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CharacterDataTypeModifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "CharacterDataTypeModifier$ebnf$2$subexpression$1", "symbols": [COLLATE, "Identifier"]},
    {"name": "CharacterDataTypeModifier$ebnf$2", "symbols": ["CharacterDataTypeModifier$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "CharacterDataTypeModifier$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "CharacterDataTypeModifier", "symbols": ["CharacterDataTypeModifier$ebnf$1", "CharacterDataTypeModifier$ebnf$2"], "postprocess":  function ([characterSet, collate]) {
            return parse_util_1.processCharacterDataTypeModifier(this, {
                ...parse_util_1.getTextRange([characterSet, collate]),
                characterSet: undefined,
                collate: undefined,
            }, {
                characterSet: characterSet?.[2],
                collate: collate?.[1],
            });
        } },
    {"name": "BooleanDataType$subexpression$1", "symbols": [BOOL]},
    {"name": "BooleanDataType$subexpression$1", "symbols": [BOOLEAN]},
    {"name": "BooleanDataType", "symbols": ["BooleanDataType$subexpression$1"], "postprocess":  (data) => {
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.BooleanDataType,
            };
        } },
    {"name": "BlobDataType$subexpression$1", "symbols": [TINYBLOB]},
    {"name": "BlobDataType$subexpression$1", "symbols": [BLOB]},
    {"name": "BlobDataType$subexpression$1", "symbols": [MEDIUMBLOB]},
    {"name": "BlobDataType$subexpression$1", "symbols": [LONGBLOB]},
    {"name": "BlobDataType", "symbols": ["BlobDataType$subexpression$1"], "postprocess":  (data) => {
            const [[token]] = data;
            return {
                ...parse_util_1.getTextRange(data),
                syntaxKind: parser_node_1.SyntaxKind.BlobDataType,
                lengthBytes: (token.tokenKind == scanner_1.TokenKind.TINYBLOB ?
                    8 :
                    token.tokenKind == scanner_1.TokenKind.BLOB ?
                        16 :
                        token.tokenKind == scanner_1.TokenKind.MEDIUMBLOB ?
                            24 :
                            32),
            };
        } },
    {"name": "BinaryDataType$ebnf$1$subexpression$1", "symbols": [OpenParentheses, IntegerLiteral, CloseParentheses]},
    {"name": "BinaryDataType$ebnf$1", "symbols": ["BinaryDataType$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "BinaryDataType$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "BinaryDataType", "symbols": [BINARY, "BinaryDataType$ebnf$1"], "postprocess":  ([binary, maxLengthSpecifier]) => {
            return {
                start: binary.start,
                end: maxLengthSpecifier?.[2].end ?? binary.end,
                syntaxKind: parser_node_1.SyntaxKind.BinaryDataType,
                variableLength: false,
                maxLength: (maxLengthSpecifier == undefined ?
                    1 :
                    parseInt(maxLengthSpecifier[1].value, 10)),
            };
        } },
    {"name": "BinaryDataType", "symbols": [VARBINARY, OpenParentheses, IntegerLiteral, CloseParentheses], "postprocess":  ([binary, , maxLengthSpecifier, closeParentheses]) => {
            return {
                start: binary.start,
                end: closeParentheses.end,
                syntaxKind: parser_node_1.SyntaxKind.BinaryDataType,
                variableLength: true,
                maxLength: parseInt(maxLengthSpecifier.value, 10),
            };
        } }
];

export var ParserStart: string = "SourceFileLite";
