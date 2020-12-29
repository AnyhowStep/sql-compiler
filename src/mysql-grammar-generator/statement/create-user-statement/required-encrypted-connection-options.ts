import {RequiredEncryptedConnectionOptions, Node, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {RequiredEncryptedConnectionOption} from "../../custom-data";
import {Diagnostic} from "../../../diagnostic";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14367
 *
 * @todo Duplication `Option` items should produce parse errors
 */
makeCustomRule(SyntaxKind.RequiredEncryptedConnectionOptions)
    .addSubstitution(
        [
            CustomSyntaxKind.RequiredEncryptedConnectionOption,
            zeroOrMore([
                optional(TokenKind.AND),
                CustomSyntaxKind.RequiredEncryptedConnectionOption,
            ] as const),
        ] as const,
        (data) : RequiredEncryptedConnectionOptions => {
            const arr = data
                .flat(2)
                .filter((item) : item is RequiredEncryptedConnectionOption => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<RequiredEncryptedConnectionOptions, keyof Node|"optionLocations"> = {
                x509Subject : undefined,
                x509Issuer : undefined,
                sslCipher : undefined,
            };

            const syntacticErrors : Diagnostic[] = [];
            const optionLocations : RequiredEncryptedConnectionOptions["optionLocations"] = [];

            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        (result as any)[k] = (item as any)[k];
                        optionLocations.push(toValueNode(
                            k as any,
                            item
                        ))
                        break;
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.RequiredEncryptedConnectionOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
                optionLocations,
            };
        }
    )
