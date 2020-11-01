import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {union, optional} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.IntegerDataType)
    .addSubstitution(
        [
            union(
                TokenKind.TINYINT,
                TokenKind.SMALLINT,
                TokenKind.MEDIUMINT,
                TokenKind.INT,
                TokenKind.INTEGER,
                TokenKind.BIGINT,
            ),
            optional([
                TokenKind.OpenParentheses,
                SyntaxKind.IntegerLiteral,
                TokenKind.CloseParentheses,
            ] as const),
            CustomSyntaxKind.IntegerDataTypeModifier,
        ] as const,
        (data) => {
            const [dataType, displayWidth, modifier] = data;
            const token = dataType[0].tokenKind;
            const bytes = (
                token == TokenKind.TINYINT ?
                1 :
                token == TokenKind.SMALLINT ?
                2 :
                token == TokenKind.MEDIUMINT ?
                3 :
                token == TokenKind.INT ?
                4 :
                token == TokenKind.INTEGER ?
                4 :
                8
            );
            return {
                syntaxKind : SyntaxKind.IntegerDataType,
                bytes,
                displayWidth : (
                    displayWidth == undefined ?
                    undefined :
                    Number(displayWidth[1].value)
                ),
                ...modifier,
                ...getTextRange(data),
            };
        }
    );
