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
                SyntaxKind.AlterTableAddCreateTableDefinitionList,
                SyntaxKind.AlterTableChangeColumn,
                SyntaxKind.AlterTableModifyColumn,
                SyntaxKind.AlterTableDropColumn,
                SyntaxKind.AlterTableDropForeignKey,
                SyntaxKind.AlterTableDropPrimaryKey,
                SyntaxKind.AlterTableDropIndex,
                SyntaxKind.AlterTableDisableKeys,
                SyntaxKind.AlterTableEnableKeys,
                SyntaxKind.AlterTableAlterColumnSetDefault,
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
