import {MyToken, MySyntaxNode} from "../grammar-runtime-3";
export interface START_OF_FUNCTION_KEYWORD extends MyToken<"START_OF_FUNCTION_KEYWORD"> {}
export interface ADDDATE extends MyToken<"ADDDATE"> {}
export interface BIT_AND extends MyToken<"BIT_AND"> {}
export interface BIT_OR extends MyToken<"BIT_OR"> {}
export interface BIT_XOR extends MyToken<"BIT_XOR"> {}
export interface CAST extends MyToken<"CAST"> {}
export interface COUNT extends MyToken<"COUNT"> {}
export interface CURDATE extends MyToken<"CURDATE"> {}
export interface CURTIME extends MyToken<"CURTIME"> {}
export interface DATE_ADD extends MyToken<"DATE_ADD"> {}
export interface DATE_SUB extends MyToken<"DATE_SUB"> {}
export interface EXTRACT extends MyToken<"EXTRACT"> {}
export interface GROUP_CONCAT extends MyToken<"GROUP_CONCAT"> {}
export interface JSON_OBJECTAGG extends MyToken<"JSON_OBJECTAGG"> {}
export interface JSON_ARRAYAGG extends MyToken<"JSON_ARRAYAGG"> {}
export interface MAX extends MyToken<"MAX"> {}
export interface MID extends MyToken<"MID"> {}
export interface MIN extends MyToken<"MIN"> {}
export interface NOW extends MyToken<"NOW"> {}
export interface POSITION extends MyToken<"POSITION"> {}
export interface SESSION_USER extends MyToken<"SESSION_USER"> {}
export interface STD extends MyToken<"STD"> {}
export interface STDDEV extends MyToken<"STDDEV"> {}
export interface STDDEV_POP extends MyToken<"STDDEV_POP"> {}
export interface STDDEV_SAMP extends MyToken<"STDDEV_SAMP"> {}
export interface ST_COLLECT extends MyToken<"ST_COLLECT"> {}
export interface SUBDATE extends MyToken<"SUBDATE"> {}
export interface SUBSTR extends MyToken<"SUBSTR"> {}
export interface SUBSTRING extends MyToken<"SUBSTRING"> {}
export interface SUM extends MyToken<"SUM"> {}
export interface SYSDATE extends MyToken<"SYSDATE"> {}
export interface SYSTEM_USER extends MyToken<"SYSTEM_USER"> {}
export interface TRIM extends MyToken<"TRIM"> {}
export interface VARIANCE extends MyToken<"VARIANCE"> {}
export interface VAR_POP extends MyToken<"VAR_POP"> {}
export interface VAR_SAMP extends MyToken<"VAR_SAMP"> {}
export interface END_OF_FUNCTION_KEYWORD extends MyToken<"END_OF_FUNCTION_KEYWORD"> {}
export interface START_OF_RESERVED_KEYWORD extends MyToken<"START_OF_RESERVED_KEYWORD"> {}
export interface ACCESSIBLE extends MyToken<"ACCESSIBLE"> {}
export interface ADD extends MyToken<"ADD"> {}
export interface ALL extends MyToken<"ALL"> {}
export interface ALTER extends MyToken<"ALTER"> {}
export interface ANALYZE extends MyToken<"ANALYZE"> {}
export interface AND extends MyToken<"AND"> {}
export interface AS extends MyToken<"AS"> {}
export interface ASC extends MyToken<"ASC"> {}
export interface ASENSITIVE extends MyToken<"ASENSITIVE"> {}
export interface BEFORE extends MyToken<"BEFORE"> {}
export interface BETWEEN extends MyToken<"BETWEEN"> {}
export interface BIGINT extends MyToken<"BIGINT"> {}
export interface BINARY extends MyToken<"BINARY"> {}
export interface BLOB extends MyToken<"BLOB"> {}
export interface BOTH extends MyToken<"BOTH"> {}
export interface BY extends MyToken<"BY"> {}
export interface CALL extends MyToken<"CALL"> {}
export interface CASCADE extends MyToken<"CASCADE"> {}
export interface CASE extends MyToken<"CASE"> {}
export interface CHANGE extends MyToken<"CHANGE"> {}
export interface CHAR extends MyToken<"CHAR"> {}
export interface CHARACTER extends MyToken<"CHARACTER"> {}
export interface CHECK extends MyToken<"CHECK"> {}
export interface COLLATE extends MyToken<"COLLATE"> {}
export interface COLUMN extends MyToken<"COLUMN"> {}
export interface CONDITION extends MyToken<"CONDITION"> {}
export interface CONSTRAINT extends MyToken<"CONSTRAINT"> {}
export interface CONTINUE extends MyToken<"CONTINUE"> {}
export interface CONVERT extends MyToken<"CONVERT"> {}
export interface CREATE extends MyToken<"CREATE"> {}
export interface CROSS extends MyToken<"CROSS"> {}
export interface CURRENT_DATE extends MyToken<"CURRENT_DATE"> {}
export interface CURRENT_TIME extends MyToken<"CURRENT_TIME"> {}
export interface CURRENT_TIMESTAMP extends MyToken<"CURRENT_TIMESTAMP"> {}
export interface CURRENT_USER extends MyToken<"CURRENT_USER"> {}
export interface CURSOR extends MyToken<"CURSOR"> {}
export interface DATABASE extends MyToken<"DATABASE"> {}
export interface DATABASES extends MyToken<"DATABASES"> {}
export interface DAY_HOUR extends MyToken<"DAY_HOUR"> {}
export interface DAY_MICROSECOND extends MyToken<"DAY_MICROSECOND"> {}
export interface DAY_MINUTE extends MyToken<"DAY_MINUTE"> {}
export interface DAY_SECOND extends MyToken<"DAY_SECOND"> {}
export interface DEC extends MyToken<"DEC"> {}
export interface DECIMAL extends MyToken<"DECIMAL"> {}
export interface DECLARE extends MyToken<"DECLARE"> {}
export interface DEFAULT extends MyToken<"DEFAULT"> {}
export interface DELAYED extends MyToken<"DELAYED"> {}
export interface DELETE extends MyToken<"DELETE"> {}
export interface DESC extends MyToken<"DESC"> {}
export interface DESCRIBE extends MyToken<"DESCRIBE"> {}
export interface DETERMINISTIC extends MyToken<"DETERMINISTIC"> {}
export interface DISTINCT extends MyToken<"DISTINCT"> {}
export interface DISTINCTROW extends MyToken<"DISTINCTROW"> {}
export interface DIV extends MyToken<"DIV"> {}
export interface DOUBLE extends MyToken<"DOUBLE"> {}
export interface DROP extends MyToken<"DROP"> {}
export interface DUAL extends MyToken<"DUAL"> {}
export interface EACH extends MyToken<"EACH"> {}
export interface ELSE extends MyToken<"ELSE"> {}
export interface ELSEIF extends MyToken<"ELSEIF"> {}
export interface ENCLOSED extends MyToken<"ENCLOSED"> {}
export interface ESCAPED extends MyToken<"ESCAPED"> {}
export interface EXISTS extends MyToken<"EXISTS"> {}
export interface EXIT extends MyToken<"EXIT"> {}
export interface EXPLAIN extends MyToken<"EXPLAIN"> {}
export interface FALSE extends MyToken<"FALSE"> {}
export interface FETCH extends MyToken<"FETCH"> {}
export interface FLOAT extends MyToken<"FLOAT"> {}
export interface FLOAT4 extends MyToken<"FLOAT4"> {}
export interface FLOAT8 extends MyToken<"FLOAT8"> {}
export interface FOR extends MyToken<"FOR"> {}
export interface FORCE extends MyToken<"FORCE"> {}
export interface FOREIGN extends MyToken<"FOREIGN"> {}
export interface FROM extends MyToken<"FROM"> {}
export interface FULLTEXT extends MyToken<"FULLTEXT"> {}
export interface GENERATED extends MyToken<"GENERATED"> {}
export interface GET extends MyToken<"GET"> {}
export interface GRANT extends MyToken<"GRANT"> {}
export interface GROUP extends MyToken<"GROUP"> {}
export interface HAVING extends MyToken<"HAVING"> {}
export interface HIGH_PRIORITY extends MyToken<"HIGH_PRIORITY"> {}
export interface HOUR_MICROSECOND extends MyToken<"HOUR_MICROSECOND"> {}
export interface HOUR_MINUTE extends MyToken<"HOUR_MINUTE"> {}
export interface HOUR_SECOND extends MyToken<"HOUR_SECOND"> {}
export interface IF extends MyToken<"IF"> {}
export interface IGNORE extends MyToken<"IGNORE"> {}
export interface IN extends MyToken<"IN"> {}
export interface INDEX extends MyToken<"INDEX"> {}
export interface INFILE extends MyToken<"INFILE"> {}
export interface INNER extends MyToken<"INNER"> {}
export interface INOUT extends MyToken<"INOUT"> {}
export interface INSENSITIVE extends MyToken<"INSENSITIVE"> {}
export interface INSERT extends MyToken<"INSERT"> {}
export interface INT extends MyToken<"INT"> {}
export interface INT1 extends MyToken<"INT1"> {}
export interface INT2 extends MyToken<"INT2"> {}
export interface INT3 extends MyToken<"INT3"> {}
export interface INT4 extends MyToken<"INT4"> {}
export interface INT8 extends MyToken<"INT8"> {}
export interface INTEGER extends MyToken<"INTEGER"> {}
export interface INTERVAL extends MyToken<"INTERVAL"> {}
export interface INTO extends MyToken<"INTO"> {}
export interface IO_AFTER_GTIDS extends MyToken<"IO_AFTER_GTIDS"> {}
export interface IO_BEFORE_GTIDS extends MyToken<"IO_BEFORE_GTIDS"> {}
export interface IS extends MyToken<"IS"> {}
export interface ITERATE extends MyToken<"ITERATE"> {}
export interface JOIN extends MyToken<"JOIN"> {}
export interface KEY extends MyToken<"KEY"> {}
export interface KEYS extends MyToken<"KEYS"> {}
export interface KILL extends MyToken<"KILL"> {}
export interface LEADING extends MyToken<"LEADING"> {}
export interface LEAVE extends MyToken<"LEAVE"> {}
export interface LEFT extends MyToken<"LEFT"> {}
export interface LIKE extends MyToken<"LIKE"> {}
export interface LIMIT extends MyToken<"LIMIT"> {}
export interface LINEAR extends MyToken<"LINEAR"> {}
export interface LINES extends MyToken<"LINES"> {}
export interface LOAD extends MyToken<"LOAD"> {}
export interface LOCALTIME extends MyToken<"LOCALTIME"> {}
export interface LOCALTIMESTAMP extends MyToken<"LOCALTIMESTAMP"> {}
export interface LOCK extends MyToken<"LOCK"> {}
export interface LONG extends MyToken<"LONG"> {}
export interface LONGBLOB extends MyToken<"LONGBLOB"> {}
export interface LONGTEXT extends MyToken<"LONGTEXT"> {}
export interface LOOP extends MyToken<"LOOP"> {}
export interface LOW_PRIORITY extends MyToken<"LOW_PRIORITY"> {}
export interface MASTER_BIND extends MyToken<"MASTER_BIND"> {}
export interface MASTER_SSL_VERIFY_SERVER_CERT extends MyToken<"MASTER_SSL_VERIFY_SERVER_CERT"> {}
export interface MATCH extends MyToken<"MATCH"> {}
export interface MAXVALUE extends MyToken<"MAXVALUE"> {}
export interface MEDIUMBLOB extends MyToken<"MEDIUMBLOB"> {}
export interface MEDIUMINT extends MyToken<"MEDIUMINT"> {}
export interface MEDIUMTEXT extends MyToken<"MEDIUMTEXT"> {}
export interface MIDDLEINT extends MyToken<"MIDDLEINT"> {}
export interface MINUTE_MICROSECOND extends MyToken<"MINUTE_MICROSECOND"> {}
export interface MINUTE_SECOND extends MyToken<"MINUTE_SECOND"> {}
export interface MOD extends MyToken<"MOD"> {}
export interface MODIFIES extends MyToken<"MODIFIES"> {}
export interface NATURAL extends MyToken<"NATURAL"> {}
export interface NOT extends MyToken<"NOT"> {}
export interface NO_WRITE_TO_BINLOG extends MyToken<"NO_WRITE_TO_BINLOG"> {}
export interface NULL extends MyToken<"NULL"> {}
export interface NUMERIC extends MyToken<"NUMERIC"> {}
export interface ON extends MyToken<"ON"> {}
export interface OPTIMIZE extends MyToken<"OPTIMIZE"> {}
export interface OPTIMIZER_COSTS extends MyToken<"OPTIMIZER_COSTS"> {}
export interface OPTION extends MyToken<"OPTION"> {}
export interface OPTIONALLY extends MyToken<"OPTIONALLY"> {}
export interface OR extends MyToken<"OR"> {}
export interface ORDER extends MyToken<"ORDER"> {}
export interface OUT extends MyToken<"OUT"> {}
export interface OUTER extends MyToken<"OUTER"> {}
export interface OUTFILE extends MyToken<"OUTFILE"> {}
export interface PARTITION extends MyToken<"PARTITION"> {}
export interface PRECISION extends MyToken<"PRECISION"> {}
export interface PRIMARY extends MyToken<"PRIMARY"> {}
export interface PROCEDURE extends MyToken<"PROCEDURE"> {}
export interface PURGE extends MyToken<"PURGE"> {}
export interface RANGE extends MyToken<"RANGE"> {}
export interface READ extends MyToken<"READ"> {}
export interface READS extends MyToken<"READS"> {}
export interface READ_WRITE extends MyToken<"READ_WRITE"> {}
export interface REAL extends MyToken<"REAL"> {}
export interface REFERENCES extends MyToken<"REFERENCES"> {}
export interface REGEXP extends MyToken<"REGEXP"> {}
export interface RELEASE extends MyToken<"RELEASE"> {}
export interface RENAME extends MyToken<"RENAME"> {}
export interface REPEAT extends MyToken<"REPEAT"> {}
export interface REPLACE extends MyToken<"REPLACE"> {}
export interface REQUIRE extends MyToken<"REQUIRE"> {}
export interface RESIGNAL extends MyToken<"RESIGNAL"> {}
export interface RESTRICT extends MyToken<"RESTRICT"> {}
export interface RETURN extends MyToken<"RETURN"> {}
export interface REVOKE extends MyToken<"REVOKE"> {}
export interface RIGHT extends MyToken<"RIGHT"> {}
export interface RLIKE extends MyToken<"RLIKE"> {}
export interface SCHEMA extends MyToken<"SCHEMA"> {}
export interface SCHEMAS extends MyToken<"SCHEMAS"> {}
export interface SECOND_MICROSECOND extends MyToken<"SECOND_MICROSECOND"> {}
export interface SELECT extends MyToken<"SELECT"> {}
export interface SENSITIVE extends MyToken<"SENSITIVE"> {}
export interface SEPARATOR extends MyToken<"SEPARATOR"> {}
export interface SET extends MyToken<"SET"> {}
export interface SHOW extends MyToken<"SHOW"> {}
export interface SIGNAL extends MyToken<"SIGNAL"> {}
export interface SMALLINT extends MyToken<"SMALLINT"> {}
export interface SPATIAL extends MyToken<"SPATIAL"> {}
export interface SPECIFIC extends MyToken<"SPECIFIC"> {}
export interface SQL extends MyToken<"SQL"> {}
export interface SQLEXCEPTION extends MyToken<"SQLEXCEPTION"> {}
export interface SQLSTATE extends MyToken<"SQLSTATE"> {}
export interface SQLWARNING extends MyToken<"SQLWARNING"> {}
export interface SQL_BIG_RESULT extends MyToken<"SQL_BIG_RESULT"> {}
export interface SQL_CALC_FOUND_ROWS extends MyToken<"SQL_CALC_FOUND_ROWS"> {}
export interface SQL_SMALL_RESULT extends MyToken<"SQL_SMALL_RESULT"> {}
export interface SSL extends MyToken<"SSL"> {}
export interface STARTING extends MyToken<"STARTING"> {}
export interface STORED extends MyToken<"STORED"> {}
export interface STRAIGHT_JOIN extends MyToken<"STRAIGHT_JOIN"> {}
export interface TABLE extends MyToken<"TABLE"> {}
export interface TERMINATED extends MyToken<"TERMINATED"> {}
export interface THEN extends MyToken<"THEN"> {}
export interface TINYBLOB extends MyToken<"TINYBLOB"> {}
export interface TINYINT extends MyToken<"TINYINT"> {}
export interface TINYTEXT extends MyToken<"TINYTEXT"> {}
export interface TO extends MyToken<"TO"> {}
export interface TRAILING extends MyToken<"TRAILING"> {}
export interface TRIGGER extends MyToken<"TRIGGER"> {}
export interface TRUE extends MyToken<"TRUE"> {}
export interface UNDO extends MyToken<"UNDO"> {}
export interface UNION extends MyToken<"UNION"> {}
export interface UNIQUE extends MyToken<"UNIQUE"> {}
export interface UNLOCK extends MyToken<"UNLOCK"> {}
export interface UNSIGNED extends MyToken<"UNSIGNED"> {}
export interface UPDATE extends MyToken<"UPDATE"> {}
export interface USAGE extends MyToken<"USAGE"> {}
export interface USE extends MyToken<"USE"> {}
export interface USING extends MyToken<"USING"> {}
export interface UTC_DATE extends MyToken<"UTC_DATE"> {}
export interface UTC_TIME extends MyToken<"UTC_TIME"> {}
export interface UTC_TIMESTAMP extends MyToken<"UTC_TIMESTAMP"> {}
export interface VALUES extends MyToken<"VALUES"> {}
export interface VARBINARY extends MyToken<"VARBINARY"> {}
export interface VARCHAR extends MyToken<"VARCHAR"> {}
export interface VARCHARACTER extends MyToken<"VARCHARACTER"> {}
export interface VARYING extends MyToken<"VARYING"> {}
export interface VIRTUAL extends MyToken<"VIRTUAL"> {}
export interface WHEN extends MyToken<"WHEN"> {}
export interface WHERE extends MyToken<"WHERE"> {}
export interface WHILE extends MyToken<"WHILE"> {}
export interface WITH extends MyToken<"WITH"> {}
export interface WRITE extends MyToken<"WRITE"> {}
export interface XOR extends MyToken<"XOR"> {}
export interface YEAR_MONTH extends MyToken<"YEAR_MONTH"> {}
export interface ZEROFILL extends MyToken<"ZEROFILL"> {}
export interface END_OF_RESERVED_KEYWORD extends MyToken<"END_OF_RESERVED_KEYWORD"> {}
export interface START_OF_NON_RESERVED_KEYWORD extends MyToken<"START_OF_NON_RESERVED_KEYWORD"> {}
export interface ACCOUNT extends MyToken<"ACCOUNT"> {}
export interface ACTION extends MyToken<"ACTION"> {}
export interface AFTER extends MyToken<"AFTER"> {}
export interface AGAINST extends MyToken<"AGAINST"> {}
export interface AGGREGATE extends MyToken<"AGGREGATE"> {}
export interface ALGORITHM extends MyToken<"ALGORITHM"> {}
export interface ALWAYS extends MyToken<"ALWAYS"> {}
export interface ANALYSE extends MyToken<"ANALYSE"> {}
export interface ANY extends MyToken<"ANY"> {}
export interface ASCII extends MyToken<"ASCII"> {}
export interface AT extends MyToken<"AT"> {}
export interface AUTOEXTEND_SIZE extends MyToken<"AUTOEXTEND_SIZE"> {}
export interface AUTO_INCREMENT extends MyToken<"AUTO_INCREMENT"> {}
export interface AVG extends MyToken<"AVG"> {}
export interface AVG_ROW_LENGTH extends MyToken<"AVG_ROW_LENGTH"> {}
export interface BACKUP extends MyToken<"BACKUP"> {}
export interface BEGIN extends MyToken<"BEGIN"> {}
export interface BINLOG extends MyToken<"BINLOG"> {}
export interface BIT extends MyToken<"BIT"> {}
export interface BLOCK extends MyToken<"BLOCK"> {}
export interface BOOL extends MyToken<"BOOL"> {}
export interface BOOLEAN extends MyToken<"BOOLEAN"> {}
export interface BTREE extends MyToken<"BTREE"> {}
export interface BYTE extends MyToken<"BYTE"> {}
export interface CACHE extends MyToken<"CACHE"> {}
export interface CASCADED extends MyToken<"CASCADED"> {}
export interface CATALOG_NAME extends MyToken<"CATALOG_NAME"> {}
export interface CHAIN extends MyToken<"CHAIN"> {}
export interface CHANGED extends MyToken<"CHANGED"> {}
export interface CHANNEL extends MyToken<"CHANNEL"> {}
export interface CHARSET extends MyToken<"CHARSET"> {}
export interface CHECKSUM extends MyToken<"CHECKSUM"> {}
export interface CIPHER extends MyToken<"CIPHER"> {}
export interface CLASS_ORIGIN extends MyToken<"CLASS_ORIGIN"> {}
export interface CLIENT extends MyToken<"CLIENT"> {}
export interface CLOSE extends MyToken<"CLOSE"> {}
export interface COALESCE extends MyToken<"COALESCE"> {}
export interface CODE extends MyToken<"CODE"> {}
export interface COLLATION extends MyToken<"COLLATION"> {}
export interface COLUMNS extends MyToken<"COLUMNS"> {}
export interface COLUMN_FORMAT extends MyToken<"COLUMN_FORMAT"> {}
export interface COLUMN_NAME extends MyToken<"COLUMN_NAME"> {}
export interface COMMENT extends MyToken<"COMMENT"> {}
export interface COMMIT extends MyToken<"COMMIT"> {}
export interface COMMITTED extends MyToken<"COMMITTED"> {}
export interface COMPACT extends MyToken<"COMPACT"> {}
export interface COMPLETION extends MyToken<"COMPLETION"> {}
export interface COMPRESSED extends MyToken<"COMPRESSED"> {}
export interface COMPRESSION extends MyToken<"COMPRESSION"> {}
export interface CONCURRENT extends MyToken<"CONCURRENT"> {}
export interface CONNECTION extends MyToken<"CONNECTION"> {}
export interface CONSISTENT extends MyToken<"CONSISTENT"> {}
export interface CONSTRAINT_CATALOG extends MyToken<"CONSTRAINT_CATALOG"> {}
export interface CONSTRAINT_NAME extends MyToken<"CONSTRAINT_NAME"> {}
export interface CONSTRAINT_SCHEMA extends MyToken<"CONSTRAINT_SCHEMA"> {}
export interface CONTAINS extends MyToken<"CONTAINS"> {}
export interface CONTEXT extends MyToken<"CONTEXT"> {}
export interface CPU extends MyToken<"CPU"> {}
export interface CUBE extends MyToken<"CUBE"> {}
export interface CURRENT extends MyToken<"CURRENT"> {}
export interface CURSOR_NAME extends MyToken<"CURSOR_NAME"> {}
export interface DATA extends MyToken<"DATA"> {}
export interface DATAFILE extends MyToken<"DATAFILE"> {}
export interface DATE extends MyToken<"DATE"> {}
export interface DATETIME extends MyToken<"DATETIME"> {}
export interface DAY extends MyToken<"DAY"> {}
export interface DEALLOCATE extends MyToken<"DEALLOCATE"> {}
export interface DEFAULT_AUTH extends MyToken<"DEFAULT_AUTH"> {}
export interface DEFINER extends MyToken<"DEFINER"> {}
export interface DELAY_KEY_WRITE extends MyToken<"DELAY_KEY_WRITE"> {}
export interface DES_KEY_FILE extends MyToken<"DES_KEY_FILE"> {}
export interface DIAGNOSTICS extends MyToken<"DIAGNOSTICS"> {}
export interface DIRECTORY extends MyToken<"DIRECTORY"> {}
export interface DISABLE extends MyToken<"DISABLE"> {}
export interface DISCARD extends MyToken<"DISCARD"> {}
export interface DISK extends MyToken<"DISK"> {}
export interface DO extends MyToken<"DO"> {}
export interface DUMPFILE extends MyToken<"DUMPFILE"> {}
export interface DUPLICATE extends MyToken<"DUPLICATE"> {}
export interface DYNAMIC extends MyToken<"DYNAMIC"> {}
export interface ENABLE extends MyToken<"ENABLE"> {}
export interface ENCRYPTION extends MyToken<"ENCRYPTION"> {}
export interface END extends MyToken<"END"> {}
export interface ENDS extends MyToken<"ENDS"> {}
export interface ENGINE extends MyToken<"ENGINE"> {}
export interface ENGINES extends MyToken<"ENGINES"> {}
export interface ENUM extends MyToken<"ENUM"> {}
export interface ERROR extends MyToken<"ERROR"> {}
export interface ERRORS extends MyToken<"ERRORS"> {}
export interface ESCAPE extends MyToken<"ESCAPE"> {}
export interface EVENT extends MyToken<"EVENT"> {}
export interface EVENTS extends MyToken<"EVENTS"> {}
export interface EVERY extends MyToken<"EVERY"> {}
export interface EXCHANGE extends MyToken<"EXCHANGE"> {}
export interface EXECUTE extends MyToken<"EXECUTE"> {}
export interface EXPANSION extends MyToken<"EXPANSION"> {}
export interface EXPIRE extends MyToken<"EXPIRE"> {}
export interface EXPORT extends MyToken<"EXPORT"> {}
export interface EXTENDED extends MyToken<"EXTENDED"> {}
export interface EXTENT_SIZE extends MyToken<"EXTENT_SIZE"> {}
export interface FAST extends MyToken<"FAST"> {}
export interface FAULTS extends MyToken<"FAULTS"> {}
export interface FIELDS extends MyToken<"FIELDS"> {}
export interface FILE extends MyToken<"FILE"> {}
export interface FILE_BLOCK_SIZE extends MyToken<"FILE_BLOCK_SIZE"> {}
export interface FILTER extends MyToken<"FILTER"> {}
export interface FIRST extends MyToken<"FIRST"> {}
export interface FIXED extends MyToken<"FIXED"> {}
export interface FLUSH extends MyToken<"FLUSH"> {}
export interface FOLLOWS extends MyToken<"FOLLOWS"> {}
export interface FORMAT extends MyToken<"FORMAT"> {}
export interface FOUND extends MyToken<"FOUND"> {}
export interface FULL extends MyToken<"FULL"> {}
export interface FUNCTION extends MyToken<"FUNCTION"> {}
export interface GENERAL extends MyToken<"GENERAL"> {}
export interface GEOMETRY extends MyToken<"GEOMETRY"> {}
export interface GEOMETRYCOLLECTION extends MyToken<"GEOMETRYCOLLECTION"> {}
export interface GET_FORMAT extends MyToken<"GET_FORMAT"> {}
export interface GLOBAL extends MyToken<"GLOBAL"> {}
export interface GRANTS extends MyToken<"GRANTS"> {}
export interface GROUP_REPLICATION extends MyToken<"GROUP_REPLICATION"> {}
export interface HANDLER extends MyToken<"HANDLER"> {}
export interface HASH extends MyToken<"HASH"> {}
export interface HELP extends MyToken<"HELP"> {}
export interface HOST extends MyToken<"HOST"> {}
export interface HOSTS extends MyToken<"HOSTS"> {}
export interface HOUR extends MyToken<"HOUR"> {}
export interface IDENTIFIED extends MyToken<"IDENTIFIED"> {}
export interface IGNORE_SERVER_IDS extends MyToken<"IGNORE_SERVER_IDS"> {}
export interface IMPORT extends MyToken<"IMPORT"> {}
export interface INDEXES extends MyToken<"INDEXES"> {}
export interface INITIAL_SIZE extends MyToken<"INITIAL_SIZE"> {}
export interface INSERT_METHOD extends MyToken<"INSERT_METHOD"> {}
export interface INSTALL extends MyToken<"INSTALL"> {}
export interface INSTANCE extends MyToken<"INSTANCE"> {}
export interface INVOKER extends MyToken<"INVOKER"> {}
export interface IO extends MyToken<"IO"> {}
export interface IO_THREAD extends MyToken<"IO_THREAD"> {}
export interface IPC extends MyToken<"IPC"> {}
export interface ISOLATION extends MyToken<"ISOLATION"> {}
export interface ISSUER extends MyToken<"ISSUER"> {}
export interface JSON extends MyToken<"JSON"> {}
export interface KEY_BLOCK_SIZE extends MyToken<"KEY_BLOCK_SIZE"> {}
export interface LANGUAGE extends MyToken<"LANGUAGE"> {}
export interface LAST extends MyToken<"LAST"> {}
export interface LEAVES extends MyToken<"LEAVES"> {}
export interface LESS extends MyToken<"LESS"> {}
export interface LEVEL extends MyToken<"LEVEL"> {}
export interface LINESTRING extends MyToken<"LINESTRING"> {}
export interface LIST extends MyToken<"LIST"> {}
export interface LOCAL extends MyToken<"LOCAL"> {}
export interface LOCKS extends MyToken<"LOCKS"> {}
export interface LOGFILE extends MyToken<"LOGFILE"> {}
export interface LOGS extends MyToken<"LOGS"> {}
export interface MASTER extends MyToken<"MASTER"> {}
export interface MASTER_AUTO_POSITION extends MyToken<"MASTER_AUTO_POSITION"> {}
export interface MASTER_CONNECT_RETRY extends MyToken<"MASTER_CONNECT_RETRY"> {}
export interface MASTER_DELAY extends MyToken<"MASTER_DELAY"> {}
export interface MASTER_HEARTBEAT_PERIOD extends MyToken<"MASTER_HEARTBEAT_PERIOD"> {}
export interface MASTER_HOST extends MyToken<"MASTER_HOST"> {}
export interface MASTER_LOG_FILE extends MyToken<"MASTER_LOG_FILE"> {}
export interface MASTER_LOG_POS extends MyToken<"MASTER_LOG_POS"> {}
export interface MASTER_PASSWORD extends MyToken<"MASTER_PASSWORD"> {}
export interface MASTER_PORT extends MyToken<"MASTER_PORT"> {}
export interface MASTER_RETRY_COUNT extends MyToken<"MASTER_RETRY_COUNT"> {}
export interface MASTER_SERVER_ID extends MyToken<"MASTER_SERVER_ID"> {}
export interface MASTER_SSL extends MyToken<"MASTER_SSL"> {}
export interface MASTER_SSL_CA extends MyToken<"MASTER_SSL_CA"> {}
export interface MASTER_SSL_CAPATH extends MyToken<"MASTER_SSL_CAPATH"> {}
export interface MASTER_SSL_CERT extends MyToken<"MASTER_SSL_CERT"> {}
export interface MASTER_SSL_CIPHER extends MyToken<"MASTER_SSL_CIPHER"> {}
export interface MASTER_SSL_CRL extends MyToken<"MASTER_SSL_CRL"> {}
export interface MASTER_SSL_CRLPATH extends MyToken<"MASTER_SSL_CRLPATH"> {}
export interface MASTER_SSL_KEY extends MyToken<"MASTER_SSL_KEY"> {}
export interface MASTER_TLS_VERSION extends MyToken<"MASTER_TLS_VERSION"> {}
export interface MASTER_USER extends MyToken<"MASTER_USER"> {}
export interface MAX_CONNECTIONS_PER_HOUR extends MyToken<"MAX_CONNECTIONS_PER_HOUR"> {}
export interface MAX_QUERIES_PER_HOUR extends MyToken<"MAX_QUERIES_PER_HOUR"> {}
export interface MAX_ROWS extends MyToken<"MAX_ROWS"> {}
export interface MAX_SIZE extends MyToken<"MAX_SIZE"> {}
export interface MAX_STATEMENT_TIME extends MyToken<"MAX_STATEMENT_TIME"> {}
export interface MAX_UPDATES_PER_HOUR extends MyToken<"MAX_UPDATES_PER_HOUR"> {}
export interface MAX_USER_CONNECTIONS extends MyToken<"MAX_USER_CONNECTIONS"> {}
export interface MEDIUM extends MyToken<"MEDIUM"> {}
export interface MEMORY extends MyToken<"MEMORY"> {}
export interface MERGE extends MyToken<"MERGE"> {}
export interface MESSAGE_TEXT extends MyToken<"MESSAGE_TEXT"> {}
export interface MICROSECOND extends MyToken<"MICROSECOND"> {}
export interface MIGRATE extends MyToken<"MIGRATE"> {}
export interface MINUTE extends MyToken<"MINUTE"> {}
export interface MIN_ROWS extends MyToken<"MIN_ROWS"> {}
export interface MODE extends MyToken<"MODE"> {}
export interface MODIFY extends MyToken<"MODIFY"> {}
export interface MONTH extends MyToken<"MONTH"> {}
export interface MULTILINESTRING extends MyToken<"MULTILINESTRING"> {}
export interface MULTIPOINT extends MyToken<"MULTIPOINT"> {}
export interface MULTIPOLYGON extends MyToken<"MULTIPOLYGON"> {}
export interface MUTEX extends MyToken<"MUTEX"> {}
export interface MYSQL_ERRNO extends MyToken<"MYSQL_ERRNO"> {}
export interface NAME extends MyToken<"NAME"> {}
export interface NAMES extends MyToken<"NAMES"> {}
export interface NATIONAL extends MyToken<"NATIONAL"> {}
export interface NCHAR extends MyToken<"NCHAR"> {}
export interface NDB extends MyToken<"NDB"> {}
export interface NDBCLUSTER extends MyToken<"NDBCLUSTER"> {}
export interface NEVER extends MyToken<"NEVER"> {}
export interface NEW extends MyToken<"NEW"> {}
export interface NEXT extends MyToken<"NEXT"> {}
export interface NO extends MyToken<"NO"> {}
export interface NODEGROUP extends MyToken<"NODEGROUP"> {}
export interface NONBLOCKING extends MyToken<"NONBLOCKING"> {}
export interface NONE extends MyToken<"NONE"> {}
export interface NO_WAIT extends MyToken<"NO_WAIT"> {}
export interface NUMBER extends MyToken<"NUMBER"> {}
export interface NVARCHAR extends MyToken<"NVARCHAR"> {}
export interface OFFSET extends MyToken<"OFFSET"> {}
export interface OLD_PASSWORD extends MyToken<"OLD_PASSWORD"> {}
export interface ONE extends MyToken<"ONE"> {}
export interface ONLY extends MyToken<"ONLY"> {}
export interface OPEN extends MyToken<"OPEN"> {}
export interface OPTIONS extends MyToken<"OPTIONS"> {}
export interface OWNER extends MyToken<"OWNER"> {}
export interface PACK_KEYS extends MyToken<"PACK_KEYS"> {}
export interface PAGE extends MyToken<"PAGE"> {}
export interface PARSER extends MyToken<"PARSER"> {}
export interface PARSE_GCOL_EXPR extends MyToken<"PARSE_GCOL_EXPR"> {}
export interface PARTIAL extends MyToken<"PARTIAL"> {}
export interface PARTITIONING extends MyToken<"PARTITIONING"> {}
export interface PARTITIONS extends MyToken<"PARTITIONS"> {}
export interface PASSWORD extends MyToken<"PASSWORD"> {}
export interface PHASE extends MyToken<"PHASE"> {}
export interface PLUGIN extends MyToken<"PLUGIN"> {}
export interface PLUGINS extends MyToken<"PLUGINS"> {}
export interface PLUGIN_DIR extends MyToken<"PLUGIN_DIR"> {}
export interface POINT extends MyToken<"POINT"> {}
export interface POLYGON extends MyToken<"POLYGON"> {}
export interface PORT extends MyToken<"PORT"> {}
export interface PRECEDES extends MyToken<"PRECEDES"> {}
export interface PREPARE extends MyToken<"PREPARE"> {}
export interface PRESERVE extends MyToken<"PRESERVE"> {}
export interface PREV extends MyToken<"PREV"> {}
export interface PRIVILEGES extends MyToken<"PRIVILEGES"> {}
export interface PROCESSLIST extends MyToken<"PROCESSLIST"> {}
export interface PROFILE extends MyToken<"PROFILE"> {}
export interface PROFILES extends MyToken<"PROFILES"> {}
export interface PROXY extends MyToken<"PROXY"> {}
export interface QUARTER extends MyToken<"QUARTER"> {}
export interface QUERY extends MyToken<"QUERY"> {}
export interface QUICK extends MyToken<"QUICK"> {}
export interface READ_ONLY extends MyToken<"READ_ONLY"> {}
export interface REBUILD extends MyToken<"REBUILD"> {}
export interface RECOVER extends MyToken<"RECOVER"> {}
export interface REDOFILE extends MyToken<"REDOFILE"> {}
export interface REDO_BUFFER_SIZE extends MyToken<"REDO_BUFFER_SIZE"> {}
export interface REDUNDANT extends MyToken<"REDUNDANT"> {}
export interface RELAY extends MyToken<"RELAY"> {}
export interface RELAYLOG extends MyToken<"RELAYLOG"> {}
export interface RELAY_LOG_FILE extends MyToken<"RELAY_LOG_FILE"> {}
export interface RELAY_LOG_POS extends MyToken<"RELAY_LOG_POS"> {}
export interface RELAY_THREAD extends MyToken<"RELAY_THREAD"> {}
export interface RELOAD extends MyToken<"RELOAD"> {}
export interface REMOVE extends MyToken<"REMOVE"> {}
export interface REORGANIZE extends MyToken<"REORGANIZE"> {}
export interface REPAIR extends MyToken<"REPAIR"> {}
export interface REPEATABLE extends MyToken<"REPEATABLE"> {}
export interface REPLICATE_DO_DB extends MyToken<"REPLICATE_DO_DB"> {}
export interface REPLICATE_DO_TABLE extends MyToken<"REPLICATE_DO_TABLE"> {}
export interface REPLICATE_IGNORE_DB extends MyToken<"REPLICATE_IGNORE_DB"> {}
export interface REPLICATE_IGNORE_TABLE extends MyToken<"REPLICATE_IGNORE_TABLE"> {}
export interface REPLICATE_REWRITE_DB extends MyToken<"REPLICATE_REWRITE_DB"> {}
export interface REPLICATE_WILD_DO_TABLE extends MyToken<"REPLICATE_WILD_DO_TABLE"> {}
export interface REPLICATE_WILD_IGNORE_TABLE extends MyToken<"REPLICATE_WILD_IGNORE_TABLE"> {}
export interface REPLICATION extends MyToken<"REPLICATION"> {}
export interface RESET extends MyToken<"RESET"> {}
export interface RESTORE extends MyToken<"RESTORE"> {}
export interface RESUME extends MyToken<"RESUME"> {}
export interface RETURNED_SQLSTATE extends MyToken<"RETURNED_SQLSTATE"> {}
export interface RETURNS extends MyToken<"RETURNS"> {}
export interface REVERSE extends MyToken<"REVERSE"> {}
export interface ROLLBACK extends MyToken<"ROLLBACK"> {}
export interface ROLLUP extends MyToken<"ROLLUP"> {}
export interface ROTATE extends MyToken<"ROTATE"> {}
export interface ROUTINE extends MyToken<"ROUTINE"> {}
export interface ROW extends MyToken<"ROW"> {}
export interface ROWS extends MyToken<"ROWS"> {}
export interface ROW_COUNT extends MyToken<"ROW_COUNT"> {}
export interface ROW_FORMAT extends MyToken<"ROW_FORMAT"> {}
export interface RTREE extends MyToken<"RTREE"> {}
export interface SAVEPOINT extends MyToken<"SAVEPOINT"> {}
export interface SCHEDULE extends MyToken<"SCHEDULE"> {}
export interface SCHEMA_NAME extends MyToken<"SCHEMA_NAME"> {}
export interface SECOND extends MyToken<"SECOND"> {}
export interface SECURITY extends MyToken<"SECURITY"> {}
export interface SERIAL extends MyToken<"SERIAL"> {}
export interface SERIALIZABLE extends MyToken<"SERIALIZABLE"> {}
export interface SERVER extends MyToken<"SERVER"> {}
export interface SESSION extends MyToken<"SESSION"> {}
export interface SHARE extends MyToken<"SHARE"> {}
export interface SHUTDOWN extends MyToken<"SHUTDOWN"> {}
export interface SIGNED extends MyToken<"SIGNED"> {}
export interface SIMPLE extends MyToken<"SIMPLE"> {}
export interface SLAVE extends MyToken<"SLAVE"> {}
export interface SLOW extends MyToken<"SLOW"> {}
export interface SNAPSHOT extends MyToken<"SNAPSHOT"> {}
export interface SOCKET extends MyToken<"SOCKET"> {}
export interface SOME extends MyToken<"SOME"> {}
export interface SONAME extends MyToken<"SONAME"> {}
export interface SOUNDS extends MyToken<"SOUNDS"> {}
export interface SOURCE extends MyToken<"SOURCE"> {}
export interface SQL_AFTER_GTIDS extends MyToken<"SQL_AFTER_GTIDS"> {}
export interface SQL_AFTER_MTS_GAPS extends MyToken<"SQL_AFTER_MTS_GAPS"> {}
export interface SQL_BEFORE_GTIDS extends MyToken<"SQL_BEFORE_GTIDS"> {}
export interface SQL_BUFFER_RESULT extends MyToken<"SQL_BUFFER_RESULT"> {}
export interface SQL_CACHE extends MyToken<"SQL_CACHE"> {}
export interface SQL_NO_CACHE extends MyToken<"SQL_NO_CACHE"> {}
export interface SQL_THREAD extends MyToken<"SQL_THREAD"> {}
export interface SQL_TSI_DAY extends MyToken<"SQL_TSI_DAY"> {}
export interface SQL_TSI_HOUR extends MyToken<"SQL_TSI_HOUR"> {}
export interface SQL_TSI_MINUTE extends MyToken<"SQL_TSI_MINUTE"> {}
export interface SQL_TSI_MONTH extends MyToken<"SQL_TSI_MONTH"> {}
export interface SQL_TSI_QUARTER extends MyToken<"SQL_TSI_QUARTER"> {}
export interface SQL_TSI_SECOND extends MyToken<"SQL_TSI_SECOND"> {}
export interface SQL_TSI_WEEK extends MyToken<"SQL_TSI_WEEK"> {}
export interface SQL_TSI_YEAR extends MyToken<"SQL_TSI_YEAR"> {}
export interface STACKED extends MyToken<"STACKED"> {}
export interface START extends MyToken<"START"> {}
export interface STARTS extends MyToken<"STARTS"> {}
export interface STATS_AUTO_RECALC extends MyToken<"STATS_AUTO_RECALC"> {}
export interface STATS_PERSISTENT extends MyToken<"STATS_PERSISTENT"> {}
export interface STATS_SAMPLE_PAGES extends MyToken<"STATS_SAMPLE_PAGES"> {}
export interface STATUS extends MyToken<"STATUS"> {}
export interface STOP extends MyToken<"STOP"> {}
export interface STORAGE extends MyToken<"STORAGE"> {}
export interface STRING extends MyToken<"STRING"> {}
export interface SUBCLASS_ORIGIN extends MyToken<"SUBCLASS_ORIGIN"> {}
export interface SUBJECT extends MyToken<"SUBJECT"> {}
export interface SUBPARTITION extends MyToken<"SUBPARTITION"> {}
export interface SUBPARTITIONS extends MyToken<"SUBPARTITIONS"> {}
export interface SUPER extends MyToken<"SUPER"> {}
export interface SUSPEND extends MyToken<"SUSPEND"> {}
export interface SWAPS extends MyToken<"SWAPS"> {}
export interface SWITCHES extends MyToken<"SWITCHES"> {}
export interface TABLES extends MyToken<"TABLES"> {}
export interface TABLESPACE extends MyToken<"TABLESPACE"> {}
export interface TABLE_CHECKSUM extends MyToken<"TABLE_CHECKSUM"> {}
export interface TABLE_NAME extends MyToken<"TABLE_NAME"> {}
export interface TEMPORARY extends MyToken<"TEMPORARY"> {}
export interface TEMPTABLE extends MyToken<"TEMPTABLE"> {}
export interface TEXT extends MyToken<"TEXT"> {}
export interface THAN extends MyToken<"THAN"> {}
export interface TIME extends MyToken<"TIME"> {}
export interface TIMESTAMP extends MyToken<"TIMESTAMP"> {}
export interface TIMESTAMPADD extends MyToken<"TIMESTAMPADD"> {}
export interface TIMESTAMPDIFF extends MyToken<"TIMESTAMPDIFF"> {}
export interface TRANSACTION extends MyToken<"TRANSACTION"> {}
export interface TRIGGERS extends MyToken<"TRIGGERS"> {}
export interface TRUNCATE extends MyToken<"TRUNCATE"> {}
export interface TYPE extends MyToken<"TYPE"> {}
export interface TYPES extends MyToken<"TYPES"> {}
export interface UNCOMMITTED extends MyToken<"UNCOMMITTED"> {}
export interface UNDEFINED extends MyToken<"UNDEFINED"> {}
export interface UNDOFILE extends MyToken<"UNDOFILE"> {}
export interface UNDO_BUFFER_SIZE extends MyToken<"UNDO_BUFFER_SIZE"> {}
export interface UNICODE extends MyToken<"UNICODE"> {}
export interface UNINSTALL extends MyToken<"UNINSTALL"> {}
export interface UNKNOWN extends MyToken<"UNKNOWN"> {}
export interface UNTIL extends MyToken<"UNTIL"> {}
export interface UPGRADE extends MyToken<"UPGRADE"> {}
export interface USER extends MyToken<"USER"> {}
export interface USER_RESOURCES extends MyToken<"USER_RESOURCES"> {}
export interface USE_FRM extends MyToken<"USE_FRM"> {}
export interface VALIDATION extends MyToken<"VALIDATION"> {}
export interface VALUE extends MyToken<"VALUE"> {}
export interface VARIABLES extends MyToken<"VARIABLES"> {}
export interface VIEW extends MyToken<"VIEW"> {}
export interface WAIT extends MyToken<"WAIT"> {}
export interface WARNINGS extends MyToken<"WARNINGS"> {}
export interface WEEK extends MyToken<"WEEK"> {}
export interface WEIGHT_STRING extends MyToken<"WEIGHT_STRING"> {}
export interface WITHOUT extends MyToken<"WITHOUT"> {}
export interface WORK extends MyToken<"WORK"> {}
export interface WRAPPER extends MyToken<"WRAPPER"> {}
export interface X509 extends MyToken<"X509"> {}
export interface XA extends MyToken<"XA"> {}
export interface XID extends MyToken<"XID"> {}
export interface XML extends MyToken<"XML"> {}
export interface YEAR extends MyToken<"YEAR"> {}
export interface PROCESS extends MyToken<"PROCESS"> {}
export interface END_OF_NON_RESERVED_KEYWORD extends MyToken<"END_OF_NON_RESERVED_KEYWORD"> {}
export interface EndOfFile extends MyToken<"EndOfFile"> {}
export interface UnknownToken extends MyToken<"UnknownToken"> {}
export interface CustomDelimiter extends MyToken<"CustomDelimiter"> {}
export interface SingleLineComment extends MyToken<"SingleLineComment"> {}
export interface MultiLineComment extends MyToken<"MultiLineComment"> {}
export interface ExecutionComment extends MyToken<"ExecutionComment"> {}
export interface ExecutionCommentStart extends MyToken<"ExecutionCommentStart"> {}
export interface ExecutionCommentEnd extends MyToken<"ExecutionCommentEnd"> {}
export interface WhiteSpace extends MyToken<"WhiteSpace"> {}
export interface LineBreak extends MyToken<"LineBreak"> {}
export interface EndOfStatement extends MyToken<"EndOfStatement"> {}
export interface StringLiteral extends MyToken<"StringLiteral"> {}
export interface NationalStringLiteral extends MyToken<"NationalStringLiteral"> {}
export interface HexLiteral extends MyToken<"HexLiteral"> {}
export interface BitLiteral extends MyToken<"BitLiteral"> {}
export interface IntegerLiteral extends MyToken<"IntegerLiteral"> {}
export interface DecimalLiteral extends MyToken<"DecimalLiteral"> {}
export interface RealLiteral extends MyToken<"RealLiteral"> {}
export interface Identifier extends MyToken<"Identifier"> {}
export interface MacroIdentifier extends MyToken<"MacroIdentifier"> {}
export interface DoubleQuotedLiteral extends MyToken<"DoubleQuotedLiteral"> {}
export interface Plus extends MyToken<"Plus"> {}
export interface Minus extends MyToken<"Minus"> {}
export interface Asterisk extends MyToken<"Asterisk"> {}
export interface Percent extends MyToken<"Percent"> {}
export interface Slash extends MyToken<"Slash"> {}
export interface Colon extends MyToken<"Colon"> {}
export interface Dot extends MyToken<"Dot"> {}
export interface SemiColon extends MyToken<"SemiColon"> {}
export interface Comma extends MyToken<"Comma"> {}
export interface Pound extends MyToken<"Pound"> {}
export interface OpenParenthesesPound extends MyToken<"OpenParenthesesPound"> {}
export interface PoundCloseParentheses extends MyToken<"PoundCloseParentheses"> {}
export interface Backslash extends MyToken<"Backslash"> {}
export interface QuestionMark extends MyToken<"QuestionMark"> {}
export interface ColonEqual extends MyToken<"ColonEqual"> {}
export interface At extends MyToken<"At"> {}
export interface Tilde extends MyToken<"Tilde"> {}
export interface Caret extends MyToken<"Caret"> {}
export interface Bar extends MyToken<"Bar"> {}
export interface BarBar extends MyToken<"BarBar"> {}
export interface Ampersand extends MyToken<"Ampersand"> {}
export interface AmpersandAmpersand extends MyToken<"AmpersandAmpersand"> {}
export interface Exclamation extends MyToken<"Exclamation"> {}
export interface ExclamationEqual extends MyToken<"ExclamationEqual"> {}
export interface Equal extends MyToken<"Equal"> {}
export interface LessEqualGreater extends MyToken<"LessEqualGreater"> {}
export interface GreaterEqual extends MyToken<"GreaterEqual"> {}
export interface Greater extends MyToken<"Greater"> {}
export interface LessEqual extends MyToken<"LessEqual"> {}
export interface Less extends MyToken<"Less"> {}
export interface LessGreater extends MyToken<"LessGreater"> {}
export interface LessLess extends MyToken<"LessLess"> {}
export interface GreaterGreater extends MyToken<"GreaterGreater"> {}
export interface OpenParentheses extends MyToken<"OpenParentheses"> {}
export interface CloseParentheses extends MyToken<"CloseParentheses"> {}
export interface OpenBrace extends MyToken<"OpenBrace"> {}
export interface CloseBrace extends MyToken<"CloseBrace"> {}
export interface DelimiterSpace extends MyToken<"DelimiterSpace"> {}
export interface UNIQUE_KEY extends MyToken<"UNIQUE_KEY"> {}
export interface UnderscoreCharacterSet extends MyToken<"UnderscoreCharacterSet"> {}
export interface NOT2 extends MyToken<"NOT2"> {}
export type CharacterDataTypeOption = CharacterDataTypeOptionAscii | CharacterDataTypeOptionUnicode | CharacterDataTypeOptionCharacterSet | CharacterDataTypeOptionByte | CharacterDataTypeOptionBinary;

