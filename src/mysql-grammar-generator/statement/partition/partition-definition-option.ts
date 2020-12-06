import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {PartitionDefinitionOption} from "../../custom-data";

makeCustomRule(CustomSyntaxKind.PartitionDefinitionOption)
    .addSubstitution(
        [
            optional(TokenKind.STORAGE),
            TokenKind.ENGINE,
            optional(TokenKind.Equal),
            union(SyntaxKind.Identifier, SyntaxKind.StringLiteral)
        ] as const,
        (data) : PartitionDefinitionOption => {
            return {
                ...getTextRange(data),
                engine : data[3][0],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.MAX_ROWS,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral
        ] as const,
        (data) : PartitionDefinitionOption => {
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
        (data) : PartitionDefinitionOption => {
            return {
                ...getTextRange(data),
                minRows : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.COMMENT,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral
        ] as const,
        (data) : PartitionDefinitionOption => {
            return {
                ...getTextRange(data),
                comment : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.DATA,
            TokenKind.DIRECTORY,
            optional(TokenKind.Equal),
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : PartitionDefinitionOption => {
            const dataDirectory = data[3];

            const result : PartitionDefinitionOption = {
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
        (data) : PartitionDefinitionOption => {
            const indexDirectory = data[3];

            const result : PartitionDefinitionOption = {
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
        (data) : PartitionDefinitionOption => {
            const tablespace = data[2];

            const result : PartitionDefinitionOption = {
                ...getTextRange(data),
                tablespace,
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.NODEGROUP,
            optional(TokenKind.Equal),
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : PartitionDefinitionOption => {
            const nodeGroup = data[2];

            const result : PartitionDefinitionOption = {
                ...getTextRange(data),
                nodeGroup,
            };

            return result;
        }
    )
