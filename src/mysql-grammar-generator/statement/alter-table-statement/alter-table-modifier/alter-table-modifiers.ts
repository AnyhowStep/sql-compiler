import {AlterTableModifier, AlterTableModifiers, Node, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../../factory";
import {zeroOrMore} from "../../../../nearley-wrapper";
import {getTextRange, getEnd} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8146
 */
makeCustomRule(SyntaxKind.AlterTableModifiers)
    .addSubstitution(
        [
            CustomSyntaxKind.AlterTableModifier,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.AlterTableModifier,
            ] as const),
        ] as const,
        (data) : AlterTableModifiers => {
            const arr = data
                .flat(2)
                .filter((item) : item is AlterTableModifier => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const start = getEnd(data);
            const end = start;

            const result : Omit<AlterTableModifiers, keyof Node> = {
                alterTableLock : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.AlterTableLock,
                    identifier : {
                        start,
                        end,
                        syntaxKind : SyntaxKind.Identifier,
                        quoted : false,
                        identifier : "DEFAULT",
                    }
                },
                alterTableAlgorithm : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.AlterTableAlgorithm,
                    identifier : {
                        start,
                        end,
                        syntaxKind : SyntaxKind.Identifier,
                        quoted : false,
                        identifier : "DEFAULT",
                    }
                },
                alterTableValidation : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.AlterTableValidation,
                    withValidation : false,
                },
            };

            for (const item of arr) {
                if (item.syntaxKind == SyntaxKind.AlterTableLock) {
                    result.alterTableLock = item;
                } else if (item.syntaxKind == SyntaxKind.AlterTableAlgorithm) {
                    result.alterTableAlgorithm = item;
                } else {
                    result.alterTableValidation = item;
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableModifiers,
                ...result,
            };
        }
    )
