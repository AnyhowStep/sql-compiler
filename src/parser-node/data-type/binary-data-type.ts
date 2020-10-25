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
export interface BinaryDataType extends Node {
    syntaxKind : SyntaxKind.BinaryDataType;

    variableLength : boolean;
    maxLength : FieldLength;
}
