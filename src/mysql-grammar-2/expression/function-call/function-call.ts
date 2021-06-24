import {choice, field, inline, seq} from "../../../grammar-builder";
import {dotIdentOrReserved, maybeUserDefinedFunctionCall_FunctionName} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
    Named parameters are allowed in a parameter list
    The syntax to name parameters in a function call is as follow:
    <code>foo(expr AS named, expr named, expr AS "named", expr "named")</code>
    where "AS" is optional.
    Only UDF function support that syntax.
 */
/**
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.h#L670-L680
 *
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.h#L2138
 *
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.cc#L232
 *
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.cc#L237
 *
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/mysql-test/t/udf.test#L172-L177
 *
 * `ER_WRONG_PARAMETERS_TO_STORED_FCT`
 * `ER_WRONG_PARAMETERS_TO_NATIVE_FCT`
 */
/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9994
 */
export const MaybeUserDefinedFunctionCall = seq(
    field("functionName", maybeUserDefinedFunctionCall_FunctionName),
    field("arguments", SyntaxKind.UserDefinedExpressionList_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9998
 */
export const QualifiedFunctionCall = seq(
    field("schemaName", SyntaxKind.Ident),
    dotIdentOrReserved("functionName"),
    field("arguments", SyntaxKind.ExpressionList_Arguments),
);

export const FunctionCall = inline(choice(
    SyntaxKind.MaybeUserDefinedFunctionCall,
    SyntaxKind.QualifiedFunctionCall,
    SyntaxKind.KeywordFunctionCall,
    SyntaxKind.NonKeywordFunctionCall,
));
