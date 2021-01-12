import {CreateTableSelectStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateTableSelectStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional(TokenKind.TEMPORARY),
            TokenKind.TABLE,
            optional([TokenKind.IF, TokenKind.NOT, TokenKind.EXISTS]),
            SyntaxKind.TableIdentifier,
            optional(SyntaxKind.CreateTableDefinitionList),
            SyntaxKind.CreateTableOptions,
            optional(CustomSyntaxKind.Partition),
            SyntaxKind.CreateTableSelect,
        ] as const,
        (data) : CreateTableSelectStatement => {
            const [
                ,
                temporary,
                ,
                ifNotExists,
                tableIdentifier,
                createTableDefinitions,
                createTableOptions,
                partition,
                createTableSelect,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTableSelectStatement,
                temporary : temporary != null,
                ifNotExists : ifNotExists != null,
                tableIdentifier,
                createTableDefinitions : createTableDefinitions ?? undefined,
                createTableOptions,
                partition : partition ?? undefined,
                createTableSelect : createTableSelect,
            };
        }
    );
