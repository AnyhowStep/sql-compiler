import {Identifier} from "../identifier";
import {FieldLength} from "../misc";
import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/char.html
 *
 * https://dev.mysql.com/doc/refman/5.7/en/binary-varbinary.html
 *
 * https://stackoverflow.com/questions/29292353/whats-the-difference-between-varchar-binary-and-varbinary-in-mysql
 */
export interface CharacterDataType extends Node {
    syntaxKind : SyntaxKind.CharacterDataType;

    variableLength : boolean;
    maxLength : FieldLength;

    characterSet : Identifier|undefined,
    collate : Identifier|undefined,
}
