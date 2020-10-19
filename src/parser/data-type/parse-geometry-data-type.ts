import {GeometryDataType, GeometryType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {ParserState} from "../parser-state";
import {tryConsumeTokenOneOf} from "../util";

export function tryParseGeometryDataType (state : ParserState) : GeometryDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.GEOMETRY,
        TokenKind.POINT,
        TokenKind.LINESTRING,
        TokenKind.POLYGON,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();
    const token = state.scanner.current();
    const geometryType = (
        token == TokenKind.POINT ?
        GeometryType.Point :
        token == TokenKind.LINESTRING ?
        GeometryType.LineString :
        token == TokenKind.POLYGON ?
        GeometryType.Polygon :
        GeometryType.Geometry
    );

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.GeometryDataType,
        geometryType,
    };
}
