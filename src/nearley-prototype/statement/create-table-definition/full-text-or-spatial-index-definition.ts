import {IndexClass, IndexDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeRule, union, optional} from "../../nearley-util";
import {IndexPartListRule} from "./index-part";
import {FullTextOrSpatialIndexOptionRule} from "./full-text-or-spatial-index-option";
import {getTextRange} from "../../parse-util";

makeRule(SyntaxKind.IndexDefinition)
    .addSubstitution(
        [
            union(TokenKind.FULLTEXT, TokenKind.SPATIAL),
            optional(union(TokenKind.INDEX, TokenKind.KEY)),
            optional(SyntaxKind.Identifier),
            IndexPartListRule,
            FullTextOrSpatialIndexOptionRule,
        ] as const,
        function (data) : IndexDefinition {
            const [indexClass, , indexName, indexParts, indexOption] = data;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IndexDefinition,
                constraintName : undefined,
                indexClass : (
                    indexClass[0].tokenKind == TokenKind.FULLTEXT ?
                    IndexClass.FULLTEXT :
                    IndexClass.SPATIAL
                ),
                indexName : indexName ?? undefined,
                indexParts,
                ...indexOption,
            }
        }
    )
