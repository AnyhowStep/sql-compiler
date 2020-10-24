    /*
   Copyright (c) 2000, 2020, Oracle and/or its affiliates.

   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License, version 2.0,
   as published by the Free Software Foundation.

   This program is also distributed with certain software (including
   but not limited to OpenSSL) that is licensed under separate terms,
   as designated in a particular file or component or in included license
   documentation.  The authors of MySQL hereby grant you an additional
   permission to link the program and your derivative works with the
   separately licensed software that they have included with MySQL.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License, version 2.0, for more details.

   You should have received a copy of the GNU General Public License
   along with this program; if not, write to the Free Software
   Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301  USA */

/* sql_yacc.yy */

/**
  @defgroup Parser Parser
  @                                         \
    else                                      \                                         \
  }

#define MYSQL_YYABORT                         \
  do                                          \ while (0)

#define MYSQL_YYABORT_UNLESS(A)         \
  if (!(A))                             \

#define NEW_PTN new(YYTHD->mem_root)


/**
  Parse_tree_node::contextualize_() function call wrapper
*/
#define TMP_CONTEXTUALIZE(x)        \
  do                                \ while(0)


/**
  Parse_tree_node::contextualize() function call wrapper
*/
#define CONTEXTUALIZE(x)                                \
  do                                                    \ while(0)


/**
  Item::itemize() function call wrapper
*/
#define ITEMIZE(x, y)                                  \
  do                                                   \ while(0)

/**
  PT_statement::make_cmd() wrapper to raise postponed error message on OOM

  @note x may be NULL because of OOM error.
*/
#define MAKE_CMD(x)                                     \
  do                                                    \ while(0)


#ifndef DBUG_OFF
#define YYDEBUG 1
#else
#define YYDEBUG 0
#endif


/**
  @brief Bison callback to report a syntax/OOM error

  This function is invoked by the bison-generated parser
  when a syntax error, a parse error or an out-of-memory
  condition occurs. This function is not invoked when the
  parser is requested to abort by semantic action code
  by means of YYABORT or YYACCEPT macros. This is why these
  macros should not be used (use MYSQL_YYABORT/MYSQL_YYACCEPT
  instead).

  The parser will abort immediately after invoking this callback.

  This function is not for use in semantic actions and is internal to
  the parser, as it performs some pre-return cleanup.
  In semantic actions, please use my_syntax_error or my_error to
  push an error into the error stack and MYSQL_YYABORT
  to abort from the parser.
*/

void MYSQLerror(YYLTYPE *, THD *thd, const char *s)


#ifndef DBUG_OFF
void turn_parser_debug_on()
#endif

static bool is_native_function(THD *thd, const LEX_STRING *name)


/**
  Helper action for a case statement (entering the CASE).
  This helper is used for both 'simple' and 'searched' cases.
  This helper, with the other case_stmt_action_..., is executed when
  the following SQL code is parsed:
<pre>
CREATE PROCEDURE proc_19194_simple(i int)
BEGIN
  DECLARE str CHAR(10);

  CASE i
    WHEN 1 THEN SET str="1";
    WHEN 2 THEN SET str="2";
    WHEN 3 THEN SET str="3";
    ELSE SET str="unknown";
  END CASE;

  SELECT str;
END
</pre>
  The actions are used to generate the following code:
<pre>
SHOW PROCEDURE CODE proc_19194_simple;
Pos     Instruction
0       set str@1 NULL
1       set_case_expr (12) 0 i@0
2       jump_if_not 5(12) (case_expr@0 = 1)
3       set str@1 _latin1'1'
4       jump 12
5       jump_if_not 8(12) (case_expr@0 = 2)
6       set str@1 _latin1'2'
7       jump 12
8       jump_if_not 11(12) (case_expr@0 = 3)
9       set str@1 _latin1'3'
10      jump 12
11      set str@1 _latin1'unknown'
12      stmt 0 "SELECT str"
</pre>

  @param thd thread handler
*/

void case_stmt_action_case(THD *thd)

/**
  Helper action for a case then statements.
  This helper is used for both 'simple' and 'searched' cases.
  @param lex the parser lex context
*/

bool case_stmt_action_then(THD *thd, LEX *lex)

/**
  Helper action for an end case.
  This helper is used for both 'simple' and 'searched' cases.
  @param lex the parser lex context
  @param simple true for simple cases, false for searched cases
*/

void case_stmt_action_end_case(LEX *lex, bool simple)


static bool add_create_index_prepare (LEX *lex, Table_ident *table)

static bool add_create_index (LEX *lex, keytype type,
                              const LEX_STRING &name,
                              KEY_CREATE_INFO *info= NULL, bool generated= 0)

/**
  Compare a LEX_USER against the current user as defined by the exact user and
  host used during authentication.

  @param user A pointer to a user which needs to be matched against the
              current.

  @see SET PASSWORD rules

  @retval true The specified user is the authorized user
  @retval false The user doesn't match
*/

bool match_authorized_user(Security_context *ctx, LEX_USER *user)
  }
  return false;
}

static void init_index_hints(List<Index_hint> *hints, index_hint_type type,
                             index_clause_map clause)
}

bool my_yyoverflow(short **a, YYSTYPE **b, YYLTYPE **c, ulong *yystacksize);

#include "parse_tree_nodes.h"
#include "parse_tree_items.h"

%}

%yacc

%parse-param
%lex-param
%pure-parser                                    /* We have threads */
/*
  Currently there are 159 shift/reduce conflicts.
  We should not introduce new conflicts any more.
*/
%expect 155

/*
   Comments for TOKENS.
   For each token, please include in the same line a comment that contains
   the following tags:
   SQL-2015-R : Reserved keyword as per SQL-2015 draft
   SQL-2003-R : Reserved keyword as per SQL-2003
   SQL-2003-N : Non Reserved keyword as per SQL-2003
   SQL-1999-R : Reserved keyword as per SQL-1999
   SQL-1999-N : Non Reserved keyword as per SQL-1999
   MYSQL      : MySQL extention (unspecified)
   MYSQL-FUNC : MySQL extention, function
   INTERNAL   : Not a real token, lex optimization
   OPERATOR   : SQL operator
   FUTURE-USE : Reserved for futur use

   This makes the code grep-able, and helps maintenance.
*/

%token  ABORT_SYM                     /* INTERNAL (used in lex) */
%token  ACCESSIBLE_SYM
%token  ACCOUNT_SYM
%token  ACTION                        /* SQL-2003-N */
%token  ADD                           /* SQL-2003-R */
%token  ADDDATE_SYM                   /* MYSQL-FUNC */
%token  AFTER_SYM                     /* SQL-2003-N */
%token  AGAINST
%token  AGGREGATE_SYM
%token  ALGORITHM_SYM
%token  ALL                           /* SQL-2003-R */
%token  ALTER                         /* SQL-2003-R */
%token  ALWAYS_SYM
%token  ANALYSE_SYM
%token  ANALYZE_SYM
%token  AND_AND_SYM                   /* OPERATOR */
%token  AND_SYM                       /* SQL-2003-R */
%token  ANY_SYM                       /* SQL-2003-R */
%token  AS                            /* SQL-2003-R */
%token  ASC                           /* SQL-2003-N */
%token  ASCII_SYM                     /* MYSQL-FUNC */
%token  ASENSITIVE_SYM                /* FUTURE-USE */
%token  AT_SYM                        /* SQL-2003-R */
%token  AUTOEXTEND_SIZE_SYM
%token  AUTO_INC
%token  AVG_ROW_LENGTH
%token  AVG_SYM                       /* SQL-2003-N */
%token  BACKUP_SYM
%token  BEFORE_SYM                    /* SQL-2003-N */
%token  BEGIN_SYM                     /* SQL-2003-R */
%token  BETWEEN_SYM                   /* SQL-2003-R */
%token  BIGINT                        /* SQL-2003-R */
%token  BINARY                        /* SQL-2003-R */
%token  BINLOG_SYM
%token  BIN_NUM
%token  BIT_AND                       /* MYSQL-FUNC */
%token  BIT_OR                        /* MYSQL-FUNC */
%token  BIT_SYM                       /* MYSQL-FUNC */
%token  BIT_XOR                       /* MYSQL-FUNC */
%token  BLOB_SYM                      /* SQL-2003-R */
%token  BLOCK_SYM
%token  BOOLEAN_SYM                   /* SQL-2003-R */
%token  BOOL_SYM
%token  BOTH                          /* SQL-2003-R */
%token  BTREE_SYM
%token  BY                            /* SQL-2003-R */
%token  BYTE_SYM
%token  CACHE_SYM
%token  CALL_SYM                      /* SQL-2003-R */
%token  CASCADE                       /* SQL-2003-N */
%token  CASCADED                      /* SQL-2003-R */
%token  CASE_SYM                      /* SQL-2003-R */
%token  CAST_SYM                      /* SQL-2003-R */
%token  CATALOG_NAME_SYM              /* SQL-2003-N */
%token  CHAIN_SYM                     /* SQL-2003-N */
%token  CHANGE
%token  CHANGED
%token  CHANNEL_SYM
%token  CHARSET
%token  CHAR_SYM                      /* SQL-2003-R */
%token  CHECKSUM_SYM
%token  CHECK_SYM                     /* SQL-2003-R */
%token  CIPHER_SYM
%token  CLASS_ORIGIN_SYM              /* SQL-2003-N */
%token  CLIENT_SYM
%token  CLOSE_SYM                     /* SQL-2003-R */
%token  COALESCE                      /* SQL-2003-N */
%token  CODE_SYM
%token  COLLATE_SYM                   /* SQL-2003-R */
%token  COLLATION_SYM                 /* SQL-2003-N */
%token  COLUMNS
%token  COLUMN_SYM                    /* SQL-2003-R */
%token  COLUMN_FORMAT_SYM
%token  COLUMN_NAME_SYM               /* SQL-2003-N */
%token  COMMENT_SYM
%token  COMMITTED_SYM                 /* SQL-2003-N */
%token  COMMIT_SYM                    /* SQL-2003-R */
%token  COMPACT_SYM
%token  COMPLETION_SYM
%token  COMPRESSED_SYM
%token  COMPRESSION_SYM
%token  ENCRYPTION_SYM
%token  CONCURRENT
%token  CONDITION_SYM                 /* SQL-2003-R, SQL-2008-R */
%token  CONNECTION_SYM
%token  CONSISTENT_SYM
%token  CONSTRAINT                    /* SQL-2003-R */
%token  CONSTRAINT_CATALOG_SYM        /* SQL-2003-N */
%token  CONSTRAINT_NAME_SYM           /* SQL-2003-N */
%token  CONSTRAINT_SCHEMA_SYM         /* SQL-2003-N */
%token  CONTAINS_SYM                  /* SQL-2003-N */
%token  CONTEXT_SYM
%token  CONTINUE_SYM                  /* SQL-2003-R */
%token  CONVERT_SYM                   /* SQL-2003-N */
%token  COUNT_SYM                     /* SQL-2003-N */
%token  CPU_SYM
%token  CREATE                        /* SQL-2003-R */
%token  CROSS                         /* SQL-2003-R */
%token  CUBE_SYM                      /* SQL-2003-R */
%token  CURDATE                       /* MYSQL-FUNC */
%token  CURRENT_SYM                   /* SQL-2003-R */
%token  CURRENT_USER                  /* SQL-2003-R */
%token  CURSOR_SYM                    /* SQL-2003-R */
%token  CURSOR_NAME_SYM               /* SQL-2003-N */
%token  CURTIME                       /* MYSQL-FUNC */
%token  DATABASE
%token  DATABASES
%token  DATAFILE_SYM
%token  DATA_SYM                      /* SQL-2003-N */
%token  DATETIME
%token  DATE_ADD_INTERVAL             /* MYSQL-FUNC */
%token  DATE_SUB_INTERVAL             /* MYSQL-FUNC */
%token  DATE_SYM                      /* SQL-2003-R */
%token  DAY_HOUR_SYM
%token  DAY_MICROSECOND_SYM
%token  DAY_MINUTE_SYM
%token  DAY_SECOND_SYM
%token  DAY_SYM                       /* SQL-2003-R */
%token  DEALLOCATE_SYM                /* SQL-2003-R */
%token  DECIMAL_NUM
%token  DECIMAL_SYM                   /* SQL-2003-R */
%token  DECLARE_SYM                   /* SQL-2003-R */
%token  DEFAULT                       /* SQL-2003-R */
%token  DEFAULT_AUTH_SYM              /* INTERNAL */
%token  DEFINER_SYM
%token  DELAYED_SYM
%token  DELAY_KEY_WRITE_SYM
%token  DELETE_SYM                    /* SQL-2003-R */
%token  DESC                          /* SQL-2003-N */
%token  DESCRIBE                      /* SQL-2003-R */
%token  DES_KEY_FILE
%token  DETERMINISTIC_SYM             /* SQL-2003-R */
%token  DIAGNOSTICS_SYM               /* SQL-2003-N */
%token  DIRECTORY_SYM
%token  DISABLE_SYM
%token  DISCARD
%token  DISK_SYM
%token  DISTINCT                      /* SQL-2003-R */
%token  DIV_SYM
%token  DOUBLE_SYM                    /* SQL-2003-R */
%token  DO_SYM
%token  DROP                          /* SQL-2003-R */
%token  DUAL_SYM
%token  DUMPFILE
%token  DUPLICATE_SYM
%token  DYNAMIC_SYM                   /* SQL-2003-R */
%token  EACH_SYM                      /* SQL-2003-R */
%token  ELSE                          /* SQL-2003-R */
%token  ELSEIF_SYM
%token  ENABLE_SYM
%token  ENCLOSED
%token  END                           /* SQL-2003-R */
%token  ENDS_SYM
%token  END_OF_INPUT                  /* INTERNAL */
%token  ENGINES_SYM
%token  ENGINE_SYM
%token  ENUM
%token  EQ                            /* OPERATOR */
%token  EQUAL_SYM                     /* OPERATOR */
%token  ERROR_SYM
%token  ERRORS
%token  ESCAPED
%token  ESCAPE_SYM                    /* SQL-2003-R */
%token  EVENTS_SYM
%token  EVENT_SYM
%token  EVERY_SYM                     /* SQL-2003-N */
%token  EXCHANGE_SYM
%token  EXECUTE_SYM                   /* SQL-2003-R */
%token  EXISTS                        /* SQL-2003-R */
%token  EXIT_SYM
%token  EXPANSION_SYM
%token  EXPIRE_SYM
%token  EXPORT_SYM
%token  EXTENDED_SYM
%token  EXTENT_SIZE_SYM
%token  EXTRACT_SYM                   /* SQL-2003-N */
%token  FALSE_SYM                     /* SQL-2003-R */
%token  FAST_SYM
%token  FAULTS_SYM
%token  FETCH_SYM                     /* SQL-2003-R */
%token  FILE_SYM
%token  FILE_BLOCK_SIZE_SYM
%token  FILTER_SYM
%token  FIRST_SYM                     /* SQL-2003-N */
%token  FIXED_SYM
%token  FLOAT_NUM
%token  FLOAT_SYM                     /* SQL-2003-R */
%token  FLUSH_SYM
%token  FOLLOWS_SYM                  /* MYSQL */
%token  FORCE_SYM
%token  FOREIGN                       /* SQL-2003-R */
%token  FOR_SYM                       /* SQL-2003-R */
%token  FORMAT_SYM
%token  FOUND_SYM                     /* SQL-2003-R */
%token  FROM
%token  FULL                          /* SQL-2003-R */
%token  FULLTEXT_SYM
%token  FUNCTION_SYM                  /* SQL-2003-R */
%token  GE
%token  GENERAL
%token  GENERATED
%token  GROUP_REPLICATION
%token  GEOMETRYCOLLECTION
%token  GEOMETRY_SYM
%token  GET_FORMAT                    /* MYSQL-FUNC */
%token  GET_SYM                       /* SQL-2003-R */
%token  GLOBAL_SYM                    /* SQL-2003-R */
%token  GRANT                         /* SQL-2003-R */
%token  GRANTS
%token  GROUP_SYM                     /* SQL-2003-R */
%token  GROUP_CONCAT_SYM
%token  GT_SYM                        /* OPERATOR */
%token  HANDLER_SYM
%token  HASH_SYM
%token  HAVING                        /* SQL-2003-R */
%token  HELP_SYM
%token  HEX_NUM
%token  HIGH_PRIORITY
%token  HOST_SYM
%token  HOSTS_SYM
%token  HOUR_MICROSECOND_SYM
%token  HOUR_MINUTE_SYM
%token  HOUR_SECOND_SYM
%token  HOUR_SYM                      /* SQL-2003-R */
%token  IDENT
%token  IDENTIFIED_SYM
%token  IDENT_QUOTED
%token  IF
%token  IGNORE_SYM
%token  IGNORE_SERVER_IDS_SYM
%token  IMPORT
%token  INDEXES
%token  INDEX_SYM
%token  INFILE
%token  INITIAL_SIZE_SYM
%token  INNER_SYM                     /* SQL-2003-R */
%token  INOUT_SYM                     /* SQL-2003-R */
%token  INSENSITIVE_SYM               /* SQL-2003-R */
%token  INSERT                        /* SQL-2003-R */
%token  INSERT_METHOD
%token  INSTANCE_SYM
%token  INSTALL_SYM
%token  INTERVAL_SYM                  /* SQL-2003-R */
%token  INTO                          /* SQL-2003-R */
%token  INT_SYM                       /* SQL-2003-R */
%token  INVOKER_SYM
%token  IN_SYM                        /* SQL-2003-R */
%token  IO_AFTER_GTIDS                /* MYSQL, FUTURE-USE */
%token  IO_BEFORE_GTIDS               /* MYSQL, FUTURE-USE */
%token  IO_SYM
%token  IPC_SYM
%token  IS                            /* SQL-2003-R */
%token  ISOLATION                     /* SQL-2003-R */
%token  ISSUER_SYM
%token  ITERATE_SYM
%token  JOIN_SYM                      /* SQL-2003-R */
%token  JSON_SEPARATOR_SYM            /* MYSQL */
%token  JSON_UNQUOTED_SEPARATOR_SYM   /* MYSQL */
%token  JSON_SYM                      /* MYSQL */
%token  KEYS
%token  KEY_BLOCK_SIZE
%token  KEY_SYM                       /* SQL-2003-N */
%token  KILL_SYM
%token  LANGUAGE_SYM                  /* SQL-2003-R */
%token  LAST_SYM                      /* SQL-2003-N */
%token  LE                            /* OPERATOR */
%token  LEADING                       /* SQL-2003-R */
%token  LEAVES
%token  LEAVE_SYM
%token  LEFT                          /* SQL-2003-R */
%token  LESS_SYM
%token  LEVEL_SYM
%token  LEX_HOSTNAME
%token  LIKE                          /* SQL-2003-R */
%token  LIMIT
%token  LINEAR_SYM
%token  LINES
%token  LINESTRING
%token  LIST_SYM
%token  LOAD
%token  LOCAL_SYM                     /* SQL-2003-R */
%token  LOCATOR_SYM                   /* SQL-2003-N */
%token  LOCKS_SYM
%token  LOCK_SYM
%token  LOGFILE_SYM
%token  LOGS_SYM
%token  LONGBLOB
%token  LONGTEXT
%token  LONG_NUM
%token  LONG_SYM
%token  LOOP_SYM
%token  LOW_PRIORITY
%token  LT                            /* OPERATOR */
%token  MASTER_AUTO_POSITION_SYM
%token  MASTER_BIND_SYM
%token  MASTER_CONNECT_RETRY_SYM
%token  MASTER_DELAY_SYM
%token  MASTER_HOST_SYM
%token  MASTER_LOG_FILE_SYM
%token  MASTER_LOG_POS_SYM
%token  MASTER_PASSWORD_SYM
%token  MASTER_PORT_SYM
%token  MASTER_RETRY_COUNT_SYM
%token  MASTER_SERVER_ID_SYM
%token  MASTER_SSL_CAPATH_SYM
%token  MASTER_TLS_VERSION_SYM
%token  MASTER_SSL_CA_SYM
%token  MASTER_SSL_CERT_SYM
%token  MASTER_SSL_CIPHER_SYM
%token  MASTER_SSL_CRL_SYM
%token  MASTER_SSL_CRLPATH_SYM
%token  MASTER_SSL_KEY_SYM
%token  MASTER_SSL_SYM
%token  MASTER_SSL_VERIFY_SERVER_CERT_SYM
%token  MASTER_SYM
%token  MASTER_USER_SYM
%token  MASTER_HEARTBEAT_PERIOD_SYM
%token  MATCH                         /* SQL-2003-R */
%token  MAX_CONNECTIONS_PER_HOUR
%token  MAX_QUERIES_PER_HOUR
%token  MAX_ROWS
%token  MAX_SIZE_SYM
%token  MAX_SYM                       /* SQL-2003-N */
%token  MAX_UPDATES_PER_HOUR
%token  MAX_USER_CONNECTIONS_SYM
%token  MAX_VALUE_SYM                 /* SQL-2003-N */
%token  MEDIUMBLOB
%token  MEDIUMINT
%token  MEDIUMTEXT
%token  MEDIUM_SYM
%token  MEMORY_SYM
%token  MERGE_SYM                     /* SQL-2003-R */
%token  MESSAGE_TEXT_SYM              /* SQL-2003-N */
%token  MICROSECOND_SYM               /* MYSQL-FUNC */
%token  MIGRATE_SYM
%token  MINUTE_MICROSECOND_SYM
%token  MINUTE_SECOND_SYM
%token  MINUTE_SYM                    /* SQL-2003-R */
%token  MIN_ROWS
%token  MIN_SYM                       /* SQL-2003-N */
%token  MODE_SYM
%token  MODIFIES_SYM                  /* SQL-2003-R */
%token  MODIFY_SYM
%token  MOD_SYM                       /* SQL-2003-N */
%token  MONTH_SYM                     /* SQL-2003-R */
%token  MULTILINESTRING
%token  MULTIPOINT
%token  MULTIPOLYGON
%token  MUTEX_SYM
%token  MYSQL_ERRNO_SYM
%token  NAMES_SYM                     /* SQL-2003-N */
%token  NAME_SYM                      /* SQL-2003-N */
%token  NATIONAL_SYM                  /* SQL-2003-R */
%token  NATURAL                       /* SQL-2003-R */
%token  NCHAR_STRING
%token  NCHAR_SYM                     /* SQL-2003-R */
%token  NDBCLUSTER_SYM
%token  NE                            /* OPERATOR */
%token  NEG
%token  NEVER_SYM
%token  NEW_SYM                       /* SQL-2003-R */
%token  NEXT_SYM                      /* SQL-2003-N */
%token  NODEGROUP_SYM
%token  NONE_SYM                      /* SQL-2003-R */
%token  NOT2_SYM
%token  NOT_SYM                       /* SQL-2003-R */
%token  NOW_SYM
%token  NO_SYM                        /* SQL-2003-R */
%token  NO_WAIT_SYM
%token  NO_WRITE_TO_BINLOG
%token  NULL_SYM                      /* SQL-2003-R */
%token  NUM
%token  NUMBER_SYM                    /* SQL-2003-N */
%token  NUMERIC_SYM                   /* SQL-2003-R */
%token  NVARCHAR_SYM
%token  OFFSET_SYM
%token  ON                            /* SQL-2003-R */
%token  ONE_SYM
%token  ONLY_SYM                      /* SQL-2003-R */
%token  OPEN_SYM                      /* SQL-2003-R */
%token  OPTIMIZE
%token  OPTIMIZER_COSTS_SYM
%token  OPTIONS_SYM
%token  OPTION                        /* SQL-2003-N */
%token  OPTIONALLY
%token  OR2_SYM
%token  ORDER_SYM                     /* SQL-2003-R */
%token  OR_OR_SYM                     /* OPERATOR */
%token  OR_SYM                        /* SQL-2003-R */
%token  OUTER
%token  OUTFILE
%token  OUT_SYM                       /* SQL-2003-R */
%token  OWNER_SYM
%token  PACK_KEYS_SYM
%token  PAGE_SYM
%token  PARAM_MARKER
%token  PARSER_SYM
%token  PARSE_GCOL_EXPR_SYM
%token  PARTIAL                       /* SQL-2003-N */
%token  PARTITION_SYM                 /* SQL-2003-R */
%token  PARTITIONS_SYM
%token  PARTITIONING_SYM
%token  PASSWORD
%token  PHASE_SYM
%token  PLUGIN_DIR_SYM                /* INTERNAL */
%token  PLUGIN_SYM
%token  PLUGINS_SYM
%token  POINT_SYM
%token  POLYGON
%token  PORT_SYM
%token  POSITION_SYM                  /* SQL-2003-N */
%token  PRECEDES_SYM                  /* MYSQL */
%token  PRECISION                     /* SQL-2003-R */
%token  PREPARE_SYM                   /* SQL-2003-R */
%token  PRESERVE_SYM
%token  PREV_SYM
%token  PRIMARY_SYM                   /* SQL-2003-R */
%token  PRIVILEGES                    /* SQL-2003-N */
%token  PROCEDURE_SYM                 /* SQL-2003-R */
%token  PROCESS
%token  PROCESSLIST_SYM
%token  PROFILE_SYM
%token  PROFILES_SYM
%token  PROXY_SYM
%token  PURGE
%token  QUARTER_SYM
%token  QUERY_SYM
%token  QUICK
%token  RANGE_SYM                     /* SQL-2003-R */
%token  READS_SYM                     /* SQL-2003-R */
%token  READ_ONLY_SYM
%token  READ_SYM                      /* SQL-2003-N */
%token  READ_WRITE_SYM
%token  REAL                          /* SQL-2003-R */
%token  REBUILD_SYM
%token  RECOVER_SYM
%token  REDOFILE_SYM
%token  REDO_BUFFER_SIZE_SYM
%token  REDUNDANT_SYM
%token  REFERENCES                    /* SQL-2003-R */
%token  REGEXP
%token  RELAY
%token  RELAYLOG_SYM
%token  RELAY_LOG_FILE_SYM
%token  RELAY_LOG_POS_SYM
%token  RELAY_THREAD
%token  RELEASE_SYM                   /* SQL-2003-R */
%token  RELOAD
%token  REMOVE_SYM
%token  RENAME
%token  REORGANIZE_SYM
%token  REPAIR
%token  REPEATABLE_SYM                /* SQL-2003-N */
%token  REPEAT_SYM                    /* MYSQL-FUNC */
%token  REPLACE                       /* MYSQL-FUNC */
%token  REPLICATION
%token  REPLICATE_DO_DB
%token  REPLICATE_IGNORE_DB
%token  REPLICATE_DO_TABLE
%token  REPLICATE_IGNORE_TABLE
%token  REPLICATE_WILD_DO_TABLE
%token  REPLICATE_WILD_IGNORE_TABLE
%token  REPLICATE_REWRITE_DB
%token  REQUIRE_SYM
%token  RESET_SYM
%token  RESIGNAL_SYM                  /* SQL-2003-R */
%token  RESOURCES
%token  RESTORE_SYM
%token  RESTRICT
%token  RESUME_SYM
%token  RETURNED_SQLSTATE_SYM         /* SQL-2003-N */
%token  RETURNS_SYM                   /* SQL-2003-R */
%token  RETURN_SYM                    /* SQL-2003-R */
%token  REVERSE_SYM
%token  REVOKE                        /* SQL-2003-R */
%token  RIGHT                         /* SQL-2003-R */
%token  ROLLBACK_SYM                  /* SQL-2003-R */
%token  ROLLUP_SYM                    /* SQL-2003-R */
%token  ROTATE_SYM
%token  ROUTINE_SYM                   /* SQL-2003-N */
%token  ROWS_SYM                      /* SQL-2003-R */
%token  ROW_FORMAT_SYM
%token  ROW_SYM                       /* SQL-2003-R */
%token  ROW_COUNT_SYM                 /* SQL-2003-N */
%token  RTREE_SYM
%token  SAVEPOINT_SYM                 /* SQL-2003-R */
%token  SCHEDULE_SYM
%token  SCHEMA_NAME_SYM               /* SQL-2003-N */
%token  SECOND_MICROSECOND_SYM
%token  SECOND_SYM                    /* SQL-2003-R */
%token  SECURITY_SYM                  /* SQL-2003-N */
%token  SELECT_SYM                    /* SQL-2003-R */
%token  SENSITIVE_SYM                 /* FUTURE-USE */
%token  SEPARATOR_SYM
%token  SERIALIZABLE_SYM              /* SQL-2003-N */
%token  SERIAL_SYM
%token  SESSION_SYM                   /* SQL-2003-N */
%token  SERVER_SYM
%token  SERVER_OPTIONS
%token  SET                           /* SQL-2003-R */
%token  SET_VAR
%token  SHARE_SYM
%token  SHIFT_LEFT                    /* OPERATOR */
%token  SHIFT_RIGHT                   /* OPERATOR */
%token  SHOW
%token  SHUTDOWN
%token  SIGNAL_SYM                    /* SQL-2003-R */
%token  SIGNED_SYM
%token  SIMPLE_SYM                    /* SQL-2003-N */
%token  SLAVE
%token  SLOW
%token  SMALLINT                      /* SQL-2003-R */
%token  SNAPSHOT_SYM
%token  SOCKET_SYM
%token  SONAME_SYM
%token  SOUNDS_SYM
%token  SOURCE_SYM
%token  SPATIAL_SYM
%token  SPECIFIC_SYM                  /* SQL-2003-R */
%token  SQLEXCEPTION_SYM              /* SQL-2003-R */
%token  SQLSTATE_SYM                  /* SQL-2003-R */
%token  SQLWARNING_SYM                /* SQL-2003-R */
%token  SQL_AFTER_GTIDS               /* MYSQL */
%token  SQL_AFTER_MTS_GAPS            /* MYSQL */
%token  SQL_BEFORE_GTIDS              /* MYSQL */
%token  SQL_BIG_RESULT
%token  SQL_BUFFER_RESULT
%token  SQL_CACHE_SYM
%token  SQL_CALC_FOUND_ROWS
%token  SQL_NO_CACHE_SYM
%token  SQL_SMALL_RESULT
%token  SQL_SYM                       /* SQL-2003-R */
%token  SQL_THREAD
%token  SSL_SYM
%token  STACKED_SYM                   /* SQL-2003-N */
%token  STARTING
%token  STARTS_SYM
%token  START_SYM                     /* SQL-2003-R */
%token  STATS_AUTO_RECALC_SYM
%token  STATS_PERSISTENT_SYM
%token  STATS_SAMPLE_PAGES_SYM
%token  STATUS_SYM
%token  STDDEV_SAMP_SYM               /* SQL-2003-N */
%token  STD_SYM
%token  STOP_SYM
%token  STORAGE_SYM
%token  STORED_SYM
%token  STRAIGHT_JOIN
%token  STRING_SYM
%token  SUBCLASS_ORIGIN_SYM           /* SQL-2003-N */
%token  SUBDATE_SYM
%token  SUBJECT_SYM
%token  SUBPARTITIONS_SYM
%token  SUBPARTITION_SYM
%token  SUBSTRING                     /* SQL-2003-N */
%token  SUM_SYM                       /* SQL-2003-N */
%token  SUPER_SYM
%token  SUSPEND_SYM
%token  SWAPS_SYM
%token  SWITCHES_SYM
%token  SYSDATE
%token  TABLES
%token  TABLESPACE_SYM
%token  TABLE_REF_PRIORITY
%token  TABLE_SYM                     /* SQL-2003-R */
%token  TABLE_CHECKSUM_SYM
%token  TABLE_NAME_SYM                /* SQL-2003-N */
%token  TEMPORARY                     /* SQL-2003-N */
%token  TEMPTABLE_SYM
%token  TERMINATED
%token  TEXT_STRING
%token  TEXT_SYM
%token  THAN_SYM
%token  THEN_SYM                      /* SQL-2003-R */
%token  TIMESTAMP                     /* SQL-2003-R */
%token  TIMESTAMP_ADD
%token  TIMESTAMP_DIFF
%token  TIME_SYM                      /* SQL-2003-R */
%token  TINYBLOB
%token  TINYINT
%token  TINYTEXT
%token  TO_SYM                        /* SQL-2003-R */
%token  TRAILING                      /* SQL-2003-R */
%token  TRANSACTION_SYM
%token  TRIGGERS_SYM
%token  TRIGGER_SYM                   /* SQL-2003-R */
%token  TRIM                          /* SQL-2003-N */
%token  TRUE_SYM                      /* SQL-2003-R */
%token  TRUNCATE_SYM
%token  TYPES_SYM
%token  TYPE_SYM                      /* SQL-2003-N */
%token  UDF_RETURNS_SYM
%token  ULONGLONG_NUM
%token  UNCOMMITTED_SYM               /* SQL-2003-N */
%token  UNDEFINED_SYM
%token  UNDERSCORE_CHARSET
%token  UNDOFILE_SYM
%token  UNDO_BUFFER_SIZE_SYM
%token  UNDO_SYM                      /* FUTURE-USE */
%token  UNICODE_SYM
%token  UNINSTALL_SYM
%token  UNION_SYM                     /* SQL-2003-R */
%token  UNIQUE_SYM
%token  UNKNOWN_SYM                   /* SQL-2003-R */
%token  UNLOCK_SYM
%token  UNSIGNED
%token  UNTIL_SYM
%token  UPDATE_SYM                    /* SQL-2003-R */
%token  UPGRADE_SYM
%token  USAGE                         /* SQL-2003-N */
%token  USER                          /* SQL-2003-R */
%token  USE_FRM
%token  USE_SYM
%token  USING                         /* SQL-2003-R */
%token  UTC_DATE_SYM
%token  UTC_TIMESTAMP_SYM
%token  UTC_TIME_SYM
%token  VALIDATION_SYM                /* MYSQL */
%token  VALUES                        /* SQL-2003-R */
%token  VALUE_SYM                     /* SQL-2003-R */
%token  VARBINARY
%token  VARCHAR                       /* SQL-2003-R */
%token  VARIABLES
%token  VARIANCE_SYM
%token  VARYING                       /* SQL-2003-R */
%token  VAR_SAMP_SYM
%token  VIEW_SYM                      /* SQL-2003-N */
%token  VIRTUAL_SYM
%token  WAIT_SYM
%token  WARNINGS
%token  WEEK_SYM
%token  WEIGHT_STRING_SYM
%token  WHEN_SYM                      /* SQL-2003-R */
%token  WHERE                         /* SQL-2003-R */
%token  WHILE_SYM
%token  WITH                          /* SQL-2003-R */
%token  WITH_CUBE_SYM                 /* INTERNAL */
%token  WITH_ROLLUP_SYM               /* INTERNAL */
%token  WITHOUT_SYM                   /* SQL-2003-R */
%token  WORK_SYM                      /* SQL-2003-N */
%token  WRAPPER_SYM
%token  WRITE_SYM                     /* SQL-2003-N */
%token  X509_SYM
%token  XA_SYM
%token  XID_SYM                       /* MYSQL */
%token  XML_SYM
%token  XOR
%token  YEAR_MONTH_SYM
%token  YEAR_SYM                      /* SQL-2003-R */
%token  ZEROFILL

