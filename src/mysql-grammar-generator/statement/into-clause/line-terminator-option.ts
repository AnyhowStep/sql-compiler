import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {LineTerminatorOption} from "../../custom-data";

makeCustomRule(CustomSyntaxKind.LineTerminatorOption)
    .addSubstitution(
        [
            TokenKind.TERMINATED,
            TokenKind.BY,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : LineTerminatorOption => {
            return {
                ...getTextRange(data),
                terminatedBy : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.STARTING,
            TokenKind.BY,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : LineTerminatorOption => {
            return {
                ...getTextRange(data),
                startingBy : data[2],
            };
        }
    )
