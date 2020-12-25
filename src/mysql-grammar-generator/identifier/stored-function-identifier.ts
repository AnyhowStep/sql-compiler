import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {IdentifierAllowReservedRule} from "./identifier";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.StoredFunctionIdentifier)
    .addSubstitution(
        [
            SyntaxKind.Identifier,
            optional([
                TokenKind.Dot,
                IdentifierAllowReservedRule,
            ] as const),
        ] as const,
        (data) => {
            const [nameA, nameB] = data;
            if (nameB == null) {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.StoredFunctionIdentifier,
                    schemaName : undefined,
                    storedFunctionName : nameA,
                };
            } else {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.StoredFunctionIdentifier,
                    schemaName : nameA,
                    storedFunctionName : nameB[1],
                };
            }
        }
    );
