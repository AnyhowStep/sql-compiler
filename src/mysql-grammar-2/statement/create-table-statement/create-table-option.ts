import {choice, field, optional, seq, tokenSymbol} from "../../../grammar-builder";
import {identifierOrStringLiteral, semiList1, stringLiteral} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const CreateTableOptionSemiList1 = semiList1(SyntaxKind.CreateTableOption);

export const CreateTableOption = choice(
    SyntaxKind.CreateTableOptionEngine,
    SyntaxKind.CreateTableOptionMaxRows,
    SyntaxKind.CreateTableOptionMinRows,
    SyntaxKind.CreateTableOptionAverageRowLength,
    SyntaxKind.CreateTableOptionPassword,
    SyntaxKind.CreateTableOptionComment,
    SyntaxKind.CreateTableOptionCompression,
    SyntaxKind.CreateTableOptionEncryption,
    SyntaxKind.CreateTableOptionAutoIncrement,
    SyntaxKind.CreateTableOptionPackKeys,
    SyntaxKind.CreateTableOptionStatsAutoRecalc,
    SyntaxKind.CreateTableOptionStatsPersistent,
    SyntaxKind.CreateTableOptionStatsSamplePages,
    SyntaxKind.CreateTableOptionChecksum,
    SyntaxKind.CreateTableOptionDelayKeyWrite,
    SyntaxKind.CreateTableOptionRowFormat,
    SyntaxKind.CreateTableOptionUnion,
    SyntaxKind.DefaultCharacterSet,
    SyntaxKind.DefaultCollate,
    SyntaxKind.CreateTableOptionInsertMethod,
    SyntaxKind.CreateTableOptionDataDirectory,
    SyntaxKind.CreateTableOptionIndexDirectory,
    SyntaxKind.CreateTableOptionTablespace,
    SyntaxKind.CreateTableOptionStorage,
    SyntaxKind.CreateTableOptionConnection,
    SyntaxKind.CreateTableOptionKeyBlockSize,
);

export const CreateTableOptionEngine = seq(
    field("engineToken", TokenKind.ENGINE),
    field("equalToken", optional(TokenKind.Equal)),
    field("engine", identifierOrStringLiteral),
);

export const CreateTableOptionMaxRows = seq(
    field("maxRowsToken", TokenKind.MAX_ROWS),
    field("equalToken", optional(TokenKind.Equal)),
    field("maxRows", TokenKind.IntegerLiteral),
);

export const CreateTableOptionMinRows = seq(
    field("minRowsToken", TokenKind.MIN_ROWS),
    field("equalToken", optional(TokenKind.Equal)),
    field("minRows", TokenKind.IntegerLiteral),
);

export const CreateTableOptionAverageRowLength = seq(
    field("avgRowLengthToken", TokenKind.AVG_ROW_LENGTH),
    field("equalToken", optional(TokenKind.Equal)),
    field("averageRowLength", TokenKind.IntegerLiteral),
);

export const CreateTableOptionPassword = seq(
    field("passwordToken", TokenKind.PASSWORD),
    field("equalToken", optional(TokenKind.Equal)),
    field("password", stringLiteral),
);

export const CreateTableOptionComment = seq(
    field("commentToken", TokenKind.COMMENT),
    field("equalToken", optional(TokenKind.Equal)),
    field("comment", stringLiteral),
);

export const CreateTableOptionCompression = seq(
    field("compressionToken", TokenKind.COMPRESSION),
    field("equalToken", optional(TokenKind.Equal)),
    field("compression", stringLiteral),
);

export const CreateTableOptionEncryption = seq(
    field("encryptionToken", TokenKind.ENCRYPTION),
    field("equalToken", optional(TokenKind.Equal)),
    field("encryption", stringLiteral),
);

export const CreateTableOptionAutoIncrement = seq(
    field("autoIncrementToken", TokenKind.AUTO_INCREMENT),
    field("equalToken", optional(TokenKind.Equal)),
    field("autoIncrement", TokenKind.IntegerLiteral),
);

export const CreateTableOptionPackKeys = seq(
    field("packKeysToken", TokenKind.PACK_KEYS),
    field("equalToken", optional(TokenKind.Equal)),
    field("packKeys", choice(
        TokenKind.IntegerLiteral,
        TokenKind.DEFAULT,
    )),
);

