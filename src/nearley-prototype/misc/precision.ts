import {Precision, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {makeCustomRule, makeRule, union} from "../nearley-util";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6811
 */
makeRule(SyntaxKind.Precision)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            union(
                SyntaxKind.IntegerLiteral,
                SyntaxKind.DecimalLiteral,
                SyntaxKind.RealLiteral,
            ),
            TokenKind.Comma,
            union(
                SyntaxKind.IntegerLiteral,
                SyntaxKind.DecimalLiteral,
                SyntaxKind.RealLiteral,
            ),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : Precision => {
            let [, [precision], , [scale], ] = data;

            if (precision.syntaxKind == SyntaxKind.DecimalLiteral) {
                precision = {
                    ...precision,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(precision.value.replace(/\.\d*$/, "")),
                };
                pushSyntacticErrorAt(
                    precision,
                    precision.start,
                    precision.end,
                    [],
                    DiagnosticMessages.PrecisionExpectsIntegerLiteral
                );
            } else if (precision.syntaxKind == SyntaxKind.RealLiteral) {
                precision = {
                    ...precision,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(Math.floor(precision.value)),
                };
                pushSyntacticErrorAt(
                    precision,
                    precision.start,
                    precision.end,
                    [],
                    DiagnosticMessages.PrecisionExpectsIntegerLiteral
                );
            }

            if (scale.syntaxKind == SyntaxKind.DecimalLiteral) {
                scale = {
                    ...scale,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(scale.value.replace(/\.\d*$/, "")),
                };
                pushSyntacticErrorAt(
                    scale,
                    scale.start,
                    scale.end,
                    [],
                    DiagnosticMessages.ScaleExpectsIntegerLiteral
                );
            } else if (scale.syntaxKind == SyntaxKind.RealLiteral) {
                scale = {
                    ...scale,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(Math.floor(scale.value)),
                };
                pushSyntacticErrorAt(
                    scale,
                    scale.start,
                    scale.end,
                    [],
                    DiagnosticMessages.ScaleExpectsIntegerLiteral
                );
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Precision,
                precision,
                scale,
            };
        }
    );

export const RealPrecisionRule = makeCustomRule("RealPrecision")
    .addSubstitution(
        [SyntaxKind.Precision] as const,
        function (data) : Precision {
            const result = data[0];

            if (result.precision.value == 0n || result.precision.value > 255n) {
                pushSyntacticErrorAt(
                    result.precision,
                    result.precision.start,
                    result.precision.end,
                    [],
                    DiagnosticMessages.InvalidRealDataTypePrecision
                );
            }

            const maxScale = (
                result.precision.value > 30n ?
                30n :
                result.precision.value
            );

            if (result.scale.value > maxScale) {
                pushSyntacticErrorAt(
                    result.scale,
                    result.scale.start,
                    result.scale.end,
                    [],
                    DiagnosticMessages.InvalidRealDataTypeScale,
                    maxScale.toString()
                );
            }

            return result;
        }
    );
