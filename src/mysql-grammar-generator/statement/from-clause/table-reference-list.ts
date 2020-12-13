import {TableReferenceList, SyntaxKind, TableReference} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange, toNodeArray} from "../../parse-util";
import {zeroOrMore} from "../../../nearley-wrapper";

makeCustomRule(SyntaxKind.TableReferenceList)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10409
     */
    .addSubstitution(
        [
            CustomSyntaxKind.TableReference,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.TableReference,
            ] as const),
        ] as const,
        (data) : TableReferenceList => {
            const arr = data
                .flat(2)
                .filter((item) : item is TableReference => {
                    return "syntaxKind" in item;
                });

            return toNodeArray(
                arr,
                SyntaxKind.TableReferenceList,
                getTextRange(data)
            );
        }
    )
