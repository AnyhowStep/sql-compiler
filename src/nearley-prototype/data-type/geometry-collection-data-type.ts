import {GeometryType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    union,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.GeometryCollectionDataType)
    .addSubstitution(
        [union(
            TokenKind.MULTIPOINT,
            TokenKind.MULTILINESTRING,
            TokenKind.MULTIPOLYGON,
            TokenKind.GEOMETRYCOLLECTION,
        )] as const,
        (data) => {
            const [[token]] = data;
            return {
                syntaxKind : SyntaxKind.GeometryCollectionDataType,
                geometryType : (
                    token.tokenKind == TokenKind.MULTIPOINT ?
                    GeometryType.Point :
                    token.tokenKind == TokenKind.MULTILINESTRING ?
                    GeometryType.LineString :
                    token.tokenKind == TokenKind.MULTIPOLYGON ?
                    GeometryType.Polygon :
                    GeometryType.Geometry
                ),
                ...getTextRange(data),
            };
        }
    );
