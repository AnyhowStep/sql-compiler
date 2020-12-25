import {FetchStatement, Identifier, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional, union, zeroOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.FetchStatement)
    .addSubstitution(
        [
            TokenKind.FETCH,
            optional(union(
                [TokenKind.NEXT, TokenKind.FROM] as const,
                [TokenKind.FROM] as const,
            )),
            SyntaxKind.Identifier,
            TokenKind.INTO,
            SyntaxKind.Identifier,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.Identifier,
            ] as const),
        ] as const,
        (data) : FetchStatement => {
            const [
                ,
                ,
                cursorName,
                ,
                firstIdentifier,
                trailingIdentifiers,
            ] = data;

            const arr = [firstIdentifier, ...trailingIdentifiers]
                .flat(1)
                .filter((item) : item is Identifier => {
                    return "syntaxKind" in item;
                })

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.FetchStatement,
                cursorName,
                identifiers : toNodeArray(
                    arr,
                    SyntaxKind.FetchIdentifierList,
                    getTextRange(arr)
                ),
            };
        }
    )
