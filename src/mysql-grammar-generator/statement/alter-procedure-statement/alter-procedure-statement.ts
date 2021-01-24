import {AlterProcedureStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterProcedureStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.PROCEDURE,
            SyntaxKind.StoredProcedureIdentifier,
            SyntaxKind.PartialStoredProcedureCharacteristics,
        ] as const,
        (data) : AlterProcedureStatement => {
            const [
                ,
                ,
                storedProcedureIdentifier,
                characteristics,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterProcedureStatement,

                storedProcedureIdentifier,
                characteristics,
            };
        }
    );
