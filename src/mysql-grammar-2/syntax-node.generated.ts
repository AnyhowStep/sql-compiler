import {MyToken, MySyntaxNode} from "../grammar-runtime";
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
export interface HexLiteral extends MyToken<"HexLiteral"> {}
export interface BitLiteral extends MyToken<"BitLiteral"> {}
export interface IntegerLiteral extends MyToken<"IntegerLiteral"> {}
export interface DecimalLiteral extends MyToken<"DecimalLiteral"> {}
export interface RealLiteral extends MyToken<"RealLiteral"> {}
export interface Identifier extends MyToken<"Identifier"> {}
export interface UserVariableIdentifier extends MyToken<"UserVariableIdentifier"> {}
export interface MacroIdentifier extends MyToken<"MacroIdentifier"> {}
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
export interface AtAt extends MyToken<"AtAt"> {}
export interface AtAtGlobalDot extends MyToken<"AtAtGlobalDot"> {}
export interface AtAtSessionDot extends MyToken<"AtAtSessionDot"> {}
export interface Tilde extends MyToken<"Tilde"> {}
export interface Caret extends MyToken<"Caret"> {}
export interface Bar extends MyToken<"Bar"> {}
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
export interface SourceFile extends MySyntaxNode {
    syntaxKind : "SourceFile";
    fields : {
        statement : (LeadingStatement | DelimiterStatement | TrailingStatement)[]
    };
}

export type Statement = BinLogStatement | CreateSchemaStatement;

export interface BinLogStatement extends MySyntaxNode {
    syntaxKind : "BinLogStatement";
    fields : {
        binLogToken : (BINLOG);
        str : (StringLiteral)
    };
}

export interface CreateSchemaStatement extends MySyntaxNode {
    syntaxKind : "CreateSchemaStatement";
    fields : {
        createToken : (CREATE);
        schemaToken : (Schema);
        ifNotExists? : (IfNotExists);
        identifier : (Ident);
        createSchemaOptionList? : (CreateSchemaOptionList)
    };
}

export interface CreateSchemaOptionList extends MySyntaxNode {
    syntaxKind : "CreateSchemaOptionList";
    fields : {
        item : (DefaultCharacterSet | DefaultCollate)[]
    };
}

export interface DefaultCharacterSet extends MySyntaxNode {
    syntaxKind : "DefaultCharacterSet";
    fields : {
        defaultToken? : (DEFAULT);
        equalToken? : (Equal);
        characterSetName : (CharacterSetNameOrDefault);
        characterSetToken : (CHARACTER | SET | CHARSET)[]
    };
}

export interface DefaultCollate extends MySyntaxNode {
    syntaxKind : "DefaultCollate";
    fields : {
        defaultToken? : (DEFAULT);
        collateToken : (COLLATE);
        equalToken? : (Equal);
        collationName : (CollationNameOrDefault)
    };
}

