import {IndexClass, CreateIndexStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2313
 */
makeCustomRule(SyntaxKind.CreateIndexStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            TokenKind.INDEX,
            SyntaxKind.Identifier,
            optional(CustomSyntaxKind.IndexType),

            TokenKind.ON,
            SyntaxKind.TableIdentifier,

            SyntaxKind.IndexPartList,
            CustomSyntaxKind.IndexOption,

            SyntaxKind.AlterTableLockAndAlgorithmOptions,
        ] as const,
        function (data) : CreateIndexStatement {
            const [
                ,
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
                indexClass : IndexClass.INDEX,
                indexName : indexName ?? undefined,
                tableIdentifier,
                indexParts,
                alterTableLockAndAlgorithmOptions
            }
        }
    )
