import {AlterSchemaStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterSchemaStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            union(TokenKind.SCHEMA, TokenKind.DATABASE),
            optional(SyntaxKind.Identifier),
            SyntaxKind.CreateSchemaOptionList,
        ] as const,
        (data) : AlterSchemaStatement => {
            const [
                ,
                ,
                schemaName,
                createSchemaOptions,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterSchemaStatement,
                schemaName : schemaName ?? undefined,
                createSchemaOptions,
            };
        }
    );