export type CharacterSetNameOrDefault = DEFAULT | Identifier | ACCOUNT | ACTION | AFTER | AGAINST | AGGREGATE | ALGORITHM | ALWAYS | ANALYSE | ANY | ASCII | AT | AUTOEXTEND_SIZE | AUTO_INCREMENT | AVG | AVG_ROW_LENGTH | BACKUP | BEGIN | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | BYTE | CACHE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CHARSET | CHECKSUM | CIPHER | CLASS_ORIGIN | CLIENT | CLOSE | COALESCE | CODE | COLLATION | COLUMNS | COLUMN_FORMAT | COLUMN_NAME | COMMENT | COMMIT | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_NAME | CONSTRAINT_SCHEMA | CONTAINS | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATE | DATETIME | DAY | DEALLOCATE | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DO | DUMPFILE | DUPLICATE | DYNAMIC | ENABLE | ENCRYPTION | END | ENDS | ENGINE | ENGINES | ENUM | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXECUTE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAST | FAULTS | FIELDS | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | FLUSH | FOLLOWS | FORMAT | FOUND | FULL | FUNCTION | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GLOBAL | GRANTS | GROUP_REPLICATION | HANDLER | HASH | HELP | HOST | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | IMPORT | INDEXES | INITIAL_SIZE | INSERT_METHOD | INSTALL | INSTANCE | INVOKER | IO | IO_THREAD | IPC | ISOLATION | ISSUER | JSON | KEY_BLOCK_SIZE | LANGUAGE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MASTER | MASTER_AUTO_POSITION | MASTER_CONNECT_RETRY | MASTER_DELAY | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_PASSWORD | MASTER_PORT | MASTER_RETRY_COUNT | MASTER_SERVER_ID | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_TLS_VERSION | MASTER_USER | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_ROWS | MAX_SIZE | MAX_STATEMENT_TIME | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODE | MODIFY | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDB | NDBCLUSTER | NEVER | NEW | NEXT | NO | NODEGROUP | NONBLOCKING | NONE | NO_WAIT | NUMBER | NVARCHAR | OFFSET | OLD_PASSWORD | ONE | ONLY | OPEN | OPTIONS | OWNER | PACK_KEYS | PAGE | PARSER | PARSE_GCOL_EXPR | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN | PLUGINS | PLUGIN_DIR | POINT | POLYGON | PORT | PRECEDES | PREPARE | PRESERVE | PREV | PRIVILEGES | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDOFILE | REDO_BUFFER_SIZE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REMOVE | REORGANIZE | REPAIR | REPEATABLE | REPLICATE_DO_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_DB | REPLICATE_IGNORE_TABLE | REPLICATE_REWRITE_DB | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATION | RESET | RESTORE | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLBACK | ROLLUP | ROTATE | ROUTINE | ROW | ROWS | ROW_COUNT | ROW_FORMAT | RTREE | SAVEPOINT | SCHEDULE | SCHEMA_NAME | SECOND | SECURITY | SERIAL | SERIALIZABLE | SERVER | SESSION | SHARE | SHUTDOWN | SIGNED | SIMPLE | SLAVE | SLOW | SNAPSHOT | SOCKET | SOME | SONAME | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_BUFFER_RESULT | SQL_CACHE | SQL_NO_CACHE | SQL_THREAD | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | SQL_TSI_QUARTER | SQL_TSI_SECOND | SQL_TSI_WEEK | SQL_TSI_YEAR | STACKED | START | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STOP | STORAGE | STRING | SUBCLASS_ORIGIN | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLES | TABLESPACE | TABLE_CHECKSUM | TABLE_NAME | TEMPORARY | TEMPTABLE | TEXT | THAN | TIME | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TRANSACTION | TRIGGERS | TRUNCATE | TYPE | TYPES | UNCOMMITTED | UNDEFINED | UNDOFILE | UNDO_BUFFER_SIZE | UNICODE | UNINSTALL | UNKNOWN | UNTIL | UPGRADE | USER | USER_RESOURCES | USE_FRM | VALIDATION | VALUE | VARIABLES | VIEW | WAIT | WARNINGS | WEEK | WEIGHT_STRING | WITHOUT | WORK | WRAPPER | X509 | XA | XID | XML | YEAR | BINARY | StringLiteral;

