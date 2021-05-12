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

    "Select",
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
    "RangePartition",

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

    "Expression",
    "BooleanPrimaryExpression",
    "Predicate",

    "BitExpression",
    "BitwiseXor",
    "MulDivMod",
    "PlusMinus",
    "BitwiseShift",
    "BitwiseAnd",
    "BitwiseOr",

    "SimpleExpression",
    "BitExpressionTuple1",
    "BitExpressionTuple1Tuple1",

    "SignedLiteral",
    "Literal",
    "TextLiteral",
    "NumberLiteral",
    "TemporalLiteral",
    "UnderscoreCharacterSetHexLiteral",
    "UnderscoreCharacterSetBitLiteral",
    "UnderscoreCharacterSetStringLiteral",
    "ConcatenatedTextLiteral",

    "Now",
    "DateTimePrecisionArg",

    "TextString",
    "TextStringTuple1",

    "IfNotExists",
    "Ident",
    "IdentOrReserved",
    "TableIdentifier",
    "ColumnIdentifier",

    "IdentTuple1",
    "IdentTuple2",
    "TableIdentifierTuple",

];
