import {EnumDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.EnumDataType)
    .addSubstitution(
        [
            TokenKind.ENUM,
            CustomSyntaxKind.StringList,
            CustomSyntaxKind.CharacterDataTypeModifier,
        ] as const,
        (data) : EnumDataType => {
            const [, elements, modifier] = data;

            const result : EnumDataType = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.EnumDataType,
                /**
                 * @todo Check for duplicate elements
                 */
                elements,
                characterSet : modifier.characterSet,
                collate : modifier.collate,
                binary : modifier.binary,
            };

            return result;
        }
    );
