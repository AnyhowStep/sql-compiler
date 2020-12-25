import {WhileStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.WhileStatement)
    .addSubstitution(
        [
            TokenKind.WHILE,
            CustomSyntaxKind.Expression,
            TokenKind.DO,
            SyntaxKind.StoredProcedureStatementList,
            TokenKind.END,
            TokenKind.WHILE,
        ] as const,
        (data) : WhileStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.WhileStatement,
                expr : data[1],
                statements : data[3],
            };
        }
    );
