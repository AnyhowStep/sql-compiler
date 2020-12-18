import {IntoClause, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../../parse-util";

makeCustomRule(SyntaxKind.IntoClause)
    .addSubstitution(
        [
            TokenKind.INTO,
            CustomSyntaxKind.IntoDestination,
        ] as const,
        (data) : IntoClause => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IntoClause,
                intoDestination : data[1],
            };
        }
    );
