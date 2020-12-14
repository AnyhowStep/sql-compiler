import {DefaultCollation, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule} from "../factory";
import {optional, union} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";

makeCustomRule(SyntaxKind.DefaultCollation)
    .addSubstitution(
        [
            optional(TokenKind.DEFAULT),
            TokenKind.COLLATE,
            optional(TokenKind.Equal),
            union(SyntaxKind.Identifier, SyntaxKind.StringLiteral),
        ] as const,
        (data) : DefaultCollation => {
            let [, , , [collationName]] = data;
            collationName = (
                collationName.syntaxKind == SyntaxKind.StringLiteral ?
                {
                    ...collationName,
                    value : collationName.value.toLowerCase(),
                } :
                {
                    ...collationName,
                    identifier : collationName.identifier.toLowerCase(),
                }
            );
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DefaultCollation,
                collationName : (
                    collationName.syntaxKind == SyntaxKind.StringLiteral ?
                    collationName :
                    collationName.quoted ?
                    collationName :
                    collationName.identifier.toUpperCase() == "DEFAULT" ?
                    undefined :
                    collationName
                ),
            };
        }
    );
