import {AlterInstanceRotateMasterKey, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterInstanceRotateMasterKey)
    .addSubstitution(
        [
            TokenKind.ROTATE,
            union(SyntaxKind.Identifier, SyntaxKind.StringLiteral),
            TokenKind.MASTER,
            TokenKind.KEY,
        ] as const,
        (data) : AlterInstanceRotateMasterKey => {
            const [
                ,
                engine,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterInstanceRotateMasterKey,
                engine : engine[0],
            }
        }
    )
