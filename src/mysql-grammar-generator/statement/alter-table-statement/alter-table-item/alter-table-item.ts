import {AlterTableItem, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../../factory";
import {union} from "../../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../../parse-util";

makeCustomRule(CustomSyntaxKind.AlterTableItem)
    .addSubstitution(
        [
            union(
                CustomSyntaxKind.CreateTableOptionsSpaceSeparated,
                SyntaxKind.AlterTableAddColumn,
            ),
        ] as const,
        (data) : AlterTableItem => {
            return data[0][0];
        }
    )
    .addSubstitution(
        [
            TokenKind.FORCE,
        ] as const,
        (data) : AlterTableItem => {
            return toValueNode(
                "FORCE",
                getTextRange(data)
            );
        }
    )
