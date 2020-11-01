import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional, union} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.TextDataType)
    .addSubstitution(
        [
            union(
                TokenKind.TINYTEXT,
                TokenKind.TEXT,
                TokenKind.MEDIUMTEXT,
                TokenKind.LONGTEXT,
            ),
            CustomSyntaxKind.CharacterDataTypeModifier,
        ] as const,
        (data) => {
            const [[token], modifier] = data;
            return {
                syntaxKind : SyntaxKind.TextDataType,
                lengthBytes : (
                    token.tokenKind == TokenKind.TINYTEXT ?
                    8 :
                    token.tokenKind == TokenKind.TEXT ?
                    16 :
                    token.tokenKind == TokenKind.MEDIUMTEXT ?
                    24 :
                    32
                ),
                characterSet : modifier.characterSet,
                collate : modifier.collate,
                binary : modifier.binary,
                ...getTextRange(data),
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6655
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6720
     */
    .addSubstitution(
        [
            TokenKind.LONG,
            optional(union(
                TokenKind.VARCHAR,
                [TokenKind.CHAR, TokenKind.VARYING] as const
            )),
            CustomSyntaxKind.CharacterDataTypeModifier,
        ] as const,
        (data) => {
            const [, , modifier] = data;
            return {
                syntaxKind : SyntaxKind.TextDataType,
                lengthBytes : 24,
                characterSet : modifier.characterSet,
                collate : modifier.collate,
                binary : modifier.binary,
                ...getTextRange(data),
            };
        }
    );
