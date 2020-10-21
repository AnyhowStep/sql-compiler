import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
} from "../nearley-util";

makeRule(SyntaxKind.CreateSchemaStatement)
    .addSubstitution(
        [TokenKind.CREATE, TokenKind.SCHEMA, SyntaxKind.Identifier] as const,
        (data) => {
            const [start, , identifier] = data;
            return {
                start : start.start,
                end : identifier.end,
                syntaxKind : SyntaxKind.CreateSchemaStatement,
                schemaName : identifier,
                ifNotExists : false,
                collate : undefined,
                characterSet : undefined,
            }
        }
    );
