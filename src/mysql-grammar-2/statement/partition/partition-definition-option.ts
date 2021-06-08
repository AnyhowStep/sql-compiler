import {choice, field, inline, optional, repeat1, seq, tokenSymbol} from "../../../grammar-builder";
import {identifier, identifierOrStringLiteral, real_ulonglong_num, real_ulong_num, stringLiteral} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {nonReservedKeywords, reservedKeywords, TokenKind} from "../../token.generated";

// export const PartitionDefinitionOption = inline(preParse(
//     SyntaxKind.PreParseOption,
//     choice(
//         SyntaxKind.PartitionDefinitionOptionEngine,
//         SyntaxKind.PartitionDefinitionOptionMaxRows,
//         SyntaxKind.PartitionDefinitionOptionMinRows,
//         SyntaxKind.PartitionDefinitionOptionComment,
//         SyntaxKind.PartitionDefinitionOptionDataDirectory,
//         SyntaxKind.PartitionDefinitionOptionIndexDirectory,
//         SyntaxKind.PartitionDefinitionOptionTablespace,
//         SyntaxKind.PartitionDefinitionOptionNodeGroup
//     )
// ));

export const PartitionDefinitionOption = inline(choice(
    SyntaxKind.PartitionDefinitionOptionEngine,
    SyntaxKind.PartitionDefinitionOptionMaxRows,
    SyntaxKind.PartitionDefinitionOptionMinRows,
    SyntaxKind.PartitionDefinitionOptionComment,
    SyntaxKind.PartitionDefinitionOptionDataDirectory,
    SyntaxKind.PartitionDefinitionOptionIndexDirectory,
    SyntaxKind.PartitionDefinitionOptionTablespace,
    SyntaxKind.PartitionDefinitionOptionNodeGroup
));

//export const PartitionDefinitionOption = inline(SyntaxKind.PreParseOption);

export const PreParseOption = seq(
    tokenSymbol(
        reservedKeywords[0],
        ...reservedKeywords,
        ...nonReservedKeywords,
    ),
    optional(tokenSymbol(
        reservedKeywords[0],
        ...reservedKeywords,
        ...nonReservedKeywords,
    )),
    optional(TokenKind.Equal),
    choice(
        identifier,
        SyntaxKind.Literal
    ),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5831
 */
export const PartitionDefinitionOptionEngine = seq(
    field("storageToken", optional(TokenKind.STORAGE)),
    field("engineToken", TokenKind.ENGINE),
    field("equalToken", optional(TokenKind.Equal)),
    field("engine", identifierOrStringLiteral),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5839
 */
export const PartitionDefinitionOptionMaxRows = seq(
    field("maxRowsToken", TokenKind.MAX_ROWS),
    field("equalToken", optional(TokenKind.Equal)),
    field("maxRows", real_ulonglong_num),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5841
 */
export const PartitionDefinitionOptionMinRows = seq(
    field("minRowsToken", TokenKind.MIN_ROWS),
    field("equalToken", optional(TokenKind.Equal)),
    field("minRows", real_ulonglong_num),
);

export const PartitionDefinitionOptionComment = seq(
    field("commentToken", TokenKind.COMMENT),
    field("equalToken", optional(TokenKind.Equal)),
    field("comment", stringLiteral),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5843
 */
export const PartitionDefinitionOptionDataDirectory = seq(
    field("dataToken", TokenKind.DATA),
    field("directoryToken", TokenKind.DIRECTORY),
    field("equalToken", optional(TokenKind.Equal)),
    field("dataDirectory", stringLiteral),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5845
 */
export const PartitionDefinitionOptionIndexDirectory = seq(
    field("indexToken", TokenKind.INDEX),
    field("directoryToken", TokenKind.DIRECTORY),
    field("equalToken", optional(TokenKind.Equal)),
    field("indexDirectory", stringLiteral),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5829
 */
export const PartitionDefinitionOptionTablespace = seq(
    field("tablespaceToken", TokenKind.TABLESPACE),
    field("equalToken", optional(TokenKind.Equal)),
    field("tablespace", SyntaxKind.Ident),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5837
 */
export const PartitionDefinitionOptionNodeGroup = seq(
    field("nodeGroupToken", TokenKind.NODEGROUP),
    field("equalToken", optional(TokenKind.Equal)),
    field("nodeGroup", real_ulong_num),
);

export const PartitionDefinitionOptionRepeat1 = repeat1(field("item", SyntaxKind.PartitionDefinitionOption));
