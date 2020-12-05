import {PackKeys, StatsAutoRecalc, StatsPersistent, SyntaxKind} from "../../../parser-node";
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
