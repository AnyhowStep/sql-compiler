import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

export enum GeometryType {
    Point      = 1 << 0,
    LineString = 1 << 1,
    Polygon    = 1 << 2,
    Geometry   = ~0,
}

/**
 * https://dev.mysql.com/doc/refman/5.7/en/spatial-type-overview.html
 */
export interface GeometryDataType extends Node {
    syntaxKind : SyntaxKind.GeometryDataType;

    geometryType : GeometryType;
}
