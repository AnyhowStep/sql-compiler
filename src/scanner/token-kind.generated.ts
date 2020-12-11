export enum TokenKind {
    ACCESSIBLE = 0,
    ADD = 1,
    ALL = 2,
    ALTER = 3,
    ANALYZE = 4,
    AND = 5,
    AS = 6,
    ASC = 7,
    ASENSITIVE = 8,
    BEFORE = 9,
    BETWEEN = 10,
    BIGINT = 11,
    BINARY = 12,
    BLOB = 13,
    BOTH = 14,
    BY = 15,
    CALL = 16,
    CASCADE = 17,
    CASE = 18,
    CHANGE = 19,
    CHAR = 20,
    CHARACTER = 21,
    CHECK = 22,
    COLLATE = 23,
    COLUMN = 24,
    CONDITION = 25,
    CONSTRAINT = 26,
    CONTINUE = 27,
    CONVERT = 28,
    CREATE = 29,
    CROSS = 30,
    CURRENT_DATE = 31,
    CURRENT_TIME = 32,
    CURRENT_TIMESTAMP = 33,
    CURRENT_USER = 34,
    CURSOR = 35,
    DATABASE = 36,
    DATABASES = 37,
    DAY_HOUR = 38,
    DAY_MICROSECOND = 39,
    DAY_MINUTE = 40,
    DAY_SECOND = 41,
    DEC = 42,
    DECIMAL = 43,
    DECLARE = 44,
    DEFAULT = 45,
    DELAYED = 46,
    DELETE = 47,
    DESC = 48,
    DESCRIBE = 49,
    DETERMINISTIC = 50,
    DISTINCT = 51,
    DISTINCTROW = 52,
    DIV = 53,
    DOUBLE = 54,
    DROP = 55,
    DUAL = 56,
    EACH = 57,
    ELSE = 58,
    ELSEIF = 59,
    ENCLOSED = 60,
    ESCAPED = 61,
    EXISTS = 62,
    EXIT = 63,
    EXPLAIN = 64,
    FALSE = 65,
    FETCH = 66,
    FLOAT = 67,
    FLOAT4 = 68,
    FLOAT8 = 69,
    FOR = 70,
    FORCE = 71,
    FOREIGN = 72,
    FROM = 73,
    FULLTEXT = 74,
    GENERATED = 75,
    GET = 76,
    GRANT = 77,
    GROUP = 78,
    HAVING = 79,
    HIGH_PRIORITY = 80,
    HOUR_MICROSECOND = 81,
    HOUR_MINUTE = 82,
    HOUR_SECOND = 83,
    IF = 84,
    IGNORE = 85,
    IN = 86,
    INDEX = 87,
    INFILE = 88,
    INNER = 89,
    INOUT = 90,
    INSENSITIVE = 91,
    INSERT = 92,
    INT = 93,
    INT1 = 94,
    INT2 = 95,
    INT3 = 96,
    INT4 = 97,
    INT8 = 98,
    INTEGER = 99,
    INTERVAL = 100,
    INTO = 101,
    IO_AFTER_GTIDS = 102,
    IO_BEFORE_GTIDS = 103,
    IS = 104,
    ITERATE = 105,
    JOIN = 106,
    KEY = 107,
    KEYS = 108,
    KILL = 109,
    LEADING = 110,
    LEAVE = 111,
    LEFT = 112,
    LIKE = 113,
    LIMIT = 114,
    LINEAR = 115,
    LINES = 116,
    LOAD = 117,
    LOCALTIME = 118,
    LOCALTIMESTAMP = 119,
    LOCK = 120,
    LONG = 121,
    LONGBLOB = 122,
    LONGTEXT = 123,
    LOOP = 124,
    LOW_PRIORITY = 125,
    MASTER_BIND = 126,
    MASTER_SSL_VERIFY_SERVER_CERT = 127,
    MATCH = 128,
    MAXVALUE = 129,
    MEDIUMBLOB = 130,
    MEDIUMINT = 131,
    MEDIUMTEXT = 132,
    MIDDLEINT = 133,
    MINUTE_MICROSECOND = 134,
    MINUTE_SECOND = 135,
    MOD = 136,
    MODIFIES = 137,
    NATURAL = 138,
    NOT = 139,
    NO_WRITE_TO_BINLOG = 140,
    NULL = 141,
    NUMERIC = 142,
    ON = 143,
    OPTIMIZE = 144,
    OPTIMIZER_COSTS = 145,
    OPTION = 146,
    OPTIONALLY = 147,
    OR = 148,
    ORDER = 149,
    OUT = 150,
    OUTER = 151,
    OUTFILE = 152,
    PARTITION = 153,
    PRECISION = 154,
    PRIMARY = 155,
    PROCEDURE = 156,
    PURGE = 157,
    RANGE = 158,
    READ = 159,
    READS = 160,
    READ_WRITE = 161,
    REAL = 162,
    REFERENCES = 163,
    REGEXP = 164,
    RELEASE = 165,
    RENAME = 166,
    REPEAT = 167,
    REPLACE = 168,
    REQUIRE = 169,
    RESIGNAL = 170,
    RESTRICT = 171,
    RETURN = 172,
    REVOKE = 173,
    RIGHT = 174,
    RLIKE = 175,
    SCHEMA = 176,
    SCHEMAS = 177,
    SECOND_MICROSECOND = 178,
    SELECT = 179,
    SENSITIVE = 180,
    SEPARATOR = 181,
    SET = 182,
    SHOW = 183,
    SIGNAL = 184,
    SMALLINT = 185,
    SPATIAL = 186,
    SPECIFIC = 187,
    SQL = 188,
    SQLEXCEPTION = 189,
    SQLSTATE = 190,
    SQLWARNING = 191,
    SQL_BIG_RESULT = 192,
    SQL_CALC_FOUND_ROWS = 193,
    SQL_SMALL_RESULT = 194,
    SSL = 195,
    STARTING = 196,
    STORED = 197,
    STRAIGHT_JOIN = 198,
    TABLE = 199,
    TERMINATED = 200,
    THEN = 201,
    TINYBLOB = 202,
    TINYINT = 203,
    TINYTEXT = 204,
    TO = 205,
    TRAILING = 206,
    TRIGGER = 207,
    TRUE = 208,
    UNDO = 209,
    UNION = 210,
    UNIQUE = 211,
    UNLOCK = 212,
    UNSIGNED = 213,
    UPDATE = 214,
    USAGE = 215,
    USE = 216,
    USING = 217,
    UTC_DATE = 218,
    UTC_TIME = 219,
    UTC_TIMESTAMP = 220,
    VALUES = 221,
    VARBINARY = 222,
    VARCHAR = 223,
    VARCHARACTER = 224,
    VARYING = 225,
    VIRTUAL = 226,
    WHEN = 227,
    WHERE = 228,
    WHILE = 229,
    WITH = 230,
    WRITE = 231,
    XOR = 232,
    YEAR_MONTH = 233,
    ZEROFILL = 234,
    END_OF_RESERVED_KEYWORD = 235,
    ACCOUNT = 236,
    ACTION = 237,
    AFTER = 238,
    AGAINST = 239,
    AGGREGATE = 240,
    ALGORITHM = 241,
    ALWAYS = 242,
    ANALYSE = 243,
    ANY = 244,
    ASCII = 245,
    AT = 246,
    AUTOEXTEND_SIZE = 247,
    AUTO_INCREMENT = 248,
    AVG = 249,
    AVG_ROW_LENGTH = 250,
    BACKUP = 251,
    BEGIN = 252,
    BINLOG = 253,
    BIT = 254,
    BLOCK = 255,
    BOOL = 256,
    BOOLEAN = 257,
    BTREE = 258,
    BYTE = 259,
    CACHE = 260,
    CASCADED = 261,
    CATALOG_NAME = 262,
    CHAIN = 263,
    CHANGED = 264,
    CHANNEL = 265,
    CHARSET = 266,
    CHECKSUM = 267,
    CIPHER = 268,
    CLASS_ORIGIN = 269,
    CLIENT = 270,
    CLOSE = 271,
    COALESCE = 272,
    CODE = 273,
    COLLATION = 274,
    COLUMNS = 275,
    COLUMN_FORMAT = 276,
    COLUMN_NAME = 277,
    COMMENT = 278,
    COMMIT = 279,
    COMMITTED = 280,
    COMPACT = 281,
    COMPLETION = 282,
    COMPRESSED = 283,
    COMPRESSION = 284,
    CONCURRENT = 285,
    CONNECTION = 286,
    CONSISTENT = 287,
    CONSTRAINT_CATALOG = 288,
    CONSTRAINT_NAME = 289,
    CONSTRAINT_SCHEMA = 290,
    CONTAINS = 291,
    CONTEXT = 292,
    CPU = 293,
    CUBE = 294,
    CURRENT = 295,
    CURSOR_NAME = 296,
    DATA = 297,
    DATAFILE = 298,
    DATE = 299,
    DATETIME = 300,
    DAY = 301,
    DEALLOCATE = 302,
    DEFAULT_AUTH = 303,
    DEFINER = 304,
    DELAY_KEY_WRITE = 305,
    DES_KEY_FILE = 306,
    DIAGNOSTICS = 307,
    DIRECTORY = 308,
    DISABLE = 309,
    DISCARD = 310,
    DISK = 311,
    DO = 312,
    DUMPFILE = 313,
    DUPLICATE = 314,
    DYNAMIC = 315,
    ENABLE = 316,
    ENCRYPTION = 317,
    END = 318,
    ENDS = 319,
    ENGINE = 320,
    ENGINES = 321,
    ENUM = 322,
    ERROR = 323,
    ERRORS = 324,
    ESCAPE = 325,
    EVENT = 326,
    EVENTS = 327,
    EVERY = 328,
    EXCHANGE = 329,
    EXECUTE = 330,
    EXPANSION = 331,
    EXPIRE = 332,
    EXPORT = 333,
    EXTENDED = 334,
    EXTENT_SIZE = 335,
    FAST = 336,
    FAULTS = 337,
    FIELDS = 338,
    FILE = 339,
    FILE_BLOCK_SIZE = 340,
    FILTER = 341,
    FIRST = 342,
    FIXED = 343,
    FLUSH = 344,
    FOLLOWS = 345,
    FORMAT = 346,
    FOUND = 347,
    FULL = 348,
    FUNCTION = 349,
    GENERAL = 350,
    GEOMETRY = 351,
    GEOMETRYCOLLECTION = 352,
    GET_FORMAT = 353,
    GLOBAL = 354,
    GRANTS = 355,
    GROUP_REPLICATION = 356,
    HANDLER = 357,
    HASH = 358,
    HELP = 359,
    HOST = 360,
    HOSTS = 361,
    HOUR = 362,
    IDENTIFIED = 363,
    IGNORE_SERVER_IDS = 364,
    IMPORT = 365,
    INDEXES = 366,
    INITIAL_SIZE = 367,
    INSERT_METHOD = 368,
    INSTALL = 369,
    INSTANCE = 370,
    INVOKER = 371,
    IO = 372,
    IO_THREAD = 373,
    IPC = 374,
    ISOLATION = 375,
    ISSUER = 376,
    JSON = 377,
    KEY_BLOCK_SIZE = 378,
    LANGUAGE = 379,
    LAST = 380,
    LEAVES = 381,
    LESS = 382,
    LEVEL = 383,
    LINESTRING = 384,
    LIST = 385,
    LOCAL = 386,
    LOCKS = 387,
    LOGFILE = 388,
    LOGS = 389,
    MASTER = 390,
    MASTER_AUTO_POSITION = 391,
    MASTER_CONNECT_RETRY = 392,
    MASTER_DELAY = 393,
    MASTER_HEARTBEAT_PERIOD = 394,
    MASTER_HOST = 395,
    MASTER_LOG_FILE = 396,
    MASTER_LOG_POS = 397,
    MASTER_PASSWORD = 398,
    MASTER_PORT = 399,
    MASTER_RETRY_COUNT = 400,
    MASTER_SERVER_ID = 401,
    MASTER_SSL = 402,
    MASTER_SSL_CA = 403,
    MASTER_SSL_CAPATH = 404,
    MASTER_SSL_CERT = 405,
    MASTER_SSL_CIPHER = 406,
    MASTER_SSL_CRL = 407,
    MASTER_SSL_CRLPATH = 408,
    MASTER_SSL_KEY = 409,
    MASTER_TLS_VERSION = 410,
    MASTER_USER = 411,
    MAX_CONNECTIONS_PER_HOUR = 412,
    MAX_QUERIES_PER_HOUR = 413,
    MAX_ROWS = 414,
    MAX_SIZE = 415,
    MAX_STATEMENT_TIME = 416,
    MAX_UPDATES_PER_HOUR = 417,
    MAX_USER_CONNECTIONS = 418,
    MEDIUM = 419,
    MEMORY = 420,
    MERGE = 421,
    MESSAGE_TEXT = 422,
    MICROSECOND = 423,
    MIGRATE = 424,
    MINUTE = 425,
    MIN_ROWS = 426,
    MODE = 427,
    MODIFY = 428,
    MONTH = 429,
    MULTILINESTRING = 430,
    MULTIPOINT = 431,
    MULTIPOLYGON = 432,
    MUTEX = 433,
    MYSQL_ERRNO = 434,
    NAME = 435,
    NAMES = 436,
    NATIONAL = 437,
    NCHAR = 438,
    NDB = 439,
    NDBCLUSTER = 440,
    NEVER = 441,
    NEW = 442,
    NEXT = 443,
    NO = 444,
    NODEGROUP = 445,
    NONBLOCKING = 446,
    NONE = 447,
    NO_WAIT = 448,
    NUMBER = 449,
    NVARCHAR = 450,
    OFFSET = 451,
    OLD_PASSWORD = 452,
    ONE = 453,
    ONLY = 454,
    OPEN = 455,
    OPTIONS = 456,
    OWNER = 457,
    PACK_KEYS = 458,
    PAGE = 459,
    PARSER = 460,
    PARSE_GCOL_EXPR = 461,
    PARTIAL = 462,
    PARTITIONING = 463,
    PARTITIONS = 464,
    PASSWORD = 465,
    PHASE = 466,
    PLUGIN = 467,
    PLUGINS = 468,
    PLUGIN_DIR = 469,
    POINT = 470,
    POLYGON = 471,
    PORT = 472,
    PRECEDES = 473,
    PREPARE = 474,
    PRESERVE = 475,
    PREV = 476,
    PRIVILEGES = 477,
    PROCESSLIST = 478,
    PROFILE = 479,
    PROFILES = 480,
    PROXY = 481,
    QUARTER = 482,
    QUERY = 483,
    QUICK = 484,
    READ_ONLY = 485,
    REBUILD = 486,
    RECOVER = 487,
    REDOFILE = 488,
    REDO_BUFFER_SIZE = 489,
    REDUNDANT = 490,
    RELAY = 491,
    RELAYLOG = 492,
    RELAY_LOG_FILE = 493,
    RELAY_LOG_POS = 494,
    RELAY_THREAD = 495,
    RELOAD = 496,
    REMOVE = 497,
    REORGANIZE = 498,
    REPAIR = 499,
    REPEATABLE = 500,
    REPLICATE_DO_DB = 501,
    REPLICATE_DO_TABLE = 502,
    REPLICATE_IGNORE_DB = 503,
    REPLICATE_IGNORE_TABLE = 504,
    REPLICATE_REWRITE_DB = 505,
    REPLICATE_WILD_DO_TABLE = 506,
    REPLICATE_WILD_IGNORE_TABLE = 507,
    REPLICATION = 508,
    RESET = 509,
    RESTORE = 510,
    RESUME = 511,
    RETURNED_SQLSTATE = 512,
    RETURNS = 513,
    REVERSE = 514,
    ROLLBACK = 515,
    ROLLUP = 516,
    ROTATE = 517,
    ROUTINE = 518,
    ROW = 519,
    ROWS = 520,
    ROW_COUNT = 521,
    ROW_FORMAT = 522,
    RTREE = 523,
    SAVEPOINT = 524,
    SCHEDULE = 525,
    SCHEMA_NAME = 526,
    SECOND = 527,
    SECURITY = 528,
    SERIAL = 529,
    SERIALIZABLE = 530,
    SERVER = 531,
    SESSION = 532,
    SHARE = 533,
    SHUTDOWN = 534,
    SIGNED = 535,
    SIMPLE = 536,
    SLAVE = 537,
    SLOW = 538,
    SNAPSHOT = 539,
    SOCKET = 540,
    SOME = 541,
    SONAME = 542,
    SOUNDS = 543,
    SOURCE = 544,
    SQL_AFTER_GTIDS = 545,
    SQL_AFTER_MTS_GAPS = 546,
    SQL_BEFORE_GTIDS = 547,
    SQL_BUFFER_RESULT = 548,
    SQL_CACHE = 549,
    SQL_NO_CACHE = 550,
    SQL_THREAD = 551,
    SQL_TSI_DAY = 552,
    SQL_TSI_HOUR = 553,
    SQL_TSI_MINUTE = 554,
    SQL_TSI_MONTH = 555,
    SQL_TSI_QUARTER = 556,
    SQL_TSI_SECOND = 557,
    SQL_TSI_WEEK = 558,
    SQL_TSI_YEAR = 559,
    STACKED = 560,
    START = 561,
    STARTS = 562,
    STATS_AUTO_RECALC = 563,
    STATS_PERSISTENT = 564,
    STATS_SAMPLE_PAGES = 565,
    STATUS = 566,
    STOP = 567,
    STORAGE = 568,
    STRING = 569,
    SUBCLASS_ORIGIN = 570,
    SUBJECT = 571,
    SUBPARTITION = 572,
    SUBPARTITIONS = 573,
    SUPER = 574,
    SUSPEND = 575,
    SWAPS = 576,
    SWITCHES = 577,
    TABLES = 578,
    TABLESPACE = 579,
    TABLE_CHECKSUM = 580,
    TABLE_NAME = 581,
    TEMPORARY = 582,
    TEMPTABLE = 583,
    TEXT = 584,
    THAN = 585,
    TIME = 586,
    TIMESTAMP = 587,
    TIMESTAMPADD = 588,
    TIMESTAMPDIFF = 589,
    TRANSACTION = 590,
    TRIGGERS = 591,
    TRUNCATE = 592,
    TYPE = 593,
    TYPES = 594,
    UNCOMMITTED = 595,
    UNDEFINED = 596,
    UNDOFILE = 597,
    UNDO_BUFFER_SIZE = 598,
    UNICODE = 599,
    UNINSTALL = 600,
    UNKNOWN = 601,
    UNTIL = 602,
    UPGRADE = 603,
    USER = 604,
    USER_RESOURCES = 605,
    USE_FRM = 606,
    VALIDATION = 607,
    VALUE = 608,
    VARIABLES = 609,
    VIEW = 610,
    WAIT = 611,
    WARNINGS = 612,
    WEEK = 613,
    WEIGHT_STRING = 614,
    WITHOUT = 615,
    WORK = 616,
    WRAPPER = 617,
    X509 = 618,
    XA = 619,
    XID = 620,
    XML = 621,
    YEAR = 622,
    END_OF_NON_RESERVED_KEYWORD = 623,
    EndOfFile = 624,
    UnknownToken = 625,
    CustomDelimiter = 626,
    StringLiteral = 627,
    HexLiteral = 628,
    BitLiteral = 629,
    IntegerLiteral = 630,
    DecimalLiteral = 631,
    RealLiteral = 632,
    Identifier = 633,
    UserVariableIdentifier = 634,
    MacroIdentifier = 635,
    Plus = 636,
    Minus = 637,
    Asterisk = 638,
    Percent = 639,
    Slash = 640,
    Dot = 641,
    SemiColon = 642,
    Comma = 643,
    Pound = 644,
    OpenParenthesesPound = 645,
    PoundCloseParentheses = 646,
    Backslash = 647,
    QuestionMark = 648,
    ColonEqual = 649,
    AtAt = 650,
    AtAtGlobalDot = 651,
    AtAtSessionDot = 652,
    Tilde = 653,
    Caret = 654,
    Bar = 655,
    Equal = 656,
    LessEqualGreater = 657,
    GreaterEqual = 658,
    Greater = 659,
    LessEqual = 660,
    Less = 661,
    LessGreater = 662,
    LessLess = 663,
    GreaterGreater = 664,
    OpenParentheses = 665,
    CloseParentheses = 666,
    OpenBrace = 667,
    CloseBrace = 668,
    DELIMITER_STATEMENT = 669,
    UNIQUE_KEY = 670,
}

