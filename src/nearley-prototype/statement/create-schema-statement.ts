import {CreateSchemaOptionList, CreateSchemaStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    optional,
    union,
    zeroOrMore,
} from "../nearley-util";
import {getTextRange, toNodeArray} from "../parse-util";

makeRule(SyntaxKind.CreateSchemaOptionList)
    .addSubstitution(
        [
            zeroOrMore(union(
                SyntaxKind.DefaultCharacterSet,
                SyntaxKind.DefaultCollation
            ))
        ] as const,
        (data) : CreateSchemaOptionList => {
            return toNodeArray(
                data.flat(2),
                SyntaxKind.CreateSchemaOptionList,
                getTextRange(data)
            );
        }
    );

makeRule(SyntaxKind.CreateSchemaStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            union(TokenKind.SCHEMA, TokenKind.DATABASE),
            optional([TokenKind.IF, TokenKind.NOT, TokenKind.EXISTS] as const),
            SyntaxKind.Identifier,
            SyntaxKind.CreateSchemaOptionList
        ] as const,
        (data) : CreateSchemaStatement => {
            const [, , ifNotExists, identifier, createSchemaOptions] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateSchemaStatement,
                schemaName : identifier,
                ifNotExists : ifNotExists != undefined,
                createSchemaOptions,
            };
        }
    );
