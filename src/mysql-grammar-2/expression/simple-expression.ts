import {cannotExpect, choice, field, optional, seq, tokenSymbol} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9494
 *
 * @todo
 */
export const SimpleExpression = choice(
    /**
     * This `Ident` could reference column, stored procedure parameter, or some local variable.
     */
    SyntaxKind.Ident,
    SyntaxKind.ColumnIdentifierSimpleExpression,
    SyntaxKind.FunctionCall,
    //SyntaxKind.CollateSimpleExpression,
    SyntaxKind.Literal,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10151
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10160
     */
    TokenKind.UserVariableIdentifier,
    SyntaxKind.ScopedSystemVariableIdentifier,
    SyntaxKind.UnscopedSystemVariableIdentifier,
    SyntaxKind.ParenthesizedExpression,
);

export const ParenthesizedExpression = seq(
    field("openParenthesesToken", cannotExpect(TokenKind.OpenParentheses)),
    field("expression", SyntaxKind.Expression),
    field("closeParenthesesToken", TokenKind.CloseParentheses),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12993
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13009
 */
export const ColumnIdentifierSimpleExpression = choice(
    seq(
        field("tableName", SyntaxKind.Ident),
        field("dotToken", cannotExpect(TokenKind.Dot)),
        //Technically, only multi-line comment and execution comment allowed here.
        //Not just any extra.
        field("columnName", SyntaxKind.IdentOrReserved),
    ),
    seq(
        field("schemaName", SyntaxKind.Ident),
        field("dotToken", cannotExpect(TokenKind.Dot)),
        //If the next token is Reserved,
        //technically, only multi-line comment and execution comment allowed here.
        //Not just any extra.
        field("tableName", SyntaxKind.IdentOrReserved),
        field("dotToken", cannotExpect(TokenKind.Dot)),
        //If the next token is Reserved,
        //technically, only multi-line comment and execution comment allowed here.
        //Not just any extra.
        field("columnName", SyntaxKind.IdentOrReserved),
    ),
    /**
     * Deprecated.
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13014
     */
    seq(
        field("dotToken", cannotExpect(TokenKind.Dot)),
        //If the next token is Reserved,
        //technically, only multi-line comment and execution comment allowed here.
        //Not just any extra.
        field("tableName", SyntaxKind.IdentOrReserved),
        field("dotToken", cannotExpect(TokenKind.Dot)),
        //If the next token is Reserved,
        //technically, only multi-line comment and execution comment allowed here.
        //Not just any extra.
        field("columnName", SyntaxKind.IdentOrReserved),
    ),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10152
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13833
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10164
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7483
 *
 * ```sql
 *  SELECT @@sql_mode;
 *  SELECT @@GLOBAL.sql_mode;
 *  SELECT @@GLOBAL.hot_cache.key_buffer_size;
 *  SELECT @@hot_cache.key_buffer_size;
 * ```
 *
 * The `@@x.y.z` syntax is documented here,
 * https://dev.mysql.com/doc/refman/8.0/en/structured-system-variables.html
 */
export const ScopedSystemVariableIdentifier = seq(
    field("atAtToken", TokenKind.AtAt),
    //No matter what,
    //technically, only multi-line comment and execution comment allowed here.
    //Not just any extra.
    field("scope", tokenSymbol(
        TokenKind.SESSION,
        TokenKind.LOCAL,
        TokenKind.GLOBAL,
    )),
    field("dotToken", TokenKind.Dot),
    //If the next token is Reserved,
    //technically, only multi-line comment and execution comment allowed here.
    //Not just any extra.
    //I don't know why they call it "instance"
    field("instanceName", SyntaxKind.IdentOrReserved),
    optional(seq(
        field("dotToken", TokenKind.Dot),
        //If the next token is Reserved,
        //technically, only multi-line comment and execution comment allowed here.
        //Not just any extra.
        //https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.cc#L7810
        //https://dev.mysql.com/doc/refman/8.0/en/structured-system-variables.html
        field("componentName", SyntaxKind.IdentOrReserved),
    )),
);

/**
 * Defaults to `@@SESSION`... Usually.
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/set_var.h#L114
 *
 * For example, `@@hot_cache.key_buffer_size` is the same as,
 * `@@GLOBAL.hot_cache.key_buffer_size`
 *
 * Because `hot_cache.key_buffer_size` is `GLOBAL`-only.
 */
export const UnscopedSystemVariableIdentifier = seq(
    field("atAtToken", TokenKind.AtAt),
    //No matter what,
    //technically, only multi-line comment and execution comment allowed here.
    //Not just any extra.
    //I don't know why they call it "instance"
    field("instanceName", SyntaxKind.Ident),
    optional(seq(
        field("dotToken", TokenKind.Dot),
        //If the next token is Reserved,
        //technically, only multi-line comment and execution comment allowed here.
        //Not just any extra.
        //https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.cc#L7810
        //https://dev.mysql.com/doc/refman/8.0/en/structured-system-variables.html
        field("componentName", SyntaxKind.IdentOrReserved),
    )),
);
