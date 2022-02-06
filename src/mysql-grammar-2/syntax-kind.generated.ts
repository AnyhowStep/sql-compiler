
export enum SyntaxKind {
    SourceFile = "SourceFile",
    LeadingStatement = "LeadingStatement",
    TrailingStatement = "TrailingStatement",
    StatementTail = "StatementTail",
    Statement = "Statement",
    DelimiterStatement = "DelimiterStatement",
    BinLogStatement = "BinLogStatement",
    CreateSchemaStatement = "CreateSchemaStatement",
    CreateTableStatement = "CreateTableStatement",
    CreateTableLikeStatement = "CreateTableLikeStatement",
    CreateTableLikeStatement2 = "CreateTableLikeStatement2",
    SelectStatement = "SelectStatement",
    Alias = "Alias",
    Select = "Select",
    ParenthesizedSelect = "ParenthesizedSelect",
    ExpressionSelectItem = "ExpressionSelectItem",
    SelectItemList1 = "SelectItemList1",
    CreateTableDefinition = "CreateTableDefinition",
    CreateTableDefinitionTuple1 = "CreateTableDefinitionTuple1",
    CreateTableOption = "CreateTableOption",
    CreateTableOptionSemiList1 = "CreateTableOptionSemiList1",
    Partition = "Partition",
    CreateSchemaOption = "CreateSchemaOption",
    CreateSchemaOptionRepeat1 = "CreateSchemaOptionRepeat1",
    DefaultCharacterSet = "DefaultCharacterSet",
    DefaultCollate = "DefaultCollate",
    CollateExplicit = "CollateExplicit",
    CharacterSetName = "CharacterSetName",
    CharacterSetNameOrDefault = "CharacterSetNameOrDefault",
    CollationName = "CollationName",
    CollationNameOrDefault = "CollationNameOrDefault",
    CharSet = "CharSet",
    Schema = "Schema",
    DropTableStatement = "DropTableStatement",
    DataType = "DataType",
    BinaryDataType = "BinaryDataType",
    VarBinaryDataType = "VarBinaryDataType",
    BitDataType = "BitDataType",
    BlobDataType = "BlobDataType",
    LongVarBinaryDataType = "LongVarBinaryDataType",
    BooleanDataType = "BooleanDataType",
    CharacterDataType = "CharacterDataType",
    NCharDataType = "NCharDataType",
    CharDataType = "CharDataType",
    NVarCharDataType = "NVarCharDataType",
    VarCharDataType = "VarCharDataType",
    Char = "Char",
    VarChar = "VarChar",
    DateDataType = "DateDataType",
    DateTimeDataType = "DateTimeDataType",
    DecimalDataType = "DecimalDataType",
    EnumDataType = "EnumDataType",
    GeometryCollectionDataType = "GeometryCollectionDataType",
    GeometryDataType = "GeometryDataType",
    IntegerDataType = "IntegerDataType",
    JsonDataType = "JsonDataType",
    RealDataType = "RealDataType",
    FloatDataType = "FloatDataType",
    SetDataType = "SetDataType",
    TextDataType = "TextDataType",
    LongVarCharDataType = "LongVarCharDataType",
    TimeDataType = "TimeDataType",
    TimestampDataType = "TimestampDataType",
    YearDataType = "YearDataType",
    IntegerDataTypeOption = "IntegerDataTypeOption",
    IntegerDataTypeOptionRepeat1 = "IntegerDataTypeOptionRepeat1",
    CharacterDataTypeOption = "CharacterDataTypeOption",
    CharacterDataTypeOptionAscii = "CharacterDataTypeOptionAscii",
    CharacterDataTypeOptionUnicode = "CharacterDataTypeOptionUnicode",
    CharacterDataTypeOptionCharacterSet = "CharacterDataTypeOptionCharacterSet",
    CharacterDataTypeOptionByte = "CharacterDataTypeOptionByte",
    CharacterDataTypeOptionBinary = "CharacterDataTypeOptionBinary",
    FieldLength = "FieldLength",
    DecimalPrecision = "DecimalPrecision",
    RealPrecision = "RealPrecision",
    ColumnDefinition = "ColumnDefinition",
    NonGeneratedColumnDefinition = "NonGeneratedColumnDefinition",
    GeneratedColumnDefinition = "GeneratedColumnDefinition",
    ColumnDefinitionOption = "ColumnDefinitionOption",
    ColumnDefinitionOptionNull = "ColumnDefinitionOptionNull",
    ColumnDefinitionOptionNotNull = "ColumnDefinitionOptionNotNull",
    ColumnDefinitionOptionDefaultValue = "ColumnDefinitionOptionDefaultValue",
    ColumnDefinitionOptionOnUpdate = "ColumnDefinitionOptionOnUpdate",
    ColumnDefinitionOptionAutoIncrement = "ColumnDefinitionOptionAutoIncrement",
    ColumnDefinitionOptionSerialDefaultValue = "ColumnDefinitionOptionSerialDefaultValue",
    ColumnDefinitionOptionPrimaryKey = "ColumnDefinitionOptionPrimaryKey",
    ColumnDefinitionOptionUnique = "ColumnDefinitionOptionUnique",
    ColumnDefinitionOptionUniqueKey = "ColumnDefinitionOptionUniqueKey",
    ColumnDefinitionOptionComment = "ColumnDefinitionOptionComment",
    ColumnDefinitionOptionCollate = "ColumnDefinitionOptionCollate",
    ColumnDefinitionOptionColumnFormat = "ColumnDefinitionOptionColumnFormat",
    ColumnDefinitionOptionStorage = "ColumnDefinitionOptionStorage",
    ColumnDefinitionOptionRepeat1 = "ColumnDefinitionOptionRepeat1",
    GeneratedAlways = "GeneratedAlways",
    IndexDefinition = "IndexDefinition",
    CheckDefinition = "CheckDefinition",
    PrimaryKeyDefinition = "PrimaryKeyDefinition",
    ForeignKeyDefinition = "ForeignKeyDefinition",
    CreateTableOptionEngine = "CreateTableOptionEngine",
    CreateTableOptionMaxRows = "CreateTableOptionMaxRows",
    CreateTableOptionMinRows = "CreateTableOptionMinRows",
    CreateTableOptionAverageRowLength = "CreateTableOptionAverageRowLength",
    CreateTableOptionPassword = "CreateTableOptionPassword",
    CreateTableOptionComment = "CreateTableOptionComment",
    CreateTableOptionCompression = "CreateTableOptionCompression",
    CreateTableOptionEncryption = "CreateTableOptionEncryption",
    CreateTableOptionAutoIncrement = "CreateTableOptionAutoIncrement",
    CreateTableOptionPackKeys = "CreateTableOptionPackKeys",
    CreateTableOptionStatsAutoRecalc = "CreateTableOptionStatsAutoRecalc",
    CreateTableOptionStatsPersistent = "CreateTableOptionStatsPersistent",
    CreateTableOptionStatsSamplePages = "CreateTableOptionStatsSamplePages",
    CreateTableOptionChecksum = "CreateTableOptionChecksum",
    CreateTableOptionDelayKeyWrite = "CreateTableOptionDelayKeyWrite",
    CreateTableOptionRowFormat = "CreateTableOptionRowFormat",
    RowFormat = "RowFormat",
    CreateTableOptionUnion = "CreateTableOptionUnion",
    CreateTableOptionInsertMethod = "CreateTableOptionInsertMethod",
    InsertMethod = "InsertMethod",
    CreateTableOptionDataDirectory = "CreateTableOptionDataDirectory",
    CreateTableOptionIndexDirectory = "CreateTableOptionIndexDirectory",
    CreateTableOptionTablespace = "CreateTableOptionTablespace",
    CreateTableOptionStorage = "CreateTableOptionStorage",
    Storage = "Storage",
    CreateTableOptionConnection = "CreateTableOptionConnection",
    CreateTableOptionKeyBlockSize = "CreateTableOptionKeyBlockSize",
    HashPartition = "HashPartition",
    KeyPartition = "KeyPartition",
    ListPartition = "ListPartition",
    ListPartitionByExpression = "ListPartitionByExpression",
    ListPartitionByColumn = "ListPartitionByColumn",
    ListPartitionByColumnTuple2 = "ListPartitionByColumnTuple2",
    SingletonListPartitionDefinition = "SingletonListPartitionDefinition",
    SingletonListPartitionDefinitionTuple1 = "SingletonListPartitionDefinitionTuple1",
    MultitonListPartitionDefinition = "MultitonListPartitionDefinition",
    MultitonListPartitionDefinitionTuple1 = "MultitonListPartitionDefinitionTuple1",
    SingletonRangePartitionDefinition = "SingletonRangePartitionDefinition",
    SingletonRangePartitionDefinitionTuple1 = "SingletonRangePartitionDefinitionTuple1",
    ListPartitionDefinitionTuple1 = "ListPartitionDefinitionTuple1",
    RangePartition = "RangePartition",
    ParenthesizedMaxValue = "ParenthesizedMaxValue",
    PartitionCount = "PartitionCount",
    SubPartitionCount = "SubPartitionCount",
    KeyAlgorithm = "KeyAlgorithm",
    PartitionDefinitionOption = "PartitionDefinitionOption",
    PartitionDefinitionOptionRepeat1 = "PartitionDefinitionOptionRepeat1",
    SubPartitionDefinition = "SubPartitionDefinition",
    SubPartitionDefinitionTuple1 = "SubPartitionDefinitionTuple1",
    PartitionDefinitionOptionEngine = "PartitionDefinitionOptionEngine",
    PartitionDefinitionOptionMaxRows = "PartitionDefinitionOptionMaxRows",
    PartitionDefinitionOptionMinRows = "PartitionDefinitionOptionMinRows",
    PartitionDefinitionOptionComment = "PartitionDefinitionOptionComment",
    PartitionDefinitionOptionDataDirectory = "PartitionDefinitionOptionDataDirectory",
    PartitionDefinitionOptionIndexDirectory = "PartitionDefinitionOptionIndexDirectory",
    PartitionDefinitionOptionTablespace = "PartitionDefinitionOptionTablespace",
    PartitionDefinitionOptionNodeGroup = "PartitionDefinitionOptionNodeGroup",
    SubPartition = "SubPartition",
    HashSubPartition = "HashSubPartition",
    KeySubPartition = "KeySubPartition",
    UserDefinedExpression = "UserDefinedExpression",
    Expression = "Expression",
    ParenthesizedExpression = "ParenthesizedExpression",
    IsExpression = "IsExpression",
    NotExpression = "NotExpression",
    BooleanPrimaryExpression = "BooleanPrimaryExpression",
    IsNullBooleanPrimaryExpression = "IsNullBooleanPrimaryExpression",
    ComparisonBooleanPrimaryExpression = "ComparisonBooleanPrimaryExpression",
    ComparisonSubQueryBooleanPrimaryExpression = "ComparisonSubQueryBooleanPrimaryExpression",
    Predicate = "Predicate",
    InSubQueryPredicate = "InSubQueryPredicate",
    InExpressionTuple1Predicate = "InExpressionTuple1Predicate",
    BetweenPredicate = "BetweenPredicate",
    SoundsLikePredicate = "SoundsLikePredicate",
    LikePredicate = "LikePredicate",
    RegExpPredicate = "RegExpPredicate",
    BitExpression = "BitExpression",
    ParenthesizedBitExpression = "ParenthesizedBitExpression",
    SimpleExpression = "SimpleExpression",
    ParenthesizedExpressionSimpleExpression = "ParenthesizedExpressionSimpleExpression",
    ColumnIdentifierSimpleExpression = "ColumnIdentifierSimpleExpression",
    ScopedSystemVariableIdentifier = "ScopedSystemVariableIdentifier",
    UnscopedSystemVariableIdentifier = "UnscopedSystemVariableIdentifier",
    UserVariableIdentifier = "UserVariableIdentifier",
    UserVariableIdentifierAssignment = "UserVariableIdentifierAssignment",
    ParamMarker = "ParamMarker",
    IntervalExpression = "IntervalExpression",
    TemporalUnitTimeStamp = "TemporalUnitTimeStamp",
    TemporalUnit = "TemporalUnit",
    LikeEscape = "LikeEscape",
    ExpressionTuple1 = "ExpressionTuple1",
    BitExpressionTuple1 = "BitExpressionTuple1",
    BitExpressionTuple1Tuple1 = "BitExpressionTuple1Tuple1",
    IntervalExpressionPlus = "IntervalExpressionPlus",
    Not2SimpleExpression = "Not2SimpleExpression",
    PrefixSimpleExpression = "PrefixSimpleExpression",
    CollateSimpleExpression = "CollateSimpleExpression",
    Not = "Not",
    SignedLiteral = "SignedLiteral",
    Literal = "Literal",
    TextLiteral = "TextLiteral",
    NumberLiteral = "NumberLiteral",
    TemporalLiteral = "TemporalLiteral",
    UnderscoreCharacterSetHexLiteral = "UnderscoreCharacterSetHexLiteral",
    UnderscoreCharacterSetBitLiteral = "UnderscoreCharacterSetBitLiteral",
    UnderscoreCharacterSetStringLiteral = "UnderscoreCharacterSetStringLiteral",
    ConcatenatedTextLiteral = "ConcatenatedTextLiteral",
    FunctionCall = "FunctionCall",
    MaybeUserDefinedFunctionCall = "MaybeUserDefinedFunctionCall",
    QualifiedFunctionCall = "QualifiedFunctionCall",
    KeywordFunctionCall = "KeywordFunctionCall",
    NonKeywordFunctionCall = "NonKeywordFunctionCall",
    ConflictFunctionCall = "ConflictFunctionCall",
    CharacterFunctionCall = "CharacterFunctionCall",
    CurrentUserFunctionCall = "CurrentUserFunctionCall",
    ExtractFromDateTimeFunctionCall = "ExtractFromDateTimeFunctionCall",
    InsertFunctionCall = "InsertFunctionCall",
    IntervalFunctionCall = "IntervalFunctionCall",
    LeftFunctionCall = "LeftFunctionCall",
    RightFunctionCall = "RightFunctionCall",
    TimestampFunctionCall = "TimestampFunctionCall",
    TrimFunctionCall = "TrimFunctionCall",
    UserFunctionCall = "UserFunctionCall",
    AddDateFunctionCall = "AddDateFunctionCall",
    CurrentDateFunctionCall = "CurrentDateFunctionCall",
    CurrentTimeFunctionCall = "CurrentTimeFunctionCall",
    DateAddIntervalFunctionCall = "DateAddIntervalFunctionCall",
    ExtractFunctionCall = "ExtractFunctionCall",
    GetFormatFunctionCall = "GetFormatFunctionCall",
    PositionFunctionCall = "PositionFunctionCall",
    SubstringFunctionCall = "SubstringFunctionCall",
    SysDateFunctionCall = "SysDateFunctionCall",
    TimestampAddFunctionCall = "TimestampAddFunctionCall",
    TimestampDiffFunctionCall = "TimestampDiffFunctionCall",
    UtcDateFunctionCall = "UtcDateFunctionCall",
    UtcTimeFunctionCall = "UtcTimeFunctionCall",
    UtcTimestampFunctionCall = "UtcTimestampFunctionCall",
    AsciiFunctionCall = "AsciiFunctionCall",
    CharSetFunctionCall = "CharSetFunctionCall",
    CoalesceFunctionCall = "CoalesceFunctionCall",
    CollationFunctionCall = "CollationFunctionCall",
    SchemaFunctionCall = "SchemaFunctionCall",
    IfFunctionCall = "IfFunctionCall",
    FormatFunctionCall = "FormatFunctionCall",
    MicrosecondFunctionCall = "MicrosecondFunctionCall",
    ModFunctionCall = "ModFunctionCall",
    PasswordFunctionCall = "PasswordFunctionCall",
    QuarterFunctionCall = "QuarterFunctionCall",
    RepeatFunctionCall = "RepeatFunctionCall",
    ReplaceFunctionCall = "ReplaceFunctionCall",
    ReverseFunctionCall = "ReverseFunctionCall",
    RowCountFunctionCall = "RowCountFunctionCall",
    TruncateFunctionCall = "TruncateFunctionCall",
    WeekFunctionCall = "WeekFunctionCall",
    WeightStringFunctionCall = "WeightStringFunctionCall",
    ContainsFunctionCall = "ContainsFunctionCall",
    GeometryCollectionFunctionCall = "GeometryCollectionFunctionCall",
    LineStringFunctionCall = "LineStringFunctionCall",
    MultiLineStringFunctionCall = "MultiLineStringFunctionCall",
    MultiPointFunctionCall = "MultiPointFunctionCall",
    MultiPolygonFunctionCall = "MultiPolygonFunctionCall",
    PointFunctionCall = "PointFunctionCall",
    PolygonFunctionCall = "PolygonFunctionCall",
    AggregateFunctionCall = "AggregateFunctionCall",
    NumberAggregateFunctionCall = "NumberAggregateFunctionCall",
    BitAggregateFunctionCall = "BitAggregateFunctionCall",
    StatisticalAggregateFunctionCall = "StatisticalAggregateFunctionCall",
    JsonObjectAggregateFunctionCall = "JsonObjectAggregateFunctionCall",
    JsonArrayAggregateFunctionCall = "JsonArrayAggregateFunctionCall",
    CountAggregateFunctionCall = "CountAggregateFunctionCall",
    Empty_Arguments = "Empty_Arguments",
    ExpressionList_ArgumentsImpl = "ExpressionList_ArgumentsImpl",
    ExpressionList_Arguments_NoExpectImpl = "ExpressionList_Arguments_NoExpectImpl",
    ExpressionList_Arguments = "ExpressionList_Arguments",
    ExpressionList_Arguments_NoExpect = "ExpressionList_Arguments_NoExpect",
    ExpressionList1_Arguments = "ExpressionList1_Arguments",
    ExpressionList2_Arguments = "ExpressionList2_Arguments",
    ExpressionList2_Arguments_NoExpect = "ExpressionList2_Arguments_NoExpect",
    UserDefinedExpressionList_Arguments = "UserDefinedExpressionList_Arguments",
    Expression1_Arguments = "Expression1_Arguments",
    Expression2_Arguments = "Expression2_Arguments",
    Expression3_Arguments = "Expression3_Arguments",
    Expression4_Arguments = "Expression4_Arguments",
    Expression1To2_Arguments = "Expression1To2_Arguments",
    Expression2To3_Arguments = "Expression2To3_Arguments",
    Character_Arguments = "Character_Arguments",
    UsingCharacterSetName = "UsingCharacterSetName",
    DateAddInterval_Arguments = "DateAddInterval_Arguments",
    Extract_Arguments = "Extract_Arguments",
    GetFormat_Arguments = "GetFormat_Arguments",
    Position_Arguments = "Position_Arguments",
    TimestampAdd_Arguments = "TimestampAdd_Arguments",
    TimestampDiff_Arguments = "TimestampDiff_Arguments",
    Trim_RemoveStringExpression = "Trim_RemoveStringExpression",
    Trim_RemoveSpaceExpression = "Trim_RemoveSpaceExpression",
    Trim_Arguments = "Trim_Arguments",
    Substring_Arguments = "Substring_Arguments",
    Substring_Arguments_From = "Substring_Arguments_From",
    Substring_Arguments_Comma = "Substring_Arguments_Comma",
    ForLength = "ForLength",
    WeightString_Arguments = "WeightString_Arguments",
    WeightString_Arguments_Default = "WeightString_Arguments_Default",
    WeightString_Arguments_AsChar = "WeightString_Arguments_AsChar",
    WeightString_Arguments_AsBinary = "WeightString_Arguments_AsBinary",
    WeightString_Arguments_Undocumented = "WeightString_Arguments_Undocumented",
    WeightStringCastLength = "WeightStringCastLength",
    WeightString_Levels = "WeightString_Levels",
    WeightString_Level_List1 = "WeightString_Level_List1",
    WeightString_Level_Range = "WeightString_Level_Range",
    WeightString_Level_Flag = "WeightString_Level_Flag",
    WeightString_Level_Item = "WeightString_Level_Item",
    NumberAggregate_Arguments_Expression = "NumberAggregate_Arguments_Expression",
    NumberAggregate_Arguments = "NumberAggregate_Arguments",
    Aggregate_Arguments_Expression = "Aggregate_Arguments_Expression",
    Aggregate_Arguments = "Aggregate_Arguments",
    JsonObjectAggregate_Arguments = "JsonObjectAggregate_Arguments",
    CountAggregate_Arguments_All_Expression = "CountAggregate_Arguments_All_Expression",
    CountAggregate_Arguments_All = "CountAggregate_Arguments_All",
    CountAggregate_Arguments_Distinct = "CountAggregate_Arguments_Distinct",
    CountAggregate_Arguments = "CountAggregate_Arguments",
    Now = "Now",
    DateTimePrecisionArg = "DateTimePrecisionArg",
    TextString = "TextString",
    TextStringTuple1 = "TextStringTuple1",
    DropMode = "DropMode",
    IfExists = "IfExists",
    IfNotExists = "IfNotExists",
    Ident = "Ident",
    IdentOrReserved = "IdentOrReserved",
    TableIdentifier = "TableIdentifier",
    ColumnIdentifier = "ColumnIdentifier",
    ParenthesizedIdent = "ParenthesizedIdent",
    IdentTuple1 = "IdentTuple1",
    IdentTuple2 = "IdentTuple2",
    TableIdentifierTuple = "TableIdentifierTuple",
    TableIdentifierList1 = "TableIdentifierList1",
    ColonEqual = "ColonEqual"
}
