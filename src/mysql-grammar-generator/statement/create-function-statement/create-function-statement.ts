import {CreateFunctionStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateFunctionStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional([
                TokenKind.DEFINER,
                TokenKind.Equal,
                CustomSyntaxKind.AccountIdentifierOrCurrentUser,
            ] as const),
            TokenKind.FUNCTION,
            SyntaxKind.StoredFunctionIdentifier,
            SyntaxKind.StoredFunctionParameterList,
            TokenKind.RETURNS,
            CustomSyntaxKind.DataType,
            SyntaxKind.StoredProcedureCharacteristics,
            CustomSyntaxKind.StoredProcedureStatement,
        ] as const,
        (data) : CreateFunctionStatement => {
            const [
                ,
                definer,
                functionToken,
                storedFunctionIdentifier,
                parameters,
                ,
                returnType,
                characteristics,
                statement,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateFunctionStatement,

                definer : (
                    definer == undefined ?
                    toValueNode(
                        "CURRENT_USER",
                        {
                            start : functionToken.start,
                            end : functionToken.start,
                        }
                    ) :
                    definer[2]
                ),
                storedFunctionIdentifier,
                parameters,
                returnType,
                characteristics,
                statement,
            };
        }
    );
