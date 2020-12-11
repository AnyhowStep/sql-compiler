import {AsteriskSelectItem, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.AsteriskSelectItem)
    .addSubstitution(
        [
            TokenKind.Asterisk,
        ] as const,
        (data) : AsteriskSelectItem => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AsteriskSelectItem,
            };
        }
    )
