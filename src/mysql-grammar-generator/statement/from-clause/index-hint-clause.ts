import {IndexHintClause, SyntaxKind, ValueNode} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {optional, union} from "../../../nearley-wrapper";
import {TokenKind} from "../../../scanner";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10618
 */
makeCustomRule(CustomSyntaxKind.IndexHintClause)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10634
     */
    .addSubstitution(
        [
            optional([
                TokenKind.FOR,
                union(
                    [TokenKind.JOIN] as const,
                    [TokenKind.ORDER, TokenKind.BY] as const,
                    [TokenKind.GROUP, TokenKind.BY] as const,
                ),
            ] as const)
        ] as const,
        function (data) : ValueNode<IndexHintClause> {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Value,
                value : (
                    data[0] == undefined ?
                    (
                        /**
                         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10621
                         */
                        this.settings.indexHintClauseOldMode ?
                        IndexHintClause.JOIN :
                        IndexHintClause.ALL
                    ) :
                    data[0][1][0][0].tokenKind == TokenKind.JOIN ?
                    IndexHintClause.JOIN :
                    data[0][1][0][0].tokenKind == TokenKind.ORDER ?
                    IndexHintClause.ORDER_BY :
                    IndexHintClause.GROUP_BY
                ),
            };
        }
    )
