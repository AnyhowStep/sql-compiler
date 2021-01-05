import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange, toValueNode} from "../../parse-util";
import {CreateTablespaceOption} from "../../custom-data";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4769
 */
makeCustomRule(CustomSyntaxKind.CreateTablespaceOption)
    .addSubstitution(
        [
            TokenKind.INITIAL_SIZE,
            optional(TokenKind.Equal),
            SyntaxKind.SizeNumber,
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                initialSize : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.AUTOEXTEND_SIZE,
            optional(TokenKind.Equal),
            SyntaxKind.SizeNumber,
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                autoExtendSize : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.MAX_SIZE,
            optional(TokenKind.Equal),
            SyntaxKind.SizeNumber,
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                maxSize : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.EXTENT_SIZE,
            optional(TokenKind.Equal),
            SyntaxKind.SizeNumber,
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                extentSize : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.NODEGROUP,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                nodeGroup : data[2],
            };
        }
    )
    .addSubstitution(
        [
            optional(TokenKind.STORAGE),
            TokenKind.ENGINE,
            optional(TokenKind.Equal),
            union(
                SyntaxKind.StringLiteral,
                SyntaxKind.Identifier,
            ),
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                engine : data[3][0],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.WAIT,
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                wait : toValueNode(
                    true,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.NO_WAIT,
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                wait : toValueNode(
                    false,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.COMMENT,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                comment : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.FILE_BLOCK_SIZE,
            optional(TokenKind.Equal),
            SyntaxKind.SizeNumber,
        ] as const,
        (data) : CreateTablespaceOption => {
            return {
                ...getTextRange(data),
                fileBlockSize : data[2],
            };
        }
    )
