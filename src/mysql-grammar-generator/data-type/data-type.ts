import {DataType, SyntaxKind} from "../../parser-node";
import {union} from "../../nearley-wrapper";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(CustomSyntaxKind.DataType)
    .addSubstitution(
        [union(
            SyntaxKind.BinaryDataType,
            SyntaxKind.BitDataType,
            SyntaxKind.BlobDataType,
            SyntaxKind.BooleanDataType,
            SyntaxKind.CharacterDataType,
            SyntaxKind.DateDataType,
            SyntaxKind.DateTimeDataType,
            SyntaxKind.GeometryCollectionDataType,
            SyntaxKind.GeometryDataType,
            SyntaxKind.IntegerDataType,
            SyntaxKind.RealDataType,
            SyntaxKind.TextDataType,
            SyntaxKind.TimeDataType,
            SyntaxKind.TimestampDataType,
            SyntaxKind.YearDataType,
        )] as const,
        (data) : DataType => data[0][0]
    );