/*
   Tokens from MySQL 8.0
*/
%token  JSON_OBJECTAGG                /* SQL-2015-R */
%token  JSON_ARRAYAGG                 /* SQL-2015-R */

/*
  Resolve column attribute ambiguity -- force precedence of "UNIQUE KEY" against
  simple "UNIQUE" and "KEY" attributes:
*/
%right UNIQUE_SYM KEY_SYM

%left   JOIN_SYM INNER_SYM STRAIGHT_JOIN CROSS LEFT RIGHT
/* A dummy token to force the priority of table_ref production in a join. */
%left   TABLE_REF_PRIORITY
%left   SET_VAR
%left   OR_OR_SYM OR_SYM OR2_SYM
%left   XOR
%left   AND_SYM AND_AND_SYM
%left   BETWEEN_SYM CASE_SYM WHEN_SYM THEN_SYM ELSE
%left   EQ EQUAL_SYM GE GT_SYM LE LT NE IS LIKE REGEXP IN_SYM
%left   '|'
%left   '&'
%left   SHIFT_LEFT SHIFT_RIGHT
%left   '-' '+'
%left   '*' '/' '%' DIV_SYM MOD_SYM
%left   '^'
%left   NEG '~'
%right  NOT_SYM NOT2_SYM
%right  BINARY COLLATE_SYM
%left  INTERVAL_SYM

%type <lex_str>
        IDENT IDENT_QUOTED TEXT_STRING DECIMAL_NUM FLOAT_NUM NUM LONG_NUM HEX_NUM
        LEX_HOSTNAME ULONGLONG_NUM field_ident select_alias ident ident_or_text
        IDENT_sys TEXT_STRING_sys TEXT_STRING_literal
        NCHAR_STRING opt_component key_cache_name
        sp_opt_label BIN_NUM label_ident TEXT_STRING_filesystem ident_or_empty
        opt_constraint constraint opt_ident TEXT_STRING_sys_nonewline
        filter_wild_db_table_string

%type <lex_str_ptr>
        opt_table_alias

%type <table>
        table_ident table_ident_nodb references

%type <simple_string>
        opt_db password

%type <string>
        text_string opt_gconcat_separator

%type <num>
        type type_with_opt_collate int_type real_type lock_option
        udf_type if_exists opt_local opt_table_options table_options
        table_option opt_if_not_exists opt_no_write_to_binlog
        opt_temporary all_or_any opt_distinct
        opt_ignore_leaves fulltext_options spatial_type union_option
        transaction_access_mode_types
        opt_natural_language_mode opt_query_expansion
        opt_ev_status opt_ev_on_completion ev_on_completion opt_ev_comment
        ev_alter_on_schedule_completion opt_ev_rename_to opt_ev_sql_stmt
        trg_action_time trg_event field_def
        ordering_direction opt_ordering_direction

/*
  Bit field of MYSQL_START_TRANS_OPT_* flags.
*/
%type <num> opt_start_transaction_option_list
%type <num> start_transaction_option_list
%type <num> start_transaction_option

%type <m_yes_no_unk>
        opt_chain opt_release

%type <m_fk_option>
        delete_option

%type <ulong_num>
        ulong_num real_ulong_num merge_insert_types
        ws_nweights func_datetime_precision
        ws_level_flag_desc ws_level_flag_reverse ws_level_flags
        opt_ws_levels ws_level_list ws_level_list_item ws_level_number
        ws_level_range ws_level_list_or_range
        now

%type <ulonglong_number>
        ulonglong_num real_ulonglong_num size_number
        procedure_analyse_param

%type <lock_type>
        replace_lock_option opt_low_priority insert_lock_option load_data_lock

%type <item>
        literal insert_ident temporal_literal
        simple_ident expr opt_expr opt_else sum_expr in_sum_expr
        variable variable_aux bool_pri
        predicate bit_expr
        table_wild simple_expr udf_expr
        expr_or_default set_expr_or_default
        geometry_function
        signed_literal now_or_signed_literal opt_escape
        sp_opt_default
        simple_ident_nospvar simple_ident_q
        field_or_var limit_option
        part_func_expr
        function_call_keyword
        function_call_nonkeyword
        function_call_generic
        function_call_conflict
        signal_allowed_expr
        simple_target_specification
        condition_number
        filter_db_ident
        filter_table_ident
        filter_string
        NUM_literal
        select_item
        opt_where_clause
        opt_having_clause
        opt_simple_limit

%type <item_list>
        when_list
        opt_filter_db_list filter_db_list
        opt_filter_table_list filter_table_list
        opt_filter_string_list filter_string_list
        opt_filter_db_pair_list filter_db_pair_list

%type <item_list2>
        expr_list udf_expr_list opt_udf_expr_list opt_expr_list select_item_list
        ident_list ident_list_arg

%type <var_type>
        option_type opt_var_type opt_var_ident_type

%type <key_type>
        normal_key_type opt_unique constraint_key_type fulltext spatial

%type <key_alg>
        btree_or_rtree

%type <string_list>
        using_list opt_use_partition use_partition

%type <key_part>
        key_part

%type <date_time_type> date_time_type;
%type <interval> interval

%type <interval_time_st> interval_time_stamp

%type <db_type> storage_engines known_storage_engines

%type <row_type> row_types

%type <tx_isolation> isolation_types

%type <ha_rkey_mode> handler_rkey_mode

%type <ha_read_mode> handler_read_or_scan handler_scan_function
        handler_rkey_function

%type <cast_type> cast_type

%type <symbol> keyword keyword_sp

%type <lex_user> user grant_user user_func

%type <charset>
        opt_collate
        opt_collate_explicit
        charset_name
        charset_name_or_default
        old_or_new_charset_name
        old_or_new_charset_name_or_default
        collation_name
        collation_name_or_default
        opt_load_data_charset
        UNDERSCORE_CHARSET
        ascii unicode

%type <boolfunc2creator> comp_op

%type <NONE>
        create change drop
        truncate rename
        show describe load alter optimize keycache preload flush
        reset purge begin commit rollback savepoint release
        slave master_def master_defs master_file_def slave_until_opts
        repair analyze check start checksum filter_def filter_defs
        field_list field_list_item field_spec kill column_def key_def
        keycache_list keycache_list_or_parts assign_to_keycache
        assign_to_keycache_parts
        preload_list preload_list_or_parts preload_keys preload_keys_parts
        handler
        opt_column opt_restrict
        grant revoke lock unlock string_list field_options field_option
        field_opt_list table_lock_list table_lock
        ref_list opt_match_clause opt_on_update_delete use
        varchar nchar nvarchar
        opt_outer table_list table_name
        opt_place
        opt_attribute opt_attribute_list attribute column_list column_list_id
        opt_column_list grant_privileges grant_ident grant_list grant_option
        object_privilege object_privilege_list user_list rename_list
        clear_privileges flush_options flush_option
        opt_flush_lock flush_options_list
        equal optional_braces
        opt_mi_check_type opt_to mi_check_types normal_join
        table_to_table_list table_to_table opt_table_list opt_as
        opt_and charset
        help
        opt_extended_describe
        prepare prepare_src execute deallocate
        sp_suid
        sp_c_chistics sp_a_chistics sp_chistic sp_c_chistic xa
        opt_field_or_var_spec fields_or_vars opt_load_data_set_spec
        view_replace_or_algorithm view_replace
        view_algorithm view_or_trigger_or_sp_or_event
        definer_tail no_definer_tail
        view_suid view_tail view_list_opt view_list view_select
        view_check_option trigger_tail
        sp_tail sf_tail udf_tail event_tail
        install uninstall partition_entry binlog_base64_event
        init_key_options normal_key_options normal_key_opts all_key_opt
        spatial_key_options fulltext_key_options normal_key_opt
        fulltext_key_opt spatial_key_opt fulltext_key_opts spatial_key_opts
        key_using_alg
        part_column_list
        server_options_list server_option
        definer_opt no_definer definer get_diagnostics
        alter_user_command password_expire
        group_replication
END_OF_INPUT

%type <NONE> call sp_proc_stmts sp_proc_stmts1 sp_proc_stmt
%type <NONE> sp_proc_stmt_statement sp_proc_stmt_return
%type <NONE> sp_proc_stmt_if
%type <NONE> sp_labeled_control sp_proc_stmt_unlabeled
%type <NONE> sp_labeled_block sp_unlabeled_block
%type <NONE> sp_proc_stmt_leave
%type <NONE> sp_proc_stmt_iterate
%type <NONE> sp_proc_stmt_open sp_proc_stmt_fetch sp_proc_stmt_close
%type <NONE> case_stmt_specification simple_case_stmt searched_case_stmt

%type <num>  sp_decl_idents sp_opt_inout sp_handler_type sp_hcond_list
%type <spcondvalue> sp_cond sp_hcond sqlstate signal_value opt_signal_value
%type <spblock> sp_decls sp_decl
%type <spname> sp_name
%type <index_hint> index_hint_type
%type <num> index_hint_clause
%type <filetype> data_or_xml

%type <NONE> signal_stmt resignal_stmt
%type <da_condition_item_name> signal_condition_information_item_name

%type <diag_area> which_area;
%type <diag_info> diagnostics_information;
%type <stmt_info_item> statement_information_item;
%type <stmt_info_item_name> statement_information_item_name;
%type <stmt_info_list> statement_information;
%type <cond_info_item> condition_information_item;
%type <cond_info_item_name> condition_information_item_name;
%type <cond_info_list> condition_information;
%type <signal_item_list> signal_information_item_list;
%type <signal_item_list> opt_set_signal_information;

%type <trg_characteristics> trigger_follows_precedes_clause;
%type <trigger_action_order_type> trigger_action_order;

%type <xid> xid;
%type <xa_option_type> opt_join_or_resume;
%type <xa_option_type> opt_suspend;
%type <xa_option_type> opt_one_phase;

%type <is_not_empty> opt_convert_xid opt_ignore

%type <NONE>
        '-' '+' '*' '/' '%' '(' ')'
        ',' '!' '' '&' '|' AND_SYM OR_SYM OR_OR_SYM BETWEEN_SYM CASE_SYM
        THEN_SYM WHEN_SYM DIV_SYM MOD_SYM OR2_SYM AND_AND_SYM

%type<NONE> SHOW DESC DESCRIBE describe_command

/*
  A bit field of SLAVE_IO, SLAVE_SQL flags.
*/
%type <num> opt_slave_thread_option_list
%type <num> slave_thread_option_list
%type <num> slave_thread_option

%type <key_usage_element> key_usage_element

%type <key_usage_list> key_usage_list opt_key_usage_list index_hint_definition
        index_hints_list opt_index_hints_list opt_key_definition
        cache_key_list_or_empty cache_keys_spec

%type <subselect> subselect

%type <order_expr> order_expr
        grouping_expr

%type <order_list> order_list group_list gorder_list opt_gorder_clause

%type <c_str> field_length opt_field_length type_datetime_precision

%type <ulong_num> opt_bin_mod

%type <precision> precision opt_precision float_options

%type <charset_with_flags> opt_binary

%type <limit_options> limit_options

%type <limit_clause> limit_clause opt_limit_clause

%type <ulonglong_number> query_spec_option query_spec_option_list
        opt_query_spec_options

%type <select_options> select_option select_option_list select_options
        empty_select_options

%type <node> join_table order_or_limit opt_union_order_or_limit
        option_value union_opt

%type <table_reference_list> table_reference_list from_clause opt_from_clause

%type <select_part2_derived> select_part2_derived

%type <olap_type> olap_opt

%type <group> opt_group_clause

%type <order> order_clause opt_order_clause

%type <procedure_analyse_params> opt_procedure_analyse_params

%type <procedure_analyse> opt_procedure_analyse_clause

%type <select_lock_type> opt_select_lock_type

%type <union_order_or_limit> union_order_or_limit

%type <table_expression> table_expression

%type <table_list2> select_derived_union
        table_factor table_ref esc_table_ref derived_table_list select_derived

%type <join_table_list> join_table_list

%type <select_paren_derived> select_paren_derived

%type <select_lex2> query_specification query_expression_body

%type <internal_variable_name> internal_variable_name

%type <option_value_following_option_type> option_value_following_option_type

%type <option_value_no_option_type> option_value_no_option_type

%type <option_value_list> option_value_list option_value_list_continued

%type <start_option_value_list> start_option_value_list

%type <transaction_access_mode> transaction_access_mode
        opt_transaction_access_mode

%type <isolation_level> isolation_level opt_isolation_level

%type <transaction_characteristics> transaction_characteristics

%type <start_option_value_list_following_option_type>
        start_option_value_list_following_option_type

%type <set> set

%type <union_list> union_list opt_union_clause

%type <line_separators> line_term line_term_list opt_line_term

%type <field_separators> field_term field_term_list opt_field_term

%type <into_destination> into_destination into opt_into

%type <select_var_ident> select_var_ident

%type <select_var_list> select_var_list

%type <select_options_and_item_list> select_options_and_item_list

%type <select_part2> select_part2

%type <select_paren> select_paren

%type <select_init> select_init

%type <select> select do_stmt

%type <param_marker> param_marker

%type <text_literal> text_literal

%type <item_list2> values opt_values row_value fields

%type <statement>
        delete_stmt
        update_stmt
        insert_stmt
        replace_stmt
        shutdown_stmt
	alter_instance_stmt

%type <table_ident> table_ident_opt_wild

%type <table_ident_list> table_alias_ref_list

%type <num> opt_delete_options

%type <opt_delete_option> opt_delete_option

%type <column_value_pair>
        update_elem

%type <column_value_list_pair>
        update_list
        opt_insert_update_list

%type <create_select> create_select

%type <values_list> values_list insert_values

%type <insert_from_subquery> insert_from_subquery

%type <insert_query_expression> insert_query_expression

%type <column_row_value_list_pair> insert_from_constructor

%type <optimizer_hints> SELECT_SYM INSERT REPLACE UPDATE_SYM DELETE_SYM

%type <alter_instance_action> alter_instance_action


%%

/*
  Indentation of grammar rules:

rule: <-- starts at col 1
          rule1a rule1b rule1c <-- starts at col 11
        | rule2a rule2b
        ; <-- on a line by itself, starts at col 9

  Also, please do not use any <TAB>, but spaces.
  Having a uniform indentation in this file helps
  code reviews, patches, merges, and make maintenance easier.
  Tip: grep [[:cntrl:]] sql_yacc.yy
  Thanks.
*/

query:
          END_OF_INPUT
            thd->lex->sql_command= SQLCOM_EMPTY_QUERY;
            YYLIP->found_semicolon= NULL;
          }
        | verb_clause
            else
          }
          ';'
          opt_end_of_input
        | verb_clause END_OF_INPUT
        ;

opt_end_of_input:
          /* empty */
        | END_OF_INPUT
        ;

verb_clause:
          statement
        | begin
        ;

/* Verb clauses, except begin */
statement:
          alter
        | analyze
        | binlog_base64_event
        | call
        | change
        | check
        | checksum
        | commit
        | create
        | deallocate
        | delete_stmt
        | describe
        | do_stmt
        | drop
        | execute
        | flush
        | get_diagnostics
        | group_replication
        | grant
        | handler
        | help
        | insert_stmt
        | install
        | kill
        | load
        | lock
        | optimize
        | keycache
        | parse_gcol_expr
        | partition_entry
        | preload
        | prepare
        | purge
        | release
        | rename
        | repair
        | replace_stmt
        | reset
        | resignal_stmt
        | revoke
        | rollback
        | savepoint
        | select
        | set
        | signal_stmt
        | show
        | shutdown_stmt
        | slave
        | start
        | truncate
        | uninstall
        | unlock
        | update_stmt
        | use
        | xa
        ;

deallocate:
          deallocate_or_drop PREPARE_SYM ident
        ;

deallocate_or_drop:
          DEALLOCATE_SYM
        | DROP
        ;

prepare:
          PREPARE_SYM ident FROM prepare_src
        ;

prepare_src:
          TEXT_STRING_sys
        | '@' ident_or_text
        ;

execute:
          EXECUTE_SYM ident
          execute_using
        ;

execute_using:
          /* nothing */
        | USING execute_var_list
        ;

execute_var_list:
          execute_var_list ',' execute_var_ident
        | execute_var_ident
        ;

execute_var_ident:
          '@' ident_or_text
        ;

/* help */

help:
          HELP_SYM
          }
          ident_or_text
        ;

/* change master */

change:
          CHANGE MASTER_SYM TO_SYM
          master_defs opt_channel
        | CHANGE REPLICATION FILTER_SYM
          filter_defs
        ;

filter_defs:
          filter_def
        | filter_defs ',' filter_def
        ;
filter_def:
          REPLICATE_DO_DB EQ opt_filter_db_list
        | REPLICATE_IGNORE_DB EQ opt_filter_db_list
        | REPLICATE_DO_TABLE EQ opt_filter_table_list
        | REPLICATE_IGNORE_TABLE EQ opt_filter_table_list
        | REPLICATE_WILD_DO_TABLE EQ opt_filter_string_list
        | REPLICATE_WILD_IGNORE_TABLE EQ opt_filter_string_list
        | REPLICATE_REWRITE_DB EQ opt_filter_db_pair_list
        ;
opt_filter_db_list:
          '(' ')'
        | '(' filter_db_list ')'
        ;

filter_db_list:
          filter_db_ident
        | filter_db_list ',' filter_db_ident
        ;

filter_db_ident:
          ident /* DB name */
        ;
opt_filter_db_pair_list:
          '(' ')'
        |'(' filter_db_pair_list ')'
        ;
filter_db_pair_list:
          '(' filter_db_ident ',' filter_db_ident ')'
        | filter_db_pair_list ',' '(' filter_db_ident ',' filter_db_ident ')'
        ;
opt_filter_table_list:
          '(' ')'
        |'(' filter_table_list ')'
        ;

filter_table_list:
          filter_table_ident
        | filter_table_list ',' filter_table_ident
        ;

filter_table_ident:
          ident '.' ident /* qualified table name */
        ;

opt_filter_string_list:
          '(' ')'
        |'(' filter_string_list ')'
        ;

filter_string_list:
          filter_string
        | filter_string_list ',' filter_string
        ;

filter_string:
          filter_wild_db_table_string
        ;

master_defs:
          master_def
        | master_defs ',' master_def
        ;

