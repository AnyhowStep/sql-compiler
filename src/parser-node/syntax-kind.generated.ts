export enum SyntaxKind {
    UnknownSyntax = 1000,
    UnknownStatement = 1001,
    UnknownExpression = 1002,
    BitDataType = 1003,
    BooleanDataType = 1004,
    IntegerDataType = 1005,
    DecimalDataType = 1006,
    RealDataType = 1007,
    JsonDataType = 1008,
    CharacterDataType = 1009,
    TextDataType = 1010,
    BinaryDataType = 1011,
    BlobDataType = 1012,
    DateTimeDataType = 1013,
    YearDataType = 1014,
    DateDataType = 1015,
    TimeDataType = 1016,
    TimestampDataType = 1017,
    GeometryDataType = 1018,
    GeometryCollectionDataType = 1019,
    EnumDataType = 1020,
    SetDataType = 1021,
    UnionDataType = 1022,
    UnknownDataType = 1023,
    SourceFileLite = 1024,
    SourceFile = 1025,
    Program = 1026,
    DelimiterStatement = 1027,
    CurrentTimestamp = 1028,
    DefaultCollation = 1029,
    DefaultCharacterSet = 1030,
    FieldLength = 1031,
    Precision = 1032,
    CreateSchemaStatement = 1033,
    CreateSchemaOptionList = 1034,
    CreateTableStatement = 1035,
    ColumnDefinition = 1036,
    GeneratedDefinition = 1037,
    ForeignKeyReferenceDefinition = 1038,
    IndexDefinition = 1039,
    IndexPart = 1040,
    PrimaryKeyDefinition = 1041,
    ForeignKeyDefinition = 1042,
    CheckDefinition = 1043,
    CreateTableOptions = 1044,
    SetStatement = 1045,
    Assignment = 1046,
    SelectStatement = 1047,
    SelectExpression = 1048,
    AsteriskSelectExpression = 1049,
    IntoOption = 1050,
    NamedTableReference = 1051,
    DerivedTableReference = 1052,
    FromClause = 1053,
    JoinDefinition = 1054,
    UsingClause = 1055,
    OnClause = 1056,
    GroupByClause = 1057,
    OrderByClause = 1058,
    OrderItem = 1059,
    LimitClause = 1060,
    DeclareFunctionStatement = 1061,
    DeclareFunctionParameter = 1062,
    CreateMacroStatement = 1063,
    Identifier = 1064,
    UserVariableIdentifier = 1065,
    SystemVariableIdentifier = 1066,
    TableIdentifier = 1067,
    ColumnIdentifier = 1068,
    FunctionIdentifier = 1069,
    MacroIdentifier = 1070,
    ParenthesizedExpression = 1071,
    BinaryExpression = 1072,
    UnaryExpression = 1073,
    ColumnExpression = 1074,
    FunctionCallExpression = 1075,
    RowExpression = 1076,
    MacroCallExpression = 1077,
    CaseIfExpression = 1078,
    CaseSwitchExpression = 1079,
    CaseBranch = 1080,
    MatchExpression = 1081,
    NullLiteral = 1082,
    BooleanLiteral = 1083,
    StringLiteral = 1084,
    HexLiteral = 1085,
    BitLiteral = 1086,
    IntegerLiteral = 1087,
    DecimalLiteral = 1088,
    RealLiteral = 1089,
    DataTypeList = 1090,
    DeclareFunctionParameterList = 1091,
    ArgumentList = 1092,
    AssignmentList = 1093,
    CaseBranchList = 1094,
    CreateTableDefinitionList = 1095,
    IdentifierList = 1096,
    IntoOptionVariableList = 1097,
    JoinDefinitionList = 1098,
    SelectExpressionList = 1099,
    SourceElementList = 1100,
    ColumnIdentifierList = 1101,
    OrderItemList = 1102,
    IndexPartList = 1103,
    StringList = 1104,
}

//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
export const syntaxKinds = [
    "UnknownSyntax",
    "UnknownStatement",
    "UnknownExpression",

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

] as const;