/**
 * https://dev.mysql.com/doc/refman/5.7/en/keywords.html
 */
export const nonReservedKeywords = [
    "ACCOUNT",
    "ACTION",
    "AFTER",
    "AGAINST",
    "AGGREGATE",
    "ALGORITHM",
    "ALWAYS",
    "ANALYSE",
    "ANY",
    "ASCII",
    "AT",
    "AUTOEXTEND_SIZE",
    "AUTO_INCREMENT",
    "AVG",
    "AVG_ROW_LENGTH",
    "BACKUP",
    "BEGIN",
    "BINLOG",
    "BIT",
    "BLOCK",
    "BOOL",
    "BOOLEAN",
    "BTREE",
    "BYTE",
    "CACHE",
    "CASCADED",
    "CATALOG_NAME",
    "CHAIN",
    "CHANGED",
    "CHANNEL",
    "CHARSET",
    "CHECKSUM",
    "CIPHER",
    "CLASS_ORIGIN",
    "CLIENT",
    "CLOSE",
    "COALESCE",
    "CODE",
    "COLLATION",
    "COLUMNS",
    "COLUMN_FORMAT",
    "COLUMN_NAME",
    "COMMENT",
    "COMMIT",
    "COMMITTED",
    "COMPACT",
    "COMPLETION",
    "COMPRESSED",
    "COMPRESSION",
    "CONCURRENT",
    "CONNECTION",
    "CONSISTENT",
    "CONSTRAINT_CATALOG",
    "CONSTRAINT_NAME",
    "CONSTRAINT_SCHEMA",
    "CONTAINS",
    "CONTEXT",
    "CPU",
    "CUBE",
    "CURRENT",
    "CURSOR_NAME",
    "DATA",
    "DATAFILE",
    "DATE",
    "DATETIME",
    "DAY",
    "DEALLOCATE",
    "DEFAULT_AUTH",
    "DEFINER",
    "DELAY_KEY_WRITE",
    "DES_KEY_FILE",
    "DIAGNOSTICS",
    "DIRECTORY",
    "DISABLE",
    "DISCARD",
    "DISK",
    "DO",
    "DUMPFILE",
    "DUPLICATE",
    "DYNAMIC",
    "ENABLE",
    "ENCRYPTION",
    "END",
    "ENDS",
    "ENGINE",
    "ENGINES",
    "ENUM",
    "ERROR",
    "ERRORS",
    "ESCAPE",
    "EVENT",
    "EVENTS",
    "EVERY",
    "EXCHANGE",
    "EXECUTE",
    "EXPANSION",
    "EXPIRE",
    "EXPORT",
    "EXTENDED",
    "EXTENT_SIZE",
    "FAST",
    "FAULTS",
    "FIELDS",
    "FILE",
    "FILE_BLOCK_SIZE",
    "FILTER",
    "FIRST",
    "FIXED",
    "FLUSH",
    "FOLLOWS",
    "FORMAT",
    "FOUND",
    "FULL",
    "FUNCTION",
    "GENERAL",
    "GEOMETRY",
    "GEOMETRYCOLLECTION",
    "GET_FORMAT",
    "GLOBAL",
    "GRANTS",
    "GROUP_REPLICATION",
    "HANDLER",
    "HASH",
    "HELP",
    "HOST",
    "HOSTS",
    "HOUR",
    "IDENTIFIED",
    "IGNORE_SERVER_IDS",
    "IMPORT",
    "INDEXES",
    "INITIAL_SIZE",
    "INSERT_METHOD",
    "INSTALL",
    "INSTANCE",
    "INVOKER",
    "IO",
    "IO_THREAD",
    "IPC",
    "ISOLATION",
    "ISSUER",
    "JSON",
    "KEY_BLOCK_SIZE",
    "LANGUAGE",
    "LAST",
    "LEAVES",
    "LESS",
    "LEVEL",
    "LINESTRING",
    "LIST",
    "LOCAL",
    "LOCKS",
    "LOGFILE",
    "LOGS",
    "MASTER",
    "MASTER_AUTO_POSITION",
    "MASTER_CONNECT_RETRY",
    "MASTER_DELAY",
    "MASTER_HEARTBEAT_PERIOD",
    "MASTER_HOST",
    "MASTER_LOG_FILE",
    "MASTER_LOG_POS",
    "MASTER_PASSWORD",
    "MASTER_PORT",
    "MASTER_RETRY_COUNT",
    "MASTER_SERVER_ID",
    "MASTER_SSL",
    "MASTER_SSL_CA",
    "MASTER_SSL_CAPATH",
    "MASTER_SSL_CERT",
    "MASTER_SSL_CIPHER",
    "MASTER_SSL_CRL",
    "MASTER_SSL_CRLPATH",
    "MASTER_SSL_KEY",
    "MASTER_TLS_VERSION",
    "MASTER_USER",
    "MAX_CONNECTIONS_PER_HOUR",
    "MAX_QUERIES_PER_HOUR",
    "MAX_ROWS",
    "MAX_SIZE",
    "MAX_STATEMENT_TIME",
    "MAX_UPDATES_PER_HOUR",
    "MAX_USER_CONNECTIONS",
    "MEDIUM",
    "MEMORY",
    "MERGE",
    "MESSAGE_TEXT",
    "MICROSECOND",
    "MIGRATE",
    "MINUTE",
    "MIN_ROWS",
    "MODE",
    "MODIFY",
    "MONTH",
    "MULTILINESTRING",
    "MULTIPOINT",
    "MULTIPOLYGON",
    "MUTEX",
    "MYSQL_ERRNO",
    "NAME",
    "NAMES",
    "NATIONAL",
    "NCHAR",
    "NDB",
    "NDBCLUSTER",
    "NEVER",
    "NEW",
    "NEXT",
    "NO",
    "NODEGROUP",
    "NONBLOCKING",
    "NONE",
    "NO_WAIT",
    "NUMBER",
    "NVARCHAR",
    "OFFSET",
    "OLD_PASSWORD",
    "ONE",
    "ONLY",
    "OPEN",
    "OPTIONS",
    "OWNER",
    "PACK_KEYS",
    "PAGE",
    "PARSER",
    "PARSE_GCOL_EXPR",
    "PARTIAL",
    "PARTITIONING",
    "PARTITIONS",
    "PASSWORD",
    "PHASE",
    "PLUGIN",
    "PLUGINS",
    "PLUGIN_DIR",
    "POINT",
    "POLYGON",
    "PORT",
    "PRECEDES",
    "PREPARE",
    "PRESERVE",
    "PREV",
    "PRIVILEGES",
    "PROCESSLIST",
    "PROFILE",
    "PROFILES",
    "PROXY",
    "QUARTER",
    "QUERY",
    "QUICK",
    "READ_ONLY",
    "REBUILD",
    "RECOVER",
    "REDOFILE",
    "REDO_BUFFER_SIZE",
    "REDUNDANT",
    "RELAY",
    "RELAYLOG",
    "RELAY_LOG_FILE",
    "RELAY_LOG_POS",
    "RELAY_THREAD",
    "RELOAD",
    "REMOVE",
    "REORGANIZE",
    "REPAIR",
    "REPEATABLE",
    "REPLICATE_DO_DB",
    "REPLICATE_DO_TABLE",
    "REPLICATE_IGNORE_DB",
    "REPLICATE_IGNORE_TABLE",
    "REPLICATE_REWRITE_DB",
    "REPLICATE_WILD_DO_TABLE",
    "REPLICATE_WILD_IGNORE_TABLE",
    "REPLICATION",
    "RESET",
    "RESTORE",
    "RESUME",
    "RETURNED_SQLSTATE",
    "RETURNS",
    "REVERSE",
    "ROLLBACK",
    "ROLLUP",
    "ROTATE",
    "ROUTINE",
    "ROW",
    "ROWS",
    "ROW_COUNT",
    "ROW_FORMAT",
    "RTREE",
    "SAVEPOINT",
    "SCHEDULE",
    "SCHEMA_NAME",
    "SECOND",
    "SECURITY",
    "SERIAL",
    "SERIALIZABLE",
    "SERVER",
    "SESSION",
    "SHARE",
    "SHUTDOWN",
    "SIGNED",
    "SIMPLE",
    "SLAVE",
    "SLOW",
    "SNAPSHOT",
    "SOCKET",
    "SOME",
    "SONAME",
    "SOUNDS",
    "SOURCE",
    "SQL_AFTER_GTIDS",
    "SQL_AFTER_MTS_GAPS",
    "SQL_BEFORE_GTIDS",
    "SQL_BUFFER_RESULT",
    "SQL_CACHE",
    "SQL_NO_CACHE",
    "SQL_THREAD",
    "SQL_TSI_DAY",
    "SQL_TSI_HOUR",
    "SQL_TSI_MINUTE",
    "SQL_TSI_MONTH",
    "SQL_TSI_QUARTER",
    "SQL_TSI_SECOND",
    "SQL_TSI_WEEK",
    "SQL_TSI_YEAR",
    "STACKED",
    "START",
    "STARTS",
    "STATS_AUTO_RECALC",
    "STATS_PERSISTENT",
    "STATS_SAMPLE_PAGES",
    "STATUS",
    "STOP",
    "STORAGE",
    "STRING",
    "SUBCLASS_ORIGIN",
    "SUBJECT",
    "SUBPARTITION",
    "SUBPARTITIONS",
    "SUPER",
    "SUSPEND",
    "SWAPS",
    "SWITCHES",
    "TABLES",
    "TABLESPACE",
    "TABLE_CHECKSUM",
    "TABLE_NAME",
    "TEMPORARY",
    "TEMPTABLE",
    "TEXT",
    "THAN",
    "TIME",
    "TIMESTAMP",
    "TIMESTAMPADD",
    "TIMESTAMPDIFF",
    "TRANSACTION",
    "TRIGGERS",
    "TRUNCATE",
    "TYPE",
    "TYPES",
    "UNCOMMITTED",
    "UNDEFINED",
    "UNDOFILE",
    "UNDO_BUFFER_SIZE",
    "UNICODE",
    "UNINSTALL",
    "UNKNOWN",
    "UNTIL",
    "UPGRADE",
    "USER",
    "USER_RESOURCES",
    "USE_FRM",
    "VALIDATION",
    "VALUE",
    "VARIABLES",
    "VIEW",
    "WAIT",
    "WARNINGS",
    "WEEK",
    "WEIGHT_STRING",
    "WITHOUT",
    "WORK",
    "WRAPPER",
    "X509",
    "XA",
    "XID",
    "XML",
    "YEAR"
] as const;