export interface CharacterDataTypeOptionAscii extends MySyntaxNode {
    syntaxKind : "CharacterDataTypeOptionAscii";
    fields : {
        asciiToken : (ASCII);
        binaryToken? : (BINARY)
    };
}

export interface CharacterDataTypeOptionUnicode extends MySyntaxNode {
    syntaxKind : "CharacterDataTypeOptionUnicode";
    fields : {
        unicodeToken : (UNICODE);
        binaryToken? : (BINARY)
    };
}

export interface CharacterDataTypeOptionCharacterSet extends MySyntaxNode {
    syntaxKind : "CharacterDataTypeOptionCharacterSet";
    fields : {
        characterSetName : (CharacterSetName);
        binaryToken? : (BINARY);
        characterSetToken : (CHARACTER | SET | CHARSET)[]
    };
}

export interface CharacterDataTypeOptionByte extends MySyntaxNode {
    syntaxKind : "CharacterDataTypeOptionByte";
    fields : {
        byteToken : (BYTE)
    };
}

export interface CharacterDataTypeOptionBinary extends MySyntaxNode {
    syntaxKind : "CharacterDataTypeOptionBinary";
    fields : {
        binaryToken : (BINARY)
    };
}

export type DataType = BinaryDataType | VarBinaryDataType | BitDataType | BlobDataType | LongVarBinaryDataType | BooleanDataType | CharacterDataType | DateDataType | DateTimeDataType | DecimalDataType | EnumDataType | GeometryCollectionDataType | GeometryDataType | IntegerDataType | JsonDataType | RealDataType | FloatDataType | SetDataType | TextDataType | LongVarCharDataType | TimeDataType | TimestampDataType | YearDataType;