master_def:
          MASTER_HOST_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_BIND_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_USER_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_PASSWORD_SYM EQ TEXT_STRING_sys_nonewline
            Lex->contains_plaintext_password= true;
          }
        | MASTER_PORT_SYM EQ ulong_num
        | MASTER_CONNECT_RETRY_SYM EQ ulong_num
        | MASTER_RETRY_COUNT_SYM EQ ulong_num
        | MASTER_DELAY_SYM EQ ulong_num
            else
              Lex->mi.sql_delay = $3;
          }
        | MASTER_SSL_SYM EQ ulong_num
        | MASTER_SSL_CA_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_SSL_CAPATH_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_TLS_VERSION_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_SSL_CERT_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_SSL_CIPHER_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_SSL_KEY_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_SSL_VERIFY_SERVER_CERT_SYM EQ ulong_num
        | MASTER_SSL_CRL_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_SSL_CRLPATH_SYM EQ TEXT_STRING_sys_nonewline

        | MASTER_HEARTBEAT_PERIOD_SYM EQ NUM_literal
            if (Lex->mi.heartbeat_period > slave_net_timeout)
            if (Lex->mi.heartbeat_period < 0.001)
              Lex->mi.heartbeat_opt=  LEX_MASTER_INFO::LEX_MI_DISABLE;
            }
            Lex->mi.heartbeat_opt=  LEX_MASTER_INFO::LEX_MI_ENABLE;
          }
        | IGNORE_SERVER_IDS_SYM EQ '(' ignore_server_id_list ')'
        |
        MASTER_AUTO_POSITION_SYM EQ ulong_num
        |
        master_file_def
        ;

ignore_server_id_list:
          /* Empty */
          | ignore_server_id
          | ignore_server_id_list ',' ignore_server_id
        ;

ignore_server_id:
          ulong_num

master_file_def:
          MASTER_LOG_FILE_SYM EQ TEXT_STRING_sys_nonewline
        | MASTER_LOG_POS_SYM EQ ulonglong_num
        | RELAY_LOG_FILE_SYM EQ TEXT_STRING_sys_nonewline
        | RELAY_LOG_POS_SYM EQ ulong_num
        ;

opt_channel:
         /*empty */
     | FOR_SYM CHANNEL_SYM TEXT_STRING_sys_nonewline
    ;

/* create a table */

create:
          CREATE opt_table_options TABLE_SYM opt_if_not_exists table_ident
          create2
            create_table_set_open_action_and_adjust_tables(lex);
          }
        | CREATE opt_unique INDEX_SYM ident key_alg ON table_ident
          '(' key_list ')' normal_key_options
          opt_index_lock_algorithm
        | CREATE fulltext INDEX_SYM ident init_key_options ON
          table_ident
          '(' key_list ')' fulltext_key_options
          opt_index_lock_algorithm
        | CREATE spatial INDEX_SYM ident init_key_options ON
          table_ident
          '(' key_list ')' spatial_key_options
          opt_index_lock_algorithm
        | CREATE DATABASE opt_if_not_exists ident
          opt_create_database_options
        | CREATE
          view_or_trigger_or_sp_or_event
        | CREATE USER opt_if_not_exists clear_privileges grant_list require_clause
                      connect_options opt_account_lock_password_expire_options
        | CREATE LOGFILE_SYM GROUP_SYM logfile_group_info
        | CREATE TABLESPACE_SYM tablespace_info
        | CREATE SERVER_SYM ident_or_text FOREIGN DATA_SYM WRAPPER_SYM
          ident_or_text OPTIONS_SYM '(' server_options_list ')'
            Lex->server_options.m_server_name= $3;
            Lex->server_options.set_scheme($7);
            Lex->m_sql_cmd=
              new (YYTHD->mem_root) Sql_cmd_create_server(&Lex->server_options);
          }
        ;

server_options_list:
          server_option
        | server_options_list ',' server_option
        ;

server_option:
          USER TEXT_STRING_sys
        | HOST_SYM TEXT_STRING_sys
        | DATABASE TEXT_STRING_sys
        | OWNER_SYM TEXT_STRING_sys
        | PASSWORD TEXT_STRING_sys
        | SOCKET_SYM TEXT_STRING_sys
        | PORT_SYM ulong_num
        ;

event_tail:
          EVENT_SYM opt_if_not_exists sp_name
          ON SCHEDULE_SYM ev_schedule_time
          opt_ev_on_completion
          opt_ev_status
          opt_ev_comment
          DO_SYM ev_sql_stmt
        ;

ev_schedule_time:
          EVERY_SYM expr interval
          ev_starts
          ev_ends
        | AT_SYM expr
        ;

opt_ev_status:
          /* empty */
        | ENABLE_SYM
        | DISABLE_SYM ON SLAVE
        | DISABLE_SYM
        ;

ev_starts:
          /* empty */
        | STARTS_SYM expr
        ;

ev_ends:
          /* empty */
        | ENDS_SYM expr
        ;

opt_ev_on_completion:
          /* empty */
        | ev_on_completion
        ;

ev_on_completion:
          ON COMPLETION_SYM PRESERVE_SYM
        | ON COMPLETION_SYM NOT_SYM PRESERVE_SYM
        ;

opt_ev_comment:
          /* empty */
        | COMMENT_SYM TEXT_STRING_sys
        ;

ev_sql_stmt:

            sp_head *sp= sp_start_parsing(thd,
                                          SP_TYPE_EVENT,
                                          lex->event_parse_data->identifier);

            if (!sp)
              MYSQL_YYABORT;

            lex->sphead= sp;

            memset(&lex->sp_chistics, 0, sizeof(st_sp_chistics));
            sp->m_chistics= &lex->sp_chistics;

            /*
              Set a body start to the end of the last preprocessed token
              before ev_sql_stmt:
            */
            sp->set_body_start(thd, @0.cpp.end);
          }
          ev_sql_stmt_inner
        ;

ev_sql_stmt_inner:
          sp_proc_stmt_statement
        | sp_proc_stmt_return
        | sp_proc_stmt_if
        | case_stmt_specification
        | sp_labeled_block
        | sp_unlabeled_block
        | sp_labeled_control
        | sp_proc_stmt_unlabeled
        | sp_proc_stmt_leave
        | sp_proc_stmt_iterate
        | sp_proc_stmt_open
        | sp_proc_stmt_fetch
        | sp_proc_stmt_close
        ;

clear_privileges:
          clear_password_expire_options
        ;

clear_password_expire_options:
         /* Nothing */
        ;

sp_name:
          ident '.' ident
            $$= new sp_name(to_lex_cstring($1), $3, true);
            if ($$ == NULL)
              MYSQL_YYABORT;
            $$->init_qname(YYTHD);
          }
        | ident
            if (lex->copy_db_to(&db.str, &db.length))
              MYSQL_YYABORT;
            $$= new sp_name(to_lex_cstring(db), $1, false);
            if ($$ == NULL)
              MYSQL_YYABORT;
            $$->init_qname(thd);
          }
        ;

sp_a_chistics:
          /* Empty */
        | sp_a_chistics sp_chistic
        ;

sp_c_chistics:
          /* Empty */
        | sp_c_chistics sp_c_chistic
        ;

/* Characteristics for both create and alter */
sp_chistic:
          COMMENT_SYM TEXT_STRING_sys
        | LANGUAGE_SYM SQL_SYM
        | NO_SYM SQL_SYM
        | CONTAINS_SYM SQL_SYM
        | READS_SYM SQL_SYM DATA_SYM
        | MODIFIES_SYM SQL_SYM DATA_SYM
        | sp_suid
        ;

/* Create characteristics */
sp_c_chistic:
          sp_chistic
        | DETERMINISTIC_SYM
        | not DETERMINISTIC_SYM
        ;

sp_suid:
          SQL_SYM SECURITY_SYM DEFINER_SYM
        | SQL_SYM SECURITY_SYM INVOKER_SYM
        ;

call:
          CALL_SYM sp_name
          opt_sp_cparam_list
        ;

/* CALL parameters */
opt_sp_cparam_list:
          /* Empty */
        | '(' opt_sp_cparams ')'
        ;

opt_sp_cparams:
          /* Empty */
        | sp_cparams
        ;

sp_cparams:
          sp_cparams ',' expr
        | expr
        ;

/* Stored FUNCTION parameter declaration list */
sp_fdparam_list:
          /* Empty */
        | sp_fdparams
        ;

sp_fdparams:
          sp_fdparams ',' sp_fdparam
        | sp_fdparam
        ;

sp_init_param:
          /* Empty */
        ;

sp_fdparam:
          ident sp_init_param type_with_opt_collate

            sp_variable *spvar= pctx->add_variable(thd,
                                                   $1,
                                                   (enum enum_field_types) $3,
                                                   sp_variable::MODE_IN);

            if (fill_field_definition(thd, sp,
                                      (enum enum_field_types) $3,
                                      &spvar->field_def))
            spvar->field_def.field_name= spvar->name.str;
            spvar->field_def.pack_flag |= FIELDFLAG_MAYBE_NULL;
          }
        ;

/* Stored PROCEDURE parameter declaration list */
sp_pdparam_list:
          /* Empty */
        | sp_pdparams
        ;

sp_pdparams:
          sp_pdparams ',' sp_pdparam
        | sp_pdparam
        ;

sp_pdparam:
          sp_opt_inout sp_init_param ident type_with_opt_collate
            sp_variable *spvar= pctx->add_variable(thd,
                                                   $3,
                                                   (enum enum_field_types) $4,
                                                   (sp_variable::enum_mode) $1);

            if (fill_field_definition(thd, sp,
                                      (enum enum_field_types) $4,
                                      &spvar->field_def))
            spvar->field_def.field_name= spvar->name.str;
            spvar->field_def.pack_flag |= FIELDFLAG_MAYBE_NULL;
          }
        ;

sp_opt_inout:
          /* Empty */
        | IN_SYM
        | OUT_SYM
        | INOUT_SYM
        ;

sp_proc_stmts:
          /* Empty */
        | sp_proc_stmts  sp_proc_stmt ';'
        ;

sp_proc_stmts1:
          sp_proc_stmt ';'
        | sp_proc_stmts1  sp_proc_stmt ';'
        ;

sp_decls:
          /* Empty */
        | sp_decls sp_decl ';'
            if ($2.curs && $1.hndlrs)
            $$.vars= $1.vars + $2.vars;
            $$.conds= $1.conds + $2.conds;
            $$.hndlrs= $1.hndlrs + $2.hndlrs;
            $$.curs= $1.curs + $2.curs;
          }
        ;

sp_decl:
          DECLARE_SYM           /*$1*/
          sp_decl_idents        /*$2*/
          type_with_opt_collate /*$4*/
          sp_opt_default        /*$5*/
            }
            else

            // We can have several variables in DECLARE statement.
            // We need to create an sp_instr_set instruction for each variable.

            for (uint i = num_vars-$2 ; i < num_vars ; i++)

            pctx->declare_var_boundary(0);
            if (sp->restore_lex(thd))
              MYSQL_YYABORT;
            $$.vars= $2;
            $$.conds= $$.hndlrs= $$.curs= 0;
          }
        | DECLARE_SYM ident CONDITION_SYM FOR_SYM sp_cond
            if(pctx->add_condition(thd, $2, $5))
              MYSQL_YYABORT;
            lex->keep_diagnostics= DA_KEEP_DIAGNOSTICS; // DECLARE COND FOR
            $$.vars= $$.hndlrs= $$.curs= 0;
            $$.conds= 1;
          }
        | DECLARE_SYM sp_handler_type HANDLER_SYM FOR_SYM
            }

            if (sp->m_parser_data.add_backpatch_entry(
                  i, handler_pctx->push_label(thd, EMPTY_STR, 0)))

            lex->keep_diagnostics= DA_KEEP_DIAGNOSTICS; // DECL HANDLER FOR
          }
          sp_hcond_list sp_proc_stmt
            else

            sp->m_parser_data.do_backpatch(hlab, sp->instructions());

            lex->set_sp_current_parsing_ctx(pctx->pop_context());

            $$.vars= $$.conds= $$.curs= 0;
            $$.hndlrs= 1;
          }
        | DECLARE_SYM   /*$1*/
          ident         /*$2*/
          CURSOR_SYM    /*$3*/
          FOR_SYM       /*$4*/
          select        /*$6*/

            cursor_lex->sp_lex_in_use= true;

            if (sp->restore_lex(thd))
              MYSQL_YYABORT;

            LEX *lex= Lex;
            sp_pcontext *pctx= lex->get_sp_current_parsing_ctx();

            uint offp;

            if (pctx->find_cursor($2, &offp, TRUE))

            LEX_STRING cursor_query= EMPTY_STR;

            if (cursor_lex->is_metadata_used())

            sp_instr_cpush *i=
              new (thd->mem_root)
                sp_instr_cpush(sp->instructions(), pctx,
                               cursor_lex, cursor_query,
                               pctx->current_cursor_count());

            if (i == NULL ||
                sp->add_instr(thd, i) ||
                pctx->add_cursor($2))

            $$.vars= $$.conds= $$.hndlrs= 0;
            $$.curs= 1;
          }
        ;

sp_handler_type:
          EXIT_SYM
        | CONTINUE_SYM
        /*| UNDO_SYM */
        ;

sp_hcond_list:
          sp_hcond_element
        | sp_hcond_list ',' sp_hcond_element
        ;

sp_hcond_element:
          sp_hcond
            else
          }
        ;

sp_cond:
          ulong_num
            $$= new (YYTHD->mem_root) sp_condition_value($1);
            if ($$ == NULL)
              MYSQL_YYABORT;
          }
        | sqlstate
        ;

sqlstate:
          SQLSTATE_SYM opt_value TEXT_STRING_literal
            $$= new (YYTHD->mem_root) sp_condition_value($3.str);
            if ($$ == NULL)
              MYSQL_YYABORT;
          }
        ;

opt_value:
          /* Empty */
        | VALUE_SYM
        ;

sp_hcond:
          sp_cond
        | ident /* CONDITION name */
          }
        | SQLWARNING_SYM /* SQLSTATEs 01??? */
        | not FOUND_SYM /* SQLSTATEs 02??? */
        | SQLEXCEPTION_SYM /* All other SQLSTATEs */
        ;

signal_stmt:
          SIGNAL_SYM signal_value opt_set_signal_information
        ;

signal_value:
          ident

            sp_condition_value *cond= pctx->find_condition($1, false);

            if (!cond)
            if (cond->type != sp_condition_value::SQLSTATE)
            $$= cond;
          }
        | sqlstate
        ;

opt_signal_value:
          /* empty */
        | signal_value
        ;

opt_set_signal_information:
          /* empty */
        | SET signal_information_item_list
        ;

signal_information_item_list:
          signal_condition_information_item_name EQ signal_allowed_expr
        | signal_information_item_list ','
          signal_condition_information_item_name EQ signal_allowed_expr
        ;

/*
  Only a limited subset of <expr> are allowed in SIGNAL/RESIGNAL.
*/
signal_allowed_expr:
          literal
        | variable
            }
            $$= $1;
          }
        | simple_ident
        ;

/* conditions that can be set in signal / resignal */
signal_condition_information_item_name:
          CLASS_ORIGIN_SYM
        | SUBCLASS_ORIGIN_SYM
        | CONSTRAINT_CATALOG_SYM
        | CONSTRAINT_SCHEMA_SYM
        | CONSTRAINT_NAME_SYM
        | CATALOG_NAME_SYM
        | SCHEMA_NAME_SYM
        | TABLE_NAME_SYM
        | COLUMN_NAME_SYM
        | CURSOR_NAME_SYM
        | MESSAGE_TEXT_SYM
        | MYSQL_ERRNO_SYM
        ;

resignal_stmt:
          RESIGNAL_SYM opt_signal_value opt_set_signal_information
        ;

get_diagnostics:
          GET_SYM which_area DIAGNOSTICS_SYM diagnostics_information
        ;

which_area:
        /* If <which area> is not specified, then CURRENT is implicit. */
        | CURRENT_SYM
        | STACKED_SYM
        ;

diagnostics_information:
          statement_information
        | CONDITION_SYM condition_number condition_information
        ;

statement_information:
          statement_information_item
        | statement_information ',' statement_information_item
        ;

statement_information_item:
          simple_target_specification EQ statement_information_item_name

simple_target_specification:
          ident

            $$=
              create_item_for_sp_var(
                thd, $1, NULL,
                sp->m_parser_data.get_current_stmt_start_ptr(),
                @1.raw.start,
                @1.raw.end);

            if ($$ == NULL)
              MYSQL_YYABORT;
          }
        | '@' ident_or_text
        ;

statement_information_item_name:
          NUMBER_SYM
        | ROW_COUNT_SYM
        ;

/*
   Only a limited subset of <expr> are allowed in GET DIAGNOSTICS
   <condition number>, same subset as for SIGNAL/RESIGNAL.
*/
condition_number:
          signal_allowed_expr
        ;

condition_information:
          condition_information_item
        | condition_information ',' condition_information_item
        ;

condition_information_item:
          simple_target_specification EQ condition_information_item_name

condition_information_item_name:
          CLASS_ORIGIN_SYM
        | SUBCLASS_ORIGIN_SYM
        | CONSTRAINT_CATALOG_SYM
        | CONSTRAINT_SCHEMA_SYM
        | CONSTRAINT_NAME_SYM
        | CATALOG_NAME_SYM
        | SCHEMA_NAME_SYM
        | TABLE_NAME_SYM
        | COLUMN_NAME_SYM
        | CURSOR_NAME_SYM
        | MESSAGE_TEXT_SYM
        | MYSQL_ERRNO_SYM
        | RETURNED_SQLSTATE_SYM
        ;

sp_decl_idents:
          ident

            pctx->add_variable(thd,
                               $1,
                               MYSQL_TYPE_DECIMAL,
                               sp_variable::MODE_IN);
            $$= 1;
          }
        | sp_decl_idents ',' ident

            pctx->add_variable(thd,
                               $3,
                               MYSQL_TYPE_DECIMAL,
                               sp_variable::MODE_IN);
            $$= $1 + 1;
          }
        ;

sp_opt_default:
        /* Empty */
        | DEFAULT
          expr
        ;

sp_proc_stmt:
          sp_proc_stmt_statement
        | sp_proc_stmt_return
        | sp_proc_stmt_if
        | case_stmt_specification
        | sp_labeled_block
        | sp_unlabeled_block
        | sp_labeled_control
        | sp_proc_stmt_unlabeled
        | sp_proc_stmt_leave
        | sp_proc_stmt_iterate
        | sp_proc_stmt_open
        | sp_proc_stmt_fetch
        | sp_proc_stmt_close
        ;

sp_proc_stmt_if:
          IF
          sp_if END IF
        ;

sp_proc_stmt_statement:
          statement
            /*
              Don't add an instruction for SET statements, since all
              instructions for them were already added during processing
              of "set" rule.
            */
            DBUG_ASSERT(lex->sql_command != SQLCOM_SET_OPTION ||
                        lex->var_list.is_empty());
            if (lex->sql_command != SQLCOM_SET_OPTION)

            if (sp->restore_lex(thd))
              MYSQL_YYABORT;
          }
        ;

sp_proc_stmt_return:
          RETURN_SYM    /*$1*/
          expr          /*$3*/

            /* Check that this is a stored function. */

            if (sp->m_type != SP_TYPE_FUNCTION)

            /* Indicate that we've reached RETURN statement. */

            sp->m_flags|= sp_head::HAS_RETURN;

            /* Add instruction. */

            sp_instr_freturn *i=
              new (thd->mem_root)
                sp_instr_freturn(sp->instructions(), lex, $3, expr_query,
                                 sp->m_return_field_def.sql_type);

            if (i == NULL ||
                sp->add_instr(thd, i) ||
                sp->restore_lex(thd))
          }
        ;

sp_proc_stmt_unlabeled:
          sp_unlabeled_control
        ;

sp_proc_stmt_leave:
          LEAVE_SYM label_ident

            uint ip= sp->instructions();

            /*
              When jumping to a BEGIN-END block end, the target jump
              points to the block hpop/cpop cleanup instructions,
              so we should exclude the block context here.
              When jumping to something else (i.e., sp_label::ITERATION),
              there are no hpop/cpop at the jump destination,
              so we should include the block context here for cleanup.
            */
            bool exclusive= (lab->type == sp_label::BEGIN);

            size_t n= pctx->diff_handlers(lab->ctx, exclusive);

            if (n)

            n= pctx->diff_cursors(lab->ctx, exclusive);

            if (n)

            sp_instr_jump *i= new (thd->mem_root) sp_instr_jump(ip, pctx);

            if (!i ||
                /* Jumping forward */
                sp->m_parser_data.add_backpatch_entry(i, lab) ||
                sp->add_instr(thd, i))
              MYSQL_YYABORT;
          }
        ;

sp_proc_stmt_iterate:
          ITERATE_SYM label_ident

            uint ip= sp->instructions();

            /* Inclusive the dest. */
            size_t n= pctx->diff_handlers(lab->ctx, FALSE);

            if (n)

            /* Inclusive the dest. */
            n= pctx->diff_cursors(lab->ctx, FALSE);

            if (n)

            /* Jump back */
            sp_instr_jump *i=
              new (thd->mem_root) sp_instr_jump(ip, pctx, lab->ip);

            if (!i || sp->add_instr(thd, i))
              MYSQL_YYABORT;
          }
        ;

sp_proc_stmt_open:
          OPEN_SYM ident

            sp_instr_copen *i=
              new (thd->mem_root)
                sp_instr_copen(sp->instructions(), pctx, offset);

            if (!i || sp->add_instr(thd, i))
              MYSQL_YYABORT;
          }
        ;

sp_proc_stmt_fetch:
          FETCH_SYM sp_opt_fetch_noise ident INTO

            sp_instr_cfetch *i=
              new (thd->mem_root)
                sp_instr_cfetch(sp->instructions(), pctx, offset);

            if (!i || sp->add_instr(thd, i))
              MYSQL_YYABORT;
          }
          sp_fetch_list
        ;

sp_proc_stmt_close:
          CLOSE_SYM ident

            sp_instr_cclose *i=
              new (thd->mem_root)
                sp_instr_cclose(sp->instructions(), pctx, offset);

            if (!i || sp->add_instr(thd, i))
              MYSQL_YYABORT;
          }
        ;

sp_opt_fetch_noise:
          /* Empty */
        | NEXT_SYM FROM
        | FROM
        ;

sp_fetch_list:
          ident

            /* An SP local variable */
            sp_instr_cfetch *i= (sp_instr_cfetch *)sp->last_instruction();

            i->add_to_varlist(spv);
          }
        | sp_fetch_list ',' ident

            /* An SP local variable */
            sp_instr_cfetch *i= (sp_instr_cfetch *)sp->last_instruction();

            i->add_to_varlist(spv);
          }
        ;

sp_if:
          expr                  /*$2*/

            sp_instr_jump_if_not *i =
              new (thd->mem_root)
                sp_instr_jump_if_not(sp->instructions(), lex,
                                     $2, expr_query);

            /* Add jump instruction. */

            if (i == NULL ||
                sp->m_parser_data.add_backpatch_entry(
                  i, pctx->push_label(thd, EMPTY_STR, 0)) ||
                sp->m_parser_data.add_cont_backpatch_entry(i) ||
                sp->add_instr(thd, i) ||
                sp->restore_lex(thd))
          }
          THEN_SYM              /*$4*/
          sp_proc_stmts1        /*$5*/
          sp_elseifs            /*$7*/
        ;

sp_elseifs:
          /* Empty */
        | ELSEIF_SYM sp_if
        | ELSE sp_proc_stmts1
        ;

case_stmt_specification:
          simple_case_stmt
        | searched_case_stmt
        ;

simple_case_stmt:
          CASE_SYM                      /*$1*/
          expr                          /*$3*/

            /* Register new CASE-expression and get its id. */

            sp_pcontext *pctx= lex->get_sp_current_parsing_ctx();
            int case_expr_id= pctx->push_case_expr_id();

            if (case_expr_id < 0)
              MYSQL_YYABORT;

            /* Add CASE-set instruction. */

            sp_instr_set_case_expr *i=
              new (thd->mem_root)
                sp_instr_set_case_expr(sp->instructions(), lex,
                                       case_expr_id, $3, case_expr_query);

            if (i == NULL ||
                sp->m_parser_data.add_cont_backpatch_entry(i) ||
                sp->add_instr(thd, i) ||
                sp->restore_lex(thd))
          }
          simple_when_clause_list       /*$5*/
          else_clause_opt               /*$6*/
          END                           /*$7*/
          CASE_SYM                      /*$8*/
        ;

searched_case_stmt:
          CASE_SYM
          searched_when_clause_list
          else_clause_opt
          END
          CASE_SYM
        ;

simple_when_clause_list:
          simple_when_clause
        | simple_when_clause_list simple_when_clause
        ;

searched_when_clause_list:
          searched_when_clause
        | searched_when_clause_list searched_when_clause
        ;

simple_when_clause:
          WHEN_SYM                      /*$1*/
          expr                          /*$3*/

            /* Add CASE-when-jump instruction. */

            sp_instr_jump_case_when *i =
              new (thd->mem_root)
                sp_instr_jump_case_when(sp->instructions(), lex,
                                        pctx->get_current_case_expr_id(),
                                        $3, when_expr_query);

            if (i == NULL ||
                i->on_after_expr_parsing(thd) ||
                sp->m_parser_data.add_backpatch_entry(
                  i, pctx->push_label(thd, EMPTY_STR, 0)) ||
                sp->m_parser_data.add_cont_backpatch_entry(i) ||
                sp->add_instr(thd, i) ||
                sp->restore_lex(thd))
          }
          THEN_SYM                      /*$5*/
          sp_proc_stmts1                /*$6*/
        ;

searched_when_clause:
          WHEN_SYM                      /*$1*/
          expr                          /*$3*/

            /* Add jump instruction. */

            sp_instr_jump_if_not *i=
              new (thd->mem_root)
                sp_instr_jump_if_not(sp->instructions(), lex, $3, when_query);

            if (i == NULL ||
                sp->m_parser_data.add_backpatch_entry(
                  i, pctx->push_label(thd, EMPTY_STR, 0)) ||
                sp->m_parser_data.add_cont_backpatch_entry(i) ||
                sp->add_instr(thd, i) ||
                sp->restore_lex(thd))
          }
          THEN_SYM                      /*$6*/
          sp_proc_stmts1                /*$7*/
        ;

else_clause_opt:
          /* empty */
        | ELSE sp_proc_stmts1
        ;

sp_labeled_control:
          label_ident ':'
            else
          }
          sp_unlabeled_control sp_opt_label
            }
            sp->m_parser_data.do_backpatch(lab, sp->instructions());
          }
        ;

sp_opt_label:
          /* Empty  */
        | label_ident
        ;

