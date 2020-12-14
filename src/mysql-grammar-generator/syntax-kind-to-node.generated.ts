
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
    EnumDataType,
    GeometryCollectionDataType,
    GeometryDataType,
    IntegerDataType,
    JsonDataType,
    RealDataType,
    SetDataType,
    TextDataType,
    TimeDataType,
    TimestampDataType,
    UnionDataType,
    UnknownDataType,
    YearDataType,
    BitLiteral,
    DecimalLiteral,
    HexLiteral,
    IntegerLiteral,
    ParamMarker,
    RealLiteral,
    StringLiteral,
    UnknownExpression,
    ColumnIdentifier,
    Identifier,
    TableIdentifier,
    CurrentTimestamp,
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
    CreateTableOptions,
    CreateTableStatement,
    DeclareFunctionParameter,
    DeclareFunctionStatement,
    DelimiterStatement,
    DerivedTableFactor,
    FromClause,
    IndexHintDefinition,
    JoinSpecificationOn,
    JoinSpecificationUsing,
    Join,
    NamedTableFactor,
    OdbcTableReference,
    GroupByClause,
    GroupingExpr,
    HashPartition,
    HashSubPartition,
    KeyPartition,
    KeySubPartition,
    ListPartitionDefinition,
    ListPartition,
    PartitionDefinitionOptions,
    RangePartitionDefinition,
    RangePartition,
    SubPartitionDefinition,
    AsteriskSelectItem,
    Limit,
    OrderExpr,
    SelectItem,
    SelectOptions,
    Select,
    TableAsteriskSelectItem,
    UnionOrderLimit,
    Union,
    WhereClause,
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
    [SyntaxKind.EnumDataType] : EnumDataType;
    [SyntaxKind.GeometryCollectionDataType] : GeometryCollectionDataType;
    [SyntaxKind.GeometryDataType] : GeometryDataType;
    [SyntaxKind.IntegerDataType] : IntegerDataType;
    [SyntaxKind.JsonDataType] : JsonDataType;
    [SyntaxKind.RealDataType] : RealDataType;
    [SyntaxKind.SetDataType] : SetDataType;
    [SyntaxKind.TextDataType] : TextDataType;
    [SyntaxKind.TimeDataType] : TimeDataType;
    [SyntaxKind.TimestampDataType] : TimestampDataType;
    [SyntaxKind.UnionDataType] : UnionDataType;
    [SyntaxKind.UnknownDataType] : UnknownDataType;
    [SyntaxKind.YearDataType] : YearDataType;
    [SyntaxKind.BitLiteral] : BitLiteral;
    [SyntaxKind.DecimalLiteral] : DecimalLiteral;
    [SyntaxKind.HexLiteral] : HexLiteral;
    [SyntaxKind.IntegerLiteral] : IntegerLiteral;
    [SyntaxKind.ParamMarker] : ParamMarker;
    [SyntaxKind.RealLiteral] : RealLiteral;
    [SyntaxKind.StringLiteral] : StringLiteral;
    [SyntaxKind.UnknownExpression] : UnknownExpression;
    [SyntaxKind.ColumnIdentifier] : ColumnIdentifier;
    [SyntaxKind.Identifier] : Identifier;
    [SyntaxKind.TableIdentifier] : TableIdentifier;
    [SyntaxKind.CurrentTimestamp] : CurrentTimestamp;
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
    [SyntaxKind.CreateTableOptions] : CreateTableOptions;
    [SyntaxKind.CreateTableStatement] : CreateTableStatement;
    [SyntaxKind.DeclareFunctionParameter] : DeclareFunctionParameter;
    [SyntaxKind.DeclareFunctionStatement] : DeclareFunctionStatement;
    [SyntaxKind.DelimiterStatement] : DelimiterStatement;
    [SyntaxKind.DerivedTableFactor] : DerivedTableFactor;
    [SyntaxKind.FromClause] : FromClause;
    [SyntaxKind.IndexHintDefinition] : IndexHintDefinition;
    [SyntaxKind.JoinSpecificationOn] : JoinSpecificationOn;
    [SyntaxKind.JoinSpecificationUsing] : JoinSpecificationUsing;
    [SyntaxKind.Join] : Join;
    [SyntaxKind.NamedTableFactor] : NamedTableFactor;
    [SyntaxKind.OdbcTableReference] : OdbcTableReference;
    [SyntaxKind.GroupByClause] : GroupByClause;
    [SyntaxKind.GroupingExpr] : GroupingExpr;
    [SyntaxKind.HashPartition] : HashPartition;
    [SyntaxKind.HashSubPartition] : HashSubPartition;
    [SyntaxKind.KeyPartition] : KeyPartition;
    [SyntaxKind.KeySubPartition] : KeySubPartition;
    [SyntaxKind.ListPartitionDefinition] : ListPartitionDefinition;
    [SyntaxKind.ListPartition] : ListPartition;
    [SyntaxKind.PartitionDefinitionOptions] : PartitionDefinitionOptions;
    [SyntaxKind.RangePartitionDefinition] : RangePartitionDefinition;
    [SyntaxKind.RangePartition] : RangePartition;
    [SyntaxKind.SubPartitionDefinition] : SubPartitionDefinition;
    [SyntaxKind.AsteriskSelectItem] : AsteriskSelectItem;
    [SyntaxKind.Limit] : Limit;
    [SyntaxKind.OrderExpr] : OrderExpr;
    [SyntaxKind.SelectItem] : SelectItem;
    [SyntaxKind.SelectOptions] : SelectOptions;
    [SyntaxKind.Select] : Select;
    [SyntaxKind.TableAsteriskSelectItem] : TableAsteriskSelectItem;
    [SyntaxKind.UnionOrderLimit] : UnionOrderLimit;
    [SyntaxKind.Union] : Union;
    [SyntaxKind.WhereClause] : WhereClause;
    [SyntaxKind.UnknownStatement] : UnknownStatement;
} & Record<SyntaxKind, unknown>;