export type CollationNameOrDefault = DEFAULT | Identifier | ACCOUNT | ACTION | AFTER | AGAINST | AGGREGATE | ALGORITHM | ALWAYS | ANALYSE | ANY | ASCII | AT | AUTOEXTEND_SIZE | AUTO_INCREMENT | AVG | AVG_ROW_LENGTH | BACKUP | BEGIN | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | BYTE | CACHE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CHARSET | CHECKSUM | CIPHER | CLASS_ORIGIN | CLIENT | CLOSE | COALESCE | CODE | COLLATION | COLUMNS | COLUMN_FORMAT | COLUMN_NAME | COMMENT | COMMIT | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_NAME | CONSTRAINT_SCHEMA | CONTAINS | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATE | DATETIME | DAY | DEALLOCATE | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DO | DUMPFILE | DUPLICATE | DYNAMIC | ENABLE | ENCRYPTION | END | ENDS | ENGINE | ENGINES | ENUM | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXECUTE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAST | FAULTS | FIELDS | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | FLUSH | FOLLOWS | FORMAT | FOUND | FULL | FUNCTION | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GLOBAL | GRANTS | GROUP_REPLICATION | HANDLER | HASH | HELP | HOST | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | IMPORT | INDEXES | INITIAL_SIZE | INSERT_METHOD | INSTALL | INSTANCE | INVOKER | IO | IO_THREAD | IPC | ISOLATION | ISSUER | JSON | KEY_BLOCK_SIZE | LANGUAGE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MASTER | MASTER_AUTO_POSITION | MASTER_CONNECT_RETRY | MASTER_DELAY | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_PASSWORD | MASTER_PORT | MASTER_RETRY_COUNT | MASTER_SERVER_ID | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_TLS_VERSION | MASTER_USER | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_ROWS | MAX_SIZE | MAX_STATEMENT_TIME | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODE | MODIFY | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDB | NDBCLUSTER | NEVER | NEW | NEXT | NO | NODEGROUP | NONBLOCKING | NONE | NO_WAIT | NUMBER | NVARCHAR | OFFSET | OLD_PASSWORD | ONE | ONLY | OPEN | OPTIONS | OWNER | PACK_KEYS | PAGE | PARSER | PARSE_GCOL_EXPR | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN | PLUGINS | PLUGIN_DIR | POINT | POLYGON | PORT | PRECEDES | PREPARE | PRESERVE | PREV | PRIVILEGES | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDOFILE | REDO_BUFFER_SIZE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REMOVE | REORGANIZE | REPAIR | REPEATABLE | REPLICATE_DO_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_DB | REPLICATE_IGNORE_TABLE | REPLICATE_REWRITE_DB | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATION | RESET | RESTORE | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLBACK | ROLLUP | ROTATE | ROUTINE | ROW | ROWS | ROW_COUNT | ROW_FORMAT | RTREE | SAVEPOINT | SCHEDULE | SCHEMA_NAME | SECOND | SECURITY | SERIAL | SERIALIZABLE | SERVER | SESSION | SHARE | SHUTDOWN | SIGNED | SIMPLE | SLAVE | SLOW | SNAPSHOT | SOCKET | SOME | SONAME | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_BUFFER_RESULT | SQL_CACHE | SQL_NO_CACHE | SQL_THREAD | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | SQL_TSI_QUARTER | SQL_TSI_SECOND | SQL_TSI_WEEK | SQL_TSI_YEAR | STACKED | START | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STOP | STORAGE | STRING | SUBCLASS_ORIGIN | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLES | TABLESPACE | TABLE_CHECKSUM | TABLE_NAME | TEMPORARY | TEMPTABLE | TEXT | THAN | TIME | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TRANSACTION | TRIGGERS | TRUNCATE | TYPE | TYPES | UNCOMMITTED | UNDEFINED | UNDOFILE | UNDO_BUFFER_SIZE | UNICODE | UNINSTALL | UNKNOWN | UNTIL | UPGRADE | USER | USER_RESOURCES | USE_FRM | VALIDATION | VALUE | VARIABLES | VIEW | WAIT | WARNINGS | WEEK | WEIGHT_STRING | WITHOUT | WORK | WRAPPER | X509 | XA | XID | XML | YEAR | StringLiteral;

export type Schema = SCHEMA | DATABASE;

export interface IfNotExists extends MySyntaxNode {
    syntaxKind : "IfNotExists";
    fields : {
        ifToken : (IF);
        notToken : (NOT);
        existsToken : (EXISTS)
    };
}

export interface LeadingStatement extends MySyntaxNode {
    syntaxKind : "LeadingStatement";
    fields : {
        statement : (Statement);
        semiColonToken? : (SemiColon);
        customDelimiter? : (CustomDelimiter)
    };
}

