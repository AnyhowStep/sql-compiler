import {Join, JoinType, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";
import {TokenKind} from "../../../scanner";

makeCustomRule(SyntaxKind.Join)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10431
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10439
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10451
     */
    .addSubstitution(
        [
            CustomSyntaxKind.TableReference,
            optional(union(
                TokenKind.INNER,
                TokenKind.CROSS,
            )),
            TokenKind.JOIN,
            CustomSyntaxKind.JoinRhsTableReference,
            optional(CustomSyntaxKind.JoinSpecification),
        ] as const,
        (data) : Join => {
            const [
                lhs,
                joinType,
                ,
                rhs,
                joinSpecification,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Join,
                joinType : (
                    joinType == undefined ?
                    JoinType.INNER :
                    joinType[0].tokenKind == TokenKind.INNER ?
                    JoinType.INNER :
                    JoinType.CROSS
                ),
                lhs,
                rhs,
                joinSpecification : joinSpecification ?? undefined,
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10435
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10445
     */
    .addSubstitution(
        [
            CustomSyntaxKind.TableReference,
            TokenKind.STRAIGHT_JOIN,
            CustomSyntaxKind.JoinRhsTableReference,
            optional(SyntaxKind.JoinSpecificationOn),
        ] as const,
        (data) : Join => {
            const [
                lhs,
                ,
                rhs,
                joinSpecification,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Join,
                joinType : JoinType.STRAIGHT,
                lhs,
                rhs,
                joinSpecification : joinSpecification ?? undefined,
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10457
     */
    .addSubstitution(
        [
            CustomSyntaxKind.TableReference,
            TokenKind.NATURAL,
            TokenKind.JOIN,
            CustomSyntaxKind.JoinRhsTableReference,
        ] as const,
        (data) : Join => {
            const [
                lhs,
                ,
                ,
                rhs,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Join,
                joinType : JoinType.NATURAL_INNER,
                lhs,
                rhs,
                joinSpecification : undefined,
            };
        }
    )
