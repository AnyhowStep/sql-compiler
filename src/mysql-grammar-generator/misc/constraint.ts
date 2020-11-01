import {Identifier, SyntaxKind, TextRange} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(CustomSyntaxKind.Constraint)
    .addSubstitution(
        [TokenKind.CONSTRAINT, optional(SyntaxKind.Identifier)] as const,
        (data) : Identifier|TextRange => {
            return data[1] ?? getTextRange(data);
        }
    )