/**
 * https://dev.mysql.com/doc/refman/5.7/en/keywords.html
 */
export const reservedKeywords = [
    "ACCESSIBLE",
    "ADD",
    "ALL",
    "ALTER",
    "ANALYZE",
    "AND",
    "AS",
    "ASC",
    "ASENSITIVE",
    "BEFORE",
    "BETWEEN",
    "BIGINT",
    "BINARY",
    "BLOB",
    "BOTH",
    "BY",
    "CALL",
    "CASCADE",
    "CASE",
    "CHANGE",
    "CHAR",
    "CHARACTER",
    "CHECK",
    "COLLATE",
    "COLUMN",
    "CONDITION",
    "CONSTRAINT",
    "CONTINUE",
    "CONVERT",
    "CREATE",
    "CROSS",
    "CURRENT_DATE",
    "CURRENT_TIME",
    "CURRENT_TIMESTAMP",
    "CURRENT_USER",
    "CURSOR",
    "DATABASE",
    "DATABASES",
    "DAY_HOUR",
    "DAY_MICROSECOND",
    "DAY_MINUTE",
    "DAY_SECOND",
    "DEC",
    "DECIMAL",
    "DECLARE",
    "DEFAULT",
    "DELAYED",
    "DELETE",
    "DESC",
    "DESCRIBE",
    "DETERMINISTIC",
    "DISTINCT",
    "DISTINCTROW",
    "DIV",
    "DOUBLE",
    "DROP",
    "DUAL",
    "EACH",
    "ELSE",
    "ELSEIF",
    "ENCLOSED",
    "ESCAPED",
    "EXISTS",
    "EXIT",
    "EXPLAIN",
    "FALSE",
    "FETCH",
    "FLOAT",
    "FLOAT4",
    "FLOAT8",
    "FOR",
    "FORCE",
    "FOREIGN",
    "FROM",
    "FULLTEXT",
    "GENERATED",
    "GET",
    "GRANT",
    "GROUP",
    "HAVING",
    "HIGH_PRIORITY",
    "HOUR_MICROSECOND",
    "HOUR_MINUTE",
    "HOUR_SECOND",
    "IF",
    "IGNORE",
    "IN",
    "INDEX",
    "INFILE",
    "INNER",
    "INOUT",
    "INSENSITIVE",
    "INSERT",
    "INT",
    "INT1",
    "INT2",
    "INT3",
    "INT4",
    "INT8",
    "INTEGER",
    "INTERVAL",
    "INTO",
    "IO_AFTER_GTIDS",
    "IO_BEFORE_GTIDS",
    "IS",
    "ITERATE",
    "JOIN",
    "KEY",
    "KEYS",
    "KILL",
    "LEADING",
    "LEAVE",
    "LEFT",
    "LIKE",
    "LIMIT",
    "LINEAR",
    "LINES",
    "LOAD",
    "LOCALTIME",
    "LOCALTIMESTAMP",
    "LOCK",
    "LONG",
    "LONGBLOB",
    "LONGTEXT",
    "LOOP",
    "LOW_PRIORITY",
    "MASTER_BIND",
    "MASTER_SSL_VERIFY_SERVER_CERT",
    "MATCH",
    "MAXVALUE",
    "MEDIUMBLOB",
    "MEDIUMINT",
    "MEDIUMTEXT",
    "MIDDLEINT",
    "MINUTE_MICROSECOND",
    "MINUTE_SECOND",
    "MOD",
    "MODIFIES",
    "NATURAL",
    "NOT",
    "NO_WRITE_TO_BINLOG",
    "NULL",
    "NUMERIC",
    "ON",
    "OPTIMIZE",
    "OPTIMIZER_COSTS",
    "OPTION",
    "OPTIONALLY",
    "OR",
    "ORDER",
    "OUT",
    "OUTER",
    "OUTFILE",
    "PARTITION",
    "PRECISION",
    "PRIMARY",
    "PROCEDURE",
    "PURGE",
    "RANGE",
    "READ",
    "READS",
    "READ_WRITE",
    "REAL",
    "REFERENCES",
    "REGEXP",
    "RELEASE",
    "RENAME",
    "REPEAT",
    "REPLACE",
    "REQUIRE",
    "RESIGNAL",
    "RESTRICT",
    "RETURN",
    "REVOKE",
    "RIGHT",
    "RLIKE",
    "SCHEMA",
    "SCHEMAS",
    "SECOND_MICROSECOND",
    "SELECT",
    "SENSITIVE",
    "SEPARATOR",
    "SET",
    "SHOW",
    "SIGNAL",
    "SMALLINT",
    "SPATIAL",
    "SPECIFIC",
    "SQL",
    "SQLEXCEPTION",
    "SQLSTATE",
    "SQLWARNING",
    "SQL_BIG_RESULT",
    "SQL_CALC_FOUND_ROWS",
    "SQL_SMALL_RESULT",
    "SSL",
    "STARTING",
    "STORED",
    "STRAIGHT_JOIN",
    "TABLE",
    "TERMINATED",
    "THEN",
    "TINYBLOB",
    "TINYINT",
    "TINYTEXT",
    "TO",
    "TRAILING",
    "TRIGGER",
    "TRUE",
    "UNDO",
    "UNION",
    "UNIQUE",
    "UNLOCK",
    "UNSIGNED",
    "UPDATE",
    "USAGE",
    "USE",
    "USING",
    "UTC_DATE",
    "UTC_TIME",
    "UTC_TIMESTAMP",
    "VALUES",
    "VARBINARY",
    "VARCHAR",
    "VARCHARACTER",
    "VARYING",
    "VIRTUAL",
    "WHEN",
    "WHERE",
    "WHILE",
    "WITH",
    "WRITE",
    "XOR",
    "YEAR_MONTH",
    "ZEROFILL"
] as const;



