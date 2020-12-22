import {NodeArray2, StoredFunctionParameter, SyntaxKind} from "../../../parser-node";
import {getTextRange, toNodeArray} from "../../parse-util";
import {optional, zeroOrMore} from "../../../nearley-wrapper";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {TokenKind} from "../../../scanner";

makeCustomRule(SyntaxKind.StoredFunctionParameter)
    .addSubstitution(
        [
            SyntaxKind.Identifier,
            CustomSyntaxKind.DataType,
        ] as const,
        (data) : StoredFunctionParameter => {
            const [
                identifier,
                dataType,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.StoredFunctionParameter,

                identifier,
                dataType,
            };
        }
    );

makeCustomRule(SyntaxKind.StoredFunctionParameterList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            optional([
                SyntaxKind.StoredFunctionParameter,
                zeroOrMore([
                    TokenKind.Comma,
                    SyntaxKind.StoredFunctionParameter,
                ] as const)
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray2<SyntaxKind.StoredFunctionParameterList, StoredFunctionParameter> => {
            const arr = data
                .flat(3)
                .filter((item) : item is StoredFunctionParameter => {
                    if (item == undefined) {
                        return false;
                    }
                    return "syntaxKind" in item;
                })
            return toNodeArray(
                arr,
                SyntaxKind.StoredFunctionParameterList,
                getTextRange(data)
            );
        }
    )
