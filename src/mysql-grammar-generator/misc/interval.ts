import {Interval, IntervalType, SyntaxKind} from "../../parser-node";
import {makeCustomRule} from "../factory";
import {union} from "../../nearley-wrapper";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.Interval)
    .addSubstitution(
        [
            union(
                TokenKind.DAY,
                TokenKind.WEEK,
                TokenKind.HOUR,
                TokenKind.MINUTE,
                TokenKind.MONTH,
                TokenKind.QUARTER,
                TokenKind.SECOND,
                TokenKind.MICROSECOND,
                TokenKind.YEAR,

                TokenKind.DAY_HOUR,
                TokenKind.DAY_MICROSECOND,
                TokenKind.DAY_MINUTE,
                TokenKind.DAY_SECOND,

                TokenKind.HOUR_MICROSECOND,
                TokenKind.HOUR_MINUTE,
                TokenKind.HOUR_SECOND,

                TokenKind.MINUTE_MICROSECOND,
                TokenKind.MINUTE_SECOND,

                TokenKind.SECOND_MICROSECOND,

                TokenKind.YEAR_MONTH,
            ),
        ] as const,
        (data) : Interval => {
            const [[intervalType]] = data;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Interval,

                intervalType : (
                    intervalType.tokenKind == TokenKind.DAY ?
                    IntervalType.DAY :

                    intervalType.tokenKind == TokenKind.WEEK ?
                    IntervalType.WEEK :

                    intervalType.tokenKind == TokenKind.HOUR ?
                    IntervalType.HOUR :

                    intervalType.tokenKind == TokenKind.MINUTE ?
                    IntervalType.MINUTE :

                    intervalType.tokenKind == TokenKind.MONTH ?
                    IntervalType.MONTH :

                    intervalType.tokenKind == TokenKind.QUARTER ?
                    IntervalType.QUARTER :

                    intervalType.tokenKind == TokenKind.SECOND ?
                    IntervalType.SECOND :

                    intervalType.tokenKind == TokenKind.MICROSECOND ?
                    IntervalType.MICROSECOND :

                    intervalType.tokenKind == TokenKind.YEAR ?
                    IntervalType.YEAR :

                    intervalType.tokenKind == TokenKind.DAY_HOUR ?
                    IntervalType.DAY_HOUR :

                    intervalType.tokenKind == TokenKind.DAY_MICROSECOND ?
                    IntervalType.DAY_MICROSECOND :

                    intervalType.tokenKind == TokenKind.DAY_MINUTE ?
                    IntervalType.DAY_MINUTE :

                    intervalType.tokenKind == TokenKind.DAY_SECOND ?
                    IntervalType.DAY_SECOND :

                    intervalType.tokenKind == TokenKind.HOUR_MICROSECOND ?
                    IntervalType.HOUR_MICROSECOND :

                    intervalType.tokenKind == TokenKind.HOUR_MINUTE ?
                    IntervalType.HOUR_MINUTE :

                    intervalType.tokenKind == TokenKind.HOUR_SECOND ?
                    IntervalType.HOUR_SECOND :

                    intervalType.tokenKind == TokenKind.MINUTE_MICROSECOND ?
                    IntervalType.MINUTE_MICROSECOND :

                    intervalType.tokenKind == TokenKind.MINUTE_SECOND ?
                    IntervalType.MINUTE_SECOND :

                    intervalType.tokenKind == TokenKind.SECOND_MICROSECOND ?
                    IntervalType.SECOND_MICROSECOND :

                    IntervalType.YEAR_MONTH
                )
            };
        }
    );
