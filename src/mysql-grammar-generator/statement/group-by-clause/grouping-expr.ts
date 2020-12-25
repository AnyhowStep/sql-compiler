import {GroupingExpr, SortDirection, SyntaxKind, GroupingExprList} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toNodeArray, toValueNode} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12980
 */
makeCustomRule(SyntaxKind.GroupingExpr)
    .addSubstitution(
        [
            CustomSyntaxKind.Expression,
            /**
             * This is deprecated. We handle this in `parser-node-linter`.
             */
            optional(union(
                TokenKind.ASC,
                TokenKind.DESC,
            )),
        ] as const,
        (data) : GroupingExpr => {
            const [expr, sortDirection] = data;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.GroupingExpr,

                expr,
                sortDirection : (
                    sortDirection == undefined ?
                    undefined :
                    toValueNode(
                        (
                            sortDirection[0].tokenKind == TokenKind.ASC ?
                            SortDirection.ASC :
                            SortDirection.DESC
                        ),
                        sortDirection[0]
                    )
                ),
            };
        }
    )

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10818
 */
makeCustomRule(SyntaxKind.GroupingExprList)
    .addSubstitution(
        [
            SyntaxKind.GroupingExpr,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.GroupingExpr,
            ] as const),
        ] as const,
        (data) : GroupingExprList => {
            const arr = data
                .flat(2)
                .filter((data) : data is GroupingExpr => {
                    return "syntaxKind" in data;
                });
            return toNodeArray(
                arr,
                SyntaxKind.GroupingExprList,
                getTextRange(data)
            );
        }
    );
