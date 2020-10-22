import {Identifier, SyntaxKind, TextRange} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CharacterDataTypeModifier} from "../data-type/character-data-type-modifier";
import {
    makeCustomRule,
    makeRule,
    optional,
    union,
    zeroOrMore,
} from "../nearley-util";
import {processCharacterDataTypeModifier, getTextRange} from "../parse-util";

interface CreateSchemaStatementModifier extends TextRange {
    readonly characterSet : Identifier|undefined,
    readonly collate : Identifier|undefined,
}

const CreateSchemaStatementModifierRule = makeCustomRule("CreateSchemaStatementModifier")
    .addSubstitution(
        [
            zeroOrMore([
                optional(TokenKind.DEFAULT),
                union(
                    [TokenKind.CHARACTER, TokenKind.SET] as const,
                    TokenKind.COLLATE
                ),
                optional(TokenKind.Equal),
                SyntaxKind.Identifier
            ] as const)
        ] as const,
        function (data) : CreateSchemaStatementModifier {
            const arr = data[0].map(([, kind, , identifier]) => {
                return {
                    kind,
                    identifier,
                };
            });

            let characterDataTypeModifier : CharacterDataTypeModifier = {
                ...getTextRange(data),
                characterSet : undefined,
                collate : undefined,
            };

            for (const ele of arr) {
                if (ele.kind instanceof Array) {
                    //CHARACTER SET
                    characterDataTypeModifier = processCharacterDataTypeModifier(
                        this,
                        characterDataTypeModifier,
                        {
                            characterSet : ele.identifier,
                            collate : undefined,
                        }
                    );
                } else {
                    //COLLATE
                    characterDataTypeModifier = processCharacterDataTypeModifier(
                        this,
                        characterDataTypeModifier,
                        {
                            characterSet : undefined,
                            collate : ele.identifier,
                        }
                    );
                }
            }

            return characterDataTypeModifier;
        }
    );

makeRule(SyntaxKind.CreateSchemaStatement)
    .addSubstitution(
        [TokenKind.CREATE, TokenKind.SCHEMA, SyntaxKind.Identifier, CreateSchemaStatementModifierRule] as const,
        (data) => {
            const [, , identifier, modifier] = data;
            return {
                syntaxKind : SyntaxKind.CreateSchemaStatement,
                schemaName : identifier,
                ifNotExists : false,
                ...modifier,
                ...getTextRange(data),
            }
        }
    );
