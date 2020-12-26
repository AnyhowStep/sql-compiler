import {SyntaxKind, ExecuteAtSchedule} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.ExecuteAtSchedule)
    .addSubstitution(
        [
            TokenKind.AT,
            CustomSyntaxKind.Expression,
        ] as const,
        (data) : ExecuteAtSchedule => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ExecuteAtSchedule,

                executeAt : data[1],
            };
        }
    );
