import {OpenStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.OpenStatement)
    .addSubstitution(
        [
            TokenKind.OPEN,
            SyntaxKind.Identifier,
        ] as const,
        (data) : OpenStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.OpenStatement,
                cursorName : data[1],
            };
        }
    )
