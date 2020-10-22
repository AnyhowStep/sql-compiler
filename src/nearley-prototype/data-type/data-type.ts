import {DataType, SyntaxKind} from "../../parser-node";
import {
    makeCustomRule,
    union,
} from "../nearley-util";

export const DataTypeRule = makeCustomRule<DataType>("DataType")
    .addSubstitution(
        [union(
            SyntaxKind.BinaryDataType,
            SyntaxKind.BlobDataType,
            SyntaxKind.BooleanDataType,
            SyntaxKind.CharacterDataType,
        )] as const,
        (data) => data[0][0]
    );
