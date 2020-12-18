import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {FieldTerminatorOption} from "../../custom-data";

makeCustomRule(CustomSyntaxKind.FieldTerminatorOption)
    .addSubstitution(
        [
            TokenKind.TERMINATED,
            TokenKind.BY,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : FieldTerminatorOption => {
            return {
                ...getTextRange(data),
                terminatedBy : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.OPTIONALLY,
            TokenKind.ENCLOSED,
            TokenKind.BY,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : FieldTerminatorOption => {
            return {
                ...getTextRange(data),
                optionallyEnclosed : true,
                enclosedBy : data[3],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ENCLOSED,
            TokenKind.BY,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : FieldTerminatorOption => {
            return {
                ...getTextRange(data),
                enclosedBy : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ESCAPED,
            TokenKind.BY,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : FieldTerminatorOption => {
            return {
                ...getTextRange(data),
                escapedBy : data[2],
            };
        }
    )
