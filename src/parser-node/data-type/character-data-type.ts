import {Identifier} from "../identifier";
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

    nationalCharacterSet : Identifier|undefined;
    variableLength : boolean;
    maxLength : number;

    readonly collate : Identifier|undefined,
    readonly characterSet : Identifier|undefined,
}
