import {IndexClass, IndexDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union, optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.IndexDefinition)
    .addSubstitution(
        [
            CustomSyntaxKind.Constraint,
            TokenKind.UNIQUE,
            union(TokenKind.INDEX, TokenKind.KEY),
            optional(SyntaxKind.Identifier),
            optional(CustomSyntaxKind.IndexType),
            CustomSyntaxKind.IndexPartList,
            CustomSyntaxKind.IndexOption,
        ] as const,
        function (data) : IndexDefinition {
            const [constraintName, , , indexName, indexType, indexParts, rawIndexOption] = data;

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
                syntaxKind : SyntaxKind.IndexDefinition,
                constraintName : (
                    "syntaxKind" in constraintName ?
                    constraintName :
                    undefined
                ),
                indexClass : IndexClass.UNIQUE,
                indexName : indexName ?? undefined,
                indexParts,
                ...indexOption,
                ...getTextRange(data),
            }
        }
    )
