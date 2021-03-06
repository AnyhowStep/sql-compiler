export const syntaxKinds = [
    "SourceFile",

    "LeadingStatement",
    "TrailingStatement",
    "StatementTail",

    "Statement",
    "DelimiterStatement",
    "BinLogStatement",
    "CreateSchemaStatement",
    "CreateTableStatement",
    "SelectStatement",

    "Alias",
    "Select",
    "ParenthesizedSelect",
    "ExpressionSelectItem",
    "SelectItemList1",

    "CreateTableDefinition",
    "CreateTableDefinitionTuple1",
    "CreateTableOption",
    "CreateTableOptionSemiList1",
    "Partition",

    "CreateSchemaOption",
    "CreateSchemaOptionRepeat1",
    "DefaultCharacterSet",
    "DefaultCollate",
    "CollateExplicit",
    "CharacterSetName",
    "CharacterSetNameOrDefault",
    "CollationName",
    "CollationNameOrDefault",
    "CharSet",
    "Schema",

    "DropTableStatement",

    "DataType",
    "BinaryDataType",
    "VarBinaryDataType",
    "BitDataType",
    "BlobDataType",
    "LongVarBinaryDataType",
    "BooleanDataType",
    "CharacterDataType",
    "NCharDataType",
    "CharDataType",
    "NVarCharDataType",
    "VarCharDataType",
    "Char",
    "VarChar",
    "DateDataType",
    "DateTimeDataType",
    "DecimalDataType",
    "EnumDataType",
    "GeometryCollectionDataType",
    "GeometryDataType",
    "IntegerDataType",
    "JsonDataType",
    "RealDataType",
    "FloatDataType",
    "SetDataType",
    "TextDataType",
    "LongVarCharDataType",
    "TimeDataType",
    "TimestampDataType",
    "YearDataType",

    "IntegerDataTypeOption",
    "IntegerDataTypeOptionRepeat1",

    "CharacterDataTypeOption",
    "CharacterDataTypeOptionAscii",
    "CharacterDataTypeOptionUnicode",
    "CharacterDataTypeOptionCharacterSet",
    "CharacterDataTypeOptionByte",
    "CharacterDataTypeOptionBinary",

    "FieldLength",
    "DecimalPrecision",
    "RealPrecision",

    "ColumnDefinition",
    "NonGeneratedColumnDefinition",
    "GeneratedColumnDefinition",
    "ColumnDefinitionOption",
    "ColumnDefinitionOptionNull",
    "ColumnDefinitionOptionNotNull",
    "ColumnDefinitionOptionDefaultValue",
    "ColumnDefinitionOptionOnUpdate",
    "ColumnDefinitionOptionAutoIncrement",
    "ColumnDefinitionOptionSerialDefaultValue",
    "ColumnDefinitionOptionPrimaryKey",
    "ColumnDefinitionOptionUnique",
    "ColumnDefinitionOptionUniqueKey",
    "ColumnDefinitionOptionComment",
    "ColumnDefinitionOptionCollate",
    "ColumnDefinitionOptionColumnFormat",
    "ColumnDefinitionOptionStorage",
    "ColumnDefinitionOptionRepeat1",
    "GeneratedAlways",
    "IndexDefinition",
    "CheckDefinition",
    "PrimaryKeyDefinition",
    "ForeignKeyDefinition",


    "CreateTableOptionEngine",
    "CreateTableOptionMaxRows",
    "CreateTableOptionMinRows",
    "CreateTableOptionAverageRowLength",
    "CreateTableOptionPassword",
    "CreateTableOptionComment",
    "CreateTableOptionCompression",
    "CreateTableOptionEncryption",
    "CreateTableOptionAutoIncrement",
    "CreateTableOptionPackKeys",
    "CreateTableOptionStatsAutoRecalc",
    "CreateTableOptionStatsPersistent",
    "CreateTableOptionStatsSamplePages",
    "CreateTableOptionChecksum",
    "CreateTableOptionDelayKeyWrite",
    "CreateTableOptionRowFormat",
    "RowFormat",
    "CreateTableOptionUnion",
    "CreateTableOptionInsertMethod",
    "InsertMethod",
    "CreateTableOptionDataDirectory",
    "CreateTableOptionIndexDirectory",
    "CreateTableOptionTablespace",
    "CreateTableOptionStorage",
    "Storage",
    "CreateTableOptionConnection",
    "CreateTableOptionKeyBlockSize",

    "HashPartition",
    "KeyPartition",
    "ListPartition",
    "ListPartitionByExpression",
    "ListPartitionByColumn",
    "ListPartitionByColumnTuple2",
    "SingletonListPartitionDefinition",
    "SingletonListPartitionDefinitionTuple1",
    "MultitonListPartitionDefinition",
    "MultitonListPartitionDefinitionTuple1",
    "SingletonRangePartitionDefinition",
    "SingletonRangePartitionDefinitionTuple1",
    "ListPartitionDefinitionTuple1",
    "RangePartition",
    "ParenthesizedMaxValue",

    "PartitionCount",
    "SubPartitionCount",
    "KeyAlgorithm",

    "PartitionDefinitionOption",
    "PartitionDefinitionOptionRepeat1",

    "SubPartitionDefinition",
    "SubPartitionDefinitionTuple1",

    "PartitionDefinitionOptionEngine",
    "PartitionDefinitionOptionMaxRows",
    "PartitionDefinitionOptionMinRows",
    "PartitionDefinitionOptionComment",
    "PartitionDefinitionOptionDataDirectory",
    "PartitionDefinitionOptionIndexDirectory",
    "PartitionDefinitionOptionTablespace",
    "PartitionDefinitionOptionNodeGroup",

    "SubPartition",
    "HashSubPartition",
    "KeySubPartition",

    "UserDefinedExpression",
    "Expression",
    "ParenthesizedExpression",
    "IsExpression",
    "NotExpression",

    "BooleanPrimaryExpression",
    "IsNullBooleanPrimaryExpression",
    "ComparisonBooleanPrimaryExpression",
    "ComparisonSubQueryBooleanPrimaryExpression",

    "Predicate",
    "InSubQueryPredicate",
    "InExpressionTuple1Predicate",
    "BetweenPredicate",
    "SoundsLikePredicate",
    "LikePredicate",
    "RegExpPredicate",

    "BitExpression",
    "ParenthesizedBitExpression",

    "SimpleExpression",
    "ParenthesizedExpressionSimpleExpression",
    "ColumnIdentifierSimpleExpression",
    "ScopedSystemVariableIdentifier",
    "UnscopedSystemVariableIdentifier",
    "UserVariableIdentifier",
    "UserVariableIdentifierAssignment",
    "ParamMarker",
    "IntervalExpression",
    "TemporalUnitTimeStamp",
    "TemporalUnit",
    "LikeEscape",
    "ExpressionTuple1",
    "BitExpressionTuple1",
    "BitExpressionTuple1Tuple1",
    "IntervalExpressionPlus",
    "Not2SimpleExpression",
    "PrefixSimpleExpression",
    "CollateSimpleExpression",
    "Not",

    "SignedLiteral",
    "Literal",
    "TextLiteral",
    "NumberLiteral",
    "TemporalLiteral",
    "UnderscoreCharacterSetHexLiteral",
    "UnderscoreCharacterSetBitLiteral",
    "UnderscoreCharacterSetStringLiteral",
    "ConcatenatedTextLiteral",

    "FunctionCall",
    "MaybeUserDefinedFunctionCall",
    "QualifiedFunctionCall",
    "KeywordFunctionCall",
    "NonKeywordFunctionCall",
    "CharacterFunctionCall",
    "CurrentUserFunctionCall",
    "ExtractFromDateTimeFunctionCall",
    "InsertFunctionCall",
    "IntervalFunctionCall",
    "LeftFunctionCall",
    "RightFunctionCall",
    //"TimestampAddTimeFunctionCall",
    "TimestampFunctionCall",
    "TrimFunctionCall",
    "UserFunctionCall",
    "AddDateFunctionCall",
    "CurrentDateFunctionCall",
    "CurrentTimeFunctionCall",
    "DateAddIntervalFunctionCall",
    "ExtractFunctionCall",
    "GetFormatFunctionCall",
    "PositionFunctionCall",
    "SubstringFunctionCall",
    "SysDateFunctionCall",
    "TimestampAddFunctionCall",
    "TimestampDiffFunctionCall",
    "UtcDateFunctionCall",
    "UtcTimeFunctionCall",
    "UtcTimestampFunctionCall",

    "Empty_Arguments",
    "ExpressionList_ArgumentsImpl",
    "ExpressionList_Arguments_NoExpectImpl",
    "ExpressionList_Arguments",
    "ExpressionList2_Arguments",
    "ExpressionList2_Arguments_NoExpect",
    "UserDefinedExpressionList_Arguments",
    "Expression1_Arguments",
    "Expression2_Arguments",
    "Expression4_Arguments",
    "Expression1To2_Arguments",

    "Character_Arguments",
    "UsingCharacterSetName",
    "DateAddInterval_Arguments",
    "Extract_Arguments",
    "GetFormat_Arguments",
    "Position_Arguments",
    "TimestampAdd_Arguments",
    "TimestampDiff_Arguments",
    "Trim_RemoveStringExpression",
    "Trim_RemoveSpaceExpression",
    "Trim_Arguments",
    "Substring_Arguments",
    "ForLength",

    "Now",
    "DateTimePrecisionArg",

    "TextString",
    "TextStringTuple1",

    "DropMode",
    "IfExists",
    "IfNotExists",
    "Ident",
    "IdentOrReserved",
    "TableIdentifier",
    "ColumnIdentifier",

    "ParenthesizedIdent",
    "IdentTuple1",
    "IdentTuple2",
    "TableIdentifierTuple",
    "TableIdentifierList1",
];
