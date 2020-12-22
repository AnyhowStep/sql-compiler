import {SyntaxKind} from "../../../parser-node";
import {StoredProcedureStatement} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(CustomSyntaxKind.StoredProcedureStatement)
    .addSubstitution(
        [
            CustomSyntaxKind.NonDelimiterStatement,
        ] as const,
        (data) : StoredProcedureStatement => {
            return data[0];
        }
    )
    .addSubstitution(
        [
            SyntaxKind.ReturnStatement,
        ] as const,
        (data) : StoredProcedureStatement => {
            return data[0];
        }
    );
