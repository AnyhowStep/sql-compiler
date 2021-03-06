import {Join, JoinType, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {TokenKind} from "../../../scanner";

makeCustomRule(SyntaxKind.Join)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10463
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10469
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10480
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10486
     */
    .addSubstitution(
        [
            CustomSyntaxKind.TableReference,
            union(
                TokenKind.LEFT,
                TokenKind.RIGHT,
            ),
            optional(TokenKind.OUTER),
            TokenKind.JOIN,
            CustomSyntaxKind.JoinRhsTableReference,
            /**
             * `USING/ON` is required for `LEFT/RIGHT` join.
             * We check this in `parser-node-linter`.
             */
            optional(CustomSyntaxKind.JoinSpecification),
        ] as const,
        (data) : Join => {
            const [
                lhs,
                joinType,
                ,
                joinToken,
                rhs,
                joinSpecification,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Join,
                joinType : toValueNode(
                    (
                        joinType[0].tokenKind == TokenKind.LEFT ?
                        JoinType.LEFT :
                        JoinType.RIGHT
                    ),
                    getTextRange([joinType, joinToken])
                ),
                lhs,
                rhs,
                joinSpecification : joinSpecification ?? undefined,
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10474
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10491
     */
    .addSubstitution(
        [
            CustomSyntaxKind.TableReference,
            TokenKind.NATURAL,
            union(
                TokenKind.LEFT,
                TokenKind.RIGHT,
            ),
            optional(TokenKind.OUTER),
            TokenKind.JOIN,
            CustomSyntaxKind.JoinRhsTableReference,
            /**
             * `ON/USING` is not allowed with `NATURAL LEFT/RIGHT JOIN` but we catch it
             * in `parser-node-linter`.
             */
            optional(CustomSyntaxKind.JoinSpecification),
        ] as const,
        (data) : Join => {
            const [
                lhs,
                naturalToken,
                joinType,
                ,
                joinToken,
                rhs,
                joinSpecification,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Join,
                joinType : toValueNode(
                    (
                        joinType[0].tokenKind == TokenKind.LEFT ?
                        JoinType.NATURAL_LEFT :
                        JoinType.NATURAL_RIGHT
                    ),
                    getTextRange([naturalToken, joinToken])
                ),
                lhs,
                rhs,
                joinSpecification : joinSpecification ?? undefined,
            };
        }
    )
