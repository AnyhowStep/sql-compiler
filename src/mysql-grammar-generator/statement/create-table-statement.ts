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
            SyntaxKind.CreateTableDefinitionList,
            SyntaxKind.CreateTableOptions,
            optional(CustomSyntaxKind.Partition),
        ] as const,
        (data) : CreateTableStatement => {
            const [, temporary, , ifNotExists, tableIdentifier, createTableDefinitions, createTableOptions, partition] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTableStatement,
                temporary : temporary != null,
                ifNotExists : ifNotExists != null,
                tableIdentifier,
                createTableDefinitions,
                createTableOptions,
                partition : partition ?? undefined,
            };
        }
    );
