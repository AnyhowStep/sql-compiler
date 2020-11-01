
import {
    SyntaxKind,
    BinaryDataType,
    BitDataType,
    BlobDataType,
    BooleanDataType,
    CharacterDataType,
    DateDataType,
    DateTimeDataType,
    DecimalDataType,
    GeometryCollectionDataType,
    GeometryDataType,
    IntegerDataType,
    JsonDataType,
    RealDataType,
    TextDataType,
    TimeDataType,
    TimestampDataType,
    UnionDataType,
    UnknownDataType,
    YearDataType,
    DecimalLiteral,
    IntegerLiteral,
    RealLiteral,
    StringLiteral,
    UnknownExpression,
    ColumnIdentifier,
    Identifier,
    TableIdentifier,
    DefaultCharacterSet,
    DefaultCollation,
    FieldLength,
    Precision,
    SourceFile,
    SourceFileLite,
    CreateSchemaOptionList,
    CreateSchemaStatement,
    CheckDefinition,
    ColumnDefinition,
    ForeignKeyDefinition,
    ForeignKeyReferenceDefinition,
    GeneratedDefinition,
    IndexPart,
    IndexDefinition,
    PrimaryKeyDefinition,
    CreateTableStatement,
    DeclareFunctionParameter,
    DeclareFunctionStatement,
    DelimiterStatement,
    UnknownStatement,
} from "../parser-node";

export type SyntaxKindToNode = {
    [SyntaxKind.BinaryDataType] : BinaryDataType;
    [SyntaxKind.BitDataType] : BitDataType;
    [SyntaxKind.BlobDataType] : BlobDataType;
    [SyntaxKind.BooleanDataType] : BooleanDataType;
    [SyntaxKind.CharacterDataType] : CharacterDataType;
    [SyntaxKind.DateDataType] : DateDataType;
    [SyntaxKind.DateTimeDataType] : DateTimeDataType;
    [SyntaxKind.DecimalDataType] : DecimalDataType;
    [SyntaxKind.GeometryCollectionDataType] : GeometryCollectionDataType;
    [SyntaxKind.GeometryDataType] : GeometryDataType;
    [SyntaxKind.IntegerDataType] : IntegerDataType;
    [SyntaxKind.JsonDataType] : JsonDataType;
    [SyntaxKind.RealDataType] : RealDataType;
    [SyntaxKind.TextDataType] : TextDataType;
    [SyntaxKind.TimeDataType] : TimeDataType;
    [SyntaxKind.TimestampDataType] : TimestampDataType;
    [SyntaxKind.UnionDataType] : UnionDataType;
    [SyntaxKind.UnknownDataType] : UnknownDataType;
    [SyntaxKind.YearDataType] : YearDataType;
    [SyntaxKind.DecimalLiteral] : DecimalLiteral;
    [SyntaxKind.IntegerLiteral] : IntegerLiteral;
    [SyntaxKind.RealLiteral] : RealLiteral;
    [SyntaxKind.StringLiteral] : StringLiteral;
    [SyntaxKind.UnknownExpression] : UnknownExpression;
    [SyntaxKind.ColumnIdentifier] : ColumnIdentifier;
    [SyntaxKind.Identifier] : Identifier;
    [SyntaxKind.TableIdentifier] : TableIdentifier;
    [SyntaxKind.DefaultCharacterSet] : DefaultCharacterSet;
    [SyntaxKind.DefaultCollation] : DefaultCollation;
    [SyntaxKind.FieldLength] : FieldLength;
    [SyntaxKind.Precision] : Precision;
    [SyntaxKind.SourceFile] : SourceFile;
    [SyntaxKind.SourceFileLite] : SourceFileLite;
    [SyntaxKind.CreateSchemaOptionList] : CreateSchemaOptionList;
    [SyntaxKind.CreateSchemaStatement] : CreateSchemaStatement;
    [SyntaxKind.CheckDefinition] : CheckDefinition;
    [SyntaxKind.ColumnDefinition] : ColumnDefinition;
    [SyntaxKind.ForeignKeyDefinition] : ForeignKeyDefinition;
    [SyntaxKind.ForeignKeyReferenceDefinition] : ForeignKeyReferenceDefinition;
    [SyntaxKind.GeneratedDefinition] : GeneratedDefinition;
    [SyntaxKind.IndexPart] : IndexPart;
    [SyntaxKind.IndexDefinition] : IndexDefinition;
    [SyntaxKind.PrimaryKeyDefinition] : PrimaryKeyDefinition;
    [SyntaxKind.CreateTableStatement] : CreateTableStatement;
    [SyntaxKind.DeclareFunctionParameter] : DeclareFunctionParameter;
    [SyntaxKind.DeclareFunctionStatement] : DeclareFunctionStatement;
    [SyntaxKind.DelimiterStatement] : DelimiterStatement;
    [SyntaxKind.UnknownStatement] : UnknownStatement;
} & Record<SyntaxKind, unknown>;
