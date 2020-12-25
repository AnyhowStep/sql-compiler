import {RepeatStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.RepeatStatement)
    .addSubstitution(
        [
            TokenKind.REPEAT,
            SyntaxKind.StoredProcedureStatementList,
            TokenKind.UNTIL,
            CustomSyntaxKind.Expression,
            TokenKind.END,
            TokenKind.REPEAT,
        ] as const,
        (data) : RepeatStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.RepeatStatement,
                statements : data[1],
                expr : data[3],
            };
        }
    );
