import {TableAsteriskSelectItem, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12961
 */
makeCustomRule(SyntaxKind.TableAsteriskSelectItem)
    .addSubstitution(
        [
            SyntaxKind.TableIdentifier,
            TokenKind.Dot,
            TokenKind.Asterisk,
        ] as const,
        (data) : TableAsteriskSelectItem => {
            const [tableIdentifier] = data;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.TableAsteriskSelectItem,

                tableIdentifier,
            };
        }
    )