sp_labeled_block:
          label_ident ':'

            lab= pctx->push_label(YYTHD, $1, sp->instructions());
            lab->type= sp_label::BEGIN;
          }
          sp_block_content sp_opt_label
            }
          }
        ;

sp_unlabeled_block:
          sp_block_content
        ;

sp_block_content:
          BEGIN_SYM
          sp_decls
          sp_proc_stmts
          END

            if ($3.curs)

            lex->set_sp_current_parsing_ctx(pctx->pop_context());
          }
        ;

sp_unlabeled_control:
          LOOP_SYM
          sp_proc_stmts1 END LOOP_SYM
        | WHILE_SYM                     /*$1*/
          expr                          /*$3*/

            /* Add jump instruction. */

            sp_instr_jump_if_not *i=
              new (thd->mem_root)
                sp_instr_jump_if_not(sp->instructions(), lex, $3, expr_query);

            if (i == NULL ||
                /* Jumping forward */
                sp->m_parser_data.add_backpatch_entry(i, pctx->last_label()) ||
                sp->m_parser_data.new_cont_backpatch() ||
                sp->m_parser_data.add_cont_backpatch_entry(i) ||
                sp->add_instr(thd, i) ||
                sp->restore_lex(thd))
          }
          DO_SYM                        /*$10*/
          sp_proc_stmts1                /*$11*/
          END                           /*$12*/
          WHILE_SYM                     /*$13*/
        | REPEAT_SYM                    /*$1*/
          sp_proc_stmts1                /*$2*/
          UNTIL_SYM                     /*$3*/
          expr                          /*$5*/

            /* Add jump instruction. */

            sp_instr_jump_if_not *i=
              new (thd->mem_root)
                sp_instr_jump_if_not(ip, lex, $5, expr_query,
                                     pctx->last_label()->ip);

            if (i == NULL ||
                sp->add_instr(thd, i) ||
                sp->restore_lex(thd))

            /* We can shortcut the cont_backpatch here */
            i->set_cont_dest(ip + 1);
          }
          END                           /*$7*/
          REPEAT_SYM                    /*$8*/
        ;

trg_action_time:
            BEFORE_SYM
          | AFTER_SYM
          ;

trg_event:
            INSERT
          | UPDATE_SYM
          | DELETE_SYM
          ;
/*
  This part of the parser contains common code for all TABLESPACE
  commands.
  CREATE TABLESPACE_SYM name ...
  ALTER TABLESPACE_SYM name CHANGE DATAFILE ...
  ALTER TABLESPACE_SYM name ADD DATAFILE ...
  ALTER TABLESPACE_SYM name access_mode
  CREATE LOGFILE GROUP_SYM name ...
  ALTER LOGFILE GROUP_SYM name ADD UNDOFILE ..
  ALTER LOGFILE GROUP_SYM name ADD REDOFILE ..
  DROP TABLESPACE_SYM name
  DROP LOGFILE GROUP_SYM name
*/
change_tablespace_access:
          tablespace_name
          ts_access_mode
        ;

change_tablespace_info:
          tablespace_name
          CHANGE ts_datafile
          change_ts_option_list
        ;

tablespace_info:
          tablespace_name
          ADD ts_datafile
          opt_logfile_group_name
          tablespace_option_list
        ;

opt_logfile_group_name:
          /* empty */
        | USE_SYM LOGFILE_SYM GROUP_SYM ident
        ;

alter_tablespace_info:
          tablespace_name
          ADD ts_datafile
          alter_tablespace_option_list
        | tablespace_name
          DROP ts_datafile
          alter_tablespace_option_list
        ;

logfile_group_info:
          logfile_group_name
          add_log_file
          logfile_group_option_list
        ;

alter_logfile_group_info:
          logfile_group_name
          add_log_file
          alter_logfile_group_option_list
        ;

add_log_file:
          ADD lg_undofile
        | ADD lg_redofile
        ;

change_ts_option_list:
          /* empty */
          change_ts_options
        ;

change_ts_options:
          change_ts_option
        | change_ts_options change_ts_option
        | change_ts_options ',' change_ts_option
        ;

change_ts_option:
          opt_ts_initial_size
        | opt_ts_autoextend_size
        | opt_ts_max_size
        ;

tablespace_option_list:
          /* empty */
        | tablespace_options
        ;

tablespace_options:
          tablespace_option
        | tablespace_options tablespace_option
        | tablespace_options ',' tablespace_option
        ;

tablespace_option:
          opt_ts_initial_size
        | opt_ts_autoextend_size
        | opt_ts_max_size
        | opt_ts_extent_size
        | opt_ts_nodegroup
        | opt_ts_engine
        | ts_wait
        | opt_ts_comment
        | opt_ts_file_block_size
        ;

alter_tablespace_option_list:
          /* empty */
        | alter_tablespace_options
        ;

alter_tablespace_options:
          alter_tablespace_option
        | alter_tablespace_options alter_tablespace_option
        | alter_tablespace_options ',' alter_tablespace_option
        ;

alter_tablespace_option:
          opt_ts_initial_size
        | opt_ts_autoextend_size
        | opt_ts_max_size
        | opt_ts_engine
        | ts_wait
        ;

logfile_group_option_list:
          /* empty */
        | logfile_group_options
        ;

logfile_group_options:
          logfile_group_option
        | logfile_group_options logfile_group_option
        | logfile_group_options ',' logfile_group_option
        ;

logfile_group_option:
          opt_ts_initial_size
        | opt_ts_undo_buffer_size
        | opt_ts_redo_buffer_size
        | opt_ts_nodegroup
        | opt_ts_engine
        | ts_wait
        | opt_ts_comment
        ;

alter_logfile_group_option_list:
          /* empty */
        | alter_logfile_group_options
        ;

alter_logfile_group_options:
          alter_logfile_group_option
        | alter_logfile_group_options alter_logfile_group_option
        | alter_logfile_group_options ',' alter_logfile_group_option
        ;

alter_logfile_group_option:
          opt_ts_initial_size
        | opt_ts_engine
        | ts_wait
        ;


ts_datafile:
          DATAFILE_SYM TEXT_STRING_sys
        ;

lg_undofile:
          UNDOFILE_SYM TEXT_STRING_sys
        ;

lg_redofile:
          REDOFILE_SYM TEXT_STRING_sys
        ;

tablespace_name:
          ident
        ;

logfile_group_name:
          ident
        ;

ts_access_mode:
          READ_ONLY_SYM
        | READ_WRITE_SYM
        | NOT_SYM ACCESSIBLE_SYM
        ;

opt_ts_initial_size:
          INITIAL_SIZE_SYM opt_equal size_number
        ;

opt_ts_autoextend_size:
          AUTOEXTEND_SIZE_SYM opt_equal size_number
        ;

opt_ts_max_size:
          MAX_SIZE_SYM opt_equal size_number
        ;

opt_ts_extent_size:
          EXTENT_SIZE_SYM opt_equal size_number
        ;

opt_ts_undo_buffer_size:
          UNDO_BUFFER_SIZE_SYM opt_equal size_number
        ;

opt_ts_redo_buffer_size:
          REDO_BUFFER_SIZE_SYM opt_equal size_number
        ;

opt_ts_nodegroup:
          NODEGROUP_SYM opt_equal real_ulong_num
            lex->alter_tablespace_info->nodegroup_id= $3;
          }
        ;

opt_ts_comment:
          COMMENT_SYM opt_equal TEXT_STRING_sys
            lex->alter_tablespace_info->ts_comment= $3.str;
          }
        ;

opt_ts_engine:
          opt_storage ENGINE_SYM opt_equal storage_engines
            lex->alter_tablespace_info->storage_engine= $4;
          }
        ;

opt_ts_file_block_size:
          FILE_BLOCK_SIZE_SYM opt_equal size_number
            lex->alter_tablespace_info->file_block_size= $3;
          }
        ;

ts_wait:
          WAIT_SYM
        | NO_WAIT_SYM
            lex->alter_tablespace_info->wait_until_completed= FALSE;
          }
        ;

size_number:
          real_ulonglong_num
        | IDENT_sys
              }
              if (prefix_number >> 31)
              number= prefix_number << text_shift_number;
            }
            else
            $$= number;
          }
        ;

/*
  End tablespace part
*/

create2:
          '(' create2a
        | opt_create_table_options
          opt_create_partitioning
          create3
        | LIKE table_ident
        | '(' LIKE table_ident ')'
        ;

create2a:
          create_field_list ')' opt_create_table_options
          opt_create_partitioning
          create3
        |  opt_create_partitioning
           create_select ')'
           union_opt
        ;

create3:
          /* empty */
        | opt_duplicate opt_as create_select
          opt_union_clause
        | opt_duplicate opt_as '(' create_select ')'
          union_opt
        ;

opt_create_partitioning:
          opt_partitioning
        ;

/*
 This part of the parser is about handling of the partition information.

 It's first version was written by Mikael Ronström with lots of answers to
 questions provided by Antony Curtis.

 The partition grammar can be called from three places.
 1) CREATE TABLE ... PARTITION ..
 2) ALTER TABLE table_name PARTITION ...
 3) PARTITION ...

 The first place is called when a new table is created from a MySQL client.
 The second place is called when a table is altered with the ALTER TABLE
 command from a MySQL client.
 The third place is called when opening an frm file and finding partition
 info in the .frm file. It is necessary to avoid allowing PARTITION to be
 an allowed entry point for SQL client queries. This is arranged by setting
 some state variables before arriving here.

 To be able to handle errors we will only set error code in this code
 and handle the error condition in the function calling the parser. This
 is necessary to ensure we can also handle errors when calling the parser
 from the openfrm function.
*/
opt_partitioning:
          /* empty */
        | partitioning
        ;

partitioning:
          PARTITION_SYM
            if (lex->sql_command == SQLCOM_ALTER_TABLE)
          }
          partition
        ;

partition_entry:
          PARTITION_SYM
            /*
              We enter here when opening the frm file to translate
              partition info string into part_info data structure.
            */
          }
          partition
        ;

partition:
          BY part_type_def opt_num_parts opt_sub_part part_defs
        ;

part_type_def:
          opt_linear KEY_SYM opt_key_algo '(' part_field_list ')'
        | opt_linear HASH_SYM
          part_func
        | RANGE_SYM part_func
        | RANGE_SYM part_column_list
        | LIST_SYM part_func
        | LIST_SYM part_column_list
        ;

opt_linear:
          /* empty */
        | LINEAR_SYM
        ;

opt_key_algo:
          /* empty */
        | ALGORITHM_SYM EQ real_ulong_num
          }
        ;

part_field_list:
          /* empty */
        | part_field_item_list
        ;

part_field_item_list:
          part_field_item
        | part_field_item_list ',' part_field_item
        ;

part_field_item:
          ident
            if (part_info->num_columns > MAX_REF_PARTS)
          }
        ;

part_column_list:
          COLUMNS '(' part_field_list ')'
        ;


part_func:
          '(' part_func_expr ')'
            part_info->num_columns= 1;
            part_info->column_list= FALSE;
          }
        ;

sub_part_func:
          '(' part_func_expr ')'
          }
        ;


opt_num_parts:
          /* empty */
        | PARTITIONS_SYM real_ulong_num

            part_info->num_parts= num_parts;
            part_info->use_default_num_partitions= FALSE;
          }
        ;

opt_sub_part:
          /* empty */
        | SUBPARTITION_SYM BY opt_linear HASH_SYM sub_part_func
          opt_num_subparts
        | SUBPARTITION_SYM BY opt_linear KEY_SYM opt_key_algo
          '(' sub_part_field_list ')'
          opt_num_subparts
        ;

sub_part_field_list:
          sub_part_field_item
        | sub_part_field_list ',' sub_part_field_item
        ;

sub_part_field_item:
          ident
            if (part_info->subpart_field_list.elements > MAX_REF_PARTS)
          }
        ;

part_func_expr:
          bit_expr
            $$=$1;
          }
        ;

opt_num_subparts:
          /* empty */
        | SUBPARTITIONS_SYM real_ulong_num
            lex->part_info->num_subparts= num_parts;
            lex->part_info->use_default_num_subpartitions= FALSE;
          }
        ;

part_defs:
          /* empty */
            else if (part_info->part_type == LIST_PARTITION)
          }
        | '(' part_def_list ')'
            }
            else if (count_curr_parts > 0)
            part_info->count_curr_subparts= 0;
          }
        ;

part_def_list:
          part_definition
        | part_def_list ',' part_definition
        ;

part_definition:
          PARTITION_SYM
            p_elem->part_state= PART_NORMAL;
            part_info->curr_part_elem= p_elem;
            part_info->current_partition= p_elem;
            part_info->use_default_partitions= FALSE;
            part_info->use_default_num_partitions= FALSE;
          }
          part_name
          opt_part_values
          opt_part_options
          opt_sub_partition
        ;

part_name:
          ident
            p_elem->partition_name= $1.str;
          }
        ;

opt_part_values:
          /* empty */
            else if (part_info->part_type == LIST_PARTITION)
          }
        | VALUES LESS_SYM THAN_SYM
          }
          part_func_max
        | VALUES IN_SYM
          }
          part_values_in
        ;

part_func_max:
          MAX_VALUE_SYM
            else
              part_info->num_columns= 1U;
            if (part_info->init_column_part())
            if (part_info->add_max_value())
          }
        | part_value_item
        ;

part_values_in:
          part_value_item
              /*
                Reorganize the current large array into a list of small
                arrays with one entry in each array. This can happen
                in the first partition of an ALTER TABLE statement where
                we ADD or REORGANIZE partitions. Also can only happen
                for LIST [COLUMNS] partitions.
              */
              if (part_info->reorganize_into_single_field_col_val())
            }
          }
        | '(' part_value_list ')'
          }
        ;

part_value_list:
          part_value_item
        | part_value_list ',' part_value_item
        ;

part_value_item:
          '('
          }
          part_value_item_list
          ')'
            part_info->curr_list_object= 0;
          }
        ;

part_value_item_list:
          part_value_expr_item
        | part_value_item_list ',' part_value_expr_item
        ;

part_value_expr_item:
          MAX_VALUE_SYM
            if (part_info->add_max_value())
          }
        | bit_expr
            if (part_info->add_column_list_value(YYTHD, part_expr))
          }
        ;


opt_sub_partition:
          /* empty */
          }
        | '(' sub_part_list ')'
            }
            else if (part_info->count_curr_subparts > 0)
              part_info->num_subparts= part_info->count_curr_subparts;
            }
            part_info->count_curr_subparts= 0;
          }
        ;

sub_part_list:
          sub_part_definition
        | sub_part_list ',' sub_part_definition
        ;

sub_part_definition:
          SUBPARTITION_SYM
            if (!sub_p_elem ||
             curr_part->subpartitions.push_back(sub_p_elem))
            part_info->curr_part_elem= sub_p_elem;
            part_info->use_default_subpartitions= FALSE;
            part_info->use_default_num_subpartitions= FALSE;
            part_info->count_curr_subparts++;
          }
          sub_name opt_part_options
        ;

sub_name:
          ident_or_text
            Lex->part_info->curr_part_elem->partition_name= $1.str;
          }
        ;

opt_part_options:
         /* empty */
       | opt_part_option_list
       ;

opt_part_option_list:
         opt_part_option_list opt_part_option
       | opt_part_option
       ;

opt_part_option:
          TABLESPACE_SYM opt_equal ident
        | opt_storage ENGINE_SYM opt_equal storage_engines
        | NODEGROUP_SYM opt_equal real_ulong_num
        | MAX_ROWS opt_equal real_ulonglong_num
        | MIN_ROWS opt_equal real_ulonglong_num
        | DATA_SYM DIRECTORY_SYM opt_equal TEXT_STRING_sys
        | INDEX_SYM DIRECTORY_SYM opt_equal TEXT_STRING_sys
        | COMMENT_SYM opt_equal TEXT_STRING_sys
        ;

/*
 End of partition parser part
*/

create_select:
          SELECT_SYM select_options select_item_list table_expression
        ;

opt_as:
          /* empty */
        | AS
        ;

opt_create_database_options:
          /* empty */
        | create_database_options
        ;

create_database_options:
          create_database_option
        | create_database_options create_database_option
        ;

create_database_option:
          default_collation
        | default_charset
        ;

opt_table_options:
          /* empty */
        | table_options
        ;

table_options:
          table_option
        | table_option table_options
        ;

table_option:
          TEMPORARY
        ;

opt_if_not_exists:
          /* empty */
        | IF not EXISTS
        ;

opt_create_table_options:
          /* empty */
        | create_table_options
        ;

create_table_options_space_separated:
          create_table_option
        | create_table_option create_table_options_space_separated
        ;

create_table_options:
          create_table_option
        | create_table_option     create_table_options
        | create_table_option ',' create_table_options
        ;

create_table_option:
          ENGINE_SYM opt_equal storage_engines
        | MAX_ROWS opt_equal ulonglong_num
        | MIN_ROWS opt_equal ulonglong_num
        | AVG_ROW_LENGTH opt_equal ulong_num
        | PASSWORD opt_equal TEXT_STRING_sys
        | COMMENT_SYM opt_equal TEXT_STRING_sys
        | COMPRESSION_SYM opt_equal TEXT_STRING_sys
        | ENCRYPTION_SYM opt_equal TEXT_STRING_sys
        | AUTO_INC opt_equal ulonglong_num
        | PACK_KEYS_SYM opt_equal ulong_num
            Lex->create_info.used_fields|= HA_CREATE_USED_PACK_KEYS;
          }
        | PACK_KEYS_SYM opt_equal DEFAULT
        | STATS_AUTO_RECALC_SYM opt_equal ulong_num
            Lex->create_info.used_fields|= HA_CREATE_USED_STATS_AUTO_RECALC;
          }
        | STATS_AUTO_RECALC_SYM opt_equal DEFAULT
        | STATS_PERSISTENT_SYM opt_equal ulong_num
            Lex->create_info.used_fields|= HA_CREATE_USED_STATS_PERSISTENT;
          }
        | STATS_PERSISTENT_SYM opt_equal DEFAULT
        | STATS_SAMPLE_PAGES_SYM opt_equal ulong_num
            Lex->create_info.stats_sample_pages=$3;
            Lex->create_info.used_fields|= HA_CREATE_USED_STATS_SAMPLE_PAGES;
          }
        | STATS_SAMPLE_PAGES_SYM opt_equal DEFAULT
        | CHECKSUM_SYM opt_equal ulong_num
        | TABLE_CHECKSUM_SYM opt_equal ulong_num
        | DELAY_KEY_WRITE_SYM opt_equal ulong_num
        | ROW_FORMAT_SYM opt_equal row_types
        | UNION_SYM opt_equal
          '(' opt_table_list ')'
        | default_charset
        | default_collation
        | INSERT_METHOD opt_equal merge_insert_types
        | DATA_SYM DIRECTORY_SYM opt_equal TEXT_STRING_sys
        | INDEX_SYM DIRECTORY_SYM opt_equal TEXT_STRING_sys
        | TABLESPACE_SYM opt_equal ident
        | STORAGE_SYM DISK_SYM
        | STORAGE_SYM MEMORY_SYM
        | CONNECTION_SYM opt_equal TEXT_STRING_sys
        | KEY_BLOCK_SIZE opt_equal ulong_num
        ;

default_charset:
          opt_default charset opt_equal charset_name_or_default
            Lex->create_info.default_table_charset= $4;
            Lex->create_info.used_fields|= HA_CREATE_USED_DEFAULT_CHARSET;
          }
        ;

default_collation:
          opt_default COLLATE_SYM opt_equal collation_name_or_default

            Lex->create_info.default_table_charset= $4;
            Lex->create_info.used_fields|= HA_CREATE_USED_DEFAULT_CHARSET;
          }
        ;

storage_engines:
          ident_or_text
              $$= 0;
              push_warning_printf(thd, Sql_condition::SL_WARNING,
                                  ER_UNKNOWN_STORAGE_ENGINE,
                                  ER(ER_UNKNOWN_STORAGE_ENGINE),
                                  $1.str);
            }
          }
        ;

known_storage_engines:
          ident_or_text
          }
        ;

row_types:
          DEFAULT
        | FIXED_SYM
        | DYNAMIC_SYM
        | COMPRESSED_SYM
        | REDUNDANT_SYM
        | COMPACT_SYM
        ;

merge_insert_types:
         NO_SYM
       | FIRST_SYM
       | LAST_SYM
       ;

udf_type:
          STRING_SYM
        | REAL
        | DECIMAL_SYM
        | INT_SYM
        ;


create_field_list:
        field_list
        ;

field_list:
          field_list_item
        | field_list ',' field_list_item
        ;

field_list_item:
          column_def
        | key_def
        ;

column_def:
          field_spec opt_check_constraint
        | field_spec references
        ;

key_def:
          normal_key_type opt_ident key_alg '(' key_list ')' normal_key_options
        | fulltext opt_key_or_index opt_ident init_key_options
            '(' key_list ')' fulltext_key_options
        | spatial opt_key_or_index opt_ident init_key_options
            '(' key_list ')' spatial_key_options
        | opt_constraint constraint_key_type opt_ident key_alg
          '(' key_list ')' normal_key_options
        | opt_constraint FOREIGN KEY_SYM opt_ident '(' key_list ')' references
        | opt_constraint check_constraint
        ;

opt_check_constraint:
          /* empty */
        | check_constraint
        ;

check_constraint:
          CHECK_SYM '(' expr ')'

        ;

opt_constraint:
          /* empty */
        | constraint
        ;

constraint:
          CONSTRAINT opt_ident
        ;

field_spec:
          field_ident
          field_def
        ;

field_def:
          type opt_attribute
        | type opt_collate_explicit opt_generated_always
          AS '(' generated_column_func ')' opt_stored_attribute
          opt_gcol_attribute_list
            else
              Lex->charset= $2;
            Lex->gcol_info->set_field_type((enum enum_field_types) $$);
          }
        ;

opt_generated_always:
          /* empty */
        | GENERATED ALWAYS_SYM
        ;

opt_gcol_attribute_list:
          /* empty */
        | gcol_attribute_list
        ;

gcol_attribute_list:
          gcol_attribute_list gcol_attribute
        | gcol_attribute
        ;

gcol_attribute:
          UNIQUE_SYM
        | UNIQUE_SYM KEY_SYM
        | COMMENT_SYM TEXT_STRING_sys
        | not NULL_SYM
        | NULL_SYM
        | opt_primary KEY_SYM
        ;

opt_stored_attribute:
          /* empty */
        | VIRTUAL_SYM
        | STORED_SYM
        ;

parse_gcol_expr:
          PARSE_GCOL_EXPR_SYM '(' generated_column_func ')'
          }
        ;

generated_column_func:
          expr
            ITEMIZE($1, &$1);
            uint expr_len= (uint)@1.cpp.length();
            Lex->gcol_info->dup_expr_str(YYTHD->mem_root, @1.cpp.start, expr_len);
            Lex->gcol_info->expr_item= $1;
            /*
              @todo: problems:
              - here we have a call to the constructor of
              Generated_column, which takes no argument and builds a
              non-functional object
              - then we fill it member by member; either by assignment to
              public members (!) or by call to a public setter. Both these
              techniques allow changing, at any future point in time, vital
              properties of the object which should rather be constant.
              Class should rather have a constructor which takes arguments,
              sets members, and members should be constant after that.
              This would also get rid of some setters like set_field_stored();
            */
          }
        ;

type:
          int_type opt_field_length field_options
        | real_type opt_precision field_options
        | FLOAT_SYM float_options field_options
        | BIT_SYM
        | BIT_SYM field_length
        | BOOL_SYM
        | BOOLEAN_SYM
        | char field_length opt_binary
        | char opt_binary
        | nchar field_length opt_bin_mod
        | nchar opt_bin_mod
        | BINARY field_length
        | BINARY
        | varchar field_length opt_binary
        | nvarchar field_length opt_bin_mod
        | VARBINARY field_length
        | YEAR_SYM opt_field_length field_options
            }
            $$=MYSQL_TYPE_YEAR;
          }
        | DATE_SYM
        | TIME_SYM type_datetime_precision
        | TIMESTAMP type_datetime_precision
            else
          }
        | DATETIME type_datetime_precision
        | TINYBLOB
        | BLOB_SYM opt_field_length
        | spatial_type
        | MEDIUMBLOB
        | LONGBLOB
        | LONG_SYM VARBINARY
        | LONG_SYM varchar opt_binary
        | TINYTEXT opt_binary
        | TEXT_SYM opt_field_length opt_binary
        | MEDIUMTEXT opt_binary
        | LONGTEXT opt_binary
        | DECIMAL_SYM float_options field_options
        | NUMERIC_SYM float_options field_options
        | FIXED_SYM float_options field_options
        | ENUM
          '(' string_list ')' opt_binary
        | SET
          '(' string_list ')' opt_binary
        | LONG_SYM opt_binary
        | SERIAL_SYM
        | JSON_SYM
        ;

spatial_type:
          GEOMETRY_SYM
        | GEOMETRYCOLLECTION
        | POINT_SYM
        | MULTIPOINT
        | LINESTRING
        | MULTILINESTRING
        | POLYGON
        | MULTIPOLYGON
        ;

char:
          CHAR_SYM
        ;

nchar:
          NCHAR_SYM
        | NATIONAL_SYM CHAR_SYM
        ;

varchar:
          char VARYING
        | VARCHAR
        ;

nvarchar:
          NATIONAL_SYM VARCHAR
        | NVARCHAR_SYM
        | NCHAR_SYM VARCHAR
        | NATIONAL_SYM CHAR_SYM VARYING
        | NCHAR_SYM VARYING
        ;

int_type:
          INT_SYM
        | TINYINT
        | SMALLINT
        | MEDIUMINT
        | BIGINT
        ;

real_type:
          REAL
        | DOUBLE_SYM
        | DOUBLE_SYM PRECISION
        ;

float_options:
          /* empty */
        | field_length
        | precision
        ;

precision:
          '(' NUM ',' NUM ')'
        ;


type_datetime_precision:
          /* empty */
        | '(' NUM ')'
        ;

func_datetime_precision:
          /* empty */
        | '(' ')'
        | '(' NUM ')'
        ;

field_options:
          /* empty */
        | field_opt_list
        ;

field_opt_list:
          field_opt_list field_option
        | field_option
        ;

field_option:
          SIGNED_SYM
        | UNSIGNED
        | ZEROFILL
        ;

field_length:
          '(' LONG_NUM ')'
        | '(' ULONGLONG_NUM ')'
        | '(' DECIMAL_NUM ')'
        | '(' NUM ')';

opt_field_length:
          /* empty */
        | field_length
        ;

opt_precision:
          /* empty */
        | precision
        ;

opt_attribute:
          /* empty */
        | opt_attribute_list
        ;

opt_attribute_list:
          opt_attribute_list attribute
        | attribute
        ;