export interface BinaryDataType extends MySyntaxNode {
    syntaxKind : "BinaryDataType";
    fields : {
        binaryToken : (BINARY);
        fieldLength? : (FieldLength)
    };
}

export interface VarBinaryDataType extends MySyntaxNode {
    syntaxKind : "VarBinaryDataType";
    fields : {
        varBinaryToken : (VARBINARY);
        fieldLength : (FieldLength)
    };
}

export interface BitDataType extends MySyntaxNode {
    syntaxKind : "BitDataType";
    fields : {
        bitToken : (BIT);
        fieldLength? : (FieldLength)
    };
}

export interface BlobDataType extends MySyntaxNode {
    syntaxKind : "BlobDataType";
    fields : {
        blobToken : (TINYBLOB | MEDIUMBLOB | LONGBLOB | BLOB);
        fieldLength? : (FieldLength)
    };
}

export interface LongVarBinaryDataType extends MySyntaxNode {
    syntaxKind : "LongVarBinaryDataType";
    fields : {
        longToken : (LONG);
        varBinaryToken : (VARBINARY)
    };
}

export interface BooleanDataType extends MySyntaxNode {
    syntaxKind : "BooleanDataType";
    fields : {
        booleanToken : (BOOLEAN | BOOL)
    };
}

export type CharacterDataType = NCharDataType | CharDataType | NVarCharDataType | VarCharDataType;

