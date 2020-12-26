import {SyntaxKind, Schedule} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(CustomSyntaxKind.Schedule)
    .addSubstitution(
        [
            SyntaxKind.ExecuteAtSchedule
        ] as const,
        (data) : Schedule => {
            return data[0];
        }
    )
    .addSubstitution(
        [
            SyntaxKind.IntervalSchedule
        ] as const,
        (data) : Schedule => {
            return data[0];
        }
    )
