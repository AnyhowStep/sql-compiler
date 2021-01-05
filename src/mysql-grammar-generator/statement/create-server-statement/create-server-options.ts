import {CreateServerOptions, Node, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {CreateServerOption} from "../../custom-data";
import {zeroOrMore} from "../../../nearley-wrapper";
import {getStart, getTextRange} from "../../parse-util";
import {Diagnostic} from "../../../diagnostic";
import {TokenKind} from "../../../scanner";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2399
 */
makeCustomRule(SyntaxKind.CreateServerOptions)
    .addSubstitution(
        [
            CustomSyntaxKind.CreateServerOption,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.CreateServerOption,
            ] as const),
        ] as const,
        (data) : CreateServerOptions => {
            const arr = data
                .flat(2)
                .filter((item) : item is CreateServerOption => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const start = getStart(data)
            const end = start
            const result : Omit<CreateServerOptions, keyof Node> = {
                host : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "",
                    sourceText : "''",
                },
                database : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "",
                    sourceText : "''",
                },
                user : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "",
                    sourceText : "''",
                },
                password : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "",
                    sourceText : "''",
                },
                socket : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "",
                    sourceText : "''",
                },
                owner : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "",
                    sourceText : "''",
                },
                port : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(0),
                },
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
                syntaxKind : SyntaxKind.CreateServerOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
