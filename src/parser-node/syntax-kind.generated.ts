export enum SyntaxKind {
    UnknownSyntax = 1000,
    UnknownStatement = 1001,
    UnknownExpression = 1002,
    Value = 1003,
    BitDataType = 1004,
    BooleanDataType = 1005,
    IntegerDataType = 1006,
    DecimalDataType = 1007,
    RealDataType = 1008,
    JsonDataType = 1009,
    CharacterDataType = 1010,
    TextDataType = 1011,
    BinaryDataType = 1012,
    BlobDataType = 1013,
    DateTimeDataType = 1014,
    YearDataType = 1015,
    DateDataType = 1016,
    TimeDataType = 1017,
    TimestampDataType = 1018,
    GeometryDataType = 1019,
    GeometryCollectionDataType = 1020,
    EnumDataType = 1021,
    SetDataType = 1022,
    UnionDataType = 1023,
    UnknownDataType = 1024,
    SourceFileLite = 1025,
    SourceFile = 1026,
    Program = 1027,
    DelimiterStatement = 1028,
    CurrentTimestamp = 1029,
    DefaultCollation = 1030,
    DefaultCharacterSet = 1031,
    FieldLength = 1032,
    Precision = 1033,
    CreateSchemaStatement = 1034,
    CreateSchemaOptionList = 1035,
    CreateTableStatement = 1036,
    ColumnDefinition = 1037,
    GeneratedDefinition = 1038,
    ForeignKeyReferenceDefinition = 1039,
    IndexDefinition = 1040,
    IndexPart = 1041,
    PrimaryKeyDefinition = 1042,
    ForeignKeyDefinition = 1043,
    CheckDefinition = 1044,
    CreateTableOptions = 1045,
    HashPartition = 1046,
    KeyPartition = 1047,
    ListPartition = 1048,
    RangePartition = 1049,
    HashSubPartition = 1050,
    KeySubPartition = 1051,
    ListPartitionDefinition = 1052,
    RangePartitionDefinition = 1053,
    SubPartitionDefinition = 1054,
    PartitionDefinitionOptions = 1055,
    SetStatement = 1056,
    Assignment = 1057,
    SelectStatement = 1058,
    SelectExpression = 1059,
    AsteriskSelectExpression = 1060,
    IntoOption = 1061,
    NamedTableReference = 1062,
    DerivedTableReference = 1063,
    FromClause = 1064,
    JoinDefinition = 1065,
    UsingClause = 1066,
    OnClause = 1067,
    GroupByClause = 1068,
    OrderByClause = 1069,
    OrderItem = 1070,
    LimitClause = 1071,
    DeclareFunctionStatement = 1072,
    DeclareFunctionParameter = 1073,
    CreateMacroStatement = 1074,
    Identifier = 1075,
    UserVariableIdentifier = 1076,
    SystemVariableIdentifier = 1077,
    TableIdentifier = 1078,
    ColumnIdentifier = 1079,
    FunctionIdentifier = 1080,
    MacroIdentifier = 1081,
    ParenthesizedExpression = 1082,
    BinaryExpression = 1083,
    UnaryExpression = 1084,
    ColumnExpression = 1085,
    FunctionCallExpression = 1086,
    RowExpression = 1087,
    MacroCallExpression = 1088,
    CaseIfExpression = 1089,
    CaseSwitchExpression = 1090,
    CaseBranch = 1091,
    MatchExpression = 1092,
    NullLiteral = 1093,
    BooleanLiteral = 1094,
    StringLiteral = 1095,
    HexLiteral = 1096,
    BitLiteral = 1097,
    IntegerLiteral = 1098,
    DecimalLiteral = 1099,
    RealLiteral = 1100,
    DataTypeList = 1101,
    DeclareFunctionParameterList = 1102,
    ArgumentList = 1103,
    AssignmentList = 1104,
    CaseBranchList = 1105,
    CreateTableDefinitionList = 1106,
    IdentifierList = 1107,
    IntoOptionVariableList = 1108,
    JoinDefinitionList = 1109,
    SelectExpressionList = 1110,
    SourceElementList = 1111,
    ColumnIdentifierList = 1112,
    OrderItemList = 1113,
    IndexPartList = 1114,
    StringList = 1115,
    TableIdentifierList = 1116,
}

