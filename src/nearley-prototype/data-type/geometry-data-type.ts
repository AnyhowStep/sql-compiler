import {GeometryType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    union,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.GeometryDataType)
    .addSubstitution(
        [union(
            TokenKind.POINT,
            TokenKind.LINESTRING,
            TokenKind.POLYGON,
            TokenKind.GEOMETRY,
        )] as const,
        (data) => {
            const [[token]] = data;
            return {
                syntaxKind : SyntaxKind.GeometryDataType,
                geometryType : (
                    token.tokenKind == TokenKind.POINT ?
                    GeometryType.Point :
                    token.tokenKind == TokenKind.LINESTRING ?
                    GeometryType.LineString :
                    token.tokenKind == TokenKind.POLYGON ?
                    GeometryType.Polygon :
                    GeometryType.Geometry
                ),
                ...getTextRange(data),
            };
        }
    );
