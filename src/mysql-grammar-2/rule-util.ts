/**
 * + Repeat   = repeated elements, no separator
 * + SemiList = repeated elements, optionally comma-separated
 * + List     = repeated elements, comma-separated
 * + Tuple    = parenthesized list
 */

import {cannotExpect, choice, disallowedSyntaxKinds, field, getTokenKinds, greedySkipExpectation, optional, repeat, repeat1, Rule, seq, skipExpectationAfterExtraCost, skipExpectationCost, tokenSymbol, tokenSymbol2, useCustomExtra} from "../grammar-builder";
import {CustomExtras} from "./custom-extras";
import {SyntaxKind} from "./syntax-kind.generated";
import {reservedKeywords, TokenKind} from "./token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13394
 */
export const keywordSp = tokenSymbol(
    TokenKind.ACTION,
    TokenKind.ADDDATE,
    TokenKind.AFTER,
    TokenKind.AGAINST,
    TokenKind.AGGREGATE,
    TokenKind.ALGORITHM,
    TokenKind.ANALYSE,
    TokenKind.ANY,
    TokenKind.AT,
    //TokenKind.AUTO_INC,
    TokenKind.AUTO_INCREMENT,
    TokenKind.AUTOEXTEND_SIZE,
    TokenKind.AVG_ROW_LENGTH,
    TokenKind.AVG,
    TokenKind.BINLOG,
    TokenKind.BIT,
    TokenKind.BLOCK,
    TokenKind.BOOL,
    TokenKind.BOOLEAN,
    TokenKind.BTREE,
    TokenKind.CASCADED,
    TokenKind.CATALOG_NAME,
    TokenKind.CHAIN,
    TokenKind.CHANGED,
    TokenKind.CHANNEL,
    TokenKind.CIPHER,
    TokenKind.CLIENT,
    TokenKind.CLASS_ORIGIN,
    TokenKind.COALESCE,
    TokenKind.CODE,
    TokenKind.COLLATION,
    TokenKind.COLUMN_NAME,
    TokenKind.COLUMN_FORMAT,
    TokenKind.COLUMNS,
    TokenKind.COMMITTED,
    TokenKind.COMPACT,
    TokenKind.COMPLETION,
    TokenKind.COMPRESSED,
    TokenKind.COMPRESSION,
    TokenKind.ENCRYPTION,
    TokenKind.CONCURRENT,
    TokenKind.CONNECTION,
    TokenKind.CONSISTENT,
    TokenKind.CONSTRAINT_CATALOG,
    TokenKind.CONSTRAINT_SCHEMA,
    TokenKind.CONSTRAINT_NAME,
    TokenKind.CONTEXT,
    TokenKind.CPU,
    TokenKind.CUBE,
    TokenKind.CURRENT,
    TokenKind.CURSOR_NAME,
    TokenKind.DATA,
    TokenKind.DATAFILE,
    TokenKind.DATETIME,
    TokenKind.DATE,
    TokenKind.DAY,
    TokenKind.DEFAULT_AUTH,
    TokenKind.DEFINER,
    TokenKind.DELAY_KEY_WRITE,
    TokenKind.DES_KEY_FILE,
    TokenKind.DIAGNOSTICS,
    TokenKind.DIRECTORY,
    TokenKind.DISABLE,
    TokenKind.DISCARD,
    TokenKind.DISK,
    TokenKind.DUMPFILE,
    TokenKind.DUPLICATE,
    TokenKind.DYNAMIC,
    TokenKind.ENDS,
    TokenKind.ENUM,
    TokenKind.ENGINE,
    TokenKind.ENGINES,
    TokenKind.ERROR,
    TokenKind.ERRORS,
    TokenKind.ESCAPE,
    TokenKind.EVENT,
    TokenKind.EVENTS,
    TokenKind.EVERY,
    TokenKind.EXCHANGE,
    TokenKind.EXPANSION,
    TokenKind.EXPIRE,
    TokenKind.EXPORT,
    TokenKind.EXTENDED,
    TokenKind.EXTENT_SIZE,
    TokenKind.FAULTS,
    TokenKind.FAST,
    TokenKind.FOUND,
    TokenKind.ENABLE,
    TokenKind.FULL,
    TokenKind.FILE,
    TokenKind.FILE_BLOCK_SIZE,
    TokenKind.FILTER,
    TokenKind.FIRST,
    TokenKind.FIXED,
    TokenKind.GENERAL,
    TokenKind.GEOMETRY,
    TokenKind.GEOMETRYCOLLECTION,
    TokenKind.GET_FORMAT,
    TokenKind.GRANTS,
    TokenKind.GLOBAL,
    TokenKind.HASH,
    TokenKind.HOSTS,
    TokenKind.HOUR,
    TokenKind.IDENTIFIED,
    TokenKind.IGNORE_SERVER_IDS,
    TokenKind.INVOKER,
    TokenKind.IMPORT,
    TokenKind.INDEXES,
    TokenKind.INITIAL_SIZE,
    TokenKind.INSTANCE,
    TokenKind.IO,
    TokenKind.IPC,
    TokenKind.ISOLATION,
    TokenKind.ISSUER,
    TokenKind.INSERT_METHOD,
    TokenKind.JSON,
    TokenKind.KEY_BLOCK_SIZE,
    TokenKind.LAST,
    TokenKind.LEAVES,
    TokenKind.LESS,
    TokenKind.LEVEL,
    TokenKind.LINESTRING,
    TokenKind.LIST,
    TokenKind.LOCAL,
    TokenKind.LOCKS,
    TokenKind.LOGFILE,
    TokenKind.LOGS,
    TokenKind.MAX_ROWS,
    TokenKind.MASTER,
    TokenKind.MASTER_HEARTBEAT_PERIOD,
    TokenKind.MASTER_HOST,
    TokenKind.MASTER_PORT,
    TokenKind.MASTER_LOG_FILE,
    TokenKind.MASTER_LOG_POS,
    TokenKind.MASTER_USER,
    TokenKind.MASTER_PASSWORD,
    TokenKind.MASTER_SERVER_ID,
    TokenKind.MASTER_CONNECT_RETRY,
    TokenKind.MASTER_RETRY_COUNT,
    TokenKind.MASTER_DELAY,
    TokenKind.MASTER_SSL,
    TokenKind.MASTER_SSL_CA,
    TokenKind.MASTER_SSL_CAPATH,
    TokenKind.MASTER_TLS_VERSION,
    TokenKind.MASTER_SSL_CERT,
    TokenKind.MASTER_SSL_CIPHER,
    TokenKind.MASTER_SSL_CRL,
    TokenKind.MASTER_SSL_CRLPATH,
    TokenKind.MASTER_SSL_KEY,
    TokenKind.MASTER_AUTO_POSITION,
    TokenKind.MAX_CONNECTIONS_PER_HOUR,
    TokenKind.MAX_QUERIES_PER_HOUR,
    TokenKind.MAX_SIZE,
    TokenKind.MAX_UPDATES_PER_HOUR,
    TokenKind.MAX_USER_CONNECTIONS,
    TokenKind.MEDIUM,
    TokenKind.MEMORY,
    TokenKind.MERGE,
    TokenKind.MESSAGE_TEXT,
    TokenKind.MICROSECOND,
    TokenKind.MIGRATE,
    TokenKind.MINUTE,
    TokenKind.MIN_ROWS,
    TokenKind.MODIFY,
    TokenKind.MODE,
    TokenKind.MONTH,
    TokenKind.MULTILINESTRING,
    TokenKind.MULTIPOINT,
    TokenKind.MULTIPOLYGON,
    TokenKind.MUTEX,
    TokenKind.MYSQL_ERRNO,
    TokenKind.NAME,
    TokenKind.NAMES,
    TokenKind.NATIONAL,
    TokenKind.NCHAR,
    TokenKind.NDBCLUSTER,
    TokenKind.NEVER,
    TokenKind.NEXT,
    TokenKind.NEW,
    TokenKind.NO_WAIT,
    TokenKind.NODEGROUP,
    TokenKind.NONE,
    TokenKind.NUMBER,
    TokenKind.NVARCHAR,
    TokenKind.OFFSET,
    TokenKind.ONE,
    TokenKind.ONLY,
    TokenKind.PACK_KEYS,
    TokenKind.PAGE,
    TokenKind.PARTIAL,
    TokenKind.PARTITIONING,
    TokenKind.PARTITIONS,
    TokenKind.PASSWORD,
    TokenKind.PHASE,
    TokenKind.PLUGIN_DIR,
    TokenKind.PLUGIN,
    TokenKind.PLUGINS,
    TokenKind.POINT,
    TokenKind.POLYGON,
    TokenKind.PRESERVE,
    TokenKind.PREV,
    TokenKind.PRIVILEGES,
    TokenKind.PROCESS,
    TokenKind.PROCESSLIST,
    TokenKind.PROFILE,
    TokenKind.PROFILES,
    TokenKind.PROXY,
    TokenKind.QUARTER,
    TokenKind.QUERY,
    TokenKind.QUICK,
    TokenKind.READ_ONLY,
    TokenKind.REBUILD,
    TokenKind.RECOVER,
    TokenKind.REDO_BUFFER_SIZE,
    TokenKind.REDOFILE,
    TokenKind.REDUNDANT,
    TokenKind.RELAY,
    TokenKind.RELAYLOG,
    TokenKind.RELAY_LOG_FILE,
    TokenKind.RELAY_LOG_POS,
    TokenKind.RELAY_THREAD,
    TokenKind.RELOAD,
    TokenKind.REORGANIZE,
    TokenKind.REPEATABLE,
    TokenKind.REPLICATION,
    TokenKind.REPLICATE_DO_DB,
    TokenKind.REPLICATE_IGNORE_DB,
    TokenKind.REPLICATE_DO_TABLE,
    TokenKind.REPLICATE_IGNORE_TABLE,
    TokenKind.REPLICATE_WILD_DO_TABLE,
    TokenKind.REPLICATE_WILD_IGNORE_TABLE,
    TokenKind.REPLICATE_REWRITE_DB,
    //TokenKind.RESOURCES,
    TokenKind.USER_RESOURCES,
    TokenKind.RESUME,
    TokenKind.RETURNED_SQLSTATE,
    TokenKind.RETURNS,
    TokenKind.REVERSE,
    TokenKind.ROLLUP,
    TokenKind.ROTATE,
    TokenKind.ROUTINE,
    TokenKind.ROWS,
    TokenKind.ROW_COUNT,
    TokenKind.ROW_FORMAT,
    TokenKind.ROW,
    TokenKind.RTREE,
    TokenKind.SCHEDULE,
    TokenKind.SCHEMA_NAME,
    TokenKind.SECOND,
    TokenKind.SERIAL,
    TokenKind.SERIALIZABLE,
    TokenKind.SESSION,
    TokenKind.SIMPLE,
    TokenKind.SHARE,
    TokenKind.SLOW,
    TokenKind.SNAPSHOT,
    TokenKind.SOUNDS,
    TokenKind.SOURCE,
    TokenKind.SQL_AFTER_GTIDS,
    TokenKind.SQL_AFTER_MTS_GAPS,
    TokenKind.SQL_BEFORE_GTIDS,
    TokenKind.SQL_CACHE,
    TokenKind.SQL_BUFFER_RESULT,
    TokenKind.SQL_NO_CACHE,
    TokenKind.SQL_THREAD,
    TokenKind.STACKED,
    TokenKind.STARTS,
    TokenKind.STATS_AUTO_RECALC,
    TokenKind.STATS_PERSISTENT,
    TokenKind.STATS_SAMPLE_PAGES,
    TokenKind.STATUS,
    TokenKind.STORAGE,
    TokenKind.STRING,
    TokenKind.SUBCLASS_ORIGIN,
    TokenKind.SUBDATE,
    TokenKind.SUBJECT,
    TokenKind.SUBPARTITION,
    TokenKind.SUBPARTITIONS,
    TokenKind.SUPER,
    TokenKind.SUSPEND,
    TokenKind.SWAPS,
    TokenKind.SWITCHES,
    TokenKind.TABLE_NAME,
    TokenKind.TABLES,
    TokenKind.TABLE_CHECKSUM,
    TokenKind.TABLESPACE,
    TokenKind.TEMPORARY,
    TokenKind.TEMPTABLE,
    TokenKind.TEXT,
    TokenKind.THAN,
    TokenKind.TRANSACTION,
    TokenKind.TRIGGERS,
    TokenKind.TIMESTAMP,
    //TokenKind.TIMESTAMP_ADD,
    TokenKind.TIMESTAMPADD,
    //TokenKind.TIMESTAMP_DIFF,
    TokenKind.TIMESTAMPDIFF,
    TokenKind.TIME,
    TokenKind.TYPES,
    TokenKind.TYPE,
    /**
     * This Token doesn't exist?
     *
     * I don't see it here,
     * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/lex.h
     */
    //TokenKind.UDF_RETURNS,
    TokenKind.FUNCTION,
    TokenKind.UNCOMMITTED,
    TokenKind.UNDEFINED,
    TokenKind.UNDO_BUFFER_SIZE,
    TokenKind.UNDOFILE,
    TokenKind.UNKNOWN,
    TokenKind.UNTIL,
    TokenKind.USER,
    TokenKind.USE_FRM,
    TokenKind.VALIDATION,
    TokenKind.VARIABLES,
    TokenKind.VIEW,
    TokenKind.VALUE,
    TokenKind.WARNINGS,
    TokenKind.WAIT,
    TokenKind.WEEK,
    TokenKind.WITHOUT,
    TokenKind.WORK,
    TokenKind.WEIGHT_STRING,
    TokenKind.X509,
    TokenKind.XID,
    TokenKind.XML,
    TokenKind.YEAR,

    /**
     * Synonyms
     */
    TokenKind.SOME,
    TokenKind.FIELDS,
    TokenKind.SQL_TSI_DAY,
    TokenKind.SQL_TSI_HOUR,
    TokenKind.SQL_TSI_MINUTE,
    TokenKind.SQL_TSI_MONTH,
    TokenKind.NDB,
    TokenKind.SQL_TSI_QUARTER,
    TokenKind.IO_THREAD,
    TokenKind.SQL_TSI_SECOND,
    TokenKind.SESSION_USER,
    TokenKind.SYSTEM_USER,
    TokenKind.SQL_TSI_WEEK,
    TokenKind.SQL_TSI_YEAR,

    /**
     * Removed in later versions of MySQL 5.7
     *
     * https://dev.mysql.com/doc/refman/5.7/en/keywords.html
     */

    //added in 5.7.4 (nonreserved); removed in 5.7.8
    //@todo Check what it was used for
    TokenKind.MAX_STATEMENT_TIME,

    //removed in 5.7.6
    //@todo Check what it was used for
    TokenKind.NONBLOCKING,

    //removed in 5.7.5
    //@todo Check what it was used for
    TokenKind.OLD_PASSWORD,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13328-L13385
 */
 export const keyword = tokenSymbol2(
    keywordSp,
    TokenKind.ACCOUNT,
    TokenKind.ASCII,
    TokenKind.ALWAYS,
    TokenKind.BACKUP,
    TokenKind.BEGIN,
    TokenKind.BYTE,
    TokenKind.CACHE,
    TokenKind.CHARSET,
    TokenKind.CHECKSUM,
    TokenKind.CLOSE,
    TokenKind.COMMENT,
    TokenKind.COMMIT,
    TokenKind.CONTAINS,
    TokenKind.DEALLOCATE,
    TokenKind.DO,
    TokenKind.END,
    TokenKind.EXECUTE,
    TokenKind.FLUSH,
    TokenKind.FOLLOWS,
    TokenKind.FORMAT,
    TokenKind.GROUP_REPLICATION,
    TokenKind.HANDLER,
    TokenKind.HELP,
    TokenKind.HOST,
    TokenKind.INSTALL,
    TokenKind.LANGUAGE,
    TokenKind.NO,
    TokenKind.OPEN,
    TokenKind.OPTIONS,
    TokenKind.OWNER,
    TokenKind.PARSER,
    TokenKind.PARSE_GCOL_EXPR,
    TokenKind.PORT,
    TokenKind.PRECEDES,
    TokenKind.PREPARE,
    TokenKind.REMOVE,
    TokenKind.REPAIR,
    TokenKind.RESET,
    TokenKind.RESTORE,
    TokenKind.ROLLBACK,
    TokenKind.SAVEPOINT,
    TokenKind.SECURITY,
    TokenKind.SERVER,
    TokenKind.SHUTDOWN,
    TokenKind.SIGNED,
    TokenKind.SOCKET,
    TokenKind.SLAVE,
    TokenKind.SONAME,
    TokenKind.START,
    TokenKind.STOP,
    TokenKind.TRUNCATE,
    TokenKind.UNICODE,
    TokenKind.UNINSTALL,
    TokenKind.WRAPPER,
    TokenKind.XA,
    TokenKind.UPGRADE
);

export const reserved = tokenSymbol(
    //This is reserved
    TokenKind.UnderscoreCharacterSet,
    ...reservedKeywords,
);

export const identifier = tokenSymbol(
    TokenKind.Identifier,
    TokenKind.DoubleQuotedLiteral,
    ...getTokenKinds(keyword),
);

export const identifierOrReserved = tokenSymbol2(
    identifier,
    ...getTokenKinds(reserved),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9610
 */
export const keywordFunctionCall_FunctionName = new Set<string>([
    TokenKind.CHAR,
    TokenKind.CHARACTER,
    TokenKind.CURRENT_USER,
    TokenKind.DATE,
    TokenKind.DAY,
    TokenKind.SQL_TSI_DAY,
    TokenKind.HOUR,
    TokenKind.SQL_TSI_HOUR,
    TokenKind.INSERT,
    TokenKind.INTERVAL,
    TokenKind.LEFT,
    TokenKind.MINUTE,
    TokenKind.SQL_TSI_MINUTE,
    TokenKind.MONTH,
    TokenKind.SQL_TSI_MONTH,
    TokenKind.RIGHT,
    TokenKind.SECOND,
    TokenKind.SQL_TSI_SECOND,
    TokenKind.TIME,
    TokenKind.TIMESTAMP,
    TokenKind.TRIM,
    TokenKind.USER,
    TokenKind.SESSION_USER,
    TokenKind.SYSTEM_USER,
    TokenKind.YEAR,
    TokenKind.SQL_TSI_YEAR,
]);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9737
 */
 export const nonKeywordFunctionCall_FunctionName = new Set<string>([
    TokenKind.ADDDATE,
    TokenKind.CURRENT_DATE,
    TokenKind.CURDATE,
    TokenKind.CURRENT_TIME,
    TokenKind.CURTIME,
    TokenKind.DATE_ADD,
    TokenKind.DATE_SUB,
    TokenKind.EXTRACT,
    TokenKind.GET_FORMAT,
    TokenKind.CURRENT_TIMESTAMP,
    TokenKind.NOW,
    TokenKind.LOCALTIME,
    TokenKind.LOCALTIMESTAMP,
    TokenKind.POSITION,
    TokenKind.SUBDATE,
    TokenKind.SUBSTRING,
    TokenKind.SUBSTR,
    TokenKind.MID,
    TokenKind.SYSDATE,
    TokenKind.TIMESTAMPADD,
    TokenKind.TIMESTAMPDIFF,
    TokenKind.UTC_DATE,
    TokenKind.UTC_TIME,
    TokenKind.UTC_TIMESTAMP,
]);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13112
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9994
 */
export const maybeUserDefinedFunctionCall_FunctionName = tokenSymbol(
    TokenKind.Identifier,
    TokenKind.DoubleQuotedLiteral,
    /*...getTokenKinds(keyword).filter(
        tokenKind => (
            !keywordFunctionCall_FunctionName.has(tokenKind) &&
            !nonKeywordFunctionCall_FunctionName.has(tokenKind)
        )
    ),*/
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13833
 */
export const identifierNoScopeKeyword = tokenSymbol(
    TokenKind.Identifier,
    TokenKind.DoubleQuotedLiteral,
    ...getTokenKinds(keyword).filter(keyword => (
        keyword != TokenKind.SESSION &&
        keyword != TokenKind.LOCAL &&
        keyword != TokenKind.GLOBAL
    )),
);

/**
 * Double quoted literals are a pain.
 * They may be string literals, or identifiers.
 * Depending on the `ANSI_QUOTES` config
 */
export const stringLiteral = tokenSymbol(
    TokenKind.StringLiteral,
    TokenKind.DoubleQuotedLiteral,
);

export const identifierOrStringLiteral = tokenSymbol2(
    identifier,
    TokenKind.StringLiteral,
);

export const identifierOrReservedOrStringLiteral = tokenSymbol2(
    identifier,
    TokenKind.UnderscoreCharacterSet,
    ...reservedKeywords,
    TokenKind.StringLiteral,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10984
 */
export const ulong_num = tokenSymbol(
    TokenKind.IntegerLiteral,
    TokenKind.HexLiteral,
    TokenKind.DecimalLiteral,
    TokenKind.RealLiteral,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10993
 */
export const real_ulong_num = tokenSymbol(
    TokenKind.IntegerLiteral,
    TokenKind.HexLiteral,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11001
 */
export const ulonglong_num = tokenSymbol(
    TokenKind.IntegerLiteral,
    TokenKind.DecimalLiteral,
    TokenKind.RealLiteral,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11009
 */
export const real_ulonglong_num = TokenKind.IntegerLiteral;

export const char = tokenSymbol(
    TokenKind.CHAR,
    TokenKind.CHARACTER,
);

export const greedySkipExpression = choice(
    greedySkipExpectation(TokenKind.Identifier),
    disallowedSyntaxKinds(
        [TokenKind.Identifier],
        SyntaxKind.Expression
    )
);

export const itemSeparator =  skipExpectationAfterExtraCost(
    0.1,
    skipExpectationCost(0.1, TokenKind.Comma)
);

export function semiList1 (rule : Rule) {
    return seq(
        field("item", rule),
        repeat(seq(
            /**
             * @todo Determine if `itemSeparator` should be used for optionals...
             */
            field("commaToken", optional(TokenKind.Comma)),
            field("item", rule),
        )),
    );
}

export function list1 (rule : Rule) {
    return seq(
        field("item", rule),
        repeat(seq(
            field("commaToken", itemSeparator),
            field("item", rule),
        )),
    );
}

export function list2 (rule : Rule) {
    return seq(
        field("item", rule),
        repeat1(seq(
            field("commaToken", itemSeparator),
            field("item", rule),
        )),
    );
}

export function list3 (rule : Rule) {
    return seq(
        field("item", rule),
        field("commaToken", itemSeparator),
        field("item", rule),
        repeat1(seq(
            field("commaToken", itemSeparator),
            field("item", rule),
        )),
    );
}

export function list (rule : Rule) {
    return optional(list1(rule));
}

export function parentheses(rule : Rule) {
    return seq(
        field("openParenthesesToken", TokenKind.OpenParentheses),
        rule,
        field("closeParenthesesToken", TokenKind.CloseParentheses),
    );
}

export function tuple1 (rule : Rule) {
    return parentheses(list1(rule));
}

export function tuple2 (rule : Rule) {
    return parentheses(list2(rule));
}

export function tuple (rule : Rule) {
    return parentheses(list(rule));
}

export function dotIdentOrReserved (
    identifierName : string
) {
    return choice(
        seq(
            field("dotToken", cannotExpect(TokenKind.Dot)),
            //whitespace and linebreak allowed between dot and non-reserved tokens
            field(identifierName, SyntaxKind.Ident),
        ),
        useCustomExtra(
            CustomExtras.noExtras,
            seq(
                field("dotToken", cannotExpect(TokenKind.Dot)),
                //No whitespace and linebreak allowed between dot and reserved tokens
                field(identifierName, reserved),
            )
        ),
    );
}
