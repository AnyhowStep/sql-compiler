import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {GeometryType} from "./geometry-data-type";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/spatial-type-overview.html
 */
export interface GeometryCollectionDataType extends Node {
    syntaxKind : SyntaxKind.GeometryCollectionDataType;

    geometryType : GeometryType;
}
