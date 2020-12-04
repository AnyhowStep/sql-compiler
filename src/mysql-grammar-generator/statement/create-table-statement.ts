import {CreateTableStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    optional,
} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.CreateTableStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional(TokenKind.TEMPORARY),
            TokenKind.TABLE,
            optional([TokenKind.IF, TokenKind.NOT, TokenKind.EXISTS]),
            SyntaxKind.TableIdentifier,
            CustomSyntaxKind.CreateTableDefinitionList,
            SyntaxKind.CreateTableOptions,
        ] as const,
        (data) : CreateTableStatement => {
            const [, temporary, , ifNotExists, tableIdentifier, createTableDefinitions, createTableOptions] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTableStatement,
                temporary : temporary != null,
                ifNotExists : ifNotExists != null,
                tableIdentifier,
                createTableDefinitions,
                createTableOptions,
            };
        }
    );