export interface NCharDataType extends MySyntaxNode {
    syntaxKind : "NCharDataType";
    fields : {
        nCharToken : (NCHAR | NATIONAL | Char)[];
        fieldLength? : (FieldLength);
        binaryToken? : (BINARY)
    };
}

export interface CharDataType extends MySyntaxNode {
    syntaxKind : "CharDataType";
    fields : {
        charToken : (Char);
        fieldLength? : (FieldLength);
        characterDataTypeOption? : (CharacterDataTypeOption)
    };
}

export interface NVarCharDataType extends MySyntaxNode {
    syntaxKind : "NVarCharDataType";
    fields : {
        nVarCharToken : (NATIONAL | VarChar | Char | VARYING | NCHAR | NVARCHAR)[];
        fieldLength : (FieldLength);
        binaryToken? : (BINARY)
    };
}

export interface VarCharDataType extends MySyntaxNode {
    syntaxKind : "VarCharDataType";
    fields : {
        varCharToken : (Char | VARYING | VarChar)[];
        fieldLength : (FieldLength);
        characterDataTypeOption? : (CharacterDataTypeOption)
    };
}

export interface DateDataType extends MySyntaxNode {
    syntaxKind : "DateDataType";
    fields : {
        dateToken : (DATE)
    };
}

export interface DateTimeDataType extends MySyntaxNode {
    syntaxKind : "DateTimeDataType";
    fields : {
        dateTimeToken : (DATETIME);
        fieldLength? : (FieldLength)
    };
}

export interface DecimalDataType extends MySyntaxNode {
    syntaxKind : "DecimalDataType";
    fields : {
        decimalToken : (DECIMAL | DEC | NUMERIC | FIXED);
        precision? : (FieldLength | DecimalPrecision);
        integerDataTypeOptionRepeat1? : (IntegerDataTypeOptionRepeat1)
    };
}

export interface EnumDataType extends MySyntaxNode {
    syntaxKind : "EnumDataType";
    fields : {
        enumToken : (ENUM);
        textStringTuple1 : (TextStringTuple1);
        characterDataTypeOption? : (CharacterDataTypeOption)
    };
}

export interface RealDataType extends MySyntaxNode {
    syntaxKind : "RealDataType";
    fields : {
        realToken : (REAL | DOUBLE | PRECISION)[];
        precision? : (RealPrecision);
        integerDataTypeOptionRepeat1? : (IntegerDataTypeOptionRepeat1)
    };
}

export interface FloatDataType extends MySyntaxNode {
    syntaxKind : "FloatDataType";
    fields : {
        floatToken : (FLOAT);
        precision? : (FieldLength | RealPrecision);
        integerDataTypeOptionRepeat1? : (IntegerDataTypeOptionRepeat1)
    };
}

export interface GeometryCollectionDataType extends MySyntaxNode {
    syntaxKind : "GeometryCollectionDataType";
    fields : {
        geometryCollectionToken : (MULTIPOINT | MULTILINESTRING | MULTIPOLYGON | GEOMETRYCOLLECTION)
    };
}

export interface GeometryDataType extends MySyntaxNode {
    syntaxKind : "GeometryDataType";
    fields : {
        geometryToken : (POINT | LINESTRING | POLYGON | GEOMETRY)
    };
}

export interface IntegerDataType extends MySyntaxNode {
    syntaxKind : "IntegerDataType";
    fields : {
        integerToken : (TINYINT | SMALLINT | MEDIUMINT | INT | INTEGER | BIGINT);
        fieldLength? : (FieldLength);
        integerDataTypeOptionRepeat1? : (IntegerDataTypeOptionRepeat1)
    };
}

export interface JsonDataType extends MySyntaxNode {
    syntaxKind : "JsonDataType";
    fields : {
        jsonToken : (JSON)
    };
}

export interface SetDataType extends MySyntaxNode {
    syntaxKind : "SetDataType";
    fields : {
        setToken : (SET);
        textStringTuple1 : (TextStringTuple1);
        characterDataTypeOption? : (CharacterDataTypeOption)
    };
}

export interface TextDataType extends MySyntaxNode {
    syntaxKind : "TextDataType";
    fields : {
        textToken : (TINYTEXT | MEDIUMTEXT | LONGTEXT | TEXT);
        characterDataTypeOption? : (CharacterDataTypeOption);
        fieldLength? : (FieldLength)
    };
}

export interface LongVarCharDataType extends MySyntaxNode {
    syntaxKind : "LongVarCharDataType";
    fields : {
        longToken : (LONG);
        characterDataTypeOption? : (CharacterDataTypeOption);
        varCharToken : (VarChar | Char | VARYING)[]
    };
}

export interface TimeDataType extends MySyntaxNode {
    syntaxKind : "TimeDataType";
    fields : {
        timeToken : (TIME);
        fieldLength? : (FieldLength)
    };
}

export interface TimestampDataType extends MySyntaxNode {
    syntaxKind : "TimestampDataType";
    fields : {
        timestampToken : (TIMESTAMP);
        fieldLength? : (FieldLength)
    };
}

export interface YearDataType extends MySyntaxNode {
    syntaxKind : "YearDataType";
    fields : {
        yearToken : (YEAR);
        fieldLength? : (FieldLength);
        integerDataTypeOptionRepeat1? : (IntegerDataTypeOptionRepeat1)
    };
}

