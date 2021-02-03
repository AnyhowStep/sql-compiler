import {IndexClass, CreateIndexStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2313
 */
makeCustomRule(SyntaxKind.CreateIndexStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional(union(
                TokenKind.UNIQUE,
                TokenKind.FULLTEXT,
                TokenKind.SPATIAL,
            )),
            TokenKind.INDEX,
            SyntaxKind.Identifier,
            optional(CustomSyntaxKind.IndexType),

            TokenKind.ON,
            SyntaxKind.TableIdentifier,

            SyntaxKind.IndexPartList,
            CustomSyntaxKind.IndexOptions,

            SyntaxKind.AlterTableLockAndAlgorithmOptions,
        ] as const,
        function (data) : CreateIndexStatement {
            const [
                ,
                indexClassToken,
                ,
                indexName,
                indexType,

                ,
                tableIdentifier,

                indexParts,
                rawIndexOption,

                alterTableLockAndAlgorithmOptions,
            ] = data;

            const indexOption = (
                indexType == undefined ?
                rawIndexOption :
                rawIndexOption.indexType == undefined ?
                {
                    ...rawIndexOption,
                    indexType : indexType.indexType,
                } :
                rawIndexOption
            );

            return {
                ...indexOption,
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateIndexStatement,
                indexClass : (
                    indexClassToken == undefined ?
                    IndexClass.INDEX :
                    indexClassToken[0].tokenKind == TokenKind.UNIQUE ?
                    IndexClass.UNIQUE :
                    indexClassToken[0].tokenKind == TokenKind.FULLTEXT ?
                    IndexClass.FULLTEXT :
                    IndexClass.SPATIAL
                ),
                indexName,
                tableIdentifier,
                indexParts,
                alterTableLockAndAlgorithmOptions
            }
        }
    )
