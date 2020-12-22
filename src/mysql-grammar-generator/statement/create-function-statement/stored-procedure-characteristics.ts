import {StoredProcedureCharacteristics, Node, SyntaxKind, StoredProcedureSecurityContext} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {Diagnostic} from "../../../diagnostic";

makeCustomRule(SyntaxKind.StoredProcedureCharacteristics)
    .addSubstitution(
        [
            zeroOrMore(CustomSyntaxKind.StoredProcedureCharacteristic),
        ] as const,
        (data) : StoredProcedureCharacteristics => {
            const arr = data[0];

            const result : Omit<StoredProcedureCharacteristics, keyof Node> = {
                comment : undefined,
                language : undefined,
                databaseAccessCharacteristic : undefined,
                deterministic : toValueNode(
                    false,
                    {
                        start : -1,
                        end : -1,
                    }
                ),
                storedProcedureSecurityContext : toValueNode(
                    StoredProcedureSecurityContext.DEFINER,
                    {
                        start : -1,
                        end : -1,
                    }
                ),
            };

            const syntacticErrors : Diagnostic[] = [];

            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        (result as any)[k] = (item as any)[k];
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.StoredProcedureCharacteristics,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
