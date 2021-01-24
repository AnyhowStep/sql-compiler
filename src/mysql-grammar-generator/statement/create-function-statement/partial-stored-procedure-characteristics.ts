import {PartialStoredProcedureCharacteristics, Node, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {Diagnostic} from "../../../diagnostic";

makeCustomRule(SyntaxKind.PartialStoredProcedureCharacteristics)
    .addSubstitution(
        [
            zeroOrMore(CustomSyntaxKind.StoredProcedureCharacteristic),
        ] as const,
        (data) : PartialStoredProcedureCharacteristics => {
            const arr = data[0];

            const result : Omit<PartialStoredProcedureCharacteristics, keyof Node> = {
                comment : undefined,
                language : undefined,
                databaseAccessCharacteristic : undefined,
                deterministic : undefined,
                storedProcedureSecurityContext : undefined,
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
                syntaxKind : SyntaxKind.PartialStoredProcedureCharacteristics,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
