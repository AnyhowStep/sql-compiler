import {AlterTableItem, SyntaxKind} from "../../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../../factory";
import {union} from "../../../../nearley-wrapper";

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
                SyntaxKind.AlterTableAlterColumnDropDefault,
                SyntaxKind.AlterTableRenameTable,
                SyntaxKind.AlterTableRenameIndex,
                SyntaxKind.AlterTableConvertToCharacterSet,
                SyntaxKind.AlterTableForce,
            ),
        ] as const,
        (data) : AlterTableItem => {
            return data[0][0];
        }
    )