export interface TrailingStatement extends MySyntaxNode {
    syntaxKind : "TrailingStatement";
    fields : {
        statement : (Statement);
        semiColonToken? : (SemiColon);
        customDelimiter? : (CustomDelimiter)
    };
}

export interface DelimiterStatement extends MySyntaxNode {
    syntaxKind : "DelimiterStatement";
    fields : {
        delimiterStart : (DelimiterSpace);
        customDelimiter : (CustomDelimiter)
    };
}

export type Ident = Identifier | ACCOUNT | ACTION | AFTER | AGAINST | AGGREGATE | ALGORITHM | ALWAYS | ANALYSE | ANY | ASCII | AT | AUTOEXTEND_SIZE | AUTO_INCREMENT | AVG | AVG_ROW_LENGTH | BACKUP | BEGIN | BINLOG | BIT | BLOCK | BOOL | BOOLEAN | BTREE | BYTE | CACHE | CASCADED | CATALOG_NAME | CHAIN | CHANGED | CHANNEL | CHARSET | CHECKSUM | CIPHER | CLASS_ORIGIN | CLIENT | CLOSE | COALESCE | CODE | COLLATION | COLUMNS | COLUMN_FORMAT | COLUMN_NAME | COMMENT | COMMIT | COMMITTED | COMPACT | COMPLETION | COMPRESSED | COMPRESSION | CONCURRENT | CONNECTION | CONSISTENT | CONSTRAINT_CATALOG | CONSTRAINT_NAME | CONSTRAINT_SCHEMA | CONTAINS | CONTEXT | CPU | CUBE | CURRENT | CURSOR_NAME | DATA | DATAFILE | DATE | DATETIME | DAY | DEALLOCATE | DEFAULT_AUTH | DEFINER | DELAY_KEY_WRITE | DES_KEY_FILE | DIAGNOSTICS | DIRECTORY | DISABLE | DISCARD | DISK | DO | DUMPFILE | DUPLICATE | DYNAMIC | ENABLE | ENCRYPTION | END | ENDS | ENGINE | ENGINES | ENUM | ERROR | ERRORS | ESCAPE | EVENT | EVENTS | EVERY | EXCHANGE | EXECUTE | EXPANSION | EXPIRE | EXPORT | EXTENDED | EXTENT_SIZE | FAST | FAULTS | FIELDS | FILE | FILE_BLOCK_SIZE | FILTER | FIRST | FIXED | FLUSH | FOLLOWS | FORMAT | FOUND | FULL | FUNCTION | GENERAL | GEOMETRY | GEOMETRYCOLLECTION | GET_FORMAT | GLOBAL | GRANTS | GROUP_REPLICATION | HANDLER | HASH | HELP | HOST | HOSTS | HOUR | IDENTIFIED | IGNORE_SERVER_IDS | IMPORT | INDEXES | INITIAL_SIZE | INSERT_METHOD | INSTALL | INSTANCE | INVOKER | IO | IO_THREAD | IPC | ISOLATION | ISSUER | JSON | KEY_BLOCK_SIZE | LANGUAGE | LAST | LEAVES | LESS | LEVEL | LINESTRING | LIST | LOCAL | LOCKS | LOGFILE | LOGS | MASTER | MASTER_AUTO_POSITION | MASTER_CONNECT_RETRY | MASTER_DELAY | MASTER_HEARTBEAT_PERIOD | MASTER_HOST | MASTER_LOG_FILE | MASTER_LOG_POS | MASTER_PASSWORD | MASTER_PORT | MASTER_RETRY_COUNT | MASTER_SERVER_ID | MASTER_SSL | MASTER_SSL_CA | MASTER_SSL_CAPATH | MASTER_SSL_CERT | MASTER_SSL_CIPHER | MASTER_SSL_CRL | MASTER_SSL_CRLPATH | MASTER_SSL_KEY | MASTER_TLS_VERSION | MASTER_USER | MAX_CONNECTIONS_PER_HOUR | MAX_QUERIES_PER_HOUR | MAX_ROWS | MAX_SIZE | MAX_STATEMENT_TIME | MAX_UPDATES_PER_HOUR | MAX_USER_CONNECTIONS | MEDIUM | MEMORY | MERGE | MESSAGE_TEXT | MICROSECOND | MIGRATE | MINUTE | MIN_ROWS | MODE | MODIFY | MONTH | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | MUTEX | MYSQL_ERRNO | NAME | NAMES | NATIONAL | NCHAR | NDB | NDBCLUSTER | NEVER | NEW | NEXT | NO | NODEGROUP | NONBLOCKING | NONE | NO_WAIT | NUMBER | NVARCHAR | OFFSET | OLD_PASSWORD | ONE | ONLY | OPEN | OPTIONS | OWNER | PACK_KEYS | PAGE | PARSER | PARSE_GCOL_EXPR | PARTIAL | PARTITIONING | PARTITIONS | PASSWORD | PHASE | PLUGIN | PLUGINS | PLUGIN_DIR | POINT | POLYGON | PORT | PRECEDES | PREPARE | PRESERVE | PREV | PRIVILEGES | PROCESSLIST | PROFILE | PROFILES | PROXY | QUARTER | QUERY | QUICK | READ_ONLY | REBUILD | RECOVER | REDOFILE | REDO_BUFFER_SIZE | REDUNDANT | RELAY | RELAYLOG | RELAY_LOG_FILE | RELAY_LOG_POS | RELAY_THREAD | RELOAD | REMOVE | REORGANIZE | REPAIR | REPEATABLE | REPLICATE_DO_DB | REPLICATE_DO_TABLE | REPLICATE_IGNORE_DB | REPLICATE_IGNORE_TABLE | REPLICATE_REWRITE_DB | REPLICATE_WILD_DO_TABLE | REPLICATE_WILD_IGNORE_TABLE | REPLICATION | RESET | RESTORE | RESUME | RETURNED_SQLSTATE | RETURNS | REVERSE | ROLLBACK | ROLLUP | ROTATE | ROUTINE | ROW | ROWS | ROW_COUNT | ROW_FORMAT | RTREE | SAVEPOINT | SCHEDULE | SCHEMA_NAME | SECOND | SECURITY | SERIAL | SERIALIZABLE | SERVER | SESSION | SHARE | SHUTDOWN | SIGNED | SIMPLE | SLAVE | SLOW | SNAPSHOT | SOCKET | SOME | SONAME | SOUNDS | SOURCE | SQL_AFTER_GTIDS | SQL_AFTER_MTS_GAPS | SQL_BEFORE_GTIDS | SQL_BUFFER_RESULT | SQL_CACHE | SQL_NO_CACHE | SQL_THREAD | SQL_TSI_DAY | SQL_TSI_HOUR | SQL_TSI_MINUTE | SQL_TSI_MONTH | SQL_TSI_QUARTER | SQL_TSI_SECOND | SQL_TSI_WEEK | SQL_TSI_YEAR | STACKED | START | STARTS | STATS_AUTO_RECALC | STATS_PERSISTENT | STATS_SAMPLE_PAGES | STATUS | STOP | STORAGE | STRING | SUBCLASS_ORIGIN | SUBJECT | SUBPARTITION | SUBPARTITIONS | SUPER | SUSPEND | SWAPS | SWITCHES | TABLES | TABLESPACE | TABLE_CHECKSUM | TABLE_NAME | TEMPORARY | TEMPTABLE | TEXT | THAN | TIME | TIMESTAMP | TIMESTAMPADD | TIMESTAMPDIFF | TRANSACTION | TRIGGERS | TRUNCATE | TYPE | TYPES | UNCOMMITTED | UNDEFINED | UNDOFILE | UNDO_BUFFER_SIZE | UNICODE | UNINSTALL | UNKNOWN | UNTIL | UPGRADE | USER | USER_RESOURCES | USE_FRM | VALIDATION | VALUE | VARIABLES | VIEW | WAIT | WARNINGS | WEEK | WEIGHT_STRING | WITHOUT | WORK | WRAPPER | X509 | XA | XID | XML | YEAR;
