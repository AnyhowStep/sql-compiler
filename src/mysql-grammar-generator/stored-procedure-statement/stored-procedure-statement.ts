import {SyntaxKind} from "../../parser-node";
import {StoredProcedureStatement} from "../../parser-node";
import {union} from "../../nearley-wrapper";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(CustomSyntaxKind.StoredProcedureStatement)
    .addSubstitution(
        [
            union(
                CustomSyntaxKind.NonDelimiterStatement,
                SyntaxKind.ReturnStatement,
                CustomSyntaxKind.LabelStatement,
                SyntaxKind.IfStatement,
                SyntaxKind.SimpleCaseStatement,
            ),
        ] as const,
        (data) : StoredProcedureStatement => {
            return data[0][0];
        }
    );
