import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {union} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.BlobDataType)
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
                ...getTextRange(data),
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6650
     */
    .addSubstitution(
        [TokenKind.LONG, TokenKind.VARBINARY] as const,
        (data) => {
            return {
                syntaxKind : SyntaxKind.BlobDataType,
                lengthBytes : 24,
                ...getTextRange(data),
            };
        }
    );
