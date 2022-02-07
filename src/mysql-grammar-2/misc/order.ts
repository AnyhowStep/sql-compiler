import {field, optional, seq, tokenSymbol} from "../../grammar-builder";
import {list1} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12973
 */
export const OrderExpression = seq(
    field("expression", SyntaxKind.Expression),
    field("sortOrder", optional(tokenSymbol(
        TokenKind.ASC,
        TokenKind.DESC,
    ))),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10190
 */
export const OrderExpressionList1 = list1(SyntaxKind.OrderExpression);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10185
 */
export const OrderByClause = seq(
    field("orderToken", TokenKind.ORDER),
    field("byToken", TokenKind.BY),
    field("orderExpressionList1", SyntaxKind.OrderExpressionList1),
);
