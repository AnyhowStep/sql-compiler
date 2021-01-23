import {AlterTableOrderExpr, AlterTableOrderExprList, OrderingDirection, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {makeCustomRule} from "../../../factory";
import {optional, union, zeroOrMore} from "../../../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10866
 */
makeCustomRule(SyntaxKind.AlterTableOrderExpr)
    .addSubstitution(
        [
            SyntaxKind.ColumnIdentifier,
            optional(union(
                TokenKind.ASC,
                TokenKind.DESC,
            )),
        ] as const,
        (data) : AlterTableOrderExpr => {
            const [expr, orderingDirection] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableOrderExpr,
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
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10861
 */
makeCustomRule(SyntaxKind.AlterTableOrderExprList)
    .addSubstitution(
        [
            SyntaxKind.AlterTableOrderExpr,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.AlterTableOrderExpr,
            ] as const),
        ] as const,
        (data) : AlterTableOrderExprList => {
            const arr = data
                .flat(2)
                .filter((data) : data is AlterTableOrderExpr => {
                    return "syntaxKind" in data;
                });
            return toNodeArray(
                arr,
                SyntaxKind.AlterTableOrderExprList,
                getTextRange(data)
            );
        }
    )
