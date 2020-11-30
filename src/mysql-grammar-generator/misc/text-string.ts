import {BitLiteral, HexLiteral, StringLiteral, SyntaxKind} from "../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {union} from "../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.TextString)
    .addSubstitution(
        [
            union(
                SyntaxKind.StringLiteral,
                SyntaxKind.HexLiteral,
                SyntaxKind.BitLiteral,
            ),
        ] as const,
        (data) : StringLiteral|HexLiteral|BitLiteral => {
            let [[literal]] = data;

            return literal;
        }
    );
