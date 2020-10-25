import {GeometryDataType, GeometryType} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitGeometryDataType (dataType : GeometryDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.geometryType == GeometryType.Point ?
            "POINT" :
            dataType.geometryType == GeometryType.LineString ?
            "LINESTRING" :
            dataType.geometryType == GeometryType.Polygon ?
            "POLYGON" :
            "GEOMETRY"
        );
}
