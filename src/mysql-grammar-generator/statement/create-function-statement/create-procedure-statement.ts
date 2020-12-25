import {CreateProcedureStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateProcedureStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional([
                TokenKind.DEFINER,
                TokenKind.Equal,
                CustomSyntaxKind.AccountIdentifierOrCurrentUser,
            ] as const),
            TokenKind.PROCEDURE,
            SyntaxKind.StoredProcedureIdentifier,
            SyntaxKind.StoredProcedureParameterList,
            SyntaxKind.StoredProcedureCharacteristics,
            CustomSyntaxKind.StoredProcedureStatement,
        ] as const,
        (data) : CreateProcedureStatement => {
            const [
                ,
                definer,
                functionToken,
                storedProcedureIdentifier,
                parameters,
                characteristics,
                statement,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateProcedureStatement,

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
                storedProcedureIdentifier,
                parameters,
                characteristics,
                statement,
            };
        }
    );
