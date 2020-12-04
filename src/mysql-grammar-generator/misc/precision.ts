import {Precision, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {union} from "../../nearley-wrapper";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6811
 */
makeCustomRule(SyntaxKind.Precision)
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

makeCustomRule(CustomSyntaxKind.RealPrecision)
    .addSubstitution(
        [SyntaxKind.Precision] as const,
        function (data) : Precision {
            const result = data[0];

            if (result.precision.value == BigInt(0) || result.precision.value > BigInt(255)) {
                pushSyntacticErrorAt(
                    result.precision,
                    result.precision.start,
                    result.precision.end,
                    [],
                    DiagnosticMessages.InvalidRealDataTypePrecision
                );
            }

            const maxScale = (
                result.precision.value > BigInt(30) ?
                BigInt(30) :
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

makeCustomRule(CustomSyntaxKind.DecimalPrecision)
    .addSubstitution(
        [SyntaxKind.Precision] as const,
        function (data) : Precision {
            const result = data[0];

            /**
             * https://dev.mysql.com/doc/refman/5.7/en/fixed-point-types.html
             */
            if (result.precision.value > BigInt(65)) {
                pushSyntacticErrorAt(
                    result.precision,
                    result.precision.start,
                    result.precision.end,
                    [],
                    DiagnosticMessages.DecimalPrecisionTooHigh
                );
            }

            const maxScale = (
                result.precision.value > BigInt(30) ?
                BigInt(30) :
                result.precision.value
            );

            if (result.scale.value > maxScale) {
                pushSyntacticErrorAt(
                    result.scale,
                    result.scale.start,
                    result.scale.end,
                    [],
                    DiagnosticMessages.InvalidDataTypeScale,
                    maxScale.toString()
                );
            }

            return result;
        }
    );
