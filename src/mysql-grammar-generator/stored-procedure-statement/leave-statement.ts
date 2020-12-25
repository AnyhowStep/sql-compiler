import {LeaveStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.LeaveStatement)
    .addSubstitution(
        [
            TokenKind.LEAVE,
            CustomSyntaxKind.LabelIdentifier,
        ] as const,
        (data) : LeaveStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.LeaveStatement,
                label : data[1],
            };
        }
    )
