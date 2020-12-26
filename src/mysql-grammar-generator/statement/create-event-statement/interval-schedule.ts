import {SyntaxKind, IntervalSchedule} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.IntervalSchedule)
    .addSubstitution(
        [
            TokenKind.EVERY,
            CustomSyntaxKind.Expression,
            SyntaxKind.Interval,
            optional([TokenKind.STARTS, CustomSyntaxKind.Expression] as const),
            optional([TokenKind.ENDS, CustomSyntaxKind.Expression] as const),
        ] as const,
        (data) : IntervalSchedule => {
            const [
                ,
                intervalExpr,
                interval,
                startsAt,
                endsAt,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IntervalSchedule,

                intervalExpr,
                interval,
                startsAt : (
                    startsAt == undefined ?
                    undefined :
                    startsAt[1]
                ),
                endsAt : (
                    endsAt == undefined ?
                    undefined :
                    endsAt[1]
                ),
            };
        }
    );