export const CreateTableOptionStatsAutoRecalc = seq(
    field("packKeysToken", TokenKind.PACK_KEYS),
    field("equalToken", optional(TokenKind.Equal)),
    field("packKeys", choice(
        TokenKind.IntegerLiteral,
        TokenKind.DEFAULT,
    )),
);

export const CreateTableOptionStatsPersistent = seq(
    field("statsPersistentToken", TokenKind.STATS_PERSISTENT),
    field("equalToken", optional(TokenKind.Equal)),
    field("statsPersistent", choice(
        TokenKind.IntegerLiteral,
        TokenKind.DEFAULT,
    )),
);

export const CreateTableOptionStatsSamplePages = seq(
    field("statsSamplePagesToken", TokenKind.STATS_SAMPLE_PAGES),
    field("equalToken", optional(TokenKind.Equal)),
    field("statsSamplePages", choice(
        TokenKind.IntegerLiteral,
        TokenKind.DEFAULT,
    )),
);

export const CreateTableOptionChecksum = seq(
    field("checksumToken", tokenSymbol(TokenKind.CHECKSUM, TokenKind.TABLE_CHECKSUM)),
    field("equalToken", optional(TokenKind.Equal)),
    field("checksum", TokenKind.IntegerLiteral),
);

export const CreateTableOptionDelayKeyWrite = seq(
    field("delayKeyWriteToken", TokenKind.DELAY_KEY_WRITE),
    field("equalToken", optional(TokenKind.Equal)),
    field("delayKeyWrite", TokenKind.IntegerLiteral),
);

export const CreateTableOptionRowFormat = seq(
    field("rowFormatToken", TokenKind.ROW_FORMAT),
    field("equalToken", optional(TokenKind.Equal)),
    field("rowFormat", SyntaxKind.RowFormat),
);

/**
 * @todo Optimize
 */
export const RowFormat = choice(
    TokenKind.DEFAULT,
    TokenKind.FIXED,
    TokenKind.DYNAMIC,
    TokenKind.COMPRESSED,
    TokenKind.REDUNDANT,
    TokenKind.COMPACT,
);

export const CreateTableOptionUnion = seq(
    field("unionToken", TokenKind.UNION),
    field("equalToken", optional(TokenKind.Equal)),
    field("union", SyntaxKind.TableIdentifierTuple),
);

export const CreateTableOptionInsertMethod = seq(
    field("insertMethodToken", TokenKind.INSERT_METHOD),
    field("equalToken", optional(TokenKind.Equal)),
    field("insertMethod", SyntaxKind.InsertMethod),
);

/**
 * @todo Optimize
 */
export const InsertMethod = choice(
    TokenKind.NO,
    TokenKind.FIRST,
    TokenKind.LAST,
);

export const CreateTableOptionDataDirectory = seq(
    field("dataToken", TokenKind.DATA),
    field("directoryToken", TokenKind.DIRECTORY),
    field("equalToken", optional(TokenKind.Equal)),
    field("dataDirectory", stringLiteral),
);

export const CreateTableOptionIndexDirectory = seq(
    field("indexToken", TokenKind.INDEX),
    field("directoryToken", TokenKind.DIRECTORY),
    field("equalToken", optional(TokenKind.Equal)),
    field("indexDirectory", stringLiteral),
);

export const CreateTableOptionTablespace = seq(
    field("tablespaceToken", TokenKind.TABLESPACE),
    field("equalToken", optional(TokenKind.Equal)),
    field("tablespace", SyntaxKind.Ident),
);

export const CreateTableOptionStorage = seq(
    field("storageToken", TokenKind.INSERT_METHOD),
    field("equalToken", optional(TokenKind.Equal)),
    field("storage", SyntaxKind.Storage),
);

/**
 * @todo Optimize
 */
export const Storage = choice(
    TokenKind.DISK,
    TokenKind.MEMORY,
);

export const CreateTableOptionConnection = seq(
    field("connectionToken", TokenKind.CONNECTION),
    field("equalToken", optional(TokenKind.Equal)),
    field("connection", stringLiteral),
);

export const CreateTableOptionKeyBlockSize = seq(
    field("keyBlockSizeToken", TokenKind.KEY_BLOCK_SIZE),
    field("equalToken", optional(TokenKind.Equal)),
    field("keyBlockSize", TokenKind.IntegerLiteral),
);
