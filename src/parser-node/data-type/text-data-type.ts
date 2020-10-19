import {Identifier} from "../identifier";
import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/blob.html
 */
export interface TextDataType extends Node {
    syntaxKind : SyntaxKind.TextDataType;

    lengthBytes : 8|16|24|32;

    readonly collate : Identifier|undefined,
    readonly characterSet : Identifier|undefined,
}
