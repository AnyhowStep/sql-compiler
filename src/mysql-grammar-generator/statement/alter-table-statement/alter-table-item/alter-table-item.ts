import {AlterTableItem} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../../factory";
//import {optional, zeroOrMore} from "../../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../../parse-util";

makeCustomRule(CustomSyntaxKind.AlterTableItem)
    .addSubstitution(
        [
            CustomSyntaxKind.CreateTableOptionsSpaceSeparated,
        ] as const,
        (data) : AlterTableItem => {
            return data[0];
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
