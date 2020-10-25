import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    union,
} from "../nearley-util";
import {getTextRange} from "../parse-util";
import {CharacterDataTypeModifier} from "./character-data-type-modifier";

makeRule(SyntaxKind.TextDataType)
    .addSubstitution(
        [
            union(
                TokenKind.TINYTEXT,
                TokenKind.TEXT,
                TokenKind.MEDIUMTEXT,
                TokenKind.LONGTEXT,
            ),
            CharacterDataTypeModifier,
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
     */
    .addSubstitution(
        [
            TokenKind.LONG,
            union(
                TokenKind.VARCHAR,
                [TokenKind.CHAR, TokenKind.VARYING] as const
            ),
            CharacterDataTypeModifier
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
