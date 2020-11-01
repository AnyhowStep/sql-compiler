import {IndexClass, IndexDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union, optional} from "../../../nearley-wrapper";
import {getTextRange, pushSyntacticErrorAt} from "../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.IndexDefinition)
    .addSubstitution(
        [
            union(TokenKind.FULLTEXT, TokenKind.SPATIAL),
            optional(union(TokenKind.INDEX, TokenKind.KEY)),
            optional(SyntaxKind.Identifier),
            CustomSyntaxKind.IndexPartList,
            CustomSyntaxKind.IndexOption,
        ] as const,
        function (data) : IndexDefinition {
            const [indexClass, , indexName, indexParts, indexOption] = data;

            const result : IndexDefinition = {
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
                ...getTextRange(data),
            };
            if (indexOption.indexType != undefined) {
                pushSyntacticErrorAt(
                    indexName ?? result,
                    indexClass[0].start,
                    indexClass[0].end,
                    [],
                    DiagnosticMessages.FullTextAndSpatialIndexCannotSpecifyIndexType
                );
            }

            return result;
        }
    )
