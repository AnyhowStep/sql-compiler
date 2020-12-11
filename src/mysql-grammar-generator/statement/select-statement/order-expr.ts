import {NodeArray, OrderExpr, OrderingDirection, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {toNodeArray} from "../../../mysql-grammar/parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12973
 */
makeCustomRule(SyntaxKind.OrderExpr)
    .addSubstitution(
        [
            CustomSyntaxKind.Expression,
            optional(union(
                TokenKind.ASC,
                TokenKind.DESC,
            )),
        ] as const,
        (data) : OrderExpr => {
            const [expr, orderingDirection] = data;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.OrderExpr,

                expr,
                orderingDirection : (
                    orderingDirection == undefined ?
                    OrderingDirection.ASC :
                    orderingDirection[0].tokenKind == TokenKind.ASC ?
                    OrderingDirection.ASC :
                    OrderingDirection.DESC
                ),
            };
        }
    )

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10956
 */
makeCustomRule(SyntaxKind.OrderExprList)
    .addSubstitution(
        [
            TokenKind.ORDER,
            TokenKind.BY,
            SyntaxKind.OrderExpr,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.OrderExpr,
            ] as const),
        ] as const,
        (data) : NodeArray<OrderExpr> => {
            const arr = data
                .flat(2)
                .filter((data) : data is OrderExpr => {
                    return "syntaxKind" in data;
                });
            return toNodeArray(
                arr,
                SyntaxKind.OrderExprList,
                getTextRange(data)
            );
        }
    );
