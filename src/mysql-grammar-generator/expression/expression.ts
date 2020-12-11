import {Expression, SyntaxKind} from "../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {union} from "../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.Expression)
    .addSubstitution(
        [union(
            SyntaxKind.IntegerLiteral,
            SyntaxKind.StringLiteral,
            SyntaxKind.Identifier,
            SyntaxKind.ParamMarker,
        )] as const,
        (data) : Expression => {
            return data[0][0];
        }
    );
