import {Expression, SyntaxKind} from "../../parser-node";
import {makeCustomRule, union} from "../nearley-util";

export const ExpressionRule = makeCustomRule<Expression>("Expression")
    .addSubstitution(
        [union(
            SyntaxKind.IntegerLiteral,
        )] as const,
        (data) : Expression => {
            return data[0][0];
        }
    );
