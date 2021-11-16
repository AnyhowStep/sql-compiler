/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9837
 */

import {cannotExpect, choice, field, inline, seq, tokenSymbol} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9838
 */
export const AsciiFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.ASCII))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9842
 */
export const CharSetFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.CHARSET))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9846
 */
export const CoalesceFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.COALESCE))),
    field("arguments", SyntaxKind.ExpressionList1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9850
 */
export const CollationFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.COLLATION))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9854
 */
export const SchemaFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.SCHEMA, TokenKind.DATABASE))),
    field("arguments", SyntaxKind.Empty_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9854
 */
export const IfFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.IF))),
    field("arguments", SyntaxKind.Expression3_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9862-L9866
 */
export const FormatFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.FORMAT))),
    field("arguments", SyntaxKind.Expression2To3_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9870
 */
export const MicrosecondFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.MICROSECOND))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9874
 */
export const ModFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.MOD))),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9878
 */
export const PasswordFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.PASSWORD))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9882
 */
export const QuarterFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.QUARTER, TokenKind.SQL_TSI_QUARTER))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9886
 */
export const RepeatFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.REPEAT))),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9890
 */
export const ReplaceFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.REPLACE))),
    field("arguments", SyntaxKind.Expression3_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9894
 */
export const ReverseFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.REVERSE))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9898
 */
export const RowCountFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.ROW_COUNT))),
    field("arguments", SyntaxKind.Empty_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9902
 */
export const TruncateFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.TRUNCATE))),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9906-L9910
 */
export const WeekFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.WEEK, TokenKind.SQL_TSI_WEEK))),
    field("arguments", SyntaxKind.Expression1To2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9914-L9928
 */
export const WeightStringFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.WEIGHT_STRING))),
    field("arguments", SyntaxKind.WeightString_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9936
 *
 * @deprecated Use `MBRContains` instead.
 * https://github.com/mysql/mysql-server/blob/beb865a960b9a8a16cf999c323e46c5b0c67f21f/plugin/x/src/mysql_function_names.cc#L130
 */
export const ContainsFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.CONTAINS))),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9942
 *
 * @todo I see `GEOMCOLLECTION` but can't actually get it to work,
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/lex.h#L282
 *
 * Because it's for MySQL 8
 */
export const GeometryCollectionFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.GEOMETRYCOLLECTION))),
    field("arguments", SyntaxKind.ExpressionList_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/d9a8e2021c92f08047457b028aa8890291f7381c/sql/sql_yacc.yy#L9988
 */
export const LineStringFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.LINESTRING))),
    field("arguments", SyntaxKind.ExpressionList1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/d9a8e2021c92f08047457b028aa8890291f7381c/sql/sql_yacc.yy#L9994
 */
export const MultiLineStringFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.MULTILINESTRING))),
    field("arguments", SyntaxKind.ExpressionList1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/d9a8e2021c92f08047457b028aa8890291f7381c/sql/sql_yacc.yy#L10000
 */
export const MultiPointFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.MULTIPOINT))),
    field("arguments", SyntaxKind.ExpressionList1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/d9a8e2021c92f08047457b028aa8890291f7381c/sql/sql_yacc.yy#L10006
 */
export const MultiPolygonFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.MULTIPOLYGON))),
    field("arguments", SyntaxKind.ExpressionList1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/d9a8e2021c92f08047457b028aa8890291f7381c/sql/sql_yacc.yy#L10012
 */
export const PointFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.POINT))),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/d9a8e2021c92f08047457b028aa8890291f7381c/sql/sql_yacc.yy#L10016
 */
export const PolygonFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.POLYGON))),
    field("arguments", SyntaxKind.ExpressionList1_Arguments),
);

export const ConflictFunctionCall = inline(choice(
    SyntaxKind.AsciiFunctionCall,
    SyntaxKind.CharSetFunctionCall,
    SyntaxKind.CoalesceFunctionCall,
    SyntaxKind.CollationFunctionCall,
    SyntaxKind.SchemaFunctionCall,
    SyntaxKind.IfFunctionCall,
    SyntaxKind.FormatFunctionCall,
    SyntaxKind.MicrosecondFunctionCall,
    SyntaxKind.ModFunctionCall,
    SyntaxKind.PasswordFunctionCall,
    SyntaxKind.QuarterFunctionCall,
    SyntaxKind.RepeatFunctionCall,
    SyntaxKind.ReplaceFunctionCall,
    SyntaxKind.ReverseFunctionCall,
    SyntaxKind.RowCountFunctionCall,
    SyntaxKind.TruncateFunctionCall,
    SyntaxKind.WeekFunctionCall,
    SyntaxKind.WeightStringFunctionCall,
    SyntaxKind.ContainsFunctionCall,
    SyntaxKind.GeometryCollectionFunctionCall,
    SyntaxKind.LineStringFunctionCall,
    SyntaxKind.MultiLineStringFunctionCall,
    SyntaxKind.MultiPointFunctionCall,
    SyntaxKind.MultiPolygonFunctionCall,
    SyntaxKind.PointFunctionCall,
    SyntaxKind.PolygonFunctionCall,
));
