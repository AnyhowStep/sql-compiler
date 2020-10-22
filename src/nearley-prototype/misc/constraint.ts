import {Identifier, SyntaxKind, TextRange} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule, optional} from "../nearley-util";
import {getTextRange} from "../parse-util";

export const ConstraintRule = makeCustomRule<Identifier|TextRange>("Constraint")
    .addSubstitution(
        [TokenKind.CONSTRAINT, optional(SyntaxKind.Identifier)] as const,
        (data) : Identifier|TextRange => {
            return data[1] ?? getTextRange(data);
        }
    )
