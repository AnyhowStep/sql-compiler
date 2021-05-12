import {choice, field, repeat1, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6871
 */
export const ColumnDefinitionOptionRepeat1 = repeat1(field("item", SyntaxKind.ColumnDefinitionOption));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6881
 */
export const ColumnDefinitionOption = choice(
    SyntaxKind.ColumnDefinitionOptionNull,
    SyntaxKind.ColumnDefinitionOptionNotNull,
    SyntaxKind.ColumnDefinitionOptionDefaultValue,
    SyntaxKind.ColumnDefinitionOptionOnUpdate,
    SyntaxKind.ColumnDefinitionOptionAutoIncrement,
    SyntaxKind.ColumnDefinitionOptionSerialDefaultValue,
    SyntaxKind.ColumnDefinitionOptionPrimaryKey,
    SyntaxKind.ColumnDefinitionOptionUnique,
    SyntaxKind.ColumnDefinitionOptionUniqueKey,
    SyntaxKind.ColumnDefinitionOptionComment,
    SyntaxKind.ColumnDefinitionOptionCollate,
    SyntaxKind.ColumnDefinitionOptionColumnFormat,
    SyntaxKind.ColumnDefinitionOptionStorage,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6882
 */
export const ColumnDefinitionOptionNull = field("nullToken", TokenKind.NULL);

export const ColumnDefinitionOptionNotNull = seq(
    field("notToken", TokenKind.NOT),
    field("nullToken", TokenKind.NULL),
);

export const ColumnDefinitionOptionDefaultValue = seq(
    field("defaultToken", TokenKind.DEFAULT),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6999
     */
    field("defaultValue", choice(
        SyntaxKind.Now,
        SyntaxKind.SignedLiteral,
    )),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6889
 */
export const ColumnDefinitionOptionOnUpdate = seq(
    field("onToken", TokenKind.ON),
    field("updateToken", TokenKind.UPDATE),
    field("now", SyntaxKind.Now),
);

export const ColumnDefinitionOptionAutoIncrement = seq(TokenKind.UnknownToken);
export const ColumnDefinitionOptionSerialDefaultValue = seq(TokenKind.UnknownToken);
export const ColumnDefinitionOptionPrimaryKey = seq(TokenKind.UnknownToken);
export const ColumnDefinitionOptionUnique = seq(TokenKind.UnknownToken);
export const ColumnDefinitionOptionUniqueKey = seq(TokenKind.UnknownToken);
export const ColumnDefinitionOptionComment = seq(TokenKind.UnknownToken);
export const ColumnDefinitionOptionCollate = seq(TokenKind.UnknownToken);
export const ColumnDefinitionOptionColumnFormat = seq(TokenKind.UnknownToken);
export const ColumnDefinitionOptionStorage = seq(TokenKind.UnknownToken);
