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
    HashPartition = 1115,
    KeyPartition = 1116,
    ListPartition = 1117,
    RangePartition = 1118,
    HashSubPartition = 1119,
    KeySubPartition = 1120,
    ListPartitionDefinition = 1121,
    RangePartitionDefinition = 1122,
    SubPartitionDefinition = 1123,
    PartitionDefinitionOptions = 1124,
    SetStatement = 1125,
    Assignment = 1126,
    SelectStatement = 1127,
    Select = 1128,
    SelectOptions = 1129,
    SelectItem = 1130,
    AsteriskSelectItem = 1131,
    TableAsteriskSelectItem = 1132,
    IntoOption = 1133,
    OdbcTableReference = 1134,
    NamedTableFactor = 1135,
    IndexHintDefinition = 1136,
    DerivedTableFactor = 1137,
    FromClause = 1138,
    Join = 1139,
    JoinSpecificationUsing = 1140,
    JoinSpecificationOn = 1141,
    WhereClause = 1142,
    GroupByClause = 1143,
    GroupingExpr = 1144,
    HavingClause = 1145,
    OrderByClause = 1146,
    OrderExpr = 1147,
    Limit = 1148,
    ProcedureAnalyseClause = 1149,
    IntoClause = 1150,
    IntoDestinationDumpFile = 1151,
    IntoDestinationOutFile = 1152,
    IntoDestinationVariableList = 1153,
    FieldTerminatorOptions = 1154,
    LineTerminatorOptions = 1155,
    Union = 1156,
    UnionOrderLimit = 1157,
    ReturnStatement = 1158,
    LabelStatement = 1159,
    BlockStatement = 1160,
    LoopStatement = 1161,
    WhileStatement = 1162,
    RepeatStatement = 1163,
    IfStatement = 1164,
    ElseIf = 1165,
    ElseBranch = 1166,
    SimpleCaseStatement = 1167,
    SimpleWhen = 1168,
    SimpleWhenList = 1169,
    SearchedCaseStatement = 1170,
    SearchedWhen = 1171,
    SearchedWhenList = 1172,
    LeaveStatement = 1173,
    IterateStatement = 1174,
    OpenStatement = 1175,
    CloseStatement = 1176,
    FetchStatement = 1177,
    DeclareFunctionStatement = 1178,
    DeclareFunctionParameter = 1179,
    CreateMacroStatement = 1180,
    Identifier = 1181,
    UserVariableIdentifier = 1182,
    SystemVariableIdentifier = 1183,
    TableIdentifier = 1184,
    ColumnIdentifier = 1185,
    FunctionIdentifier = 1186,
    MacroIdentifier = 1187,
    StoredFunctionIdentifier = 1188,
    StoredProcedureIdentifier = 1189,
    AccountIdentifier = 1190,
    TriggerIdentifier = 1191,
    EventIdentifier = 1192,
    ParenthesizedExpression = 1193,
    BinaryExpression = 1194,
    UnaryExpression = 1195,
    ColumnExpression = 1196,
    FunctionCallExpression = 1197,
    RowExpression = 1198,
    MacroCallExpression = 1199,
    CaseIfExpression = 1200,
    CaseSwitchExpression = 1201,
    CaseBranch = 1202,
    MatchExpression = 1203,
    NullLiteral = 1204,
    BooleanLiteral = 1205,
    StringLiteral = 1206,
    HexLiteral = 1207,
    BitLiteral = 1208,
    IntegerLiteral = 1209,
    DecimalLiteral = 1210,
    RealLiteral = 1211,
    ParamMarker = 1212,
    DataTypeList = 1213,
    DeclareFunctionParameterList = 1214,
    ArgumentList = 1215,
    AssignmentList = 1216,
    CaseBranchList = 1217,
    CreateTableDefinitionList = 1218,
    IdentifierList = 1219,
    IntoOptionVariableList = 1220,
    JoinDefinitionList = 1221,
    SelectItemList = 1222,
    SourceElementList = 1223,
    ColumnIdentifierList = 1224,
    OrderItemList = 1225,
    IndexPartList = 1226,
    StringList = 1227,
    TableIdentifierList = 1228,
    ListPartitionDefinitionList = 1229,
    RangePartitionDefinitionList = 1230,
    ExpressionList = 1231,
    ExpressionListList = 1232,
    SubPartitionDefinitionList = 1233,
    ExpressionOrMaxValueList = 1234,
    OrderExprList = 1235,
    TableReferenceList = 1236,
    IndexHintDefinitionList = 1237,
    KeyUsageList = 1238,
    GroupingExprList = 1239,
    StoredProcedureStatementList = 1240,
    ElseIfList = 1241,
    FetchIdentifierList = 1242,
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

