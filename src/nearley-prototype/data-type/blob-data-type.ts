import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    union,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.BlobDataType)
    .addSubstitution(
        [union(
            TokenKind.TINYBLOB,
            TokenKind.BLOB,
            TokenKind.MEDIUMBLOB,
            TokenKind.LONGBLOB,
        )] as const,
        (data) => {
            const [[token]] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.BlobDataType,
                lengthBytes : (
                    token.tokenKind == TokenKind.TINYBLOB ?
                    8 :
                    token.tokenKind == TokenKind.BLOB ?
                    16 :
                    token.tokenKind == TokenKind.MEDIUMBLOB ?
                    24 :
                    32
                ),
            };
        }
    );
