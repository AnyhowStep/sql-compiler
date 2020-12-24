import {LoopStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.LoopStatement)
    .addSubstitution(
        [
            TokenKind.LOOP,
            SyntaxKind.StoredProcedureStatementList,
            TokenKind.END,
            TokenKind.LOOP,
        ] as const,
        (data) : LoopStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.LoopStatement,
                statements : data[1],
            };
        }
    );