attribute:
          NULL_SYM
        | not NULL_SYM
        | DEFAULT now_or_signed_literal
        | ON UPDATE_SYM now
        | AUTO_INC
        | SERIAL_SYM DEFAULT VALUE_SYM
        | opt_primary KEY_SYM
        | UNIQUE_SYM
        | UNIQUE_SYM KEY_SYM
        | COMMENT_SYM TEXT_STRING_sys
        | COLLATE_SYM collation_name
            else
          }
        | COLUMN_FORMAT_SYM DEFAULT
        | COLUMN_FORMAT_SYM FIXED_SYM
        | COLUMN_FORMAT_SYM DYNAMIC_SYM
        | STORAGE_SYM DEFAULT
        | STORAGE_SYM DISK_SYM
        | STORAGE_SYM MEMORY_SYM
        ;


type_with_opt_collate:
        type opt_collate
          else if ($2)
        }
        ;


now:
          NOW_SYM func_datetime_precision;

now_or_signed_literal:
          now
        | signed_literal
        ;

charset:
          CHAR_SYM SET
        | CHARSET
        ;

charset_name:
          ident_or_text
          }
        | BINARY
        ;

charset_name_or_default:
          charset_name
        | DEFAULT
        ;

opt_load_data_charset:
          /* Empty */
        | charset charset_name_or_default
        ;

old_or_new_charset_name:
          ident_or_text
          }
        | BINARY
        ;

old_or_new_charset_name_or_default:
          old_or_new_charset_name
        | DEFAULT
        ;

collation_name:
          ident_or_text
        ;

opt_collate:
          /* empty */
        | COLLATE_SYM collation_name_or_default
        ;

opt_collate_explicit:
          /* empty */
        | COLLATE_SYM collation_name
        ;

collation_name_or_default:
          collation_name
        | DEFAULT
        ;

opt_default:
          /* empty */
        | DEFAULT
        ;


ascii:
          ASCII_SYM
        | BINARY ASCII_SYM
        | ASCII_SYM BINARY
        ;

unicode:
          UNICODE_SYM
          }
        | UNICODE_SYM BINARY
        | BINARY UNICODE_SYM
        ;

opt_binary:
          /* empty */
        | ascii
        | unicode
        | BYTE_SYM
        | charset charset_name opt_bin_mod
        | BINARY
        | BINARY charset charset_name
        ;

opt_bin_mod:
          /* empty */
        | BINARY
        ;

ws_nweights:
        '(' real_ulong_num
        }
        ')'
        ;

ws_level_flag_desc:
        ASC
        | DESC
        ;

ws_level_flag_reverse:
        REVERSE_SYM ;

ws_level_flags:
        /* empty */
        | ws_level_flag_desc
        | ws_level_flag_desc ws_level_flag_reverse
        | ws_level_flag_reverse
        ;

ws_level_number:
        real_ulong_num
        ;

ws_level_list_item:
        ws_level_number ws_level_flags
        ;

ws_level_list:
        ws_level_list_item
        | ws_level_list ',' ws_level_list_item
        ;

ws_level_range:
        ws_level_number '-' ws_level_number
        ;

ws_level_list_or_range:
        ws_level_list
        | ws_level_range
        ;

opt_ws_levels:
        /* empty*/
        | LEVEL_SYM ws_level_list_or_range
        ;

opt_primary:
          /* empty */
        | PRIMARY_SYM
        ;

references:
          REFERENCES
          table_ident
          opt_ref_list
          opt_match_clause
          opt_on_update_delete
        ;

opt_ref_list:
          /* empty */
        | '(' ref_list ')'
        ;

ref_list:
          ref_list ',' ident
        | ident
        ;

opt_match_clause:
          /* empty */
        | MATCH FULL
        | MATCH PARTIAL
        | MATCH SIMPLE_SYM
        ;

opt_on_update_delete:
          /* empty */
        | ON UPDATE_SYM delete_option
        | ON DELETE_SYM delete_option
        | ON UPDATE_SYM delete_option
          ON DELETE_SYM delete_option
        | ON DELETE_SYM delete_option
          ON UPDATE_SYM delete_option
        ;

delete_option:
          RESTRICT
        | CASCADE
        | SET NULL_SYM
        | NO_SYM ACTION
        | SET DEFAULT
        ;

normal_key_type:
          key_or_index
        ;

constraint_key_type:
          PRIMARY_SYM KEY_SYM
        | UNIQUE_SYM opt_key_or_index
        ;

key_or_index:
          KEY_SYM
        | INDEX_SYM
        ;

opt_key_or_index:
          /* empty */
        | key_or_index
        ;

keys_or_index:
          KEYS
        | INDEX_SYM
        | INDEXES
        ;

opt_unique:
          /* empty */
        | UNIQUE_SYM
        ;

fulltext:
          FULLTEXT_SYM
        ;

spatial:
          SPATIAL_SYM
        ;

init_key_options:
        ;

/*
  For now, key_alg initializies lex->key_create_info.
  In the future, when all key options are after key definition,
  we can remove key_alg and move init_key_options to key_options
*/

key_alg:
          init_key_options
        | init_key_options key_using_alg
        ;

normal_key_options:
          /* empty */
        | normal_key_opts
        ;

fulltext_key_options:
          /* empty */
        | fulltext_key_opts
        ;

spatial_key_options:
          /* empty */
        | spatial_key_opts
        ;

normal_key_opts:
          normal_key_opt
        | normal_key_opts normal_key_opt
        ;

spatial_key_opts:
          spatial_key_opt
        | spatial_key_opts spatial_key_opt
        ;

fulltext_key_opts:
          fulltext_key_opt
        | fulltext_key_opts fulltext_key_opt
        ;

key_using_alg:
          USING btree_or_rtree
        | TYPE_SYM btree_or_rtree
        ;

all_key_opt:
          KEY_BLOCK_SIZE opt_equal ulong_num
        | COMMENT_SYM TEXT_STRING_sys
        ;

normal_key_opt:
          all_key_opt
        | key_using_alg
        ;

spatial_key_opt:
          all_key_opt
        ;

fulltext_key_opt:
          all_key_opt
        | WITH PARSER_SYM IDENT_sys;
            if (plugin_is_ready(plugin_name, MYSQL_FTPARSER_PLUGIN))
              Lex->key_create_info.parser_name= $3;
            else
          }
        ;

btree_or_rtree:
          BTREE_SYM
        | RTREE_SYM
        | HASH_SYM
        ;

key_list:
          key_list ',' key_part opt_ordering_direction
        | key_part opt_ordering_direction
        ;

key_part:
          ident
        | ident '(' NUM ')'
            $$= new Key_part_spec($1, (uint) key_part_len);
            if ($$ == NULL)
              MYSQL_YYABORT;
          }
        ;

opt_ident:
          /* empty */
        | field_ident
        ;

opt_component:
          /* empty */
        | '.' ident
        ;

string_list:
          text_string
        | string_list ',' text_string;

/*
** Alter table
*/

alter:
          ALTER TABLE_SYM table_ident
          alter_commands
          }
        | ALTER DATABASE ident_or_empty
          create_database_options
        | ALTER DATABASE ident UPGRADE_SYM DATA_SYM DIRECTORY_SYM NAME_SYM
            lex->sql_command= SQLCOM_ALTER_DB_UPGRADE;
            lex->name= $3;
          }
        | ALTER PROCEDURE_SYM sp_name
            memset(&lex->sp_chistics, 0, sizeof(st_sp_chistics));
          }
          sp_a_chistics
        | ALTER FUNCTION_SYM sp_name
            memset(&lex->sp_chistics, 0, sizeof(st_sp_chistics));
          }
          sp_a_chistics
        | ALTER view_algorithm definer_opt
            lex->create_view_mode= VIEW_ALTER;
          }
          view_tail
        | ALTER definer_opt
          /*
            We have two separate rules for ALTER VIEW rather that
            optional view_algorithm above, to resolve the ambiguity
            with the ALTER EVENT below.
          */
            lex->create_view_algorithm= VIEW_ALGORITHM_UNDEFINED;
            lex->create_view_mode= VIEW_ALTER;
          }
          view_tail
        | ALTER definer_opt EVENT_SYM sp_name
          ev_alter_on_schedule_completion
          opt_ev_rename_to
          opt_ev_status
          opt_ev_comment
          opt_ev_sql_stmt
            /*
              sql_command is set here because some rules in ev_sql_stmt
              can overwrite it
            */
            Lex->sql_command= SQLCOM_ALTER_EVENT;
          }
        | ALTER TABLESPACE_SYM alter_tablespace_info
        | ALTER LOGFILE_SYM GROUP_SYM alter_logfile_group_info
        | ALTER TABLESPACE_SYM change_tablespace_info
        | ALTER TABLESPACE_SYM change_tablespace_access
        | ALTER SERVER_SYM ident_or_text OPTIONS_SYM '(' server_options_list ')'
        | alter_user_command grant_list require_clause
          connect_options opt_account_lock_password_expire_options
        | alter_user_command user_func IDENTIFIED_SYM BY TEXT_STRING
        | alter_instance_stmt
        ;

alter_user_command:
          ALTER USER if_exists clear_privileges
        ;

opt_account_lock_password_expire_options:
          /* empty */
        | opt_account_lock_password_expire_option_list
        ;

opt_account_lock_password_expire_option_list:
          opt_account_lock_password_expire_option
        | opt_account_lock_password_expire_option_list opt_account_lock_password_expire_option
        ;

opt_account_lock_password_expire_option:
          ACCOUNT_SYM UNLOCK_SYM
        | ACCOUNT_SYM LOCK_SYM
        | password_expire
        | password_expire INTERVAL_SYM real_ulong_num DAY_SYM
            lex->alter_password.update_password_expired_fields= true;
            lex->alter_password.expire_after_days= $3;
            lex->alter_password.use_default_password_lifetime= false;
          }
        | password_expire NEVER_SYM
        | password_expire DEFAULT
        ;

password_expire:
          PASSWORD EXPIRE_SYM clear_password_expire_options
        ;

connect_options:
          /* empty */
        | WITH connect_option_list
        ;

connect_option_list:
          connect_option_list connect_option
        | connect_option
        ;

connect_option:
          MAX_QUERIES_PER_HOUR ulong_num
        | MAX_UPDATES_PER_HOUR ulong_num
        | MAX_CONNECTIONS_PER_HOUR ulong_num
        | MAX_USER_CONNECTIONS_SYM ulong_num
        ;

user_func:
          USER '(' ')'
        ;

ev_alter_on_schedule_completion:
          /* empty */
        | ON SCHEDULE_SYM ev_schedule_time
        | ev_on_completion
        | ON SCHEDULE_SYM ev_schedule_time ev_on_completion
        ;

opt_ev_rename_to:
          /* empty */
        | RENAME TO_SYM sp_name
        ;

opt_ev_sql_stmt:
          /* empty*/
        | DO_SYM ev_sql_stmt
        ;

ident_or_empty:
          /* empty */
        | ident
        ;

alter_commands:
          alter_command_list
        | alter_command_list partitioning
        | alter_command_list remove_partitioning
        | standalone_alter_commands
        | alter_commands_modifier_list ',' standalone_alter_commands
        ;

alter_command_list:
	  /* empty */
        | alter_commands_modifier_list
        | alter_list
        | alter_commands_modifier_list ',' alter_list
        ;

standalone_alter_commands:
          DISCARD TABLESPACE_SYM
        | IMPORT TABLESPACE_SYM
/*
  This part was added for release 5.1 by Mikael Ronström.
  From here we insert a number of commands to manage the partitions of a
  partitioned table such as adding partitions, dropping partitions,
  reorganising partitions in various manners. In future releases the list
  will be longer.
*/
        | add_partition_rule
        | DROP PARTITION_SYM alt_part_name_list
        | REBUILD_SYM PARTITION_SYM opt_no_write_to_binlog
          all_or_alt_part_name_list
        | OPTIMIZE PARTITION_SYM opt_no_write_to_binlog
          all_or_alt_part_name_list
          opt_no_write_to_binlog
        | ANALYZE_SYM PARTITION_SYM opt_no_write_to_binlog
          all_or_alt_part_name_list
        | CHECK_SYM PARTITION_SYM all_or_alt_part_name_list
          opt_mi_check_type
        | REPAIR PARTITION_SYM opt_no_write_to_binlog
          all_or_alt_part_name_list
          opt_mi_repair_type
        | COALESCE PARTITION_SYM opt_no_write_to_binlog real_ulong_num
        | TRUNCATE_SYM PARTITION_SYM all_or_alt_part_name_list
        | reorg_partition_rule
        | EXCHANGE_SYM PARTITION_SYM alt_part_name_item
          WITH TABLE_SYM table_ident opt_validation
            lex->name.str= const_cast<char*>($6->table.str);
            lex->name.length= $6->table.length;
            lex->alter_info.flags|= Alter_info::ALTER_EXCHANGE_PARTITION;
            if (!lex->select_lex->add_table_to_list(thd, $6, NULL,
                                                    TL_OPTION_UPDATING,
                                                    TL_READ_NO_INSERT,
                                                    MDL_SHARED_NO_WRITE))
              MYSQL_YYABORT;
            DBUG_ASSERT(!lex->m_sql_cmd);
            lex->m_sql_cmd= new (thd->mem_root)
                               Sql_cmd_alter_table_exchange_partition();
            if (lex->m_sql_cmd == NULL)
              MYSQL_YYABORT;
          }
        | DISCARD PARTITION_SYM all_or_alt_part_name_list
          TABLESPACE_SYM
        | IMPORT PARTITION_SYM all_or_alt_part_name_list
          TABLESPACE_SYM
        ;

opt_validation:
          /* empty */
        | alter_opt_validation
        ;

alter_opt_validation:
        WITH VALIDATION_SYM
        | WITHOUT_SYM VALIDATION_SYM
	    ;

remove_partitioning:
          REMOVE_SYM PARTITIONING_SYM
        ;

all_or_alt_part_name_list:
          ALL
        | alt_part_name_list
        ;

add_partition_rule:
          ADD PARTITION_SYM opt_no_write_to_binlog
            lex->alter_info.flags|= Alter_info::ALTER_ADD_PARTITION;
            lex->no_write_to_binlog= $3;
          }
          add_part_extra
        ;

add_part_extra:
          /* empty */
        | '(' part_def_list ')'
        | PARTITIONS_SYM real_ulong_num
        ;

reorg_partition_rule:
          REORGANIZE_SYM PARTITION_SYM opt_no_write_to_binlog
            lex->no_write_to_binlog= $3;
          }
          reorg_parts_rule
        ;

reorg_parts_rule:
          /* empty */
        | alt_part_name_list
          INTO '(' part_def_list ')'
        ;

alt_part_name_list:
          alt_part_name_item
        | alt_part_name_list ',' alt_part_name_item
        ;

alt_part_name_item:
          ident
          }
        ;

/*
  End of management of partition commands
*/

alter_list:
          alter_list_item
        | alter_list ',' alter_list_item
        | alter_list ',' alter_commands_modifier
        ;

alter_commands_modifier_list:
          alter_commands_modifier
        | alter_commands_modifier_list ',' alter_commands_modifier
        ;

add_column:
          ADD opt_column
        ;

alter_list_item:
          add_column column_def opt_place
        | ADD key_def
        | add_column '(' create_field_list ')'
        | CHANGE opt_column field_ident
          field_spec opt_place
        | MODIFY_SYM opt_column field_ident
          field_def
          opt_place
        | DROP opt_column field_ident opt_restrict
        | DROP FOREIGN KEY_SYM field_ident
        | DROP PRIMARY_SYM KEY_SYM
        | DROP key_or_index field_ident
        | DISABLE_SYM KEYS
        | ENABLE_SYM KEYS
        | ALTER opt_column field_ident SET DEFAULT signed_literal
        | ALTER opt_column field_ident DROP DEFAULT
        | RENAME opt_to table_ident
            enum_ident_name_check ident_check_status=
              check_table_name($3->table.str,$3->table.length, FALSE);
            if (ident_check_status == IDENT_NAME_WRONG)
            else if (ident_check_status == IDENT_NAME_TOO_LONG)
            LEX_STRING db_str= to_lex_string($3->db);
            if (db_str.str &&
                (check_and_convert_db_name(&db_str, FALSE) != IDENT_NAME_OK))
              MYSQL_YYABORT;
            lex->name.str= const_cast<char*>($3->table.str);
            lex->name.length= $3->table.length;
            lex->alter_info.flags|= Alter_info::ALTER_RENAME;
          }
        | RENAME key_or_index field_ident TO_SYM field_ident
        | CONVERT_SYM TO_SYM charset charset_name_or_default opt_collate
            $5= $5 ? $5 : $4;
            if (!my_charset_same($4,$5))
            LEX *lex= Lex;
            lex->create_info.table_charset=
            lex->create_info.default_table_charset= $5;
            lex->create_info.used_fields|= (HA_CREATE_USED_CHARSET |
              HA_CREATE_USED_DEFAULT_CHARSET);
            lex->alter_info.flags|= Alter_info::ALTER_OPTIONS;
          }
        | create_table_options_space_separated
          }
        | FORCE_SYM
        | alter_order_clause
        | UPGRADE_SYM PARTITIONING_SYM
        ;

alter_commands_modifier:
          alter_algorithm_option
        | alter_lock_option
        | alter_opt_validation
        ;

opt_index_lock_algorithm:
          /* empty */
        | alter_lock_option
        | alter_algorithm_option
        | alter_lock_option alter_algorithm_option
        | alter_algorithm_option alter_lock_option

alter_algorithm_option:
          ALGORITHM_SYM opt_equal DEFAULT
        | ALGORITHM_SYM opt_equal ident
          }
        ;

alter_lock_option:
          LOCK_SYM opt_equal DEFAULT
        | LOCK_SYM opt_equal ident
          }
        ;

opt_column:
          /* empty */
        | COLUMN_SYM
        ;

opt_ignore:
          /* empty */
        | IGNORE_SYM
        ;

opt_restrict:
          /* empty */
        | RESTRICT
        | CASCADE
        ;

opt_place:
          /* empty */
        | AFTER_SYM ident
        | FIRST_SYM
        ;

opt_to:
          /* empty */
        | TO_SYM
        | EQ
        | AS
        ;

group_replication:
                 START_SYM GROUP_REPLICATION
               | STOP_SYM GROUP_REPLICATION
               ;

slave:
        slave_start start_slave_opts
      | STOP_SYM SLAVE opt_slave_thread_option_list opt_channel
      ;

slave_start:
          START_SYM SLAVE opt_slave_thread_option_list
         ;

start_slave_opts:
          slave_until
          slave_connection_opts
          }
          opt_channel
          ;

start:
          START_SYM TRANSACTION_SYM opt_start_transaction_option_list
            lex->start_transaction_opt= $3;
          }
        ;

opt_start_transaction_option_list:
          /* empty */
        | start_transaction_option_list
        ;

start_transaction_option_list:
          start_transaction_option
        | start_transaction_option_list ',' start_transaction_option
        ;

start_transaction_option:
          WITH CONSISTENT_SYM SNAPSHOT_SYM
        | READ_SYM ONLY_SYM
        | READ_SYM WRITE_SYM
        ;

slave_connection_opts:
          slave_user_name_opt slave_user_pass_opt
          slave_plugin_auth_opt slave_plugin_dir_opt
        ;

slave_user_name_opt:
        | USER EQ TEXT_STRING_sys
        ;

slave_user_pass_opt:
        | PASSWORD EQ TEXT_STRING_sys

slave_plugin_auth_opt:
        | DEFAULT_AUTH_SYM EQ TEXT_STRING_sys
        ;

slave_plugin_dir_opt:
        | PLUGIN_DIR_SYM EQ TEXT_STRING_sys
        ;

opt_slave_thread_option_list:
          /* empty */
        | slave_thread_option_list
        ;

slave_thread_option_list:
          slave_thread_option
        | slave_thread_option_list ',' slave_thread_option
        ;

slave_thread_option:
          SQL_THREAD
        | RELAY_THREAD
        ;

slave_until:
          /*empty*/
        | UNTIL_SYM slave_until_opts
            lex->mi.slave_until= true;
          }
        ;

slave_until_opts:
          master_file_def
        | slave_until_opts ',' master_file_def
        | SQL_BEFORE_GTIDS EQ TEXT_STRING_sys
        | SQL_AFTER_GTIDS EQ TEXT_STRING_sys
        | SQL_AFTER_MTS_GAPS
        ;

checksum:
          CHECKSUM_SYM table_or_tables
          table_list opt_checksum_type
        ;

opt_checksum_type:
          /* nothing */
        | QUICK
        | EXTENDED_SYM
        ;

repair:
          REPAIR opt_no_write_to_binlog table_or_tables
          table_list opt_mi_repair_type
        ;

opt_mi_repair_type:
          /* empty */
        | mi_repair_types
        ;

mi_repair_types:
          mi_repair_type
        | mi_repair_type mi_repair_types
        ;

mi_repair_type:
          QUICK
        | EXTENDED_SYM
        | USE_FRM
        ;

analyze:
          ANALYZE_SYM opt_no_write_to_binlog table_or_tables
          table_list
        ;

binlog_base64_event:
          BINLOG_SYM TEXT_STRING_sys
        ;

check:
          CHECK_SYM table_or_tables
            lex->sql_command = SQLCOM_CHECK;
            lex->check_opt.init();
            lex->alter_info.reset();
            /* Will be overriden during execution. */
            YYPS->m_lock_type= TL_UNLOCK;
          }
          table_list opt_mi_check_type
        ;

opt_mi_check_type:
          /* empty */
        | mi_check_types
        ;

mi_check_types:
          mi_check_type
        | mi_check_type mi_check_types
        ;

mi_check_type:
          QUICK
        | FAST_SYM
        | MEDIUM_SYM
        | EXTENDED_SYM
        | CHANGED
        | FOR_SYM UPGRADE_SYM
        ;

optimize:
          OPTIMIZE opt_no_write_to_binlog table_or_tables
          table_list
        ;

opt_no_write_to_binlog:
          /* empty */
        | NO_WRITE_TO_BINLOG
        | LOCAL_SYM
        ;

rename:
          RENAME table_or_tables
          table_to_table_list
        | RENAME USER clear_privileges rename_list
        ;

rename_list:
          user TO_SYM user
        | rename_list ',' user TO_SYM user
        ;

table_to_table_list:
          table_to_table
        | table_to_table_list ',' table_to_table
        ;

table_to_table:
          table_ident TO_SYM table_ident
        ;

keycache:
          CACHE_SYM INDEX_SYM
          keycache_list_or_parts IN_SYM key_cache_name
        ;

keycache_list_or_parts:
          keycache_list
        | assign_to_keycache_parts
        ;

keycache_list:
          assign_to_keycache
        | keycache_list ',' assign_to_keycache
        ;

assign_to_keycache:
          table_ident cache_keys_spec
        ;

assign_to_keycache_parts:
          table_ident adm_partition cache_keys_spec
        ;

key_cache_name:
          ident
        | DEFAULT
        ;

preload:
          LOAD INDEX_SYM INTO CACHE_SYM
          preload_list_or_parts
        ;

preload_list_or_parts:
          preload_keys_parts
        | preload_list
        ;

preload_list:
          preload_keys
        | preload_list ',' preload_keys
        ;

preload_keys:
          table_ident cache_keys_spec opt_ignore_leaves
        ;

preload_keys_parts:
          table_ident adm_partition cache_keys_spec opt_ignore_leaves
        ;

adm_partition:
          PARTITION_SYM
          '(' all_or_alt_part_name_list ')'
        ;

cache_keys_spec:
          cache_key_list_or_empty
        ;

cache_key_list_or_empty:
          /* empty */
        | key_or_index '(' opt_key_usage_list ')'
        ;

opt_ignore_leaves:
          /* empty */
        | IGNORE_SYM LEAVES
        ;

/*
  Select : retrieve data from table
*/


select:
          select_init
        ;

/* Need first branch for subselects. */
select_init:
          SELECT_SYM select_part2 opt_union_clause
        | '(' select_paren ')' union_opt
        ;

select_paren:
          SELECT_SYM select_part2
        | '(' select_paren ')'
        ;

/* The equivalent of select_paren for nested queries. */
select_paren_derived:
          SELECT_SYM select_part2_derived table_expression
        | '(' select_paren_derived ')'
        ;

/*
  Theoretically we can merge all 3 right hand sides of the select_part2
  rule into one, however such a transformation adds one shift/reduce
  conflict more.
*/
select_part2:
          select_options_and_item_list
          opt_order_clause
          opt_limit_clause
          opt_select_lock_type
        | select_options_and_item_list into opt_select_lock_type
        | select_options_and_item_list  /* #1 */
          opt_into                      /* #2 */
          from_clause                   /* #3 */
          opt_where_clause              /* #4 */
          opt_group_clause              /* #5 */
          opt_having_clause             /* #6 */
          opt_order_clause              /* #7 */
          opt_limit_clause              /* #8 */
          opt_procedure_analyse_clause  /* #9 */
          opt_into                      /* #10 */
          opt_select_lock_type          /* #11 */
            if ($9 && ($2 || $10))
            $$= NEW_PTN PT_select_part2($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
                                        $11);
          }
        ;

select_options_and_item_list:
          select_options select_item_list
        ;


table_expression:
          opt_from_clause               /* #1 */
          opt_where_clause              /* #2 */
          opt_group_clause              /* #3 */
          opt_having_clause             /* #4 */
          opt_order_clause              /* #5 */
          opt_limit_clause              /* #6 */
          opt_procedure_analyse_clause  /* #7 */
          opt_select_lock_type          /* #8 */
        ;

from_clause:
          FROM table_reference_list
        ;

opt_from_clause:
          /* empty */
        | from_clause
        ;

table_reference_list:
          join_table_list
        | DUAL_SYM
          /* oracle compatibility: oracle always requires FROM clause,
             and DUAL is system table without fields.
             Is "SELECT 1 FROM DUAL" any better than "SELECT 1" ?
          Hmmm :) */
        ;

select_options:
          /* empty*/
        | select_option_list
        ;

select_option_list:
          select_option_list select_option
        | select_option
        ;

select_option:
          query_spec_option
        | SQL_NO_CACHE_SYM
        | SQL_CACHE_SYM
        ;

opt_select_lock_type:
          /* empty */
        | FOR_SYM UPDATE_SYM
        | LOCK_SYM IN_SYM SHARE_SYM MODE_SYM
        ;

select_item_list:
          select_item_list ',' select_item
        | select_item
        | '*'
        ;

select_item:
          table_wild
        | expr select_alias
        ;


select_alias:
          /* empty */
        | AS ident
        | AS TEXT_STRING_sys
        | ident
        | TEXT_STRING_sys
        ;

optional_braces:
          /* empty */
        | '(' ')'
        ;

