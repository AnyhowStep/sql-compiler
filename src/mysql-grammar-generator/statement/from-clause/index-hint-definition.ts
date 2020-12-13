import {IndexHintDefinition, IndexHintType, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {union} from "../../../nearley-wrapper";
import {TokenKind} from "../../../scanner";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10633
 */
makeCustomRule(SyntaxKind.IndexHintDefinition)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10634
     */
    .addSubstitution(
        [
            union(
                TokenKind.FORCE,
                TokenKind.IGNORE,
            ),
            union(
                TokenKind.KEY,
                TokenKind.INDEX,
            ),
            CustomSyntaxKind.IndexHintClause,
            /**
             * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10692
             */
            SyntaxKind.KeyUsageList,
        ] as const,
        (data) : IndexHintDefinition => {
            const [
                indexHintType,
                ,
                indexHintClause,
                indexes,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IndexHintDefinition,
                indexHintType : (
                    indexHintType[0].tokenKind == TokenKind.FORCE ?
                    IndexHintType.FORCE :
                    IndexHintType.IGNORE
                ),
                indexHintClause : indexHintClause.value,
                indexes,
            }
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10640
     */
    .addSubstitution(
        [
            TokenKind.USE,
            union(
                TokenKind.KEY,
                TokenKind.INDEX,
            ),
            CustomSyntaxKind.IndexHintClause,
            SyntaxKind.KeyUsageList,
        ] as const,
        (data) : IndexHintDefinition => {
            const [
                ,
                ,
                indexHintClause,
                indexes,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IndexHintDefinition,
                indexHintType : IndexHintType.USE,
                indexHintClause : indexHintClause.value,
                indexes,
            }
        }
    )
