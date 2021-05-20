import {choice, field, optional, repeat1, seq} from "../../../grammar-builder";
import {identifierOrStringLiteral, stringLiteral} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const PartitionDefinitionOption = choice(
    SyntaxKind.PartitionDefinitionOptionEngine,
    SyntaxKind.PartitionDefinitionOptionMaxRows,
    SyntaxKind.PartitionDefinitionOptionMinRows,
    SyntaxKind.PartitionDefinitionOptionComment,
    SyntaxKind.PartitionDefinitionOptionDataDirectory,
    SyntaxKind.PartitionDefinitionOptionIndexDirectory,
    SyntaxKind.PartitionDefinitionOptionTablespace,
    SyntaxKind.PartitionDefinitionOptionNodeGroup
);

export const PartitionDefinitionOptionEngine = seq(
    field("storageToken", optional(TokenKind.STORAGE)),
    field("engineToken", TokenKind.ENGINE),
    field("equalToken", optional(TokenKind.Equal)),
    field("engine", identifierOrStringLiteral),
);

export const PartitionDefinitionOptionMaxRows = seq(
    field("maxRowsToken", TokenKind.MAX_ROWS),
    field("equalToken", optional(TokenKind.Equal)),
    field("maxRows", TokenKind.IntegerLiteral),
);

export const PartitionDefinitionOptionMinRows = seq(
    field("minRowsToken", TokenKind.MIN_ROWS),
    field("equalToken", optional(TokenKind.Equal)),
    field("minRows", TokenKind.IntegerLiteral),
);

export const PartitionDefinitionOptionComment = seq(
    field("commentToken", TokenKind.COMMENT),
    field("equalToken", optional(TokenKind.Equal)),
    field("comment", stringLiteral),
);

export const PartitionDefinitionOptionDataDirectory = seq(
    field("dataToken", TokenKind.DATA),
    field("directoryToken", TokenKind.DIRECTORY),
    field("equalToken", optional(TokenKind.Equal)),
    field("dataDirectory", stringLiteral),
);

export const PartitionDefinitionOptionIndexDirectory = seq(
    field("indexToken", TokenKind.INDEX),
    field("directoryToken", TokenKind.DIRECTORY),
    field("equalToken", optional(TokenKind.Equal)),
    field("indexDirectory", stringLiteral),
);

export const PartitionDefinitionOptionTablespace = seq(
    field("tablespaceToken", TokenKind.TABLESPACE),
    field("equalToken", optional(TokenKind.Equal)),
    field("tablespace", SyntaxKind.Ident),
);

export const PartitionDefinitionOptionNodeGroup = seq(
    field("nodeGroupToken", TokenKind.NODEGROUP),
    field("equalToken", optional(TokenKind.Equal)),
    field("nodeGroup", TokenKind.IntegerLiteral),
);

export const PartitionDefinitionOptionRepeat1 = repeat1(field("item", SyntaxKind.PartitionDefinitionOption));
