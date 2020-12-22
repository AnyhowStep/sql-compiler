import {ReturnStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.ReturnStatement)
    .addSubstitution(
        [
            TokenKind.RETURN,
            CustomSyntaxKind.Expression,
        ] as const,
        (data) : ReturnStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ReturnStatement,
                expr : data[1],
            };
        }
    );