export interface DecimalPrecision extends MySyntaxNode {
    syntaxKind : "DecimalPrecision";
    fields : {
        openParenthesesToken : (OpenParentheses);
        precision : (IntegerLiteral);
        commaToken : (Comma);
        scale : (IntegerLiteral);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface FieldLength extends MySyntaxNode {
    syntaxKind : "FieldLength";
    fields : {
        openParenthesesToken : (OpenParentheses);
        fieldLength : (IntegerLiteral | DecimalLiteral);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface IntegerDataTypeOptionRepeat1 extends MySyntaxNode {
    syntaxKind : "IntegerDataTypeOptionRepeat1";
    fields : {
        item : (IntegerDataTypeOption)[]
    };
}

export type IntegerDataTypeOption = SIGNED | UNSIGNED | ZEROFILL;

export interface RealPrecision extends MySyntaxNode {
    syntaxKind : "RealPrecision";
    fields : {
        openParenthesesToken : (OpenParentheses);
        precision : (IntegerLiteral);
        commaToken : (Comma);
        scale : (IntegerLiteral);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface BitExpressionTuple1 extends MySyntaxNode {
    syntaxKind : "BitExpressionTuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (BitExpression)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface BitExpressionTuple1Tuple1 extends MySyntaxNode {
    syntaxKind : "BitExpressionTuple1Tuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (BitExpressionTuple1)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface ParenthesizedBitExpression extends MySyntaxNode {
    syntaxKind : "ParenthesizedBitExpression";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (BitExpression);
        closeParenthesesToken : (CloseParentheses)
    };
}

export type BitExpression = SimpleExpression | BinaryBitExpression;

export interface BinaryBitExpression extends MySyntaxNode {
    syntaxKind : "BinaryBitExpression";
    fields : {
        left : (BitExpression);
        operator : (Bar | Ampersand | GreaterGreater | LessLess | Plus | Minus | Asterisk | Slash | DIV | Percent | MOD | Caret);
        right : (BitExpression | IntervalExpression)
    };
}

export type BooleanPrimaryExpression = Predicate | IsNullBooleanPrimaryExpression | ComparisonBooleanPrimaryExpression | ComparisonSubQueryBooleanPrimaryExpression;

export interface IsNullBooleanPrimaryExpression extends MySyntaxNode {
    syntaxKind : "IsNullBooleanPrimaryExpression";
    fields : {
        expression : (BooleanPrimaryExpression);
        isToken : (IS);
        notToken? : (Not);
        nullToken : (NULL)
    };
}

export interface ComparisonBooleanPrimaryExpression extends MySyntaxNode {
    syntaxKind : "ComparisonBooleanPrimaryExpression";
    fields : {
        left : (BooleanPrimaryExpression);
        operator : (Equal | LessEqualGreater | GreaterEqual | Greater | LessEqual | Less | LessGreater | ExclamationEqual);
        right : (Predicate)
    };
}

export interface ComparisonSubQueryBooleanPrimaryExpression extends MySyntaxNode {
    syntaxKind : "ComparisonSubQueryBooleanPrimaryExpression";
    fields : {
        expression : (BooleanPrimaryExpression);
        operator : (Equal | LessEqualGreater | GreaterEqual | Greater | LessEqual | Less | LessGreater | ExclamationEqual);
        quantifier : (ALL | ANY | SOME);
        parenthesizedSelect : (ParenthesizedSelect)
    };
}

export interface IsExpression extends MySyntaxNode {
    syntaxKind : "IsExpression";
    fields : {
        left : (BooleanPrimaryExpression);
        isToken : (IS);
        notToken? : (Not);
        right : (TRUE | FALSE | UNKNOWN)
    };
}

export interface NotExpression extends MySyntaxNode {
    syntaxKind : "NotExpression";
    fields : {
        notToken : (NOT);
        expression : (Expression)
    };
}

export type Expression = BooleanPrimaryExpression | IsExpression | NotExpression | BinaryExpression;

export interface BinaryExpression extends MySyntaxNode {
    syntaxKind : "BinaryExpression";
    fields : {
        left : (Expression);
        operator : (OR | BarBar | XOR | AND | AmpersandAmpersand);
        right : (Expression)
    };
}

export interface ExpressionTuple1 extends MySyntaxNode {
    syntaxKind : "ExpressionTuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (Expression)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface ParenthesizedExpression extends MySyntaxNode {
    syntaxKind : "ParenthesizedExpression";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (Expression);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface Empty_Arguments extends MySyntaxNode {
    syntaxKind : "Empty_Arguments";
    fields : {
        
    };
}

export interface ExpressionList_Arguments_NoExpect extends MySyntaxNode {
    syntaxKind : "ExpressionList_Arguments_NoExpect";
    fields : {
        
    };
}

export interface ExpressionList_Arguments extends MySyntaxNode {
    syntaxKind : "ExpressionList_Arguments";
    fields : {
        
    };
}

export interface ExpressionList1_Arguments extends MySyntaxNode {
    syntaxKind : "ExpressionList1_Arguments";
    fields : {
        
    };
}

export interface ExpressionList2_Arguments extends MySyntaxNode {
    syntaxKind : "ExpressionList2_Arguments";
    fields : {
        
    };
}

export interface ExpressionList2_Arguments_NoExpect extends MySyntaxNode {
    syntaxKind : "ExpressionList2_Arguments_NoExpect";
    fields : {
        
    };
}

export interface UserDefinedExpressionList_Arguments extends MySyntaxNode {
    syntaxKind : "UserDefinedExpressionList_Arguments";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (Expression | UserDefinedExpression)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface Expression1_Arguments extends MySyntaxNode {
    syntaxKind : "Expression1_Arguments";
    fields : {
        
    };
}

export interface Expression2_Arguments extends MySyntaxNode {
    syntaxKind : "Expression2_Arguments";
    fields : {
        
    };
}

export interface Expression3_Arguments extends MySyntaxNode {
    syntaxKind : "Expression3_Arguments";
    fields : {
        
    };
}

export interface Expression4_Arguments extends MySyntaxNode {
    syntaxKind : "Expression4_Arguments";
    fields : {
        
    };
}

export interface Expression1To2_Arguments extends MySyntaxNode {
    syntaxKind : "Expression1To2_Arguments";
    fields : {
        
    };
}

export interface Expression2To3_Arguments extends MySyntaxNode {
    syntaxKind : "Expression2To3_Arguments";
    fields : {
        
    };
}

export interface Character_Arguments extends MySyntaxNode {
    syntaxKind : "Character_Arguments";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (Expression)[];
        usingCharacterSetName? : (UsingCharacterSetName);
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface UsingCharacterSetName extends MySyntaxNode {
    syntaxKind : "UsingCharacterSetName";
    fields : {
        usingToken : (USING);
        characterSetName : (CharacterSetName)
    };
}

export interface Trim_RemoveStringExpression extends MySyntaxNode {
    syntaxKind : "Trim_RemoveStringExpression";
    fields : {
        trimDirection? : (BOTH | LEADING | TRAILING);
        expression : (Expression);
        fromToken : (FROM)
    };
}

export interface Trim_RemoveSpaceExpression extends MySyntaxNode {
    syntaxKind : "Trim_RemoveSpaceExpression";
    fields : {
        trimDirection : (BOTH | LEADING | TRAILING);
        fromToken : (FROM)
    };
}

export interface Trim_Arguments extends MySyntaxNode {
    syntaxKind : "Trim_Arguments";
    fields : {
        openParenthesesToken : (OpenParentheses);
        trimExpression? : (Trim_RemoveStringExpression | Trim_RemoveSpaceExpression);
        expression : (Expression);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface DateAddInterval_Arguments extends MySyntaxNode {
    syntaxKind : "DateAddInterval_Arguments";
    fields : {
        openParenthesesToken : (OpenParentheses);
        expression : (Expression);
        commaToken : (Comma)[];
        intervalExpression : (IntervalExpression);
        closeParenthesesToken : (CloseParentheses);
        extraItem : (Expression)[]
    };
}

export interface Extract_Arguments extends MySyntaxNode {
    syntaxKind : "Extract_Arguments";
    fields : {
        openParenthesesToken : (OpenParentheses);
        temporalUnit : (DAY | WEEK | HOUR | MINUTE | MONTH | QUARTER | SECOND | MICROSECOND | YEAR | SQL_TSI_DAY | SQL_TSI_WEEK | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | SQL_TSI_QUARTER | SQL_TSI_SECOND | SQL_TSI_YEAR | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_MICROSECOND | MINUTE_SECOND | SECOND_MICROSECOND | YEAR_MONTH);
        fromToken : (FROM);
        expression : (Expression);
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[];
        extraItem : (Expression)[]
    };
}

export interface GetFormat_Arguments extends MySyntaxNode {
    syntaxKind : "GetFormat_Arguments";
    fields : {
        openParenthesesToken : (OpenParentheses);
        format : (DATETIME | TIMESTAMP | DATE | TIME);
        commaToken : (Comma)[];
        expression : (Identifier | Expression);
        closeParenthesesToken : (CloseParentheses);
        extraItem : (Expression)[]
    };
}

export interface Position_Arguments extends MySyntaxNode {
    syntaxKind : "Position_Arguments";
    fields : {
        openParenthesesToken : (OpenParentheses);
        left : (BitExpression);
        inToken : (IN);
        right : (Expression);
        closeParenthesesToken : (CloseParentheses)
    };
}

export type Substring_Arguments = Substring_Arguments_From | Substring_Arguments_Comma;

export interface ForLength extends MySyntaxNode {
    syntaxKind : "ForLength";
    fields : {
        forToken : (FOR);
        length : (Expression)
    };
}

export interface Substring_Arguments_From extends MySyntaxNode {
    syntaxKind : "Substring_Arguments_From";
    fields : {
        openParenthesesToken : (OpenParentheses);
        str : (Identifier | Expression);
        fromToken : (FROM);
        startPosition : (Expression);
        forLength? : (ForLength);
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[];
        extraItem : (Expression)[]
    };
}

export type Substring_Arguments_Comma = Expression2To3_Arguments;

export interface TimestampAdd_Arguments extends MySyntaxNode {
    syntaxKind : "TimestampAdd_Arguments";
    fields : {
        openParenthesesToken : (OpenParentheses);
        temporalUnit : (DAY | WEEK | HOUR | MINUTE | MONTH | QUARTER | SECOND | MICROSECOND | YEAR | SQL_TSI_DAY | SQL_TSI_WEEK | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | SQL_TSI_QUARTER | SQL_TSI_SECOND | SQL_TSI_YEAR);
        commaToken : (Comma)[];
        interval : (Identifier | Expression);
        dateTime : (Identifier | Expression);
        closeParenthesesToken : (CloseParentheses);
        extraItem : (Expression)[]
    };
}

export interface TimestampDiff_Arguments extends MySyntaxNode {
    syntaxKind : "TimestampDiff_Arguments";
    fields : {
        openParenthesesToken : (OpenParentheses);
        temporalUnit : (DAY | WEEK | HOUR | MINUTE | MONTH | QUARTER | SECOND | MICROSECOND | YEAR | SQL_TSI_DAY | SQL_TSI_WEEK | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | SQL_TSI_QUARTER | SQL_TSI_SECOND | SQL_TSI_YEAR);
        commaToken : (Comma)[];
        startDateTime : (Identifier | Expression);
        endDateTime : (Identifier | Expression);
        closeParenthesesToken : (CloseParentheses);
        extraItem : (Expression)[]
    };
}

export interface WeightString_Arguments extends MySyntaxNode {
    syntaxKind : "WeightString_Arguments";
    fields : {
        
    };
}

export interface WeightString_Arguments_Default extends MySyntaxNode {
    syntaxKind : "WeightString_Arguments_Default";
    fields : {
        openParenthesesToken : (OpenParentheses);
        expr : (Expression);
        levels? : (WeightString_Levels);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface WeightString_Arguments_AsChar extends MySyntaxNode {
    syntaxKind : "WeightString_Arguments_AsChar";
    fields : {
        openParenthesesToken : (OpenParentheses);
        expr : (Expression);
        asToken : (AS);
        charToken : (Char);
        length : (WeightStringCastLength);
        levels? : (WeightString_Levels);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface WeightString_Arguments_AsBinary extends MySyntaxNode {
    syntaxKind : "WeightString_Arguments_AsBinary";
    fields : {
        openParenthesesToken : (OpenParentheses);
        expr : (Expression);
        asToken : (AS);
        binaryToken : (BINARY);
        length : (WeightStringCastLength);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface WeightString_Arguments_Undocumented extends MySyntaxNode {
    syntaxKind : "WeightString_Arguments_Undocumented";
    fields : {
        openParenthesesToken : (OpenParentheses);
        expr : (Expression);
        commaToken : (Comma)[];
        num1 : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral);
        num2 : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral);
        num3 : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral);
        closeParenthesesToken : (CloseParentheses);
        extraItem : (Expression)[]
    };
}

export interface WeightString_Levels extends MySyntaxNode {
    syntaxKind : "WeightString_Levels";
    fields : {
        levelToken : (LEVEL);
        levels : (WeightString_Level_List1 | WeightString_Level_Range)
    };
}

export interface WeightString_Level_Flag extends MySyntaxNode {
    syntaxKind : "WeightString_Level_Flag";
    fields : {
        sortOrder? : (ASC | DESC);
        reverseToken? : (REVERSE)
    };
}

export interface WeightString_Level_Item extends MySyntaxNode {
    syntaxKind : "WeightString_Level_Item";
    fields : {
        level : (IntegerLiteral | HexLiteral);
        flag? : (WeightString_Level_Flag)
    };
}

export interface WeightString_Level_List1 extends MySyntaxNode {
    syntaxKind : "WeightString_Level_List1";
    fields : {
        item : (WeightString_Level_Item)[];
        commaToken : (Comma)[]
    };
}

export interface WeightString_Level_Range extends MySyntaxNode {
    syntaxKind : "WeightString_Level_Range";
    fields : {
        minLevel : (IntegerLiteral | HexLiteral);
        dashToken : (Minus);
        maxLevel : (IntegerLiteral | HexLiteral)
    };
}

export interface WeightStringCastLength extends MySyntaxNode {
    syntaxKind : "WeightStringCastLength";
    fields : {
        openParenthesesToken : (OpenParentheses);
        length : (IntegerLiteral | HexLiteral);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface AsciiFunctionCall extends MySyntaxNode {
    syntaxKind : "AsciiFunctionCall";
    fields : {
        functionName : (ASCII);
        arguments : (Expression1_Arguments)
    };
}

export interface CharSetFunctionCall extends MySyntaxNode {
    syntaxKind : "CharSetFunctionCall";
    fields : {
        functionName : (CHARSET);
        arguments : (Expression1_Arguments)
    };
}

export interface CoalesceFunctionCall extends MySyntaxNode {
    syntaxKind : "CoalesceFunctionCall";
    fields : {
        functionName : (COALESCE);
        arguments : (ExpressionList1_Arguments)
    };
}

export interface CollationFunctionCall extends MySyntaxNode {
    syntaxKind : "CollationFunctionCall";
    fields : {
        functionName : (COLLATION);
        arguments : (Expression1_Arguments)
    };
}

export interface SchemaFunctionCall extends MySyntaxNode {
    syntaxKind : "SchemaFunctionCall";
    fields : {
        functionName : (SCHEMA | DATABASE);
        arguments : (Empty_Arguments)
    };
}

export interface IfFunctionCall extends MySyntaxNode {
    syntaxKind : "IfFunctionCall";
    fields : {
        functionName : (IF);
        arguments : (Expression3_Arguments)
    };
}

export interface FormatFunctionCall extends MySyntaxNode {
    syntaxKind : "FormatFunctionCall";
    fields : {
        functionName : (FORMAT);
        arguments : (Expression2To3_Arguments)
    };
}

export interface MicrosecondFunctionCall extends MySyntaxNode {
    syntaxKind : "MicrosecondFunctionCall";
    fields : {
        functionName : (MICROSECOND);
        arguments : (Expression1_Arguments)
    };
}

export interface ModFunctionCall extends MySyntaxNode {
    syntaxKind : "ModFunctionCall";
    fields : {
        functionName : (MOD);
        arguments : (Expression2_Arguments)
    };
}

export interface PasswordFunctionCall extends MySyntaxNode {
    syntaxKind : "PasswordFunctionCall";
    fields : {
        functionName : (PASSWORD);
        arguments : (Expression1_Arguments)
    };
}

export interface QuarterFunctionCall extends MySyntaxNode {
    syntaxKind : "QuarterFunctionCall";
    fields : {
        functionName : (QUARTER | SQL_TSI_QUARTER);
        arguments : (Expression1_Arguments)
    };
}

export interface RepeatFunctionCall extends MySyntaxNode {
    syntaxKind : "RepeatFunctionCall";
    fields : {
        functionName : (REPEAT);
        arguments : (Expression2_Arguments)
    };
}

export interface ReplaceFunctionCall extends MySyntaxNode {
    syntaxKind : "ReplaceFunctionCall";
    fields : {
        functionName : (REPLACE);
        arguments : (Expression3_Arguments)
    };
}

export interface ReverseFunctionCall extends MySyntaxNode {
    syntaxKind : "ReverseFunctionCall";
    fields : {
        functionName : (REVERSE);
        arguments : (Expression1_Arguments)
    };
}

export interface RowCountFunctionCall extends MySyntaxNode {
    syntaxKind : "RowCountFunctionCall";
    fields : {
        functionName : (ROW_COUNT);
        arguments : (Empty_Arguments)
    };
}

export interface TruncateFunctionCall extends MySyntaxNode {
    syntaxKind : "TruncateFunctionCall";
    fields : {
        functionName : (TRUNCATE);
        arguments : (Expression2_Arguments)
    };
}

export interface WeekFunctionCall extends MySyntaxNode {
    syntaxKind : "WeekFunctionCall";
    fields : {
        functionName : (WEEK | SQL_TSI_WEEK);
        arguments : (Expression1To2_Arguments)
    };
}

export interface WeightStringFunctionCall extends MySyntaxNode {
    syntaxKind : "WeightStringFunctionCall";
    fields : {
        functionName : (WEIGHT_STRING);
        arguments : (WeightString_Arguments)
    };
}

export interface ContainsFunctionCall extends MySyntaxNode {
    syntaxKind : "ContainsFunctionCall";
    fields : {
        functionName : (CONTAINS);
        arguments : (Expression2_Arguments)
    };
}

export interface GeometryCollectionFunctionCall extends MySyntaxNode {
    syntaxKind : "GeometryCollectionFunctionCall";
    fields : {
        functionName : (GEOMETRYCOLLECTION);
        arguments : (ExpressionList_Arguments)
    };
}

export interface LineStringFunctionCall extends MySyntaxNode {
    syntaxKind : "LineStringFunctionCall";
    fields : {
        functionName : (LINESTRING);
        arguments : (ExpressionList2_Arguments)
    };
}

export interface MultiLineStringFunctionCall extends MySyntaxNode {
    syntaxKind : "MultiLineStringFunctionCall";
    fields : {
        functionName : (MULTILINESTRING);
        arguments : (ExpressionList1_Arguments)
    };
}

export interface MultiPointFunctionCall extends MySyntaxNode {
    syntaxKind : "MultiPointFunctionCall";
    fields : {
        functionName : (MULTIPOINT);
        arguments : (ExpressionList1_Arguments)
    };
}

export interface MultiPolygonFunctionCall extends MySyntaxNode {
    syntaxKind : "MultiPolygonFunctionCall";
    fields : {
        functionName : (MULTIPOLYGON);
        arguments : (ExpressionList1_Arguments)
    };
}

export interface PointFunctionCall extends MySyntaxNode {
    syntaxKind : "PointFunctionCall";
    fields : {
        functionName : (POINT);
        arguments : (Expression2_Arguments)
    };
}

export interface PolygonFunctionCall extends MySyntaxNode {
    syntaxKind : "PolygonFunctionCall";
    fields : {
        functionName : (POLYGON);
        arguments : (ExpressionList1_Arguments)
    };
}

export type ConflictFunctionCall = AsciiFunctionCall | CharSetFunctionCall | CoalesceFunctionCall | CollationFunctionCall | SchemaFunctionCall | IfFunctionCall | FormatFunctionCall | MicrosecondFunctionCall | ModFunctionCall | PasswordFunctionCall | QuarterFunctionCall | RepeatFunctionCall | ReplaceFunctionCall | ReverseFunctionCall | RowCountFunctionCall | TruncateFunctionCall | WeekFunctionCall | WeightStringFunctionCall | ContainsFunctionCall | GeometryCollectionFunctionCall | LineStringFunctionCall | MultiLineStringFunctionCall | MultiPointFunctionCall | MultiPolygonFunctionCall | PointFunctionCall | PolygonFunctionCall;

export interface MaybeUserDefinedFunctionCall extends MySyntaxNode {
    syntaxKind : "MaybeUserDefinedFunctionCall";
    fields : {
        functionName : (Identifier | DoubleQuotedLiteral);
        arguments : (UserDefinedExpressionList_Arguments)
    };
}

export interface QualifiedFunctionCall extends MySyntaxNode {
    syntaxKind : "QualifiedFunctionCall";
    fields : {
        schemaName : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL);
        dotToken : (Dot);
        functionName : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL | IdentOrReserved);
        arguments : (ExpressionList_Arguments)
    };
}

export type FunctionCall = MaybeUserDefinedFunctionCall | QualifiedFunctionCall | KeywordFunctionCall | NonKeywordFunctionCall | ConflictFunctionCall;

export interface CharacterFunctionCall extends MySyntaxNode {
    syntaxKind : "CharacterFunctionCall";
    fields : {
        functionName : (CHAR | CHARACTER);
        arguments : (Character_Arguments)
    };
}

export interface CurrentUserFunctionCall extends MySyntaxNode {
    syntaxKind : "CurrentUserFunctionCall";
    fields : {
        functionName : (CURRENT_USER);
        arguments? : (Empty_Arguments)
    };
}

export interface ExtractFromDateTimeFunctionCall extends MySyntaxNode {
    syntaxKind : "ExtractFromDateTimeFunctionCall";
    fields : {
        functionName : (DATE | DAY | SQL_TSI_DAY | HOUR | SQL_TSI_HOUR | MINUTE | SQL_TSI_MINUTE | MONTH | SQL_TSI_MONTH | SECOND | SQL_TSI_SECOND | TIME | YEAR | SQL_TSI_YEAR);
        arguments : (Expression1_Arguments)
    };
}

export interface InsertFunctionCall extends MySyntaxNode {
    syntaxKind : "InsertFunctionCall";
    fields : {
        functionName : (INSERT);
        arguments : (Expression4_Arguments)
    };
}

export interface IntervalFunctionCall extends MySyntaxNode {
    syntaxKind : "IntervalFunctionCall";
    fields : {
        functionName : (INTERVAL);
        arguments : (ExpressionList2_Arguments)
    };
}

export interface LeftFunctionCall extends MySyntaxNode {
    syntaxKind : "LeftFunctionCall";
    fields : {
        functionName : (LEFT);
        arguments : (Expression2_Arguments)
    };
}

export interface RightFunctionCall extends MySyntaxNode {
    syntaxKind : "RightFunctionCall";
    fields : {
        functionName : (RIGHT);
        arguments : (Expression2_Arguments)
    };
}

export interface TimestampFunctionCall extends MySyntaxNode {
    syntaxKind : "TimestampFunctionCall";
    fields : {
        functionName : (TIMESTAMP);
        arguments : (Expression1To2_Arguments)
    };
}

export interface TrimFunctionCall extends MySyntaxNode {
    syntaxKind : "TrimFunctionCall";
    fields : {
        functionName : (TRIM);
        arguments : (Trim_Arguments)
    };
}

export interface UserFunctionCall extends MySyntaxNode {
    syntaxKind : "UserFunctionCall";
    fields : {
        functionName : (USER | SESSION_USER | SYSTEM_USER);
        arguments : (Empty_Arguments)
    };
}

export type KeywordFunctionCall = CharacterFunctionCall | CurrentUserFunctionCall | ExtractFromDateTimeFunctionCall | InsertFunctionCall | IntervalFunctionCall | LeftFunctionCall | RightFunctionCall | TimestampFunctionCall | TrimFunctionCall | UserFunctionCall;

export interface AddDateFunctionCall extends MySyntaxNode {
    syntaxKind : "AddDateFunctionCall";
    fields : {
        functionName : (ADDDATE | SUBDATE);
        arguments : (Expression2_Arguments)
    };
}

export interface CurrentDateFunctionCall extends MySyntaxNode {
    syntaxKind : "CurrentDateFunctionCall";
    fields : {
        functionName : (CURRENT_DATE | CURDATE);
        arguments? : (Empty_Arguments)
    };
}

export interface CurrentTimeFunctionCall extends MySyntaxNode {
    syntaxKind : "CurrentTimeFunctionCall";
    fields : {
        functionName : (CURRENT_TIME | CURTIME);
        arguments? : (DateTimePrecisionArg)
    };
}

export interface DateAddIntervalFunctionCall extends MySyntaxNode {
    syntaxKind : "DateAddIntervalFunctionCall";
    fields : {
        functionName : (DATE_ADD | DATE_SUB | ADDDATE | SUBDATE);
        arguments : (DateAddInterval_Arguments)
    };
}

export interface ExtractFunctionCall extends MySyntaxNode {
    syntaxKind : "ExtractFunctionCall";
    fields : {
        functionName : (EXTRACT);
        arguments : (Extract_Arguments)
    };
}

export interface GetFormatFunctionCall extends MySyntaxNode {
    syntaxKind : "GetFormatFunctionCall";
    fields : {
        functionName : (GET_FORMAT);
        arguments : (GetFormat_Arguments)
    };
}

export interface PositionFunctionCall extends MySyntaxNode {
    syntaxKind : "PositionFunctionCall";
    fields : {
        functionName : (POSITION);
        arguments : (Position_Arguments)
    };
}

export interface SubstringFunctionCall extends MySyntaxNode {
    syntaxKind : "SubstringFunctionCall";
    fields : {
        functionName : (SUBSTRING | SUBSTR | MID);
        arguments : (Substring_Arguments)
    };
}

export interface SysDateFunctionCall extends MySyntaxNode {
    syntaxKind : "SysDateFunctionCall";
    fields : {
        functionName : (SYSDATE);
        arguments : (DateTimePrecisionArg)
    };
}

export interface TimestampAddFunctionCall extends MySyntaxNode {
    syntaxKind : "TimestampAddFunctionCall";
    fields : {
        functionName : (TIMESTAMPADD);
        arguments : (TimestampAdd_Arguments)
    };
}

export interface TimestampDiffFunctionCall extends MySyntaxNode {
    syntaxKind : "TimestampDiffFunctionCall";
    fields : {
        functionName : (TIMESTAMPDIFF);
        arguments : (TimestampDiff_Arguments)
    };
}

export interface UtcDateFunctionCall extends MySyntaxNode {
    syntaxKind : "UtcDateFunctionCall";
    fields : {
        functionName : (UTC_DATE);
        arguments? : (Empty_Arguments)
    };
}

export interface UtcTimeFunctionCall extends MySyntaxNode {
    syntaxKind : "UtcTimeFunctionCall";
    fields : {
        functionName : (UTC_TIME);
        arguments? : (DateTimePrecisionArg)
    };
}

export interface UtcTimestampFunctionCall extends MySyntaxNode {
    syntaxKind : "UtcTimestampFunctionCall";
    fields : {
        functionName : (UTC_TIMESTAMP);
        arguments? : (DateTimePrecisionArg)
    };
}

export type NonKeywordFunctionCall = AddDateFunctionCall | CurrentDateFunctionCall | CurrentTimeFunctionCall | DateAddIntervalFunctionCall | ExtractFunctionCall | GetFormatFunctionCall | Now | PositionFunctionCall | SubstringFunctionCall | SysDateFunctionCall | TimestampAddFunctionCall | TimestampDiffFunctionCall | UtcDateFunctionCall | UtcTimeFunctionCall | UtcTimestampFunctionCall;

export interface UserDefinedExpression extends MySyntaxNode {
    syntaxKind : "UserDefinedExpression";
    fields : {
        expression : (Expression);
        alias : (Alias)
    };
}

export interface intervalTimeStamp extends MySyntaxNode {
    syntaxKind : "intervalTimeStamp";
    fields : {
        
    };
}

export interface interval extends MySyntaxNode {
    syntaxKind : "interval";
    fields : {
        
    };
}

export type TemporalUnitTimeStamp = DAY | WEEK | HOUR | MINUTE | MONTH | QUARTER | SECOND | MICROSECOND | YEAR | SQL_TSI_DAY | SQL_TSI_WEEK | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | SQL_TSI_QUARTER | SQL_TSI_SECOND | SQL_TSI_YEAR;

export type TemporalUnit = DAY | WEEK | HOUR | MINUTE | MONTH | QUARTER | SECOND | MICROSECOND | YEAR | SQL_TSI_DAY | SQL_TSI_WEEK | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | SQL_TSI_QUARTER | SQL_TSI_SECOND | SQL_TSI_YEAR | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_MICROSECOND | MINUTE_SECOND | SECOND_MICROSECOND | YEAR_MONTH;

export interface IntervalExpression extends MySyntaxNode {
    syntaxKind : "IntervalExpression";
    fields : {
        intervalToken : (INTERVAL);
        expression : (Expression);
        temporalUnit : (TemporalUnit)
    };
}

export type Literal = TextLiteral | NumberLiteral | TemporalLiteral | NULL | FALSE | TRUE | HexLiteral | BitLiteral | UnderscoreCharacterSetHexLiteral | UnderscoreCharacterSetBitLiteral;

export type TextLiteral = StringLiteral | NationalStringLiteral | UnderscoreCharacterSetStringLiteral | ConcatenatedTextLiteral;

export interface ConcatenatedTextLiteral extends MySyntaxNode {
    syntaxKind : "ConcatenatedTextLiteral";
    fields : {
        item : (StringLiteral | DoubleQuotedLiteral | NationalStringLiteral | UnderscoreCharacterSetStringLiteral)[]
    };
}

export type NumberLiteral = IntegerLiteral | RealLiteral | DecimalLiteral;

export interface TemporalLiteral extends MySyntaxNode {
    syntaxKind : "TemporalLiteral";
    fields : {
        temporalToken : (DATE | TIME | TIMESTAMP);
        str : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface UnderscoreCharacterSetHexLiteral extends MySyntaxNode {
    syntaxKind : "UnderscoreCharacterSetHexLiteral";
    fields : {
        underscoreCharacterSetToken : (UnderscoreCharacterSet);
        hexLiteralToken : (HexLiteral)
    };
}

export interface UnderscoreCharacterSetBitLiteral extends MySyntaxNode {
    syntaxKind : "UnderscoreCharacterSetBitLiteral";
    fields : {
        underscoreCharacterSetToken : (UnderscoreCharacterSet);
        bitLiteralToken : (BitLiteral)
    };
}

export interface UnderscoreCharacterSetStringLiteral extends MySyntaxNode {
    syntaxKind : "UnderscoreCharacterSetStringLiteral";
    fields : {
        underscoreCharacterSetToken : (UnderscoreCharacterSet);
        stringLiteralToken : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface Now extends MySyntaxNode {
    syntaxKind : "Now";
    fields : {
        functionName : (CURRENT_TIMESTAMP | NOW | LOCALTIME | LOCALTIMESTAMP);
        arguments? : (DateTimePrecisionArg)
    };
}

export interface DateTimePrecisionArg extends MySyntaxNode {
    syntaxKind : "DateTimePrecisionArg";
    fields : {
        openParenthesesToken : (OpenParentheses);
        dateTimePrecision? : (Expression);
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[];
        extraItem : (Expression)[]
    };
}

export type Predicate = BitExpression | InSubQueryPredicate | InExpressionTuple1Predicate | BetweenPredicate | SoundsLikePredicate | LikePredicate | RegExpPredicate;

export interface InSubQueryPredicate extends MySyntaxNode {
    syntaxKind : "InSubQueryPredicate";
    fields : {
        expression : (BitExpression);
        notToken? : (Not);
        inToken : (IN);
        parenthesizedSelect : (ParenthesizedSelect)
    };
}

export interface InExpressionTuple1Predicate extends MySyntaxNode {
    syntaxKind : "InExpressionTuple1Predicate";
    fields : {
        expression : (BitExpression);
        notToken? : (Not);
        inToken : (IN);
        expressionTuple1 : (ExpressionTuple1)
    };
}

export interface BetweenPredicate extends MySyntaxNode {
    syntaxKind : "BetweenPredicate";
    fields : {
        left : (BitExpression);
        notToken? : (Not);
        betweenToken : (BETWEEN);
        middle : (BitExpression);
        andToken : (AND);
        right : (Predicate)
    };
}

export interface SoundsLikePredicate extends MySyntaxNode {
    syntaxKind : "SoundsLikePredicate";
    fields : {
        left : (BitExpression);
        soundsToken : (SOUNDS);
        likeToken : (LIKE);
        right : (BitExpression)
    };
}

export interface LikePredicate extends MySyntaxNode {
    syntaxKind : "LikePredicate";
    fields : {
        left : (BitExpression);
        notToken? : (Not);
        likeToken : (LIKE);
        right : (SimpleExpression);
        escape? : (LikeEscape)
    };
}

export interface LikeEscape extends MySyntaxNode {
    syntaxKind : "LikeEscape";
    fields : {
        escapeToken : (ESCAPE);
        expression : (SimpleExpression)
    };
}

export interface RegExpPredicate extends MySyntaxNode {
    syntaxKind : "RegExpPredicate";
    fields : {
        left : (BitExpression);
        notToken? : (Not);
        regexpToken : (REGEXP);
        right : (BitExpression)
    };
}

export interface SignedLiteral extends MySyntaxNode {
    syntaxKind : "SignedLiteral";
    fields : {
        literal : (Literal | NumberLiteral);
        sign? : (Plus | Minus)
    };
}

export type SimpleExpression = Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE | ColumnIdentifierSimpleExpression | FunctionCall | Literal | ParamMarker | UserVariableIdentifier | UserVariableIdentifierAssignment | ScopedSystemVariableIdentifier | UnscopedSystemVariableIdentifier | Not2SimpleExpression | ParenthesizedExpressionSimpleExpression | IntervalExpressionPlus | PrefixSimpleExpression | CollateSimpleExpression | ParenthesizedSelect;

export interface Not2SimpleExpression extends MySyntaxNode {
    syntaxKind : "Not2SimpleExpression";
    fields : {
        exclamationToken : (Exclamation | NOT2);
        expression : (SimpleExpression)
    };
}

export interface PrefixSimpleExpression extends MySyntaxNode {
    syntaxKind : "PrefixSimpleExpression";
    fields : {
        operator : (Plus | Minus | Tilde | BINARY);
        expression : (SimpleExpression)
    };
}

export interface CollateSimpleExpression extends MySyntaxNode {
    syntaxKind : "CollateSimpleExpression";
    fields : {
        expression : (SimpleExpression);
        collateToken : (COLLATE);
        collation : (CollationName)
    };
}

export interface IntervalExpressionPlus extends MySyntaxNode {
    syntaxKind : "IntervalExpressionPlus";
    fields : {
        left : (IntervalExpression);
        operator : (Plus);
        right : (Expression)
    };
}

export type ParenthesizedExpressionSimpleExpression = ParenthesizedExpression;

export interface ColumnIdentifierSimpleExpression extends MySyntaxNode {
    syntaxKind : "ColumnIdentifierSimpleExpression";
    fields : {
        tableName : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL | Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE);
        dotToken : (Dot)[];
        columnName : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL | IdentOrReserved);
        schemaName? : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL)
    };
}

export interface ScopedSystemVariableIdentifier extends MySyntaxNode {
    syntaxKind : "ScopedSystemVariableIdentifier";
    fields : {
        atToken : (At)[];
        scope : (SESSION | LOCAL | GLOBAL);
        dotToken : (Dot)[];
        instanceName : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL);
        componentName? : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL)
    };
}

export interface UnscopedSystemVariableIdentifier extends MySyntaxNode {
    syntaxKind : "UnscopedSystemVariableIdentifier";
    fields : {
        atToken : (At)[];
        instanceName : (Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE);
        dotToken? : (Dot);
        componentName? : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL)
    };
}

export interface UserVariableIdentifier extends MySyntaxNode {
    syntaxKind : "UserVariableIdentifier";
    fields : {
        atToken : (At);
        identifier? : (Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL | StringLiteral)
    };
}

export interface UserVariableIdentifierAssignment extends MySyntaxNode {
    syntaxKind : "UserVariableIdentifierAssignment";
    fields : {
        userVariableIdentifier : (UserVariableIdentifier);
        colonEqualToken : (ColonEqual);
        expression : (Expression)
    };
}

export interface ParamMarker extends MySyntaxNode {
    syntaxKind : "ParamMarker";
    fields : {
        questionMarkToken : (QuestionMark)
    };
}

export interface ColumnIdentifier extends MySyntaxNode {
    syntaxKind : "ColumnIdentifier";
    fields : {
        columnName : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL);
        tableName? : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL);
        schemaName? : (Ident);
        dotToken : (Dot)[]
    };
}

export type Ident = Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE;

export type IdentOrReserved = Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL;

export interface IdentTuple1 extends MySyntaxNode {
    syntaxKind : "IdentTuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (Ident)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface IdentTuple2 extends MySyntaxNode {
    syntaxKind : "IdentTuple2";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (Ident)[];
        commaToken : (Comma)[];
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface ParenthesizedIdent extends MySyntaxNode {
    syntaxKind : "ParenthesizedIdent";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (Ident);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface TableIdentifier extends MySyntaxNode {
    syntaxKind : "TableIdentifier";
    fields : {
        tableName : (Ident | UnderscoreCharacterSet | ACCESSIBLE | ADD | ALL | ALTER | ANALYZE | AND | AS | ASC | ASENSITIVE | BEFORE | BETWEEN | BIGINT | BINARY | BLOB | BOTH | BY | CALL | CASCADE | CASE | CHANGE | CHAR | CHARACTER | CHECK | COLLATE | COLUMN | CONDITION | CONSTRAINT | CONTINUE | CONVERT | CREATE | CROSS | CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | CURRENT_USER | CURSOR | DATABASE | DATABASES | DAY_HOUR | DAY_MICROSECOND | DAY_MINUTE | DAY_SECOND | DEC | DECIMAL | DECLARE | DEFAULT | DELAYED | DELETE | DESC | DESCRIBE | DETERMINISTIC | DISTINCT | DISTINCTROW | DIV | DOUBLE | DROP | DUAL | EACH | ELSE | ELSEIF | ENCLOSED | ESCAPED | EXISTS | EXIT | EXPLAIN | FALSE | FETCH | FLOAT | FLOAT4 | FLOAT8 | FOR | FORCE | FOREIGN | FROM | FULLTEXT | GENERATED | GET | GRANT | GROUP | HAVING | HIGH_PRIORITY | HOUR_MICROSECOND | HOUR_MINUTE | HOUR_SECOND | IF | IGNORE | IN | INDEX | INFILE | INNER | INOUT | INSENSITIVE | INSERT | INT | INT1 | INT2 | INT3 | INT4 | INT8 | INTEGER | INTERVAL | INTO | IO_AFTER_GTIDS | IO_BEFORE_GTIDS | IS | ITERATE | JOIN | KEY | KEYS | KILL | LEADING | LEAVE | LEFT | LIKE | LIMIT | LINEAR | LINES | LOAD | LOCALTIME | LOCALTIMESTAMP | LOCK | LONG | LONGBLOB | LONGTEXT | LOOP | LOW_PRIORITY | MASTER_BIND | MASTER_SSL_VERIFY_SERVER_CERT | MATCH | MAXVALUE | MEDIUMBLOB | MEDIUMINT | MEDIUMTEXT | MIDDLEINT | MINUTE_MICROSECOND | MINUTE_SECOND | MOD | MODIFIES | NATURAL | NOT | NO_WRITE_TO_BINLOG | NULL | NUMERIC | ON | OPTIMIZE | OPTIMIZER_COSTS | OPTION | OPTIONALLY | OR | ORDER | OUT | OUTER | OUTFILE | PARTITION | PRECISION | PRIMARY | PROCEDURE | PURGE | RANGE | READ | READS | READ_WRITE | REAL | REFERENCES | REGEXP | RELEASE | RENAME | REPEAT | REPLACE | REQUIRE | RESIGNAL | RESTRICT | RETURN | REVOKE | RIGHT | RLIKE | SCHEMA | SCHEMAS | SECOND_MICROSECOND | SELECT | SENSITIVE | SEPARATOR | SET | SHOW | SIGNAL | SMALLINT | SPATIAL | SPECIFIC | SQL | SQLEXCEPTION | SQLSTATE | SQLWARNING | SQL_BIG_RESULT | SQL_CALC_FOUND_ROWS | SQL_SMALL_RESULT | SSL | STARTING | STORED | STRAIGHT_JOIN | TABLE | TERMINATED | THEN | TINYBLOB | TINYINT | TINYTEXT | TO | TRAILING | TRIGGER | TRUE | UNDO | UNION | UNIQUE | UNLOCK | UNSIGNED | UPDATE | USAGE | USE | USING | UTC_DATE | UTC_TIME | UTC_TIMESTAMP | VALUES | VARBINARY | VARCHAR | VARCHARACTER | VARYING | VIRTUAL | WHEN | WHERE | WHILE | WITH | WRITE | XOR | YEAR_MONTH | ZEROFILL);
        schemaName? : (Ident);
        dotToken? : (Dot)
    };
}

export interface TableIdentifierTuple extends MySyntaxNode {
    syntaxKind : "TableIdentifierTuple";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (TableIdentifier)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface TableIdentifierList1 extends MySyntaxNode {
    syntaxKind : "TableIdentifierList1";
    fields : {
        item : (TableIdentifier)[];
        commaToken : (Comma)[]
    };
}

export type Char = CHAR | CHARACTER;

export interface DefaultCharacterSet extends MySyntaxNode {
    syntaxKind : "DefaultCharacterSet";
    fields : {
        defaultToken? : (DEFAULT);
        equalToken? : (Equal);
        characterSetName : (CharacterSetNameOrDefault);
        characterSetToken : (CHARACTER | SET | CHARSET)[]
    };
}

export type CharacterSetName = Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE | StringLiteral | BINARY;

export type CharacterSetNameOrDefault = DEFAULT | CharacterSetName;

export interface DefaultCollate extends MySyntaxNode {
    syntaxKind : "DefaultCollate";
    fields : {
        defaultToken? : (DEFAULT);
        collateToken : (COLLATE);
        equalToken? : (Equal);
        collationName : (CollationNameOrDefault)
    };
}

export interface CollateExplicit extends MySyntaxNode {
    syntaxKind : "CollateExplicit";
    fields : {
        collateToken : (COLLATE);
        collationName : (CollationName)
    };
}

export type CollationName = Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE | StringLiteral;

export type CollationNameOrDefault = DEFAULT | CollationName;

export interface DropMode extends MySyntaxNode {
    syntaxKind : "DropMode";
    fields : {
        
    };
}

export interface IfExists extends MySyntaxNode {
    syntaxKind : "IfExists";
    fields : {
        ifToken : (IF);
        existsToken : (EXISTS)
    };
}

export interface IfNotExists extends MySyntaxNode {
    syntaxKind : "IfNotExists";
    fields : {
        ifToken : (IF);
        notToken : (Not);
        existsToken : (EXISTS)
    };
}

export type Not = NOT | NOT2;

export type Schema = SCHEMA | DATABASE;

export interface TextStringTuple1 extends MySyntaxNode {
    syntaxKind : "TextStringTuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (TextString)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export type TextString = StringLiteral | DoubleQuotedLiteral | HexLiteral | BitLiteral;

export type VarChar = VARCHAR | VARCHARACTER;

export interface BinLogStatement extends MySyntaxNode {
    syntaxKind : "BinLogStatement";
    fields : {
        binLogToken : (BINLOG);
        str : (StringLiteral | DoubleQuotedLiteral)
    };
}

export type CreateSchemaOption = DefaultCharacterSet | DefaultCollate;

export interface CreateSchemaOptionRepeat1 extends MySyntaxNode {
    syntaxKind : "CreateSchemaOptionRepeat1";
    fields : {
        item : (CreateSchemaOption)[]
    };
}

export interface CreateSchemaStatement extends MySyntaxNode {
    syntaxKind : "CreateSchemaStatement";
    fields : {
        createToken : (CREATE);
        schemaToken : (Schema);
        ifNotExists? : (IfNotExists);
        identifier : (Ident);
        createSchemaOptionRepeat1? : (CreateSchemaOptionRepeat1)
    };
}

export interface ColumnDefinitionOptionRepeat1 extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionRepeat1";
    fields : {
        item : (ColumnDefinitionOption)[]
    };
}

export interface ColumnDefinitionOption extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOption";
    fields : {
        
    };
}

export interface ColumnDefinitionOptionNull extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionNull";
    fields : {
        nullToken : (NULL)
    };
}

export interface ColumnDefinitionOptionNotNull extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionNotNull";
    fields : {
        notToken : (Not);
        nullToken : (NULL)
    };
}

export interface ColumnDefinitionOptionDefaultValue extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionDefaultValue";
    fields : {
        defaultToken : (DEFAULT);
        defaultValue : (Now | SignedLiteral)
    };
}

export interface ColumnDefinitionOptionOnUpdate extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionOnUpdate";
    fields : {
        onToken : (ON);
        updateToken : (UPDATE);
        now : (Now)
    };
}

export interface ColumnDefinitionOptionAutoIncrement extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionAutoIncrement";
    fields : {
        
    };
}

export interface ColumnDefinitionOptionSerialDefaultValue extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionSerialDefaultValue";
    fields : {
        
    };
}

export interface ColumnDefinitionOptionPrimaryKey extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionPrimaryKey";
    fields : {
        
    };
}

export interface ColumnDefinitionOptionUnique extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionUnique";
    fields : {
        
    };
}

export interface ColumnDefinitionOptionUniqueKey extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionUniqueKey";
    fields : {
        
    };
}

export interface ColumnDefinitionOptionComment extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionComment";
    fields : {
        
    };
}

export interface ColumnDefinitionOptionCollate extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionCollate";
    fields : {
        
    };
}

