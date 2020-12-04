import {PrimaryKeyDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange, pushSyntacticErrorAt} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {DiagnosticMessages} from "../../diagnostic-messages";

makeCustomRule(SyntaxKind.PrimaryKeyDefinition)
    .addSubstitution(
        [
            optional(CustomSyntaxKind.Constraint),
            TokenKind.PRIMARY,
            TokenKind.KEY,
            optional(SyntaxKind.Identifier),
            optional(CustomSyntaxKind.IndexType),
            CustomSyntaxKind.IndexPartList,
            CustomSyntaxKind.IndexOption,
        ] as const,
        function (data) : PrimaryKeyDefinition {
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
                syntaxKind : SyntaxKind.PrimaryKeyDefinition,
                constraintName : (
                    constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName :
                    undefined
                ),
                indexName : indexName ?? undefined,
                indexParts,
                ...indexOption,
                ...getTextRange(data),
            }
        }
    )
