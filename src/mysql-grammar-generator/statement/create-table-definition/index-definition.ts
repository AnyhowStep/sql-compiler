import {IndexClass, IndexDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union, optional} from "../../../nearley-wrapper";
import {getTextRange, pushSyntacticErrorAt} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {DiagnosticMessages} from "../../diagnostic-messages";

makeCustomRule(SyntaxKind.IndexDefinition)
    .addSubstitution(
        [
            union(TokenKind.INDEX, TokenKind.KEY),
            optional(SyntaxKind.Identifier),
            optional(CustomSyntaxKind.IndexType),
            CustomSyntaxKind.IndexPartList,
            CustomSyntaxKind.IndexOption,
        ] as const,
        function (data) : IndexDefinition {
            const [, indexName, indexType, indexParts, rawIndexOption] = data;

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

            if (indexOption.withParser != undefined) {
                pushSyntacticErrorAt(
                    indexOption.withParser,
                    indexOption.withParser.start,
                    indexOption.withParser.end,
                    [],
                    DiagnosticMessages.UnexpectedSyntaxKind,
                    "WITH PARSER"
                );
            }

            return {
                syntaxKind : SyntaxKind.IndexDefinition,
                constraintName : undefined,
                indexClass : IndexClass.INDEX,
                indexName : indexName ?? undefined,
                indexParts,
                ...indexOption,
                ...getTextRange(data),
            }
        }
    )
