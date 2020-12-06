import {PartitionDefinitionOptions, Node, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {Diagnostic} from "../../../diagnostic";

makeCustomRule(SyntaxKind.PartitionDefinitionOptions)
    .addSubstitution(
        [
            zeroOrMore([
                CustomSyntaxKind.PartitionDefinitionOption,
            ] as const),
        ] as const,
        (data) : PartitionDefinitionOptions => {
            const arr = data
                .flat(3)
                .filter((item) : item is PartitionDefinitionOptions => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<PartitionDefinitionOptions, keyof Node> = {
                tablespace : undefined,
                engine : undefined,
                nodeGroup : undefined,
                maxRows : undefined,
                minRows : undefined,
                dataDirectory : undefined,
                indexDirectory : undefined,
                comment : undefined,
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
                syntaxKind : SyntaxKind.PartitionDefinitionOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
