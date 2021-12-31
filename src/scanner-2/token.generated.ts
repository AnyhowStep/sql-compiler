
export enum TokenKind {
    START_OF_FUNCTION_KEYWORD = "START_OF_FUNCTION_KEYWORD",
    ADDDATE = "ADDDATE",
    BIT_AND = "BIT_AND",
    BIT_OR = "BIT_OR",
    BIT_XOR = "BIT_XOR",
    CAST = "CAST",
    COUNT = "COUNT",
    CURDATE = "CURDATE",
    CURTIME = "CURTIME",
    DATE_ADD = "DATE_ADD",
    DATE_SUB = "DATE_SUB",
    EXTRACT = "EXTRACT",
    GROUP_CONCAT = "GROUP_CONCAT",
    JSON_OBJECTAGG = "JSON_OBJECTAGG",
    JSON_ARRAYAGG = "JSON_ARRAYAGG",
    MAX = "MAX",
    MID = "MID",
    MIN = "MIN",
    NOW = "NOW",
    POSITION = "POSITION",
    SESSION_USER = "SESSION_USER",
    STD = "STD",
    STDDEV = "STDDEV",
    STDDEV_POP = "STDDEV_POP",
    STDDEV_SAMP = "STDDEV_SAMP",
    ST_COLLECT = "ST_COLLECT",
    SUBDATE = "SUBDATE",
    SUBSTR = "SUBSTR",
    SUBSTRING = "SUBSTRING",
    SUM = "SUM",
    SYSDATE = "SYSDATE",
    SYSTEM_USER = "SYSTEM_USER",
    TRIM = "TRIM",
    VARIANCE = "VARIANCE",
    VAR_POP = "VAR_POP",
    VAR_SAMP = "VAR_SAMP",
    END_OF_FUNCTION_KEYWORD = "END_OF_FUNCTION_KEYWORD",
    START_OF_RESERVED_KEYWORD = "START_OF_RESERVED_KEYWORD",
    ACCESSIBLE = "ACCESSIBLE",
    ADD = "ADD",
    ALL = "ALL",
    ALTER = "ALTER",
    ANALYZE = "ANALYZE",
    AND = "AND",
    AS = "AS",
    ASC = "ASC",
    ASENSITIVE = "ASENSITIVE",
    BEFORE = "BEFORE",
    BETWEEN = "BETWEEN",
    BIGINT = "BIGINT",
    BINARY = "BINARY",
    BLOB = "BLOB",
    BOTH = "BOTH",
    BY = "BY",
    CALL = "CALL",
    CASCADE = "CASCADE",
    CASE = "CASE",
    CHANGE = "CHANGE",
    CHAR = "CHAR",
    CHARACTER = "CHARACTER",
    CHECK = "CHECK",
    COLLATE = "COLLATE",
    COLUMN = "COLUMN",
    CONDITION = "CONDITION",
    CONSTRAINT = "CONSTRAINT",
    CONTINUE = "CONTINUE",
    CONVERT = "CONVERT",
    CREATE = "CREATE",
    CROSS = "CROSS",
    CURRENT_DATE = "CURRENT_DATE",
    CURRENT_TIME = "CURRENT_TIME",
    CURRENT_TIMESTAMP = "CURRENT_TIMESTAMP",
    CURRENT_USER = "CURRENT_USER",
    CURSOR = "CURSOR",
    DATABASE = "DATABASE",
    DATABASES = "DATABASES",
    DAY_HOUR = "DAY_HOUR",
    DAY_MICROSECOND = "DAY_MICROSECOND",
    DAY_MINUTE = "DAY_MINUTE",
    DAY_SECOND = "DAY_SECOND",
    DEC = "DEC",
    DECIMAL = "DECIMAL",
    DECLARE = "DECLARE",
    DEFAULT = "DEFAULT",
    DELAYED = "DELAYED",
    DELETE = "DELETE",
    DESC = "DESC",
    DESCRIBE = "DESCRIBE",
    DETERMINISTIC = "DETERMINISTIC",
    DISTINCT = "DISTINCT",
    DISTINCTROW = "DISTINCTROW",
    DIV = "DIV",
    DOUBLE = "DOUBLE",
    DROP = "DROP",
    DUAL = "DUAL",
    EACH = "EACH",
    ELSE = "ELSE",
    ELSEIF = "ELSEIF",
    ENCLOSED = "ENCLOSED",
    ESCAPED = "ESCAPED",
    EXISTS = "EXISTS",
    EXIT = "EXIT",
    EXPLAIN = "EXPLAIN",
    FALSE = "FALSE",
    FETCH = "FETCH",
    FLOAT = "FLOAT",
    FLOAT4 = "FLOAT4",
    FLOAT8 = "FLOAT8",
    FOR = "FOR",
    FORCE = "FORCE",
    FOREIGN = "FOREIGN",
    FROM = "FROM",
    FULLTEXT = "FULLTEXT",
    GENERATED = "GENERATED",
    GET = "GET",
    GRANT = "GRANT",
    GROUP = "GROUP",
    HAVING = "HAVING",
    HIGH_PRIORITY = "HIGH_PRIORITY",
    HOUR_MICROSECOND = "HOUR_MICROSECOND",
    HOUR_MINUTE = "HOUR_MINUTE",
    HOUR_SECOND = "HOUR_SECOND",
    IF = "IF",
    IGNORE = "IGNORE",
    IN = "IN",
    INDEX = "INDEX",
    INFILE = "INFILE",
    INNER = "INNER",
    INOUT = "INOUT",
    INSENSITIVE = "INSENSITIVE",
    INSERT = "INSERT",
    INT = "INT",
    INT1 = "INT1",
    INT2 = "INT2",
    INT3 = "INT3",
    INT4 = "INT4",
    INT8 = "INT8",
    INTEGER = "INTEGER",
    INTERVAL = "INTERVAL",
    INTO = "INTO",
    IO_AFTER_GTIDS = "IO_AFTER_GTIDS",
    IO_BEFORE_GTIDS = "IO_BEFORE_GTIDS",
    IS = "IS",
    ITERATE = "ITERATE",
    JOIN = "JOIN",
    KEY = "KEY",
    KEYS = "KEYS",
    KILL = "KILL",
    LEADING = "LEADING",
    LEAVE = "LEAVE",
    LEFT = "LEFT",
    LIKE = "LIKE",
    LIMIT = "LIMIT",
    LINEAR = "LINEAR",
    LINES = "LINES",
    LOAD = "LOAD",
    LOCALTIME = "LOCALTIME",
    LOCALTIMESTAMP = "LOCALTIMESTAMP",
    LOCK = "LOCK",
    LONG = "LONG",
    LONGBLOB = "LONGBLOB",
    LONGTEXT = "LONGTEXT",
    LOOP = "LOOP",
    LOW_PRIORITY = "LOW_PRIORITY",
    MASTER_BIND = "MASTER_BIND",
    MASTER_SSL_VERIFY_SERVER_CERT = "MASTER_SSL_VERIFY_SERVER_CERT",
    MATCH = "MATCH",
    MAXVALUE = "MAXVALUE",
    MEDIUMBLOB = "MEDIUMBLOB",
    MEDIUMINT = "MEDIUMINT",
    MEDIUMTEXT = "MEDIUMTEXT",
    MIDDLEINT = "MIDDLEINT",
    MINUTE_MICROSECOND = "MINUTE_MICROSECOND",
    MINUTE_SECOND = "MINUTE_SECOND",
    MOD = "MOD",
    MODIFIES = "MODIFIES",
    NATURAL = "NATURAL",
    NOT = "NOT",
    NO_WRITE_TO_BINLOG = "NO_WRITE_TO_BINLOG",
    NULL = "NULL",
    NUMERIC = "NUMERIC",
    ON = "ON",
    OPTIMIZE = "OPTIMIZE",
    OPTIMIZER_COSTS = "OPTIMIZER_COSTS",
    OPTION = "OPTION",
    OPTIONALLY = "OPTIONALLY",
    OR = "OR",
    ORDER = "ORDER",
    OUT = "OUT",
    OUTER = "OUTER",
    OUTFILE = "OUTFILE",
    PARTITION = "PARTITION",
    PRECISION = "PRECISION",
    PRIMARY = "PRIMARY",
    PROCEDURE = "PROCEDURE",
    PURGE = "PURGE",
    RANGE = "RANGE",
    READ = "READ",
    READS = "READS",
    READ_WRITE = "READ_WRITE",
    REAL = "REAL",
    REFERENCES = "REFERENCES",
    REGEXP = "REGEXP",
    RELEASE = "RELEASE",
    RENAME = "RENAME",
    REPEAT = "REPEAT",
    REPLACE = "REPLACE",
    REQUIRE = "REQUIRE",
    RESIGNAL = "RESIGNAL",
    RESTRICT = "RESTRICT",
    RETURN = "RETURN",
    REVOKE = "REVOKE",
    RIGHT = "RIGHT",
    RLIKE = "RLIKE",
    SCHEMA = "SCHEMA",
    SCHEMAS = "SCHEMAS",
    SECOND_MICROSECOND = "SECOND_MICROSECOND",
    SELECT = "SELECT",
    SENSITIVE = "SENSITIVE",
    SEPARATOR = "SEPARATOR",
    SET = "SET",
    SHOW = "SHOW",
    SIGNAL = "SIGNAL",
    SMALLINT = "SMALLINT",
    SPATIAL = "SPATIAL",
    SPECIFIC = "SPECIFIC",
    SQL = "SQL",
    SQLEXCEPTION = "SQLEXCEPTION",
    SQLSTATE = "SQLSTATE",
    SQLWARNING = "SQLWARNING",
    SQL_BIG_RESULT = "SQL_BIG_RESULT",
    SQL_CALC_FOUND_ROWS = "SQL_CALC_FOUND_ROWS",
    SQL_SMALL_RESULT = "SQL_SMALL_RESULT",
    SSL = "SSL",
    STARTING = "STARTING",
    STORED = "STORED",
    STRAIGHT_JOIN = "STRAIGHT_JOIN",
    TABLE = "TABLE",
    TERMINATED = "TERMINATED",
    THEN = "THEN",
    TINYBLOB = "TINYBLOB",
    TINYINT = "TINYINT",
    TINYTEXT = "TINYTEXT",
    TO = "TO",
    TRAILING = "TRAILING",
    TRIGGER = "TRIGGER",
    TRUE = "TRUE",
    UNDO = "UNDO",
    UNION = "UNION",
    UNIQUE = "UNIQUE",
    UNLOCK = "UNLOCK",
    UNSIGNED = "UNSIGNED",
    UPDATE = "UPDATE",
    USAGE = "USAGE",
    USE = "USE",
    USING = "USING",
    UTC_DATE = "UTC_DATE",
    UTC_TIME = "UTC_TIME",
    UTC_TIMESTAMP = "UTC_TIMESTAMP",
    VALUES = "VALUES",
    VARBINARY = "VARBINARY",
    VARCHAR = "VARCHAR",
    VARCHARACTER = "VARCHARACTER",
    VARYING = "VARYING",
    VIRTUAL = "VIRTUAL",
    WHEN = "WHEN",
    WHERE = "WHERE",
    WHILE = "WHILE",
    WITH = "WITH",
    WRITE = "WRITE",
    XOR = "XOR",
    YEAR_MONTH = "YEAR_MONTH",
    ZEROFILL = "ZEROFILL",
    END_OF_RESERVED_KEYWORD = "END_OF_RESERVED_KEYWORD",
    START_OF_NON_RESERVED_KEYWORD = "START_OF_NON_RESERVED_KEYWORD",
    ACCOUNT = "ACCOUNT",
    ACTION = "ACTION",
    AFTER = "AFTER",
    AGAINST = "AGAINST",
    AGGREGATE = "AGGREGATE",
    ALGORITHM = "ALGORITHM",
    ALWAYS = "ALWAYS",
    ANALYSE = "ANALYSE",
    ANY = "ANY",
    ASCII = "ASCII",
    AT = "AT",
    AUTOEXTEND_SIZE = "AUTOEXTEND_SIZE",
    AUTO_INCREMENT = "AUTO_INCREMENT",
    AVG = "AVG",
    AVG_ROW_LENGTH = "AVG_ROW_LENGTH",
    BACKUP = "BACKUP",
    BEGIN = "BEGIN",
    BINLOG = "BINLOG",
    BIT = "BIT",
    BLOCK = "BLOCK",
    BOOL = "BOOL",
    BOOLEAN = "BOOLEAN",
    BTREE = "BTREE",
    BYTE = "BYTE",
    CACHE = "CACHE",
    CASCADED = "CASCADED",
    CATALOG_NAME = "CATALOG_NAME",
    CHAIN = "CHAIN",
    CHANGED = "CHANGED",
    CHANNEL = "CHANNEL",
    CHARSET = "CHARSET",
    CHECKSUM = "CHECKSUM",
    CIPHER = "CIPHER",
    CLASS_ORIGIN = "CLASS_ORIGIN",
    CLIENT = "CLIENT",
    CLOSE = "CLOSE",
    COALESCE = "COALESCE",
    CODE = "CODE",
    COLLATION = "COLLATION",
    COLUMNS = "COLUMNS",
    COLUMN_FORMAT = "COLUMN_FORMAT",
    COLUMN_NAME = "COLUMN_NAME",
    COMMENT = "COMMENT",
    COMMIT = "COMMIT",
    COMMITTED = "COMMITTED",
    COMPACT = "COMPACT",
    COMPLETION = "COMPLETION",
    COMPRESSED = "COMPRESSED",
    COMPRESSION = "COMPRESSION",
    CONCURRENT = "CONCURRENT",
    CONNECTION = "CONNECTION",
    CONSISTENT = "CONSISTENT",
    CONSTRAINT_CATALOG = "CONSTRAINT_CATALOG",
    CONSTRAINT_NAME = "CONSTRAINT_NAME",
    CONSTRAINT_SCHEMA = "CONSTRAINT_SCHEMA",
    CONTAINS = "CONTAINS",
    CONTEXT = "CONTEXT",
    CPU = "CPU",
    CUBE = "CUBE",
    CURRENT = "CURRENT",
    CURSOR_NAME = "CURSOR_NAME",
    DATA = "DATA",
    DATAFILE = "DATAFILE",
    DATE = "DATE",
    DATETIME = "DATETIME",
    DAY = "DAY",
    DEALLOCATE = "DEALLOCATE",
    DEFAULT_AUTH = "DEFAULT_AUTH",
    DEFINER = "DEFINER",
    DELAY_KEY_WRITE = "DELAY_KEY_WRITE",
    DES_KEY_FILE = "DES_KEY_FILE",
    DIAGNOSTICS = "DIAGNOSTICS",
    DIRECTORY = "DIRECTORY",
    DISABLE = "DISABLE",
    DISCARD = "DISCARD",
    DISK = "DISK",
    DO = "DO",
    DUMPFILE = "DUMPFILE",
    DUPLICATE = "DUPLICATE",
    DYNAMIC = "DYNAMIC",
    ENABLE = "ENABLE",
    ENCRYPTION = "ENCRYPTION",
    END = "END",
    ENDS = "ENDS",
    ENGINE = "ENGINE",
    ENGINES = "ENGINES",
    ENUM = "ENUM",
    ERROR = "ERROR",
    ERRORS = "ERRORS",
    ESCAPE = "ESCAPE",
    EVENT = "EVENT",
    EVENTS = "EVENTS",
    EVERY = "EVERY",
    EXCHANGE = "EXCHANGE",
    EXECUTE = "EXECUTE",
    EXPANSION = "EXPANSION",
    EXPIRE = "EXPIRE",
    EXPORT = "EXPORT",
    EXTENDED = "EXTENDED",
    EXTENT_SIZE = "EXTENT_SIZE",
    FAST = "FAST",
    FAULTS = "FAULTS",
    FIELDS = "FIELDS",
    FILE = "FILE",
    FILE_BLOCK_SIZE = "FILE_BLOCK_SIZE",
    FILTER = "FILTER",
    FIRST = "FIRST",
    FIXED = "FIXED",
    FLUSH = "FLUSH",
    FOLLOWS = "FOLLOWS",
    FORMAT = "FORMAT",
    FOUND = "FOUND",
    FULL = "FULL",
    FUNCTION = "FUNCTION",
    GENERAL = "GENERAL",
    GEOMETRY = "GEOMETRY",
    GEOMETRYCOLLECTION = "GEOMETRYCOLLECTION",
    GET_FORMAT = "GET_FORMAT",
    GLOBAL = "GLOBAL",
    GRANTS = "GRANTS",
    GROUP_REPLICATION = "GROUP_REPLICATION",
    HANDLER = "HANDLER",
    HASH = "HASH",
    HELP = "HELP",
    HOST = "HOST",
    HOSTS = "HOSTS",
    HOUR = "HOUR",
    IDENTIFIED = "IDENTIFIED",
    IGNORE_SERVER_IDS = "IGNORE_SERVER_IDS",
    IMPORT = "IMPORT",
    INDEXES = "INDEXES",
    INITIAL_SIZE = "INITIAL_SIZE",
    INSERT_METHOD = "INSERT_METHOD",
    INSTALL = "INSTALL",
    INSTANCE = "INSTANCE",
    INVOKER = "INVOKER",
    IO = "IO",
    IO_THREAD = "IO_THREAD",
    IPC = "IPC",
    ISOLATION = "ISOLATION",
    ISSUER = "ISSUER",
    JSON = "JSON",
    KEY_BLOCK_SIZE = "KEY_BLOCK_SIZE",
    LANGUAGE = "LANGUAGE",
    LAST = "LAST",
    LEAVES = "LEAVES",
    LESS = "LESS",
    LEVEL = "LEVEL",
    LINESTRING = "LINESTRING",
    LIST = "LIST",
    LOCAL = "LOCAL",
    LOCKS = "LOCKS",
    LOGFILE = "LOGFILE",
    LOGS = "LOGS",
    MASTER = "MASTER",
    MASTER_AUTO_POSITION = "MASTER_AUTO_POSITION",
    MASTER_CONNECT_RETRY = "MASTER_CONNECT_RETRY",
    MASTER_DELAY = "MASTER_DELAY",
    MASTER_HEARTBEAT_PERIOD = "MASTER_HEARTBEAT_PERIOD",
    MASTER_HOST = "MASTER_HOST",
    MASTER_LOG_FILE = "MASTER_LOG_FILE",
    MASTER_LOG_POS = "MASTER_LOG_POS",
    MASTER_PASSWORD = "MASTER_PASSWORD",
    MASTER_PORT = "MASTER_PORT",
    MASTER_RETRY_COUNT = "MASTER_RETRY_COUNT",
    MASTER_SERVER_ID = "MASTER_SERVER_ID",
    MASTER_SSL = "MASTER_SSL",
    MASTER_SSL_CA = "MASTER_SSL_CA",
    MASTER_SSL_CAPATH = "MASTER_SSL_CAPATH",
    MASTER_SSL_CERT = "MASTER_SSL_CERT",
    MASTER_SSL_CIPHER = "MASTER_SSL_CIPHER",
    MASTER_SSL_CRL = "MASTER_SSL_CRL",
    MASTER_SSL_CRLPATH = "MASTER_SSL_CRLPATH",
    MASTER_SSL_KEY = "MASTER_SSL_KEY",
    MASTER_TLS_VERSION = "MASTER_TLS_VERSION",
    MASTER_USER = "MASTER_USER",
    MAX_CONNECTIONS_PER_HOUR = "MAX_CONNECTIONS_PER_HOUR",
    MAX_QUERIES_PER_HOUR = "MAX_QUERIES_PER_HOUR",
    MAX_ROWS = "MAX_ROWS",
    MAX_SIZE = "MAX_SIZE",
    MAX_STATEMENT_TIME = "MAX_STATEMENT_TIME",
    MAX_UPDATES_PER_HOUR = "MAX_UPDATES_PER_HOUR",
    MAX_USER_CONNECTIONS = "MAX_USER_CONNECTIONS",
    MEDIUM = "MEDIUM",
    MEMORY = "MEMORY",
    MERGE = "MERGE",
    MESSAGE_TEXT = "MESSAGE_TEXT",
    MICROSECOND = "MICROSECOND",
    MIGRATE = "MIGRATE",
    MINUTE = "MINUTE",
    MIN_ROWS = "MIN_ROWS",
    MODE = "MODE",
    MODIFY = "MODIFY",
    MONTH = "MONTH",
    MULTILINESTRING = "MULTILINESTRING",
    MULTIPOINT = "MULTIPOINT",
    MULTIPOLYGON = "MULTIPOLYGON",
    MUTEX = "MUTEX",
    MYSQL_ERRNO = "MYSQL_ERRNO",
    NAME = "NAME",
    NAMES = "NAMES",
    NATIONAL = "NATIONAL",
    NCHAR = "NCHAR",
    NDB = "NDB",
    NDBCLUSTER = "NDBCLUSTER",
    NEVER = "NEVER",
    NEW = "NEW",
    NEXT = "NEXT",
    NO = "NO",
    NODEGROUP = "NODEGROUP",
    NONBLOCKING = "NONBLOCKING",
    NONE = "NONE",
    NO_WAIT = "NO_WAIT",
    NUMBER = "NUMBER",
    NVARCHAR = "NVARCHAR",
    OFFSET = "OFFSET",
    OLD_PASSWORD = "OLD_PASSWORD",
    ONE = "ONE",
    ONLY = "ONLY",
    OPEN = "OPEN",
    OPTIONS = "OPTIONS",
    OWNER = "OWNER",
    PACK_KEYS = "PACK_KEYS",
    PAGE = "PAGE",
    PARSER = "PARSER",
    PARSE_GCOL_EXPR = "PARSE_GCOL_EXPR",
    PARTIAL = "PARTIAL",
    PARTITIONING = "PARTITIONING",
    PARTITIONS = "PARTITIONS",
    PASSWORD = "PASSWORD",
    PHASE = "PHASE",
    PLUGIN = "PLUGIN",
    PLUGINS = "PLUGINS",
    PLUGIN_DIR = "PLUGIN_DIR",
    POINT = "POINT",
    POLYGON = "POLYGON",
    PORT = "PORT",
    PRECEDES = "PRECEDES",
    PREPARE = "PREPARE",
    PRESERVE = "PRESERVE",
    PREV = "PREV",
    PRIVILEGES = "PRIVILEGES",
    PROCESSLIST = "PROCESSLIST",
    PROFILE = "PROFILE",
    PROFILES = "PROFILES",
    PROXY = "PROXY",
    QUARTER = "QUARTER",
    QUERY = "QUERY",
    QUICK = "QUICK",
    READ_ONLY = "READ_ONLY",
    REBUILD = "REBUILD",
    RECOVER = "RECOVER",
    REDOFILE = "REDOFILE",
    REDO_BUFFER_SIZE = "REDO_BUFFER_SIZE",
    REDUNDANT = "REDUNDANT",
    RELAY = "RELAY",
    RELAYLOG = "RELAYLOG",
    RELAY_LOG_FILE = "RELAY_LOG_FILE",
    RELAY_LOG_POS = "RELAY_LOG_POS",
    RELAY_THREAD = "RELAY_THREAD",
    RELOAD = "RELOAD",
    REMOVE = "REMOVE",
    REORGANIZE = "REORGANIZE",
    REPAIR = "REPAIR",
    REPEATABLE = "REPEATABLE",
    REPLICATE_DO_DB = "REPLICATE_DO_DB",
    REPLICATE_DO_TABLE = "REPLICATE_DO_TABLE",
    REPLICATE_IGNORE_DB = "REPLICATE_IGNORE_DB",
    REPLICATE_IGNORE_TABLE = "REPLICATE_IGNORE_TABLE",
    REPLICATE_REWRITE_DB = "REPLICATE_REWRITE_DB",
    REPLICATE_WILD_DO_TABLE = "REPLICATE_WILD_DO_TABLE",
    REPLICATE_WILD_IGNORE_TABLE = "REPLICATE_WILD_IGNORE_TABLE",
    REPLICATION = "REPLICATION",
    RESET = "RESET",
    RESTORE = "RESTORE",
    RESUME = "RESUME",
    RETURNED_SQLSTATE = "RETURNED_SQLSTATE",
    RETURNS = "RETURNS",
    REVERSE = "REVERSE",
    ROLLBACK = "ROLLBACK",
    ROLLUP = "ROLLUP",
    ROTATE = "ROTATE",
    ROUTINE = "ROUTINE",
    ROW = "ROW",
    ROWS = "ROWS",
    ROW_COUNT = "ROW_COUNT",
    ROW_FORMAT = "ROW_FORMAT",
    RTREE = "RTREE",
    SAVEPOINT = "SAVEPOINT",
    SCHEDULE = "SCHEDULE",
    SCHEMA_NAME = "SCHEMA_NAME",
    SECOND = "SECOND",
    SECURITY = "SECURITY",
    SERIAL = "SERIAL",
    SERIALIZABLE = "SERIALIZABLE",
    SERVER = "SERVER",
    SESSION = "SESSION",
    SHARE = "SHARE",
    SHUTDOWN = "SHUTDOWN",
    SIGNED = "SIGNED",
    SIMPLE = "SIMPLE",
    SLAVE = "SLAVE",
    SLOW = "SLOW",
    SNAPSHOT = "SNAPSHOT",
    SOCKET = "SOCKET",
    SOME = "SOME",
    SONAME = "SONAME",
    SOUNDS = "SOUNDS",
    SOURCE = "SOURCE",
    SQL_AFTER_GTIDS = "SQL_AFTER_GTIDS",
    SQL_AFTER_MTS_GAPS = "SQL_AFTER_MTS_GAPS",
    SQL_BEFORE_GTIDS = "SQL_BEFORE_GTIDS",
    SQL_BUFFER_RESULT = "SQL_BUFFER_RESULT",
    SQL_CACHE = "SQL_CACHE",
    SQL_NO_CACHE = "SQL_NO_CACHE",
    SQL_THREAD = "SQL_THREAD",
    SQL_TSI_DAY = "SQL_TSI_DAY",
    SQL_TSI_HOUR = "SQL_TSI_HOUR",
    SQL_TSI_MINUTE = "SQL_TSI_MINUTE",
    SQL_TSI_MONTH = "SQL_TSI_MONTH",
    SQL_TSI_QUARTER = "SQL_TSI_QUARTER",
    SQL_TSI_SECOND = "SQL_TSI_SECOND",
    SQL_TSI_WEEK = "SQL_TSI_WEEK",
    SQL_TSI_YEAR = "SQL_TSI_YEAR",
    STACKED = "STACKED",
    START = "START",
    STARTS = "STARTS",
    STATS_AUTO_RECALC = "STATS_AUTO_RECALC",
    STATS_PERSISTENT = "STATS_PERSISTENT",
    STATS_SAMPLE_PAGES = "STATS_SAMPLE_PAGES",
    STATUS = "STATUS",
    STOP = "STOP",
    STORAGE = "STORAGE",
    STRING = "STRING",
    SUBCLASS_ORIGIN = "SUBCLASS_ORIGIN",
    SUBJECT = "SUBJECT",
    SUBPARTITION = "SUBPARTITION",
    SUBPARTITIONS = "SUBPARTITIONS",
    SUPER = "SUPER",
    SUSPEND = "SUSPEND",
    SWAPS = "SWAPS",
    SWITCHES = "SWITCHES",
    TABLES = "TABLES",
    TABLESPACE = "TABLESPACE",
    TABLE_CHECKSUM = "TABLE_CHECKSUM",
    TABLE_NAME = "TABLE_NAME",
    TEMPORARY = "TEMPORARY",
    TEMPTABLE = "TEMPTABLE",
    TEXT = "TEXT",
    THAN = "THAN",
    TIME = "TIME",
    TIMESTAMP = "TIMESTAMP",
    TIMESTAMPADD = "TIMESTAMPADD",
    TIMESTAMPDIFF = "TIMESTAMPDIFF",
    TRANSACTION = "TRANSACTION",
    TRIGGERS = "TRIGGERS",
    TRUNCATE = "TRUNCATE",
    TYPE = "TYPE",
    TYPES = "TYPES",
    UNCOMMITTED = "UNCOMMITTED",
    UNDEFINED = "UNDEFINED",
    UNDOFILE = "UNDOFILE",
    UNDO_BUFFER_SIZE = "UNDO_BUFFER_SIZE",
    UNICODE = "UNICODE",
    UNINSTALL = "UNINSTALL",
    UNKNOWN = "UNKNOWN",
    UNTIL = "UNTIL",
    UPGRADE = "UPGRADE",
    USER = "USER",
    USER_RESOURCES = "USER_RESOURCES",
    USE_FRM = "USE_FRM",
    VALIDATION = "VALIDATION",
    VALUE = "VALUE",
    VARIABLES = "VARIABLES",
    VIEW = "VIEW",
    WAIT = "WAIT",
    WARNINGS = "WARNINGS",
    WEEK = "WEEK",
    WEIGHT_STRING = "WEIGHT_STRING",
    WITHOUT = "WITHOUT",
    WORK = "WORK",
    WRAPPER = "WRAPPER",
    X509 = "X509",
    XA = "XA",
    XID = "XID",
    XML = "XML",
    YEAR = "YEAR",
    PROCESS = "PROCESS",
    END_OF_NON_RESERVED_KEYWORD = "END_OF_NON_RESERVED_KEYWORD",
    EndOfFile = "EndOfFile",
    UnknownToken = "UnknownToken",
    CustomDelimiter = "CustomDelimiter",
    SingleLineComment = "SingleLineComment",
    MultiLineComment = "MultiLineComment",
    ExecutionComment = "ExecutionComment",
    ExecutionCommentStart = "ExecutionCommentStart",
    ExecutionCommentEnd = "ExecutionCommentEnd",
    WhiteSpace = "WhiteSpace",
    LineBreak = "LineBreak",
    EndOfStatement = "EndOfStatement",
    StringLiteral = "StringLiteral",
    NationalStringLiteral = "NationalStringLiteral",
    HexLiteral = "HexLiteral",
    BitLiteral = "BitLiteral",
    IntegerLiteral = "IntegerLiteral",
    DecimalLiteral = "DecimalLiteral",
    RealLiteral = "RealLiteral",
    MalformedRealLiteral = "MalformedRealLiteral",
    Identifier = "Identifier",
    MacroIdentifier = "MacroIdentifier",
    DoubleQuotedLiteral = "DoubleQuotedLiteral",
    Plus = "Plus",
    Minus = "Minus",
    Asterisk = "Asterisk",
    Percent = "Percent",
    Slash = "Slash",
    Colon = "Colon",
    Dot = "Dot",
    SemiColon = "SemiColon",
    Comma = "Comma",
    Pound = "Pound",
    OpenParenthesesPound = "OpenParenthesesPound",
    PoundCloseParentheses = "PoundCloseParentheses",
    Backslash = "Backslash",
    QuestionMark = "QuestionMark",
    ColonEqual = "ColonEqual",
    At = "At",
    Tilde = "Tilde",
    Caret = "Caret",
    Bar = "Bar",
    BarBar = "BarBar",
    Ampersand = "Ampersand",
    AmpersandAmpersand = "AmpersandAmpersand",
    Exclamation = "Exclamation",
    ExclamationEqual = "ExclamationEqual",
    Equal = "Equal",
    LessEqualGreater = "LessEqualGreater",
    GreaterEqual = "GreaterEqual",
    Greater = "Greater",
    LessEqual = "LessEqual",
    Less = "Less",
    LessGreater = "LessGreater",
    LessLess = "LessLess",
    GreaterGreater = "GreaterGreater",
    OpenParentheses = "OpenParentheses",
    CloseParentheses = "CloseParentheses",
    OpenBrace = "OpenBrace",
    CloseBrace = "CloseBrace",
    DelimiterSpace = "DelimiterSpace",
    UNIQUE_KEY = "UNIQUE_KEY",
    UnderscoreCharacterSet = "UnderscoreCharacterSet",
    NOT2 = "NOT2"
}

