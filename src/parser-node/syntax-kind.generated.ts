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
    SetStatement = 1044,
    Assignment = 1045,
    SelectStatement = 1046,
    SelectExpression = 1047,
    AsteriskSelectExpression = 1048,
    IntoOption = 1049,
    NamedTableReference = 1050,
    DerivedTableReference = 1051,
    FromClause = 1052,
    JoinDefinition = 1053,
    UsingClause = 1054,
    OnClause = 1055,
    GroupByClause = 1056,
    OrderByClause = 1057,
    OrderItem = 1058,
    LimitClause = 1059,
    DeclareFunctionStatement = 1060,
    DeclareFunctionParameter = 1061,
    CreateMacroStatement = 1062,
    Identifier = 1063,
    UserVariableIdentifier = 1064,
    SystemVariableIdentifier = 1065,
    TableIdentifier = 1066,
    ColumnIdentifier = 1067,
    FunctionIdentifier = 1068,
    MacroIdentifier = 1069,
    ParenthesizedExpression = 1070,
    BinaryExpression = 1071,
    UnaryExpression = 1072,
    ColumnExpression = 1073,
    FunctionCallExpression = 1074,
    RowExpression = 1075,
    MacroCallExpression = 1076,
    CaseIfExpression = 1077,
    CaseSwitchExpression = 1078,
    CaseBranch = 1079,
    MatchExpression = 1080,
    NullLiteral = 1081,
    BooleanLiteral = 1082,
    StringLiteral = 1083,
    HexLiteral = 1084,
    BitLiteral = 1085,
    IntegerLiteral = 1086,
    DecimalLiteral = 1087,
    RealLiteral = 1088,
    DataTypeList = 1089,
    DeclareFunctionParameterList = 1090,
    ArgumentList = 1091,
    AssignmentList = 1092,
    CaseBranchList = 1093,
    CreateTableDefinitionList = 1094,
    IdentifierList = 1095,
    IntoOptionVariableList = 1096,
    JoinDefinitionList = 1097,
    SelectExpressionList = 1098,
    SourceElementList = 1099,
    ColumnIdentifierList = 1100,
    OrderItemList = 1101,
    IndexPartList = 1102,
    StringList = 1103,
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

