import {AlterInstanceStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterInstanceStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.INSTANCE,
            /**
             * @todo MySQL 8.0 has more actions
             * https://dev.mysql.com/doc/refman/8.0/en/alter-instance.html
             */
            SyntaxKind.AlterInstanceRotateMasterKey,
        ] as const,
        (data) : AlterInstanceStatement => {
            const [
                ,
                ,
                alterInstanceAction,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterInstanceStatement,
                alterInstanceAction,
            }
        }
    )
