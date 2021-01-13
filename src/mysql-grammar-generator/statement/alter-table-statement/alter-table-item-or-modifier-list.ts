import {AlterTableItemOrModifier, AlterTableItemOrModifierList, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../../parse-util";

makeCustomRule(CustomSyntaxKind.AlterTableItemOrModifier)
    .addSubstitution(
        [
            CustomSyntaxKind.AlterTableItem,
        ] as const,
        (data) : AlterTableItemOrModifier => {
            return data[0];
        }
    )
    .addSubstitution(
        [
            CustomSyntaxKind.AlterTableModifier,
        ] as const,
        (data) : AlterTableItemOrModifier => {
            return data[0];
        }
    )

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7861
 */
makeCustomRule(SyntaxKind.AlterTableItemOrModifierList)
    .addSubstitution(
        [
            optional([
                CustomSyntaxKind.AlterTableItemOrModifier,
                zeroOrMore([
                    TokenKind.Comma,
                    CustomSyntaxKind.AlterTableItemOrModifier,
                ] as const)
            ] as const),
        ] as const,
        (data) : AlterTableItemOrModifierList => {
            const arr = data
                .flat(3)
                .filter((item) : item is AlterTableItemOrModifier => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            return toNodeArray(
                arr,
                SyntaxKind.AlterTableItemOrModifierList,
                getTextRange(data)
            )
        }
    )
