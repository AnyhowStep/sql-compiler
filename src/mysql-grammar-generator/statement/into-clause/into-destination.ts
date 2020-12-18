import {IntoDestination, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union} from "../../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.IntoDestination)
    .addSubstitution(
        [
            union(
                SyntaxKind.IntoDestinationDumpFile,
                SyntaxKind.IntoDestinationOutFile,
                SyntaxKind.IntoDestinationVariableList,
            ),
        ] as const,
        (data) : IntoDestination => {
            return data[0][0];
        }
    );
