import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    getTextRange,
    makeRule,
    optional,
} from "../nearley-util";

makeRule(SyntaxKind.ColumnIdentifier)
    .addSubstitution(
        [
            SyntaxKind.Identifier,
            optional([
                TokenKind.Comma,
                SyntaxKind.Identifier,
                optional([
                    TokenKind.Comma,
                    SyntaxKind.Identifier,
                ] as const),
            ] as const),
        ] as const,
        (data) => {
            const [nameA, nameB] = data;
            if (nameB == null) {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.ColumnIdentifier,
                    schemaName : undefined,
                    tableName : undefined,
                    columnName : nameA,
                };
            } else {
                const nameC = nameB[2];
                if (nameC == null) {
                    return {
                        ...getTextRange(data),
                        syntaxKind : SyntaxKind.ColumnIdentifier,
                        schemaName : undefined,
                        tableName : nameA,
                        columnName : nameB[1],
                    };
                } else {
                    return {
                        ...getTextRange(data),
                        syntaxKind : SyntaxKind.ColumnIdentifier,
                        schemaName : nameA,
                        tableName : nameB[1],
                        columnName : nameC[1],
                    };
                }
            }
        }
    );
