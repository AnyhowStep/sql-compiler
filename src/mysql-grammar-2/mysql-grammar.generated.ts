
import {Rule, TopLevelRuleModifier, GrammarConfig} from "../grammar-builder";

export interface MySqlRuleCollection {
    SourceFile : Rule|TopLevelRuleModifier,
    LeadingStatement : Rule|TopLevelRuleModifier,
    TrailingStatement : Rule|TopLevelRuleModifier,
    StatementTail : Rule|TopLevelRuleModifier,
    Statement : Rule|TopLevelRuleModifier,
    DelimiterStatement : Rule|TopLevelRuleModifier,
    BinLogStatement : Rule|TopLevelRuleModifier,
    CreateSchemaStatement : Rule|TopLevelRuleModifier,
    CreateTableStatement : Rule|TopLevelRuleModifier,
    SelectStatement : Rule|TopLevelRuleModifier,
    Alias : Rule|TopLevelRuleModifier,
    Select : Rule|TopLevelRuleModifier,
    ParenthesizedSelect : Rule|TopLevelRuleModifier,
    ExpressionSelectItem : Rule|TopLevelRuleModifier,
    SelectItemList1 : Rule|TopLevelRuleModifier,
    CreateTableDefinition : Rule|TopLevelRuleModifier,
    CreateTableDefinitionTuple1 : Rule|TopLevelRuleModifier,
    CreateTableOption : Rule|TopLevelRuleModifier,
    CreateTableOptionSemiList1 : Rule|TopLevelRuleModifier,
    Partition : Rule|TopLevelRuleModifier,
    CreateSchemaOption : Rule|TopLevelRuleModifier,
    CreateSchemaOptionRepeat1 : Rule|TopLevelRuleModifier,
    DefaultCharacterSet : Rule|TopLevelRuleModifier,
    DefaultCollate : Rule|TopLevelRuleModifier,
    CollateExplicit : Rule|TopLevelRuleModifier,
    CharacterSetName : Rule|TopLevelRuleModifier,
    CharacterSetNameOrDefault : Rule|TopLevelRuleModifier,
    CollationName : Rule|TopLevelRuleModifier,
    CollationNameOrDefault : Rule|TopLevelRuleModifier,
    CharSet : Rule|TopLevelRuleModifier,
    Schema : Rule|TopLevelRuleModifier,
    DropTableStatement : Rule|TopLevelRuleModifier,
    DataType : Rule|TopLevelRuleModifier,
    BinaryDataType : Rule|TopLevelRuleModifier,
    VarBinaryDataType : Rule|TopLevelRuleModifier,
    BitDataType : Rule|TopLevelRuleModifier,
    BlobDataType : Rule|TopLevelRuleModifier,
    LongVarBinaryDataType : Rule|TopLevelRuleModifier,
    BooleanDataType : Rule|TopLevelRuleModifier,
    CharacterDataType : Rule|TopLevelRuleModifier,
    NCharDataType : Rule|TopLevelRuleModifier,
    CharDataType : Rule|TopLevelRuleModifier,
    NVarCharDataType : Rule|TopLevelRuleModifier,
    VarCharDataType : Rule|TopLevelRuleModifier,
    Char : Rule|TopLevelRuleModifier,
    VarChar : Rule|TopLevelRuleModifier,
    DateDataType : Rule|TopLevelRuleModifier,
    DateTimeDataType : Rule|TopLevelRuleModifier,
    DecimalDataType : Rule|TopLevelRuleModifier,
    EnumDataType : Rule|TopLevelRuleModifier,
    GeometryCollectionDataType : Rule|TopLevelRuleModifier,
    GeometryDataType : Rule|TopLevelRuleModifier,
    IntegerDataType : Rule|TopLevelRuleModifier,
    JsonDataType : Rule|TopLevelRuleModifier,
    RealDataType : Rule|TopLevelRuleModifier,
    FloatDataType : Rule|TopLevelRuleModifier,
    SetDataType : Rule|TopLevelRuleModifier,
    TextDataType : Rule|TopLevelRuleModifier,
    LongVarCharDataType : Rule|TopLevelRuleModifier,
    TimeDataType : Rule|TopLevelRuleModifier,
    TimestampDataType : Rule|TopLevelRuleModifier,
    YearDataType : Rule|TopLevelRuleModifier,
    IntegerDataTypeOption : Rule|TopLevelRuleModifier,
    IntegerDataTypeOptionRepeat1 : Rule|TopLevelRuleModifier,
    CharacterDataTypeOption : Rule|TopLevelRuleModifier,
    CharacterDataTypeOptionAscii : Rule|TopLevelRuleModifier,
    CharacterDataTypeOptionUnicode : Rule|TopLevelRuleModifier,
    CharacterDataTypeOptionCharacterSet : Rule|TopLevelRuleModifier,
    CharacterDataTypeOptionByte : Rule|TopLevelRuleModifier,
    CharacterDataTypeOptionBinary : Rule|TopLevelRuleModifier,
    FieldLength : Rule|TopLevelRuleModifier,
    DecimalPrecision : Rule|TopLevelRuleModifier,
    RealPrecision : Rule|TopLevelRuleModifier,
    ColumnDefinition : Rule|TopLevelRuleModifier,
    NonGeneratedColumnDefinition : Rule|TopLevelRuleModifier,
    GeneratedColumnDefinition : Rule|TopLevelRuleModifier,
    ColumnDefinitionOption : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionNull : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionNotNull : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionDefaultValue : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionOnUpdate : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionAutoIncrement : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionSerialDefaultValue : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionPrimaryKey : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionUnique : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionUniqueKey : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionComment : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionCollate : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionColumnFormat : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionStorage : Rule|TopLevelRuleModifier,
    ColumnDefinitionOptionRepeat1 : Rule|TopLevelRuleModifier,
    GeneratedAlways : Rule|TopLevelRuleModifier,
    IndexDefinition : Rule|TopLevelRuleModifier,
    CheckDefinition : Rule|TopLevelRuleModifier,
    PrimaryKeyDefinition : Rule|TopLevelRuleModifier,
    ForeignKeyDefinition : Rule|TopLevelRuleModifier,
    CreateTableOptionEngine : Rule|TopLevelRuleModifier,
    CreateTableOptionMaxRows : Rule|TopLevelRuleModifier,
    CreateTableOptionMinRows : Rule|TopLevelRuleModifier,
    CreateTableOptionAverageRowLength : Rule|TopLevelRuleModifier,
    CreateTableOptionPassword : Rule|TopLevelRuleModifier,
    CreateTableOptionComment : Rule|TopLevelRuleModifier,
    CreateTableOptionCompression : Rule|TopLevelRuleModifier,
    CreateTableOptionEncryption : Rule|TopLevelRuleModifier,
    CreateTableOptionAutoIncrement : Rule|TopLevelRuleModifier,
    CreateTableOptionPackKeys : Rule|TopLevelRuleModifier,
    CreateTableOptionStatsAutoRecalc : Rule|TopLevelRuleModifier,
    CreateTableOptionStatsPersistent : Rule|TopLevelRuleModifier,
    CreateTableOptionStatsSamplePages : Rule|TopLevelRuleModifier,
    CreateTableOptionChecksum : Rule|TopLevelRuleModifier,
    CreateTableOptionDelayKeyWrite : Rule|TopLevelRuleModifier,
    CreateTableOptionRowFormat : Rule|TopLevelRuleModifier,
    RowFormat : Rule|TopLevelRuleModifier,
    CreateTableOptionUnion : Rule|TopLevelRuleModifier,
    CreateTableOptionInsertMethod : Rule|TopLevelRuleModifier,
    InsertMethod : Rule|TopLevelRuleModifier,
    CreateTableOptionDataDirectory : Rule|TopLevelRuleModifier,
    CreateTableOptionIndexDirectory : Rule|TopLevelRuleModifier,
    CreateTableOptionTablespace : Rule|TopLevelRuleModifier,
    CreateTableOptionStorage : Rule|TopLevelRuleModifier,
    Storage : Rule|TopLevelRuleModifier,
    CreateTableOptionConnection : Rule|TopLevelRuleModifier,
    CreateTableOptionKeyBlockSize : Rule|TopLevelRuleModifier,
    HashPartition : Rule|TopLevelRuleModifier,
    KeyPartition : Rule|TopLevelRuleModifier,
    ListPartition : Rule|TopLevelRuleModifier,
    ListPartitionByExpression : Rule|TopLevelRuleModifier,
    ListPartitionByColumn : Rule|TopLevelRuleModifier,
    ListPartitionByColumnTuple2 : Rule|TopLevelRuleModifier,
    SingletonListPartitionDefinition : Rule|TopLevelRuleModifier,
    SingletonListPartitionDefinitionTuple1 : Rule|TopLevelRuleModifier,
    MultitonListPartitionDefinition : Rule|TopLevelRuleModifier,
    MultitonListPartitionDefinitionTuple1 : Rule|TopLevelRuleModifier,
    SingletonRangePartitionDefinition : Rule|TopLevelRuleModifier,
    SingletonRangePartitionDefinitionTuple1 : Rule|TopLevelRuleModifier,
    ListPartitionDefinitionTuple1 : Rule|TopLevelRuleModifier,
    RangePartition : Rule|TopLevelRuleModifier,
    PartitionCount : Rule|TopLevelRuleModifier,
    SubPartitionCount : Rule|TopLevelRuleModifier,
    KeyAlgorithm : Rule|TopLevelRuleModifier,
    PartitionDefinitionOption : Rule|TopLevelRuleModifier,
    PartitionDefinitionOptionRepeat1 : Rule|TopLevelRuleModifier,
    SubPartitionDefinition : Rule|TopLevelRuleModifier,
    SubPartitionDefinitionTuple1 : Rule|TopLevelRuleModifier,
    PartitionDefinitionOptionEngine : Rule|TopLevelRuleModifier,
    PartitionDefinitionOptionMaxRows : Rule|TopLevelRuleModifier,
    PartitionDefinitionOptionMinRows : Rule|TopLevelRuleModifier,
    PartitionDefinitionOptionComment : Rule|TopLevelRuleModifier,
    PartitionDefinitionOptionDataDirectory : Rule|TopLevelRuleModifier,
    PartitionDefinitionOptionIndexDirectory : Rule|TopLevelRuleModifier,
    PartitionDefinitionOptionTablespace : Rule|TopLevelRuleModifier,
    PartitionDefinitionOptionNodeGroup : Rule|TopLevelRuleModifier,
    SubPartition : Rule|TopLevelRuleModifier,
    HashSubPartition : Rule|TopLevelRuleModifier,
    KeySubPartition : Rule|TopLevelRuleModifier,
    UserDefinedExpression : Rule|TopLevelRuleModifier,
    Expression : Rule|TopLevelRuleModifier,
    ParenthesizedExpression : Rule|TopLevelRuleModifier,
    IsExpression : Rule|TopLevelRuleModifier,
    NotExpression : Rule|TopLevelRuleModifier,
    BooleanPrimaryExpression : Rule|TopLevelRuleModifier,
    IsNullBooleanPrimaryExpression : Rule|TopLevelRuleModifier,
    ComparisonBooleanPrimaryExpression : Rule|TopLevelRuleModifier,
    ComparisonSubQueryBooleanPrimaryExpression : Rule|TopLevelRuleModifier,
    Predicate : Rule|TopLevelRuleModifier,
    InSubQueryPredicate : Rule|TopLevelRuleModifier,
    InExpressionTuple1Predicate : Rule|TopLevelRuleModifier,
    BetweenPredicate : Rule|TopLevelRuleModifier,
    SoundsLikePredicate : Rule|TopLevelRuleModifier,
    LikePredicate : Rule|TopLevelRuleModifier,
    RegExpPredicate : Rule|TopLevelRuleModifier,
    BitExpression : Rule|TopLevelRuleModifier,
    ParenthesizedBitExpression : Rule|TopLevelRuleModifier,
    SimpleExpression : Rule|TopLevelRuleModifier,
    ParenthesizedExpressionSimpleExpression : Rule|TopLevelRuleModifier,
    ColumnIdentifierSimpleExpression : Rule|TopLevelRuleModifier,
    ScopedSystemVariableIdentifier : Rule|TopLevelRuleModifier,
    UnscopedSystemVariableIdentifier : Rule|TopLevelRuleModifier,
    UserVariableIdentifier : Rule|TopLevelRuleModifier,
    ParamMarker : Rule|TopLevelRuleModifier,
    IntervalExpression : Rule|TopLevelRuleModifier,
    LikeEscape : Rule|TopLevelRuleModifier,
    ExpressionTuple1 : Rule|TopLevelRuleModifier,
    BitExpressionTuple1 : Rule|TopLevelRuleModifier,
    BitExpressionTuple1Tuple1 : Rule|TopLevelRuleModifier,
    SignedLiteral : Rule|TopLevelRuleModifier,
    Literal : Rule|TopLevelRuleModifier,
    TextLiteral : Rule|TopLevelRuleModifier,
    NumberLiteral : Rule|TopLevelRuleModifier,
    TemporalLiteral : Rule|TopLevelRuleModifier,
    UnderscoreCharacterSetHexLiteral : Rule|TopLevelRuleModifier,
    UnderscoreCharacterSetBitLiteral : Rule|TopLevelRuleModifier,
    UnderscoreCharacterSetStringLiteral : Rule|TopLevelRuleModifier,
    ConcatenatedTextLiteral : Rule|TopLevelRuleModifier,
    FunctionCall : Rule|TopLevelRuleModifier,
    MaybeUserDefinedFunctionCall : Rule|TopLevelRuleModifier,
    QualifiedFunctionCall : Rule|TopLevelRuleModifier,
    KeywordFunctionCall : Rule|TopLevelRuleModifier,
    NonKeywordFunctionCall : Rule|TopLevelRuleModifier,
    CharacterFunctionCall : Rule|TopLevelRuleModifier,
    CurrentUserFunctionCall : Rule|TopLevelRuleModifier,
    ExtractFromDateTimeFunctionCall : Rule|TopLevelRuleModifier,
    InsertFunctionCall : Rule|TopLevelRuleModifier,
    IntervalFunctionCall : Rule|TopLevelRuleModifier,
    LeftFunctionCall : Rule|TopLevelRuleModifier,
    RightFunctionCall : Rule|TopLevelRuleModifier,
    TimestampAddTimeFunctionCall : Rule|TopLevelRuleModifier,
    UserFunctionCall : Rule|TopLevelRuleModifier,
    AddDateFunctionCall : Rule|TopLevelRuleModifier,
    CurrentDateFunctionCall : Rule|TopLevelRuleModifier,
    CurrentTimeFunctionCall : Rule|TopLevelRuleModifier,
    DateAddIntervalFunctionCall : Rule|TopLevelRuleModifier,
    ExtractFunctionCall : Rule|TopLevelRuleModifier,
    GetFormatFunctionCall : Rule|TopLevelRuleModifier,
    PositionFunctionCall : Rule|TopLevelRuleModifier,
    SubstringFunctionCall : Rule|TopLevelRuleModifier,
    SysDateFunctionCall : Rule|TopLevelRuleModifier,
    TimestampAddFunctionCall : Rule|TopLevelRuleModifier,
    TimestampDiffFunctionCall : Rule|TopLevelRuleModifier,
    UtcDateFunctionCall : Rule|TopLevelRuleModifier,
    UtcTimeFunctionCall : Rule|TopLevelRuleModifier,
    UtcTimestampFunctionCall : Rule|TopLevelRuleModifier,
    Empty_Arguments : Rule|TopLevelRuleModifier,
    ExpressionList_Arguments : Rule|TopLevelRuleModifier,
    ExpressionList2_Arguments : Rule|TopLevelRuleModifier,
    UserDefinedExpressionList_Arguments : Rule|TopLevelRuleModifier,
    Expression1_Arguments : Rule|TopLevelRuleModifier,
    Expression2_Arguments : Rule|TopLevelRuleModifier,
    Expression4_Arguments : Rule|TopLevelRuleModifier,
    Character_Arguments : Rule|TopLevelRuleModifier,
    UsingCharacterSetName : Rule|TopLevelRuleModifier,
    DateAdd_Arguments : Rule|TopLevelRuleModifier,
    Extract_Arguments : Rule|TopLevelRuleModifier,
    GetFormat_Arguments : Rule|TopLevelRuleModifier,
    Position_Arguments : Rule|TopLevelRuleModifier,
    TimestampAdd_Arguments : Rule|TopLevelRuleModifier,
    TimestampDiff_Arguments : Rule|TopLevelRuleModifier,
    Trim_RemoveStringExpression : Rule|TopLevelRuleModifier,
    Trim_RemoveSpaceExpression : Rule|TopLevelRuleModifier,
    Trim_Arguments : Rule|TopLevelRuleModifier,
    Substring_Arguments : Rule|TopLevelRuleModifier,
    ForLength : Rule|TopLevelRuleModifier,
    Now : Rule|TopLevelRuleModifier,
    DateTimePrecisionArg : Rule|TopLevelRuleModifier,
    TextString : Rule|TopLevelRuleModifier,
    TextStringTuple1 : Rule|TopLevelRuleModifier,
    DropMode : Rule|TopLevelRuleModifier,
    IfExists : Rule|TopLevelRuleModifier,
    IfNotExists : Rule|TopLevelRuleModifier,
    Ident : Rule|TopLevelRuleModifier,
    IdentOrReserved : Rule|TopLevelRuleModifier,
    TableIdentifier : Rule|TopLevelRuleModifier,
    ColumnIdentifier : Rule|TopLevelRuleModifier,
    ParenthesizedIdent : Rule|TopLevelRuleModifier,
    IdentTuple1 : Rule|TopLevelRuleModifier,
    IdentTuple2 : Rule|TopLevelRuleModifier,
    TableIdentifierTuple : Rule|TopLevelRuleModifier,
    TableIdentifierList1 : Rule|TopLevelRuleModifier
}
export interface MySqlGrammar extends GrammarConfig {
    rules : MySqlRuleCollection;
}
