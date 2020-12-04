import {CreateTableOptions, Node, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CreateTableOption} from "../../custom-data";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5911
 */
makeCustomRule(SyntaxKind.CreateTableOptions)
    .addSubstitution(
        [
            optional([
                CustomSyntaxKind.CreateTableOption,
                zeroOrMore([
                    optional(TokenKind.Comma),
                    CustomSyntaxKind.CreateTableOption,
                ] as const)
            ] as const),
        ] as const,
        (data) : CreateTableOptions => {
            const arr = data
                .flat(3)
                .filter((item) : item is CreateTableOption => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<CreateTableOptions, keyof Node> = {
                engine : undefined,
                maxRows : undefined,
            };

            for (const item of arr) {
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        (result as any)[k] = (item as any)[k];
                        break;
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTableOptions,
                ...result,
            };
        }
    )
