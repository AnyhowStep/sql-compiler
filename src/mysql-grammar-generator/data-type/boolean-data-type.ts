import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {union} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.BooleanDataType)
    .addSubstitution(
        [union(
            TokenKind.BOOL,
            TokenKind.BOOLEAN,
        )] as const,
        (data) => {
            return {
                syntaxKind : SyntaxKind.BooleanDataType,
                ...getTextRange(data),
            };
        }
    );
