import {cannotExpect, choice, field, optional, precedence, seq, tokenSymbol, useCustomExtra} from "../../grammar-builder";
import {CustomExtras} from "../custom-extras";
import {Precedence} from "../precedence";
import {dotIdentOrReserved, identifier, identifierNoScopeKeyword, identifierOrReservedOrStringLiteral} from "../rule-util";
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
    identifier,
    SyntaxKind.ColumnIdentifierSimpleExpression,
    SyntaxKind.FunctionCall,
    //SyntaxKind.CollateSimpleExpression,
    SyntaxKind.Literal,
    SyntaxKind.ParamMarker,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10151
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10160
     */
    SyntaxKind.UserVariableIdentifier,
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
        dotIdentOrReserved("columnName"),
    ),
    seq(
        field("schemaName", SyntaxKind.Ident),
        dotIdentOrReserved("tableName"),
        dotIdentOrReserved("columnName"),
    ),
    /**
     * Deprecated.
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13014
     */
    seq(
        dotIdentOrReserved("tableName"),
        dotIdentOrReserved("columnName"),
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
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10164
 */
export const ScopedSystemVariableIdentifier = seq(
    useCustomExtra(
        CustomExtras.noExtras,
        seq(
            field("atToken", TokenKind.At),
            field("atToken", TokenKind.At),
            field("scope", tokenSymbol(
                TokenKind.SESSION,
                TokenKind.LOCAL,
                TokenKind.GLOBAL,
            )),
        )
    ),
    //I don't know why they call it "instance"
    dotIdentOrReserved("instanceName"),
    //https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.cc#L7810
    //https://dev.mysql.com/doc/refman/8.0/en/structured-system-variables.html
    optional(dotIdentOrReserved("componentName")),
);

/**
 * Defaults to `@@SESSION`... Usually.
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/set_var.h#L114
 *
 * For example, `@@hot_cache.key_buffer_size` is the same as,
 * `@@GLOBAL.hot_cache.key_buffer_size`
 *
 * Because `hot_cache.key_buffer_size` is `GLOBAL`-only.
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10164
 */
export const UnscopedSystemVariableIdentifier = seq(
    useCustomExtra(
        CustomExtras.noExtras,
        seq(
            field("atToken", TokenKind.At),
            field("atToken", TokenKind.At),
            //I don't know why they call it "instance"
            /**
             * We use a subset of valid identifiers to prevent ambiguity with
             * `ScopedSystemVariableIdentifier`
             */
            field("instanceName", identifierNoScopeKeyword),
        )
    ),
    //https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.cc#L7810
    //https://dev.mysql.com/doc/refman/8.0/en/structured-system-variables.html
    optional(dotIdentOrReserved("componentName")),
);

export const UserVariableIdentifier = precedence(Precedence.UserVariableIdentifier, useCustomExtra(
    CustomExtras.noExtras,
    seq(
        field("atToken", TokenKind.At),
        optional(field("identifier", identifierOrReservedOrStringLiteral)),
    )
));

/**
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/gen_lex_token.cc#L289
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12845
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9505
 */
export const ParamMarker = field("questionMarkToken", TokenKind.QuestionMark);