//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
export const syntaxKinds = [
    "UnknownSyntax",
    "UnknownStatement",
    "UnknownExpression",

    "Value",

    "BitDataType",
    "BooleanDataType",
    "IntegerDataType",
    "DecimalDataType",
    "RealDataType",

    "JsonDataType",

    "CharacterDataType",
    "TextDataType",
    "BinaryDataType",
    "BlobDataType",

    "DateTimeDataType",
    "YearDataType",
    "DateDataType",
    "TimeDataType",
    "TimestampDataType",

    "GeometryDataType",
    "GeometryCollectionDataType",

    "EnumDataType",
    "SetDataType",

    "UnionDataType",
    "UnknownDataType",

    /**
     * Top-Level nodes
     */
    "SourceFileLite",
    "SourceFile",
    "Program",

    /**
     * The custom delimiter is used for the MySQL
     * `DELIMITER` command.
     */
    "DelimiterStatement",

    /**
     * Misc
     */
    "CurrentTimestamp",
    "DefaultCollation",
    "DefaultCharacterSet",
    "FieldLength",
    "Precision",

    /**
     * Statements
     */
    "CreateSchemaStatement",
    "CreateSchemaOptionList",

    "CreateTableStatement",
    "ColumnDefinition",
    "GeneratedDefinition",
    "ForeignKeyReferenceDefinition",
    "IndexDefinition",
    "IndexPart",
    "PrimaryKeyDefinition",
    "ForeignKeyDefinition",
    "CheckDefinition",
    "CreateTableOptions",

    "HashPartition",
    "KeyPartition",
    "ListPartition",
    "RangePartition",

    "HashSubPartition",
    "KeySubPartition",

    "ListPartitionDefinition",
    "RangePartitionDefinition",

    "SubPartitionDefinition",

    "PartitionDefinitionOptions",

    "SetStatement",
    "Assignment",

    "SelectStatement",
    "SelectExpression",
    "AsteriskSelectExpression",
    "IntoOption",
    "NamedTableReference",
    "DerivedTableReference",
    "FromClause",
    "JoinDefinition",
    "UsingClause",
    "OnClause",
    "GroupByClause",
    "OrderByClause",
    "OrderItem",
    "LimitClause",

    /**
     * Custom statements
     */
    "DeclareFunctionStatement",
    "DeclareFunctionParameter",

    "CreateMacroStatement",

    /**
     * May be escaped or unescaped with backticks, or double quotes
     */
    "Identifier",
    /**
     * Starts with one ampersand.
     */
    "UserVariableIdentifier",
    /**
     * Starts with two ampersands.
     */
    "SystemVariableIdentifier",
    "TableIdentifier",
    "ColumnIdentifier",
    "FunctionIdentifier",
    "MacroIdentifier",

    /**
     * Expression
     */
    "ParenthesizedExpression",
    "BinaryExpression",
    "UnaryExpression",
    "ColumnExpression",
    "FunctionCallExpression",
    "RowExpression",
    "MacroCallExpression",
    "CaseIfExpression",
    "CaseSwitchExpression",
    "CaseBranch",
    "MatchExpression",

    "NullLiteral",
    "BooleanLiteral",
    "StringLiteral",
    "HexLiteral",
    "BitLiteral",
    "IntegerLiteral",
    "DecimalLiteral",
    "RealLiteral",

    "DataTypeList",
    "DeclareFunctionParameterList",
    "ArgumentList",
    "AssignmentList",
    "CaseBranchList",
    "CreateTableDefinitionList",
    "IdentifierList",
    "IntoOptionVariableList",
    "JoinDefinitionList",
    "SelectExpressionList",
    "SourceElementList",
    "ColumnIdentifierList",
    "OrderItemList",
    "IndexPartList",
    "StringList",
    "TableIdentifierList",

] as const;

