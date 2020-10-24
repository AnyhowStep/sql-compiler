import {RealLiteral, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {
    makeRule,
} from "../nearley-util";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";

makeRule(SyntaxKind.RealLiteral)
    .addSubstitution(
        [TokenKind.RealLiteral] as const,
        (data) => {
            const result : RealLiteral = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.RealLiteral,
                value : parseFloat(data[0].value),
                sourceText : data[0].value,
            };
            if (!isFinite(result.value)) {
                result.value = 0;
                pushSyntacticErrorAt(
                    result,
                    result.start,
                    result.end,
                    [],
                    DiagnosticMessages.RealLiteralEvaluatesToNonFiniteValue
                );
            }
            return result;
        }
    );
