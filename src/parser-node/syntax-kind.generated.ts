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
    AlterTableStatement = 1081,
    AlterTableStandaloneStatement = 1082,
    AlterTableModifiers = 1083,
    AlterTableLock = 1084,
    AlterTableAlgorithm = 1085,
    AlterTableValidation = 1086,
    AlterTableItemOrModifierList = 1087,
    AlterTableAddColumn = 1088,
    AlterTableAddCreateTableDefinitionList = 1089,
    AlterTableChangeColumn = 1090,
    AlterTableModifyColumn = 1091,
    AlterTableDropColumn = 1092,
    AlterTableDropForeignKey = 1093,
    AlterTableDropPrimaryKey = 1094,
    AlterTableDropIndex = 1095,
    AlterTableDisableKeys = 1096,
    AlterTableEnableKeys = 1097,
    HashPartition = 1098,
    KeyPartition = 1099,
    ListPartition = 1100,
    RangePartition = 1101,
    HashSubPartition = 1102,
    KeySubPartition = 1103,
    ListPartitionDefinition = 1104,
    RangePartitionDefinition = 1105,
    SubPartitionDefinition = 1106,
    PartitionDefinitionOptions = 1107,
    SetStatement = 1108,
    Assignment = 1109,
    SelectStatement = 1110,
    Select = 1111,
    SelectOptions = 1112,
    SelectItem = 1113,
    AsteriskSelectItem = 1114,
    TableAsteriskSelectItem = 1115,
    IntoOption = 1116,
    OdbcTableReference = 1117,
    NamedTableFactor = 1118,
    IndexHintDefinition = 1119,
    DerivedTableFactor = 1120,
    FromClause = 1121,
    Join = 1122,
    JoinSpecificationUsing = 1123,
    JoinSpecificationOn = 1124,
    WhereClause = 1125,
    GroupByClause = 1126,
    GroupingExpr = 1127,
    HavingClause = 1128,
    OrderByClause = 1129,
    OrderExpr = 1130,
    Limit = 1131,
    ProcedureAnalyseClause = 1132,
    IntoClause = 1133,
    IntoDestinationDumpFile = 1134,
    IntoDestinationOutFile = 1135,
    IntoDestinationVariableList = 1136,
    FieldTerminatorOptions = 1137,
    LineTerminatorOptions = 1138,
    Union = 1139,
    UnionOrderLimit = 1140,
    ReturnStatement = 1141,
    LabelStatement = 1142,
    BlockStatement = 1143,
    LoopStatement = 1144,
    WhileStatement = 1145,
    RepeatStatement = 1146,
    IfStatement = 1147,
    ElseIf = 1148,
    ElseBranch = 1149,
    SimpleCaseStatement = 1150,
    SimpleWhen = 1151,
    SimpleWhenList = 1152,
    SearchedCaseStatement = 1153,
    SearchedWhen = 1154,
    SearchedWhenList = 1155,
    LeaveStatement = 1156,
    IterateStatement = 1157,
    OpenStatement = 1158,
    CloseStatement = 1159,
    FetchStatement = 1160,
    DeclareFunctionStatement = 1161,
    DeclareFunctionParameter = 1162,
    CreateMacroStatement = 1163,
    Identifier = 1164,
    UserVariableIdentifier = 1165,
    SystemVariableIdentifier = 1166,
    TableIdentifier = 1167,
    ColumnIdentifier = 1168,
    FunctionIdentifier = 1169,
    MacroIdentifier = 1170,
    StoredFunctionIdentifier = 1171,
    StoredProcedureIdentifier = 1172,
    AccountIdentifier = 1173,
    TriggerIdentifier = 1174,
    EventIdentifier = 1175,
    ParenthesizedExpression = 1176,
    BinaryExpression = 1177,
    UnaryExpression = 1178,
    ColumnExpression = 1179,
    FunctionCallExpression = 1180,
    RowExpression = 1181,
    MacroCallExpression = 1182,
    CaseIfExpression = 1183,
    CaseSwitchExpression = 1184,
    CaseBranch = 1185,
    MatchExpression = 1186,
    NullLiteral = 1187,
    BooleanLiteral = 1188,
    StringLiteral = 1189,
    HexLiteral = 1190,
    BitLiteral = 1191,
    IntegerLiteral = 1192,
    DecimalLiteral = 1193,
    RealLiteral = 1194,
    ParamMarker = 1195,
    DataTypeList = 1196,
    DeclareFunctionParameterList = 1197,
    ArgumentList = 1198,
    AssignmentList = 1199,
    CaseBranchList = 1200,
    CreateTableDefinitionList = 1201,
    IdentifierList = 1202,
    IntoOptionVariableList = 1203,
    JoinDefinitionList = 1204,
    SelectItemList = 1205,
    SourceElementList = 1206,
    ColumnIdentifierList = 1207,
    OrderItemList = 1208,
    IndexPartList = 1209,
    StringList = 1210,
    TableIdentifierList = 1211,
    ListPartitionDefinitionList = 1212,
    RangePartitionDefinitionList = 1213,
    ExpressionList = 1214,
    ExpressionListList = 1215,
    SubPartitionDefinitionList = 1216,
    ExpressionOrMaxValueList = 1217,
    OrderExprList = 1218,
    TableReferenceList = 1219,
    IndexHintDefinitionList = 1220,
    KeyUsageList = 1221,
    GroupingExprList = 1222,
    StoredProcedureStatementList = 1223,
    ElseIfList = 1224,
    FetchIdentifierList = 1225,
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

    "AlterTableStatement",
    "AlterTableStandaloneStatement",

    "AlterTableModifiers",
    "AlterTableLock",
    "AlterTableAlgorithm",
    "AlterTableValidation",

    "AlterTableItemOrModifierList",

    "AlterTableAddColumn",
    "AlterTableAddCreateTableDefinitionList",
    "AlterTableChangeColumn",
    "AlterTableModifyColumn",
    "AlterTableDropColumn",
    "AlterTableDropForeignKey",
    "AlterTableDropPrimaryKey",
    "AlterTableDropIndex",
    "AlterTableDisableKeys",
    "AlterTableEnableKeys",


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

