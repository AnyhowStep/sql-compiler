import {StringLiteral, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule} from "../nearley-util";

export const CommentRule = makeCustomRule<StringLiteral>("Comment")
    .addSubstitution(
        [TokenKind.COMMENT, SyntaxKind.StringLiteral] as const,
        (data) : StringLiteral => {
            return data[1];
        }
    )
