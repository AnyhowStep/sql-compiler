import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/blob.html
 */
export interface BlobDataType extends Node {
    syntaxKind : SyntaxKind.BlobDataType;

    lengthBytes : 8|16|24|32;
}
