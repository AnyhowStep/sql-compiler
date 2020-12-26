import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {IdentifierAllowReservedRule} from "./identifier";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.EventIdentifier)
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
                    syntaxKind : SyntaxKind.EventIdentifier,
                    schemaName : undefined,
                    eventName : nameA,
                };
            } else {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.EventIdentifier,
                    schemaName : nameA,
                    eventName : nameB[1],
                };
            }
        }
    );
