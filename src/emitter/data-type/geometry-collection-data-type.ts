import {GeometryCollectionDataType, GeometryType} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitGeometryCollectionDataType (dataType : GeometryCollectionDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.geometryType == GeometryType.Point ?
            "MULTIPOINT" :
            dataType.geometryType == GeometryType.LineString ?
            "MULTILINESTRING" :
            dataType.geometryType == GeometryType.Polygon ?
            "MULTIPOLYGON" :
            "GEOMETRYCOLLECTION"
        );
}