export interface ColumnDefinitionOptionColumnFormat extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionColumnFormat";
    fields : {
        
    };
}

export interface ColumnDefinitionOptionStorage extends MySyntaxNode {
    syntaxKind : "ColumnDefinitionOptionStorage";
    fields : {
        
    };
}

export interface CreateTableDefinitionTuple1 extends MySyntaxNode {
    syntaxKind : "CreateTableDefinitionTuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (CreateTableDefinition)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export type CreateTableDefinition = ColumnDefinition | IndexDefinition | CheckDefinition | PrimaryKeyDefinition | ForeignKeyDefinition;

export type ColumnDefinition = NonGeneratedColumnDefinition | GeneratedColumnDefinition;

export interface NonGeneratedColumnDefinition extends MySyntaxNode {
    syntaxKind : "NonGeneratedColumnDefinition";
    fields : {
        columnIdentifier : (ColumnIdentifier);
        dataType : (DataType | SERIAL);
        columnDefinitionOptionRepeat1? : (ColumnDefinitionOptionRepeat1)
    };
}

export interface GeneratedColumnDefinition extends MySyntaxNode {
    syntaxKind : "GeneratedColumnDefinition";
    fields : {
        columnIdentifier : (ColumnIdentifier);
        dataType : (DataType | SERIAL);
        collateExplicit? : (CollateExplicit);
        generatedAlways? : (GeneratedAlways);
        asToken : (AS);
        parenthesizedExpression : (ParenthesizedExpression);
        storedAttribute? : (VIRTUAL | STORED);
        columnDefinitionOptionRepeat1? : (ColumnDefinitionOptionRepeat1)
    };
}

export interface GeneratedAlways extends MySyntaxNode {
    syntaxKind : "GeneratedAlways";
    fields : {
        generatedToken : (GENERATED);
        alwaysToken : (ALWAYS)
    };
}

export interface IndexDefinition extends MySyntaxNode {
    syntaxKind : "IndexDefinition";
    fields : {
        
    };
}

export interface CheckDefinition extends MySyntaxNode {
    syntaxKind : "CheckDefinition";
    fields : {
        
    };
}

export interface PrimaryKeyDefinition extends MySyntaxNode {
    syntaxKind : "PrimaryKeyDefinition";
    fields : {
        
    };
}

export interface ForeignKeyDefinition extends MySyntaxNode {
    syntaxKind : "ForeignKeyDefinition";
    fields : {
        
    };
}

export interface CreateTableOptionSemiList1 extends MySyntaxNode {
    syntaxKind : "CreateTableOptionSemiList1";
    fields : {
        item : (CreateTableOption)[];
        commaToken : (Comma)[]
    };
}

export interface CreateTableOption extends MySyntaxNode {
    syntaxKind : "CreateTableOption";
    fields : {
        
    };
}

export interface CreateTableOptionEngine extends MySyntaxNode {
    syntaxKind : "CreateTableOptionEngine";
    fields : {
        engineToken : (ENGINE);
        equalToken? : (Equal);
        engine : (Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE | StringLiteral)
    };
}

export interface CreateTableOptionMaxRows extends MySyntaxNode {
    syntaxKind : "CreateTableOptionMaxRows";
    fields : {
        maxRowsToken : (MAX_ROWS);
        equalToken? : (Equal);
        maxRows : (IntegerLiteral | DecimalLiteral | RealLiteral)
    };
}

export interface CreateTableOptionMinRows extends MySyntaxNode {
    syntaxKind : "CreateTableOptionMinRows";
    fields : {
        minRowsToken : (MIN_ROWS);
        equalToken? : (Equal);
        minRows : (IntegerLiteral | DecimalLiteral | RealLiteral)
    };
}

export interface CreateTableOptionAverageRowLength extends MySyntaxNode {
    syntaxKind : "CreateTableOptionAverageRowLength";
    fields : {
        avgRowLengthToken : (AVG_ROW_LENGTH);
        equalToken? : (Equal);
        averageRowLength : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral)
    };
}

