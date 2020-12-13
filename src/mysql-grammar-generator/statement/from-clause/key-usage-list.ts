import {SyntaxKind, NodeArray, Identifier, ValueNode} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule} from "../../factory";
import {getTextRange, toNodeArray} from "../../parse-util";
import {optional, zeroOrMore} from "../../../nearley-wrapper";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10692
 */
makeCustomRule(SyntaxKind.KeyUsageList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            optional([
                /**
                 * May be `PRIMARY`
                 */
                SyntaxKind.Identifier,
                zeroOrMore([
                    TokenKind.Comma,
                    /**
                     * May be `PRIMARY`
                     */
                    SyntaxKind.Identifier,
                ] as const)
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<Identifier|ValueNode<"PRIMARY">> => {
            const arr = data
                .flat(3)
                .filter((item) : item is Identifier => {
                    if (item == undefined) {
                        return false;
                    }
                    return "syntaxKind" in item;
                })
                .map((item) : Identifier|ValueNode<"PRIMARY"> => {
                    if (item.quoted) {
                        return item;
                    }
                    if (item.identifier.toUpperCase() != "PRIMARY") {
                        return item;
                    }
                    return {
                        ...getTextRange(item),
                        syntaxKind : SyntaxKind.Value,
                        value : "PRIMARY",
                    };
                });

            return toNodeArray(
                arr,
                SyntaxKind.KeyUsageList,
                getTextRange(data)
            );
        }
    )
