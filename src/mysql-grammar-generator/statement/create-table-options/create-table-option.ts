import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CreateTableOption} from "../../custom-data";

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
