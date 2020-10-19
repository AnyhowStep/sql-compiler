import {GeometryCollectionDataType, GeometryType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {ParserState} from "../parser-state";
import {tryConsumeTokenOneOf} from "../util";

export function tryParseGeometryCollectionDataType (state : ParserState) : GeometryCollectionDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.GEOMETRYCOLLECTION,
        TokenKind.MULTIPOINT,
        TokenKind.MULTILINESTRING,
        TokenKind.MULTIPOLYGON,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();
    const token = state.scanner.current();
    const geometryType = (
        token == TokenKind.MULTIPOINT ?
        GeometryType.Point :
        token == TokenKind.MULTILINESTRING ?
        GeometryType.LineString :
        token == TokenKind.MULTIPOLYGON ?
        GeometryType.Polygon :
        GeometryType.Geometry
    );

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.GeometryCollectionDataType,
        geometryType,
    };
}