/* all possible expressions */
expr:
          expr or expr %prec OR_SYM
        | expr XOR expr %prec XOR
        | expr and expr %prec AND_SYM
        | NOT_SYM expr %prec NOT_SYM
        | bool_pri IS TRUE_SYM %prec IS
        | bool_pri IS not TRUE_SYM %prec IS
        | bool_pri IS FALSE_SYM %prec IS
        | bool_pri IS not FALSE_SYM %prec IS
        | bool_pri IS UNKNOWN_SYM %prec IS
        | bool_pri IS not UNKNOWN_SYM %prec IS
        | bool_pri
        ;

bool_pri:
          bool_pri IS NULL_SYM %prec IS
        | bool_pri IS not NULL_SYM %prec IS
        | bool_pri comp_op predicate %prec EQ
        | bool_pri comp_op all_or_any '(' subselect ')' %prec EQ
        | predicate
        ;

predicate:
          bit_expr IN_SYM '(' subselect ')'
        | bit_expr not IN_SYM '(' subselect ')'
        | bit_expr IN_SYM '(' expr ')'
        | bit_expr IN_SYM '(' expr ',' expr_list ')'
        | bit_expr not IN_SYM '(' expr ')'
        | bit_expr not IN_SYM '(' expr ',' expr_list ')'
        | bit_expr BETWEEN_SYM bit_expr AND_SYM predicate
        | bit_expr not BETWEEN_SYM bit_expr AND_SYM predicate
        | bit_expr SOUNDS_SYM LIKE bit_expr
        | bit_expr LIKE simple_expr opt_escape
        | bit_expr not LIKE simple_expr opt_escape
        | bit_expr REGEXP bit_expr
        | bit_expr not REGEXP bit_expr
        | bit_expr
        ;

bit_expr:
          bit_expr '|' bit_expr %prec '|'
        | bit_expr '&' bit_expr %prec '&'
        | bit_expr SHIFT_LEFT bit_expr %prec SHIFT_LEFT
        | bit_expr SHIFT_RIGHT bit_expr %prec SHIFT_RIGHT
        | bit_expr '+' bit_expr %prec '+'
        | bit_expr '-' bit_expr %prec '-'
        | bit_expr '+' INTERVAL_SYM expr interval %prec '+'
        | bit_expr '-' INTERVAL_SYM expr interval %prec '-'
        | bit_expr '*' bit_expr %prec '*'
        | bit_expr '/' bit_expr %prec '/'
        | bit_expr '%' bit_expr %prec '%'
        | bit_expr DIV_SYM bit_expr %prec DIV_SYM
        | bit_expr MOD_SYM bit_expr %prec MOD_SYM
        | bit_expr '^' bit_expr
        | simple_expr
        ;

or:
          OR_SYM
       | OR2_SYM
       ;

and:
          AND_SYM
       | AND_AND_SYM
       ;

not:
          NOT_SYM
        | NOT2_SYM
        ;

not2:
          '!'
        | NOT2_SYM
        ;

comp_op:
          EQ
        | EQUAL_SYM
        | GE
        | GT_SYM
        | LE
        | LT
        | NE
        ;

all_or_any:
          ALL
        | ANY_SYM
        ;

simple_expr:
          simple_ident
        | function_call_keyword
        | function_call_nonkeyword
        | function_call_generic
        | function_call_conflict
        | simple_expr COLLATE_SYM ident_or_text %prec NEG
        | literal
        | param_marker
        | variable
        | sum_expr
        | simple_expr OR_OR_SYM simple_expr
        | '+' simple_expr %prec NEG
        | '-' simple_expr %prec NEG
        | '~' simple_expr %prec NEG
        | not2 simple_expr %prec NEG
        | '(' subselect ')'
        | '(' expr ')'
        | '(' expr ',' expr_list ')'
        | ROW_SYM '(' expr ',' expr_list ')'
        | EXISTS '(' subselect ')'
        | ''
        | MATCH ident_list_arg AGAINST '(' bit_expr fulltext_options ')'
        | BINARY simple_expr %prec NEG
        | CAST_SYM '(' expr AS cast_type ')'
        | CASE_SYM opt_expr when_list opt_else END
        | CONVERT_SYM '(' expr ',' cast_type ')'
        | CONVERT_SYM '(' expr USING charset_name ')'
        | DEFAULT '(' simple_ident ')'
        | VALUES '(' simple_ident_nospvar ')'
        | INTERVAL_SYM expr interval '+' expr %prec INTERVAL_SYM
          /* we cannot put interval before - */
        | simple_ident JSON_SEPARATOR_SYM TEXT_STRING_literal
         | simple_ident JSON_UNQUOTED_SEPARATOR_SYM TEXT_STRING_literal
        ;

/*
  Function call syntax using official SQL 2003 keywords.
  Because the function name is an official token,
  a dedicated grammar rule is needed in the parser.
  There is no potential for conflicts
*/
function_call_keyword:
          CHAR_SYM '(' expr_list ')'
        | CHAR_SYM '(' expr_list USING charset_name ')'
        | CURRENT_USER optional_braces
        | DATE_SYM '(' expr ')'
        | DAY_SYM '(' expr ')'
        | HOUR_SYM '(' expr ')'
        | INSERT '(' expr ',' expr ',' expr ',' expr ')'
        | INTERVAL_SYM '(' expr ',' expr ')' %prec INTERVAL_SYM
        | INTERVAL_SYM '(' expr ',' expr ',' expr_list ')' %prec INTERVAL_SYM
        | LEFT '(' expr ',' expr ')'
        | MINUTE_SYM '(' expr ')'
        | MONTH_SYM '(' expr ')'
        | RIGHT '(' expr ',' expr ')'
        | SECOND_SYM '(' expr ')'
        | TIME_SYM '(' expr ')'
        | TIMESTAMP '(' expr ')'
        | TIMESTAMP '(' expr ',' expr ')'
        | TRIM '(' expr ')'
        | TRIM '(' LEADING expr FROM expr ')'
        | TRIM '(' TRAILING expr FROM expr ')'
        | TRIM '(' BOTH expr FROM expr ')'
        | TRIM '(' LEADING FROM expr ')'
        | TRIM '(' TRAILING FROM expr ')'
        | TRIM '(' BOTH FROM expr ')'
        | TRIM '(' expr FROM expr ')'
        | USER '(' ')'
        | YEAR_SYM '(' expr ')'
        ;

/*
  Function calls using non reserved keywords, with special syntaxic forms.
  Dedicated grammar rules are needed because of the syntax,
  but also have the potential to cause incompatibilities with other
  parts of the language.
  MAINTAINER:
  The only reasons a function should be added here are:
  - for compatibility reasons with another SQL syntax (CURDATE),
  - for typing reasons (GET_FORMAT)
  Any other 'Syntaxic sugar' enhancements should be *STRONGLY*
  discouraged.
*/
function_call_nonkeyword:
          ADDDATE_SYM '(' expr ',' expr ')'
        | ADDDATE_SYM '(' expr ',' INTERVAL_SYM expr interval ')'
        | CURDATE optional_braces
        | CURTIME func_datetime_precision
        | DATE_ADD_INTERVAL '(' expr ',' INTERVAL_SYM expr interval ')'
          %prec INTERVAL_SYM
        | DATE_SUB_INTERVAL '(' expr ',' INTERVAL_SYM expr interval ')'
          %prec INTERVAL_SYM
        | EXTRACT_SYM '(' interval FROM expr ')'
        | GET_FORMAT '(' date_time_type  ',' expr ')'
        | now
        | POSITION_SYM '(' bit_expr IN_SYM expr ')'
        | SUBDATE_SYM '(' expr ',' expr ')'
        | SUBDATE_SYM '(' expr ',' INTERVAL_SYM expr interval ')'
        | SUBSTRING '(' expr ',' expr ',' expr ')'
        | SUBSTRING '(' expr ',' expr ')'
        | SUBSTRING '(' expr FROM expr FOR_SYM expr ')'
        | SUBSTRING '(' expr FROM expr ')'
        | SYSDATE func_datetime_precision
        | TIMESTAMP_ADD '(' interval_time_stamp ',' expr ',' expr ')'
        | TIMESTAMP_DIFF '(' interval_time_stamp ',' expr ',' expr ')'
        | UTC_DATE_SYM optional_braces
        | UTC_TIME_SYM func_datetime_precision
        | UTC_TIMESTAMP_SYM func_datetime_precision
        ;

/*
  Functions calls using a non reserved keyword, and using a regular syntax.
  Because the non reserved keyword is used in another part of the grammar,
  a dedicated rule is needed here.
*/
function_call_conflict:
          ASCII_SYM '(' expr ')'
        | CHARSET '(' expr ')'
        | COALESCE '(' expr_list ')'
        | COLLATION_SYM '(' expr ')'
        | DATABASE '(' ')'
        | IF '(' expr ',' expr ',' expr ')'
        | FORMAT_SYM '(' expr ',' expr ')'
        | FORMAT_SYM '(' expr ',' expr ',' expr ')'
        | MICROSECOND_SYM '(' expr ')'
        | MOD_SYM '(' expr ',' expr ')'
        | PASSWORD '(' expr ')'
        | QUARTER_SYM '(' expr ')'
        | REPEAT_SYM '(' expr ',' expr ')'
        | REPLACE '(' expr ',' expr ',' expr ')'
        | REVERSE_SYM '(' expr ')'
        | ROW_COUNT_SYM '(' ')'
        | TRUNCATE_SYM '(' expr ',' expr ')'
        | WEEK_SYM '(' expr ')'
        | WEEK_SYM '(' expr ',' expr ')'
        | WEIGHT_STRING_SYM '(' expr opt_ws_levels ')'
        | WEIGHT_STRING_SYM '(' expr AS CHAR_SYM ws_nweights opt_ws_levels ')'
        | WEIGHT_STRING_SYM '(' expr AS BINARY ws_nweights ')'
        | WEIGHT_STRING_SYM '(' expr ',' ulong_num ',' ulong_num ',' ulong_num ')'
        | geometry_function
        ;

geometry_function:
          CONTAINS_SYM '(' expr ',' expr ')'
        | GEOMETRYCOLLECTION '(' opt_expr_list ')'
        | LINESTRING '(' expr_list ')'
        | MULTILINESTRING '(' expr_list ')'
        | MULTIPOINT '(' expr_list ')'
        | MULTIPOLYGON '(' expr_list ')'
        | POINT_SYM '(' expr ',' expr ')'
        | POLYGON '(' expr_list ')'
        ;

/*
  Regular function calls.
  The function name is *not* a token, and therefore is guaranteed to not
  introduce side effects to the language in general.
  MAINTAINER:
  All the new functions implemented for new features should fit into
  this category. The place to implement the function itself is
  in sql/item_create.cc
*/
function_call_generic:
          IDENT_sys '(' opt_udf_expr_list ')'
        | ident '.' ident '(' opt_expr_list ')'
        ;

fulltext_options:
          opt_natural_language_mode opt_query_expansion
        | IN_SYM BOOLEAN_SYM MODE_SYM);
          }
        ;

opt_natural_language_mode:
          /* nothing */
        | IN_SYM NATURAL LANGUAGE_SYM MODE_SYM
        ;

opt_query_expansion:
          /* nothing */
        | WITH QUERY_SYM EXPANSION_SYM
        ;

opt_udf_expr_list:
        /* empty */
        | udf_expr_list
        ;

udf_expr_list:
          udf_expr
        | udf_expr_list ',' udf_expr
        ;

udf_expr:
          expr select_alias
        ;

sum_expr:
          AVG_SYM '(' in_sum_expr ')'
        | AVG_SYM '(' DISTINCT in_sum_expr ')'
        | BIT_AND  '(' in_sum_expr ')'
        | BIT_OR  '(' in_sum_expr ')'
        | JSON_ARRAYAGG '(' in_sum_expr ')'
        | JSON_OBJECTAGG '(' in_sum_expr ',' in_sum_expr ')'
        | BIT_XOR  '(' in_sum_expr ')'
        | COUNT_SYM '(' opt_all '*' ')'
        | COUNT_SYM '(' in_sum_expr ')'
        | COUNT_SYM '(' DISTINCT expr_list ')'
        | MIN_SYM '(' in_sum_expr ')'
        /*
          According to ANSI SQL, DISTINCT is allowed and has
          no sense inside MIN and MAX grouping functions; so MIN|MAX(DISTINCT ...)
          is processed like an ordinary MIN | MAX()
        */
        | MIN_SYM '(' DISTINCT in_sum_expr ')'
        | MAX_SYM '(' in_sum_expr ')'
        | MAX_SYM '(' DISTINCT in_sum_expr ')'
        | STD_SYM '(' in_sum_expr ')'
        | VARIANCE_SYM '(' in_sum_expr ')'
        | STDDEV_SAMP_SYM '(' in_sum_expr ')'
        | VAR_SAMP_SYM '(' in_sum_expr ')'
        | SUM_SYM '(' in_sum_expr ')'
        | SUM_SYM '(' DISTINCT in_sum_expr ')'
        | GROUP_CONCAT_SYM '(' opt_distinct
          expr_list opt_gorder_clause
          opt_gconcat_separator
          ')'
        ;

variable:
          '@' variable_aux
        ;

variable_aux:
          ident_or_text SET_VAR expr
        | ident_or_text
        | '@' opt_var_ident_type ident_or_text opt_component
        ;

opt_distinct:
          /* empty */
        | DISTINCT
        ;

opt_gconcat_separator:
          /* empty */
        | SEPARATOR_SYM text_string
        ;

opt_gorder_clause:
          /* empty */
        | ORDER_SYM BY gorder_list
        ;

gorder_list:
          gorder_list ',' order_expr
        | order_expr
        ;

in_sum_expr:
          opt_all expr
        ;

cast_type:
          BINARY opt_field_length
        | CHAR_SYM opt_field_length opt_binary
        | NCHAR_SYM opt_field_length
        | SIGNED_SYM
        | SIGNED_SYM INT_SYM
        | UNSIGNED
        | UNSIGNED INT_SYM
        | DATE_SYM
        | TIME_SYM type_datetime_precision
        | DATETIME type_datetime_precision
        | DECIMAL_SYM float_options
        | JSON_SYM
        ;

opt_expr_list:
          /* empty */
        | expr_list
        ;

expr_list:
          expr
        | expr_list ',' expr
        ;

ident_list_arg:
          ident_list
        | '(' ident_list ')'
        ;

ident_list:
          simple_ident
        | ident_list ',' simple_ident
        ;

opt_expr:
          /* empty */
        | expr
        ;

opt_else:
          /* empty */
        | ELSE expr
        ;

when_list:
          WHEN_SYM expr THEN_SYM expr
        | when_list WHEN_SYM expr THEN_SYM expr
        ;

/* Equivalent to <table reference> in the SQL:2003 standard. */
/* Warning - may return NULL in case of incomplete SELECT */
table_ref:
          table_factor
        | join_table
        ;

join_table_list:
          derived_table_list
        ;

/*
  The ODBC escape syntax for Outer Join is: ''
  The parser does not define OJ as a token, any ident is accepted
  instead in $2 (ident). Also, all productions from table_ref can
  be escaped, not only join_table. Both syntax extensions are safe
  and are ignored.
*/
esc_table_ref:
        table_ref
      | ''
      ;

/* Equivalent to <table reference list> in the SQL:2003 standard. */
/* Warning - may return NULL in case of incomplete SELECT */
derived_table_list:
          esc_table_ref
        | derived_table_list ',' esc_table_ref
        ;

/*
  Notice that JOIN is a left-associative operation, and it must be parsed
  as such, that is, the parser must process first the left join operand
  then the right one. Such order of processing ensures that the parser
  produces correct join trees which is essential for semantic analysis
  and subsequent optimization phases.
*/
join_table:
          /* INNER JOIN variants */
          /*
            Use %prec to evaluate production 'table_ref' before 'normal_join'
            so that [INNER | CROSS] JOIN is properly nested as other
            left-associative joins.
          */
          table_ref normal_join table_ref %prec TABLE_REF_PRIORITY
        | table_ref STRAIGHT_JOIN table_factor
        | table_ref normal_join table_ref
          ON
          expr
        | table_ref STRAIGHT_JOIN table_factor
          ON
          expr
        | table_ref normal_join table_ref
          USING
          '(' using_list ')'
        | table_ref NATURAL JOIN_SYM table_factor

          /* LEFT JOIN variants */
        | table_ref LEFT opt_outer JOIN_SYM table_ref
          ON
          expr
        | table_ref LEFT opt_outer JOIN_SYM table_factor
          USING '(' using_list ')'
        | table_ref NATURAL LEFT opt_outer JOIN_SYM table_factor

          /* RIGHT JOIN variants */
        | table_ref RIGHT opt_outer JOIN_SYM table_ref
          ON
          expr
        | table_ref RIGHT opt_outer JOIN_SYM table_factor
          USING '(' using_list ')'
        | table_ref NATURAL RIGHT opt_outer JOIN_SYM table_factor
        ;

normal_join:
          JOIN_SYM
        | INNER_SYM JOIN_SYM
        | CROSS JOIN_SYM
        ;

/*
  table PARTITION (list of partitions), reusing using_list instead of creating
  a new rule for partition_list.
*/
opt_use_partition:
          /* empty */
        | use_partition
        ;

use_partition:
          PARTITION_SYM '(' using_list ')'
        ;

/*
   This is a flattening of the rules <table factor> and <table primary>
   in the SQL:2003 standard, since we don't have <sample clause>

   I.e.
   <table factor> ::= <table primary> [ <sample clause> ]
*/
/* Warning - may return NULL in case of incomplete SELECT */
table_factor:
          table_ident opt_use_partition opt_table_alias opt_key_definition
        | SELECT_SYM select_options select_item_list table_expression
          /*
            Represents a flattening of the following rules from the SQL:2003
            standard. This sub-rule corresponds to the sub-rule
            <table primary> ::= ... | <derived table> [ AS ] <correlation name>

            The following rules have been flattened into query_expression_body
            (since we have no <with clause>).

            <derived table> ::= <table subquery>
            <table subquery> ::= <subquery>
            <subquery> ::= <left paren> <query expression> <right paren>
            <query expression> ::= [ <with clause> ] <query expression body>

            For the time being we use the non-standard rule
            select_derived_union which is a compromise between the standard
            and our parser. Possibly this rule could be replaced by our
            query_expression_body.
          */
        | '(' select_derived_union ')' opt_table_alias
        ;

/*
  This rule accepts just about anything. The reason is that we have
  empty-producing rules in the beginning of rules, in this case
  subselect_start. This forces bison to take a decision which rules to
  reduce by long before it has seen any tokens. This approach ties us
  to a very limited class of parseable languages, and unfortunately
  SQL is not one of them. The chosen 'solution' was this rule, which
  produces just about anything, even complete bogus statements, for
  instance ( table UNION SELECT 1 ).

  Fortunately, we know that the semantic value returned by
  select_derived->value is NULL if it contained a derived table, and a pointer to
  the base table's TABLE_LIST if it was a base table. So in the rule
  regarding union's, we throw a parse error manually and pretend it
  was bison that did it.

  Also worth noting is that this rule concerns query expressions in
  the from clause only. Top level select statements and other types of
  subqueries have their own union rules.
 */
select_derived_union:
          select_derived opt_union_order_or_limit
        | select_derived_union UNION_SYM union_option query_specification
        ;

/* The equivalent of select_part2 for nested queries. */
select_part2_derived:
          opt_query_spec_options select_item_list
        ;

/* handle contents of parentheses in join expression */
select_derived:
          derived_table_list
        ;

opt_outer:
          /* empty */
        | OUTER
        ;

index_hint_clause:
          /* empty */
        | FOR_SYM JOIN_SYM
        | FOR_SYM ORDER_SYM BY
        | FOR_SYM GROUP_SYM BY
        ;

index_hint_type:
          FORCE_SYM
        | IGNORE_SYM
        ;

index_hint_definition:
          index_hint_type key_or_index index_hint_clause
          '(' key_usage_list ')'
        | USE_SYM key_or_index index_hint_clause
          '(' opt_key_usage_list ')'
       ;

index_hints_list:
          index_hint_definition
        | index_hints_list index_hint_definition
        ;

opt_index_hints_list:
          /* empty */
        | index_hints_list
        ;

opt_key_definition:
          opt_index_hints_list
        ;

opt_key_usage_list:
          /* empty */
        | key_usage_list
        ;

key_usage_element:
          ident
        | PRIMARY_SYM
        ;

key_usage_list:
          key_usage_element
        | key_usage_list ',' key_usage_element
        ;

using_list:
          ident
        | using_list ',' ident
        ;

interval:
          interval_time_stamp
        | DAY_HOUR_SYM
        | DAY_MICROSECOND_SYM
        | DAY_MINUTE_SYM
        | DAY_SECOND_SYM
        | HOUR_MICROSECOND_SYM
        | HOUR_MINUTE_SYM
        | HOUR_SECOND_SYM
        | MINUTE_MICROSECOND_SYM
        | MINUTE_SECOND_SYM
        | SECOND_MICROSECOND_SYM
        | YEAR_MONTH_SYM
        ;

interval_time_stamp:
          DAY_SYM
        | WEEK_SYM
        | HOUR_SYM
        | MINUTE_SYM
        | MONTH_SYM
        | QUARTER_SYM
        | SECOND_SYM
        | MICROSECOND_SYM
        | YEAR_SYM
        ;

date_time_type:
          DATE_SYM
        | TIME_SYM
        | TIMESTAMP
        | DATETIME
        ;

table_alias:
          /* empty */
        | AS
        | EQ
        ;

opt_table_alias:
          /* empty */
        | table_alias ident
        ;

opt_all:
          /* empty */
        | ALL
        ;

opt_where_clause:
          /* empty */
        | WHERE expr
        ;

opt_having_clause:
          /* empty */
        | HAVING expr
        ;

opt_escape:
          ESCAPE_SYM simple_expr
        | /* empty */
        ;

/*
   group by statement in select
*/

opt_group_clause:
          /* empty */
        | GROUP_SYM BY group_list olap_opt
        ;

group_list:
          group_list ',' grouping_expr
        | grouping_expr
        ;

olap_opt:
          /* empty */
        | WITH_CUBE_SYM
            /*
              'WITH CUBE' is reserved in the MySQL syntax, but not implemented,
              and cause LALR(2) conflicts.
              This syntax is not standard.
              MySQL syntax: GROUP BY col1, col2, col3 WITH CUBE
              SQL-2003: GROUP BY ... CUBE(col1, col2, col3)
            */
        | WITH_ROLLUP_SYM
            /*
              'WITH ROLLUP' is needed for backward compatibility,
              and cause LALR(2) conflicts.
              This syntax is not standard.
              MySQL syntax: GROUP BY col1, col2, col3 WITH ROLLUP
              SQL-2003: GROUP BY ... ROLLUP(col1, col2, col3)
            */
        ;

/*
  Order by statement in ALTER TABLE
*/

alter_order_clause:
          ORDER_SYM BY alter_order_list
        ;

alter_order_list:
          alter_order_list ',' alter_order_item
        | alter_order_item
        ;

alter_order_item:
          simple_ident_nospvar opt_ordering_direction
        ;

/*
   Order by statement in select
*/

opt_order_clause:
          /* empty */
        | order_clause
        ;

order_clause:
          ORDER_SYM BY order_list
        ;

order_list:
          order_list ',' order_expr
        | order_expr
        ;

opt_ordering_direction:
          /* empty */
        | ordering_direction
        ;

ordering_direction:
          ASC
        | DESC
        ;

opt_limit_clause:
          /* empty */
        | limit_clause
        ;

limit_clause:
          LIMIT limit_options
        ;

limit_options:
          limit_option
        | limit_option ',' limit_option
        | limit_option OFFSET_SYM limit_option
        ;

limit_option:
          ident
        | param_marker
        | ULONGLONG_NUM
        | LONG_NUM
        | NUM
        ;

opt_simple_limit:
          /* empty */
        | LIMIT limit_option
        ;

ulong_num:
          NUM
        | HEX_NUM
        | LONG_NUM
        | ULONGLONG_NUM
        | DECIMAL_NUM
        | FLOAT_NUM
        ;

real_ulong_num:
          NUM
        | HEX_NUM
        | LONG_NUM
        | ULONGLONG_NUM
        | dec_num_error
        ;

ulonglong_num:
          NUM
        | ULONGLONG_NUM
        | LONG_NUM
        | DECIMAL_NUM
        | FLOAT_NUM
        ;

real_ulonglong_num:
          NUM
        | ULONGLONG_NUM
        | LONG_NUM
        | dec_num_error
        ;

dec_num_error:
          dec_num
        ;

dec_num:
          DECIMAL_NUM
        | FLOAT_NUM
        ;

opt_procedure_analyse_clause:
          /* empty */
        | PROCEDURE_SYM ANALYSE_SYM
          '(' opt_procedure_analyse_params ')'
        ;

opt_procedure_analyse_params:
          /* empty */
        | procedure_analyse_param
        | procedure_analyse_param ',' procedure_analyse_param
        ;

procedure_analyse_param:
          NUM
          }
        ;

select_var_list:
          select_var_list ',' select_var_ident
        | select_var_ident
        ;

select_var_ident:
          '@' ident_or_text
        | ident_or_text
        ;

opt_into:
          /* empty */
        | into
        ;

into:
          INTO into_destination
        ;

into_destination:
          OUTFILE TEXT_STRING_filesystem
          opt_load_data_charset
          opt_field_term opt_line_term
        | DUMPFILE TEXT_STRING_filesystem
        | select_var_list
        ;

/*
  DO statement
*/

do_stmt:
          DO_SYM empty_select_options select_item_list
        ;

empty_select_options:
          /* empty */
        ;

/*
  Drop : delete tables or index or user
*/

drop:
          DROP opt_temporary table_or_tables if_exists
          table_list opt_restrict
        | DROP INDEX_SYM ident ON table_ident
          opt_index_lock_algorithm
        | DROP DATABASE if_exists ident
        | DROP FUNCTION_SYM if_exists ident '.' ident
            lex->sql_command = SQLCOM_DROP_FUNCTION;
            lex->drop_if_exists= $3;
            spname= new sp_name(to_lex_cstring($4), $6, true);
            if (spname == NULL)
              MYSQL_YYABORT;
            spname->init_qname(thd);
            lex->spname= spname;
          }
        | DROP FUNCTION_SYM if_exists ident
            if (thd->db().str && lex->copy_db_to(&db.str, &db.length))
              MYSQL_YYABORT;
            if (sp_check_name(&$4))
               MYSQL_YYABORT;
            lex->sql_command = SQLCOM_DROP_FUNCTION;
            lex->drop_if_exists= $3;
            spname= new sp_name(to_lex_cstring(db), $4, false);
            if (spname == NULL)
              MYSQL_YYABORT;
            spname->init_qname(thd);
            lex->spname= spname;
          }
        | DROP PROCEDURE_SYM if_exists sp_name
            lex->sql_command = SQLCOM_DROP_PROCEDURE;
            lex->drop_if_exists= $3;
            lex->spname= $4;
          }
        | DROP USER if_exists clear_privileges user_list
        | DROP VIEW_SYM if_exists
          table_list opt_restrict
        | DROP EVENT_SYM if_exists sp_name
        | DROP TRIGGER_SYM if_exists sp_name
        | DROP TABLESPACE_SYM tablespace_name drop_ts_options_list
        | DROP LOGFILE_SYM GROUP_SYM logfile_group_name drop_ts_options_list
        | DROP SERVER_SYM if_exists ident_or_text
        ;

