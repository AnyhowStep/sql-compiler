import {BinLogStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.BinLogStatement)
    .addSubstitution(
        [
            TokenKind.BINLOG,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : BinLogStatement => {
            const [
                ,
                str,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.BinLogStatement,
                str,
            }
        }
    )
