import {FieldLength, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {makeRule, union} from "../nearley-util";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";

makeRule(SyntaxKind.FieldLength)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            union(
                SyntaxKind.IntegerLiteral,
                SyntaxKind.DecimalLiteral,
                SyntaxKind.RealLiteral,
            ),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : FieldLength => {
            let [, [literal], ] = data;

            if (literal.syntaxKind == SyntaxKind.DecimalLiteral) {
                literal = {
                    ...literal,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(literal.value.replace(/\.\d*$/, "")),
                };
                pushSyntacticErrorAt(
                    literal,
                    literal.start,
                    literal.end,
                    [],
                    DiagnosticMessages.FieldLengthExpectsIntegerLiteral
                );
            } else if (literal.syntaxKind == SyntaxKind.RealLiteral) {
                literal = {
                    ...literal,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(Math.floor(literal.value)),
                };
                pushSyntacticErrorAt(
                    literal,
                    literal.start,
                    literal.end,
                    [],
                    DiagnosticMessages.FieldLengthExpectsIntegerLiteral
                );
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.FieldLength,
                length : literal,
            };
        }
    );
