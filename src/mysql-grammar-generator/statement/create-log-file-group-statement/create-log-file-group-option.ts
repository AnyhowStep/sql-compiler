import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange, toValueNode} from "../../parse-util";
import {CreateLogFileGroupOption} from "../../custom-data";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4811
 */
makeCustomRule(CustomSyntaxKind.CreateLogFileGroupOption)
    .addSubstitution(
        [
            TokenKind.INITIAL_SIZE,
            optional(TokenKind.Equal),
            union(
                SyntaxKind.IntegerLiteral,
                SyntaxKind.Identifier,
            ),
        ] as const,
        (data) : CreateLogFileGroupOption => {
            return {
                ...getTextRange(data),
                initialSize : data[2][0],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.UNDO_BUFFER_SIZE,
            optional(TokenKind.Equal),
            union(
                SyntaxKind.IntegerLiteral,
                SyntaxKind.Identifier,
            ),
        ] as const,
        (data) : CreateLogFileGroupOption => {
            return {
                ...getTextRange(data),
                undoBufferSize : data[2][0],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.REDO_BUFFER_SIZE,
            optional(TokenKind.Equal),
            union(
                SyntaxKind.IntegerLiteral,
                SyntaxKind.Identifier,
            ),
        ] as const,
        (data) : CreateLogFileGroupOption => {
            return {
                ...getTextRange(data),
                redoBufferSize : data[2][0],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.NODEGROUP,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : CreateLogFileGroupOption => {
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
        (data) : CreateLogFileGroupOption => {
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
        (data) : CreateLogFileGroupOption => {
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
        (data) : CreateLogFileGroupOption => {
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
        (data) : CreateLogFileGroupOption => {
            return {
                ...getTextRange(data),
                comment : data[2],
            };
        }
    )