export interface CreateTableOptionPassword extends MySyntaxNode {
    syntaxKind : "CreateTableOptionPassword";
    fields : {
        passwordToken : (PASSWORD);
        equalToken? : (Equal);
        password : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface CreateTableOptionComment extends MySyntaxNode {
    syntaxKind : "CreateTableOptionComment";
    fields : {
        commentToken : (COMMENT);
        equalToken? : (Equal);
        comment : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface CreateTableOptionCompression extends MySyntaxNode {
    syntaxKind : "CreateTableOptionCompression";
    fields : {
        compressionToken : (COMPRESSION);
        equalToken? : (Equal);
        compression : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface CreateTableOptionEncryption extends MySyntaxNode {
    syntaxKind : "CreateTableOptionEncryption";
    fields : {
        encryptionToken : (ENCRYPTION);
        equalToken? : (Equal);
        encryption : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface CreateTableOptionAutoIncrement extends MySyntaxNode {
    syntaxKind : "CreateTableOptionAutoIncrement";
    fields : {
        autoIncrementToken : (AUTO_INCREMENT);
        equalToken? : (Equal);
        autoIncrement : (IntegerLiteral | DecimalLiteral | RealLiteral)
    };
}

export interface CreateTableOptionPackKeys extends MySyntaxNode {
    syntaxKind : "CreateTableOptionPackKeys";
    fields : {
        packKeysToken : (PACK_KEYS);
        equalToken? : (Equal);
        packKeys : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral | DEFAULT)
    };
}

export interface CreateTableOptionStatsAutoRecalc extends MySyntaxNode {
    syntaxKind : "CreateTableOptionStatsAutoRecalc";
    fields : {
        statsAutoRecalcToken : (STATS_AUTO_RECALC);
        equalToken? : (Equal);
        statsAutoRecalc : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral | DEFAULT)
    };
}

export interface CreateTableOptionStatsPersistent extends MySyntaxNode {
    syntaxKind : "CreateTableOptionStatsPersistent";
    fields : {
        statsPersistentToken : (STATS_PERSISTENT);
        equalToken? : (Equal);
        statsPersistent : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral | DEFAULT)
    };
}

export interface CreateTableOptionStatsSamplePages extends MySyntaxNode {
    syntaxKind : "CreateTableOptionStatsSamplePages";
    fields : {
        statsSamplePagesToken : (STATS_SAMPLE_PAGES);
        equalToken? : (Equal);
        statsSamplePages : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral | DEFAULT)
    };
}

export interface CreateTableOptionChecksum extends MySyntaxNode {
    syntaxKind : "CreateTableOptionChecksum";
    fields : {
        checksumToken : (CHECKSUM | TABLE_CHECKSUM);
        equalToken? : (Equal);
        checksum : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral)
    };
}

export interface CreateTableOptionDelayKeyWrite extends MySyntaxNode {
    syntaxKind : "CreateTableOptionDelayKeyWrite";
    fields : {
        delayKeyWriteToken : (DELAY_KEY_WRITE);
        equalToken? : (Equal);
        delayKeyWrite : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral)
    };
}

export interface CreateTableOptionRowFormat extends MySyntaxNode {
    syntaxKind : "CreateTableOptionRowFormat";
    fields : {
        rowFormatToken : (ROW_FORMAT);
        equalToken? : (Equal);
        rowFormat : (RowFormat)
    };
}

export interface RowFormat extends MySyntaxNode {
    syntaxKind : "RowFormat";
    fields : {
        
    };
}

export interface CreateTableOptionUnion extends MySyntaxNode {
    syntaxKind : "CreateTableOptionUnion";
    fields : {
        unionToken : (UNION);
        equalToken? : (Equal);
        union : (TableIdentifierTuple)
    };
}

export interface CreateTableOptionInsertMethod extends MySyntaxNode {
    syntaxKind : "CreateTableOptionInsertMethod";
    fields : {
        insertMethodToken : (INSERT_METHOD);
        equalToken? : (Equal);
        insertMethod : (InsertMethod)
    };
}

export interface InsertMethod extends MySyntaxNode {
    syntaxKind : "InsertMethod";
    fields : {
        
    };
}

export interface CreateTableOptionDataDirectory extends MySyntaxNode {
    syntaxKind : "CreateTableOptionDataDirectory";
    fields : {
        dataToken : (DATA);
        directoryToken : (DIRECTORY);
        equalToken? : (Equal);
        dataDirectory : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface CreateTableOptionIndexDirectory extends MySyntaxNode {
    syntaxKind : "CreateTableOptionIndexDirectory";
    fields : {
        indexToken : (INDEX);
        directoryToken : (DIRECTORY);
        equalToken? : (Equal);
        indexDirectory : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface CreateTableOptionTablespace extends MySyntaxNode {
    syntaxKind : "CreateTableOptionTablespace";
    fields : {
        tablespaceToken : (TABLESPACE);
        equalToken? : (Equal);
        tablespace : (Ident)
    };
}

export interface CreateTableOptionStorage extends MySyntaxNode {
    syntaxKind : "CreateTableOptionStorage";
    fields : {
        storageToken : (INSERT_METHOD);
        equalToken? : (Equal);
        storage : (Storage)
    };
}

export interface Storage extends MySyntaxNode {
    syntaxKind : "Storage";
    fields : {
        
    };
}

export interface CreateTableOptionConnection extends MySyntaxNode {
    syntaxKind : "CreateTableOptionConnection";
    fields : {
        connectionToken : (CONNECTION);
        equalToken? : (Equal);
        connection : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface CreateTableOptionKeyBlockSize extends MySyntaxNode {
    syntaxKind : "CreateTableOptionKeyBlockSize";
    fields : {
        keyBlockSizeToken : (KEY_BLOCK_SIZE);
        equalToken? : (Equal);
        keyBlockSize : (IntegerLiteral | HexLiteral | DecimalLiteral | RealLiteral)
    };
}

export interface CreateTableStatement extends MySyntaxNode {
    syntaxKind : "CreateTableStatement";
    fields : {
        createToken : (CREATE);
        temporaryToken? : (TEMPORARY);
        tableToken : (TABLE);
        ifNotExists? : (IfNotExists);
        tableIdentifier : (TableIdentifier);
        createTableDefinitionTuple1 : (CreateTableDefinitionTuple1);
        createTableOptionSemiList1? : (CreateTableOptionSemiList1);
        partition? : (Partition)
    };
}

export interface DelimiterStatement extends MySyntaxNode {
    syntaxKind : "DelimiterStatement";
    fields : {
        delimiterStart : (DelimiterSpace);
        customDelimiter : (CustomDelimiter)
    };
}

export interface DropTableStatement extends MySyntaxNode {
    syntaxKind : "DropTableStatement";
    fields : {
        dropToken : (DROP);
        temporaryToken? : (TEMPORARY);
        tableToken : (TABLE | TABLES);
        ifExists? : (IfExists);
        tableIdentifierList1 : (TableIdentifierList1);
        dropMode? : (DropMode)
    };
}

export interface HashPartition extends MySyntaxNode {
    syntaxKind : "HashPartition";
    fields : {
        partitionToken : (PARTITION);
        byToken : (BY);
        linearToken? : (LINEAR);
        hashToken : (HASH);
        parenthesizedBitExpression : (ParenthesizedBitExpression);
        partitionCount? : (PartitionCount)
    };
}

export interface HashSubPartition extends MySyntaxNode {
    syntaxKind : "HashSubPartition";
    fields : {
        subPartitionToken : (SUBPARTITION);
        byToken : (BY);
        linearToken? : (LINEAR);
        hashToken : (HASH);
        parenthesizedBitExpression : (ParenthesizedBitExpression);
        subPartitionCount? : (SubPartitionCount)
    };
}

export interface KeyAlgorithm extends MySyntaxNode {
    syntaxKind : "KeyAlgorithm";
    fields : {
        algorithmToken : (ALGORITHM);
        equalToken : (Equal);
        keyAlgorithm : (IntegerLiteral | HexLiteral)
    };
}

export interface KeyPartition extends MySyntaxNode {
    syntaxKind : "KeyPartition";
    fields : {
        partitionToken : (PARTITION);
        byToken : (BY);
        linearToken? : (LINEAR);
        keyToken : (KEY);
        keyAlgorithm? : (KeyAlgorithm);
        identTuple1 : (IdentTuple1);
        partitionCount? : (PartitionCount)
    };
}

export interface KeySubPartition extends MySyntaxNode {
    syntaxKind : "KeySubPartition";
    fields : {
        subPartitionToken : (SUBPARTITION);
        byToken : (BY);
        linearToken? : (LINEAR);
        keyToken : (KEY);
        keyAlgorithm? : (KeyAlgorithm);
        identTuple1 : (IdentTuple1);
        subPartitionCount? : (SubPartitionCount)
    };
}

export interface ListPartitionByColumnTuple2 extends MySyntaxNode {
    syntaxKind : "ListPartitionByColumnTuple2";
    fields : {
        partitionToken : (PARTITION);
        byToken : (BY);
        listToken : (LIST);
        columnsToken : (COLUMNS | FIELDS);
        identTuple2 : (IdentTuple2);
        partitionCount? : (PartitionCount);
        subPartition? : (SubPartition);
        listPartitionDefinitionTuple1 : (ListPartitionDefinitionTuple1)
    };
}

export interface ListPartitionByColumn extends MySyntaxNode {
    syntaxKind : "ListPartitionByColumn";
    fields : {
        partitionToken : (PARTITION);
        byToken : (BY);
        listToken : (LIST);
        columnsToken : (COLUMNS | FIELDS);
        parenthesizedIdent : (ParenthesizedIdent);
        partitionCount? : (PartitionCount);
        subPartition? : (SubPartition);
        listPartitionDefinitionTuple1 : (ListPartitionDefinitionTuple1)
    };
}

export interface ListPartitionByExpression extends MySyntaxNode {
    syntaxKind : "ListPartitionByExpression";
    fields : {
        partitionToken : (PARTITION);
        byToken : (BY);
        listToken : (LIST);
        parenthesizedBitExpression : (ParenthesizedBitExpression);
        partitionCount? : (PartitionCount);
        subPartition? : (SubPartition);
        listPartitionDefinitionTuple1 : (ListPartitionDefinitionTuple1)
    };
}

export type ListPartitionDefinitionTuple1 = SingletonListPartitionDefinitionTuple1 | MultitonListPartitionDefinitionTuple1;

export type ListPartition = ListPartitionByExpression | ListPartitionByColumn | ListPartitionByColumnTuple2;

export interface MultitonListPartitionDefinition extends MySyntaxNode {
    syntaxKind : "MultitonListPartitionDefinition";
    fields : {
        partition : (PARTITION);
        partitionName : (Ident);
        valuesToken : (VALUES);
        inToken : (IN);
        bitExpressionTuple1Tuple1 : (BitExpressionTuple1Tuple1);
        partitionDefinitionOptionRepeat1? : (PartitionDefinitionOptionRepeat1);
        subPartitionDefinitionTuple1? : (SubPartitionDefinitionTuple1)
    };
}

export interface MultitonListPartitionDefinitionTuple1 extends MySyntaxNode {
    syntaxKind : "MultitonListPartitionDefinitionTuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (MultitonListPartitionDefinition)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface PartitionCount extends MySyntaxNode {
    syntaxKind : "PartitionCount";
    fields : {
        partitionsToken : (PARTITIONS);
        partitionCount : (IntegerLiteral | HexLiteral)
    };
}

export type PartitionDefinitionOption = PartitionDefinitionOptionEngine | PartitionDefinitionOptionMaxRows | PartitionDefinitionOptionMinRows | PartitionDefinitionOptionComment | PartitionDefinitionOptionDataDirectory | PartitionDefinitionOptionIndexDirectory | PartitionDefinitionOptionTablespace | PartitionDefinitionOptionNodeGroup;

export interface PartitionDefinitionOptionEngine extends MySyntaxNode {
    syntaxKind : "PartitionDefinitionOptionEngine";
    fields : {
        storageToken? : (STORAGE);
        engineToken : (ENGINE);
        equalToken? : (Equal);
        engine : (Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE | StringLiteral)
    };
}

export interface PartitionDefinitionOptionMaxRows extends MySyntaxNode {
    syntaxKind : "PartitionDefinitionOptionMaxRows";
    fields : {
        maxRowsToken : (MAX_ROWS);
        equalToken? : (Equal);
        maxRows : (IntegerLiteral)
    };
}

export interface PartitionDefinitionOptionMinRows extends MySyntaxNode {
    syntaxKind : "PartitionDefinitionOptionMinRows";
    fields : {
        minRowsToken : (MIN_ROWS);
        equalToken? : (Equal);
        minRows : (IntegerLiteral)
    };
}

export interface PartitionDefinitionOptionComment extends MySyntaxNode {
    syntaxKind : "PartitionDefinitionOptionComment";
    fields : {
        commentToken : (COMMENT);
        equalToken? : (Equal);
        comment : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface PartitionDefinitionOptionDataDirectory extends MySyntaxNode {
    syntaxKind : "PartitionDefinitionOptionDataDirectory";
    fields : {
        dataToken : (DATA);
        directoryToken : (DIRECTORY);
        equalToken? : (Equal);
        dataDirectory : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface PartitionDefinitionOptionIndexDirectory extends MySyntaxNode {
    syntaxKind : "PartitionDefinitionOptionIndexDirectory";
    fields : {
        indexToken : (INDEX);
        directoryToken : (DIRECTORY);
        equalToken? : (Equal);
        indexDirectory : (StringLiteral | DoubleQuotedLiteral)
    };
}

export interface PartitionDefinitionOptionTablespace extends MySyntaxNode {
    syntaxKind : "PartitionDefinitionOptionTablespace";
    fields : {
        tablespaceToken : (TABLESPACE);
        equalToken? : (Equal);
        tablespace : (Ident)
    };
}

export interface PartitionDefinitionOptionNodeGroup extends MySyntaxNode {
    syntaxKind : "PartitionDefinitionOptionNodeGroup";
    fields : {
        nodeGroupToken : (NODEGROUP);
        equalToken? : (Equal);
        nodeGroup : (IntegerLiteral | HexLiteral)
    };
}

export interface PartitionDefinitionOptionRepeat1 extends MySyntaxNode {
    syntaxKind : "PartitionDefinitionOptionRepeat1";
    fields : {
        item : (PartitionDefinitionOption)[]
    };
}

export type Partition = HashPartition | KeyPartition | ListPartition | RangePartition;

export interface RangePartition extends MySyntaxNode {
    syntaxKind : "RangePartition";
    fields : {
        partitionToken : (PARTITION);
        byToken : (BY);
        rangeToken : (RANGE);
        parenthesizedBitExpression : (ParenthesizedBitExpression);
        partitionCount? : (PartitionCount);
        subPartition? : (SubPartition);
        singletonRangePartitionDefinitionTuple1 : (SingletonRangePartitionDefinitionTuple1)
    };
}

export interface SingletonListPartitionDefinition extends MySyntaxNode {
    syntaxKind : "SingletonListPartitionDefinition";
    fields : {
        partitionToken : (PARTITION);
        partitionName : (Ident);
        valuesToken : (VALUES);
        inToken : (IN);
        bitExpressionTuple1 : (BitExpressionTuple1);
        partitionDefinitionOptionRepeat1? : (PartitionDefinitionOptionRepeat1);
        subPartitionDefinitionTuple1? : (SubPartitionDefinitionTuple1)
    };
}

export interface SingletonListPartitionDefinitionTuple1 extends MySyntaxNode {
    syntaxKind : "SingletonListPartitionDefinitionTuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (SingletonListPartitionDefinition)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface ParenthesizedMaxValue extends MySyntaxNode {
    syntaxKind : "ParenthesizedMaxValue";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (BitExpression | MAXVALUE);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface SingletonRangePartitionDefinition extends MySyntaxNode {
    syntaxKind : "SingletonRangePartitionDefinition";
    fields : {
        partitionToken : (PARTITION);
        partitionName : (Ident);
        valuesToken : (VALUES);
        lessToken : (LESS);
        thanToken : (THAN);
        maxValue : (ParenthesizedMaxValue | MAXVALUE);
        partitionDefinitionOptionRepeat1? : (PartitionDefinitionOptionRepeat1);
        subPartitionDefinitionTuple1? : (SubPartitionDefinitionTuple1)
    };
}

export interface SingletonRangePartitionDefinitionTuple1 extends MySyntaxNode {
    syntaxKind : "SingletonRangePartitionDefinitionTuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (SingletonRangePartitionDefinition)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export interface SubPartitionCount extends MySyntaxNode {
    syntaxKind : "SubPartitionCount";
    fields : {
        subPartitionsToken : (SUBPARTITIONS);
        partitionCount : (IntegerLiteral | HexLiteral)
    };
}

export interface SubPartitionDefinition extends MySyntaxNode {
    syntaxKind : "SubPartitionDefinition";
    fields : {
        subPartitionToken : (SUBPARTITION);
        subPartitionName : (Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE | StringLiteral);
        partitionDefinitionOptionRepeat1? : (PartitionDefinitionOptionRepeat1)
    };
}

export interface SubPartitionDefinitionTuple1 extends MySyntaxNode {
    syntaxKind : "SubPartitionDefinitionTuple1";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (SubPartitionDefinition)[];
        closeParenthesesToken : (CloseParentheses);
        commaToken : (Comma)[]
    };
}

export type SubPartition = HashSubPartition | KeySubPartition;

export interface Alias extends MySyntaxNode {
    syntaxKind : "Alias";
    fields : {
        asToken? : (AS);
        alias : (Identifier | DoubleQuotedLiteral | ACTION | ADDDATE | AFTER | AGAINST | AGGREGATE | ALGORITHM | ANALYSE | ANY | AT | AUTO_INCREMENT | AUTOEXTEND_SIZE | AVG_ROW_LENGTH | AVG | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CIPHER | CLIENT | CLASS_ORIGIN | COALESCE | CODE | COLLATION | COLUMN_NAME | COLUMN_FORMAT | COLUMNS | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | ENCRYPTION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATETIME | DATE | DAY | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DUMPFILE | DUPLICATE | DYNAMIC | ENDS | ENUM | ENGINE | ENGINES | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAULTS | FAST | FOUND | ENABLE | FULL | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GRANTS | GLOBAL | HASH | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | INVOKER | IMPORT | INDEXES | INITIAL_SIZE | INSTANCE | IO | IPC | ISOLATION | ISSUER | INSERT_METHOD | JSON | KEY_BLOCK_SIZE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MAX_ROWS | MASTER | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_PORT | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_USER | MASTER_PASSWORD | MASTER_SERVER_ID | MASTER_CONNECT_RETRY | MASTER_RETRY_COUNT | MASTER_DELAY | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_TLS_VERSION | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_AUTO_POSITION | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_SIZE | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODIFY | MODE | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDBCLUSTER | NEVER | NEXT | NEW | NO_WAIT | NODEGROUP | NONE | NUMBER | NVARCHAR | OFFSET | ONE | ONLY | PACK_KEYS | PAGE | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN_DIR | PLUGIN | PLUGINS | POINT | POLYGON | PRESERVE | PREV | PRIVILEGES | PROCESS | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDO_BUFFER_SIZE | REDOFILE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REORGANIZE | REPEATABLE | REPLICATION | REPLICATE_DO_DB | REPLICATE_IGNORE_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_TABLE | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATE_REWRITE_DB | USER_RESOURCES | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLUP | ROTATE | ROUTINE | ROWS | ROW_COUNT | ROW_FORMAT | ROW | RTREE | SCHEDULE | SCHEMA_NAME | SECOND | SERIAL | SERIALIZABLE | SESSION | SIMPLE | SHARE | SLOW | SNAPSHOT | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_CACHE | SQL_BUFFER_RESULT | SQL_NO_CACHE | SQL_THREAD | STACKED | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STORAGE | STRING | SUBCLASS_ORIGIN | SUBDATE | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLE_NAME | TABLES | TABLE_CHECKSUM | TABLESPACE | TEMPORARY | TEMPTABLE | TEXT | THAN | TRANSACTION | TRIGGERS | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TIME | TYPES | TYPE | FUNCTION | UNCOMMITTED | UNDEFINED | UNDO_BUFFER_SIZE | UNDOFILE | UNKNOWN | UNTIL | USER | USE_FRM | VALIDATION | VARIABLES | VIEW | VALUE | WARNINGS | WAIT | WEEK | WITHOUT | WORK | WEIGHT_STRING | X509 | XID | XML | YEAR | SOME | FIELDS | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | NDB | SQL_TSI_QUARTER | IO_THREAD | SQL_TSI_SECOND | SESSION_USER | SYSTEM_USER | SQL_TSI_WEEK | SQL_TSI_YEAR | MAX_STATEMENT_TIME | NONBLOCKING | OLD_PASSWORD | ACCOUNT | ASCII | ALWAYS | BACKUP | BEGIN | BYTE | CACHE | CHARSET | CHECKSUM | CLOSE | COMMENT | COMMIT | CONTAINS | DEALLOCATE | DO | END | EXECUTE | FLUSH | FOLLOWS | FORMAT | GROUP_REPLICATION | HANDLER | HELP | HOST | INSTALL | LANGUAGE | NO | OPEN | OPTIONS | OWNER | PARSER | PARSE_GCOL_EXPR | PORT | PRECEDES | PREPARE | REMOVE | REPAIR | RESET | RESTORE | ROLLBACK | SAVEPOINT | SECURITY | SERVER | SHUTDOWN | SIGNED | SOCKET | SLAVE | SONAME | START | STOP | TRUNCATE | UNICODE | UNINSTALL | WRAPPER | XA | UPGRADE | StringLiteral)
    };
}

export interface ExpressionSelectItem extends MySyntaxNode {
    syntaxKind : "ExpressionSelectItem";
    fields : {
        expression : (Expression);
        alias? : (Alias)
    };
}

export interface SelectItemList1 extends MySyntaxNode {
    syntaxKind : "SelectItemList1";
    fields : {
        item : (ExpressionSelectItem)[];
        commaToken : (Comma)[]
    };
}

export interface Select extends MySyntaxNode {
    syntaxKind : "Select";
    fields : {
        selectToken : (SELECT);
        selectItemList1 : (SelectItemList1)
    };
}

export type SelectStatement = Select;

export interface ParenthesizedSelect extends MySyntaxNode {
    syntaxKind : "ParenthesizedSelect";
    fields : {
        openParenthesesToken : (OpenParentheses);
        item : (Select | ParenthesizedSelect);
        closeParenthesesToken : (CloseParentheses)
    };
}

export interface LeadingStatement extends MySyntaxNode {
    syntaxKind : "LeadingStatement";
    fields : {
        statement? : (Statement);
        semiColonToken? : (SemiColon);
        customDelimiter? : (CustomDelimiter)
    };
}

export interface SourceFile extends MySyntaxNode {
    syntaxKind : "SourceFile";
    fields : {
        statement : (LeadingStatement | DelimiterStatement | TrailingStatement)[]
    };
}

export type Statement = BinLogStatement | CreateSchemaStatement | CreateTableStatement | DropTableStatement | SelectStatement;

export interface TrailingStatement extends MySyntaxNode {
    syntaxKind : "TrailingStatement";
    fields : {
        statement? : (Statement);
        semiColonToken? : (SemiColon);
        customDelimiter? : (CustomDelimiter)
    };
}