export enum FunctionKeyword {
    ADDDATE = "ADDDATE",
    BIT_AND = "BIT_AND",
    BIT_OR = "BIT_OR",
    BIT_XOR = "BIT_XOR",
    CAST = "CAST",
    COUNT = "COUNT",
    CURDATE = "CURDATE",
    CURTIME = "CURTIME",
    DATE_ADD = "DATE_ADD",
    DATE_SUB = "DATE_SUB",
    EXTRACT = "EXTRACT",
    GROUP_CONCAT = "GROUP_CONCAT",
    JSON_OBJECTAGG = "JSON_OBJECTAGG",
    JSON_ARRAYAGG = "JSON_ARRAYAGG",
    MAX = "MAX",
    MID = "MID",
    MIN = "MIN",
    NOW = "NOW",
    POSITION = "POSITION",
    SESSION_USER = "SESSION_USER",
    STD = "STD",
    STDDEV = "STDDEV",
    STDDEV_POP = "STDDEV_POP",
    STDDEV_SAMP = "STDDEV_SAMP",
    ST_COLLECT = "ST_COLLECT",
    SUBDATE = "SUBDATE",
    SUBSTR = "SUBSTR",
    SUBSTRING = "SUBSTRING",
    SUM = "SUM",
    SYSDATE = "SYSDATE",
    SYSTEM_USER = "SYSTEM_USER",
    TRIM = "TRIM",
    VARIANCE = "VARIANCE",
    VAR_POP = "VAR_POP",
    VAR_SAMP = "VAR_SAMP"
}

