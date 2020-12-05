import {TableIdentifier, NodeArray, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {optional, zeroOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../parse-util";

makeCustomRule(CustomSyntaxKind.TableIdentifierList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            SyntaxKind.TableIdentifier,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.TableIdentifier,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<TableIdentifier> => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) : x is TableIdentifier => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.TableIdentifierList,
                getTextRange(data)
            );
        }
    )

makeCustomRule(CustomSyntaxKind.TableIdentifierList_AllowEmpty)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            optional([
                SyntaxKind.TableIdentifier,
                zeroOrMore([
                    TokenKind.Comma,
                    SyntaxKind.TableIdentifier,
                ] as const),
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<TableIdentifier> => {
            const arr = data
                .flat(3)
                .filter((x) : x is TableIdentifier => {
                    if (x == undefined) {
                        return false;
                    }
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                arr,
                SyntaxKind.TableIdentifierList,
                getTextRange(data)
            );
        }
    )
