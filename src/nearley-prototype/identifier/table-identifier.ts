import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    optional,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.TableIdentifier)
    .addSubstitution(
        [
            SyntaxKind.Identifier,
            optional([
                TokenKind.Comma,
                SyntaxKind.Identifier,
            ] as const),
        ] as const,
        (data) => {
            const [nameA, nameB] = data;
            if (nameB == null) {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.TableIdentifier,
                    schemaName : undefined,
                    tableName : nameA,
                };
            } else {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.TableIdentifier,
                    schemaName : nameA,
                    tableName : nameB[1],
                };
            }
        }
    );
