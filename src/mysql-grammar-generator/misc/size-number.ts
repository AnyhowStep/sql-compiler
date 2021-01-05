import {SizeNumber, SyntaxKind} from "../../parser-node";
import {makeCustomRule} from "../factory";
import {union} from "../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.SizeNumber)
    .addSubstitution(
        [
            union(
                SyntaxKind.Identifier,
                SyntaxKind.IntegerLiteral,
            ),
        ] as const,
        (data) : SizeNumber => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.SizeNumber,
                value : data[0][0],
            };
        }
    );