//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
//TODO : https://dev.mysql.com/doc/refman/5.7/en/keywords.html
export const tokenKinds = [
    ...reservedKeywords,
    "END_OF_RESERVED_KEYWORD",

    ...nonReservedKeywords,
    "END_OF_NON_RESERVED_KEYWORD",

    /**
     * Misc
     */
    "EndOfFile",
    "UnknownToken",
    "CustomDelimiter",

    /**
     * Literals
     */
    "StringLiteral",

    //https://dev.mysql.com/doc/refman/5.7/en/hexadecimal-literals.html
    "HexLiteral",

    //https://dev.mysql.com/doc/refman/5.7/en/bit-value-literals.html
    "BitLiteral",

    "IntegerLiteral",
    "DecimalLiteral",
    "RealLiteral",

    /**
     * Identifiers
     */
    "Identifier",
    "UserVariableIdentifier",
    /**
     * For macro calls,
     * `#macroName(x, y, z)`
     */
    "MacroIdentifier",

    /**
     * Punctuation
     */
    "Plus",
    "Minus",
    "Asterisk",
    "Percent",
    "Slash",

    "Dot",
    "SemiColon",
    "Comma",
    "Pound",
    "OpenParenthesesPound",
    "PoundCloseParentheses",
    "Backslash",
    "QuestionMark",

    "ColonEqual",
    "AtAt",
    "AtAtGlobalDot",
    "AtAtSessionDot",

    "Tilde",
    "Caret",
    "Bar",

    "Equal",
    "LessEqualGreater",
    "GreaterEqual",
    "Greater",
    "LessEqual",
    "Less",
    "LessGreater",
    "LessLess",
    "GreaterGreater",

    "OpenParentheses",
    "CloseParentheses",
    "OpenBrace",
    "CloseBrace",

    /**
     * Hacked in to support DELIMITER statements
     */
    "DELIMITER_STATEMENT",
    /**
     * Hacked in to disambiguate MySQL's grammar
     */
    "UNIQUE_KEY",
] as const;

