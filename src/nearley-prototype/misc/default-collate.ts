import {DefaultCollation, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeRule, optional} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.DefaultCollation)
    .addSubstitution(
        [
            optional(TokenKind.DEFAULT),
            TokenKind.COLLATE,
            optional(TokenKind.Equal),
            SyntaxKind.Identifier
        ] as const,
        (data) : DefaultCollation => {
            let [, , , collationName] = data;
            collationName = {
                ...collationName,
                identifier : collationName.identifier.toLowerCase(),
            };
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DefaultCollation,
                collationName : (
                    collationName.quoted ?
                    collationName :
                    collationName.identifier.toUpperCase() == "DEFAULT" ?
                    undefined :
                    collationName
                ),
            };
        }
    );
