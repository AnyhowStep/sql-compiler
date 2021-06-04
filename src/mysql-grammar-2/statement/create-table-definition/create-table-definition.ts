import {choice, field, optional, seq} from "../../../grammar-builder";
import {tuple1} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const CreateTableDefinitionTuple1 = tuple1(SyntaxKind.CreateTableDefinition);

export const CreateTableDefinition = choice(
    SyntaxKind.ColumnDefinition,
    SyntaxKind.IndexDefinition,
    SyntaxKind.CheckDefinition,
    SyntaxKind.PrimaryKeyDefinition,
    SyntaxKind.ForeignKeyDefinition,
);

/**
 * @todo
 */
export const ColumnDefinition = choice(
    SyntaxKind.NonGeneratedColumnDefinition,
    SyntaxKind.GeneratedColumnDefinition,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6357
 */
export const NonGeneratedColumnDefinition = seq(
    field("columnIdentifier", SyntaxKind.ColumnIdentifier),
    field("dataType", choice(SyntaxKind.DataType, TokenKind.SERIAL)),
    field("columnDefinitionOptionRepeat1", optional(SyntaxKind.ColumnDefinitionOptionRepeat1)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6358-L6360
 */
export const GeneratedColumnDefinition = seq(
    field("columnIdentifier", SyntaxKind.ColumnIdentifier),
    field("dataType", choice(SyntaxKind.DataType, TokenKind.SERIAL)),
    field("collateExplicit", optional(SyntaxKind.CollateExplicit)),
    field("generatedAlways", optional(SyntaxKind.GeneratedAlways)),
    field("asToken", TokenKind.AS),
    field("parenthesizedExpression", SyntaxKind.ParenthesizedExpression),
    field("storedAttribute", optional(choice(
        TokenKind.VIRTUAL,
        TokenKind.STORED,
    ))),
    field("columnDefinitionOptionRepeat1", optional(SyntaxKind.ColumnDefinitionOptionRepeat1)),
);

export const GeneratedAlways = seq(
    field("generatedToken", TokenKind.GENERATED),
    field("alwaysToken", TokenKind.ALWAYS),
);

/**
 * @todo
 */
export const IndexDefinition = seq(TokenKind.UnknownToken);

/**
 * @todo
 */
export const CheckDefinition = seq(TokenKind.UnknownToken);

/**
 * @todo
 */
export const PrimaryKeyDefinition = seq(TokenKind.UnknownToken);

/**
 * @todo
 */
export const ForeignKeyDefinition = seq(TokenKind.UnknownToken);
