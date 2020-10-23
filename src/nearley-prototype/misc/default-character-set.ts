import {DefaultCharacterSet, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeRule, optional} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.DefaultCharacterSet)
    .addSubstitution(
        [
            optional(TokenKind.DEFAULT),
            TokenKind.CHARACTER,
            TokenKind.SET,
            optional(TokenKind.Equal),
            SyntaxKind.Identifier
        ] as const,
        (data) : DefaultCharacterSet => {
            let [, , , , characterSetName] = data;
            characterSetName = {
                ...characterSetName,
                identifier : characterSetName.identifier.toLowerCase(),
            };
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DefaultCharacterSet,
                characterSetName : (
                    characterSetName.quoted ?
                    characterSetName :
                    characterSetName.identifier.toUpperCase() == "DEFAULT" ?
                    undefined :
                    //We allow `BINARY` here
                    //https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7016
                    characterSetName.identifier.toUpperCase() == "BINARY" ?
                    {
                        ...characterSetName,
                        //Hack; remove the syntactic error
                        syntacticErrors : undefined,
                    } :
                    characterSetName
                ),
            };
        }
    );
