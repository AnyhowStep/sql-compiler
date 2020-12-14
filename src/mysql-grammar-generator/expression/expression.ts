import {Expression, SyntaxKind} from "../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {union} from "../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.Expression)
    .addSubstitution(
        [union(
            CustomSyntaxKind.IntegerLiteralOrDecimalLiteral,
            SyntaxKind.RealLiteral,
            SyntaxKind.StringLiteral,
            SyntaxKind.Identifier,
            SyntaxKind.ParamMarker,
            SyntaxKind.UserVariableIdentifier,
        )] as const,
        (data) : Expression => {
            return data[0][0];
        }
    );
