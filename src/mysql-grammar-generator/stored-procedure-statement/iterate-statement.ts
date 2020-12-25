import {IterateStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.IterateStatement)
    .addSubstitution(
        [
            TokenKind.ITERATE,
            CustomSyntaxKind.LabelIdentifier,
        ] as const,
        (data) : IterateStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IterateStatement,
                label : data[1],
            };
        }
    )