table_list:
          table_name
        | table_list ',' table_name
        ;

table_name:
          table_ident
        ;

table_alias_ref_list:
          table_ident_opt_wild
        | table_alias_ref_list ',' table_ident_opt_wild
        ;

if_exists:
          /* empty */
        | IF EXISTS
        ;

opt_temporary:
          /* empty */
        | TEMPORARY
        ;

drop_ts_options_list:
          /* empty */
        | drop_ts_options

drop_ts_options:
          drop_ts_option
        | drop_ts_options drop_ts_option
        | drop_ts_options_list ',' drop_ts_option
        ;

drop_ts_option:
          opt_ts_engine
        | ts_wait

/*
** Insert : add new data to table
*/

insert_stmt:
          INSERT                       /* #1 */
          insert_lock_option           /* #2 */
          opt_ignore                   /* #3 */
          opt_INTO                     /* #4 */
          table_ident                  /* #5 */
          opt_use_partition            /* #6 */
          insert_from_constructor      /* #7 */
          opt_insert_update_list       /* #8 */
        | INSERT                       /* #1 */
          insert_lock_option           /* #2 */
          opt_ignore                   /* #3 */
          opt_INTO                     /* #4 */
          table_ident                  /* #5 */
          opt_use_partition            /* #6 */
          SET                          /* #7 */
          update_list                  /* #8 */
          opt_insert_update_list       /* #9 */
        | INSERT                       /* #1 */
          insert_lock_option           /* #2 */
          opt_ignore                   /* #3 */
          opt_INTO                     /* #4 */
          table_ident                  /* #5 */
          opt_use_partition            /* #6 */
          insert_from_subquery         /* #7 */
          opt_insert_update_list       /* #8 */
        ;

replace_stmt:
          REPLACE                       /* #1 */
          replace_lock_option           /* #2 */
          opt_INTO                      /* #3 */
          table_ident                   /* #4 */
          opt_use_partition             /* #5 */
          insert_from_constructor       /* #6 */
        | REPLACE                       /* #1 */
          replace_lock_option           /* #2 */
          opt_INTO                      /* #3 */
          table_ident                   /* #4 */
          opt_use_partition             /* #5 */
          SET                           /* #6 */
          update_list                   /* #7 */
        | REPLACE                       /* #1 */
          replace_lock_option           /* #2 */
          opt_INTO                      /* #3 */
          table_ident                   /* #4 */
          opt_use_partition             /* #5 */
          insert_from_subquery          /* #6 */
        ;

insert_lock_option:
          /* empty */
        | LOW_PRIORITY
        | DELAYED_SYM
        | HIGH_PRIORITY
        ;

replace_lock_option:
          opt_low_priority
        | DELAYED_SYM
        ;

opt_INTO:
          /* empty */
        | INTO
        ;

insert_from_constructor:
          insert_values
        | '(' ')' insert_values
        | '(' fields ')' insert_values
        ;

insert_from_subquery:
          insert_query_expression
        | '(' ')' insert_query_expression
        | '(' fields ')' insert_query_expression
        ;

fields:
          fields ',' insert_ident
        | insert_ident
        ;

insert_values:
          value_or_values values_list
        ;

insert_query_expression:
          create_select opt_union_clause
        | '(' create_select ')' union_opt
        ;

value_or_values:
          VALUE_SYM
        | VALUES
        ;

values_list:
          values_list ','  row_value
        | row_value
        ;


equal:
          EQ
        | SET_VAR
        ;

opt_equal:
          /* empty */
        | equal
        ;

row_value:
          '(' opt_values ')'
        ;

opt_values:
          /* empty */
        | values
        ;

values:
          values ','  expr_or_default
        | expr_or_default
        ;

expr_or_default:
          expr
        | DEFAULT
        ;

opt_insert_update_list:
          /* empty */
        | ON DUPLICATE_SYM KEY_SYM UPDATE_SYM update_list
        ;

/* Update rows in a table */

update_stmt:
          UPDATE_SYM            /* #1 */
          opt_low_priority      /* #2 */
          opt_ignore            /* #3 */
          join_table_list       /* #4 */
          SET                   /* #5 */
          update_list           /* #6 */
          opt_where_clause      /* #7 */
          opt_order_clause      /* #8 */
          opt_simple_limit      /* #9 */
        ;

update_list:
          update_list ',' update_elem
        | update_elem
        ;

update_elem:
          simple_ident_nospvar equal expr_or_default
        ;

opt_low_priority:
          /* empty */
        | LOW_PRIORITY
        ;

/* Delete rows from a table */

delete_stmt:
          DELETE_SYM
          opt_delete_options
          FROM
          table_ident
          opt_use_partition
          opt_where_clause
          opt_order_clause
          opt_simple_limit
        | DELETE_SYM
          opt_delete_options
          table_alias_ref_list
          FROM
          join_table_list
          opt_where_clause
        | DELETE_SYM
          opt_delete_options
          FROM
          table_alias_ref_list
          USING
          join_table_list
          opt_where_clause
        ;

opt_wild:
          /* empty */
        | '.' '*'
        ;

opt_delete_options:
          /* empty */
        | opt_delete_option opt_delete_options
        ;

opt_delete_option:
          QUICK
        | LOW_PRIORITY
        | IGNORE_SYM
        ;

truncate:
          TRUNCATE_SYM opt_table_sym
          table_name
        ;

opt_table_sym:
          /* empty */
        | TABLE_SYM
        ;

opt_profile_defs:
  /* empty */
  | profile_defs;

profile_defs:
  profile_def
  | profile_defs ',' profile_def;

profile_def:
  CPU_SYM
  | MEMORY_SYM
  | BLOCK_SYM IO_SYM
  | CONTEXT_SYM SWITCHES_SYM
  | PAGE_SYM FAULTS_SYM
  | IPC_SYM
  | SWAPS_SYM
  | SOURCE_SYM
  | ALL
  ;

opt_profile_args:
  /* empty */
  | FOR_SYM QUERY_SYM NUM
  ;

/* Show things */

show:
          SHOW
          show_param
        ;

show_param:
           DATABASES opt_wild_or_where
         | opt_full TABLES opt_db opt_wild_or_where
         | opt_full TRIGGERS_SYM opt_db opt_wild_or_where
         | EVENTS_SYM opt_db opt_wild_or_where
         | TABLE_SYM STATUS_SYM opt_db opt_wild_or_where
        | OPEN_SYM TABLES opt_db opt_wild_or_where
        | PLUGINS_SYM
        | ENGINE_SYM known_storage_engines show_engine_param
        | ENGINE_SYM ALL show_engine_param
        | opt_full COLUMNS from_or_in table_ident opt_db opt_wild_or_where
        | master_or_binary LOGS_SYM
        | SLAVE HOSTS_SYM
        | BINLOG_SYM EVENTS_SYM binlog_in binlog_from
          opt_limit_clause
        | RELAYLOG_SYM EVENTS_SYM binlog_in binlog_from
          opt_limit_clause opt_channel
        | keys_or_index         /* #1 */
          from_or_in            /* #2 */
          table_ident           /* #3 */
          opt_db                /* #4 */
          opt_where_clause      /* #5 */
        | opt_storage ENGINES_SYM
        | PRIVILEGES
        | COUNT_SYM '(' '*' ')' WARNINGS
        | COUNT_SYM '(' '*' ')' ERRORS
        | WARNINGS opt_limit_clause
        | ERRORS opt_limit_clause
        | PROFILES_SYM
        | PROFILE_SYM opt_profile_defs opt_profile_args opt_limit_clause
        | opt_var_type STATUS_SYM opt_wild_or_where_for_show
            else
              else
            }
          }
        | opt_full PROCESSLIST_SYM
        | opt_var_type VARIABLES opt_wild_or_where_for_show
            else
              else
            }
          }
        | charset opt_wild_or_where
        | COLLATION_SYM opt_wild_or_where
        | GRANTS
        | GRANTS FOR_SYM user
        | CREATE DATABASE opt_if_not_exists ident
        | CREATE TABLE_SYM table_ident
        | CREATE VIEW_SYM table_ident
        | MASTER_SYM STATUS_SYM
        | SLAVE STATUS_SYM opt_channel
        | CREATE PROCEDURE_SYM sp_name
        | CREATE FUNCTION_SYM sp_name
        | CREATE TRIGGER_SYM sp_name
        | PROCEDURE_SYM STATUS_SYM opt_wild_or_where
        | FUNCTION_SYM STATUS_SYM opt_wild_or_where
        | PROCEDURE_SYM CODE_SYM sp_name
        | FUNCTION_SYM CODE_SYM sp_name
        | CREATE EVENT_SYM sp_name
        | CREATE USER clear_privileges user
        ;

show_engine_param:
          STATUS_SYM
        | MUTEX_SYM
        | LOGS_SYM
        ;

master_or_binary:
          MASTER_SYM
        | BINARY
        ;

opt_storage:
          /* empty */
        | STORAGE_SYM
        ;

opt_db:
          /* empty */
        | from_or_in ident
        ;

opt_full:
          /* empty */
        | FULL
        ;

from_or_in:
          FROM
        | IN_SYM
        ;

binlog_in:
          /* empty */
        | IN_SYM TEXT_STRING_sys
        ;

binlog_from:
          /* empty */
        | FROM ulonglong_num
        ;

opt_wild_or_where:
          /* empty */
        | LIKE TEXT_STRING_sys
        | WHERE expr
        ;

opt_wild_or_where_for_show:
          /* empty */
        | LIKE TEXT_STRING_sys
        | WHERE expr
            else
          }
        ;

/* A Oracle compatible synonym for show */
describe:
          describe_command table_ident
          opt_describe_column
        | describe_command opt_extended_describe
          explainable_command
        ;

explainable_command:
          select
        | insert_stmt
        | replace_stmt
        | update_stmt
        | delete_stmt
        | FOR_SYM CONNECTION_SYM real_ulong_num
            Lex->query_id= (my_thread_id)($3);
          }
        ;

describe_command:
          DESC
        | DESCRIBE
        ;

opt_extended_describe:
          /* empty */
        | EXTENDED_SYM
        | PARTITIONS_SYM
        | FORMAT_SYM EQ ident_or_text
            else if (!my_strcasecmp(system_charset_info, $3.str, "TRADITIONAL"))
            else
          }
        ;

opt_describe_column:
          /* empty */
        | text_string
        | ident
        ;


/* flush things */

flush:
          FLUSH_SYM opt_no_write_to_binlog
          flush_options
        ;

flush_options:
          table_or_tables
          opt_table_list
          opt_flush_lock
        | flush_options_list
        ;

opt_flush_lock:
          /* empty */
        | WITH READ_SYM LOCK_SYM
          }
        | FOR_SYM
          }
          EXPORT_SYM
          }
        ;

flush_options_list:
          flush_options_list ',' flush_option
        | flush_option
        ;

flush_option:
          ERROR_SYM LOGS_SYM
        | ENGINE_SYM LOGS_SYM
        | GENERAL LOGS_SYM
        | SLOW LOGS_SYM
        | BINARY LOGS_SYM
        | RELAY LOGS_SYM opt_channel
        | QUERY_SYM CACHE_SYM
        | HOSTS_SYM
        | PRIVILEGES
        | LOGS_SYM
        | STATUS_SYM
        | DES_KEY_FILE
        | RESOURCES
        | OPTIMIZER_COSTS_SYM
        ;

opt_table_list:
          /* empty */
        | table_list
        ;

reset:
          RESET_SYM
          reset_options
        ;

reset_options:
          reset_options ',' reset_option
        | reset_option
        ;

reset_option:
          SLAVE
          slave_reset_options opt_channel
        | MASTER_SYM
        | QUERY_SYM CACHE_SYM
        ;

slave_reset_options:
          /* empty */
        | ALL
        ;

purge:
          PURGE
          purge_options
        ;

purge_options:
          master_or_binary LOGS_SYM purge_option
        ;

purge_option:
          TO_SYM TEXT_STRING_sys
        | BEFORE_SYM expr
        ;

/* kill threads */

kill:
          KILL_SYM kill_option expr
        ;

kill_option:
          /* empty */
        | CONNECTION_SYM
        | QUERY_SYM
        ;

/* change database */

use:
          USE_SYM ident
        ;

/* import, export of files */

load:
          LOAD data_or_xml
          }
          load_data_lock opt_local INFILE TEXT_STRING_filesystem
          opt_duplicate INTO TABLE_SYM table_ident opt_use_partition
          opt_load_data_charset
          opt_xml_rows_identified_by
          opt_field_term opt_line_term opt_ignore_lines opt_field_or_var_spec
          opt_load_data_set_spec
          ;

data_or_xml:
        DATA_SYM
        | XML_SYM
        ;

opt_local:
          /* empty */
        | LOCAL_SYM
        ;

load_data_lock:
          /* empty */
        | CONCURRENT
        | LOW_PRIORITY
        ;

opt_duplicate:
          /* empty */
        | REPLACE
        | IGNORE_SYM
        ;

opt_field_term:
          /* empty */
        | COLUMNS field_term_list
        ;

field_term_list:
          field_term_list field_term
        | field_term
        ;

field_term:
          TERMINATED BY text_string
        | OPTIONALLY ENCLOSED BY text_string
        | ENCLOSED BY text_string
        | ESCAPED BY text_string
        ;

opt_line_term:
          /* empty */
        | LINES line_term_list
        ;

line_term_list:
          line_term_list line_term
        | line_term
        ;

line_term:
          TERMINATED BY text_string
        | STARTING BY text_string
        ;

opt_xml_rows_identified_by:
        /* empty */
        | ROWS_SYM IDENTIFIED_SYM BY text_string;

opt_ignore_lines:
          /* empty */
        | IGNORE_SYM NUM lines_or_rows
        ;

lines_or_rows:
        LINES

        | ROWS_SYM
        ;

opt_field_or_var_spec:
          /* empty */
        | '(' fields_or_vars ')'
        | '(' ')'
        ;

fields_or_vars:
          fields_or_vars ',' field_or_var
        | field_or_var
        ;

field_or_var:
          simple_ident_nospvar
        | '@' ident_or_text
        ;

opt_load_data_set_spec:
          /* empty */
        | SET load_data_set_list
        ;

load_data_set_list:
          load_data_set_list ',' load_data_set_elem
        | load_data_set_elem
        ;

load_data_set_elem:
          simple_ident_nospvar equal expr_or_default
        ;

/* Common definitions */

text_literal:
          TEXT_STRING
        | NCHAR_STRING
        | UNDERSCORE_CHARSET TEXT_STRING
        | text_literal TEXT_STRING_literal
        ;

text_string:
          TEXT_STRING_literal
        | HEX_NUM
        | BIN_NUM
        ;

param_marker:
          PARAM_MARKER
        ;

signed_literal:
          literal
        | '+' NUM_literal
        | '-' NUM_literal
        ;


literal:
          text_literal
        | NUM_literal
        | temporal_literal
        | NULL_SYM
        | FALSE_SYM
        | TRUE_SYM
        | HEX_NUM
        | BIN_NUM
        | UNDERSCORE_CHARSET HEX_NUM
        | UNDERSCORE_CHARSET BIN_NUM
        ;

NUM_literal:
          NUM
        | LONG_NUM
        | ULONGLONG_NUM
        | DECIMAL_NUM
        | FLOAT_NUM
        ;


temporal_literal:
        DATE_SYM TEXT_STRING
        | TIME_SYM TEXT_STRING
        | TIMESTAMP TEXT_STRING
        ;




/**********************************************************************
** Creating different items.
**********************************************************************/

insert_ident:
          simple_ident_nospvar
        | table_wild
        ;

table_wild:
          ident '.' '*'
        | ident '.' ident '.' '*'
        ;

order_expr:
          expr opt_ordering_direction
        ;

grouping_expr:
          expr
        | expr ordering_direction
        ;

simple_ident:
          ident
        | simple_ident_q
        ;

simple_ident_nospvar:
          ident
        | simple_ident_q
        ;

simple_ident_q:
          ident '.' ident
        | '.' ident '.' ident
        | ident '.' ident '.' ident
        ;

field_ident:
          ident
        | ident '.' ident '.' ident
            if (my_strcasecmp(table_alias_charset, $3.str,
                              table->table_name))
            $$=$5;
          }
        | ident '.' ident
            $$=$3;
          }
        | '.' ident /* For Delphi */
        ;

table_ident:
          ident
        | ident '.' ident
        | '.' ident
        ;

table_ident_opt_wild:
          ident opt_wild
        | ident '.' ident opt_wild
        ;

table_ident_nodb:
          ident;
            $$= new Table_ident(YYTHD, db, to_lex_cstring($1), 0);
            if ($$ == NULL)
              MYSQL_YYABORT;
          }
        ;

IDENT_sys:
          IDENT
        | IDENT_QUOTED
              $$= $1;
            }
            else
          }
        ;

TEXT_STRING_sys_nonewline:
          TEXT_STRING_sys
          }
        ;

filter_wild_db_table_string:
          TEXT_STRING_sys_nonewline
          }
        ;

TEXT_STRING_sys:
          TEXT_STRING
          }
        ;

TEXT_STRING_literal:
          TEXT_STRING
          }
        ;

TEXT_STRING_filesystem:
          TEXT_STRING
          }
        ;

ident:
          IDENT_sys
        | keyword
        ;

label_ident:
          IDENT_sys
        | keyword_sp
        ;

ident_or_text:
          ident
        | TEXT_STRING_sys
        | LEX_HOSTNAME
        ;

user:
          ident_or_text
        | ident_or_text '@' ident_or_text
        | CURRENT_USER optional_braces
        ;

/* Keyword that we allow for identifiers (except SP labels) */
keyword:
          keyword_sp
        | ACCOUNT_SYM
        | ASCII_SYM
        | ALWAYS_SYM
        | BACKUP_SYM
        | BEGIN_SYM
        | BYTE_SYM
        | CACHE_SYM
        | CHARSET
        | CHECKSUM_SYM
        | CLOSE_SYM
        | COMMENT_SYM
        | COMMIT_SYM
        | CONTAINS_SYM
        | DEALLOCATE_SYM
        | DO_SYM
        | END
        | EXECUTE_SYM
        | FLUSH_SYM
        | FOLLOWS_SYM
        | FORMAT_SYM
        | GROUP_REPLICATION
        | HANDLER_SYM
        | HELP_SYM
        | HOST_SYM
        | INSTALL_SYM
        | LANGUAGE_SYM
        | NO_SYM
        | OPEN_SYM
        | OPTIONS_SYM
        | OWNER_SYM
        | PARSER_SYM
        | PARSE_GCOL_EXPR_SYM
        | PORT_SYM
        | PRECEDES_SYM
        | PREPARE_SYM
        | REMOVE_SYM
        | REPAIR
        | RESET_SYM
        | RESTORE_SYM
        | ROLLBACK_SYM
        | SAVEPOINT_SYM
        | SECURITY_SYM
        | SERVER_SYM
        | SHUTDOWN
        | SIGNED_SYM
        | SOCKET_SYM
        | SLAVE
        | SONAME_SYM
        | START_SYM
        | STOP_SYM
        | TRUNCATE_SYM
        | UNICODE_SYM
        | UNINSTALL_SYM
        | WRAPPER_SYM
        | XA_SYM
        | UPGRADE_SYM
        ;

/*
 * Keywords that we allow for labels in SPs.
 * Anything that's the beginning of a statement or characteristics
 * must be in keyword above, otherwise we get (harmful) shift/reduce
 * conflicts.
 */
keyword_sp:
          ACTION
        | ADDDATE_SYM
        | AFTER_SYM
        | AGAINST
        | AGGREGATE_SYM
        | ALGORITHM_SYM
        | ANALYSE_SYM
        | ANY_SYM
        | AT_SYM
        | AUTO_INC
        | AUTOEXTEND_SIZE_SYM
        | AVG_ROW_LENGTH
        | AVG_SYM
        | BINLOG_SYM
        | BIT_SYM
        | BLOCK_SYM
        | BOOL_SYM
        | BOOLEAN_SYM
        | BTREE_SYM
        | CASCADED
        | CATALOG_NAME_SYM
        | CHAIN_SYM
        | CHANGED
        | CHANNEL_SYM
        | CIPHER_SYM
        | CLIENT_SYM
        | CLASS_ORIGIN_SYM
        | COALESCE
        | CODE_SYM
        | COLLATION_SYM
        | COLUMN_NAME_SYM
        | COLUMN_FORMAT_SYM
        | COLUMNS
        | COMMITTED_SYM
        | COMPACT_SYM
        | COMPLETION_SYM
        | COMPRESSED_SYM
        | COMPRESSION_SYM
        | ENCRYPTION_SYM
        | CONCURRENT
        | CONNECTION_SYM
        | CONSISTENT_SYM
        | CONSTRAINT_CATALOG_SYM
        | CONSTRAINT_SCHEMA_SYM
        | CONSTRAINT_NAME_SYM
        | CONTEXT_SYM
        | CPU_SYM
        | CUBE_SYM
        /*
          Although a reserved keyword in SQL:2003 (and :2008),
          not reserved in MySQL per WL#2111 specification.
        */
        | CURRENT_SYM
        | CURSOR_NAME_SYM
        | DATA_SYM
        | DATAFILE_SYM
        | DATETIME
        | DATE_SYM
        | DAY_SYM
        | DEFAULT_AUTH_SYM
        | DEFINER_SYM
        | DELAY_KEY_WRITE_SYM
        | DES_KEY_FILE
        | DIAGNOSTICS_SYM
        | DIRECTORY_SYM
        | DISABLE_SYM
        | DISCARD
        | DISK_SYM
        | DUMPFILE
        | DUPLICATE_SYM
        | DYNAMIC_SYM
        | ENDS_SYM
        | ENUM
        | ENGINE_SYM
        | ENGINES_SYM
        | ERROR_SYM
        | ERRORS
        | ESCAPE_SYM
        | EVENT_SYM
        | EVENTS_SYM
        | EVERY_SYM
        | EXCHANGE_SYM
        | EXPANSION_SYM
        | EXPIRE_SYM
        | EXPORT_SYM
        | EXTENDED_SYM
        | EXTENT_SIZE_SYM
        | FAULTS_SYM
        | FAST_SYM
        | FOUND_SYM
        | ENABLE_SYM
        | FULL
        | FILE_SYM
        | FILE_BLOCK_SIZE_SYM
        | FILTER_SYM
        | FIRST_SYM
        | FIXED_SYM
        | GENERAL
        | GEOMETRY_SYM
        | GEOMETRYCOLLECTION
        | GET_FORMAT
        | GRANTS
        | GLOBAL_SYM
        | HASH_SYM
        | HOSTS_SYM
        | HOUR_SYM
        | IDENTIFIED_SYM
        | IGNORE_SERVER_IDS_SYM
        | INVOKER_SYM
        | IMPORT
        | INDEXES
        | INITIAL_SIZE_SYM
        | INSTANCE_SYM
        | IO_SYM
        | IPC_SYM
        | ISOLATION
        | ISSUER_SYM
        | INSERT_METHOD
        | JSON_SYM
        | KEY_BLOCK_SIZE
        | LAST_SYM
        | LEAVES
        | LESS_SYM
        | LEVEL_SYM
        | LINESTRING
        | LIST_SYM
        | LOCAL_SYM
        | LOCKS_SYM
        | LOGFILE_SYM
        | LOGS_SYM
        | MAX_ROWS
        | MASTER_SYM
        | MASTER_HEARTBEAT_PERIOD_SYM
        | MASTER_HOST_SYM
        | MASTER_PORT_SYM
        | MASTER_LOG_FILE_SYM
        | MASTER_LOG_POS_SYM
        | MASTER_USER_SYM
        | MASTER_PASSWORD_SYM
        | MASTER_SERVER_ID_SYM
        | MASTER_CONNECT_RETRY_SYM
        | MASTER_RETRY_COUNT_SYM
        | MASTER_DELAY_SYM
        | MASTER_SSL_SYM
        | MASTER_SSL_CA_SYM
        | MASTER_SSL_CAPATH_SYM
        | MASTER_TLS_VERSION_SYM
        | MASTER_SSL_CERT_SYM
        | MASTER_SSL_CIPHER_SYM
        | MASTER_SSL_CRL_SYM
        | MASTER_SSL_CRLPATH_SYM
        | MASTER_SSL_KEY_SYM
        | MASTER_AUTO_POSITION_SYM
        | MAX_CONNECTIONS_PER_HOUR
        | MAX_QUERIES_PER_HOUR
        | MAX_SIZE_SYM
        | MAX_UPDATES_PER_HOUR
        | MAX_USER_CONNECTIONS_SYM
        | MEDIUM_SYM
        | MEMORY_SYM
        | MERGE_SYM
        | MESSAGE_TEXT_SYM
        | MICROSECOND_SYM
        | MIGRATE_SYM
        | MINUTE_SYM
        | MIN_ROWS
        | MODIFY_SYM
        | MODE_SYM
        | MONTH_SYM
        | MULTILINESTRING
        | MULTIPOINT
        | MULTIPOLYGON
        | MUTEX_SYM
        | MYSQL_ERRNO_SYM
        | NAME_SYM
        | NAMES_SYM
        | NATIONAL_SYM
        | NCHAR_SYM
        | NDBCLUSTER_SYM
        | NEVER_SYM
        | NEXT_SYM
        | NEW_SYM
        | NO_WAIT_SYM
        | NODEGROUP_SYM
        | NONE_SYM
        | NUMBER_SYM
        | NVARCHAR_SYM
        | OFFSET_SYM
        | ONE_SYM
        | ONLY_SYM
        | PACK_KEYS_SYM
        | PAGE_SYM
        | PARTIAL
        | PARTITIONING_SYM
        | PARTITIONS_SYM
        | PASSWORD
        | PHASE_SYM
        | PLUGIN_DIR_SYM
        | PLUGIN_SYM
        | PLUGINS_SYM
        | POINT_SYM
        | POLYGON
        | PRESERVE_SYM
        | PREV_SYM
        | PRIVILEGES
        | PROCESS
        | PROCESSLIST_SYM
        | PROFILE_SYM
        | PROFILES_SYM
        | PROXY_SYM
        | QUARTER_SYM
        | QUERY_SYM
        | QUICK
        | READ_ONLY_SYM
        | REBUILD_SYM
        | RECOVER_SYM
        | REDO_BUFFER_SIZE_SYM
        | REDOFILE_SYM
        | REDUNDANT_SYM
        | RELAY
        | RELAYLOG_SYM
        | RELAY_LOG_FILE_SYM
        | RELAY_LOG_POS_SYM
        | RELAY_THREAD
        | RELOAD
        | REORGANIZE_SYM
        | REPEATABLE_SYM
        | REPLICATION
        | REPLICATE_DO_DB
        | REPLICATE_IGNORE_DB
        | REPLICATE_DO_TABLE
        | REPLICATE_IGNORE_TABLE
        | REPLICATE_WILD_DO_TABLE
        | REPLICATE_WILD_IGNORE_TABLE
        | REPLICATE_REWRITE_DB
        | RESOURCES
        | RESUME_SYM
        | RETURNED_SQLSTATE_SYM
        | RETURNS_SYM
        | REVERSE_SYM
        | ROLLUP_SYM
        | ROTATE_SYM
        | ROUTINE_SYM
        | ROWS_SYM
        | ROW_COUNT_SYM
        | ROW_FORMAT_SYM
        | ROW_SYM
        | RTREE_SYM
        | SCHEDULE_SYM
        | SCHEMA_NAME_SYM
        | SECOND_SYM
        | SERIAL_SYM
        | SERIALIZABLE_SYM
        | SESSION_SYM
        | SIMPLE_SYM
        | SHARE_SYM
        | SLOW
        | SNAPSHOT_SYM
        | SOUNDS_SYM
        | SOURCE_SYM
        | SQL_AFTER_GTIDS
        | SQL_AFTER_MTS_GAPS
        | SQL_BEFORE_GTIDS
        | SQL_CACHE_SYM
        | SQL_BUFFER_RESULT
        | SQL_NO_CACHE_SYM
        | SQL_THREAD
        | STACKED_SYM
        | STARTS_SYM
        | STATS_AUTO_RECALC_SYM
        | STATS_PERSISTENT_SYM
        | STATS_SAMPLE_PAGES_SYM
        | STATUS_SYM
        | STORAGE_SYM
        | STRING_SYM
        | SUBCLASS_ORIGIN_SYM
        | SUBDATE_SYM
        | SUBJECT_SYM
        | SUBPARTITION_SYM
        | SUBPARTITIONS_SYM
        | SUPER_SYM
        | SUSPEND_SYM
        | SWAPS_SYM
        | SWITCHES_SYM
        | TABLE_NAME_SYM
        | TABLES
        | TABLE_CHECKSUM_SYM
        | TABLESPACE_SYM
        | TEMPORARY
        | TEMPTABLE_SYM
        | TEXT_SYM
        | THAN_SYM
        | TRANSACTION_SYM
        | TRIGGERS_SYM
        | TIMESTAMP
        | TIMESTAMP_ADD
        | TIMESTAMP_DIFF
        | TIME_SYM
        | TYPES_SYM
        | TYPE_SYM
        | UDF_RETURNS_SYM
        | FUNCTION_SYM
        | UNCOMMITTED_SYM
        | UNDEFINED_SYM
        | UNDO_BUFFER_SIZE_SYM
        | UNDOFILE_SYM
        | UNKNOWN_SYM
        | UNTIL_SYM
        | USER
        | USE_FRM
        | VALIDATION_SYM
        | VARIABLES
        | VIEW_SYM
        | VALUE_SYM
        | WARNINGS
        | WAIT_SYM
        | WEEK_SYM
        | WITHOUT_SYM
        | WORK_SYM
        | WEIGHT_STRING_SYM
        | X509_SYM
        | XID_SYM
        | XML_SYM
        | YEAR_SYM
        ;

