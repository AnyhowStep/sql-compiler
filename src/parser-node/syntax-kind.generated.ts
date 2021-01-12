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
    Interval = 1034,
    SizeNumber = 1035,
    CreateSchemaStatement = 1036,
    CreateSchemaOptionList = 1037,
    CreateTableStatement = 1038,
    ColumnDefinition = 1039,
    GeneratedDefinition = 1040,
    ForeignKeyReferenceDefinition = 1041,
    IndexDefinition = 1042,
    IndexPart = 1043,
    PrimaryKeyDefinition = 1044,
    ForeignKeyDefinition = 1045,
    CheckDefinition = 1046,
    CreateTableOptions = 1047,
    CreateTableSelectStatement = 1048,
    CreateTableSelect = 1049,
    CreateTableLikeStatement = 1050,
    CreateFunctionStatement = 1051,
    StoredFunctionParameter = 1052,
    StoredFunctionParameterList = 1053,
    StoredProcedureCharacteristics = 1054,
    CreateProcedureStatement = 1055,
    StoredProcedureParameter = 1056,
    StoredProcedureParameterList = 1057,
    CreateTriggerStatement = 1058,
    TriggerOrder = 1059,
    CreateEventStatement = 1060,
    ExecuteAtSchedule = 1061,
    IntervalSchedule = 1062,
    CreateUserDefinedFunctionStatement = 1063,
    CreateViewStatement = 1064,
    CreateUserStatement = 1065,
    GrantUser = 1066,
    GrantUserList = 1067,
    RequiredEncryptedConnectionOptions = 1068,
    RateLimitOptions = 1069,
    AccountLockAndPasswordExpiryOptions = 1070,
    CreateLogFileGroupStatement = 1071,
    CreateLogFileGroupOptions = 1072,
    CreateLogFileGroupAddRedoFile = 1073,
    CreateLogFileGroupAddUndoFile = 1074,
    CreateTablespaceStatement = 1075,
    CreateTablespaceOptions = 1076,
    CreateServerStatement = 1077,
    CreateServerOptions = 1078,
    CreateIndexStatement = 1079,
    AlterTableLockAndAlgorithmOptions = 1080,
    AlterTableLock = 1081,
    AlterTableAlgorithm = 1082,
    HashPartition = 1083,
    KeyPartition = 1084,
    ListPartition = 1085,
    RangePartition = 1086,
    HashSubPartition = 1087,
    KeySubPartition = 1088,
    ListPartitionDefinition = 1089,
    RangePartitionDefinition = 1090,
    SubPartitionDefinition = 1091,
    PartitionDefinitionOptions = 1092,
    SetStatement = 1093,
    Assignment = 1094,
    SelectStatement = 1095,
    Select = 1096,
    SelectOptions = 1097,
    SelectItem = 1098,
    AsteriskSelectItem = 1099,
    TableAsteriskSelectItem = 1100,
    IntoOption = 1101,
    OdbcTableReference = 1102,
    NamedTableFactor = 1103,
    IndexHintDefinition = 1104,
    DerivedTableFactor = 1105,
    FromClause = 1106,
    Join = 1107,
    JoinSpecificationUsing = 1108,
    JoinSpecificationOn = 1109,
    WhereClause = 1110,
    GroupByClause = 1111,
    GroupingExpr = 1112,
    HavingClause = 1113,
    OrderByClause = 1114,
    OrderExpr = 1115,
    Limit = 1116,
    ProcedureAnalyseClause = 1117,
    IntoClause = 1118,
    IntoDestinationDumpFile = 1119,
    IntoDestinationOutFile = 1120,
    IntoDestinationVariableList = 1121,
    FieldTerminatorOptions = 1122,
    LineTerminatorOptions = 1123,
    Union = 1124,
    UnionOrderLimit = 1125,
    ReturnStatement = 1126,
    LabelStatement = 1127,
    BlockStatement = 1128,
    LoopStatement = 1129,
    WhileStatement = 1130,
    RepeatStatement = 1131,
    IfStatement = 1132,
    ElseIf = 1133,
    ElseBranch = 1134,
    SimpleCaseStatement = 1135,
    SimpleWhen = 1136,
    SimpleWhenList = 1137,
    SearchedCaseStatement = 1138,
    SearchedWhen = 1139,
    SearchedWhenList = 1140,
    LeaveStatement = 1141,
    IterateStatement = 1142,
    OpenStatement = 1143,
    CloseStatement = 1144,
    FetchStatement = 1145,
    DeclareFunctionStatement = 1146,
    DeclareFunctionParameter = 1147,
    CreateMacroStatement = 1148,
    Identifier = 1149,
    UserVariableIdentifier = 1150,
    SystemVariableIdentifier = 1151,
    TableIdentifier = 1152,
    ColumnIdentifier = 1153,
    FunctionIdentifier = 1154,
    MacroIdentifier = 1155,
    StoredFunctionIdentifier = 1156,
    StoredProcedureIdentifier = 1157,
    AccountIdentifier = 1158,
    TriggerIdentifier = 1159,
    EventIdentifier = 1160,
    ParenthesizedExpression = 1161,
    BinaryExpression = 1162,
    UnaryExpression = 1163,
    ColumnExpression = 1164,
    FunctionCallExpression = 1165,
    RowExpression = 1166,
    MacroCallExpression = 1167,
    CaseIfExpression = 1168,
    CaseSwitchExpression = 1169,
    CaseBranch = 1170,
    MatchExpression = 1171,
    NullLiteral = 1172,
    BooleanLiteral = 1173,
    StringLiteral = 1174,
    HexLiteral = 1175,
    BitLiteral = 1176,
    IntegerLiteral = 1177,
    DecimalLiteral = 1178,
    RealLiteral = 1179,
    ParamMarker = 1180,
    DataTypeList = 1181,
    DeclareFunctionParameterList = 1182,
    ArgumentList = 1183,
    AssignmentList = 1184,
    CaseBranchList = 1185,
    CreateTableDefinitionList = 1186,
    IdentifierList = 1187,
    IntoOptionVariableList = 1188,
    JoinDefinitionList = 1189,
    SelectItemList = 1190,
    SourceElementList = 1191,
    ColumnIdentifierList = 1192,
    OrderItemList = 1193,
    IndexPartList = 1194,
    StringList = 1195,
    TableIdentifierList = 1196,
    ListPartitionDefinitionList = 1197,
    RangePartitionDefinitionList = 1198,
    ExpressionList = 1199,
    ExpressionListList = 1200,
    SubPartitionDefinitionList = 1201,
    ExpressionOrMaxValueList = 1202,
    OrderExprList = 1203,
    TableReferenceList = 1204,
    IndexHintDefinitionList = 1205,
    KeyUsageList = 1206,
    GroupingExprList = 1207,
    StoredProcedureStatementList = 1208,
    ElseIfList = 1209,
    FetchIdentifierList = 1210,
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
    "Interval",
    "SizeNumber",

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

    "CreateTableSelectStatement",
    "CreateTableSelect",

    "CreateTableLikeStatement",

    "CreateFunctionStatement",
    "StoredFunctionParameter",
    "StoredFunctionParameterList",
    "StoredProcedureCharacteristics",
    "CreateProcedureStatement",
    "StoredProcedureParameter",
    "StoredProcedureParameterList",
    "CreateTriggerStatement",
    "TriggerOrder",
    "CreateEventStatement",
    "ExecuteAtSchedule",
    "IntervalSchedule",
    "CreateUserDefinedFunctionStatement",
    "CreateViewStatement",
    "CreateUserStatement",
    "GrantUser",
    "GrantUserList",
    "RequiredEncryptedConnectionOptions",
    "RateLimitOptions",
    "AccountLockAndPasswordExpiryOptions",
    "CreateLogFileGroupStatement",
    "CreateLogFileGroupOptions",
    "CreateLogFileGroupAddRedoFile",
    "CreateLogFileGroupAddUndoFile",
    "CreateTablespaceStatement",
    "CreateTablespaceOptions",
    "CreateServerStatement",
    "CreateServerOptions",
    "CreateIndexStatement",
    "AlterTableLockAndAlgorithmOptions",
    "AlterTableLock",
    "AlterTableAlgorithm",

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
    "IfStatement",
    "ElseIf",
    "ElseBranch",
    "SimpleCaseStatement",
    "SimpleWhen",
    "SimpleWhenList",
    "SearchedCaseStatement",
    "SearchedWhen",
    "SearchedWhenList",
    "LeaveStatement",
    "IterateStatement",
    "OpenStatement",
    "CloseStatement",
    "FetchStatement",

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
    "StoredFunctionIdentifier",
    "StoredProcedureIdentifier",
    "AccountIdentifier",
    "TriggerIdentifier",
    "EventIdentifier",

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
    "ElseIfList",
    "FetchIdentifierList",
] as const;

