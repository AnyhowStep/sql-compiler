import {field, omitCost, optional, seq} from "../../../grammar-builder";
import {identifierOrStringLiteral, list1} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const Alias = seq(
    field("asToken", omitCost(0.05, optional(TokenKind.AS))),
    field("alias", identifierOrStringLiteral),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9229
 */
export const ExpressionSelectItem = seq(
    field("expression", SyntaxKind.Expression),
    field("alias", optional(SyntaxKind.Alias)),
);

/**
 * @todo
 */
export const SelectItemList1 = list1(SyntaxKind.ExpressionSelectItem);
