
import {
    SyntaxKind,
    BinaryDataType,
    BlobDataType,
    BooleanDataType,
    CharacterDataType,
    DateTimeDataType,
    DecimalDataType,
    GeometryCollectionDataType,
    GeometryDataType,
    IntegerDataType,
    JsonDataType,
    RealDataType,
    TextDataType,
    UnionDataType,
    UnknownDataType,
    IntegerLiteral,
    StringLiteral,
    UnknownExpression,
    ColumnIdentifier,
    Identifier,
    TableIdentifier,
    SourceFile,
    SourceFileLite,
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
    [SyntaxKind.BlobDataType] : BlobDataType;
    [SyntaxKind.BooleanDataType] : BooleanDataType;
    [SyntaxKind.CharacterDataType] : CharacterDataType;
    [SyntaxKind.DateTimeDataType] : DateTimeDataType;
    [SyntaxKind.DecimalDataType] : DecimalDataType;
    [SyntaxKind.GeometryCollectionDataType] : GeometryCollectionDataType;
    [SyntaxKind.GeometryDataType] : GeometryDataType;
    [SyntaxKind.IntegerDataType] : IntegerDataType;
    [SyntaxKind.JsonDataType] : JsonDataType;
    [SyntaxKind.RealDataType] : RealDataType;
    [SyntaxKind.TextDataType] : TextDataType;
    [SyntaxKind.UnionDataType] : UnionDataType;
    [SyntaxKind.UnknownDataType] : UnknownDataType;
    [SyntaxKind.IntegerLiteral] : IntegerLiteral;
    [SyntaxKind.StringLiteral] : StringLiteral;
    [SyntaxKind.UnknownExpression] : UnknownExpression;
    [SyntaxKind.ColumnIdentifier] : ColumnIdentifier;
    [SyntaxKind.Identifier] : Identifier;
    [SyntaxKind.TableIdentifier] : TableIdentifier;
    [SyntaxKind.SourceFile] : SourceFile;
    [SyntaxKind.SourceFileLite] : SourceFileLite;
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
