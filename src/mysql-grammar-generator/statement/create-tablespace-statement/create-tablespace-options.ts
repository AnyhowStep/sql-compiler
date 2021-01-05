import {CreateTablespaceOptions, Node, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {CreateTablespaceOption} from "../../custom-data";
import {optional, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {Diagnostic} from "../../../diagnostic";
import {TokenKind} from "../../../scanner";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4763
 */
makeCustomRule(SyntaxKind.CreateTablespaceOptions)
    .addSubstitution(
        [
            optional([
                CustomSyntaxKind.CreateTablespaceOption,
                zeroOrMore([
                    optional(TokenKind.Comma),
                    CustomSyntaxKind.CreateTablespaceOption,
                ] as const),
            ] as const),
        ] as const,
        (data) : CreateTablespaceOptions => {
            const arr = data
                .flat(3)
                .filter((item) : item is CreateTablespaceOption => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<CreateTablespaceOptions, keyof Node> = {
                initialSize : undefined,
                autoExtendSize : undefined,
                maxSize : undefined,
                extentSize : undefined,
                nodeGroup : undefined,
                engine : undefined,
                wait : undefined,
                comment : undefined,
                fileBlockSize : undefined,
            };

            const syntacticErrors : Diagnostic[] = [];

            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        (result as any)[k] = (item as any)[k];
                        break;
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTablespaceOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
