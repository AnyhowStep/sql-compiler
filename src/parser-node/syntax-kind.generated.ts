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
    HashPartition = 1113,
    KeyPartition = 1114,
    ListPartition = 1115,
    RangePartition = 1116,
    HashSubPartition = 1117,
    KeySubPartition = 1118,
    ListPartitionDefinition = 1119,
    RangePartitionDefinition = 1120,
    SubPartitionDefinition = 1121,
    PartitionDefinitionOptions = 1122,
    SetStatement = 1123,
    Assignment = 1124,
    SelectStatement = 1125,
    Select = 1126,
    SelectOptions = 1127,
    SelectItem = 1128,
    AsteriskSelectItem = 1129,
    TableAsteriskSelectItem = 1130,
    IntoOption = 1131,
    OdbcTableReference = 1132,
    NamedTableFactor = 1133,
    IndexHintDefinition = 1134,
    DerivedTableFactor = 1135,
    FromClause = 1136,
    Join = 1137,
    JoinSpecificationUsing = 1138,
    JoinSpecificationOn = 1139,
    WhereClause = 1140,
    GroupByClause = 1141,
    GroupingExpr = 1142,
    HavingClause = 1143,
    OrderByClause = 1144,
    OrderExpr = 1145,
    Limit = 1146,
    ProcedureAnalyseClause = 1147,
    IntoClause = 1148,
    IntoDestinationDumpFile = 1149,
    IntoDestinationOutFile = 1150,
    IntoDestinationVariableList = 1151,
    FieldTerminatorOptions = 1152,
    LineTerminatorOptions = 1153,
    Union = 1154,
    UnionOrderLimit = 1155,
    ReturnStatement = 1156,
    LabelStatement = 1157,
    BlockStatement = 1158,
    LoopStatement = 1159,
    WhileStatement = 1160,
    RepeatStatement = 1161,
    IfStatement = 1162,
    ElseIf = 1163,
    ElseBranch = 1164,
    SimpleCaseStatement = 1165,
    SimpleWhen = 1166,
    SimpleWhenList = 1167,
    SearchedCaseStatement = 1168,
    SearchedWhen = 1169,
    SearchedWhenList = 1170,
    LeaveStatement = 1171,
    IterateStatement = 1172,
    OpenStatement = 1173,
    CloseStatement = 1174,
    FetchStatement = 1175,
    DeclareFunctionStatement = 1176,
    DeclareFunctionParameter = 1177,
    CreateMacroStatement = 1178,
    Identifier = 1179,
    UserVariableIdentifier = 1180,
    SystemVariableIdentifier = 1181,
    TableIdentifier = 1182,
    ColumnIdentifier = 1183,
    FunctionIdentifier = 1184,
    MacroIdentifier = 1185,
    StoredFunctionIdentifier = 1186,
    StoredProcedureIdentifier = 1187,
    AccountIdentifier = 1188,
    TriggerIdentifier = 1189,
    EventIdentifier = 1190,
    ParenthesizedExpression = 1191,
    BinaryExpression = 1192,
    UnaryExpression = 1193,
    ColumnExpression = 1194,
    FunctionCallExpression = 1195,
    RowExpression = 1196,
    MacroCallExpression = 1197,
    CaseIfExpression = 1198,
    CaseSwitchExpression = 1199,
    CaseBranch = 1200,
    MatchExpression = 1201,
    NullLiteral = 1202,
    BooleanLiteral = 1203,
    StringLiteral = 1204,
    HexLiteral = 1205,
    BitLiteral = 1206,
    IntegerLiteral = 1207,
    DecimalLiteral = 1208,
    RealLiteral = 1209,
    ParamMarker = 1210,
    DataTypeList = 1211,
    DeclareFunctionParameterList = 1212,
    ArgumentList = 1213,
    AssignmentList = 1214,
    CaseBranchList = 1215,
    CreateTableDefinitionList = 1216,
    IdentifierList = 1217,
    IntoOptionVariableList = 1218,
    JoinDefinitionList = 1219,
    SelectItemList = 1220,
    SourceElementList = 1221,
    ColumnIdentifierList = 1222,
    OrderItemList = 1223,
    IndexPartList = 1224,
    StringList = 1225,
    TableIdentifierList = 1226,
    ListPartitionDefinitionList = 1227,
    RangePartitionDefinitionList = 1228,
    ExpressionList = 1229,
    ExpressionListList = 1230,
    SubPartitionDefinitionList = 1231,
    ExpressionOrMaxValueList = 1232,
    OrderExprList = 1233,
    TableReferenceList = 1234,
    IndexHintDefinitionList = 1235,
    KeyUsageList = 1236,
    GroupingExprList = 1237,
    StoredProcedureStatementList = 1238,
    ElseIfList = 1239,
    FetchIdentifierList = 1240,
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

