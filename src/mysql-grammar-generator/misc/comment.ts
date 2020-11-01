import {StringLiteral, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(CustomSyntaxKind.Comment)
    .addSubstitution(
        [TokenKind.COMMENT, SyntaxKind.StringLiteral] as const,
        (data) : StringLiteral => {
            return data[1];
        }
    )
