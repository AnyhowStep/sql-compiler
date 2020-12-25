import {ParameterMode, StoredProcedureParameter, StoredProcedureParameterList, SyntaxKind} from "../../../parser-node";
import {getTextRange, toNodeArray, toValueNode} from "../../parse-util";
import {optional, union, zeroOrMore} from "../../../nearley-wrapper";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {TokenKind} from "../../../scanner";

makeCustomRule(SyntaxKind.StoredProcedureParameter)
    .addSubstitution(
        [
            optional(union(
                TokenKind.IN,
                TokenKind.OUT,
                TokenKind.INOUT,
            )),
            SyntaxKind.Identifier,
            CustomSyntaxKind.DataType,
        ] as const,
        (data) : StoredProcedureParameter => {
            const [
                parameterMode,
                identifier,
                dataType,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.StoredProcedureParameter,

                parameterMode : (
                    parameterMode == undefined ?
                    toValueNode(
                        ParameterMode.IN,
                        {
                            start : identifier.start,
                            end : identifier.start,
                        }
                    ) :
                    toValueNode(
                        (
                            parameterMode[0].tokenKind == TokenKind.IN ?
                            ParameterMode.IN :
                            parameterMode[0].tokenKind == TokenKind.OUT ?
                            ParameterMode.OUT :
                            ParameterMode.INOUT
                        ),
                        getTextRange(parameterMode)
                    )
                ),

                identifier,
                dataType,
            };
        }
    );

makeCustomRule(SyntaxKind.StoredProcedureParameterList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            optional([
                SyntaxKind.StoredProcedureParameter,
                zeroOrMore([
                    TokenKind.Comma,
                    SyntaxKind.StoredProcedureParameter,
                ] as const)
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : StoredProcedureParameterList => {
            const arr = data
                .flat(3)
                .filter((item) : item is StoredProcedureParameter => {
                    if (item == undefined) {
                        return false;
                    }
                    return "syntaxKind" in item;
                })
            return toNodeArray(
                arr,
                SyntaxKind.StoredProcedureParameterList,
                getTextRange(data)
            );
        }
    )
