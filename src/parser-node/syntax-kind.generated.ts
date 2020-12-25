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
    CreateFunctionStatement = 1046,
    StoredFunctionParameter = 1047,
    StoredFunctionParameterList = 1048,
    StoredProcedureCharacteristics = 1049,
    HashPartition = 1050,
    KeyPartition = 1051,
    ListPartition = 1052,
    RangePartition = 1053,
    HashSubPartition = 1054,
    KeySubPartition = 1055,
    ListPartitionDefinition = 1056,
    RangePartitionDefinition = 1057,
    SubPartitionDefinition = 1058,
    PartitionDefinitionOptions = 1059,
    SetStatement = 1060,
    Assignment = 1061,
    SelectStatement = 1062,
    Select = 1063,
    SelectOptions = 1064,
    SelectItem = 1065,
    AsteriskSelectItem = 1066,
    TableAsteriskSelectItem = 1067,
    IntoOption = 1068,
    OdbcTableReference = 1069,
    NamedTableFactor = 1070,
    IndexHintDefinition = 1071,
    DerivedTableFactor = 1072,
    FromClause = 1073,
    Join = 1074,
    JoinSpecificationUsing = 1075,
    JoinSpecificationOn = 1076,
    WhereClause = 1077,
    GroupByClause = 1078,
    GroupingExpr = 1079,
    HavingClause = 1080,
    OrderByClause = 1081,
    OrderExpr = 1082,
    Limit = 1083,
    ProcedureAnalyseClause = 1084,
    IntoClause = 1085,
    IntoDestinationDumpFile = 1086,
    IntoDestinationOutFile = 1087,
    IntoDestinationVariableList = 1088,
    FieldTerminatorOptions = 1089,
    LineTerminatorOptions = 1090,
    Union = 1091,
    UnionOrderLimit = 1092,
    ReturnStatement = 1093,
    LabelStatement = 1094,
    BlockStatement = 1095,
    LoopStatement = 1096,
    WhileStatement = 1097,
    RepeatStatement = 1098,
    DeclareFunctionStatement = 1099,
    DeclareFunctionParameter = 1100,
    CreateMacroStatement = 1101,
    Identifier = 1102,
    UserVariableIdentifier = 1103,
    SystemVariableIdentifier = 1104,
    TableIdentifier = 1105,
    ColumnIdentifier = 1106,
    FunctionIdentifier = 1107,
    MacroIdentifier = 1108,
    StoredProcedureIdentifier = 1109,
    AccountIdentifier = 1110,
    ParenthesizedExpression = 1111,
    BinaryExpression = 1112,
    UnaryExpression = 1113,
    ColumnExpression = 1114,
    FunctionCallExpression = 1115,
    RowExpression = 1116,
    MacroCallExpression = 1117,
    CaseIfExpression = 1118,
    CaseSwitchExpression = 1119,
    CaseBranch = 1120,
    MatchExpression = 1121,
    NullLiteral = 1122,
    BooleanLiteral = 1123,
    StringLiteral = 1124,
    HexLiteral = 1125,
    BitLiteral = 1126,
    IntegerLiteral = 1127,
    DecimalLiteral = 1128,
    RealLiteral = 1129,
    ParamMarker = 1130,
    DataTypeList = 1131,
    DeclareFunctionParameterList = 1132,
    ArgumentList = 1133,
    AssignmentList = 1134,
    CaseBranchList = 1135,
    CreateTableDefinitionList = 1136,
    IdentifierList = 1137,
    IntoOptionVariableList = 1138,
    JoinDefinitionList = 1139,
    SelectItemList = 1140,
    SourceElementList = 1141,
    ColumnIdentifierList = 1142,
    OrderItemList = 1143,
    IndexPartList = 1144,
    StringList = 1145,
    TableIdentifierList = 1146,
    ListPartitionDefinitionList = 1147,
    RangePartitionDefinitionList = 1148,
    ExpressionList = 1149,
    ExpressionListList = 1150,
    SubPartitionDefinitionList = 1151,
    ExpressionOrMaxValueList = 1152,
    OrderExprList = 1153,
    TableReferenceList = 1154,
    IndexHintDefinitionList = 1155,
    KeyUsageList = 1156,
    GroupingExprList = 1157,
    StoredProcedureStatementList = 1158,
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

    "CreateFunctionStatement",
    "StoredFunctionParameter",
    "StoredFunctionParameterList",
    "StoredProcedureCharacteristics",

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
    "Select",
    "SelectOptions",
    "SelectItem",
    "AsteriskSelectItem",
    "TableAsteriskSelectItem",
    "IntoOption",
    "OdbcTableReference",
    "NamedTableFactor",
    "IndexHintDefinition",
    "DerivedTableFactor",
    "FromClause",
    "Join",
    "JoinSpecificationUsing",
    "JoinSpecificationOn",
    "WhereClause",
    "GroupByClause",
    "GroupingExpr",
    "HavingClause",
    "OrderByClause",
    "OrderExpr",
    "Limit",
    "ProcedureAnalyseClause",
    "IntoClause",
    "IntoDestinationDumpFile",
    "IntoDestinationOutFile",
    "IntoDestinationVariableList",
    "FieldTerminatorOptions",
    "LineTerminatorOptions",
    "Union",
    "UnionOrderLimit",

    /**
     * Stored procedure statements
     */
    "ReturnStatement",
    "LabelStatement",
    "BlockStatement",
    "LoopStatement",
    "WhileStatement",
    "RepeatStatement",

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
    "StoredProcedureIdentifier",
    "AccountIdentifier",

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
    "ParamMarker",

    "DataTypeList",
    "DeclareFunctionParameterList",
    "ArgumentList",
    "AssignmentList",
    "CaseBranchList",
    "CreateTableDefinitionList",
    "IdentifierList",
    "IntoOptionVariableList",
    "JoinDefinitionList",
    "SelectItemList",
    "SourceElementList",
    "ColumnIdentifierList",
    "OrderItemList",
    "IndexPartList",
    "StringList",
    "TableIdentifierList",
    "ListPartitionDefinitionList",
    "RangePartitionDefinitionList",
    "ExpressionList",
    "ExpressionListList",
    "SubPartitionDefinitionList",
    "ExpressionOrMaxValueList",
    "OrderExprList",
    "TableReferenceList",
    "IndexHintDefinitionList",
    "KeyUsageList",
    "GroupingExprList",
    "StoredProcedureStatementList",
] as const;

