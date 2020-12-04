import {IndexClass, IndexDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union, optional} from "../../../nearley-wrapper";
import {getTextRange, pushSyntacticErrorAt} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {DiagnosticMessages} from "../../diagnostic-messages";

makeCustomRule(SyntaxKind.IndexDefinition)
    .addSubstitution(
        [
            optional(CustomSyntaxKind.Constraint),
            TokenKind.UNIQUE,
            optional(union(
                /**
                 * Can be unquoted `INDEX`/`KEY` or an identifier.
                 */
                [SyntaxKind.Identifier] as const,
                [union(TokenKind.INDEX, TokenKind.KEY), SyntaxKind.Identifier] as const,
            )),
            //optional(union(TokenKind.INDEX, TokenKind.KEY)),
            //optional(SyntaxKind.Identifier),
            optional(CustomSyntaxKind.IndexType),
            CustomSyntaxKind.IndexPartList,
            CustomSyntaxKind.IndexOption,
        ] as const,
        function (data) : IndexDefinition {
            const [constraintName, , rawIndexName, indexType, indexParts, rawIndexOption] = data;

            const indexName = (
                rawIndexName == undefined ?
                undefined :
                rawIndexName[0].length == 2 ?
                rawIndexName[0][1] :
                rawIndexName[0][0].quoted ?
                rawIndexName[0][0] :
                (
                    rawIndexName[0][0].identifier.toUpperCase() == "INDEX" ||
                    rawIndexName[0][0].identifier.toUpperCase() == "KEY"
                ) ?
                undefined :
                rawIndexName[0][0]
            );

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
                constraintName : (
                    constraintName != undefined && "syntaxKind" in constraintName ?
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
    .addSubstitution(
        [
            optional(CustomSyntaxKind.Constraint),
            TokenKind.UNIQUE_KEY,
            optional(SyntaxKind.Identifier),
            optional(CustomSyntaxKind.IndexType),
            CustomSyntaxKind.IndexPartList,
            CustomSyntaxKind.IndexOption,
        ] as const,
        function (data) : IndexDefinition {
            const [constraintName, , indexName, indexType, indexParts, rawIndexOption] = data;

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
                constraintName : (
                    constraintName != undefined && "syntaxKind" in constraintName ?
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