/*
  SQLCOM_SET_OPTION statement.

  Note that to avoid shift/reduce conflicts, we have separate rules for the
  first option listed in the statement.
*/

set:
          SET start_option_value_list
        ;


// Start of option value list
start_option_value_list:
          option_value_no_option_type option_value_list_continued
        | TRANSACTION_SYM transaction_characteristics
        | option_type start_option_value_list_following_option_type
        | PASSWORD equal password
        | PASSWORD equal PASSWORD '(' password ')'
        | PASSWORD FOR_SYM user equal password
        | PASSWORD FOR_SYM user equal PASSWORD '(' password ')'
        ;


// Start of option value list, option_type was given
start_option_value_list_following_option_type:
          option_value_following_option_type option_value_list_continued
        | TRANSACTION_SYM transaction_characteristics
        ;

// Remainder of the option value list after first option value.
option_value_list_continued:
          /* empty */
        | ',' option_value_list
        ;

// Repeating list of option values after first option value.
option_value_list:
          option_value
        | option_value_list ',' option_value
        ;

// Wrapper around option values following the first option value in the stmt.
option_value:
          option_type option_value_following_option_type
        | option_value_no_option_type
        ;

option_type:
          GLOBAL_SYM
        | LOCAL_SYM
        | SESSION_SYM
        ;

opt_var_type:
          /* empty */
        | GLOBAL_SYM
        | LOCAL_SYM
        | SESSION_SYM
        ;

opt_var_ident_type:
          /* empty */
        | GLOBAL_SYM '.'
        | LOCAL_SYM '.'
        | SESSION_SYM '.'
        ;

// Option values with preceding option_type.
option_value_following_option_type:
          internal_variable_name equal set_expr_or_default
        ;

// Option values without preceding option_type.
option_value_no_option_type:
          internal_variable_name        /*$1*/
          equal                         /*$2*/
          set_expr_or_default           /*$3*/
        | '@' ident_or_text equal expr
        | '@' '@' opt_var_ident_type internal_variable_name equal set_expr_or_default
        | charset old_or_new_charset_name_or_default
        | NAMES_SYM equal expr
        | NAMES_SYM charset_name_or_default opt_collate
        ;

internal_variable_name:
          ident
        | ident '.' ident
        | DEFAULT '.' ident
        ;

transaction_characteristics:
          transaction_access_mode opt_isolation_level
        | isolation_level opt_transaction_access_mode
        ;

transaction_access_mode:
          transaction_access_mode_types
        ;

opt_transaction_access_mode:
          /* empty */
        | ',' transaction_access_mode
        ;

isolation_level:
          ISOLATION LEVEL_SYM isolation_types
        ;

opt_isolation_level:
          /* empty */
        | ',' isolation_level
        ;

transaction_access_mode_types:
          READ_SYM ONLY_SYM
        | READ_SYM WRITE_SYM
        ;

isolation_types:
          READ_SYM UNCOMMITTED_SYM
        | READ_SYM COMMITTED_SYM
        | REPEATABLE_SYM READ_SYM
        | SERIALIZABLE_SYM
        ;

password:
          TEXT_STRING
        ;


set_expr_or_default:
          expr
        | DEFAULT
        | ON
        | ALL
        | BINARY
        ;

/* Lock function */

lock:
          LOCK_SYM table_or_tables
            lex->sql_command= SQLCOM_LOCK_TABLES;
          }
          table_lock_list
        ;

table_or_tables:
          TABLE_SYM
        | TABLES
        ;

table_lock_list:
          table_lock
        | table_lock_list ',' table_lock
        ;

table_lock:
          table_ident opt_table_alias lock_option
            else if (lock_type == TL_READ)
            else

            if (!Select->add_table_to_list(YYTHD, $1, $2, 0, lock_type,
                                           mdl_lock_type))
              MYSQL_YYABORT;
          }
        ;

lock_option:
          READ_SYM
        | WRITE_SYM
        | LOW_PRIORITY WRITE_SYM
        | READ_SYM LOCAL_SYM
        ;

unlock:
          UNLOCK_SYM
            lex->sql_command= SQLCOM_UNLOCK_TABLES;
          }
          table_or_tables
        ;


shutdown_stmt:
          SHUTDOWN
        ;

alter_instance_stmt:
          ALTER INSTANCE_SYM alter_instance_action

alter_instance_action:
          ROTATE_SYM ident_or_text MASTER_SYM KEY_SYM
            else
          }
        ;

/*
** Handler: direct access to ISAM functions
*/

handler:
          HANDLER_SYM table_ident OPEN_SYM opt_table_alias
            lex->sql_command = SQLCOM_HA_OPEN;
            if (!lex->current_select()->add_table_to_list(thd, $2, $4, 0))
              MYSQL_YYABORT;
            lex->m_sql_cmd= new (thd->mem_root) Sql_cmd_handler_open();
            if (lex->m_sql_cmd == NULL)
              MYSQL_YYABORT;
          }
        | HANDLER_SYM table_ident_nodb CLOSE_SYM
            lex->sql_command = SQLCOM_HA_CLOSE;
            if (!lex->current_select()->add_table_to_list(thd, $2, 0, 0))
              MYSQL_YYABORT;
            lex->m_sql_cmd= new (thd->mem_root) Sql_cmd_handler_close();
            if (lex->m_sql_cmd == NULL)
              MYSQL_YYABORT;
          }
        | HANDLER_SYM           /* #1 */
          table_ident_nodb      /* #2 */
          READ_SYM              /* #3 */
            lex->expr_allows_subselect= FALSE;
            lex->sql_command = SQLCOM_HA_READ;
            Item *one= new (YYTHD->mem_root) Item_int((int32) 1);
            if (one == NULL)
              MYSQL_YYABORT;
            lex->current_select()->select_limit= one;
            lex->current_select()->offset_limit= 0;
            if (!lex->current_select()->add_table_to_list(lex->thd, $2, 0, 0))
              MYSQL_YYABORT;
          }
          handler_read_or_scan  /* #5 */
          opt_where_clause      /* #6 */
          opt_limit_clause      /* #7 */
            lex->m_sql_cmd= new (thd->mem_root) Sql_cmd_handler_read($5,
                                  lex->ident.str, lex->handler_insert_list,
                                  thd->m_parser_state->m_yacc.m_ha_rkey_mode);
            if (lex->m_sql_cmd == NULL)
              MYSQL_YYABORT;
          }
        ;

handler_read_or_scan:
          handler_scan_function
        | ident handler_rkey_function
        ;

handler_scan_function:
          FIRST_SYM
        | NEXT_SYM
        ;

handler_rkey_function:
          FIRST_SYM
        | NEXT_SYM
        | PREV_SYM
        | LAST_SYM
        | handler_rkey_mode
          '(' values ')'
        ;

handler_rkey_mode:
          EQ
        | GE
        | LE
        | GT_SYM
        | LT
        ;

/* GRANT / REVOKE */

revoke:
          REVOKE clear_privileges revoke_command
        ;

revoke_command:
          grant_privileges ON opt_table grant_ident FROM user_list
        | grant_privileges ON FUNCTION_SYM grant_ident FROM user_list
            lex->type= TYPE_ENUM_FUNCTION;
          }
        | grant_privileges ON PROCEDURE_SYM grant_ident FROM user_list
            lex->type= TYPE_ENUM_PROCEDURE;
          }
        | ALL opt_privileges ',' GRANT OPTION FROM user_list
        | PROXY_SYM ON user FROM user_list
        ;

grant:
          GRANT clear_privileges grant_command
        ;

grant_command:
          grant_privileges ON opt_table grant_ident TO_SYM grant_list
          require_clause grant_options
        | grant_privileges ON FUNCTION_SYM grant_ident TO_SYM grant_list
          require_clause grant_options
            lex->type= TYPE_ENUM_FUNCTION;
          }
        | grant_privileges ON PROCEDURE_SYM grant_ident TO_SYM grant_list
          require_clause grant_options
            lex->type= TYPE_ENUM_PROCEDURE;
          }
        | PROXY_SYM ON user TO_SYM grant_list opt_grant_option
        ;

opt_table:
          /* Empty */
        | TABLE_SYM
        ;

grant_privileges:
          object_privilege_list
        | ALL opt_privileges
        ;

opt_privileges:
          /* empty */
        | PRIVILEGES
        ;

object_privilege_list:
          object_privilege
        | object_privilege_list ',' object_privilege
        ;

object_privilege:
          SELECT_SYM
          opt_column_list
        | INSERT
          opt_column_list
        | UPDATE_SYM
          opt_column_list
        | REFERENCES
          opt_column_list
        | DELETE_SYM
        | USAGE
        | INDEX_SYM
        | ALTER
        | CREATE
        | DROP
        | EXECUTE_SYM
        | RELOAD
        | SHUTDOWN
        | PROCESS
        | FILE_SYM
        | GRANT OPTION
        | SHOW DATABASES
        | SUPER_SYM
        | CREATE TEMPORARY TABLES
        | LOCK_SYM TABLES
        | REPLICATION SLAVE
        | REPLICATION CLIENT_SYM
        | CREATE VIEW_SYM
        | SHOW VIEW_SYM
        | CREATE ROUTINE_SYM
        | ALTER ROUTINE_SYM
        | CREATE USER
        | EVENT_SYM
        | TRIGGER_SYM
        | CREATE TABLESPACE_SYM
        ;

opt_and:
          /* empty */
        | AND_SYM
        ;

require_list:
          require_list_element opt_and require_list
        | require_list_element
        ;

require_list_element:
          SUBJECT_SYM TEXT_STRING
            lex->x509_subject=$2.str;
          }
        | ISSUER_SYM TEXT_STRING
            lex->x509_issuer=$2.str;
          }
        | CIPHER_SYM TEXT_STRING
            lex->ssl_cipher=$2.str;
          }
        ;

grant_ident:
          '*'
          }
        | ident '.' '*'
          }
        | '*' '.' '*'
          }
        | table_ident
        ;

user_list:
          user
        | user_list ',' user
        ;

grant_list:
          grant_user
        | grant_list ',' grant_user
        ;

grant_user:
          user IDENTIFIED_SYM BY TEXT_STRING
        | user IDENTIFIED_SYM BY PASSWORD TEXT_STRING
            else
              push_deprecated_warn(YYTHD, "IDENTIFIED BY PASSWORD",
                                   "IDENTIFIED WITH <plugin> AS <hash>");
          }
        | user IDENTIFIED_SYM WITH ident_or_text
        | user IDENTIFIED_SYM WITH ident_or_text AS TEXT_STRING_sys
        | user IDENTIFIED_SYM WITH ident_or_text BY TEXT_STRING_sys
        | user
        ;

opt_column_list:
          /* empty */
        | '(' column_list ')'
        ;

column_list:
          column_list ',' column_list_id
        | column_list_id
        ;

column_list_id:
          ident
            lex->grant_tot_col|= lex->which_columns;
            if (point)
              point->rights |= lex->which_columns;
            else
          }
        ;

require_clause:
          /* empty */
        | REQUIRE_SYM require_list
        | REQUIRE_SYM SSL_SYM
        | REQUIRE_SYM X509_SYM
        | REQUIRE_SYM NONE_SYM
        ;

grant_options:
          /* empty */
        | WITH grant_option_list
        ;

opt_grant_option:
          /* empty */
        | WITH GRANT OPTION
        ;

grant_option_list:
          grant_option_list grant_option
        | grant_option
        ;

grant_option:
          GRANT OPTION
        | MAX_QUERIES_PER_HOUR ulong_num
        | MAX_UPDATES_PER_HOUR ulong_num
        | MAX_CONNECTIONS_PER_HOUR ulong_num
        | MAX_USER_CONNECTIONS_SYM ulong_num
        ;

begin:
          BEGIN_SYM
          opt_work
        ;

opt_work:
          /* empty */
        | WORK_SYM
        ;

opt_chain:
          /* empty */
        | AND_SYM NO_SYM CHAIN_SYM
        | AND_SYM CHAIN_SYM
        ;

opt_release:
          /* empty */
        | RELEASE_SYM
        | NO_SYM RELEASE_SYM
;

opt_savepoint:
          /* empty */
        | SAVEPOINT_SYM
        ;

commit:
          COMMIT_SYM opt_work opt_chain opt_release
        ;

rollback:
          ROLLBACK_SYM opt_work opt_chain opt_release
        | ROLLBACK_SYM opt_work
          TO_SYM opt_savepoint ident
        ;

savepoint:
          SAVEPOINT_SYM ident
        ;

release:
          RELEASE_SYM SAVEPOINT_SYM ident
        ;

/*
   UNIONS : glue selects together
*/


opt_union_clause:
          /* empty */
        | union_list
        ;

union_list:
          UNION_SYM union_option select_init
        ;

union_opt:
          /* Empty */
        | union_list
        | union_order_or_limit
        ;

opt_union_order_or_limit:
          /* Empty */
        | union_order_or_limit
        ;

union_order_or_limit:
          order_or_limit
        ;

order_or_limit:
          order_clause opt_limit_clause
        | limit_clause
        ;

union_option:
          /* empty */
        | DISTINCT
        | ALL
        ;

query_specification:
          SELECT_SYM select_part2_derived table_expression
        | '(' select_paren_derived ')'
          opt_union_order_or_limit
        ;

query_expression_body:
          query_specification
        | query_expression_body UNION_SYM union_option query_specification
        ;

/* Corresponds to <query expression> in the SQL:2003 standard. */
subselect:
          query_expression_body
        ;

opt_query_spec_options:
          /* empty */
        | query_spec_option_list
        ;

query_spec_option_list:
          query_spec_option_list query_spec_option
        | query_spec_option
        ;

query_spec_option:
          STRAIGHT_JOIN
        | HIGH_PRIORITY
        | DISTINCT
        | SQL_SMALL_RESULT
        | SQL_BIG_RESULT
        | SQL_BUFFER_RESULT
        | SQL_CALC_FOUND_ROWS
        | ALL
        ;

/**************************************************************************

 CREATE VIEW | TRIGGER | PROCEDURE statements.

**************************************************************************/

view_or_trigger_or_sp_or_event:
          definer definer_tail
        | no_definer no_definer_tail
        | view_replace_or_algorithm definer_opt view_tail
        ;

definer_tail:
          view_tail
        | trigger_tail
        | sp_tail
        | sf_tail
        | event_tail
        ;

no_definer_tail:
          view_tail
        | trigger_tail
        | sp_tail
        | sf_tail
        | udf_tail
        | event_tail
        ;

/**************************************************************************

 DEFINER clause support.

**************************************************************************/

definer_opt:
          no_definer
        | definer
        ;

no_definer:
          /* empty */
        ;

definer:
          DEFINER_SYM EQ user
        ;

/**************************************************************************

 CREATE VIEW statement parts.

**************************************************************************/

view_replace_or_algorithm:
          view_replace
        | view_replace view_algorithm
        | view_algorithm
        ;

view_replace:
          OR_SYM REPLACE
        ;

view_algorithm:
          ALGORITHM_SYM EQ UNDEFINED_SYM
        | ALGORITHM_SYM EQ MERGE_SYM
        | ALGORITHM_SYM EQ TEMPTABLE_SYM
        ;

view_suid:
          /* empty */
        | SQL_SYM SECURITY_SYM DEFINER_SYM
        | SQL_SYM SECURITY_SYM INVOKER_SYM
        ;

view_tail:
          view_suid VIEW_SYM table_ident
          view_list_opt AS view_select
        ;

view_list_opt:
          /* empty */
        | '(' view_list ')'
        ;

view_list:
          ident
        | view_list ',' ident
        ;

view_select:
          view_select_aux view_check_option
        ;

view_select_aux:
          create_view_select
            /*
              For statment as "CREATE VIEW v1 AS SELECT1 UNION SELECT2",
              parsing of Select query (SELECT1) is completed and UNION_CLAUSE
              is not yet parsed. So check for
              Lex->current_select()->master_unit()->first_select()->braces
              (as its done in "PT_select_init2::contextualize()) is not
              done here.
            */
          }
          opt_union_clause
        | '(' create_view_select_paren ')' union_opt
        ;

create_view_select_paren:
          create_view_select
        | '(' create_view_select_paren ')'
        ;

create_view_select:
          SELECT_SYM
          select_part2
        ;

view_check_option:
          /* empty */
        | WITH CHECK_SYM OPTION
        | WITH CASCADED CHECK_SYM OPTION
        | WITH LOCAL_SYM CHECK_SYM OPTION
        ;

/**************************************************************************

 CREATE TRIGGER statement parts.

**************************************************************************/

trigger_action_order:
            FOLLOWS_SYM
          | PRECEDES_SYM
          ;

trigger_follows_precedes_clause:
            /* empty */
          |
            trigger_action_order ident_or_text
          ;

trigger_tail:
          TRIGGER_SYM       /* $1 */
          sp_name           /* $2 */
          trg_action_time   /* $3 */
          trg_event         /* $4 */
          ON                /* $5 */
          table_ident       /* $6 */
          FOR_SYM           /* $7 */
          EACH_SYM          /* $8 */
          ROW_SYM           /* $9 */
          trigger_follows_precedes_clause /* $10 */

            lex->raw_trg_on_table_name_begin= @5.raw.start;
            lex->raw_trg_on_table_name_end= @7.raw.start;

            if (@10.is_empty())
            else

            sp_head *sp= sp_start_parsing(thd, SP_TYPE_TRIGGER, $2);

            if (!sp)
              MYSQL_YYABORT;

            sp->m_trg_chistics.action_time= (enum enum_trigger_action_time_type) $3;
            sp->m_trg_chistics.event= (enum enum_trigger_event_type) $4;
            sp->m_trg_chistics.ordering_clause= $10.ordering_clause;
            sp->m_trg_chistics.anchor_trigger_name= $10.anchor_trigger_name;

            lex->stmt_definition_begin= @1.cpp.start;
            lex->ident.str= const_cast<char *>(@6.cpp.start);
            lex->ident.length= @8.cpp.start - @6.cpp.start;

            lex->sphead= sp;
            lex->spname= $2;

            memset(&lex->sp_chistics, 0, sizeof(st_sp_chistics));
            sp->m_chistics= &lex->sp_chistics;

            sp->set_body_start(thd, @9.cpp.end);
          }
          sp_proc_stmt /* $12 */
        ;

/**************************************************************************

 CREATE FUNCTION | PROCEDURE statements parts.

**************************************************************************/

udf_tail:
          AGGREGATE_SYM FUNCTION_SYM ident
          RETURNS_SYM udf_type SONAME_SYM TEXT_STRING_sys
            lex->sql_command = SQLCOM_CREATE_FUNCTION;
            lex->udf.type= UDFTYPE_AGGREGATE;
            lex->stmt_definition_begin= @2.cpp.start;
            lex->udf.name = $3;
            lex->udf.returns=(Item_result) $5;
            lex->udf.dl=$7.str;
          }
        | FUNCTION_SYM ident
          RETURNS_SYM udf_type SONAME_SYM TEXT_STRING_sys
            lex->sql_command = SQLCOM_CREATE_FUNCTION;
            lex->udf.type= UDFTYPE_FUNCTION;
            lex->stmt_definition_begin= @1.cpp.start;
            lex->udf.name = $2;
            lex->udf.returns=(Item_result) $4;
            lex->udf.dl=$6.str;
          }
        ;

sf_tail:
          FUNCTION_SYM /* $1 */
          sp_name /* $2 */
          '(' /* $3 */

            sp_head *sp= sp_start_parsing(thd, SP_TYPE_FUNCTION, lex->spname);

            if (!sp)
              MYSQL_YYABORT;

            lex->sphead= sp;

            sp->m_parser_data.set_parameter_start_ptr(@3.cpp.end);
          }
          sp_fdparam_list /* $5 */
          ')' /* $6 */
          RETURNS_SYM /* $8 */
          type_with_opt_collate /* $10 */

            if (fill_field_definition(YYTHD, sp,
                                      (enum enum_field_types) $10,
                                      &sp->m_return_field_def))
              MYSQL_YYABORT;

            memset(&lex->sp_chistics, 0, sizeof(st_sp_chistics));
          }
          sp_c_chistics /* $12 */
          sp_proc_stmt /* $14 */

            if (is_native_function(thd, & sp->m_name)) defines a new native function 'foo', as
                part of a new feature.
                - MySQL 5. documentation is updated, and should mention
                that there is a potential incompatible change in case of
                existing stored function named 'foo'.
                - The user deploys 5.. At this point, 'select foo()'
                means something different, and the user code is most likely
                broken (it's only safe if the code is 'select db.foo()').
                With a warning printed when the SF is loaded (which has to occur
                before the call), the warning will provide a hint explaining
                the root cause of a later failure of 'select foo()'.
                With no warning printed, the user code will fail with no
                apparent reason.
                Printing a warning each time db_load_routine is executed for
                an ambiguous function is annoying, since that can happen a lot,
                but in practice should not happen unless there *are* name
                collisions.
                If a collision exists, it should not be silenced but fixed.
              */
              push_warning_printf(thd,
                                  Sql_condition::SL_NOTE,
                                  ER_NATIVE_FCT_NAME_COLLISION,
                                  ER(ER_NATIVE_FCT_NAME_COLLISION),
                                  sp->m_name.str);
            }
          }
        ;

sp_tail:
          PROCEDURE_SYM         /*$1*/
          sp_name               /*$2*/

            lex->stmt_definition_begin= @2.cpp.start;

            sp_head *sp= sp_start_parsing(thd, SP_TYPE_PROCEDURE, $2);

            if (!sp)
              MYSQL_YYABORT;

            lex->sphead= sp;
          }
          '('                   /*$4*/
          sp_pdparam_list       /*$6*/
          ')'                   /*$7*/
          sp_c_chistics         /*$9*/
          sp_proc_stmt          /*$11*/
        ;

/*************************************************************************/

xa:
          XA_SYM begin_or_start xid opt_join_or_resume
        | XA_SYM END xid opt_suspend
        | XA_SYM PREPARE_SYM xid
        | XA_SYM COMMIT_SYM xid opt_one_phase
        | XA_SYM ROLLBACK_SYM xid
        | XA_SYM RECOVER_SYM opt_convert_xid
        ;

opt_convert_xid:
          /* empty */
         | CONVERT_SYM XID_SYM

xid:
          text_string
          | text_string ',' text_string
          | text_string ',' text_string ',' ulong_num
        ;

begin_or_start:
          BEGIN_SYM
        | START_SYM
        ;

opt_join_or_resume:
          /* nothing */
        | JOIN_SYM
        | RESUME_SYM
        ;

opt_one_phase:
          /* nothing */
        | ONE_SYM PHASE_SYM
        ;

opt_suspend:
          /* nothing */
        | SUSPEND_SYM
        | SUSPEND_SYM FOR_SYM MIGRATE_SYM
        ;

install:
          INSTALL_SYM PLUGIN_SYM ident SONAME_SYM TEXT_STRING_sys
        ;

uninstall:
          UNINSTALL_SYM PLUGIN_SYM ident
        ;

/**
  @} (end of group Parser)
*/
