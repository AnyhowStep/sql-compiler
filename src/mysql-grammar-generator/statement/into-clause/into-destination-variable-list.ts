import {Identifier, IntoDestinationVariableList, StringLiteral, SyntaxKind, UserVariableIdentifier} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule} from "../../factory";
import {union, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../../parse-util";

makeCustomRule(SyntaxKind.IntoDestinationVariableList)
    .addSubstitution(
        [
            union(
                SyntaxKind.Identifier,
                SyntaxKind.StringLiteral,
                SyntaxKind.UserVariableIdentifier,
            ),
            zeroOrMore([
                TokenKind.Comma,
                union(
                    SyntaxKind.Identifier,
                    SyntaxKind.StringLiteral,
                    SyntaxKind.UserVariableIdentifier,
                ),
            ] as const),
        ] as const,
        (data) : IntoDestinationVariableList => {
            const arr = data
                .flat(3)
                .filter((data) : data is Identifier|StringLiteral|UserVariableIdentifier => {
                    return "syntaxKind" in data;
                });
            return toNodeArray(
                arr,
                SyntaxKind.IntoDestinationVariableList,
                getTextRange(data)
            );
        }
    );
