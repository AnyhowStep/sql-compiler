import {ForeignKeyDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.ForeignKeyDefinition)
    .addSubstitution(
        [
            /**
             * If `CONSTRAINT` name is specified, the `Identifier` name is actually
             * overwritten...
             */
            optional(CustomSyntaxKind.Constraint),
            TokenKind.FOREIGN,
            TokenKind.KEY,
            optional(SyntaxKind.Identifier),
            SyntaxKind.IdentifierList,
            SyntaxKind.ForeignKeyReferenceDefinition,
        ] as const,
        function (data) : ForeignKeyDefinition {
            const [constraintName, , , indexName, columns, foreignKeyReferenceDefinition] = data;

            return {
                syntaxKind : SyntaxKind.ForeignKeyDefinition,
                constraintName : (
                    constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName :
                    undefined
                ),
                indexName : (
                    constraintName != undefined && "syntaxKind" in constraintName ?
                    constraintName :
                    indexName ?? undefined
                ),
                columns,
                foreignKeyReferenceDefinition,
                ...getTextRange(data),
            }
        }
    )