export enum ReservedKeyword {
    ACCESSIBLE = "ACCESSIBLE",
    ADD = "ADD",
    ALL = "ALL",
    ALTER = "ALTER",
    ANALYZE = "ANALYZE",
    AND = "AND",
    AS = "AS",
    ASC = "ASC",
    ASENSITIVE = "ASENSITIVE",
    BEFORE = "BEFORE",
    BETWEEN = "BETWEEN",
    BIGINT = "BIGINT",
    BINARY = "BINARY",
    BLOB = "BLOB",
    BOTH = "BOTH",
    BY = "BY",
    CALL = "CALL",
    CASCADE = "CASCADE",
    CASE = "CASE",
    CHANGE = "CHANGE",
    CHAR = "CHAR",
    CHARACTER = "CHARACTER",
    CHECK = "CHECK",
    COLLATE = "COLLATE",
    COLUMN = "COLUMN",
    CONDITION = "CONDITION",
    CONSTRAINT = "CONSTRAINT",
    CONTINUE = "CONTINUE",
    CONVERT = "CONVERT",
    CREATE = "CREATE",
    CROSS = "CROSS",
    CURRENT_DATE = "CURRENT_DATE",
    CURRENT_TIME = "CURRENT_TIME",
    CURRENT_TIMESTAMP = "CURRENT_TIMESTAMP",
    CURRENT_USER = "CURRENT_USER",
    CURSOR = "CURSOR",
    DATABASE = "DATABASE",
    DATABASES = "DATABASES",
    DAY_HOUR = "DAY_HOUR",
    DAY_MICROSECOND = "DAY_MICROSECOND",
    DAY_MINUTE = "DAY_MINUTE",
    DAY_SECOND = "DAY_SECOND",
    DEC = "DEC",
    DECIMAL = "DECIMAL",
    DECLARE = "DECLARE",
    DEFAULT = "DEFAULT",
    DELAYED = "DELAYED",
    DELETE = "DELETE",
    DESC = "DESC",
    DESCRIBE = "DESCRIBE",
    DETERMINISTIC = "DETERMINISTIC",
    DISTINCT = "DISTINCT",
    DISTINCTROW = "DISTINCTROW",
    DIV = "DIV",
    DOUBLE = "DOUBLE",
    DROP = "DROP",
    DUAL = "DUAL",
    EACH = "EACH",
    ELSE = "ELSE",
    ELSEIF = "ELSEIF",
    ENCLOSED = "ENCLOSED",
    ESCAPED = "ESCAPED",
    EXISTS = "EXISTS",
    EXIT = "EXIT",
    EXPLAIN = "EXPLAIN",
    FALSE = "FALSE",
    FETCH = "FETCH",
    FLOAT = "FLOAT",
    FLOAT4 = "FLOAT4",
    FLOAT8 = "FLOAT8",
    FOR = "FOR",
    FORCE = "FORCE",
    FOREIGN = "FOREIGN",
    FROM = "FROM",
    FULLTEXT = "FULLTEXT",
    GENERATED = "GENERATED",
    GET = "GET",
    GRANT = "GRANT",
    GROUP = "GROUP",
    HAVING = "HAVING",
    HIGH_PRIORITY = "HIGH_PRIORITY",
    HOUR_MICROSECOND = "HOUR_MICROSECOND",
    HOUR_MINUTE = "HOUR_MINUTE",
    HOUR_SECOND = "HOUR_SECOND",
    IF = "IF",
    IGNORE = "IGNORE",
    IN = "IN",
    INDEX = "INDEX",
    INFILE = "INFILE",
    INNER = "INNER",
    INOUT = "INOUT",
    INSENSITIVE = "INSENSITIVE",
    INSERT = "INSERT",
    INT = "INT",
    INT1 = "INT1",
    INT2 = "INT2",
    INT3 = "INT3",
    INT4 = "INT4",
    INT8 = "INT8",
    INTEGER = "INTEGER",
    INTERVAL = "INTERVAL",
    INTO = "INTO",
    IO_AFTER_GTIDS = "IO_AFTER_GTIDS",
    IO_BEFORE_GTIDS = "IO_BEFORE_GTIDS",
    IS = "IS",
    ITERATE = "ITERATE",
    JOIN = "JOIN",
    KEY = "KEY",
    KEYS = "KEYS",
    KILL = "KILL",
    LEADING = "LEADING",
    LEAVE = "LEAVE",
    LEFT = "LEFT",
    LIKE = "LIKE",
    LIMIT = "LIMIT",
    LINEAR = "LINEAR",
    LINES = "LINES",
    LOAD = "LOAD",
    LOCALTIME = "LOCALTIME",
    LOCALTIMESTAMP = "LOCALTIMESTAMP",
    LOCK = "LOCK",
    LONG = "LONG",
    LONGBLOB = "LONGBLOB",
    LONGTEXT = "LONGTEXT",
    LOOP = "LOOP",
    LOW_PRIORITY = "LOW_PRIORITY",
    MASTER_BIND = "MASTER_BIND",
    MASTER_SSL_VERIFY_SERVER_CERT = "MASTER_SSL_VERIFY_SERVER_CERT",
    MATCH = "MATCH",
    MAXVALUE = "MAXVALUE",
    MEDIUMBLOB = "MEDIUMBLOB",
    MEDIUMINT = "MEDIUMINT",
    MEDIUMTEXT = "MEDIUMTEXT",
    MIDDLEINT = "MIDDLEINT",
    MINUTE_MICROSECOND = "MINUTE_MICROSECOND",
    MINUTE_SECOND = "MINUTE_SECOND",
    MOD = "MOD",
    MODIFIES = "MODIFIES",
    NATURAL = "NATURAL",
    NOT = "NOT",
    NO_WRITE_TO_BINLOG = "NO_WRITE_TO_BINLOG",
    NULL = "NULL",
    NUMERIC = "NUMERIC",
    ON = "ON",
    OPTIMIZE = "OPTIMIZE",
    OPTIMIZER_COSTS = "OPTIMIZER_COSTS",
    OPTION = "OPTION",
    OPTIONALLY = "OPTIONALLY",
    OR = "OR",
    ORDER = "ORDER",
    OUT = "OUT",
    OUTER = "OUTER",
    OUTFILE = "OUTFILE",
    PARTITION = "PARTITION",
    PRECISION = "PRECISION",
    PRIMARY = "PRIMARY",
    PROCEDURE = "PROCEDURE",
    PURGE = "PURGE",
    RANGE = "RANGE",
    READ = "READ",
    READS = "READS",
    READ_WRITE = "READ_WRITE",
    REAL = "REAL",
    REFERENCES = "REFERENCES",
    REGEXP = "REGEXP",
    RELEASE = "RELEASE",
    RENAME = "RENAME",
    REPEAT = "REPEAT",
    REPLACE = "REPLACE",
    REQUIRE = "REQUIRE",
    RESIGNAL = "RESIGNAL",
    RESTRICT = "RESTRICT",
    RETURN = "RETURN",
    REVOKE = "REVOKE",
    RIGHT = "RIGHT",
    RLIKE = "RLIKE",
    SCHEMA = "SCHEMA",
    SCHEMAS = "SCHEMAS",
    SECOND_MICROSECOND = "SECOND_MICROSECOND",
    SELECT = "SELECT",
    SENSITIVE = "SENSITIVE",
    SEPARATOR = "SEPARATOR",
    SET = "SET",
    SHOW = "SHOW",
    SIGNAL = "SIGNAL",
    SMALLINT = "SMALLINT",
    SPATIAL = "SPATIAL",
    SPECIFIC = "SPECIFIC",
    SQL = "SQL",
    SQLEXCEPTION = "SQLEXCEPTION",
    SQLSTATE = "SQLSTATE",
    SQLWARNING = "SQLWARNING",
    SQL_BIG_RESULT = "SQL_BIG_RESULT",
    SQL_CALC_FOUND_ROWS = "SQL_CALC_FOUND_ROWS",
    SQL_SMALL_RESULT = "SQL_SMALL_RESULT",
    SSL = "SSL",
    STARTING = "STARTING",
    STORED = "STORED",
    STRAIGHT_JOIN = "STRAIGHT_JOIN",
    TABLE = "TABLE",
    TERMINATED = "TERMINATED",
    THEN = "THEN",
    TINYBLOB = "TINYBLOB",
    TINYINT = "TINYINT",
    TINYTEXT = "TINYTEXT",
    TO = "TO",
    TRAILING = "TRAILING",
    TRIGGER = "TRIGGER",
    TRUE = "TRUE",
    UNDO = "UNDO",
    UNION = "UNION",
    UNIQUE = "UNIQUE",
    UNLOCK = "UNLOCK",
    UNSIGNED = "UNSIGNED",
    UPDATE = "UPDATE",
    USAGE = "USAGE",
    USE = "USE",
    USING = "USING",
    UTC_DATE = "UTC_DATE",
    UTC_TIME = "UTC_TIME",
    UTC_TIMESTAMP = "UTC_TIMESTAMP",
    VALUES = "VALUES",
    VARBINARY = "VARBINARY",
    VARCHAR = "VARCHAR",
    VARCHARACTER = "VARCHARACTER",
    VARYING = "VARYING",
    VIRTUAL = "VIRTUAL",
    WHEN = "WHEN",
    WHERE = "WHERE",
    WHILE = "WHILE",
    WITH = "WITH",
    WRITE = "WRITE",
    XOR = "XOR",
    YEAR_MONTH = "YEAR_MONTH",
    ZEROFILL = "ZEROFILL"
}

