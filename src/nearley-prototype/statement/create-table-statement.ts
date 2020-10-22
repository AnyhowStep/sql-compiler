import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    getTextRange,
    makeRule, optional,
} from "../nearley-util";
import {CreateTableDefinitionListRule} from "./create-table-definition/create-table-definition";

makeRule(SyntaxKind.CreateTableStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional(TokenKind.TEMPORARY),
            TokenKind.TABLE,
            optional([TokenKind.IF, TokenKind.NOT, TokenKind.EXISTS]),
            SyntaxKind.TableIdentifier,
            CreateTableDefinitionListRule
        ] as const,
        (data) => {
            const [, temporary, , ifNotExists, tableIdentifier, createTableDefinitions] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTableStatement,
                temporary : temporary != null,
                ifNotExists : ifNotExists != null,
                tableIdentifier,
                createTableDefinitions,
            };
        }
    );
