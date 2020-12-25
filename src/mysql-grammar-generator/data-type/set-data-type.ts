import {SetDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/set.html
 *
 * A SET column can have a maximum of 64 distinct members.
 * A table can have no more than 255 unique element list definitions among its
 * ENUM and SET columns considered as a group.
 */
makeCustomRule(SyntaxKind.SetDataType)
    .addSubstitution(
        [
            TokenKind.SET,
            SyntaxKind.StringList,
            CustomSyntaxKind.CharacterDataTypeModifier,
        ] as const,
        (data) : SetDataType => {
            const [, elements, modifier] = data;

            const result : SetDataType = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.SetDataType,
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
