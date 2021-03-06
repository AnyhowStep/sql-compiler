import {InsertMethod, PackKeys, RowFormat, StatsAutoRecalc, StatsPersistent, Storage, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange, pushSyntacticErrorAt} from "../../parse-util";
import {CreateTableOption} from "../../custom-data";
import {DiagnosticMessages} from "../../diagnostic-messages";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5917
 */
makeCustomRule(CustomSyntaxKind.CreateTableOption)
    .addSubstitution(
        [
            TokenKind.ENGINE,
            optional(TokenKind.Equal),
            union(SyntaxKind.Identifier, SyntaxKind.StringLiteral)
        ] as const,
        (data) : CreateTableOption => {
            return {
                ...getTextRange(data),
                engine : data[2][0],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.MAX_ROWS,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral
        ] as const,
        (data) : CreateTableOption => {
            return {
                ...getTextRange(data),
                maxRows : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.MIN_ROWS,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral
        ] as const,
        (data) : CreateTableOption => {
            return {
                ...getTextRange(data),
                minRows : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.AVG_ROW_LENGTH,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral
        ] as const,
        (data) : CreateTableOption => {
            return {
                ...getTextRange(data),
                averageRowLength : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PASSWORD,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral
        ] as const,
        (data) : CreateTableOption => {
            return {
                ...getTextRange(data),
                password : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.COMMENT,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral
        ] as const,
        (data) : CreateTableOption => {
            return {
                ...getTextRange(data),
                comment : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.COMPRESSION,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral
        ] as const,
        (data) : CreateTableOption => {
            return {
                ...getTextRange(data),
                compression : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ENCRYPTION,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral
        ] as const,
        (data) : CreateTableOption => {
            return {
                ...getTextRange(data),
                encryption : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.AUTO_INCREMENT,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral
        ] as const,
        (data) : CreateTableOption => {
            return {
                ...getTextRange(data),
                autoIncrement : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PACK_KEYS,
            optional(TokenKind.Equal),
            union(
                SyntaxKind.IntegerLiteral,
                TokenKind.DEFAULT,
            ),
        ] as const,
        (data) : CreateTableOption => {
            const packKeys = (
                "tokenKind" in data[2][0] ?
                PackKeys.DEFAULT :
                data[2][0].value == BigInt(0) ?
                PackKeys._0 :
                data[2][0].value == BigInt(1) ?
                PackKeys._1 :
                undefined
            );

            const result : CreateTableOption = {
                ...getTextRange(data),
                packKeys,
            };

            if (packKeys == undefined) {
                pushSyntacticErrorAt(
                    result,
                    data[2][0].start,
                    data[2][0].end,
                    [],
                    DiagnosticMessages.Unexpected_Expected,
                    data[2][0].value.toString(),
                    "0|1|DEFAULT"
                );
            }

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.STATS_AUTO_RECALC,
            optional(TokenKind.Equal),
            union(
                SyntaxKind.IntegerLiteral,
                TokenKind.DEFAULT,
            ),
        ] as const,
        (data) : CreateTableOption => {
            const statsAutoRecalc = (
                "tokenKind" in data[2][0] ?
                StatsAutoRecalc.DEFAULT :
                data[2][0].value == BigInt(0) ?
                StatsAutoRecalc._0 :
                data[2][0].value == BigInt(1) ?
                StatsAutoRecalc._1 :
                undefined
            );

            const result : CreateTableOption = {
                ...getTextRange(data),
                statsAutoRecalc,
            };

            if (statsAutoRecalc == undefined) {
                pushSyntacticErrorAt(
                    result,
                    data[2][0].start,
                    data[2][0].end,
                    [],
                    DiagnosticMessages.Unexpected_Expected,
                    data[2][0].value.toString(),
                    "0|1|DEFAULT"
                );
            }

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.STATS_PERSISTENT,
            optional(TokenKind.Equal),
            union(
                SyntaxKind.IntegerLiteral,
                TokenKind.DEFAULT,
            ),
        ] as const,
        (data) : CreateTableOption => {
            const statsPersistent = (
                "tokenKind" in data[2][0] ?
                StatsPersistent.DEFAULT :
                data[2][0].value == BigInt(0) ?
                StatsPersistent._0 :
                data[2][0].value == BigInt(1) ?
                StatsPersistent._1 :
                undefined
            );

            const result : CreateTableOption = {
                ...getTextRange(data),
                statsPersistent,
            };

            if (statsPersistent == undefined) {
                pushSyntacticErrorAt(
                    result,
                    data[2][0].start,
                    data[2][0].end,
                    [],
                    DiagnosticMessages.Unexpected_Expected,
                    data[2][0].value.toString(),
                    "0|1|DEFAULT"
                );
            }

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.STATS_SAMPLE_PAGES,
            optional(TokenKind.Equal),
            union(
                SyntaxKind.IntegerLiteral,
                TokenKind.DEFAULT,
            ),
        ] as const,
        (data) : CreateTableOption => {
            const statsSamplePages = (
                "tokenKind" in data[2][0] ?
                {
                    start : data[2][0].start,
                    end : data[2][0].end,
                    syntaxKind : SyntaxKind.Value,
                    value : undefined,
                } as const :
                data[2][0]
            );

            const result : CreateTableOption = {
                ...getTextRange(data),
                statsSamplePages,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            union(
                TokenKind.TABLE_CHECKSUM,
                TokenKind.CHECKSUM
            ),
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : CreateTableOption => {
            const checksum = (
                data[2].value == BigInt(0) ?
                false :
                data[2].value == BigInt(1) ?
                true :
                undefined
            );

            const result : CreateTableOption = {
                ...getTextRange(data),
                /**
                 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6050
                 */
                checksum : (
                    checksum == undefined ?
                    //data[2].value > 1
                    true :
                    checksum
                ),
            };

            if (checksum == undefined) {
                pushSyntacticErrorAt(
                    result,
                    data[2].start,
                    data[2].end,
                    [],
                    DiagnosticMessages.Unexpected_Expected,
                    data[2].value.toString(),
                    "0|1"
                );
            }

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.DELAY_KEY_WRITE,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : CreateTableOption => {
            const delayKeyWrite = (
                data[2].value == BigInt(0) ?
                false :
                data[2].value == BigInt(1) ?
                true :
                undefined
            );

            const result : CreateTableOption = {
                ...getTextRange(data),
                /**
                 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6060
                 */
                delayKeyWrite : (
                    delayKeyWrite == undefined ?
                    //data[2].value > 1
                    true :
                    delayKeyWrite
                ),
            };

            if (delayKeyWrite == undefined) {
                pushSyntacticErrorAt(
                    result,
                    data[2].start,
                    data[2].end,
                    [],
                    DiagnosticMessages.Unexpected_Expected,
                    data[2].value.toString(),
                    "0|1"
                );
            }

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.ROW_FORMAT,
            optional(TokenKind.Equal),
            union(
                TokenKind.DEFAULT,
                TokenKind.FIXED,
                TokenKind.DYNAMIC,
                TokenKind.COMPRESSED,
                TokenKind.REDUNDANT,
                TokenKind.COMPACT,
            ),
        ] as const,
        (data) : CreateTableOption => {
            const rowFormat = (
                data[2][0].tokenKind == TokenKind.FIXED ?
                RowFormat.FIXED :
                data[2][0].tokenKind == TokenKind.DYNAMIC ?
                RowFormat.DYNAMIC :
                data[2][0].tokenKind == TokenKind.COMPRESSED ?
                RowFormat.COMPRESSED :
                data[2][0].tokenKind == TokenKind.REDUNDANT ?
                RowFormat.REDUNDANT :
                data[2][0].tokenKind == TokenKind.COMPACT ?
                RowFormat.COMPACT :
                RowFormat.DEFAULT
            );

            const result : CreateTableOption = {
                ...getTextRange(data),
                rowFormat,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.UNION,
            optional(TokenKind.Equal),
            CustomSyntaxKind.TableIdentifierList_AllowEmpty,
        ] as const,
        (data) : CreateTableOption => {
            const union = data[2];

            const result : CreateTableOption = {
                ...getTextRange(data),
                union,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            SyntaxKind.DefaultCharacterSet,
        ] as const,
        (data) : CreateTableOption => {
            const defaultCharacterSet = data[0];

            const result : CreateTableOption = {
                ...getTextRange(data),
                defaultCharacterSet,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            SyntaxKind.DefaultCollation,
        ] as const,
        (data) : CreateTableOption => {
            const defaultCollation = data[0];

            const result : CreateTableOption = {
                ...getTextRange(data),
                defaultCollation,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.INSERT_METHOD,
            optional(TokenKind.Equal),
            union(
                TokenKind.NO,
                TokenKind.FIRST,
                TokenKind.LAST,
            ),
        ] as const,
        (data) : CreateTableOption => {
            const insertMethod = (
                data[2][0].tokenKind == TokenKind.FIRST ?
                InsertMethod.FIRST :
                data[2][0].tokenKind == TokenKind.LAST ?
                InsertMethod.LAST :
                InsertMethod.NO
            );

            const result : CreateTableOption = {
                ...getTextRange(data),
                insertMethod,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.DATA,
            TokenKind.DIRECTORY,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateTableOption => {
            const dataDirectory = data[3];

            const result : CreateTableOption = {
                ...getTextRange(data),
                dataDirectory,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.INDEX,
            TokenKind.DIRECTORY,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateTableOption => {
            const indexDirectory = data[3];

            const result : CreateTableOption = {
                ...getTextRange(data),
                indexDirectory,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.TABLESPACE,
            optional(TokenKind.Equal),
            SyntaxKind.Identifier,
        ] as const,
        (data) : CreateTableOption => {
            const tablespace = data[2];

            const result : CreateTableOption = {
                ...getTextRange(data),
                tablespace,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.STORAGE,
            union(
                TokenKind.DISK,
                TokenKind.MEMORY,
            ),
        ] as const,
        (data) : CreateTableOption => {
            const storage = (
                data[1][0].tokenKind == TokenKind.DISK ?
                Storage.DISK :
                Storage.MEMORY
            );

            const result : CreateTableOption = {
                ...getTextRange(data),
                storage,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.CONNECTION,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateTableOption => {
            const connection = data[2];

            const result : CreateTableOption = {
                ...getTextRange(data),
                connection,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.KEY_BLOCK_SIZE,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : CreateTableOption => {
            const keyBlockSize = data[2];

            const result : CreateTableOption = {
                ...getTextRange(data),
                keyBlockSize,
            };

            return result;
        }
    )
