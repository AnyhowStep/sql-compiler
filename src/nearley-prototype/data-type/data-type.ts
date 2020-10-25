import {DataType, SyntaxKind} from "../../parser-node";
import {
    makeCustomRule,
    union,
} from "../nearley-util";

export const DataTypeRule = makeCustomRule<DataType>("DataType")
    .addSubstitution(
        [union(
            SyntaxKind.BinaryDataType,
            SyntaxKind.BitDataType,
            SyntaxKind.BlobDataType,
            SyntaxKind.BooleanDataType,
            SyntaxKind.CharacterDataType,
            SyntaxKind.DateDataType,
            SyntaxKind.IntegerDataType,
            SyntaxKind.RealDataType,
            SyntaxKind.YearDataType,
        )] as const,
        (data) : DataType => data[0][0]
    );
