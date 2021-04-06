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
    PartialStoredProcedureCharacteristics = 1055,
    CreateProcedureStatement = 1056,
    StoredProcedureParameter = 1057,
    StoredProcedureParameterList = 1058,
    CreateTriggerStatement = 1059,
    TriggerOrder = 1060,
    CreateEventStatement = 1061,
    ExecuteAtSchedule = 1062,
    IntervalSchedule = 1063,
    CreateUserDefinedFunctionStatement = 1064,
    CreateViewStatement = 1065,
    CreateUserStatement = 1066,
    GrantUser = 1067,
    GrantUserList = 1068,
    RequiredEncryptedConnectionOptions = 1069,
    RateLimitOptions = 1070,
    AccountLockAndPasswordExpiryOptions = 1071,
    CreateLogFileGroupStatement = 1072,
    CreateLogFileGroupOptions = 1073,
    CreateLogFileGroupAddRedoFile = 1074,
    CreateLogFileGroupAddUndoFile = 1075,
    CreateTablespaceStatement = 1076,
    CreateTablespaceOptions = 1077,
    CreateServerStatement = 1078,
    CreateServerOptions = 1079,
    CreateIndexStatement = 1080,
    AlterTableLockAndAlgorithmOptions = 1081,
    AlterTableStatement = 1082,
    AlterTableStandaloneStatement = 1083,
    AlterTableModifiers = 1084,
    AlterTableLock = 1085,
    AlterTableAlgorithm = 1086,
    AlterTableValidation = 1087,
    AlterTableItemOrModifierList = 1088,
    AlterTableAddColumn = 1089,
    AlterTableAddCreateTableDefinitionList = 1090,
    AlterTableChangeColumn = 1091,
    AlterTableModifyColumn = 1092,
    AlterTableDropColumn = 1093,
    AlterTableDropForeignKey = 1094,
    AlterTableDropPrimaryKey = 1095,
    AlterTableDropIndex = 1096,
    AlterTableDisableKeys = 1097,
    AlterTableEnableKeys = 1098,
    AlterTableAlterColumnSetDefault = 1099,
    AlterTableAlterColumnDropDefault = 1100,
    AlterTableRenameTable = 1101,
    AlterTableRenameIndex = 1102,
    AlterTableConvertToCharacterSet = 1103,
    AlterTableForce = 1104,
    AlterTableUpgradePartitioning = 1105,
    AlterTableOrderBy = 1106,
    AlterTableOrderExprList = 1107,
    AlterTableOrderExpr = 1108,
    AlterSchemaStatement = 1109,
    AlterSchemaUpgradeDataDirectoryNameStatement = 1110,
    AlterProcedureStatement = 1111,
    AlterFunctionStatement = 1112,
    AlterViewStatement = 1113,
    AlterEventStatement = 1114,
    AlterTablespaceStatement = 1115,
    AlterTablespaceChangeStatement = 1116,
    AlterTablespaceAccessStatement = 1117,
    AlterServerStatement = 1118,
    AlterCurrentUserStatement = 1119,
    AlterUserStatement = 1120,
    PartialRateLimitOptions = 1121,
    PartialAccountLockAndPasswordExpiryOptions = 1122,
    AlterGrantUser = 1123,
    AlterGrantUserList = 1124,
    AlterInstanceStatement = 1125,
    AlterInstanceRotateMasterKey = 1126,
    AnalyzeTableStatement = 1127,
    BinLogStatement = 1128,
    HashPartition = 1129,
    KeyPartition = 1130,
    ListPartition = 1131,
    RangePartition = 1132,
    HashSubPartition = 1133,
    KeySubPartition = 1134,
    ListPartitionDefinition = 1135,
    RangePartitionDefinition = 1136,
    SubPartitionDefinition = 1137,
    PartitionDefinitionOptions = 1138,
    SetStatement = 1139,
    Assignment = 1140,
    SelectStatement = 1141,
    Select = 1142,
    SelectOptions = 1143,
    SelectItem = 1144,
    AsteriskSelectItem = 1145,
    TableAsteriskSelectItem = 1146,
    IntoOption = 1147,
    OdbcTableReference = 1148,
    NamedTableFactor = 1149,
    IndexHintDefinition = 1150,
    DerivedTableFactor = 1151,
    FromClause = 1152,
    Join = 1153,
    JoinSpecificationUsing = 1154,
    JoinSpecificationOn = 1155,
    WhereClause = 1156,
    GroupByClause = 1157,
    GroupingExpr = 1158,
    HavingClause = 1159,
    OrderByClause = 1160,
    OrderExpr = 1161,
    Limit = 1162,
    ProcedureAnalyseClause = 1163,
    IntoClause = 1164,
    IntoDestinationDumpFile = 1165,
    IntoDestinationOutFile = 1166,
    IntoDestinationVariableList = 1167,
    FieldTerminatorOptions = 1168,
    LineTerminatorOptions = 1169,
    Union = 1170,
    UnionOrderLimit = 1171,
    ReturnStatement = 1172,
    LabelStatement = 1173,
    BlockStatement = 1174,
    LoopStatement = 1175,
    WhileStatement = 1176,
    RepeatStatement = 1177,
    IfStatement = 1178,
    ElseIf = 1179,
    ElseBranch = 1180,
    SimpleCaseStatement = 1181,
    SimpleWhen = 1182,
    SimpleWhenList = 1183,
    SearchedCaseStatement = 1184,
    SearchedWhen = 1185,
    SearchedWhenList = 1186,
    LeaveStatement = 1187,
    IterateStatement = 1188,
    OpenStatement = 1189,
    CloseStatement = 1190,
    FetchStatement = 1191,
    DeclareFunctionStatement = 1192,
    DeclareFunctionParameter = 1193,
    CreateMacroStatement = 1194,
    Identifier = 1195,
    UserVariableIdentifier = 1196,
    SystemVariableIdentifier = 1197,
    TableIdentifier = 1198,
    ColumnIdentifier = 1199,
    FunctionIdentifier = 1200,
    MacroIdentifier = 1201,
    StoredFunctionIdentifier = 1202,
    StoredProcedureIdentifier = 1203,
    AccountIdentifier = 1204,
    TriggerIdentifier = 1205,
    EventIdentifier = 1206,
    ParenthesizedExpression = 1207,
    BinaryExpression = 1208,
    UnaryExpression = 1209,
    ColumnExpression = 1210,
    FunctionCallExpression = 1211,
    RowExpression = 1212,
    MacroCallExpression = 1213,
    CaseIfExpression = 1214,
    CaseSwitchExpression = 1215,
    CaseBranch = 1216,
    MatchExpression = 1217,
    NullLiteral = 1218,
    BooleanLiteral = 1219,
    StringLiteral = 1220,
    HexLiteral = 1221,
    BitLiteral = 1222,
    IntegerLiteral = 1223,
    DecimalLiteral = 1224,
    RealLiteral = 1225,
    ParamMarker = 1226,
    DataTypeList = 1227,
    DeclareFunctionParameterList = 1228,
    ArgumentList = 1229,
    AssignmentList = 1230,
    CaseBranchList = 1231,
    CreateTableDefinitionList = 1232,
    IdentifierList = 1233,
    IntoOptionVariableList = 1234,
    JoinDefinitionList = 1235,
    SelectItemList = 1236,
    SourceElementList = 1237,
    ColumnIdentifierList = 1238,
    OrderItemList = 1239,
    IndexPartList = 1240,
    StringList = 1241,
    TableIdentifierList = 1242,
    ListPartitionDefinitionList = 1243,
    RangePartitionDefinitionList = 1244,
    ExpressionList = 1245,
    ExpressionListList = 1246,
    SubPartitionDefinitionList = 1247,
    ExpressionOrMaxValueList = 1248,
    OrderExprList = 1249,
    TableReferenceList = 1250,
    IndexHintDefinitionList = 1251,
    KeyUsageList = 1252,
    GroupingExprList = 1253,
    StoredProcedureStatementList = 1254,
    ElseIfList = 1255,
    FetchIdentifierList = 1256,
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
    "PartialStoredProcedureCharacteristics",
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
    "AlterTableAlterColumnSetDefault",
    "AlterTableAlterColumnDropDefault",
    /**
     * @todo Renaming columns only added in MySQL 8.0
     */
    "AlterTableRenameTable",
    "AlterTableRenameIndex",
    "AlterTableConvertToCharacterSet",
    "AlterTableForce",
    "AlterTableUpgradePartitioning",
    "AlterTableOrderBy",
    "AlterTableOrderExprList",
    "AlterTableOrderExpr",

    "AlterSchemaStatement",
    "AlterSchemaUpgradeDataDirectoryNameStatement",
    "AlterProcedureStatement",
    "AlterFunctionStatement",
    "AlterViewStatement",
    "AlterEventStatement",
    "AlterTablespaceStatement",
    "AlterTablespaceChangeStatement",
    "AlterTablespaceAccessStatement",
    "AlterServerStatement",
    "AlterCurrentUserStatement",
    "AlterUserStatement",
    "PartialRateLimitOptions",
    "PartialAccountLockAndPasswordExpiryOptions",
    "AlterGrantUser",
    "AlterGrantUserList",
    "AlterInstanceStatement",
    "AlterInstanceRotateMasterKey",

    "AnalyzeTableStatement",

    "BinLogStatement",

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

