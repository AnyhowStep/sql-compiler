import {AlterFunctionStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterFunctionStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.FUNCTION,
            SyntaxKind.StoredFunctionIdentifier,
            SyntaxKind.PartialStoredProcedureCharacteristics,
        ] as const,
        (data) : AlterFunctionStatement => {
            const [
                ,
                ,
                storedFunctionIdentifier,
                characteristics,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterFunctionStatement,

                storedFunctionIdentifier,
                characteristics,
            };
        }
    );