export enum NonReservedKeyword {
    ACCOUNT = "ACCOUNT",
    ACTION = "ACTION",
    AFTER = "AFTER",
    AGAINST = "AGAINST",
    AGGREGATE = "AGGREGATE",
    ALGORITHM = "ALGORITHM",
    ALWAYS = "ALWAYS",
    ANALYSE = "ANALYSE",
    ANY = "ANY",
    ASCII = "ASCII",
    AT = "AT",
    AUTOEXTEND_SIZE = "AUTOEXTEND_SIZE",
    AUTO_INCREMENT = "AUTO_INCREMENT",
    AVG = "AVG",
    AVG_ROW_LENGTH = "AVG_ROW_LENGTH",
    BACKUP = "BACKUP",
    BEGIN = "BEGIN",
    BINLOG = "BINLOG",
    BIT = "BIT",
    BLOCK = "BLOCK",
    BOOL = "BOOL",
    BOOLEAN = "BOOLEAN",
    BTREE = "BTREE",
    BYTE = "BYTE",
    CACHE = "CACHE",
    CASCADED = "CASCADED",
    CATALOG_NAME = "CATALOG_NAME",
    CHAIN = "CHAIN",
    CHANGED = "CHANGED",
    CHANNEL = "CHANNEL",
    CHARSET = "CHARSET",
    CHECKSUM = "CHECKSUM",
    CIPHER = "CIPHER",
    CLASS_ORIGIN = "CLASS_ORIGIN",
    CLIENT = "CLIENT",
    CLOSE = "CLOSE",
    COALESCE = "COALESCE",
    CODE = "CODE",
    COLLATION = "COLLATION",
    COLUMNS = "COLUMNS",
    COLUMN_FORMAT = "COLUMN_FORMAT",
    COLUMN_NAME = "COLUMN_NAME",
    COMMENT = "COMMENT",
    COMMIT = "COMMIT",
    COMMITTED = "COMMITTED",
    COMPACT = "COMPACT",
    COMPLETION = "COMPLETION",
    COMPRESSED = "COMPRESSED",
    COMPRESSION = "COMPRESSION",
    CONCURRENT = "CONCURRENT",
    CONNECTION = "CONNECTION",
    CONSISTENT = "CONSISTENT",
    CONSTRAINT_CATALOG = "CONSTRAINT_CATALOG",
    CONSTRAINT_NAME = "CONSTRAINT_NAME",
    CONSTRAINT_SCHEMA = "CONSTRAINT_SCHEMA",
    CONTAINS = "CONTAINS",
    CONTEXT = "CONTEXT",
    CPU = "CPU",
    CUBE = "CUBE",
    CURRENT = "CURRENT",
    CURSOR_NAME = "CURSOR_NAME",
    DATA = "DATA",
    DATAFILE = "DATAFILE",
    DATE = "DATE",
    DATETIME = "DATETIME",
    DAY = "DAY",
    DEALLOCATE = "DEALLOCATE",
    DEFAULT_AUTH = "DEFAULT_AUTH",
    DEFINER = "DEFINER",
    DELAY_KEY_WRITE = "DELAY_KEY_WRITE",
    DES_KEY_FILE = "DES_KEY_FILE",
    DIAGNOSTICS = "DIAGNOSTICS",
    DIRECTORY = "DIRECTORY",
    DISABLE = "DISABLE",
    DISCARD = "DISCARD",
    DISK = "DISK",
    DO = "DO",
    DUMPFILE = "DUMPFILE",
    DUPLICATE = "DUPLICATE",
    DYNAMIC = "DYNAMIC",
    ENABLE = "ENABLE",
    ENCRYPTION = "ENCRYPTION",
    END = "END",
    ENDS = "ENDS",
    ENGINE = "ENGINE",
    ENGINES = "ENGINES",
    ENUM = "ENUM",
    ERROR = "ERROR",
    ERRORS = "ERRORS",
    ESCAPE = "ESCAPE",
    EVENT = "EVENT",
    EVENTS = "EVENTS",
    EVERY = "EVERY",
    EXCHANGE = "EXCHANGE",
    EXECUTE = "EXECUTE",
    EXPANSION = "EXPANSION",
    EXPIRE = "EXPIRE",
    EXPORT = "EXPORT",
    EXTENDED = "EXTENDED",
    EXTENT_SIZE = "EXTENT_SIZE",
    FAST = "FAST",
    FAULTS = "FAULTS",
    FIELDS = "FIELDS",
    FILE = "FILE",
    FILE_BLOCK_SIZE = "FILE_BLOCK_SIZE",
    FILTER = "FILTER",
    FIRST = "FIRST",
    FIXED = "FIXED",
    FLUSH = "FLUSH",
    FOLLOWS = "FOLLOWS",
    FORMAT = "FORMAT",
    FOUND = "FOUND",
    FULL = "FULL",
    FUNCTION = "FUNCTION",
    GENERAL = "GENERAL",
    GEOMETRY = "GEOMETRY",
    GEOMETRYCOLLECTION = "GEOMETRYCOLLECTION",
    GET_FORMAT = "GET_FORMAT",
    GLOBAL = "GLOBAL",
    GRANTS = "GRANTS",
    GROUP_REPLICATION = "GROUP_REPLICATION",
    HANDLER = "HANDLER",
    HASH = "HASH",
    HELP = "HELP",
    HOST = "HOST",
    HOSTS = "HOSTS",
    HOUR = "HOUR",
    IDENTIFIED = "IDENTIFIED",
    IGNORE_SERVER_IDS = "IGNORE_SERVER_IDS",
    IMPORT = "IMPORT",
    INDEXES = "INDEXES",
    INITIAL_SIZE = "INITIAL_SIZE",
    INSERT_METHOD = "INSERT_METHOD",
    INSTALL = "INSTALL",
    INSTANCE = "INSTANCE",
    INVOKER = "INVOKER",
    IO = "IO",
    IO_THREAD = "IO_THREAD",
    IPC = "IPC",
    ISOLATION = "ISOLATION",
    ISSUER = "ISSUER",
    JSON = "JSON",
    KEY_BLOCK_SIZE = "KEY_BLOCK_SIZE",
    LANGUAGE = "LANGUAGE",
    LAST = "LAST",
    LEAVES = "LEAVES",
    LESS = "LESS",
    LEVEL = "LEVEL",
    LINESTRING = "LINESTRING",
    LIST = "LIST",
    LOCAL = "LOCAL",
    LOCKS = "LOCKS",
    LOGFILE = "LOGFILE",
    LOGS = "LOGS",
    MASTER = "MASTER",
    MASTER_AUTO_POSITION = "MASTER_AUTO_POSITION",
    MASTER_CONNECT_RETRY = "MASTER_CONNECT_RETRY",
    MASTER_DELAY = "MASTER_DELAY",
    MASTER_HEARTBEAT_PERIOD = "MASTER_HEARTBEAT_PERIOD",
    MASTER_HOST = "MASTER_HOST",
    MASTER_LOG_FILE = "MASTER_LOG_FILE",
    MASTER_LOG_POS = "MASTER_LOG_POS",
    MASTER_PASSWORD = "MASTER_PASSWORD",
    MASTER_PORT = "MASTER_PORT",
    MASTER_RETRY_COUNT = "MASTER_RETRY_COUNT",
    MASTER_SERVER_ID = "MASTER_SERVER_ID",
    MASTER_SSL = "MASTER_SSL",
    MASTER_SSL_CA = "MASTER_SSL_CA",
    MASTER_SSL_CAPATH = "MASTER_SSL_CAPATH",
    MASTER_SSL_CERT = "MASTER_SSL_CERT",
    MASTER_SSL_CIPHER = "MASTER_SSL_CIPHER",
    MASTER_SSL_CRL = "MASTER_SSL_CRL",
    MASTER_SSL_CRLPATH = "MASTER_SSL_CRLPATH",
    MASTER_SSL_KEY = "MASTER_SSL_KEY",
    MASTER_TLS_VERSION = "MASTER_TLS_VERSION",
    MASTER_USER = "MASTER_USER",
    MAX_CONNECTIONS_PER_HOUR = "MAX_CONNECTIONS_PER_HOUR",
    MAX_QUERIES_PER_HOUR = "MAX_QUERIES_PER_HOUR",
    MAX_ROWS = "MAX_ROWS",
    MAX_SIZE = "MAX_SIZE",
    MAX_STATEMENT_TIME = "MAX_STATEMENT_TIME",
    MAX_UPDATES_PER_HOUR = "MAX_UPDATES_PER_HOUR",
    MAX_USER_CONNECTIONS = "MAX_USER_CONNECTIONS",
    MEDIUM = "MEDIUM",
    MEMORY = "MEMORY",
    MERGE = "MERGE",
    MESSAGE_TEXT = "MESSAGE_TEXT",
    MICROSECOND = "MICROSECOND",
    MIGRATE = "MIGRATE",
    MINUTE = "MINUTE",
    MIN_ROWS = "MIN_ROWS",
    MODE = "MODE",
    MODIFY = "MODIFY",
    MONTH = "MONTH",
    MULTILINESTRING = "MULTILINESTRING",
    MULTIPOINT = "MULTIPOINT",
    MULTIPOLYGON = "MULTIPOLYGON",
    MUTEX = "MUTEX",
    MYSQL_ERRNO = "MYSQL_ERRNO",
    NAME = "NAME",
    NAMES = "NAMES",
    NATIONAL = "NATIONAL",
    NCHAR = "NCHAR",
    NDB = "NDB",
    NDBCLUSTER = "NDBCLUSTER",
    NEVER = "NEVER",
    NEW = "NEW",
    NEXT = "NEXT",
    NO = "NO",
    NODEGROUP = "NODEGROUP",
    NONBLOCKING = "NONBLOCKING",
    NONE = "NONE",
    NO_WAIT = "NO_WAIT",
    NUMBER = "NUMBER",
    NVARCHAR = "NVARCHAR",
    OFFSET = "OFFSET",
    OLD_PASSWORD = "OLD_PASSWORD",
    ONE = "ONE",
    ONLY = "ONLY",
    OPEN = "OPEN",
    OPTIONS = "OPTIONS",
    OWNER = "OWNER",
    PACK_KEYS = "PACK_KEYS",
    PAGE = "PAGE",
    PARSER = "PARSER",
    PARSE_GCOL_EXPR = "PARSE_GCOL_EXPR",
    PARTIAL = "PARTIAL",
    PARTITIONING = "PARTITIONING",
    PARTITIONS = "PARTITIONS",
    PASSWORD = "PASSWORD",
    PHASE = "PHASE",
    PLUGIN = "PLUGIN",
    PLUGINS = "PLUGINS",
    PLUGIN_DIR = "PLUGIN_DIR",
    POINT = "POINT",
    POLYGON = "POLYGON",
    PORT = "PORT",
    PRECEDES = "PRECEDES",
    PREPARE = "PREPARE",
    PRESERVE = "PRESERVE",
    PREV = "PREV",
    PRIVILEGES = "PRIVILEGES",
    PROCESSLIST = "PROCESSLIST",
    PROFILE = "PROFILE",
    PROFILES = "PROFILES",
    PROXY = "PROXY",
    QUARTER = "QUARTER",
    QUERY = "QUERY",
    QUICK = "QUICK",
    READ_ONLY = "READ_ONLY",
    REBUILD = "REBUILD",
    RECOVER = "RECOVER",
    REDOFILE = "REDOFILE",
    REDO_BUFFER_SIZE = "REDO_BUFFER_SIZE",
    REDUNDANT = "REDUNDANT",
    RELAY = "RELAY",
    RELAYLOG = "RELAYLOG",
    RELAY_LOG_FILE = "RELAY_LOG_FILE",
    RELAY_LOG_POS = "RELAY_LOG_POS",
    RELAY_THREAD = "RELAY_THREAD",
    RELOAD = "RELOAD",
    REMOVE = "REMOVE",
    REORGANIZE = "REORGANIZE",
    REPAIR = "REPAIR",
    REPEATABLE = "REPEATABLE",
    REPLICATE_DO_DB = "REPLICATE_DO_DB",
    REPLICATE_DO_TABLE = "REPLICATE_DO_TABLE",
    REPLICATE_IGNORE_DB = "REPLICATE_IGNORE_DB",
    REPLICATE_IGNORE_TABLE = "REPLICATE_IGNORE_TABLE",
    REPLICATE_REWRITE_DB = "REPLICATE_REWRITE_DB",
    REPLICATE_WILD_DO_TABLE = "REPLICATE_WILD_DO_TABLE",
    REPLICATE_WILD_IGNORE_TABLE = "REPLICATE_WILD_IGNORE_TABLE",
    REPLICATION = "REPLICATION",
    RESET = "RESET",
    RESTORE = "RESTORE",
    RESUME = "RESUME",
    RETURNED_SQLSTATE = "RETURNED_SQLSTATE",
    RETURNS = "RETURNS",
    REVERSE = "REVERSE",
    ROLLBACK = "ROLLBACK",
    ROLLUP = "ROLLUP",
    ROTATE = "ROTATE",
    ROUTINE = "ROUTINE",
    ROW = "ROW",
    ROWS = "ROWS",
    ROW_COUNT = "ROW_COUNT",
    ROW_FORMAT = "ROW_FORMAT",
    RTREE = "RTREE",
    SAVEPOINT = "SAVEPOINT",
    SCHEDULE = "SCHEDULE",
    SCHEMA_NAME = "SCHEMA_NAME",
    SECOND = "SECOND",
    SECURITY = "SECURITY",
    SERIAL = "SERIAL",
    SERIALIZABLE = "SERIALIZABLE",
    SERVER = "SERVER",
    SESSION = "SESSION",
    SHARE = "SHARE",
    SHUTDOWN = "SHUTDOWN",
    SIGNED = "SIGNED",
    SIMPLE = "SIMPLE",
    SLAVE = "SLAVE",
    SLOW = "SLOW",
    SNAPSHOT = "SNAPSHOT",
    SOCKET = "SOCKET",
    SOME = "SOME",
    SONAME = "SONAME",
    SOUNDS = "SOUNDS",
    SOURCE = "SOURCE",
    SQL_AFTER_GTIDS = "SQL_AFTER_GTIDS",
    SQL_AFTER_MTS_GAPS = "SQL_AFTER_MTS_GAPS",
    SQL_BEFORE_GTIDS = "SQL_BEFORE_GTIDS",
    SQL_BUFFER_RESULT = "SQL_BUFFER_RESULT",
    SQL_CACHE = "SQL_CACHE",
    SQL_NO_CACHE = "SQL_NO_CACHE",
    SQL_THREAD = "SQL_THREAD",
    SQL_TSI_DAY = "SQL_TSI_DAY",
    SQL_TSI_HOUR = "SQL_TSI_HOUR",
    SQL_TSI_MINUTE = "SQL_TSI_MINUTE",
    SQL_TSI_MONTH = "SQL_TSI_MONTH",
    SQL_TSI_QUARTER = "SQL_TSI_QUARTER",
    SQL_TSI_SECOND = "SQL_TSI_SECOND",
    SQL_TSI_WEEK = "SQL_TSI_WEEK",
    SQL_TSI_YEAR = "SQL_TSI_YEAR",
    STACKED = "STACKED",
    START = "START",
    STARTS = "STARTS",
    STATS_AUTO_RECALC = "STATS_AUTO_RECALC",
    STATS_PERSISTENT = "STATS_PERSISTENT",
    STATS_SAMPLE_PAGES = "STATS_SAMPLE_PAGES",
    STATUS = "STATUS",
    STOP = "STOP",
    STORAGE = "STORAGE",
    STRING = "STRING",
    SUBCLASS_ORIGIN = "SUBCLASS_ORIGIN",
    SUBJECT = "SUBJECT",
    SUBPARTITION = "SUBPARTITION",
    SUBPARTITIONS = "SUBPARTITIONS",
    SUPER = "SUPER",
    SUSPEND = "SUSPEND",
    SWAPS = "SWAPS",
    SWITCHES = "SWITCHES",
    TABLES = "TABLES",
    TABLESPACE = "TABLESPACE",
    TABLE_CHECKSUM = "TABLE_CHECKSUM",
    TABLE_NAME = "TABLE_NAME",
    TEMPORARY = "TEMPORARY",
    TEMPTABLE = "TEMPTABLE",
    TEXT = "TEXT",
    THAN = "THAN",
    TIME = "TIME",
    TIMESTAMP = "TIMESTAMP",
    TIMESTAMPADD = "TIMESTAMPADD",
    TIMESTAMPDIFF = "TIMESTAMPDIFF",
    TRANSACTION = "TRANSACTION",
    TRIGGERS = "TRIGGERS",
    TRUNCATE = "TRUNCATE",
    TYPE = "TYPE",
    TYPES = "TYPES",
    UNCOMMITTED = "UNCOMMITTED",
    UNDEFINED = "UNDEFINED",
    UNDOFILE = "UNDOFILE",
    UNDO_BUFFER_SIZE = "UNDO_BUFFER_SIZE",
    UNICODE = "UNICODE",
    UNINSTALL = "UNINSTALL",
    UNKNOWN = "UNKNOWN",
    UNTIL = "UNTIL",
    UPGRADE = "UPGRADE",
    USER = "USER",
    USER_RESOURCES = "USER_RESOURCES",
    USE_FRM = "USE_FRM",
    VALIDATION = "VALIDATION",
    VALUE = "VALUE",
    VARIABLES = "VARIABLES",
    VIEW = "VIEW",
    WAIT = "WAIT",
    WARNINGS = "WARNINGS",
    WEEK = "WEEK",
    WEIGHT_STRING = "WEIGHT_STRING",
    WITHOUT = "WITHOUT",
    WORK = "WORK",
    WRAPPER = "WRAPPER",
    X509 = "X509",
    XA = "XA",
    XID = "XID",
    XML = "XML",
    YEAR = "YEAR",
    PROCESS = "PROCESS"
}

export enum Extras {
    WhiteSpace = "WhiteSpace",
    SingleLineComment = "SingleLineComment",
    MultiLineComment = "MultiLineComment",
    ExecutionComment = "ExecutionComment",
    LineBreak = "LineBreak"
}
